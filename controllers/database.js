const mysql = require('mysql');
const queries = require('./database-queries');

class Database {
    constructor() {
        this.pool = mysql.createPool({
            host: "35.184.253.121",
            user: "root",
            password: "Dawg0847178971@#$",
            database: "rpc"
        });
    }

    postGame(game) {
        return this.queryDatabase(queries.postGame(game));
    }

    getGames() {
        return this.queryDatabase(queries.getGames);
    }

    getLeaderboard() {
        return this.queryDatabase(queries.getLeaderboard);
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

module.exports = Database;