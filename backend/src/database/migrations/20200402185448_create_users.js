exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.date("date").notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.integer("admin", 1).notNullable();
    table.integer("status", 1).notNullable();

    table.string("domain_id").nullable();
    table.foreign("domain_id").references("id").inTable("domains");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
