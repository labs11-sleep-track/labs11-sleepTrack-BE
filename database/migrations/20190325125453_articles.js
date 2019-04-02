
exports.up = function(knex, Promise) {
    return knex.schema.createTable('articles', tbl => {
        tbl.increments('id');
        tbl.string('title', 260).notNullable();
        tbl.string('author', 160).notNullable();
        tbl.string('published_date', 160)
        tbl.string('url', 260)
        tbl.string('image', 260)
        tbl.text('description')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('articles');
};