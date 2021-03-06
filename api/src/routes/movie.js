const express = require('express');
const { deleteMovies } = require('../controllers/movies/deleteMovies');
const { getAllMovies } = require('../controllers/movies/getMovies');
const { getMoviesName } = require('../controllers/movies/getMoviesName');
const movieRouter = express.Router();

const { postMovies } = require('../controllers/movies/postMovies');
//const search = require('../controllers/characters/searchs');


movieRouter.post('/', postMovies);
movieRouter.get('/', getAllMovies);
movieRouter.delete('/delete/:id', deleteMovies);
movieRouter.get('/', getMoviesName);
//movieRouter.get('/genre/:id',getMovieByGenre)


module.exports = movieRouter;