const express = require('express');
const passport = require('passport');

module.exports = express.Router().post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/admin',
    failureFlash: 'Failed to Login!',
    successRedirect: '/admin/manage',
  })
);
