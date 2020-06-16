const express = require("express");
const wordController = require("../controllers/WordController");
const authenticateMiddleware = require("../middlewares/auth");

const wordRouter = express.Router();
wordRouter.use(authenticateMiddleware);

wordRouter.post("/", wordController.create);
wordRouter.get("/findAll", wordController.findAll);
wordRouter.get("/findBydate", wordController.findBydate);

module.exports = wordRouter;
