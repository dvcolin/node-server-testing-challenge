const express = require('express');
const server = express();

const tracksRouter = require('./routes/tracks-router.js');

server.use(express.json());

server.use('/tracks', tracksRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Index route is working!' });
})


module.exports = server;