const mongoose = require('mongoose');
const slugs = require('slugs');
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
  photos: [
    {
      location: String,
      rotate: Number,
    },
  ],
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

propertySchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    return next();
  }
  this.slug = slugs(this.name);
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  this.constructor.find({ slug: slugRegEx }).then(properties => {
    if (properties.length) {
      this.slug = `${this.slug}-${properties.length + 1}`;
    }
    next();
  });
});

module.exports = mongoose.model('Property', propertySchema);
