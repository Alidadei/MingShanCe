# -*- coding: utf-8 -*-
"""img/ 图片压缩管线
1) 把 fetch_photos.py 下载的 jpg 转成 webp（主图最宽 1080/q72，相册图最宽 900/q66）
2) 顺手把现有超 160KB 的 webp 二次压缩（质量 66 重编码，宽不变）
用法: python scripts/to_webp.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / "img"
BIG = 160 * 1024  # 超过该体积的现有 webp 视为偏大


def convert_one(jpg: Path, max_w: int, q: int) -> Path:
    out = jpg.with_suffix(".webp")
    im = Image.open(jpg)
    if im.mode in ("RGBA", "P"):
        im = im.convert("RGB")
    if im.width > max_w:
        im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
    im.save(out, "WEBP", quality=q, method=6)
    print(f"  {jpg.name} -> {out.name} {out.stat().st_size // 1024}KB")
    jpg.unlink()
    return out


def recompress(webp: Path) -> None:
    old = webp.stat().st_size
    im = Image.open(webp)
    if im.width > 1080:
        im = im.resize((1080, round(im.height * 1080 / im.width)), Image.LANCZOS)
    tmp = webp.with_suffix(".tmp.webp")
    im.save(tmp, "WEBP", quality=66, method=6)
    if tmp.stat().st_size < old * 0.92:  # 至少省 8% 才替换
        tmp.replace(webp)
        print(f"  {webp.name} {old // 1024}KB -> {webp.stat().st_size // 1024}KB")
    else:
        tmp.unlink()
        print(f"  {webp.name} 已够小，跳过")


def main():
    jpgs = sorted(IMG.glob("*.jpg"))
    print(f"新图转换：{len(jpgs)} 张 jpg")
    for jpg in jpgs:
        m = jpg.stem.rsplit("-", 1)
        is_album = len(m) == 2 and m[1].isdigit()
        convert_one(jpg, 900 if is_album else 1080, 66 if is_album else 72)

    bigs = [p for p in IMG.glob("*.webp")
            if p.stat().st_size > BIG and "qianli" not in p.name]
    print(f"现有大图二次压缩：{len(bigs)} 张")
    for p in sorted(bigs, key=lambda x: -x.stat().st_size):
        recompress(p)

    total = sum(p.stat().st_size for p in IMG.glob("*.webp"))
    print(f"img/ webp 总体积：{total // 1024}KB")


if __name__ == "__main__":
    main()
