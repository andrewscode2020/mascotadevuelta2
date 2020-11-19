const mongoose = require('mongoose')
const {MONGODB} = require('./config')

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error de conección:'))
db.once('open', function () {
  console.log(`Conexión exitosa con la base de datos MongoDB:\n${MONGODB}`)
})