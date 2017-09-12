'use stric'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const documentSchema = Schema({
  name: String,
  file: String,
  category: {type: String, enum: ['job', 'social', 'family', 'important', 'irrelevant']},
  description: String
})

module.exports = mongoose.model('Document', documentSchema)
