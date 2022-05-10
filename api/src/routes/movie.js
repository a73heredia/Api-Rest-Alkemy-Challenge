const express = require('express');
const { getAllMovies } = require('../controllers/movies/getMovies');
const movieRouter = express.Router();

const { postMovies } = require('../controllers/movies/postMovies')


movieRouter.post('/', postMovies);
movieRouter.get('/', getAllMovies);

module.exports = movieRouter;