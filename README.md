# Jogo de Adivinhação - API

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Para o teste da empresa Scale Systems, foi desenvolvido um jogo em que usuário mentaliza um número e o sistema deve adivinhar o número enquanto o usuário informa se o número tentativa é maior, menor ou igual ao mentalizado.

### Tech

* [Bootstrap](https://getbootstrap.com/) - Para padronização da ui
* [Node.js](https://nodejs.org/en/) - v. 12
* [Express](https://expressjs.com/pt-br/) - Framework de rede do node [@tjholowaychuk]
* [Sequelize](https://getbootstrap.com/) - ORM do NodeJS
* [jQuery](https://jquery.com/) - Biblioteca JavaScript

### Instalação

A aplicação precisa do [Node.js](https://nodejs.org/) v10+, MySql v5.6+.

Instale as dependências:

```sh
$ cd jogo-adivinhacao
$ npm install
```

Configure as credencias do banco de dados no arquivo:
```
$ nano src/config/database.js
```

É necessário ter um banco de dados no seu servicor mysql local com o mesmo nome do campo "database" do arquivo mencionado no passo anterior.

Instale o sequelize CLI
```
$ npm install --save-dev sequelize-cli
```

Na pasta base do projeto, execute as migrations com o seguinte comando:
```
$ npx sequelize db:migrate
```

Para iniciar o projeto
```
$ nodemon app
```

A API do projeto roda na [Porta 3000](http://localhost:3000)