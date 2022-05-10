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
    const info = characters.map((el) => {
        return {
            name:el.name,
            image:el.image,
            age:el.age,
            weight:el.weight,
            history:el.history

            }
    });  let allMovies = await Movie.findAll({
        include: [{

          attributes: ['id', 'name'],
          model: Movie,
          through: {
            attributes: []
          }
        },
        /* {
          attributes: ['id', 'name'],
          model: Actor,
          through: {
            attributes: []
          }

        } */],
      })
    

    for (i = 0; i < info.length; i++) {
        await Character.findOrCreate({
            where: {
             name:info[i].name,
            image:info[i].image,
            age:info[i].age,
            weight:info[i].weight,
            history:info[i].history
            },
        });
    }
}

module.exports = {
    getAllCharacters
}