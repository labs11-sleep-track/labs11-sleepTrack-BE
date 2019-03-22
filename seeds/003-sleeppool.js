
var curArr = [];

for(var i = 0; i < 125; i++){
	
	curArr.push({
    id: i,
    user_id: i
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
