const Discord = require("discord.js");
require("dotenv").config();
const TOKEN = "OTMxNDcxMzIwODYzMDgwNTA5.YeE6RA.EuT3Y0BL9aTk9fqGTcGXaQ-OCKA";

const prefix = "?";
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);

    const cmd = args.shift().toLowerCase();

    if (cmd === "ts") {
        if (!args.length) {
            const now = Math.floor(new Date() / 1000);
            msg.channel.send(`<t:${now}>`);
        } else if (args.length < 4) {
            const time =
                Math.floor(new Date() / 1000) +
                args[0] * 3600 +
                args[1] * 60 +
                args[2] * 1;
            msg.channel.send(`<t:${time}>`);
        } else {
            msg.channel.send(`Please provide a proper time`);
        }
    } else if (cmd === "remind") {
        if (!args.length) {
            msg.channel.send(`Please provide a proper time and text`);
        } else {
            const time = args[0] * 3600 + args[1] * 60 + args[2] * 1;
            const text = args.slice(3).join(" ");
            const mention = () => {
                msg.mentions.users.forEach((user) => {
                    msg.channel.send(`To ${user}`);
                });
                msg.channel.send(
                    `Reminder by ${msg.author}\n${text}`
                );
            };
            setTimeout(mention, time * 1000);
        }
    }
});

client.login(TOKEN);