const { Op } = require("sequelize");
const { Movie } = require('../../db');

const postMovies = async (req, res) => {
    try {
        let { id, title, image, creationDate, qualification } = req.body;
        let movieCreated = await Movie.create({
            title,
            image,
            creationDate,
            qualification
        })
        genres.forEach(async (g) => {
            const gr = await Genre.findAll({ where: { name: g } });

            movieCreated.addGenre(gr);
        })

        characters.forEach(async (a) => {
            const ac = await characters.findAll({ where: { name: { [Op.iLike]: `%${a}%` } } });

            moviesCreated.addActor(ac)
        })

        res.status(200).json(movieCreated)
    } catch (error) {
        console.log(error)
    }
}


module.exports = { postMovies }