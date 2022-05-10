const { Op } = require("sequelize");
const { Genre } = require('../../db');
//const genreDate = require('../../jsonData/genresData')

const genres = [
    {
        "id": 28,
        "name": "Action",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 12,
        "name": "Adventure",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 16,
        "name": "Animation"
        ,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 35,
        "name": "Comedy"
        ,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 80,
        "name": "Crime"
        ,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 99,
        "name": "Documentary"
        ,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 18,
        "name": "Drama"
        ,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 14,
        "name": "Fantasy"
        ,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 10751,
        "name": "Family"
        ,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 36,
        "name": "History"
        ,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 27,
        "name": "Horror"
        ,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 10402,
        "name": "Music"
        ,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 9648,
        "name": "Mystery"
        ,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 10749,
        "name": "Romance"
        ,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 878,
        "name": "Science Fiction",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },

    {
        "id": 10770,
        "name": "TV Movie",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 53,
        "name": "Thriller",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 10752,
        "name": "War",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    },
    {
        "id": 37,
        "name": "Western",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJ-LRO_DOi7AkbrzKNNUT8loQio4dwPY10O7J70J__w&s"
    }
]

const getAllgenres = async (req, res) => {
    const info = genres.map((el) => {
        return {
            name: el.name,
            image: el.image
        }
    });

    for (i = 0; i < info.length; i++) {
        await Genre.findOrCreate({
            where: {
                name: info[i].name,
                image: info[i].image
            },
        });
    }}

module.exports = { getAllgenres }