const express = require('express');
const { getAllGenres } = require('../controllers/genres/getGenres');
const genreRouter = express.Router();




genreRouter.get('/',  getAllGenres);

module.exports = genreRouter;