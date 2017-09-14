const express = require('express');
const passport = require('passport');
const multer = require('multer');

const multerOptions = {
  storage: multer.memoryStorage(),
};

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
  .post('/convertBase64', multer(multerOptions).any(), (req, res) => {
    console.log(req.files);
  });
