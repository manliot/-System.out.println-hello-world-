const { Router } = require('express')
const router = Router();
const { GetUsers, CreateUser, DeleteUser, GetUser, UpdateUser } = require('../controllers/users.controller')

//general
router.route('/')
    .get(GetUsers)
    .post(CreateUser)
//especificando id
router.route('/:usuario')
    .put(UpdateUser)
    .delete(DeleteUser)
    .get(GetUser)
    .patch(UpdateUser)
module.exports = router

//.post guardar nuevo dato
//.put  actualizar un dato
//.delete pues obvio
//.patch actualiazar un elemto de un dato