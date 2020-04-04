exports.up = function(knex) {
  return knex.schema.createTable("votings", (table) => {
    table.increments("id");
    table.date("data").notNullable();
    table.string("vote_item").notNullable();
    table.integer("status", 1).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("votings");
};
