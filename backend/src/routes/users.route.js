const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller.js');
var { LOGIN,CREATE_USER } = require('../validator/validator.js');
const auth = require('../../middleware/auth')
const roleMiddleware = require("../../middleware/roleMiddleware");
const dbConn = require('../../config/db.config.js');
const { Result } = require('express-validator');

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

// view users
router.get(
  "/viewUsers",
  auth.verifyToken,
  roleMiddleware.checkForbiddenRoles(["user"]),
  usersController.viewUsers
);

// view Pending users
router.get(
  "/viewPendingUsers",
  auth.verifyToken,
  roleMiddleware.checkForbiddenRoles(["user"]),
  usersController.viewPendingUsers
);

// Edit user
router.post(
  "/editUser",
  auth.verifyToken,
  roleMiddleware.checkForbiddenRoles(["user"]),
  roleMiddleware.checkForbiddenRoles(["admin"]),
  usersController.editUser
);

// Delete user
router.post(
  "/deleteUser",
  auth.verifyToken,
  roleMiddleware.checkForbiddenRoles(["user"]),
  roleMiddleware.checkForbiddenRoles(["admin"]),
  usersController.deleteUser
);

//add project
router.post(
  "/addProject",
  // auth.verifyToken,
  usersController.addProject
)

//  get project
//  router.get('/getProjects', (req, res) => {
//   const sql_query = 'select * from projects';
//   dbConn.query(sql_query, (err, result) => {
//     if(err) throw err;
//     console.log(err)
//     res.send(result);
//   })
//  })
router.get("/getProjectsList",
// auth.verifyToken, 
usersController.getProjectsList
);

// Delete user
router.delete("/deleteProject",
  usersController.deleteProject
);

// Update project
router.put("/updateProject",
  usersController.updateProject
);


module.exports = router;
