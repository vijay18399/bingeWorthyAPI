const mongoose = require('mongoose');
const EpisodeSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
    },
    duration: {
      type: Number,
      required: true
    }
  });
const Episode = mongoose.model('Episode', EpisodeSchema);
module.exports = Episode;