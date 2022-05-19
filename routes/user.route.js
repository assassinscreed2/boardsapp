const express = require('express')
const userRouter = express.Router();
const {login} = require('./user.controller')

userRouter.post('/login',login)

module.exports = userRouter