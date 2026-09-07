#!/usr/bin/env python3
"""
Gupta Enterprises - Local Development & Production Preview Server
Runs on Python 3 standard library with CORS and no-cache headers.
"""

import http.server
import socketserver
import os
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Prefer dist directory if build exists, otherwise serve root (or public)
DIST_DIR = os.path.join(BASE_DIR, "dist")
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
DIRECTORY = DIST_DIR if os.path.exists(DIST_DIR) else BASE_DIR

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Resolve target file path
        path = self.translate_path(self.path)
        # If the file does not exist and has no static extension, fallback to index.html for SPA routing
        if not os.path.exists(path) and not any(self.path.endswith(ext) for ext in [".js", ".css", ".png", ".jpg", ".svg", ".ico", ".woff2", ".json"]):
            self.path = "/index.html"
        return super().do_GET()

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
    socketserver.TCPServer.allow_reuse_address = True
    
    target_dir = DIRECTORY
    with socketserver.TCPServer(("", port), Handler) as httpd:
        print("==================================================")
        print("  GUPTA ENTERPRISES - Distributor Web Application")
        print(f"  --> Serving from: {target_dir}")
        print(f"  --> Local URL:    http://localhost:{port}")
        print("  Press Ctrl+C to stop the server")
        print("==================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    main()
