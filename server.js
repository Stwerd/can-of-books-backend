'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const mongoose = require('mongoose');
const Book = require('./models/book.js');

//add validation to confirm we are wire up into our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

mongoose.connect(process.env.DB_URL);

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {

  response.send('Welcome to our can-of-books backend')
})


app.get('/books', getBooks);


app.get('*', (request, response) => {
  response.send(' 404 Not Found. These are not the droids you\'re looking for.');
});

app.use((error, request, response, next) =>{
  response.status(500).send(error.message);
})


async function getBooks(req, res, next) {
  try {
    let results = await Book.find();
    res.status(200).send(results);
  }
  catch(err){
    next(err);
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
