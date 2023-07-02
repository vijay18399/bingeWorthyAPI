const express = require('express');
const mongoose = require('mongoose');
require("dotenv/config");
const authRoutes = require('./routes/auth.routes');
const actorRoutes = require('./routes/actor.routes');
const contentRoutes = require('./routes/content.routes');
const tagRoutes = require('./routes/tag.routes');
const cinematicUniverseRoutes = require('./routes/cu.routes');
const franchiseRoutes = require('./routes/franchise.routes');
const seasonRoutes = require('./routes/season.routes');
const episodeRoutes = require('./routes/episode.routes');
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
app.use('/api/tags', tagRoutes);
app.use('/api/cu', cinematicUniverseRoutes);
app.use('/api/franchises', franchiseRoutes);
app.use('/api/seasons', seasonRoutes);
app.use('/api/episodes', episodeRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit the application if MongoDB connection fails
  });
