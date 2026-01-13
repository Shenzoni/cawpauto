const { Client, LocalAuth } = require('whatsapp-web.js');
const fs = require('fs');
const csv = require('csv-parser');

const FOLLOWUP_TEXT = 'Halo kak, ini follow up dari kami ya 🙏';

fs.readdirSync('./sessions').forEach(folder => {
    initClient(folder.replace('session-', ''));
});

function initClient(name) {
    const client = new Client({
        authStrategy: new LocalAuth({
            clientId: name,
            dataPath: './sessions'
        }),
        puppeteer: { headless: true, args: ['--no-sandbox'] }
    });

    client.on('ready', () => {
        console.log(`AutoChat aktif: ${name}`);
        sendFollowUp(client);
    });

    client.initialize();
}

function sendFollowUp(client) {
    const numbers = [];                                                          
    fs.createReadStream('numbers.csv')
        .pipe(csv({ headers: false }))
        .on('data', row => numbers.push(Object.values(row)[0]))
        .on('end', async () => {
            for (let num of numbers) {
                const chatId = num + '@c.us';
                try {
                    const chat = await client.getChatById(chatId).catch(() => nu>
                    if (!chat) continue;

                    await client.sendMessage(chatId, FOLLOWUP_TEXT);
                    console.log('Terkirim:', num);
                    await delay(5000);
                } catch {}
            }
        });
}

const delay = ms => new Promise(r => setTimeout(r, ms));
