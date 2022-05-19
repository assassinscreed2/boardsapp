const {postItemQuery,putItemQuery} = require('../db/boards')

async function postItem(req,res){
    try{
        const result = await postItemQuery(req.body)
        res.status(201).json(result)
    }catch(e){
        res.status(404).json(e)
    }
    
}

async function putItem(req,res){
    try{
        if(req.body.stage > 3){
            return res.sendStatus(400)
        }
    
        const result = await putItemQuery(req.params.id,req.body)
        if(result){
            return res.status(200).json(result)
        }
        return res.status(404).json({message:"Enter Correct ID"})
        
    }catch(e){
        res.status(404).json(e)
    }
}

module.exports = {
    postItem,
    putItem
}