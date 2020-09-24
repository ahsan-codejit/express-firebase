// Importing express
const express = require('express');
const loaders = require('./lib/loaders');

// Initializing the app
const app = express();

loaders.init({ app });

module.exports = app;