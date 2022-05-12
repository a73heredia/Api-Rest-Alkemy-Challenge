const { Character } = require("../../db");

const putCharacter = async (req, res) => {
    let{id}=req.params;
    let{name,image,age,weight,history}=req.body;
  try {
    const result = await Character.update({name,image,age,weight,history }, { where: { id} });
    if(result[0]) res.send("Changed  in route PUT/api/character");
  } catch (error) {
    console.error(error);
    res.status(404).send("Error in route PUT/api/character");
  }
};


module.exports = { putCharacter };