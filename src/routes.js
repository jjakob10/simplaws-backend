const express = require("express");

const searchController = require("./controllers/search");

const routes = express.Router();

routes.get("/search", searchController.index);

module.exports = routes;
