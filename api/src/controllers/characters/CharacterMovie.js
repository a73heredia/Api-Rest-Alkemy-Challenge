const { Character, Movie,CharacterMovie } = require('../../db');

 
const getAllCharactersMovie = async (req, res) => {
    let id=req.query;
    let charactersMovie = await CharacterMovie.findAll({
        
            include: [{
    
              attributes: ['id', 'name'],
              model: Movie,
              through: {
                attributes: []
              }
            }]
    })
    let movies=await Movie.findAll()
    //console.log('yo soy movies',movies)
    console.log('yo soy characters', charactersMovie)
    try {
      if (charactersMovie) {
        let char = await charactersMovie.map((e) => {
          return {
            characterId:e.characterId,
            where: { movieId: e.movieId }
           
          }})
          
          //console.log('yo soy char', char)
            return char;
      }
    } catch (error) {
      console.log(error.message);
    }
  
  }
  



const getCharacterMovie = async (req, res) => {
    try {
      const {movieId } = req.query;
      console.log('yo soy age',movieId)
      let movies=await Movie.findAll()
      const characters = await getAllCharactersMovie(movieId);
      //console.log('yo soy soy age de characters',characters)
      if (movieId) {
        let charactersMovie = await characters.filter(e => e.movieId==movieId)
        
       
        charactersMovie.length ?
          res.status(200).send(charactersMovie) :
          res.status(404).send("Lo siento, no se encontro el character/movie Buscado");
      }
      else {
        console.log('yo soy age',characters)
        res.status(200).send(characters)
      };
    } catch (error) {
      console.log("Se encontro una falla en el get /character/movie", error)
    }
  
  
  }
    
  
  module.exports = {
      getCharacterMovie
  }