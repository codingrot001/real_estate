const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String], // Array of strings
    default: [],
  },
  furnished: {
    type: Boolean,
    default: false,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Array of image URLs
    default: [],
  },
});

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;
