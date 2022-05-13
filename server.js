const express = require('express');
const server = express();


server.get('/', (req, res) => res.send('Dev Ronaldo Cysne'));







server.listen(5000, () => {
  console.log('Server is online.')
})