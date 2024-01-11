require('dotenv').config();
const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions} = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on("ready", () => {
    console.log("Bot system ready!");
    client.user.setActivity("Bot is Active");
})

client.login(process.env.TOKEN);