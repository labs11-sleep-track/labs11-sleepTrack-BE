
var curArr = [];

for(var i = 0; i < 125; i++){
	
	curArr.push({
    id: i + 375,
    user_id: i + 375
})
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sleep_pool')
    .then(function () {
      // Inserts seed entries
      return knex('sleep_pool').insert(curArr);
    });
};
