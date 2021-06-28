const {Router}= require('express')
const { usuariosGet, usaurioPost, usuarioPut, usuarioDelete } = require('../controllers/usuarios')
const router = Router()

 
 //GET
 router.get('/', usuariosGet)
//POST
router.post('/', usaurioPost)
//PUT
router.put('/:id', usuarioPut)
//DELETE
router.delete('/',usuarioDelete)

module.exports = router;