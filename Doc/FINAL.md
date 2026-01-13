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
![IMG](/img/bash.jpg)
``CTRL+x ,Y ,ENTER`` to save the file

Type in bash:
``source ~/.bashrc`` To reload your screen


## TO RUN THE SCRIPT
1. COPY & PASTE this code on bash
```
git clone https://github.com/Shenzoni/Autochat_Whataxx
```

2. COPY & PASTE this code on bash
```
cd Autochat_Whataxx
node login.js cs1
```

Change cs1 to cs2 and so on after finishing creating the session
example :
Login for c1 done
you need to run login.js cs2
