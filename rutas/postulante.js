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
    
    const nuevoPostulante = new ModeloPostulante({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        sexo: req.body.sexo,
        idpostulante: req.body.idpostulante
    })

    nuevoPostulante.save(function(err){

        if(!err){
            console.log('Usuario agregado correctamente')
           
        }
        else{
            console.log("Ocurrio un error desde el servidor")
            
        }
    })
})

//Editar postulante
router.put('/actualizarpostulante', (req, res)=>{
    
   
    ModeloPostulante.findOneAndUpdate({idpostulante:req.body.idpostulante},{
        idpostulante: req.body.idpostulante,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        sexo: req.body.sexo 
    }, (err)=>{
        if(!err){
            console.log('Usuario actualizado correctamente')
           
        }
        else{
            res.send("Ocurrio un error desde el servidor")
            res.send(err)
        }
    })

})

//Eliminar postulante

router.post('/borrarpostulante', (req, res)=>{
    
    ModeloPostulante.findOneAndDelete({idpostulante:req.body.idpostulante},
        (err)=>{
        if(!err){
            console.log('Eliminado correctamente')
           
        }
        else{
            console.log("Ocurrio un error desde el servidor")
            console.log(err)
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