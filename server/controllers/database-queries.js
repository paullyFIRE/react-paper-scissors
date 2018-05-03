const queries = {
  postGame: game => {
    return `
            INSERT INTO Games (gameID, username, rounds_win, rounds_lose, score, date)
            VALUES (NULL, '${game.player}', 
                ${game.roundsWin}, 
                ${game.roundsLose},
                ${game.score}, 
                CURRENT_TIMESTAMP);
            `;
  },
  getGames: `
            SELECT gameID, username, rounds_win, rounds_lose, score, DATE_FORMAT(date, '%m/%d/%Y %H:%i') as date 
            FROM Games
            ORDER BY date DESC
            LIMIT 25;
        `,
  getLeaderboard: `
            SELECT gameID, username, rounds_win, rounds_lose, score, DATE_FORMAT(date, '%m/%d/%Y %H:%i') as date
            FROM Games
            ORDER BY score DESC
            LIMIT 5;
        `
};

module.exports = queries;
