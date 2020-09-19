const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const compression = require('compression');

const app = express();

// setup common middlewares
app.use(compression());
app.use(cors());
app.use(bp.json());

// register api
//const api = require('./api');
//app.use('/api', api);

// register file server
//const fileServer = require('./fileServer');
//app.use(fileServer);

module.exports = app;
