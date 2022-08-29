'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Book = require('./models/book.js');

async function seed() {
  //we need a 
  //title
  //desc
  //status if its in our fav book collection
  await Book.create({
    title: 'Dune',
    description: 'Dude gets stuck in a really dry desert with big worms.',
    status: true
  });
  console.log('Dune was added to database');
  await Book.create({
    title: 'Winnie the Pooh',
    description: 'Bear, he really likes honey!',
    status: true
  });
  console.log('Pooh was added to database');
  await Book.create({
    title: 'HuckleBerry Finn',
    description: 'I dont know, something about racism and running away with some random farm hand I think',
    status: false
  })
  console.log('Finn was added to database');
  mongoose.disconnect();
}

seed();