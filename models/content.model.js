const mongoose = require('mongoose');
const ContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  poster: {
    type: String,
  },
  tags: [
    {
      type:String
    }
  ],
  releaseDate: {
    type: Date,
  },
  genres: [{
    type:String
  }],
  actors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Actor'
  }],
  type: {
    type: String,
    required: true
  },
  seasons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Season'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;
