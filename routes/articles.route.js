const {responseArticles} = require('../controllers/articles.controller')
const express = require('express')
const passport = require('passport')
const articleRouter = express.Router()

articleRouter.get('/:limit',passport.authenticate('jwt',{session:false}),responseArticles)

module.exports = articleRouter