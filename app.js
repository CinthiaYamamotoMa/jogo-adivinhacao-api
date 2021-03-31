const express = require('express');
const bodyParser = require('body-parser');

const routes = require ('./src/routes.js')

const app = express();

// entender quando enviar requisições
app.use(bodyParser.json());

// entender os params da url
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.listen(3000);