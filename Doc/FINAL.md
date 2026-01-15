## FINAL STEP

STEP 1:
```
apt install -y nodejs
curl -fsSL https://deb.nodesource.com/setup_20.x | bash
```

Type in bash:
``nano ~/.bashrc``

Go to last line and create new line then paste this:
```
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
export CHROME_PATH=/usr/bin/chromium
```
![IMG](/img/bash.jpg)
``CTRL+x ,Y ,ENTER`` to save the file

Type in bash:
``source ~/.bashrc`` To reload your screen
