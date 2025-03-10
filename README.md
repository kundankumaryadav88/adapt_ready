# Indian Food App Backend

This is the backend service for the Indian Food App, built using **Node.js, Express, and MongoDB**.

## Features
- Fetch all dishes
- Get details of a specific dish
- Find dishes that can be prepared based on available ingredients
- Uses MongoDB with Mongoose ODM

## Project Structure
```
backend/
├── config/        # Database connection
├── controllers/   # Business logic for API routes
├── models/        # Mongoose schemas
├── routes/        # Express API routes
├── scripts/       # Utility scripts (CSV Import)
├── .gitignore     # Ignore unnecessary files
├── .env           # Environment variables
├── package.json   # Dependencies
├── server.js      # Entry point of the backend
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/kundankumaryadav88/adapt_ready
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Setup environment variables:
   - Create a `.env` file in the backend directory
   - Add the following line with your MongoDB URI:
     ```
     MONGO_URI=your_mongodb_connection_string
     ```
4. Start the server:
   ```bash
   npm run dev
   ```
   The backend runs on **http://localhost:8082**.

## Import CSV Data into MongoDB
1. Place the `indian_food.csv` file in the backend folder.
2. Run the script to import data:
   ```bash
   node scripts/importCsv.js
   ```

## API Endpoints
### Get All Dishes
```
GET /api/dishes
```
Response:
```json
[
  {
    "_id": "60f7b6c7...",
    "name": "Dosa",
    "ingredients": ["Rice", "Urad dal"],
    "diet": "Veg",
    "prepTime": 20,
    "cookTime": 10,
    "flavor": "Savory",
    "course": "Breakfast",
    "state": "Tamil Nadu",
    "region": "South"
  }
]
```

### Get Dish by ID
```
GET /api/dishes/:id
```

### Find Dishes by Ingredients
```
POST /api/dishes/suggest
```
Request:
```json
{
  "ingredients": ["Rice", "Coconut"]
}
```
Response:
```json
[
  { "name": "Modak", "ingredients": ["Rice flour", "Coconut", "Jaggery"] }
]
```

## License
This project is open-source. Feel free to contribute!

