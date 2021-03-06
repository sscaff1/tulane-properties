const express = require('express');
const passport = require('passport');
const {
  imageMiddleware,
  createProperty,
  getDistanceToCampus,
} = require('../controllers/admin');

module.exports = express
  .Router()
  .post(
    '/login',
    passport.authenticate('local', {
      failureRedirect: '/admin',
      failureFlash: 'Failed to Login!',
      successRedirect: '/admin/manage',
    })
  )
  .post('/saveProperty', imageMiddleware, getDistanceToCampus, createProperty);
