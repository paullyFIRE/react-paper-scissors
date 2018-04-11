// http://www.datchley.name/es6-promises/

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { Database } = require('./database');

const port = 3000;

const db = new Database();
const app = express();

app.use(bodyParser.json());

app.post('/api/player/auth', (req, res) => {
    console.log(req.body);
    /* 
    Test for existing player by username and code
    if username not present, create new entry, success
    else auth code against username, success else failure
    */

    res.send({'success': 1});
});

app.get('/api/players/', (req, res) => {
    let gameLog = db.getPlayers();
    gameLog.then(resp => {
        res.send(resp);
        console.log(resp);
    })
    .catch(err => {
        console.log(err);
    })
});

app.post('/api/games/', (req, res) => {
    let gameLog = db.postGame();
    gameLog.then(resp => {
        res.send(resp);
        console.log(resp);
    })
    .catch(err => {
        console.log(err);
    })
});

app.get('/api/leaderboard/', (req, res) => {
    res.send(`We got ${req}`)
});

app.post('/api/player/', (req, res) => {
    res.send('Hello, World!')
});

app.listen(port, () => console.log(`Basic server listening on port ${port}!`));