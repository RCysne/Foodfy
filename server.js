//  =====  INICIANDO O SERVIDOR =======

const express = require('express');
const nunjucks = require('nunjucks');
const server = express();




// ========  CONFIGURAÇÕES DO SERVIDOR

// Configurando para usar os arquivos estáticos na pasta public(css, e outros). Com isso ele fica observando nessa pasta os arquivos estáticos
server.use(express.static('public'))

//Qual a engine usar e qual o tipo de arquivo
server.set("view engine", "html"); 

//Local dos arquivos a serem lidos, na pasta views e utilizando o express e qual o arquivo que ele está olhando, no caso o server que está definindo a engine e a variável que está usando no express
nunjucks.configure("views", { 
  express:server
})





// ========   ROTAS ========

// Criando a rota. Fazendo o get responder renderizando o arquivo index. Não precisa colocar o html porque na configuração do server.set ele já diz qual o tipo de arquivo
server.get('/', (req, res) => res.render('index'));

// Criando a rota sobre
server.get('/sobre', (req, res) => res.render('sobre'));

// Criando a rota das receitas
server.get('/receitas', (req, res) => res.render('receitas'));





// =========  PORTA DO SERVIDOR ========

server.listen(5000, () => {
  console.log('Server is online.')
})