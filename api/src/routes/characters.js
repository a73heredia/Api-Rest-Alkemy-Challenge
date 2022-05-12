const express = require('express');
const charactersRouter = express.Router();

const { getAllCharacters } = require('../controllers/characters/getCharacters');
const { postCharacter } = require('../controllers/characters/postCharacter');




charactersRouter.get('/', getAllCharacters);
charactersRouter.post('/', postCharacter);

module.exports = charactersRouter;