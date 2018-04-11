const mysql = require('mysql');

class Database {
    constructor() {
        this.pool = mysql.createPool({
            host: "35.184.253.121",
            user: "root",
            password: "Dawg0847178971@#$",
            database: "rpc"
        });
    }

    postGame() {
        const randomScore = Math.floor(Math.random()*100)*100;
        const query = `
            INSERT INTO Games (GameID, Score, PlayerID, date)
            VALUES (NULL, ${randomScore}, 1, CURRENT_TIMESTAMP);
            `;

        return this.queryDatabase(query);
    }

    getGames() {
        const query = `
            SELECT * 
            FROM Games
            ORDER BY date DESC;
            `;

        return this.queryDatabase(query);
    }

    getPlayers() {
        const query = `
            SELECT * 
            FROM Players
            `;

        return this.queryDatabase(query);
    }

    queryDatabase(queryStatement) {
        return new Promise ((resolve, reject) => {
            this.pool.getConnection((err, con) => {
                if (err) reject(err);

                this.pool.query(queryStatement, (err, resp) => {
                    if (err) reject(err);
    
                    this.pool.releaseConnection(con);
                    resolve(resp);
                });
            })
        });
    }
}

module.exports = { Database };