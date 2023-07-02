const CinematicUniverse = require('../models/cu.model');

// Create a new cinematic universe
exports.createCinematicUniverse = async (req, res) => {
  try {
    const { name, description } = req.body;
    const cinematicUniverse = new CinematicUniverse({ name, description });
    await cinematicUniverse.save();
    res.status(201).json(cinematicUniverse);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Get all cinematic universes
exports.getCinematicUniverses = async (req, res) => {
  try {
    const cinematicUniverses = await CinematicUniverse.find();
    res.json(cinematicUniverses);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Get cinematic universe by ID
exports.getCinematicUniverseById = async (req, res) => {
  try {
    const cinematicUniverse = await CinematicUniverse.findById(req.params.id);
    if (!cinematicUniverse) {
      return res.status(404).json({ message: 'Cinematic universe not found' });
    }
    res.json(cinematicUniverse);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.deleteCinematicUniverse = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCinematicUniverse = await CinematicUniverse.findByIdAndRemove(id);

    if (!deletedCinematicUniverse) {
      return res.status(404).json({ message: 'CinematicUniverse not found' });
    }

    res.status(200).json({ message: 'CinematicUniverse deleted', deletedCinematicUniverse });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting CinematicUniverse', error });
  }
};