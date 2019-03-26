exports.up = function(knex, Promise) {
  return knex.schema.createTable("daily_data", tbl => {
    tbl.increments("id");

    tbl
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.integer("sleeptime").notNullable();
    tbl.integer("waketime").notNullable();
    tbl.integer("qos_score").notNullable();
    tbl.text("sleep_notes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("daily_data");
};
