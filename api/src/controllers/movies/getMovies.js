const { Movie,Genre,Character } = require('../../db');
const movies = [

    {
        "title":"The Matrix Resurrections",

        "image":"https://image.tmdb.org/t/p/w500/8c4a8kE7PizaGQQnditMmI1xbRp.jpg",

        "creationDate": "2021-12-16",
        "qualification": 6.8,
/* 
        "Genres": [

            {
                "id": 878,
                "name": "Science Fiction"
            },

            {
                "id": 28,
                "name": "Action"
            },

            {
                "id": 12,
                "name": "Adventure"
            }
        ],

        "Actors": [

            {
                "id": 4,
                "name": "Keanu Reeves"
            },

            {
                "id": 5,
                "name": "Carrie-Anne Moss"
            }
        ] */
    },

    {
        "title": "The Grandmother",

        "image": "https://image.tmdb.org/t/p/w500/19rA9FjhwI4VEfaCXV7648XUInR.jpg",

        "creationDate":"2022-01-28",

        "qualification": 6.2,

/* 
        "Genres": [

            {
                "id": 27,
                "name": "Horror"
            }
        ],

        "Actors": [

            {
                "id": 45,
                "name": "Almudena Amor"
            },

            {
                "id": 46,
                "name": "Vera Valdez"
            }
        ] */
    },

    {
        "title": "Blacklight",

        "image": "https://image.tmdb.org/t/p/w500/bv9dy8mnwftdY2j6gG39gCfSFpV.jpg",

        "creationDate":"2022-02-10",

        "qualification":6,

/* 
        "Genres": [

            {
                "id": 28,
                "name": "Action"
            },

            {
                "id": 53,
                "name": "Thriller"
            }
        ],

        "Actors": [

            {
                "id": 33,
                "name": "Liam Neeson"
            },

            {
                "id": 34,
                "name": "Emmy Raver-Lampman"
            }
        ] */
    }
]


const getAllMovies = async (req, res) => {
    const { title } = req.query;
      try {
      if (title) {
        let movieByTitle = await Movie.findAll({
          where: {
            title: title
          }
        })
  
        movieByTitle.length
          ? res.status(200).json(movieByTitle)
          : res.status(404).send("Sorry, Movie not found :(");
      } else {
        let allMovies = await Movie.findAll({
          include: [{
  
            attributes: ['id', 'name'],
            model: Genre,
            through: {
              attributes: []
            }
          },
          {
            attributes: ['id', 'name'],
            model: Character,
            through: {
              attributes: []
            }
  
          }],
        })
        console.log(allMovies)
        res.json(allMovies)
      }
    } catch (error) {
      console.log(error.message);
    }
  };
/* 
const getAllMovies = async (req, res) => {
    const info = movies.map((el) => {
        return {
            title: el.title,
            image: el.image,
            creationDate: el.creationDate,
            qualification: el.qualification
        }
    });
    console.log('yo soy info',info)

    for (i = 0; i < info.length; i++) {
        await Movie.findOrCreate({
            where: {
                title: info[i].title,
                image: info[i].image,
                creationDate: info[i].creationDate,
                qualification: info[i].qualification
            },
        });
    }
} */

module.exports = {
    getAllMovies,
}