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

function getDistanceFromLatLonInMi(coordinates) {
  const [lng1, lat1] = coordinates;
  const lng2 = -90.12072790000002;
  const lat2 = 29.9403477;
  const R = 3959; // Radius of the earth in mi
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in mi
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

exports.getDistanceToCampus = (req, res, next) => {
  req.body.distanceToCampus = getDistanceFromLatLonInMi(
    req.body.location.coordinates
  );
  next();
};

exports.imageMiddleware = multer(multerOptions).array('photos');

exports.createProperty = (req, res) => {
  req.body.photos = req.files.map((f, i) => ({
    location: f.location,
    rotate: req.body.rotates[i],
  }));
  const property = new Property(req.body);
  property.save().then(() => res.redirect('back'));
};
