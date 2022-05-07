const express = require('express')

const Clan = require('../controllers/clan')

const router = express.Router()

router
.get('/', Clan.GetAllClans)
.get('/:id', Clan.GetClanById)
.get('/search/:name', Clan.GetClanById)
module.exports = router