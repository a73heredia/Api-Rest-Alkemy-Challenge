const { Movie, Genre, Character, CharacterMovie } = require('../db');
const movies = [

    {
        "title": "The Matrix Resurrections",

        "image": "https://image.tmdb.org/t/p/w500/8c4a8kE7PizaGQQnditMmI1xbRp.jpg",

        "creationDate": "2021-12-16",
        "qualification": 6.8,

        "genres": [

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

        "characters": [

            {
                "id": 4,
                "name": "Keanu Reeves"
            },

            {
                "id": 5,
                "name": "Carrie-Anne Moss"
            }
        ]
    },

    {
        "title": "The Grandmother",

        "image": "https://image.tmdb.org/t/p/w500/19rA9FjhwI4VEfaCXV7648XUInR.jpg",

        "creationDate": "2022-01-28",

        "qualification": 6.2,


        "genres": [

            {
                "id": 27,
                "name": "Horror"
            }
        ],

        "characters": [

            {
                "id": 45,
                "name": "Almudena Amor"
            },

            {
                "id": 46,
                "name": "Vera Valdez"
            }
        ]
    },

    {
        "title": "Blacklight",

        "image": "https://image.tmdb.org/t/p/w500/bv9dy8mnwftdY2j6gG39gCfSFpV.jpg",

        "creationDate": "2022-02-10",

        "qualification": 6,


        "genres": [

            {
                "id": 28,
                "name": "Action"
            },

            {
                "id": 53,
                "name": "Thriller"
            }
        ],

        "characters": [

            {
                "id": 33,
                "name": "Liam Neeson"
            },

            {
                "id": 34,
                "name": "Emmy Raver-Lampman"
            }
        ]
    }
]

const loadMovies = async (req, res) => {
    const info = movies.map((el) => {
        return {
            title: el.title,
            image: el.image,
            creationDate: el.creationDate,
            qualification: el.qualification,
            genres: el.genres.map((g) => { return { name: g } }),
            characters: el.characters.map((g) => { return { name: g } }) 
           
        }
    });

    
    for (i = 0; i < info.length; i++) {
        await Movie.findOrCreate({
            where: {
                title: info[i].title,
                image: info[i].image,
                creationDate: info[i].creationDate,
                qualification: info[i].qualification,
            },
        });

    }
   Genre.forEach(async (g) => {
        const i = await Movie.findOne({ where: { id: el.id } })
        await CharacterMovie.findOrCreate({
            where: { genreId: g, movieId: i.id }
        })
    })
    console.log('yo soy info', info)
}

module.exports = {
    loadMovies
}