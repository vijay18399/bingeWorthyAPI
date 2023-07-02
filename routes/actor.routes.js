const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actor.controller');

// Define routes for Actor model
router.post('/', actorController.createActor);
router.get('/', actorController.getActors);
router.get('/:id', actorController.getActorById);
router.delete('/:id', actorController.deleteActor);
// Add more routes as needed

module.exports = router;
