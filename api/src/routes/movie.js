const express = require('express');
const { deleteMovies } = require('../controllers/movies/deleteMovies');
const { getAllMovies } = require('../controllers/movies/getMovies');
const movieRouter = express.Router();

const { postMovies } = require('../controllers/movies/postMovies')


movieRouter.post('/', postMovies);
movieRouter.get('/', getAllMovies);
movieRouter.delete('/delete/:id', deleteMovies);

module.exports = movieRouter;