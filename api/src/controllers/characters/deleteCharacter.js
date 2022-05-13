const { Character } = require('../../db.js')
const deleteCharacter = async (req, res) => {

    const { id } = req.params;
    try {
        if (id) {
            const allCharacter = await Character.destroy({
                where: { id: id }
            })
            res.send('Deleting from the database')
        }
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = deleteCharacter 