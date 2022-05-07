const express = require('express');

const Home = require('../controllers/home');

const router = express.Router();

router
    .get('/', Home.get);

module.exports = router;