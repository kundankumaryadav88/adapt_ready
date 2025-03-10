const express = require("express");
const { getAllDishes, getDishById, getDishesByIngredients } = require("../controllers/dishController");
const router = express.Router();

router.get("/", getAllDishes);
router.get("/:id", getDishById);
router.post("/suggest", getDishesByIngredients);

module.exports = router;