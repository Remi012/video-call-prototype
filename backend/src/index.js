// backend/src/index.js
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('バックエンド動いてます！'));
app.listen(4000, () => console.log('Backend: Port 4000 で起動中'));
