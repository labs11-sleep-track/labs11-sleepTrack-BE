exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments("id");
    tbl
      .string("email", 64)
      .unique()
      .notNullable();
    tbl.string("f_name", 64).notNullable();
    tbl.string("l_name", 64).notNullable();
    tbl.string("google_id", 128).unique();
    tbl.string("account_type", 32).defaultTo("user");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
