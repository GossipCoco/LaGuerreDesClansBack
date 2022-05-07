const express = require('express')

const Character = require('../controllers/character')

const router = express.Router()

router
.get('/', Character.GetAllCharacters)

module.exports = router