const express = require('express')

const Clan = require('../controllers/clan')

const router = express.Router()

router
.get('/', Clan.GetAllClans)
module.exports = router