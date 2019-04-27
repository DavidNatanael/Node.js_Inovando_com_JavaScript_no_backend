require('marko/node-require').install();
require('marko/express');

// importando o @express e criando uma constante para ele
const express = require('express');
// declarado que o @app vai fazer uso do @express
const app = express();
// importando o body-parser para criar middlewares que dão a possibilidade de envio de dados
// criando a constante @bodyParser para fazer uso do @body-parser que irá controlar os middlewares
const bodyParser = require('body-parser');

// criado middleware para pegar arquivo estatico
// delegando ao app o uso do metodo @use do @express
// primeiro parametro, caminho para a rota
app.use('/estatico',
// segundo parametro, uso do metodo @static do @express que serve para pegar aquivos estaticos
        express.static('src/app/public')
    );
//criado middleware para envio de arquivos JSON
// delegando ao @app o uso do @bodyParser com a função @use do @express
// declarando que o @bodyParser deve utilizar a função @urlencoded para designar o tipo de arquivo a ser enviado
app.use(bodyParser.urlencoded({
// declarando que o @bodyParser vai receber um arquivo Json complexo
    extended: true
}));

// importando as @routes
const routes = require('../app/routes/routes');
// definindo que as @routes recebem por parametro o @app
routes(app);    

// exportando o @app como um modulo
module.exports = app;
