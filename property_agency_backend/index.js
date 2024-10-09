require("dotenv").config(); // Add this line at the top to configure dotenv
const express = require("express");
const connectDB = require("./config/db.js");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const propertyRoutes = require("./routes/propertyRoutes");

const app = express();

connectDB(); // Connect to the database

// Middlewares
app.use(cors());
app.use(express.json());

// Define routes
app.use("/auth", authRoutes);
app.use("/properties", propertyRoutes);

// Base route for testing
app.get("/", (req, res) => {
  res.send("Welcome to the property agency backend!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
