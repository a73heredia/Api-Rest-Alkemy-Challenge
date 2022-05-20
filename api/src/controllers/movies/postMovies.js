const { Op } = require("sequelize");
const { Movie ,Genre,Character} = require('../../db');

const postMovies = async (req, res) => {
    try {
        let { title, image, creationDate, qualification,genres,characters } = req.body;
        let moviesCreated = await Movie.create({
            title,
            image,
            creationDate,
            qualification
        })
        genres.forEach(async (g) => {
            const gr = await Genre.findAll({ where: { name: g } });
      
            moviesCreated.addGenre(gr);
          }) 
        
          characters.forEach(async (a) => {
            const ac = await Character.findAll({ where: { name:a/*  { [Op.iLike]: `%${a}%` } */ } });

            moviesCreated.addCharacter(ac)
            console.log('moviesCreated', moviesCreated)
        }) 
        
        
        res.status(200).json(moviesCreated)
    } catch (error) {
        console.log(error)
    }
}


module.exports = { postMovies }