const express = require('express');
const movieRouter = express.Router();

const { postMovies } = require('../controllers/movies/postMovies')


movieRouter.post('/', postMovies);

module.exports = movieRouter;