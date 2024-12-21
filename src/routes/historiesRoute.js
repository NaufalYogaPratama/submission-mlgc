const express = require("express");
const { getHistoryHandler } = require("../controllers/historiesController");

const historyRoute = express.Router();
historyRoute.get("/", getHistoryHandler);

module.exports = historyRoute;