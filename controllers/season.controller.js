const Season = require('../models/season.model');

// Create a new season
exports.createSeason = async (req, res) => {
  try {
    const { number, description, poster } = req.body;
    const season = new Season({ number, description, poster });
    await season.save();
    res.status(201).json(season);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Get all seasons
exports.getSeasons = async (req, res) => {
  try {
    const seasons = await Season.find();
    res.json(seasons);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Get season by ID
exports.getSeasonById = async (req, res) => {
  try {
    const season = await Season.findById(req.params.id);
    if (!season) {
      return res.status(404).json({ message: 'Season not found' });
    }
    res.json(season);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.deleteSeason = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedSeason = await Season.findByIdAndRemove(id);
  
      if (!deletedSeason) {
        return res.status(404).json({ message: 'Season not found' });
      }
  
      res.status(200).json({ message: 'Season deleted', deletedSeason });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting Season', error });
    }
  };