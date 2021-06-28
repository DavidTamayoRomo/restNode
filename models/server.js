const express = require('express')
var cors = require('cors')

class Server {
    constructor() {
        this.app = express()
        this.usariosPath='/api/usuarios'
        this.middlewares()
        this.routes()
        
    }
    middlewares(){
        //cors
        this.app.use(cors())

        //Lectura y parceo 
        this.app.use(express.json())

        this.app.use(express.static('public'))
    }
    routes() {
       
        this.app.use(this.usariosPath,require('../routes/usuarios'))
    }
    listen(){
        this.app.listen(process.env.PORT, ()=>{
            console.log('Servidor en', process.env.PORT)
        })
    }
}

module.exports = Server;