const express = require('express')
const enrutador = express.Router()
const PetReport = require('./model')

/**
 * Devuelve la lista completa de reportes: No requiere token jwt
 */
enrutador.get('/', (req, res) => {
  PetReport.find((err, petReports) => {
    if (err) {
      res.status(500).send('No pude cargar los reportes')
    } else {
      res.send(petReports)
    }
  })
})
/**
 * Devuelve la información de un solo usuario: No requiere token jwt
 */
enrutador.get('/:id', (req, res) => {
  PetReport.find({ _id: req.params.id }, (err, petReport) => {
    if (err) {
      res.status(500).send('No pude cargar el reporte')
    } else {
      res.send(petReport)
    }
  })
})

/**
 * Crea un reporte de mascota: Requiere token jwt
 */
enrutador.post('/', (req, res) => {

  const newPetReport = new PetReport(req.body);
  newPetReport.save((error, estado) => {
    if (error !== null) {
      res.status(500).send(error)
    } else {
      res.send(estado)
    }
  })
})

/**
 * Actualiza un reporte de mascota: Requiere token jwt
 */
enrutador.put('/', (req, res) => {  
  PetReport.updateOne({_id: req.body._id}, req.body, (err, petReport) => {
    if (err) {
      res.status(500).send('Cambio nuevo.')
    } else {
      res.send(petReport)
    }
  })
})

module.exports = enrutador;