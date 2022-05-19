const knex = require('./knex')

async function getUserById(id){
    return await knex("users").where("id",id).first();
}

//return user stored data
function insertUserQuery(user){
    return knex("users").insert(user).then(
        (res)=> {return getUserById(res[0])}
    )
}

//return an (Promise)array containing a user (if present)
async function isUserPresent(user){
    return knex("users").where("username",user.username)
}

module.exports = {
    insertUserQuery,
    isUserPresent,
    getUserById
}