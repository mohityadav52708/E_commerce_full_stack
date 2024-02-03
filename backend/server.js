// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => {
    console.log(error);
  });

// Define routes
const exampleRouter = require('./routes/example');
const aboutRouter = require('./routes/about');

app.use('/api/example', exampleRouter);
app.use('/about', aboutRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
