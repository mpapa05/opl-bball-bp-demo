const express = require('express');
const router = express.Router();
const Court = require('../models/Court');

router.get('/', async (req, res) => {
  try {
    const courts = await req.app.locals.courtsCollection.find().toArray();
    res.json(courts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await req.app.locals.courtsCollection.insertOne(req.body);
    res.status(201).json(result.ops[0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;