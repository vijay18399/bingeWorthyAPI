const express = require('express');
const mongoose = require('mongoose');
require("dotenv/config");
const authRoutes = require('./routes/auth.routes');
const actorRoutes = require('./routes/actor.routes');
const contentRoutes = require('./routes/content.routes');
const franchiseRoutes = require('./routes/franchise.routes');

const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

// Add middleware to parse request body
app.use(express.json());

// Add routes
app.use('/auth', authRoutes);
app.use('/api/contents', contentRoutes);
app.use('/api/actors', actorRoutes);
app.use('/api/franchises', franchiseRoutes);


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit the application if MongoDB connection fails
  });
