exports.up = function (knex) {
  return knex.schema.createTable("domains", (table) => {
    table.string("id").primary();
    table.date("date").notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.integer("status", 1).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("domains");
};
