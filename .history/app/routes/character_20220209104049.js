const express = require('express')

const Character = require('../controllers/character')

const router = express.Router()

router
.get('/', Character.GetAllCharacters)
.get('/:idClan/Clan', Character.GetAllCharactersByClan)
.get('/id', Character.GetCharacterById)
module.exports = router