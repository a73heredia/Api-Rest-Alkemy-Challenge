 const { Character, Movie } = require('../../db');

const characters = [


  {
    "name": "Comedy",


    "image": "https://image.tmdb.org/t/p/w500/9zVyqx5WKb0iCkk46wDUxuwAiMR.jpg",


    "age": "28",
    "weight": 35,
    "history": "A mother and son find themselves faced with a brutal alien invasion where survival will depend on discovering the unthinkable truth about the enemy.",
  },

  {
    "name": "Thryller",


    "image": "https://image.tmdb.org/t/p/w500/9zVyqx5WKb0iCkk46wDUxuwAiMR.jpg",


    "age": "28",
    "weight": 35,
    "history": "A mother and son find themselves faced with a brutal alien invasion where survival will depend on discovering the unthinkable truth about the enemy.",
  },
] 

const getAllCharacters = async (req, res) => {
  let characters = await Character.findAll()
  //console.log('characters', characters)
  try {
    if (characters) {
      let char = await characters.map((e) => {
        return {
          id:e.id,
          name: e.name,
          image: e.image
        }})
          return char;
    }
  } catch (error) {
    console.log(error.message);
  }

}

module.exports = {
  getAllCharacters
}