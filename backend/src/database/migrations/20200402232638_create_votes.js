exports.up = function(knex) {
  return knex.schema.createTable("votes", (table) => {
    table.increments("id");
    table.date("data").notNullable();
    table.integer("status", 1).notNullable();

    table.string("user_id").notNullable();
    table.foreign("user_id").references("id").inTable("users");

    table.string("voting_id").notNullable();
    table.foreign("voting_id").references("id").inTable("votings");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("votes");
};
