const express = require('express');
const genreRouter = express.Router();

const { getAllgenres } = require('../controllers/genres/getGenres')


genreRouter.get('/', getAllgenres);

module.exports = genreRouter;