# Sat Finder Pro AI - Gunicorn Configuration
# الإصدار 4.1.0

import multiprocessing
import os

# Server Socket
bind = "0.0.0.0:5000"
backlog = 2048

# Worker Processes
workers = multiprocessing.cpu_count() * 2 + 1
worker_class = "gevent"
worker_connections = 1000
timeout = 120
keepalive = 5

# Process Naming
proc_name = "satfinder"
pythonpath = "/var/www/sat-finder-pro-ai"

# Logging
accesslog = "/var/log/satfinder/gunicorn-access.log"
errorlog = "/var/log/satfinder/gunicorn-error.log"
loglevel = "info"
access_log_format = '%(h)s %(l)s %(u)s %(t)s "%(r)s" %(s)s %(b)s "%(f)s" "%(a)s" %(D)s'

# Process Management
daemon = False
pidfile = "/var/run/satfinder.pid"
user = "www-data"
group = "www-data"
umask = 0o022

# Security
limit_request_line = 4094
limit_request_fields = 100
limit_request_field_size = 8190

# Performance
max_requests = 1000
max_requests_jitter = 50
preload_app = True

# Server Mechanics
raw_env = [
    'FLASK_ENV=production',
    'PYTHONPATH=/var/www/sat-finder-pro-ai'
]

# SSL (if not using proxy)
# keyfile = "/etc/letsencrypt/live/satfinder.example.com/privkey.pem"
# certfile = "/etc/letsencrypt/live/satfinder.example.com/fullchain.pem"

# Hooks
def on_starting(server):
    """Called when Gunicorn starts"""
    print("🚀 Sat Finder Pro AI - Gunicorn Server Starting...")

def on_reload(server):
    """Called when Gunicorn reloads"""
    print("🔄 Sat Finder Pro AI - Gunicorn Server Reloading...")

def on_exit(server):
    """Called when Gunicorn exits"""
    print("🛑 Sat Finder Pro AI - Gunicorn Server Stopped.")

def worker_int(worker):
    """Called when a worker receives SIGINT"""
    print(f"⚠️ Worker {worker.pid} interrupted")

def worker_abort(worker):
    """Called when a worker times out"""
    print(f"❌ Worker {worker.pid} aborted due to timeout")
