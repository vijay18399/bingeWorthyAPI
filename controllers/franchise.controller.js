const Franchise = require('../models/franchise.model');

// Create a new franchise
exports.createFranchise = async (req, res) => {
  try {
    const { name, description } = req.body;
    const franchise = new Franchise({ name, description });
    await franchise.save();
    res.status(201).json(franchise);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Get all franchises
exports.getFranchises = async (req, res) => {
  try {
    const franchises = await Franchise.find();
    res.json(franchises);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Get franchise by ID
exports.getFranchiseById = async (req, res) => {
  try {
    const franchise = await Franchise.findById(req.params.id);
    if (!franchise) {
      return res.status(404).json({ message: 'Franchise not found' });
    }
    res.json(franchise);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
exports.deleteFranchise = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedFranchise = await Franchise.findByIdAndRemove(id);
  
      if (!deletedFranchise) {
        return res.status(404).json({ message: 'Franchise not found' });
      }
  
      res.status(200).json({ message: 'Franchise deleted', deletedFranchise });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting Franchise', error });
    }
  };