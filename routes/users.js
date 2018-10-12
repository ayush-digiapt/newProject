var express = require('express');
var router = express.Router();
var usersController = require("../controllers/users")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST create user. */
router.post('/createUsers', usersController.createUsers);

/* POST get user. */
router.get('/getUsers/:email', usersController.getUsers);


/* GET  get_all user. */
router.get('/getAllUsers', usersController.getAllUsers);


/* POST delete users. */
router.post('/deleteUsers', usersController.deleteUsers);

/* POST get user. */
router.post('/getUsersForEdit', usersController.getUsersForEdit);

/* PUT edit user. */
router.post('/editUsers', usersController.editUsers);

module.exports = router;
