const knex = require('./knex')

// function checkUser(user){
//     knex.select('username').from('users').where('username',user.username)
// }

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
    return await knex("users").where("username",user.username)
}


function loginUserQuery(user){
    isUserPresent(user).then((res)=>console.log(res))
}

module.exports = {
    insertUserQuery,
    loginUserQuery
}