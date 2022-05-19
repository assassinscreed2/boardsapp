const express = require('express')
const {postItem,putItem} = require('../controllers/board.controller.js')
const passport = require('passport')

const boardRouter = express.Router();

boardRouter.post('',passport.authenticate('jwt',{session:false}),postItem)
boardRouter.put('/:id',passport.authenticate('jwt',{session:false}),putItem)

module.exports = boardRouter