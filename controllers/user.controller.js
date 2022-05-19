const {insertUserQuery,isUserPresent} = require('../db/users')
const {hashSync, compareSync} = require('bcrypt')
const jwt = require('jsonwebtoken')

async function login(req,res){
    const data = await isUserPresent(req.body)
    if(data.length != 0){
        //user is already present inside the database

        const user = data[0]
        if(!compareSync(req.body.password,user.password)){
            return res.json({message:"Incorrect Password"})
        }

        const payload = {
            email: user.email,
            id: user.id
        }

        const token = jwt.sign(payload,"SecretKey123!@#", { expiresIn : "7d"})

        res.status(200).json({
            message: "Logged In successfully",
            token: `Bearer ${token}`
        })

    }else{
        // insert the user in the database
        const email = req.body.email
        const password = hashSync(req.body.password,10)
        const user = await insertUserQuery({email,password})
        
        return res.json({
            message: "Logged in Successfully",
            user: user
        })
        
    }
}

module.exports = {
    login
}