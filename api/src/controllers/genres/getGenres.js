const { Op } = require("sequelize");
const { Genre } = require('../../db');
//const genreDate = require('../../jsonData/genresData')

const getAllGenres = async (req, res) => {
    const { name } = req.query;
    //let allMovies = await getMovies(title);
    //console.log('yo soy allMovies',allMovies)
    try {
      if (name) {
        let genreName = await Genre.findAll({
          where: {
            name:name
          }
        })
  
        genreName.length
          ? res.status(200).json(genreName)
          : res.status(404).send("Sorry, Movie not found :(");
      } else {
        let allMovies = await Genre.findAll({
          include: [{
  
            attributes: ['id', 'name'],
            model: Movie,
            through: {
              attributes: []
            }
          },
          ],
        })
        console.log(allMovies)
        res.json(allMovies)
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  module.exports={getAllGenres}