require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const databaseConfig = require("./config/database");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(routes);

mongoose.connect(databaseConfig.uri);

app.listen(process.env.PORT || 3333, () => {
  console.log("Server is running on port localhost:3333...");
});
