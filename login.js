const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const SESSION_NAME = process.argv[2];
if (!SESSION_NAME) {
    console.log('Pakai: node login.js cs1');
    process.exit();
}

const client = new Client({
    authStrategy: new LocalAuth({
        clientId: SESSION_NAME,
        dataPath: './sessions'
    }),
    puppeteer: { headless: true, args: ['--no-sandbox'] }
});

client.on('qr', qr => {
    console.log(`\nSCAN QR UNTUK SESSION: ${SESSION_NAME}\n`);
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log(`SESSION ${SESSION_NAME} BERHASIL LOGIN & TERSIMPAN`);
});

client.initialize();
