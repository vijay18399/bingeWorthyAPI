const mongoose = require('mongoose');
const TagSchema = new mongoose.Schema({
    name: String,
    slug: String,
    contents:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Content'
        }
    ]
  });
const Tag = mongoose.model('Tag', TagSchema);
module.exports = Tag;