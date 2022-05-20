const express = require('express');
const charactersRouter = express.Router();

const { getAllCharacters } = require('../controllers/characters/getCharacters');
const { postCharacter } = require('../controllers/characters/postCharacter');
const { putCharacter } = require('../controllers/characters/putCharacters');
<<<<<<< HEAD
const { getByIdCharacters } = require('../controllers/characters/getByIdCharacters');
const deleteCharacter = require('../controllers/characters/deleteCharacter');
=======
const{getByIdCharacters}=require('../controllers/characters/getByIdCharacters');
const { getCharacterName } = require('../controllers/characters/getCharacterName');
const { getCharacterAge } = require('../controllers/characters/getCharacterAge');
>>>>>>> cf6bfedd0930c84d81b777c80123a7fa078f3c9b




charactersRouter.get('/age', getCharacterAge);
charactersRouter.post('/', postCharacter);
charactersRouter.put('/put/:id', putCharacter);
<<<<<<< HEAD
charactersRouter.get('/:id', getByIdCharacters);
charactersRouter.delete('/:id', deleteCharacter);
=======
charactersRouter.get('/:id',getByIdCharacters);
charactersRouter.get('/',getCharacterName);
>>>>>>> cf6bfedd0930c84d81b777c80123a7fa078f3c9b

module.exports = charactersRouter;