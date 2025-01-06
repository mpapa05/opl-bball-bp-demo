const express = require('express');
const router = express.Router();
const Court = require('../models/Court');

// Kosárpályák listázása
router.get('/', async (req, res) => {
  try {
    const courts = await Court.find();
    res.json(courts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Új kosárpálya létrehozása
router.post('/', async (req, res) => {
  const court = new Court({
    name: req.body.name,
    location: req.body.location
  });

  try {
    const newCourt = await court.save();
    res.status(201).json(newCourt);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
