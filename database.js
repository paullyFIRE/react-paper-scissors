const mysql = require('mysql');
const { queries } = require('./database-queries');

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
        return this.queryDatabase(queries.postGame(randomScore, "1"));
    }

    getGames() {
        return this.queryDatabase(queries.getGames);
    }

    getPlayers() {
        return this.queryDatabase(queries.getPlayers);
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