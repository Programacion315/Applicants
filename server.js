const express = require('express')
const app = express()

//Importar conexion MongoDB
const archivoBD = require('./connection.js')

//Importacion del archivo de rutas y modelo de postulante
const rutaPostulante = require("./rutas/postulante")

//Importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use('/api/postulante', rutaPostulante)

app.get('/', (req, res)=>{
    res.end("Bienvenidos al servidor")
})

app.listen(5000, function(){
    console.log("El servidor")
})