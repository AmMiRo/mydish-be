exports.seed = function(knex) {
  return knex("units").insert([
    { name: "tsp" },
    { name: "tbsp" },
    { name: "cup" },
    { name: "cups" },
    { name: "g" },
    { name: "oz" },
    { name: "pinch" },
    { name: "pinches" },
    { name: "l" },
    { name: "ml" },
    { name: "can" },
    { name: "cans" },
    { name: "whole" },
    { name: "wholes" },
    { name: "pint" },
    { name: "pints" },
    { name: "mg" },
    { name: "package" },
    { name: "packages" },
    { name: "pound" },
    { name: "pounds" },
    { name: "lb" },
    { name: "lbs" }
  ]);
};
