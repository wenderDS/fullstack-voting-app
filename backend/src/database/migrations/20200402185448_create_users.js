
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("").notNullable()
  })
};

exports.down = function(knex) {
  
};
