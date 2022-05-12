const{ Character}=require('../../db.js')
const delateCharacter=async(rerq,res)=>{

    const{id}=req.prams;
    try {
        if(id){
            const allCharacter=await Character.destroy({
                where:{id:id}
            })
            res.send('Deleting from the database')
        }
    } catch (error) {
        res.send(error.message)
    }
}