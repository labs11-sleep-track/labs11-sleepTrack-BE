exports.up = function(knex, Promise) {
    return knex.schema.createTable('daily_data', tbl => {
      tbl.increments('id');
      tbl
        .integer('user_id')
        .unsigned()
        .references('user_id')
        .inTable('sleep_pool')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('sleeptime');
      tbl.integer('waketime');
      tbl.integer('qos_score');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('daily_data');
  };