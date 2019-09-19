const db = require('../../data/db-config.js');

module.exports = {
    get,
    getById,
    insert,
    remove

}

function get() {
    return db('tracks')
    .select('track_name', 'track_artist')
}

function getById(id) {
    return db('tracks')
    .select()
    .where({ id })
    .first()
    .then(res => {
        return res;
    })
}

function insert(track) {
    return db('tracks')
    .insert(track)
    .then(ids => {
        const [id] = ids;
        return getById(id)
    })
}

function remove(id) {
    return db('tracks')
    .delete()
    .where({ id })
}