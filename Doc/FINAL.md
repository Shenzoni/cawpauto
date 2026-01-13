## FINAL STEP

STEP 1:
```
curl -fsSL https://deb.nodesource.com/setup_20.x | bash
```
```
apt install -y nodejs
```

Type in bash:
``nano ~/.bashrc``

Go to last line and create new line then paste this:
```
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
export CHROME_PATH=/usr/bin/chromium
```
![IMG](img/bash.img)
``CTRL+x ,Y ,ENTER`` to save the file

Type in bash:
``source ~/.bashrc``
