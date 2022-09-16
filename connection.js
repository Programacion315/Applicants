// Using Node.js `require()`
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crudentrevista');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{
    console.log("Se conecto correctamente mongo")
})

objetobd.on('error', ()=>{
    console.log("error en la conexion")
})

module.exports = mongoose