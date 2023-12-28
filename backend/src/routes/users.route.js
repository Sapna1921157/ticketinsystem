const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller.js');
var { LOGIN,CREATE_USER } = require('../validator/validator.js');
const auth = require('../../middleware/auth')
const roleMiddleware = require("../../middleware/roleMiddleware");

// create user or signup
router.post("/createUser", CREATE_USER, usersController.createUser);

router.post(
  "/addUser",
  auth.verifyToken,
  roleMiddleware.checkForbiddenRoles(["user"]),
  usersController.addUser
);

// login user
router.post('/login',LOGIN, usersController.loginUser);

// forgot password
router.post('/forgot', usersController.forgotPassword);

// Recover Password or reset password 
router.post('/recoverPassword', usersController.recoverPassword);

// logout API
router.get('/logOut', auth.verifyToken, usersController.logOut);

module.exports = router;