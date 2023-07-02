const express = require('express');
const router = express.Router();
const cu = require('../controllers/cu.controller');

// Define routes for CinematicUniverse model
router.post('/', cu.createCinematicUniverse);
router.get('/', cu.getCinematicUniverses);
router.get('/:id', cu.getCinematicUniverseById);
router.delete('/:id', cu.deleteCinematicUniverse);
// Add more routes as needed

module.exports = router;
