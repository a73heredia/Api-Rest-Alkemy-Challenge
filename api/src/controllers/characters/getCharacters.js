const { Character ,Movie} = require('../../db');

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
      try {
    const characters=await Character.findAll() 
    res.json(characters);
  } catch (error) {
    console.log(error.message);
  }
  
}

module.exports = {
    getAllCharacters
}