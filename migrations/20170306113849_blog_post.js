//as per nick, I should prolly change the table fields to text (so the blog posts can be longer...can i just edit, then rollback and then rerun? )
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogpost', function(table){
  table.increments('id').primary();
  table.string('title');
  table.text('body');
  table.string('user_email').references('email').inTable('user');
  table.timestamp('blogpost_timestamp').defaultTo(knex.fn.now());

  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogpost');

};
