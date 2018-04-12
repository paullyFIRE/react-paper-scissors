const queries = {
    postGame: (game) => {
        return (`
            INSERT INTO Games (gameID, username, rounds_win, rounds_lose, rounds_draw, score, date)
            VALUES (NULL, '${game.player}', 
                ${game.roundsWin}, 
                ${game.roundsLose}, 
                ${game.roundsDraw}, 
                ${game.score}, 
                CURRENT_TIMESTAMP);
            `);
    },
    getGames: `
            SELECT * 
            FROM Games
            ORDER BY date DESC;
        `,
    getLeaderboard: `
            SELECT *
            FROM Games
            ORDER BY score DESC
            LIMIT 5;
        `
};

module.exports = queries;