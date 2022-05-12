const express = require('express');
const charactersRouter = express.Router();

const { getAllCharacters } = require('../controllers/characters/getCharacters');
const { postCharacter } = require('../controllers/characters/postCharacter');
const { putCharacter } = require('../controllers/characters/putCharacters');
const{getByIdCharacters}=require('../controllers/characters/getByIdCharacters')




charactersRouter.get('/', getAllCharacters);
charactersRouter.post('/', postCharacter);
charactersRouter.put('/put/:id', putCharacter);
charactersRouter.get('/:id',getByIdCharacters);

module.exports = charactersRouter;