var faker = require('faker');

var curArr = [];

for(var i = 0; i < 125; i++){
	var firstName = faker.name.firstName();
	var lastName = faker.name.lastName();
	var randomEmail = faker.internet.email();
	var randomPassword = faker.internet.password();
	
	curArr.push({
		email: randomEmail,
		password: randomPassword,
		f_name: firstName,
    l_name: lastName,
    account_type: 'user'
})
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert(curArr);
    });
};