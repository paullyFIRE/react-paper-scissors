// http://www.datchley.name/es6-promises/

const express = require('express');
const mysql = require('mysql');
const { Database } = require('./database');

const port = 3000;

const db = new Database();

const app = express();

app.get('/api/games/', (req, res) => {
    let gameLog = db.getGames();
    console.log(gameLog);
    res.send('Hello, World!')
});

app.get('/api/leaderboard/', (req, res) => {
    res.send(`We got ${req}`)
});

app.post('/api/player/', (req, res) => {
    res.send('Hello, World!')
});

app.listen(port, () => console.log(`Basic server listening on port ${port}!`));