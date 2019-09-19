const express = require('express');
const router = express.Router();
const Tracks = require('../models/tracks-model.js');

router.post('/tracks', (req, res) => {
    const track = req.body;

    Tracks.insert(track)
    .then(res => {
        return res;
    })
})



module.exports = router;