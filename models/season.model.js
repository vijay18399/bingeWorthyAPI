const mongoose = require('mongoose');
const SeasonSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true
  },
  description: {
    type: String,
  },
  poster: {
    type: String,
  },
  episodes: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Episode'
    }
  ]
});
const Season = mongoose.model('Season', SeasonSchema);
module.exports = {
  Season
};