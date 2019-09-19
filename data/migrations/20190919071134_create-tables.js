
exports.up = function(knex) {
    return knex.schema
    .createTable('tracks', tbl => {
        // ID
        tbl.increments();
  
        // TRACK NAME
        tbl.string('track_name', 255).notNullable();
  
        // TRACK ARTIST
        tbl.string('track_artist', 255).notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tracks')
  };