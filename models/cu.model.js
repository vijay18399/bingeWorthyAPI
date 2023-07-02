const mongoose = require('mongoose');
const cinematicUniverseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: false
  },
  contents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Content'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const CinematicUniverse = mongoose.model('CinematicUniverse', cinematicUniverseSchema);
module.exports = {
  CinematicUniverse
};
