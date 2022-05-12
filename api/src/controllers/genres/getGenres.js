const { Op } = require("sequelize");
const { Genre,Movie } = require('../../db');
//const genreDate = require('../../jsonData/genresData')

const getAllGenres = async (req, res) => {
    let genres = await Genre.findAll()
    console.log('genres', genres)
    try {
      if (genres) {
        let ger = await genres.map((e) => {
          return {
            name: e.name,
            image: e.image
          }
  
        })
        console.log('genres', ger)
        res.json(ger);
      }
    } catch (error) {
      console.log(error.message);
    }
  
  }
  
  
  module.exports={getAllGenres}