var mysqlConf = require('../database.js').mysql_pool;

// mysqlConf.getConnection(function (err, connection) {
//   var query = 'SELECT * FROM users WHERE id = ?';
//   connection.query(query, [1], function (err, rows) {
//     console.log(rows);
//     connection.release();   //---> don't forget the connection release.
//   });
// });

module.exports = {

// emailでusersテーブルを検索する
  getById: function(id) {
    mysqlConf.getConnection(function (err, connection) {
      var query = 'SELECT * FROM users WHERE id = ?';
      connection.query(query, [1], function (err, row) {
        console.log(row);
        return row;
        connection.release();   //---> don't forget the connection release.
      });
    });
  },

  getAllUsers: function() {
    return new Promise(function(resolve, reject) {
      mysqlConf.getConnection(function (err, connection) {
        connection.query('SELECT * FROM users', function (err, rows) {
          connection.release();   //---> don't forget the connection release.
        });
      });
    });
  },

// usersテーブルへinsertする
  register: function(data) {
    return new Promise(function(resolve, reject) {
      db.insert("users", data, function(id) {
        resolve(id);
      });
    });
  },
};
