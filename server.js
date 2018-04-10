// http://www.datchley.name/es6-promises/

const express = require('express');
const mysql = require('mysql');
const db = require('./database');

const port = 3000;

connection = db.connect();
let query = db.getGames(connection);

const app = express();

app.get('/api/scores/', (req, res) => {
    res.send('Hello, World!')
});

app.get('/api/leaderboard/', (req, res) => {
    res.send(`We got ${req}`)
});

app.post('/api/player/', (req, res) => {
    res.send('Hello, World!')
});

app.listen(port, () => console.log(`Basic server listening on port ${port}!`));