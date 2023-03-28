'use strict';

const express = require('express');
const router = express.Router();
const Property = require('../models/propertySchema.js');

//ALL PROPERTIES
// router.get('/', async (req, res) => {
//   try {
//     const homes = await Property.find();
//     res.json(homes);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

//SINGLE PROPERTY BY ID
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).send('Property not found');
    }
    res.json(property);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
