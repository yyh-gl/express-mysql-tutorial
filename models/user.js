var mysql = require('mysql');
var db_config = require('../database.js');

// mysqlConf.getConnection(function (err, connection) {
//   var query = 'SELECT * FROM users WHERE id = ?';
//   connection.query(query, [1], function (err, rows) {
//     console.log(rows);
//     connection.release();   //---> don't forget the connection release.
//   });
// });

module.exports = {

  // 「hoge:」 これは関数じゃなくてモジュール定義
  // IDでusersテーブルを検索する
  getById: function(id) {
    return new Promise((resolve, reject) => {
      var connection = mysql.createConnection(db_config);
      var query = 'SELECT * FROM users WHERE id = ?';
      connection.query(query, id, function (error, results, fields) {
        return resolve(results);
      });
    });
  },

  getAll: function() {
    return new Promise((resolve, reject) => {
      var connection = mysql.createConnection(db_config);
      var query = 'SELECT * FROM users';
      connection.query(query, function (error, results, fields) {
        return resolve(results);
      });
    });
  },

// usersテーブルへinsertする
  register: function(name, age) {
    return new Promise((resolve, reject) => {
      var connection = mysql.createConnection(db_config);
      var query = "INSERT INTO users (name, age, created_at, updated_at) VALUES (?, ?, NOW(), NOW());";
      connection.query(query, [name, age], function (error, results, fields) {
        return resolve(results);
      });
    });
  },

};
