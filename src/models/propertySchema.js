const mongoose = require('mongoose');

// //MOCK JSON
// {
//   "id": 1,
//   "address": "2218 Thornridge Cir.",
//   "city": "Syracuse",
//   "state": "Connecticut",
//   "zipCode": 35624,
//   "price": 1549586,
//   "homeDetails": {
//     "homeType": "Apartment",
//     "bedrooms": 3,
//     "bathrooms": 2,
//     "garage": 2,
//     "sqft": 1963,
//     "area": 1176,
//     "tax": 1340,
//     "year": 2022,
//     "buildingAge": "5 Year",
//     "size": "1,500 - 2,000",
//     "parking": "Detached 2 Garage, 6 Parking",
//     "basement": "Unfinished",
//     "mls": "E5579076",
//     "possession": "5 day"
//   },
//   "listingDetails": {
//     "type": "Single-Family",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis semper. Integer placerat volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet semper tempus. Etiam auctor lacus leo , sit amet lacinia nisl tincidunt eget."
//   }
// }

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
