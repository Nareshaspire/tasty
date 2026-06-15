const express = require('express');
const Listing = require('../models/Listing');

const router = express.Router();

// Create listing (public for local community upload)
router.post('/', async (req, res) => {
  const { title, type, description, price, contact, location } = req.body;
  if (!title || !type || !description || !contact || !location) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const listing = new Listing({ title, type, description, price: type === 'donate' ? 0 : price, contact, location });
    await listing.save();
    res.json(listing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all active listings
router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find({ active: true }).sort({ createdAt: -1 });
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Soft-delete listing
router.delete('/:id', auth, async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ error: 'Listing not found' });
    listing.active = false;
    await listing.save();
    res.json({ message: 'Listing removed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
