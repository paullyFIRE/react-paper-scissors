// http://www.datchley.name/es6-promises/

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = 80;

const app = express();
const serveDirectory = '/dist/';

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + serveDirectory)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + serveDirectory + 'index.html'))
});

const gameRoutes = require('./routes/games');
app.use('/games', gameRoutes);

app.listen(port, () => console.log(`Basic server listening on port ${port}!`));