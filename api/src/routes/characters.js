const express = require('express');
const charactersRouter = express.Router();

const { getAllCharacters } = require('../controllers/characters/getCharacters')


charactersRouter.get('/', getAllCharacters);

module.exports = charactersRouter;