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
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag'
    }
  ],
  year: {
    type: Number,
    required: true
  },
  actors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Actor'
  }],
  isSeries: {
    type: Boolean,
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
