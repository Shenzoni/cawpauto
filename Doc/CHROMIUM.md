## CHROMIUM INSTALLATION 
• STEP 1: ``Copy the code then paste on termux``
```
apt update
apt purge -y chromium-browser || true
rm -f /usr/bin/chromium-browser
apt install -y chromium
ln -sf /usr/bin/chromium
/usr/bin/chromium-browser
```
• STEP 2: ``Copy the code then paste on termux``
```
which chromium
chromium --version
```
``Output: /usr/bin/Chromium``

``Output: 
Chromium 14xxx``

**CONGRATULATIONS 🎉 🎉**
