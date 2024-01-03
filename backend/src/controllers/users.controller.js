const dbConn = require('../../config/db.config');
const UserModel = require('../models/users.model');
const auth = require("../../middleware/auth");
const jwt = require('jsonwebtoken');
const { sequelize, DataTypes } = require('../../config/sequelize');
const User = require('../models/user.model')(sequelize, DataTypes);
const { validationResult } = require('express-validator');

// exports.getLogedUser = (req) => {
//     return getLoggedUser(req);
// }


// create new user
exports.createUser = async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        var extractedErrors = errors.array({ onlyFirstError: true });
        return res.status(400).json({
            status: 400,
            data: null,
            message: extractedErrors[0].msg,
            error: true,
        });
    }


    var loggedUser = [];
    var getSess = [];
    if (req.headers.authorization) {
        // loggedUser = await getLoggedUser(req);
        // getSess = await getLoggedUserSession(loggedUser.dataValues.user_id);
    }
    const emailExists = await User.findOne({ where: { email: req.body.email } });
    if (emailExists) {
        return res.status(400).send({details: 'Email already registered!'})
    }


    const userNameExists = await User.findOne({ where: { username: req.body.username } });
    if (userNameExists) {
        return res.send(400, {
            details: 'Username already registered!'
        })
    }


    UserModel.createUser(req, async (err, user) => {

        if (err) {
            res.send(err)
        } else {
            if (req.headers.authorization) {
                let start_date = new Date();
                // let userlog = userSessionLogs.create({ alterredUser: user.user_id, datetime: start_date.toString(), user_session_id: getSess[0].id, action: "User Created", createdBy: loggedUser.dataValues.user_id });
            } else {
                // notificationsCntrl.addUserNotifications(user)
            }
            return res.send(user)
        }
    })
};

exports.addUser = async (req, res) => {
    var loggedUser = [];
    var getSess = [];
    if (req.headers.authorization) {
        // loggedUser = await getLoggedUser(req);
        // getSess = await getLoggedUserSession(loggedUser.dataValues.user_id);
    }
    const emailExists = await User.findOne({ where: { email: req.body.email } });
    if (emailExists) {
        return res.send(400, {
            details: 'Email already registered!'
        })
    }


    const userNameExists = await User.findOne({ where: { username: req.body.username } });
    if (userNameExists) {
        return res.send(400, {
            details: 'Username already registered!'
        })
    }


    UserModel.addUser(req, async (err, user) => {

        if (err) {
            res.send(err)
        } else {
            if (req.headers.authorization) {
                let start_date = new Date();
                // let userlog = userSessionLogs.create({ alterredUser: user.user_id, datetime: start_date.toString(), user_session_id: getSess[0].id, action: "User Created", createdBy: loggedUser.dataValues.user_id });
            } else {
                notificationsCntrl.addUserNotifications(user)
            }
            return res.send(user)
        }
    })
};

// login user
exports.loginUser = (async (req, res) => {


    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        var extractedErrors = errors.array({ onlyFirstError: true });
        return res.status(400).json({
            status: 400,
            data: null,
            message: extractedErrors[0].msg,
            error: true,
        });
    }

    UserModel.loginUser(req, (err, user) => {
        if (err) {
            return res.status(400).send(err.message);
        } else {
            return res.status(200).send(user);
        }
    })
});


// Forgot Password
exports.forgotPassword = ((req, res) => {
    UserModel.forgotPassword(req, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
});

// Recover Password
exports.recoverPassword = ((req, res) => {
    UserModel.recoverPassword(req, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result)
        }
    })
});

// Logout API
exports.logOut = ((req, res) => {
    UserModel.logOut(req, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})


// view users
exports.viewUsers = (async (req, res) => {

    let user = await User.findAll({
        include: [
        ], where: { user_status: { $not: 'deleted_user' } }
    });

    res.send({ data: user });

})


// view Pending users
exports.viewPendingUsers = (async (req, res) => {
    let user = await User.findAll({
        include: [
        ], where: { user_status: 'inactive' }
    });

    res.send({ data: user });
})

// Edit users
exports.editUser = (async (req, res) => {
    var loggedUser = [];
    var getSess = [];
    if (req.headers.authorization) {
        // loggedUser = await getLoggedUser(req);
        // getSess = await getLoggedUserSession(loggedUser.dataValues.user_id);
    }
    let {
        name,
        username,
        email,
        role,
        user_status,
        user_id
    } = req.body.data

    let reg = new RegExp("^[a-zA-Z0-9 ]+$")
    let emailReg = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
     
    if(!reg.test(name) || !reg.test(username) || !emailReg.test(email)){
        return res.status(400).send({
            status: 0,
            message: 'Invalid Pattern'
        })
    }

    if (user_status == 'active') {
        // notificationsCntrl.updateUserNotifications(user_id);
    }
    let edit = await User.update({ name: name, username: username, email: email, role: role, user_status: user_status }, {
        where: {
            user_id: user_id
        }
    });
    if (!edit) {
        return res.status(400).send({
            status: 0,
            message: 'Error in update'
        })
    } else {
        if (req.headers.authorization) {
            let start_date = new Date();
            // let userlog = userSessionLogs.create({ alterredUser: user_id, datetime: start_date.toString(), user_session_id: getSess[0].id, action: "User Edited", createdBy: loggedUser.dataValues.user_id });
        }
        return res.status(200).send({
            status: 1,
            message: "User Updated Successfully!!",
        })
    }
})

//Delete users
exports.deleteUser = (async (req, res) => {
    var loggedUser = [];
    var getSess = [];
    if (req.headers.authorization) {
        // loggedUser = await getLoggedUser(req);
        // getSess = await getLoggedUserSession(loggedUser.dataValues.user_id);
    }
    let {
        name,
        username,
        email,
        role,
        user_status,
        user_id
    } = req.body.data
    let remove = await User.update({ user_status: "deleted_user" }, {
        where: {
            user_id: user_id
        }
    });
    if (!remove) {
        return res.status(400).send({
            status : 0,
            details: 'Error in delete'
        })
    } else {
        if (req.headers.authorization) {
            let start_date = new Date();
            // let userlog = userSessionLogs.create({ alterredUser: user_id, datetime: start_date.toString(), user_session_id: getSess[0].id, action: "User Deleted", createdBy: loggedUser.dataValues.user_id });
        }
        return res.status(200).send({
            status : 1,
            message: "User Deleted Successfully!!",
        })
    }
})