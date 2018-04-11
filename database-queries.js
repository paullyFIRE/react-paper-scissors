const queries = {
    	insertGame: (score, playerID) => {
            return `
            INSERT INTO Games (GameID, Score, PlayerID, date)
            VALUES (NULL, ${score}, ${playerID}, CURRENT_TIMESTAMP);
            `;
        },
        insertPlayer: (username, code) => {
            return `
                INSERT INTO Players (PlayerID, Username, Code)
                VALUES (Null, ${username}, ${code});
            `;
        },
        getGames: `
            SELECT * 
            FROM Games
            ORDER BY date DESC;
        `,
        getPlayers: `
            SELECT * 
            FROM Players
            ORDER BY PlayerID ASC;
        `,
        getPlayerUsername: (id) => {
            return `
                SELECT *
                FROM Players
                WHERE PlayerID = ${id};
            `;   
        },
        getPlayerID: (username) => {
            return `
                SELECT PlayerID
                FROM Players
                WHERE Username = ${username};
            `;
        },
    
};

module.exports = { queries }