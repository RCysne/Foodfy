const express = require('express');
const nunjucks = require('nunjucks');
const server = express();

//Qual a engine usar e qual o tipo de arquivo
server.set("view engine", "html"); 

//Local dos arquivos a serem lidos, na pasta views e utilizando o express e qual o arquivo que ele está olhando, no caso o server que está definindo a engine e o tipo de arquivo
nunjucks.configure("views", { 
  express:server
})


server.get('/', (req, res) => res.send('Dev Ronaldo Cysne'));




server.listen(5000, () => {
  console.log('Server is online.')
})