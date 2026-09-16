# -*- coding: utf-8 -*-
"""生成 js/chinageo.js：中国地图简化轮廓（记录页江山舆图用）
源数据: 阿里 DataV GeoJSON 全国边界 https://geo.datav.aliyun.com/areas_v3/bound/100000.json
流程: 下载(或读缓存 _china_raw.json) → 道格拉斯-普克简化 → 环按纬度拆主图/南海两组 → 输出 JS
用法: python scripts/gen_chinageo.py [--refetch]
"""
import json
import math
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "scripts" / "_china_raw.json"
OUT = ROOT / "js" / "chinageo.js"
URL = "https://geo.datav.aliyun.com/areas_v3/bound/100000.json"
SOUTH_LAT = 17.0   # minLat 低于此纬度的环归入南海诸岛插图组
TOL = 0.035        # DP 简化容差（度）
ROUND = 2          # 坐标小数位


def fetch():
    import urllib.request
    req = urllib.request.Request(URL, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    RAW.write_bytes(data)
    print(f"downloaded {len(data)} bytes -> {RAW.name}")


def dp_simplify(pts, tol):
    """道格拉斯-普克，返回保留点索引"""
    n = len(pts)
    if n <= 4:
        return list(range(n))
    keep = [False] * n
    keep[0] = keep[n - 1] = True

    def seg_dist(p, a, b):
        ax, ay = a; bx, by = b; px, py = p
        dx, dy = bx - ax, by - ay
        if dx == dy == 0:
            return math.hypot(px - ax, py - ay)
        t = max(0.0, min(1.0, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)))
        return math.hypot(px - (ax + t * dx), py - (ay + t * dy))

    stack = [(0, n - 1)]
    while stack:
        i, j = stack.pop()
        if j <= i + 1:
            continue
        dmax, idx = -1.0, -1
        for k in range(i + 1, j):
            d = seg_dist(pts[k], pts[i], pts[j])
            if d > dmax:
                dmax, idx = d, k
        if dmax > tol:
            keep[idx] = True
            stack.append((i, idx))
            stack.append((idx, j))
    return [i for i in range(n) if keep[i]]


def main():
    if "--refetch" in sys.argv or not RAW.exists():
        fetch()
    d = json.loads(RAW.read_text(encoding="utf-8"))
    geom = d["features"][0]["geometry"]
    assert geom["type"] == "MultiPolygon"
    main_rings, south_rings, dropped = [], [], 0
    for poly in geom["coordinates"]:
        ring = poly[0]  # 全国边界文件里全部是外环
        xs = [p[0] for p in ring]; ys = [p[1] for p in ring]
        tiny = (max(xs) - min(xs)) < 0.04 and (max(ys) - min(ys)) < 0.04 and len(ring) < 8
        if tiny:  # 过小的礁石点，保留意义不大
            dropped += 1
            continue
        idx = dp_simplify(ring, TOL) if len(ring) > 14 else list(range(len(ring)))
        slim = [[round(ring[i][0], ROUND), round(ring[i][1], ROUND)] for i in idx]
        (south_rings if min(ys) < SOUTH_LAT else main_rings).append(slim)
    pts = sum(len(r) for r in main_rings) + sum(len(r) for r in south_rings)
    body = json.dumps({"main": main_rings, "south": south_rings},
                      ensure_ascii=False, separators=(",", ":"))
    OUT.write_text(
        "/* 中国地图简化轮廓（自动生成，勿手改）：scripts/gen_chinageo.py\n"
        "   源: 阿里 DataV GeoJSON 全国边界（含海南/台湾/南海诸岛），"
        f"DP 容差 {TOL}°，{pts} 点 */\nconst CHINA_GEO = {body};\n",
        encoding="utf-8")
    print(f"main rings {len(main_rings)}, south rings {len(south_rings)}, "
          f"dropped tiny {dropped}, pts {pts}, size {OUT.stat().st_size // 1024}KB -> {OUT.name}")


if __name__ == "__main__":
    main()
