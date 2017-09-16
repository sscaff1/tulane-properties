const mongoose = require('mongoose');
const Property = mongoose.model('Property');

exports.getProperties = (req, res) => {
  Property.find()
    .sort({ updatedAt: -1 })
    .then(properties => {
      res.json(properties);
    });
};
