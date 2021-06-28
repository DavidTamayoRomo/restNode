const {Schema, model} = require('mongoose')

const usarioSchema = Schema({
    nombre: {type:String},
    correo: {type:String},
    password: {type:String},
    img: {type:String},
    rol: {type:String, enum:['admin','user']},
    estado: {type:Boolean}
})

module.exports = model('Usuario',usarioSchema)