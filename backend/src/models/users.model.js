var dbConn = require('../../config/db.config');
const axios = require('axios');
const os = require('os');
const CryptoJS = require("crypto-js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// require("dotenv").config();

//
let Users = (user) => {
    this.name = user.name;
    this.email = user.email;
    this.user_id = user.user_id;
    this.username = user.username;
    this.password = bcrypt.hash(user.password, 10);
    this.role = user.role;
    create_at = new Date() | any;
    updated_at = new Date() | any;
}

// create user account
Users.createUser = async (req, result) => {
    let getCapstatus = await fetchcapchaStatus(req.body.capcha_token, req.body.ip);
    if (getCapstatus.data.success != true) {
        return result({
            message: 'Capcha verification failed! Please try again.'
        })
    }
    var user_id = 0;
    try {
        let {
            name,
            email,
            password,
            cpassword,
            role,
            user_status,
            username
        } = req.body
        password = CryptoJS.AES.decrypt(password, 'k7qliZ4fW4zrsm@PrEapGVDuTM6J5mZYg').toString(CryptoJS.enc.Utf8);
        cpassword = CryptoJS.AES.decrypt(cpassword, 'k7qliZ4fW4zrsm@PrEapGVDuTM6J5mZYg').toString(CryptoJS.enc.Utf8);
        if (cpassword != password) {
            return result(null, {
                status: 0,
                message: 'Password Doesn\'t match Confirm Password'
            })
        }

        let reg = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")

        if (!reg.test(password)) {
            return result(null, {
                status: 0,
                message: 'Invalid Password Pattern '
            })
        }

        if (!email || !password || !name) {
            return res.status(400).json({
                status: 0,
                message: 'Invalid request!'
            })
        }


        const hashedPassword = await bcrypt.hash(password, 10);
        password = hashedPassword;
        // let sql = 'Select * from users'
        let sql = 'INSERT INTO users SET ?'
        let post = {
            name,
            email,
            password,
            username,
            token: "I am not having token",
            role,
            user_status: user_status || "inactive"
        }

        await dbConn.query(sql, post, async (err, dbresult) => {
            var user_id = await dbresult?.insertId;

            if (err) {
                result(null, {
                    status: 0,
                    message: "some error",

                })
            }
            if (dbresult) {
                post.id = dbresult?.insertId;

                // assign node to user

                node_Sql = "INSERT INTO node_ids SET ? "
                // let user_id: post.id;
                node_post = {
                    user_id: post.id,
                    node_id: req.body.node || 0
                }
                if (req.body.node) {
                    req.body.node.map(ele => {
                        dbConn.query(`insert into node_ids (user_id, node_id) value(${dbresult?.insertId},${ele.id},'yes')`, (err, dbres) => {
                            if (err) {
                                return result(null, {
                                    status: 0,
                                    message: "Something went wrong"
                                })

                            } else {

                                return result(null, {
                                    status: 1,
                                    user_id: user_id,
                                    message: "User Added Successfully"
                                })
                            }
                        })
                    });
                } else {
                    return result(null, {
                        status: 1,
                        user_id: user_id,
                        message: "User Added Successfully"
                    })
                }
            }
        })


    } catch (error) {
        return result(null, error);
    }

}

Users.addUser = async (req, result) => {

    console.log("------------------", req.body)
    try {
        let {
            name,
            email,
            password,
            role,
            user_status,
            username,
            cpassword
        } = req.body


        if (!email || !password || !name) {
            return result({
                status: 0,
                message: 'Invalid request'
            }, null)
        }

        password = CryptoJS.AES.decrypt(password, 'k7qliZ4fW4zrsm@PrEapGVDuTM6J5mZYg').toString(CryptoJS.enc.Utf8);
        cpassword = CryptoJS.AES.decrypt(cpassword, 'k7qliZ4fW4zrsm@PrEapGVDuTM6J5mZYg').toString(CryptoJS.enc.Utf8);

        if (cpassword != password) {
            return result({
                status: 0,
                message: 'Password Doesn\'t match Confirm Password'
            }, null)

        }

        let reg = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
        let namereg = new RegExp("^[a-zA-Z0-9 ]+$")
        let emailReg = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")

        if (!reg.test(password)) {
            return result({
                status: 0,
                message: 'Invalid Password Pattern'
            }, null)
        }

        if (!namereg.test(name) || !namereg.test(username)) {
            return result({
                status: 0,
                message: 'Invalid Name or Username Pattern'
            }, null)
        }

        if (!emailReg.test(email)) {
            return result({
                status: 0,
                message: 'Invalid Email Pattern'
            }, null)
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        password = hashedPassword;

        let sql = 'INSERT INTO users SET ?'
        let post = {
            name,
            email,
            password,
            username,
            token: "I am not having token",
            role,
            user_status: user_status
        }

        await dbConn.query(sql, post, async (err, dbresult) => {
            var user_id = await dbresult?.insertId;

            if (err) {
                result(null, {
                    message: "some error",

                })
            }
            if (dbresult) {
                post.id = dbresult?.insertId;

                // assign node to user

                node_Sql = "INSERT INTO node_ids SET ? "
                // let user_id: post.id;
                node_post = {
                    user_id: post.id,
                    node_id: req.body.node || 0
                }
                if (req.body.node) {
                    try {
                        for (const ele of req.body.node) {
                            await new Promise((resolve, reject) => {
                                dbConn.query(`INSERT INTO node_ids (user_id, node_id) VALUES (${dbresult?.insertId},${ele.id},'yes')`, (err, dbres) => {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        resolve(dbres);
                                    }
                                });
                            });
                        }

                        return result(null, {
                            status: 1,
                            user_id: user_id,
                            message: "User Added Successfully"
                        });
                    } catch (error) {
                        console.error("Error inserting nodes:", error);
                    }
                } else {
                    return result(null, {
                        status: 1,
                        user_id: user_id,
                        message: "User Added Successfully"
                    })
                }
            }


        })


    } catch (error) {
        // console.log(error);
        return result(null, error);
    }

}


// verify capcha on server start
// https://www.google.com/recaptcha/api/siteverify?secret=your_secret&response=response_string&remoteip=user_ip_address


//-----------------------------------
async function fetchcapchaStatus(capcha_res, user_ip) {

    return new Promise((resolve, reject) => {
        setTimeout(async () => {

            try {

                axios.get(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.Capcha_Secret}&response=${capcha_res}&remoteip=${user_ip}`)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        reject(error);
                    })
            } catch (error) {
                reject(error.response.body)
                console.log(error.response.body);
            }

        }, 1);
    });

}
//-----------------------------------

// verify capcha on server end


// login user

Users.loginUser = async (req, result) => {
    // console.log(req.body);
    let getCapstatus = await fetchcapchaStatus(req.body.capcha_token, req.body.ip);
    if (getCapstatus.data.success != true) {
        return result({
            message: 'Capcha verification failed! Please try again.'
        })
    }
    date = new Date()
    hotDetails = os.networkInterfaces()
    // console.log('hotDetails',hotDetails);
    try {
        let {
            username,
            password
        } = req.body
        if (!username || !password) {
            res.status(400).json({
                details: 'Invalid request!'
            })
        }
        // check number of login attempts
        // let dateToday = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
        var date = new Date();
        var dateToday =
            date.getFullYear() + "-" +
            ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
            ("00" + date.getDate()).slice(-2) + " " +
            ("00" + date.getHours()).slice(-2) + ":" +
            ("00" + date.getMinutes()).slice(-2) + ":" +
            ("00" + date.getSeconds()).slice(-2);
        // console.log('dateToday',dateToday);
        dbConn.query(`SELECT count(*) AS count
         FROM failed_logins
         WHERE username = '${username}'
         AND failed_at > NOW() - INTERVAL 1 HOUR`, async (err, res) => {

            if (res && res[0] && res[0].count >= 3) {

                return result(null, {
                    message: 'Account Blocked for 1 hr due to multiple Invalid attemps. Please try after an Hour!'
                })
            }

        });
        // password = Buffer.from(password, 'base64').toString('binary');
        password = CryptoJS.AES.decrypt(password, 'k7qliZ4fW4zrsm@PrEapGVDuTM6J5mZYg').toString(CryptoJS.enc.Utf8);

        dbConn.query(`SELECT * FROM users WHERE username = ? ''`, [username], async (err, res) => {
            if (err) {

                return result(null, {
                    message: "fail to execute Database"
                })
            } else {

                if (res.length > 0) {
                    const varify = await bcrypt.compareSync(password, res[0].password);
                    if (varify) {

                        let arrlen = req.ip?.split(':').length
                        let ipAddress = req.ip.split(':')[arrlen - 1]

                        sessionDetails = {
                            ip_address: req.body.ip,
                            // mac_address: hotDetails?.en6[1]?.mac,
                            login_time: date,
                            user_id: res[0].user_id
                        }

                        let sql = 'INSERT INTO user_session SET ?'
                        dbConn.query(sql, sessionDetails)
                        // let accessToken
                        const accessToken = jwt.sign({
                            data: res[0].username,
                            role: res[0].role,
                        },
                            process.env.JWT_PASSWORD_KEY, {
                            expiresIn: "10D"
                        }
                        );
                        if (res[0].token) {
                            let body = res[0]
                            dbConn.query(`UPDATE users SET token = '${accessToken}' WHERE user_id = '${res[0].user_id}'`, (err, res) => {
                                if (err) {
                                    return result(null, {
                                        message: "token doesn't match"
                                    })
                                } else {
                                    if ((body.user_status == null) || (body.user_status == '')) {
                                        return result(null, {
                                            message: "Wait for admin approval"
                                        })
                                    } else if (body.user_status == "inactive") {
                                        return result(null, {
                                            message: "Your account suspended!!/Waiting for approval"
                                        })
                                    } else if (body.user_status == "active") {

                                        return result(null, {

                                            message: "Logged Successfully!!",
                                            accessToken: accessToken,
                                            user: body
                                        })
                                    }
                                }
                            })
                        } else {
                            return result(null, {
                                message: "user not authrize"
                            })
                        }
                    } else {

                        let ipAddress = req.ip;
                        dbConn.query(`INSERT INTO failed_logins (username, ip_address, failed_at)
                         VALUES ('${username}', '${ipAddress}', '${dateToday}')`, async (err, res) => {

                            return result(null, {
                                message: "Invalid Username or Password!!!. Your account will be blocked for 1 hr after 3 unsuccessfull attempts."
                            })
                        })

                    }



                } else {
                    return result(null, {
                        message: "Invalid user!!",
                    })
                }
            }
        })
    } catch (error) {
        console.log("error==111111111111111111=>>>", error)
        return result(null, error);
    }
}


// Forgot password
Users.forgotPassword = async (req, result) => {
    let getCapstatus = await fetchcapchaStatus(req.body.capcha_token, req.body.ip);
    if (getCapstatus.data.success != true) {
        return result({
            message: 'Capcha verification failed! Please try again.'
        })
    }

    const {
        email,
        urlPass
    } = req.body

    let reg = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")

    if (!reg.test(email)) {
        return result(null, {
            status: 0,
            message: 'Invalid Email Pattern '
        })
    }

    if (!email) {
        return result(null, {
            status: 0,
            message: "Please enter email field must not be blank"
        })
    } else {
        try {
            dbConn.query(`SELECT * FROM users WHERE email = ? ''`, [email], async (err, res) => {

                if (err) {
                    console.log("what is error===>>>", err);
                    return result(null, {
                        status: 0,
                        message: "fail to execute Database"
                    })
                } else {
                    if (res.length > 0) {
                        let {
                            email,
                            username,
                            password,
                            user_id
                        } = res[0]
                        let otpCode = Math.floor((Math.random() * 10000) + 1)

                        dbConn.query(`UPDATE users SET otp = ${otpCode} WHERE user_id = ${user_id}`)
                        // sent to npm i nodemailer
                        var transport = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: "ctms.cdac.mohali@gmail.com",
                                pass: "yjjdlumohfydltky"
                            }
                        });

                        // let encId = await encrypt(user_id);
                        var mailOptions = {
                            from: "ctms.cdac.mohali@gmail.com",
                            to: email,
                            subject: "OTP to reset Your Password",
                            text: `Dear ${username},\n\nTo reset your password please open this link: ${urlPass}/${user_id} .\nYour otp is: ${otpCode}.\n\nThanks and Regards,\nCTMS Team `,
                        }
                        transport.sendMail(mailOptions, function (error, response) {
                            if (error) {
                                //  res.send("Email could not sent due to error: "+error);
                                console.log('Error', error);
                            } else {
                                res.send("Email has been sent successfully");

                            }
                        });
                        setTimeout(otpDestroy, 360000, user_id)

                        return result(null, {
                            status: 0,
                            details: 'OTP sent to your mail'
                        })
                    } else {
                        return result(null, {
                            status: 0,
                            message: "This email doesn't exists!!",
                        })
                    }
                }
            })
        } catch (err) {
            return result(null, err);
        }
    }
}

module.exports = Users;