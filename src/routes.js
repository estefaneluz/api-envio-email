const express = require('express');
const { sendEmail } = require('./controllers/email')
const { subscribe } = require('./controllers/subscribers')

const routes = express();

routes.post('/inscricao', subscribe);
routes.post('/email', sendEmail);

module.exports = routes;