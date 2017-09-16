const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const mongoose = require('mongoose');
const Property = mongoose.model('Property');
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

exports.imageMiddleware = multer(multerOptions).array('photos');

exports.createProperty = (req, res) => {
  req.body.photos = req.files.map(f => f.location);
  const property = new Property(req.body);
  property.save().then(() => res.redirect('back'));
};
