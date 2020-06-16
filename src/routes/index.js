const express = require("express");
const wordRouter = require("./word.routes");

const routes = express.Router();

routes.use("/api/words", wordRouter);

module.exports = routes;
