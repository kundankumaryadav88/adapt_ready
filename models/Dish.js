const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  diet: { type: String, required: true },
  prepTime: { type: Number, required: true },
  cookTime: { type: Number, required: true },
  flavor: { type: String, required: true },
  course: { type: String, required: true },
  state: { type: String, required: true },
  region: { type: String, required: true },
});

module.exports = mongoose.model("Dish", DishSchema);