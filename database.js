require('dotenv').config()
var mysql = require('mysql');

const db_hostname = process.env.DB_HOSTNAME;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME;

var config = {
    "host": db_hostname,
    "user": db_username,
    "password": db_password,
    "database": db_name
};

// var config = {
//   mysql_pool : mysql.createPool({
//     "host": db_hostname,
//     "user": db_username,
//     "password": db_password,
//     "database": db_name
//   })
// };

module.exports = config;