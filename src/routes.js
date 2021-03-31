const express = require('express');
const routes = express.Router();

const rankingController = require('./controller/rankingController')

routes.get('/', (req, res) => {
    res.send('oi')
});

routes.get('/ranking', rankingController.findAll);

routes.post('/win', rankingController.store);

module.exports = routes;