


exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', function(table){
  table.increments('id').primary();
  table.text('body');
  table.timestamp('comment_timestamp').defaultTo(knex.fn.now());
  table.string('user_email').references('email').inTable('user');
  table.integer('blogpost_id').references('id').inTable('blogpost')
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('comment');
};
