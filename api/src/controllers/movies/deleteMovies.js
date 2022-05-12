const { Op } = require('sequelize');
const { Movie} = require("../../db.js");


const deleteMovies = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      console.log('yo soy id',id)
      const allMovie = await Movie.destroy({
        where: { id: id }
      })
      res.send('Deleting from the database')
    }
  } catch (error) {
    res.send(`Error in route /Movie/delete ${error}`);
  }

};

module.exports = {
  deleteMovies
}
