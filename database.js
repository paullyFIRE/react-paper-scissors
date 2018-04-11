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

    getGames() {
        const query = `SELECT * FROM Games;`;
        
        return this.queryDatabase(query);
    }

    queryDatabase(queryStatement) {
        this.pool.getConnection((err, con) => {
            if (err) throw err;
    
            this.pool.query(queryStatement, (err, resp) => {
                if (err) throw err;
                console.log(resp);

                this.pool.releaseConnection(con);

                return resp;
            });
        })
    }
}

module.exports = { Database };