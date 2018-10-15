var express = require('express');
var router = express.Router();
var usersController = require("../controllers/users")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/* POST create user. */
router.post('/', usersController.createUser);

/* POST get user. */
router.get('/:email', usersController.getOneUser);


/* GET  get_all user. */
router.get('/', usersController.getAllUsers);


/* POST delete users. */
router.delete('/', usersController.deleteUser);

/* POST get user. */
//router.post('/getOneUserForEdit', usersController.getOneUserForEdit);

/* PUT edit user. */
router.put('/', usersController.editUser);

module.exports = router;
