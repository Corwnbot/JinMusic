const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const token = "MTIxMjg4Mzk5Njk2NzU2NzQwMg.GBC3pV.twBoF5aDTgUwrdlVpxPv9mO71L4ZsOZSE11a48";

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Your command handling code here
});

client.login(token);
