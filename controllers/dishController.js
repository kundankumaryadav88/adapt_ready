const Dish = require("../models/Dish");

exports.getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDishById = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) return res.status(404).json({ message: "Dish not found" });
    res.json(dish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDishesByIngredients = async (req, res) => {
  try {
    const { ingredients } = req.body;
    const dishes = await Dish.find({ ingredients: { $all: ingredients } });
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
