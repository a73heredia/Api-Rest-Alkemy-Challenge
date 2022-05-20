const express = require('express');
const charactersRouter = express.Router();

const { getAllCharacters } = require('../controllers/characters/getCharacters');
const { postCharacter } = require('../controllers/characters/postCharacter');
const { putCharacter } = require('../controllers/characters/putCharacters');


const deleteCharacter = require('../controllers/characters/deleteCharacter');

const { getByIdCharacters } = require('../controllers/characters/getByIdCharacters');
const { getCharacterName } = require('../controllers/characters/getCharacterName');
const { getCharacterAge } = require('../controllers/characters/getCharacterAge');




charactersRouter.get('/age', getCharacterAge);
charactersRouter.post('/', postCharacter);
charactersRouter.put('/put/:id', putCharacter);

charactersRouter.get('/:id', getByIdCharacters);
charactersRouter.delete('/:id', deleteCharacter);


charactersRouter.get('/', getCharacterName);



module.exports = charactersRouter;