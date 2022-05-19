const express = require('express')
const userRouter = express.Router();
const {login} = require('../controllers/user.controller')

userRouter.post('',login)

module.exports = userRouter