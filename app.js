'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const api = require('./routes/document')
const hbs = require('express-handlebars')
const app = express()

app.use(bodyParser.urlencoded( { extended: false } ))
app.use(bodyParser.json())

app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use('/api', api)

module.exports = app
