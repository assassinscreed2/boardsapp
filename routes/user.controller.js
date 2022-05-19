const {insertUserQuery,loginUserQuery} = require('../db/users')

async function insertUser(req,res){
    const user = await insertUserQuery(req.body)
    res.json(user)
}

async function checkUser(req,res){
    const user = await loginUserQuery(req.body)
    res.json({success:"yes"})
}

module.exports = {
    insertUser,
    checkUser
}