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
            SELECT gameID, username, rounds_win, rounds_lose, score, DATE_FORMAT(date, '%m/%d/%Y %H:%i') as date 
            FROM Games
            ORDER BY date DESC;
        `,
    getLeaderboard: `
            SELECT gameID, username, rounds_win, rounds_lose, score, DATE_FORMAT(date, '%m/%d/%Y %H:%i') as date
            FROM Games
            ORDER BY score DESC
            LIMIT 5;
        `
};

module.exports = queries;