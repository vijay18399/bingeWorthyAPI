const mongoose = require('mongoose');
const franchiseSchema = new mongoose.Schema({
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
  
const Franchise = mongoose.model('Franchise', franchiseSchema);
module.exports = Franchise;
  