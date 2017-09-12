'use strict'

const express = require('express')
const documentController = require('../controllers/document')
const api = express.Router()

api.get('/document', documentController.getDocuments)
api.get('/document/:documentId', documentController.getDocument)
api.post('/document', documentController.saveDocument)
api.put('/document/:documentId', documentController.updateDocument)
api.delete('/document/:documentId', documentController.deleteDocument)

module.exports = api
