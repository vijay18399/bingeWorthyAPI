const Episode = require('../models/episode.model');

// Create a new episode
exports.createEpisode = async (req, res) => {
  try {
    const { title, description, duration } = req.body;
    const episode = new Episode({ title, description, duration });
    await episode.save();
    res.status(201).json(episode);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Get all episodes
exports.getEpisodes = async (req, res) => {
  try {
    const episodes = await Episode.find();
    res.json(episodes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Get episode by ID
exports.getEpisodeById = async (req, res) => {
  try {
    const episode = await Episode.findById(req.params.id);
    if (!episode) {
      return res.status(404).json({ message: 'Episode not found' });
    }
    res.json(episode);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};


exports.deleteEpisode = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedEpisode = await Episode.findByIdAndRemove(id);
  
      if (!deletedEpisode) {
        return res.status(404).json({ message: 'Episode not found' });
      }
  
      res.status(200).json({ message: 'Episode deleted', deletedEpisode });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting Episode', error });
    }
  };