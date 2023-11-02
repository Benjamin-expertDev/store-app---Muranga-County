const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 5000;

// Load environment variables from .env
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
console.log('MONGO_URI:', process.env.MONGO_URI); 

// Use the MONGO_URI variable from your .env file
const mongoURI = process.env.MONGO_URI;

// Connect to your MongoDB database using the specified URI
mongoose.connect(mongoURI)
  .then(() => {
    startServer();
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the server.');
});

// Start the server
function startServer() {
  app.listen(port, () => {
    console.log(`Server is running on port Ksh{port}`);
  });
}
