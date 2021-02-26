exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("gadgets")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("gadgets").insert([
        {
          name: "Galaxy Note 9",
          device_type: "mobile phone",
          device_brand: "Samsung",
        },
        {
          name: "iPhone X",
          device_type: "mobile phone",
          device_brand: "Apple",
        },
        {
          name: "Yoga C900",
          device_type: "Laptop",
          device_brand: "Asus",
        },
      ]);
    });
};
