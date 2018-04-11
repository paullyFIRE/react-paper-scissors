// http://www.datchley.name/es6-promises/

const express = require('express');
const bodyParser = require('body-parser');
const { Database } = require('./controllers/database');
const path = require('path');

const port = 80;

const db = new Database();
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/dist/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
});

app.post('/games/post', (req, res) => {
    const game = {
        player: req.body.username,
        roundsWin: req.body.roundsWin,
        roundsLose: req.body.roundsLose,
        roundsDraw: req.body.roundsDraw,
        score: req.body.score
    }

    const query = db.postGame(game);
    query.then(resp => res.send(resp))
    .catch(err => res.send(err))
});

app.get('/games/all', (req, res) => {
    const query = db.getGames();
    query.then(resp => res.send(resp))
    .catch(err => res.send(err))
});

app.get('/games/leaderboard', (req, res) => {
    const query = db.getLeaderboard();
    query.then(resp => res.send(resp))
    .catch(err => res.send(err))
});

app.listen(port, () => console.log(`Basic server listening on port ${port}!`));