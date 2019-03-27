
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {
          article_title: 'Sleep Habits: When to get Zzzs',
          article_contents: 'This is where the contents of the story will go. I do not know what the articles will actually be about but this is at least some text to hold their spot.',
          user_id: 2
        },
        {
          article_title: 'I am Tired All The Time!',
          article_contents: 'This is where the contents of the story will go. I do not know what the articles will actually be about but this is at least some text to hold their spot.',
          user_id: 7
        },
      ]);
    });
};
