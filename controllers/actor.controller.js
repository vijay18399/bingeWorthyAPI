const Actor = require('../models/actor.model');

// Create a new actor
exports.createActor = async (req, res) => {
  try {
    const { name, profile, description, birthDate } = req.body;
    const actor = new Actor({ name, profile, description, birthDate });
    await actor.save();
    res.status(201).json(actor);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Get all actors
exports.getActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Get actor by ID
exports.getActorById = async (req, res) => {
  try {
    const actor = await Actor.findById(req.params.id);
    if (!actor) {
      return res.status(404).json({ message: 'Actor not found' });
    }
    res.json(actor);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.deleteActor = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedActor = await Actor.findByIdAndRemove(id);
  
      if (!deletedActor) {
        return res.status(404).json({ message: 'Actor not found' });
      }
  
      res.status(200).json({ message: 'Actor deleted', deletedActor });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting Actor', error });
    }
};