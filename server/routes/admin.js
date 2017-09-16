const express = require('express');
const passport = require('passport');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
require('dotenv').config({ path: 'variables.env' });

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const multerOptions = {
  storage: multerS3({
    s3,
    bucket: process.env.BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
  }),
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
  .post('/saveProperty', multer(multerOptions).array('photos'), (req, res) => {
    console.log(req.files);
  });
