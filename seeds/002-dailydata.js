var faker = require('faker');

var curArr = [];

for(var i = 1; i < 126; i++){
	var sleeptime = faker.random.number();
	var waketime = faker.random.number();
	var qos = faker.random.number();
	
	curArr.push({
		sleeptime: sleeptime,
		waketime: waketime,
		qos_score: qos,
		user_id: i
})
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('daily_data')
    .then(function() {
      // Inserts seed entries
      return knex('daily_data').insert(curArr);
    });
};