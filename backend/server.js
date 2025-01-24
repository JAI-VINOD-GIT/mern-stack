// server.js
const express = require("express");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// Sync Sequelize models with the database
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
    await sequelize.sync(); // Sync models with the database
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
