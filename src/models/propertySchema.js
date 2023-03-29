'use strict';

const mongoose = require('mongoose');

//HOME DETAILS SCHEMA
const homeDetailsSchema = new mongoose.Schema({
  homeType: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  garage: { type: Number, required: true },
  sqft: { type: Number, required: true },
  area: { type: Number, required: true },
  tax: { type: Number, required: true },
  year: { type: Number, required: true },
  buildingAge: { type: String, required: true },
  size: { type: String, required: true },
  parking: { type: String, required: true },
  basement: { type: String, required: true },
  mls: { type: String, required: true },
  possession: { type: String, required: true },
});

//LISTING DETAILS SCHEMA
const listingDetailsSchema = new mongoose.Schema({
  type: { type: String, required: true },
  description: { type: String, required: true },
});

//PROPERTY SCHEMA
const propertySchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: Number, required: true },
  price: { type: Number, required: true },
  homeDetails: { type: homeDetailsSchema, required: true },
  listingDetails: { type: listingDetailsSchema, required: true },
});

//MODEL
const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
