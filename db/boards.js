const knex = require('./knex')

async function getById(id){
    return await knex("boards").where("id",id).first();
}

function postItemQuery(item){
    return knex("boards").insert(item).then(
        (res) => {return getById(res[0])}
    )

}

function putItemQuery(id,itemstage){
    return knex("boards").where("id",id).update({stage:itemstage.stage}).then(
            ()=>{
                return getById(id)
            }
            );
}

module.exports = {
    postItemQuery,
    putItemQuery
}