// import generateAction from './api/generate';

const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

// client.on('message', message => {
//     console.log(generateAction.);
//     client.sendMessage(message.from, 'Hi Shreya Agarwal, How are you?'); // send a new message as a reply to the current one
//     if (message.body === 'Hello') {
//         message.reply('Hi Shreya Agarwal, How are you?');
//     }
// });

client.on('message', message => {
    console.log(message.body);
    // client.sendMessage(message.from, 'Hi Shreya Agarwal, How are you?'); // send a new message as a reply to the current one
    if (message.body === 'Hello') {
        message.reply('Hi, Trivia-GPT at your service!');
    }
});


// writing the bot logic
// client.on('message', message => {
//     if (message.body === 'Hello') {
//         message.reply('Hi Shreya Agarwal, How are you?');
//     }
// });