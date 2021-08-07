exports.up = (knex) => Promise.all([
    knex.raw('create extension if not exists "uuid-ossp"'),
    knex.schema.createTable('Categories', (t) => {
        t.uuid('UUID').unique().defaultTo(knex.raw('uuid_generate_v4()'))
        t.string('Name', 50).notNullable();
    }),
    knex.schema.createTable('Logs', (t) => {
        t.uuid('UUID').unique().defaultTo(knex.raw('uuid_generate_v4()'))
        t.text('Content');
        t.uuid('FK_Category').notNullable().references('UUID').inTable('Categories').onDelete('CASCADE');
    }),
]);

exports.down = (knex) => Promise.all([
    knex.raw('drop extension if exists "uuid-ossp"'),
    knex.schema.dropTable('Categories'),
    knex.schema.dropTable('Logs')
]);