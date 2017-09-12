'use strict'

const Document = require('../models/document')

function getDocument(req, res) {
  let documentId = req.params.documentId

  Document.findById(documentId, (err, document) => {
    if (err) {
      return res.status(500).send({message: 'Error al realizar la petición'})
    } else  if (!document){
        return res.status(404).send({message: 'El documento no existe'})
    } else {
        res.status(200).send({document})
    }
  })
}

function getDocuments(req, res) {
  Document.find({}, (err, documents) => {
    if (err) {
      return res.status(500).send({message: 'Error al realizar la petición'})
    } else  if (!documents){
        return res.status(404).send({message: 'No hay documentos'})
    } else {
        res.status(200).send({documents})
    }
  })
}

function saveDocument(req, res) {

    console.log('POST /api/document')
    console.log(req.body)

    let document = new Document()

    document.name = req.body.name
    document.file = req.body.file
    document.category = req.body.category
    document.description = req.body.description

    document.save((err, documentStored) => {
      if (err) {
        res.status(500).send({message: 'Failed uploading file to database'})
      } else {
        res.status(200).send({document: documentStored})
      }
    })
}

function updateDocument(req, res) {
  let documentId = req.params.documentId
  let update = req.body

  Document.findByIdAndUpdate(documentId, update, (err, documentUpdated) => {
    if (err) {
      res.status(500).send({message: 'Failed uploading file to database'})
    } else {
      res.status(200).send({document: documentUpdated})
    }
  })
}

function deleteDocument(req, res) {
  let documentId = req.params.documentId

  Document.findById(documentId, (err, document) => {
    if (err) {
      return res.status(500).send({message: 'Error al borrar el documento'})
    } else  if (!document){
        return res.status(404).send({message: 'El documento no existe'})
    } else {
        document.remove(err => {
          if (err) {
            res.status(500).send({message: 'Error al borrar el documento'})
          } else {
            res.status(200).send({message: 'Documento borrado correctamente'})
          }
        })
    }
  })
}

module.exports = {
  getDocument,
  getDocuments,
  saveDocument,
  updateDocument,
  deleteDocument
}
