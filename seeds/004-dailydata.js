var faker = require('faker');

var curArr = [];

for(var i = 0; i < 125; i++){
	var sleeptime = faker.date.recent();
	var waketime = faker.date.recent();
	var qos = faker.random.number();
	
	curArr.push({
		sleeptime: sleeptime,
		waketime: waketime,
		qos_score: qos,
		pool_id: 1
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