// content.model.js
const mongoose = require('mongoose');
const Season = require('./season.model');

const ContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
  },
  poster: {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
  releaseDate: {
    type: Date,
  },
  genres: [
    {
      type: String,
    },
  ],
  actors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Actor',
    },
  ],
  type: {
    type: String,
    required: true,
  },
  seasons: [Season.schema], // Array of seasons within ContentSchema
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;
