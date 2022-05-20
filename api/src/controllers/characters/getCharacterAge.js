const { Character, Movie } = require('../../db');
//const{getAllCharacters}=require('../../controllers/characters/getCharacters')

 
const getAllCharactersAge = async (req, res) => {
  let characters = await Character.findAll()
  //console.log('characters', characters)
  try {
    if (characters) {
      let char = await characters.map((e) => {
        return {
          id:e.id,
          name: e.name,
          image: e.image,
          age:e.age
        }})
        console.log('yo soy char', char)
          return char;
    }
  } catch (error) {
    console.log(error.message);
  }

}

const getCharacterAge = async (req, res) => {
  try {
    const {age } = req.query;
    console.log('yo soy age',parseInt(age))
    const characters = await getAllCharactersAge(age);
    //console.log('yo soy soy age de characters',characters)
    if (age) {
      let charactersAge = await characters.filter(e => e.age==age)
      charactersAge.length ?
        res.status(200).send(charactersAge) :
        res.status(404).send("Lo siento, no se encontro el character Buscado");
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