const express = require("express");
const { loadCharacters } = require("../loadData/loadCharacters.js");
const { loadMovies } = require("../loadData/loadMovies.js");
const { loadGenre } = require("../loadData/loadGenre");
const loadRouter = express.Router();

loadRouter.get("/movies", loadMovies);
loadRouter.get("/characters", loadCharacters);
loadRouter.get("/genres", loadGenre);

module.exports = loadRouter;