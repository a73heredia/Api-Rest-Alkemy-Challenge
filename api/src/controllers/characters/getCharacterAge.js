const { Character, Movie } = require('../../db');
const{getAllCharacters}=require('../../controllers/characters/getCharacters')

 

const getCharacterAge = async (req, res) => {
  try {
    const { name,age } = req.query;
    console.log('yo soy name',name)
    const characters = await getAllCharacters(name,age);
    console.log('yo soy name',characters)
    if (name) {
      let charactersName = await characters.filter(e => e.age.includes(age))
      charactersName.length ?
        res.status(200).send(charactersName) :
        res.status(404).send("Lo siento, no se encontro el Perrito Buscado");
    }
    else {

      res.status(200).send(characters)
    };
  } catch (error) {
    console.log("Se encontro una falla en el get /character", error)
  }


}
  

module.exports = {
    getCharacterAge
}