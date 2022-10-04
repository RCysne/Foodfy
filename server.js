//  =====  INICIANDO O SERVIDOR =======

const express = require('express'); // Requisitando o uso do Express
const nunjucks = require('nunjucks');
const server = express(); // Colocando a função do Express em uma variável
const pratos = require("./data")


// ========  CONFIGURAÇÕES DO SERVIDOR

// Configurando para usar os arquivos estáticos na pasta public(css, e outros). Com isso ele fica observando nessa pasta os arquivos estáticos.
server.use(express.static('public'))

//Qual a engine usar e qual o tipo de arquivo.
server.set("view engine", "html"); 

//Local dos arquivos a serem lidos, na pasta views e utilizando o express e qual o arquivo que ele está olhando, no caso o server que está definindo a engine e a variável que está usando no express. Autoescape é para correção de de vazamento de código html
nunjucks.configure("views", { 
  express:server,
  autoescape: false
})



// ========   ROTAS ========


// Criando a rota. Fazendo o get responder renderizando o arquivo index. Não precisa colocar o html porque na configuração do server.set ele já diz qual o tipo de arquivo.
server.get('/', (req, res) => res.render('index'));

// Criando a rota sobre.
server.get('/sobre', (req, res) => res.render('sobre'));

// Criando a rota das receitas. E tornando dinâmico criando o segundo parâmetro com o objeto e seus 
server.get('/receitas', (req, res) => res.render('receitas', { items: pratos }));



// Rota de erro deve ficar depois de todas as outras rotas para caso nenhuma rota seja achada essa rota será acionada.
server.use((req, res) => {
  res.status(404).render("not-found");
});



// =========  PORTA DO SERVIDOR ========

server.listen(5000, () => {
  console.log('Server is online.')
})