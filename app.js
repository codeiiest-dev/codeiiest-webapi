const express = require('express');
const path = require('path');

const logger = require('morgan');
const { Model } = require('objection');
const knex = require('./lib/knex');
const router = require('./routes/index');
const middleware = require('./middleware');

const app = express();

middleware(app);
Model.knex(knex);
router(app)

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;
