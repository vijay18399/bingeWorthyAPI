const Tag = require('../models/tag.model');

// Create a new tag
exports.createTag = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const tag = new Tag({ name, slug });
    await tag.save();
    res.status(201).json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Get all tags
exports.getTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};


exports.deleteTag = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedTag = await Tag.findByIdAndRemove(id);
  
      if (!deletedTag) {
        return res.status(404).json({ message: 'Tag not found' });
      }
  
      res.status(200).json({ message: 'Tag deleted', deletedTag });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting Tag', error });
    }
  };