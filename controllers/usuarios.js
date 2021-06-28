const {response} = require('express')
const Usuario = require('../models/usuario')

const usuariosGet = async (req, res)=> {
    // const query = req.query
    const usuarios = await Usuario.find();
    res.json({
        ok: true,
        msg:'GET -controlador ',
        usuarios
    })
}

const usaurioPost = async (req, res)=> {
    const body = req.body
    const usuario = new Usuario(body)
    await usuario.save();
    res.json({
        ok: true,
        msg:'POST',
        usuario
    })
}

const usuarioPut = async(req, res)=> {
    
    const id = req.params.id;
    const body=req.body
    const usuario = await Usuario.findByIdAndUpdate(id,body)

    res.json({
        ok: true,
        msg:'PUT',
        usuario
    })
}

const usuarioDelete =  async (req, res)=> {
    const id = req.params.id;

    const usuario = await Usuario.findByIdAndDelete(id)
    res.json({
        ok: true,
        msg:'DELETE',
        id
    })
}

module.exports = {
    usuariosGet,
    usuarioPut,
    usaurioPost,
    usuarioDelete
}