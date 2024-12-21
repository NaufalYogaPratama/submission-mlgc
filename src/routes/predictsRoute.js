const express = require("express");
const { predictHandler } = require("../controllers/predictsController");
const { uploadMiddleware } = require("../middlewares/uploadMiddleware");

const predictRoute = express.Router();
predictRoute.post("/", uploadMiddleware.single("image"), predictHandler);

module.exports = predictRoute;