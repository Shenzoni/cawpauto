## UBUNTU INSTALLATION
**A. In termux home :** ~ $
```
apt update && apt upgrade -y && apt install proot-distro -y && proot-distro install ubuntu && proot-distro login ubuntu
```
## UBUNTU SETUP
1. Update & Upgrade
```
apt update && apt upgrade -y
apt install git curl wget ca-certificates gnupg -y
```
2. Install NodeJS LTS
```
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt install nodejs -y
```
3. Install required dependency
```
apt install -y \
fonts-liberation libatk-bridge2.0-0 libatk1.0-0 libcups2 libdrm2 libgbm1 \
libnspr4 libnss3 libx11-xcb1 libxcomposite1 libxdamage1 libxrandr2 \
xdg-utils libcups2t64
```
4. Modify the apt
```
cat <<EOF > /etc/apt/sources.list.d/debian-bookworm.list
deb [signed-by=/usr/share/keyrings/debian-bookworm.gpg] http://deb.debian.org/debian bookworm main contrib non-free non-free-firmware
EOF
```
5. Conversation GPG Key
```
curl -fsSL https://ftp-master.debian.org/keys/archive-key-12.asc \
| gpg --dearmor -o /usr/share/keyrings/debian-bookworm.gpg
```
6. Install chromium (unbrowser)
```
apt update
apt purge -y chromium-browser || true
rm -f /usr/bin/chromium-browser
apt install -y chromium
ln -sf /usr/bin/chromium
/usr/bin/chromium-browser
```
7. Clone my repository & open the folder
```
git clone https://github.com/Shenzoni/cawpauto
cd cawpauto
```
8. Install npm package
```
npm init -y
npm install whatsapp-web.js qrcode-terminal axios puppeteer-core readline crypto fs csv-parser
```

Setup done 👍
