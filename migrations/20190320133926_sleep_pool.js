exports.up = function(knex, Promise) {
    return knex.schema.createTable('sleep_pool', tbl => {
      tbl.increments('id');
      tbl
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('sleep_pool');
  };