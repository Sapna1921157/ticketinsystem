const { check } = require('express-validator');


const validation = {
    LOGIN: [
        // check('email')
        //     .notEmpty().withMessage('Please enter your email.')
        //     .isLength({ max: 40 }).withMessage('Email may not be greater than 40 characters.')
        //     .matches(/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i).withMessage('Please enter a valid email address'),
        check('username')
            .notEmpty().withMessage('Please enter your username.')
            .isLength({ max: 40 }).withMessage('username may not be greater than 40 characters.')
            .matches(/^[a-zA-Z0-9 ]+$/i).withMessage('Please enter a valid username '),

        check('password')
        .notEmpty().withMessage('Please enter your password.')
            .isLength({ min: 8 }).withMessage('Password must be at least 8 characters.')
            .isLength({ max: 100 }).withMessage('Password may not be greater than 100 characters.'),
    ],

    CREATE_USER: [
        check('email')
            .notEmpty().withMessage('Please enter your email.')
            .isLength({ max: 40 }).withMessage('Email may not be greater than 40 characters.')
            .matches(/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i).withMessage('Please enter a valid email address'),
        check('name')
            .notEmpty().withMessage('Please enter your name.')
            .isLength({ max: 40 }).withMessage('name may not be greater than 40 characters.')
            .matches(/^[a-zA-Z0-9 ]+$/i).withMessage("name can't contain special characters"),

        check('username')
            .notEmpty().withMessage('Please enter your username.')
            .isLength({ max: 40 }).withMessage('username may not be greater than 40 characters.')
            .matches(/^[a-zA-Z0-9 ]+$/i).withMessage("Username can't contain special characters"),

        check('password')
        .notEmpty().withMessage('Please enter your password.')
            .isLength({ min: 8 }).withMessage('Password must be at least 8 characters.')
            .isLength({ max: 100 }).withMessage('Password may not be greater than 100 characters.'),
    ],
}

module.exports = validation;