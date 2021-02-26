exports.up = function (knex) {
  return knex.schema.createTable("gadgets", (gadget) => {
    gadget.increments("gadget_id");
    gadget.text("name").notNullable();
    gadget.text("device_type").notNullable();
    gadget.text("device_brand").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("gadgets");
};
