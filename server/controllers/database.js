const mysql = require('mysql');
const queries = require('./database-queries');
const config = require('../config').database;

class Database {
  constructor() {
    this.pool = mysql.createPool(config);
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
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, con) => {
        if (err) {
          reject(err);
        }

        this.pool.query(queryStatement, (err, resp) => {
          if (err) {
            reject(err);
          }

          this.pool.releaseConnection(con);
          resolve(resp);
        });
      });
    });
  }
}

module.exports = Database;
