# -*- coding: utf-8 -*-
"""git push 被网络掐断时的 API 断点续传推送
用法: python scripts/api_push.py [branch]
原理: 本地提交树逐 blob 上传（远端已有的 sha 跳过=断点续传），再建 tree/commit，PATCH ref
"""
import base64
import json
import subprocess
import sys
import time
import urllib.error
import urllib.request

REPO = sys.argv[2] if len(sys.argv) > 2 else "Alidadei/ShanLuanCe"
BRANCH = sys.argv[1] if len(sys.argv) > 1 else "main"
PROXY = "http://127.0.0.1:7890"


def token():
    out = subprocess.run(["git", "credential", "fill"], input="protocol=https\nhost=github.com\n",
                         capture_output=True, text=True).stdout
    for line in out.splitlines():
        if line.startswith("password="):
            return line.split("=", 1)[1]
    raise SystemExit("拿不到 git 凭据")


TOKEN = token()


def api(path, payload=None, tries=6):
    last = None
    for attempt in range(tries):
        use_proxy = attempt % 2 == 1
        try:
            op = urllib.request.build_opener(urllib.request.ProxyHandler(
                {"http": PROXY, "https": PROXY} if use_proxy else {}))
            req = urllib.request.Request(f"https://api.github.com{path}",
                data=json.dumps(payload).encode() if payload is not None else None,
                headers={"Authorization": f"token {TOKEN}", "Accept": "application/vnd.github+json",
                         "User-Agent": "pashanqu-api-push"},
                method="POST" if payload is not None else "GET")
            with op.open(req, timeout=60) as r:
                return json.loads(r.read())
        except urllib.error.HTTPError as e:
            if e.code in (409, 404) and payload is None:
                return {}
            body = e.read().decode(errors="replace")[:200]
            last = RuntimeError(f"{e.code} {body}")
            if e.code < 500 and e.code != 403:
                raise last
            time.sleep(3 * (attempt + 1))
        except Exception as e:
            last = e
            time.sleep(2 * (attempt + 1))
    raise last


def local_tree():
    out = subprocess.run(["git", "ls-tree", "-r", "HEAD"], capture_output=True, text=True).stdout
    entries = []
    for line in out.splitlines():
        meta, path = line.split("\t")
        mode, typ, sha = meta.split()
        entries.append((path, sha))
    return entries


def main():
    head_local = subprocess.run(["git", "rev-parse", "HEAD"], capture_output=True, text=True).stdout.strip()
    print("本地提交:", head_local)
    ref = api(f"/repos/{REPO}/git/ref/heads/{BRANCH}")
    base_commit = ref["object"]["sha"]
    print("远端基点:", base_commit)
    base_tree = api(f"/repos/{REPO}/commits/{base_commit}")["commit"]["tree"]["sha"]

    entries = local_tree()
    tree_items, uploaded, skipped = [], 0, 0
    for i, (path, sha) in enumerate(entries):
        if api(f"/repos/{REPO}/git/blobs/{sha}") == {}:
            # 读仓库内原始字节（工作区可能是 CRLF，sha 会不一致）
            content = base64.b64encode(
                subprocess.run(["git", "cat-file", "blob", sha], capture_output=True).stdout
            ).decode()
            r = api("/repos/{REPO}/git/blobs".format(REPO=REPO), {"content": content, "encoding": "base64"}, tries=8)
            assert r["sha"] == sha, f"sha 不符 {path}"
            uploaded += 1
            print(f"  上传 {path} ({i+1}/{len(entries)})")
        else:
            skipped += 1
        tree_items.append({"path": path, "mode": "100644", "type": "blob", "sha": sha})

    tree = api(f"/repos/{REPO}/git/trees", {"base_tree": base_tree, "tree": tree_items})
    msg = subprocess.run(["git", "log", "-1", "--pretty=%B"], capture_output=True, text=True).stdout.strip()
    commit = api(f"/repos/{REPO}/git/commits", {"message": msg, "tree": tree["sha"], "parents": [base_commit]})
    api(f"/repos/{REPO}/git/refs/heads/{BRANCH}", {"sha": commit["sha"], "force": False})
    print(f"[done] 上传 {uploaded} 跳过 {skipped}，远端 {BRANCH} -> {commit['sha'][:10]}")


if __name__ == "__main__":
    main()
