const express = require('express')

const Character = require('../controllers/character')

const router = express.Router()

router
.post('/', Character.GetAllCharacters)
.get('/:id', Character.GetCharacterByName)
.get('/search/:name', Character.GetCharacterByNameSearch)
.post('/createANewCharacter', Character.CreateANewCharacter)
.post('/countAllcharacters')
module.exports = router