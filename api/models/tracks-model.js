const db = require('../../data/db-config.js');

module.exports = {
    get,
    insert,
    remove

}

function get() {
    return db('tracks')
    .select('track_name', 'track_artist')
}

function insert(track) {
    return db('tracks')
    .insert(track)
}

function remove(id) {
    return db('tracks')
    .delete()
    .where({ id })
    .then(res => {
        return res;
    })
}