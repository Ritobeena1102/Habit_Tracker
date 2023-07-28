const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.MongoDB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
