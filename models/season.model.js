// season.model.js
const mongoose = require('mongoose');
const Episode = require('./episode.model');

const SeasonSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  poster: {
    type: String,
  },
  episodes: [Episode.schema], // Array of episodes within SeasonSchema
});

const Season = mongoose.model('Season', SeasonSchema);

module.exports = Season;
