const mysql = require('mysql');

const connect = () => {
    const connection = mysql.createConnection({
        host: "35.184.253.121",
        user: "root",
        password: "Dawg0847178971@#$",
        database: "rpc"
    });

    return connection;
};

const getGames = (con) => {
    con.connect(err => {
        if (err) throw err;

        con.query(`SELECT * FROM Games;`, (err, response) => {
            if (err) throw err;
            return response;
        });
    })
}

module.exports = { connect, getGames };

// const connect = () => {
//     const connection = mysql.createConnection({
//         host: "35.184.253.121",
//         user: "root",
//         password: "Dawg0847178971@#$",
//         database: "rpc"
//     });

//     connection.connect(err => {
//         if (err) throw err;
//         console.log("Connected!");

//         connection.query(`SELECT * FROM Games;`, (err, response) => {
//             if (err) throw err;
//             console.log(response)
//         });
//     })
// };

// const queryAllGames = () => {
//     return null;
// };

// module.exports = { connect, queryAllGames }