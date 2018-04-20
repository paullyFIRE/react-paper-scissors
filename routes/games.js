const express = require('express');
const router = express.Router();
const Database = require('../controllers/database');

const db = new Database();

router.post('/post', (req, res) => {
  const game = {
    player: req.body.username,
    roundsWin: req.body.roundsWin,
    roundsLose: req.body.roundsLose,
    score: req.body.score
  };

  const query = db.postGame(game);
  query.then(resp => res.send({ success: 1 })).catch(err => res.send({ success: 0 }));
});

router.get('/all', (req, res) => {
  const query = db.getGames();
  query.then(data => res.send({ success: 1, data: data })).catch(err => res.send({ success: 0 }));
});

router.get('/leaderboard', (req, res) => {
  const query = db.getLeaderboard();
  query.then(data => res.send({ success: 1, data: data })).catch(err => res.send({ success: 0 }));
});

module.exports = router;
