
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {name: 'Moe', email:'moe@gmail.com'},
        {name: 'Joe', email:'joe@gmail.com'},
        {name: 'Curly', email:'curly@gmail.com'},
      ]);
    });
};
