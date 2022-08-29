'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { response } = require('express');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.get('*', (request, response) => {
  response.send(' 404 Not Found. These are not the droids you\'re looking for.');
});



app.listen(PORT, () => console.log(`listening on ${PORT}`));
