const { Character } = require('../../db');

const postCharacter = async (req, res) => {
try{
    let{name,image,age,weight, history}=req.body
   //console.log('esto es un error',req.body)
    
   let characterCreated= await Character.create({
        name,
        image,
        age,
        weight, 
        history
    })
    res.status(200).json(characterCreated)
   // console.log('Created Character',characterCreated)
   } catch (error) {
    console.log(error)
    }
}
 module.exports={postCharacter}