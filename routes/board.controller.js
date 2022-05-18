const {postItemQuery,putItemQuery} = require('../db/boards')

async function postItem(req,res){
    try{
        const result = await postItemQuery(req.body)
        res.status(201).json(result)
    }catch(e){
        res.json(e)
    }
    
}

async function putItem(req,res){
    try{
        if(req.body.stage > 3){
            return res.sendStatus(400)
        }
    
        const result = await putItemQuery(req.params.id,req.body)
        res.status(200).json(result)
    }catch(e){
        res.json(e)
    }
    
}

module.exports = {
    postItem,
    putItem
}