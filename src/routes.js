const express = require('express');
const { sendEmail } = require('./controllers/email')
const { subscribe } = require('./controllers/subscribers')

const routes = express();

module.exports = routes;