'use strict';

// bring in mongoose:
const mongoose = require('mongoose');

// extract thhe schema property from the mongoose object
const { Schema } = mongoose;

// create a cat schema, define how our object will be structured
const BookSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  status: {type: Boolean, required: true}
});

// define the model
// it gives mongoose functionality and a predefined schema to shape our data
// it takes in a string and a scheme
const BookModel = mongoose.model('Book', BookSchema);

module.exports = BookModel;