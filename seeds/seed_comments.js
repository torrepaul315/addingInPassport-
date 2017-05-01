
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
      {
        body: 'rowValue1',
        user_email: 'moe@gmail.com', blogpost_id: knex('blogpost').where('title', 'airplanes').select('id')
      },
      {
        body: 'rowValue2',
        user_email: 'joe@gmail.com', blogpost_id: knex('blogpost').where('title', 'cars').select('id')
      },
        {body: 'rowValue3',
        user_email: 'curly@gmail.com', blogpost_id: knex('blogpost').where('title', 'trains').select('id')},
      ]);
    });
};
