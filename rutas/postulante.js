const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const schemapostulante = new eschema({
    nombre: String,
    apellido: String,
    edad: String,
    sexo: String,
    idpostulante: String
})

const ModeloPostulante = mongoose.model('postulantes', schemapostulante)




//Agregar postulante
router.post('/agregarpostulante', (req, res)=>{
    
    console.log("data extraña")
    console.log(req.body)
    const nuevoPostulante = new ModeloPostulante({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        sexo: req.body.sexo,
        idpostulante: req.body.idpostulante
    })

    nuevoPostulante.save(function(err){

        if(!err){
            res.send('Usuario agregado correctamente')
           
        }
        else{
            res.send("Ocurrio un error desde el servidor")
            res.send(err)
        }
    })
})

//Traer todos los postulantes
router.get('/obtenerpostulantes', (req, res)=>{
    
    console.log("entro a obtener postulantes")
    ModeloPostulante.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})

module.exports = router;