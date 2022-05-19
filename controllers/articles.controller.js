const axios = require('axios')

function filterArray(articles){
    return articles.map((article)=>{
        if(article && article.num_comments != null){
            if(article.title != null){
                return {name:article.title,comments:article.num_comments}
            }else if(article.story_title != null){
                return {name:article.story_title,comments:article.num_comments}
            }
        }
    }).filter((article)=>article!=null)
}

function sortedArray(limit, articles){
    const new_array = filterArray(articles)
    new_array.sort((a,b) => {
        if(a.comments != b.comments){
            return a.comments - b.comments
        }else{
            return a.name - b.name
        }})
    new_array.reverse()
    if(limit >= new_array.length){
        return new_array
    }
    const result = new_array.slice(0,limit)
    return result;
}

async function fetchedArray(limit){

    const full_array = []

    for(let i = 1;i<=5;i++){
        const response = await axios.get(`https://jsonmock.hackerrank.com/api/articles?page=${i}`)
        full_array.push(...response.data.data)
    }

    const sorted_array = sortedArray(limit,full_array)
    const newsorted_array = sorted_array.map((article)=>{return article.name})
    return newsorted_array
}

async function responseArticles(req,res){
    const result = await fetchedArray(req.params.limit)
    res.status(200).json(result)
}

module.exports = {
    responseArticles
}