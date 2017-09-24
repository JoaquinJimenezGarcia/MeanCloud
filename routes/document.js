'use strict'

const express = require('express')
const documentController = require('../controllers/document')
const auth = require('../middlewares/auth')
const userCtrl = require('../controllers/user')
const api = express.Router()

api.get('/document', auth, documentController.getDocuments)
api.get('/document/:documentId', auth, documentController.getDocument)
api.post('/document', auth, documentController.saveDocument)
api.put('/document/:documentId', auth, documentController.updateDocument)
api.delete('/document/:documentId', auth, documentController.deleteDocument)

api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)

api.get('/private', auth, (req, res) => {
  res.status(200).send({message:'Tienes acceso'})
})

module.exports = api
