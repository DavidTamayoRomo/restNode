const {response} = require('express')

const usuariosGet = (req, res)=> {
    const query = req.query
    
    res.json({
        ok: true,
        msg:'GET -controlador ',
        query
    })
}

const usaurioPost = (req, res)=> {
    const {nombre,edad} = req.body

    
    res.json({
        ok: true,
        msg:'POST',
        nombre,
        edad
    })
}

const usuarioPut = (req, res)=> {
    
    const id = req.params.id;
    res.json({
        ok: true,
        msg:'PUT',
        id
    })
}

const usuarioDelete =  (req, res)=> {
    res.json({
        ok: true,
        msg:'DELETE'
    })
}

module.exports = {
    usuariosGet,
    usuarioPut,
    usaurioPost,
    usuarioDelete
}