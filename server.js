const express = require('express')
const app = express();
const boardRouter = require('./routes/board.route')
const userRouter = require('./routes/user.route')
const passport = require('passport');
const helmet = require('helmet');

//parses incoming request
app.use(express.json())
app.use(helmet())
app.use(passport.initialize())
require('./auth/passport')

app.use('/boards',boardRouter)
app.use('',userRouter)

app.get('/protected',passport.authenticate('jwt',{session:false}),(req,res)=>{
res.json({user:req.user})
})

app.listen('3000',()=>{
    console.log("server is started")
})