const express = require('express')
const userRouter = express.Router();
const {insertUser,checkUser} = require('./user.controller')

userRouter.post('/login',insertUser)
userRouter.post('/check',checkUser)

module.exports = userRouter