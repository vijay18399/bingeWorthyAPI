const express = require('express');
const router = express.Router();
const episodeController = require('../controllers/episode.controller');

// Define routes for Episode model
router.post('/', episodeController.createEpisode);
router.get('/', episodeController.getEpisodes);
router.get('/:id', episodeController.getEpisodeById);
router.delete('/:id', episodeController.deleteEpisode);
// Add more routes as needed

module.exports = router;
