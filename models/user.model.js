const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  watchList:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content'
    }
  ],
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash the password before saving the user
userSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

// Verify the password against the hashed password
userSchema.methods.verifyPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
