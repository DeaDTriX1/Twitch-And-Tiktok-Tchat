const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { TikTokLiveConnection } = require('tiktok-live-connector');
const tmi = require('tmi.js');
const CONFIG = require('./config.js');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

server.listen(CONFIG.port, () => {
    console.log(`🌐 Serveur web démarré : http://localhost:${CONFIG.port}`);
});

function getTikTokUsername(data) {
    return (
        data.uniqueId ||
        data.nickname ||
        data.user?.uniqueId ||
        data.user?.nickname ||
        "Inconnu"
    );
}

const tiktokLiveConnection = new TikTokLiveConnection(CONFIG.tiktokUsername);
tiktokLiveConnection.connect()
    .then(() => console.log(`🎉 Connecté au live TikTok de @${CONFIG.tiktokUsername}`))
    .catch(err => console.error('❌ Erreur de connexion TikTok:', err.message));

tiktokLiveConnection.on('chat', data => {
    const username = getTikTokUsername(data);
    const message = { platform: 'TikTok', username, text: data.comment };
    io.emit('chat-message', message);
});

tiktokLiveConnection.on('gift', data => {
    const username = getTikTokUsername(data);
    const message = { platform: 'TikTok', username, text: `a envoyé: ${data.giftName} x${data.repeatCount}` };
    io.emit('chat-message', message);
});

const twitchClient = new tmi.Client({
    options: { debug: false },
    connection: { reconnect: true },
    channels: [CONFIG.twitchChannel]
});

twitchClient.connect()
    .then(() => console.log(`🎮 Connecté au chat Twitch de #${CONFIG.twitchChannel}`))
    .catch(err => console.error('❌ Erreur connexion Twitch:', err.message));

twitchClient.on('message', (channel, tags, message, self) => {
    if (self) return;
    const username = tags['display-name'] || tags.username || "Inconnu";
    io.emit('chat-message', { platform: 'Twitch', username, text: message });
});
