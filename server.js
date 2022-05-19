const express = require('express')
const app = express();
const boardRouter = require('./routes/board.route')
const userRouter = require('./routes/user.route')
const articleRouter = require('./routes/articles.route')
const passport = require('passport');
const helmet = require('helmet');

//parses incoming request
app.use(express.json())

app.use(helmet())
app.use(passport.initialize())
require('./auth/passport')

//routes
app.use('/boards',boardRouter)
app.use('/login',userRouter)
app.use('/articles',articleRouter)


app.listen('3000',()=>{
    console.log("server is started")
})