/* eslint-disable linebreak-style */
const express = require('express');
// routes
const { actorsRouter } = require('./routes/actors.route');
// ultis
const { globalError } = require('./ultis/globalErr');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/actors', actorsRouter);
app.use(globalError);

module.exports = { app };
