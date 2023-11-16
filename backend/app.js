// const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const ipGeoRouter = require('./controllers/ip-geo');
const middleware = require('./utils/middleware');

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.requestLogger);
app.use('/api/ip-geo', ipGeoRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;