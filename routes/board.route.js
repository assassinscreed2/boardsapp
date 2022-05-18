const express = require('express')
const {postItem,putItem} = require('./board.controller.js')

const boardRouter = express.Router();

boardRouter.post('',postItem)
boardRouter.put('/:id',putItem)

module.exports = boardRouter