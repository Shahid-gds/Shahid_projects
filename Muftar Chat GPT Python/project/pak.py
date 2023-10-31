import sys
import subprocess

# implement pip as a subprocess:

' -m pip install --upgrade pip' 
# subprocess.check_call([sys.executable, '/home/mufttjdy/virtualenv/granddigitals.com/3.9/bin/python3.9_bin', '-m', 'pip','install', '--upgrade', 'pip'])
subprocess.check_call([sys.executable, '-m', 'pip', 'install','openai'])