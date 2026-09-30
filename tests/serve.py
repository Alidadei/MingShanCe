#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""本地调试服务器：修复 Windows 注册表缺失 .js/.webp 等 MIME 导致 SW 无法注册的问题。
用法：python tests/serve.py [port]  （默认 8933，绑定 127.0.0.1）"""
import http.server
import mimetypes
import sys

mimetypes.add_type('text/javascript', '.js')
mimetypes.add_type('text/javascript', '.mjs')
mimetypes.add_type('image/webp', '.webp')
mimetypes.add_type('application/manifest+json', '.webmanifest')

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8933


class Handler(http.server.SimpleHTTPRequestHandler):
    pass


if __name__ == '__main__':
    http.server.test(HandlerClass=Handler, port=port, bind='127.0.0.1')
