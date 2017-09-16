const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'You must provide a name!',
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  location: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: [Number],
    address: {
      type: String,
      required: 'You must supply an address!',
    },
  },
  bedrooms: String,
  bathrooms: String,
  price: Number,
  bullets: [String],
  photos: [String],
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

propertySchema.index({ location: '2dsphere' });

propertySchema.pre('save', function(next) {
  const newDate = new Date();
  if (this.isNew) {
    this.createdAt = newDate;
    this.updatedAt = newDate;
  } else if (this.isModified()) {
    this.updatedAt = newDate;
  }
  next();
});

module.exports = mongoose.model('Property', propertySchema);
