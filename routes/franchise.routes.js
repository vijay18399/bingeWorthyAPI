const express = require('express');
const router = express.Router();
const franchiseController = require('../controllers/franchise.controller');

// Define routes for Franchise model
router.post('/', franchiseController.createFranchise);
router.get('/', franchiseController.getFranchises);
router.get('/:id', franchiseController.getFranchiseById);
router.delete('/:id', franchiseController.deleteFranchise);
// Add more routes as needed

module.exports = router;
