const express = require('express');
const router = express.Router();
const Database = require('../controllers/database'); 

const db = new Database();

router.post('/post', (req, res) => {
    const game = {
        player: req.body.username,
        roundsWin: req.body.roundsWin,
        roundsLose: req.body.roundsLose,
        roundsDraw: req.body.roundsDraw,
        score: req.body.score
    };

    const query = db.postGame(game);
    query.then(resp => res.send(resp))
    .catch(err => res.send(err));
});

router.get('/all', (req, res) => {
    const query = db.getGames();
    query.then(resp => res.send(resp))
    .catch(err => res.send(err));
});

router.get('/leaderboard', (req, res) => {
    const query = db.getLeaderboard();
    query.then(resp => res.send(resp))
    .catch(err => res.send(err));
});

module.exports = router;