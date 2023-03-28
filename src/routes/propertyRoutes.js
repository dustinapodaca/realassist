'use strict';

const express = require('express');
const Property = require('../models/propertySchema.js');

const router = express.Router();

const mockPropertyData = [
  {
    "id": 1,
    "address": "2218 Thornridge Cir.",
    "city": "Syracuse",
    "state": "Connecticut",
    "zipCode": 35624,
    "price": 1549586,
    "homeDetails": {
      "homeType": "Apartment",
      "bedrooms": 3,
      "bathrooms": 2,
      "garage": 2,
      "sqft": 1963,
      "area": 1176,
      "tax": 1340,
      "year": 2022,
      "buildingAge": "5 Year",
      "size": "1,500 - 2,000",
      "parking": "Detached 2 Garage, 6 Parking",
      "basement": "Unfinished",
      "mls": "E5579076",
      "possession": "5 day"
    },
    "listingDetails": {
      "type": "Single-Family",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis semper. Integer placerat volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet semper tempus. Etiam auctor lacus leo , sit amet lacinia nisl tincidunt eget."
    }
  }
];

//ALL PROPERTIES MONGO
// router.get('/', async (req, res) => {
//   try {
//     const homes = await Property.find();
//     res.json(homes);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

//SINGLE PROPERTY BY ID MONGO
// router.get('/:id', async (req, res) => {
//   try {
//     let propertyId = parseInt(req.params.id);
//     const property = await Property.findById(propertyId);
//     if (!property) {
//       return res.status(404).send('Property not found');
//     }
//     res.json(property);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

//SINGLE PROPERTY BY ID MOCK
router.get('/:id', async (req, res) => {
  try {
    let propertyId = parseInt(req.params.id);
    const property = mockPropertyData.find(property => property.id === propertyId);
    if (!property) {
      return res.status(404).send('Property not found');
    }
    res.status(200).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
