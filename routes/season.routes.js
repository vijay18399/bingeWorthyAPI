const express = require('express');
const router = express.Router();
const seasonController = require('../controllers/season.controller');

// Define routes for Season model
router.post('/', seasonController.createSeason);
router.get('/', seasonController.getSeasons);
router.get('/:id', seasonController.getSeasonById);
router.delete('/:id', seasonController.deleteSeason);
// Add more routes as needed

module.exports = router;
