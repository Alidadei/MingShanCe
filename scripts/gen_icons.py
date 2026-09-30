#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""重绘应用图标：千里江山图一角——绢本底 + 石青石绿层峦 + 金色日轮。
输出：img/icon-192.png / icon-512.png（圆角 any）、icon-maskable-512.png（全出血）、
     apple-touch-icon.png（180 全出血，iOS 自行裁角）。4x 超采样抗锯齿。"""
from PIL import Image, ImageDraw, ImageFilter

S = 4  # 超采样倍数

SILK = (243, 238, 221, 255)        # 绢本
SILK_HI = (250, 246, 233, 255)     # 绢本高光（上缘）
AZURE = (46, 111, 130, 255)        # 石青（远山）
PINE_SOFT = (61, 133, 115, 255)    # 石绿（中景）
PINE_DEEP = (20, 63, 54, 255)      # 深石绿（近坡）
GOLD = (217, 165, 20, 255)         # 日轮
BORDER = (176, 139, 62, 255)       # 金边

# 三层山：-(中心u, 峰顶u(离顶), 半宽u)，前层后画
LAYERS = [
    ((0.34, 0.30, 0.30), AZURE),
    ((0.66, 0.46, 0.36), PINE_SOFT),
    ((0.42, 0.68, 0.55), PINE_DEEP),
]


def draw_scene(d, size, inset):
    W = H = size
    m = inset * W
    cw = W - 2 * m

    def px(u):
        return m + u * cw

    # 日轮（右上，收在 maskable 40% 安全区内）
    sr = 0.06 * cw
    c = (px(0.72), px(0.20))
    d.ellipse([c[0] - sr, c[1] - sr, c[0] + sr, c[1] + sr], fill=GOLD)

    # 层峦：钟形山脊（峰顶平滑、坡面抛物线）
    N = 180
    for (cx, apex, hw), color in LAYERS:
        pts = []
        for i in range(N + 1):
            u = i / N
            t = abs(u - cx) / hw
            yy = min(1.08, apex + (1.0 - apex) * t * t)
            pts.append((u * W, yy * H))
        pts += [(W, H), (0, H)]
        d.polygon(pts, fill=color)


def rounded_canvas(big):
    img = Image.new('RGBA', (big, big), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, big - 1, big - 1], radius=big * 0.22, fill=SILK)
    return d, img


def gen_any(size):
    big = size * S
    d, img = rounded_canvas(big)
    draw_scene(d, big, inset=0.05)
    d.rounded_rectangle([0, 0, big - 1, big - 1], radius=big * 0.22,
                        outline=BORDER, width=big // 128)
    return img.resize((size, size), Image.LANCZOS)


def gen_fullbleed(size):
    big = size * S
    img = Image.new('RGBA', (big, big), SILK)
    d = ImageDraw.Draw(img)
    draw_scene(d, big, inset=0.11)
    img = img.resize((size, size), Image.LANCZOS)
    return img.convert('RGB')


gen_any(512).save('img/icon-512.png')
gen_any(192).save('img/icon-192.png')
gen_fullbleed(512).save('img/icon-maskable-512.png')
gen_fullbleed(180).save('img/apple-touch-icon.png')
print('icons regenerated: 192/512/maskable/apple-touch')
