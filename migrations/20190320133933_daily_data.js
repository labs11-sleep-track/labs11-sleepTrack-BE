exports.up = function(knex, Promise) {
  return knex.schema.createTable("daily_data", tbl => {
    tbl.increments("id");

    tbl
      .integer("pool_id")
      .unsigned()
      .references("id")
      .inTable("sleep_pool")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.integer("sleeptime").notNullable();
    tbl.integer("waketime").notNullable();
    tbl.integer("qos_score").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("daily_data");
};
