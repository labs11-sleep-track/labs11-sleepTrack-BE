
exports.up = function(knex, Promise) {
    return knex.schema.createTable('articles', tbl => {
        tbl.increments('id');
        tbl.string('article_title', 160).notNullable();
        tbl.text('article_contents').notNullable();
        tbl
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl.timestamp('create_date').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('articles');
};
