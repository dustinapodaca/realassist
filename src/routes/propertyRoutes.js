'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Property = require('../models/propertySchema.js');

const router = express.Router();

// const mockPropertyData = [
//   {
//     "id": 1,
//     "address": "2218 Thornridge Cir.",
//     "city": "Syracuse",
//     "state": "Connecticut",
//     "zipCode": 35624,
//     "price": 1549586,
//     "homeDetails": {
//       "homeType": "Apartment",
//       "bedrooms": 3,
//       "bathrooms": 2,
//       "garage": 2,
//       "sqft": 1963,
//       "area": 1176,
//       "tax": 1340,
//       "year": 2022,
//       "buildingAge": "5 Year",
//       "size": "1,500 - 2,000",
//       "parking": "Detached 2 Garage, 6 Parking",
//       "basement": "Unfinished",
//       "mls": "E5579076",
//       "possession": "5 day"
//     },
//     "listingDetails": {
//       "type": "Single-Family",
//       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     }
//   }
// ];

//ALL PROPERTIES MONGO
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

//SINGLE PROPERTY BY ID MONGO
router.get('/:id', async (req, res) => {
  try {
    let propertyId = parseInt(req.params.id);
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).send('Property not found');
    }
    res.status(200).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// ADD NEW PROPERTY MONGO
router.post('/', async (req, res) => {
  try {
    const newProperty = new Property({
      _id: new mongoose.Types.ObjectId(),
      ...req.body,
    });
    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// EDIT PROPERTY BY ID MONGO
router.put('/:id', async (req, res) => {
  try {
    let propertyId = parseInt(req.params.id);
    const updatedProperty = await Property.findByIdAndUpdate(propertyId, req.body, { new: true });
    if (!updatedProperty) {
      return res.status(404).send('Property not found');
    }
    res.status(200).json(updatedProperty);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// DELETE PROPERTY BY ID MONGO
router.delete('/:id', async (req, res) => {
  try {
    let propertyId = parseInt(req.params.id);
    const deletedProperty = await Property.deleteOne({ id: propertyId });
    if (!deletedProperty) {
      return res.status(404).send('Property not found');
    }
    res.status(204).send('Property successfully deleted');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

//SINGLE PROPERTY BY ID MOCK
// router.get('/:id', async (req, res) => {
//   try {
//     let propertyId = parseInt(req.params.id);
//     const property = mockPropertyData.find(property => property.id === propertyId);
//     if (!property) {
//       return res.status(404).send('Property not found');
//     }
//     res.status(200).json(property);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

module.exports = router;
