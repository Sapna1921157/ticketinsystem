const mysql = require('mysql');


const dbConn = mysql.createPool({
  connectionLimit : 5, //important
    host: process.env.DB_Host,
    user: process.env.DB_User,
     database: process.env.DB_Database,
     password: process.env.DB_Password,
     debug    :  false
});

// dbConn.query("select * from users",[], (err, results) => {
//   if (err) {
//     console.error('Error executing query:', err);
//     return;
//   }

//   console.log('Query results:', results);
// });
module.exports = dbConn;

