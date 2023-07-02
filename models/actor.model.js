const mongoose = require('mongoose');
const ActorSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    profile: String,
    description: String,
    birthDate: Date,
    contents:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Content'
        }
    ]
  });
const Actor = mongoose.model('Actor', ActorSchema);
module.exports = Actor;