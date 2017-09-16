const express = require('express');
const { getProperties } = require('../controllers/api');

module.exports = express.Router().get('/getProperties', getProperties);
