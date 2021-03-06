const express = require("express");

// Routes
const productRoutes = require("./apis/products/routes");

// DB
const connectDB = require("./db/database");

// Middleware
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();

connectDB();

// Middleware

app.use(express.json());
app.use(logger);

// Routes
app.use("/api/products", productRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.use(errorHandler);

const PORT = 8000;
app.listen(PORT, () => console.log(`Application running on localhost:${PORT}`));
