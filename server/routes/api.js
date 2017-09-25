const express = require('express');
const { getProperties, getProperty } = require('../controllers/api');

module.exports = express
  .Router()
  .get('/getProperties', getProperties)
  .get('/getProperty/:slug', getProperty);
