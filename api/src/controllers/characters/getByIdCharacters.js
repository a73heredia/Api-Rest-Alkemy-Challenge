const { Character } = require("../../db");

const getByIdCharacters = async (req, res) => {
    try {
        const { id } = req.params
       // console.log('yo soy id', id)
        const char = await Character.findOne({
            where: { id: id },
        });
        if (!char) {
            res.json({
                message: "There is no character with this id " + id
            })
        }
        //console.log('yo soy char',char)
        res.json(char)

    } catch (error) {
        console.error(error);
        return 0;
    }

}
module.exports = {
    getByIdCharacters
}