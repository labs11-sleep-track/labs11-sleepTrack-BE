
var curArr = [];

for(var i = 0; i < 125; i++){
	
	curArr.push({
    id: i + 250,
    user_id: i + 250
})
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sleep_pool').del()
    .then(function () {
      // Inserts seed entries
      return knex('sleep_pool').insert(curArr);
    });
};
