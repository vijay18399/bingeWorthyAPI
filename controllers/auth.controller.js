const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.registerUser = async (req, res, next) => {
  try {
    // Check if a user with the given email already exists
    const existingUser = await User.findOne({
      email: req.body.email
    });
    if (existingUser) {
      return res.status(409).send('Email already exists');
    }
    // Create a new user with the provided data
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role || "USER",
      createdAt: new Date()
    });

    // Save the user to the database
    await user.save();

    // Generate a token for the user
    const token = jwt.sign({
      userId: user._id
    }, process.env.SECRET);

    // Return the token to the client
    res.json({
      token
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    // Find the user with the provided email address
    const user = await User.findOne({
      email: req.body.email
    });

    // Verify the password against the hashed password
    const isPasswordValid = await user.verifyPassword(req.body.password);
    console.log(user,isPasswordValid)
    if (!user || !isPasswordValid) {
      // If the user does not exist or the password is incorrect, return an error
      res.status(401).send('Invalid email or password');
    } else {
      // Generate a token for the user
      const token = jwt.sign({
        userId: user._id
      }, process.env.SECRET);

      // Return the token to the client
      res.json({
        token
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndRemove(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted', deletedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting User', error });
  }
};
exports.getUsers = async (req, res, next) => {
  try {
    // Find all users in the database and exclude the password field
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};