require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// connet to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {})
  .catch((error) => {
    console.log(error);
  });

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("connected to db & listening on port", process.env.PORT);
});
