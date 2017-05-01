
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table){
  table.string('name');
  table.string('email').primary();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};

/*
this is the default name generated-
20170306104153_create_albums.js
however, I'd rather the name be something manageable, like 'user_table.js' what gives? */
