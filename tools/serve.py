#!/usr/bin/env python3
"""Minimal static file server for local preview.

This machine has no Node toolchain, and `python3 -m http.server`
resolves its default directory from os.getcwd(), which some sandboxes
refuse. Serving an explicit directory avoids that entirely.

    python3 tools/serve.py [port]
"""
import functools
import http.server
import os
import socketserver
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 4321


class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Never cache during development.
        self.send_header("Cache-Control", "no-store, max-age=0")
        super().end_headers()

    def log_message(self, fmt, *args):
        sys.stderr.write("%s %s\n" % (self.address_string(), fmt % args))


socketserver.TCPServer.allow_reuse_address = True
handler = functools.partial(Handler, directory=ROOT)

with socketserver.TCPServer(("127.0.0.1", PORT), handler) as httpd:
    sys.stderr.write("serving %s at http://127.0.0.1:%d\n" % (ROOT, PORT))
    httpd.serve_forever()
