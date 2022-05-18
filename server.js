const express = require('express')
const app = express();
const boardRouter = require('./routes/board.route')

//parses incoming request
app.use(express.json())

app.use('/boards',boardRouter)

app.listen('3000',()=>{
    console.log("server is started")
})