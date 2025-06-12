// sfu/src/server.js
const WebSocket = require('ws');

// 全インターフェイスでポート3001をリッスン
const wss = new WebSocket.Server({ host: '0.0.0.0', port: 3001 });

console.log('SFU placeholder running on 3001');

wss.on('connection', ws => {
  ws.on('message', msg => console.log('Received:', msg));
  ws.send('pong');
});
