const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tag.controller');

// Define routes for Tag model
router.post('/', tagController.createTag);
router.get('/', tagController.getTags);
router.delete('/:id', tagController.deleteTag);
// Add more routes as needed

module.exports = router;
