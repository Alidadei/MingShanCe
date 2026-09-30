#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""增量补充「驴友说」真实评价 → js/data.js 的 ENRICH 块。

用法：
    python scripts/add_reviews.py new_quotes.json

输入 JSON 为数组，每项：
    {"id": "taishan",            # data.js MOUNTAINS 里的山 id
     "t":  "……",                 # 逐字引用（必须是出处正文原句，上线前人工点开 u 核对）
     "who": "游记作者某某",        # 署名，按页面原文；无则写「驴友」
     "s":  "文章标题",            # 出处标题
     "u":  "https://…",          # 出处 URL
     "d":  "2026-09-30"}         # 发布日期，无则 null

注意：ENRICH 块必须保持在 data.js 文件末尾且为合法 JSON（键带双引号）。
"""
import io
import json
import sys

DATA = 'js/data.js'
MARK = 'const ENRICH = '
KEYS = ('t', 'who', 's', 'u', 'd')


def main(path):
    with io.open(path, encoding='utf-8') as f:
        items = json.load(f)
    with io.open(DATA, encoding='utf-8') as f:
        src = f.read()
    i = src.index(MARK)
    tail = src[i + len(MARK):].rstrip()
    if not tail.endswith(';'):
        sys.exit('ENRICH 块格式变化（块后还有代码？），请检查 data.js')
    enrich = json.loads(tail[:-1])
    for q in items:
        if q['id'] not in enrich and q['id'] not in src[:i]:
            sys.exit(f'未知山 id: {q["id"]}')
        e = enrich.setdefault(q['id'], {})
        e.setdefault('reviews', []).append({k: q.get(k) for k in KEYS})
    out = src[:i] + MARK + json.dumps(enrich, ensure_ascii=False, indent=2) + ';\n'
    with io.open(DATA, 'w', encoding='utf-8', newline='') as f:
        f.write(out)
    covered = sum(1 for e in enrich.values() if e.get('reviews'))
    print(f'已追加 {len(items)} 条；当前有评价的山：{covered}')


if __name__ == '__main__':
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
