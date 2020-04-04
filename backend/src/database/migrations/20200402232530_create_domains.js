exports.up = function(knex) {
  return knex.schema.createTable("domains", (table) => {
    table.string("id").primary();
    table.date("data").notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.integer("status", 1).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("domains");
};
