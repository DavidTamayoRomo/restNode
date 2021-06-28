const {Router}= require('express')
const { usuariosGet, usaurioPost, usuarioPut, usuarioDelete } = require('../controllers/usuarios')
const router = Router()

 
 //GET
 router.get('/', usuariosGet)
//POST
router.post('/', usaurioPost)
//PUT-actualziar
router.put('/:id', usuarioPut)
//DELETE
router.delete('/:id',usuarioDelete)

module.exports = router;