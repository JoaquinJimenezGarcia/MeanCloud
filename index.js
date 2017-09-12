'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
  if (err) {
    return console.log('Error connecting to database')
  }
  console.log('Established connection')

  app.listen(config.port, () => {
    console.log(`Corriendo express con NodeJS en el puerto ${config.port}`)
  })
})
