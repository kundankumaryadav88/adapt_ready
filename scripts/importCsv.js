const fs = require("fs");
const csv = require("csv-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Dish = require("../models/Dish");

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const results = [];

fs.createReadStream("../indian_food.csv")
  .pipe(csv())
  .on("data", (data) => {
    results.push({
      name: data["name"],
      ingredients: data["ingredients"].split(","),
      diet: data["diet"],
      prepTime: parseInt(data["prep_time"]),
      cookTime: parseInt(data["cook_time"]),
      flavor: data["flavor"],
      course: data["course"],
      state: data["state"],
      region: data["region"],
    });
  })
  .on("end", async () => {
    try {
      await Dish.insertMany(results);
      console.log("Data Imported Successfully!");
      mongoose.connection.close();
    } catch (error) {
      console.error("Error importing data:", error);
    }
  });
