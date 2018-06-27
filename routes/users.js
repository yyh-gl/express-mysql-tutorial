var express = require('express');
var router = express.Router();
var user = require("../models/user.js");

/* GET users listing. */
router.get('/db/:id', function(req, res, next) {
  user.getById(req.params.id)
    .then(function(row) {
      if (row) {
        console.log(row);
        var param = {"user":row};
        res.header('Content-Type', 'application/json; charset=utf-8')
        res.send(param);
      } else {
        // 失敗(jsonを返すなど)
      }
    });
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  var param = {"値":"これはサンプルAPIです"};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

// パスに含まれるクエリパラメータ利用例
router.get('/path/:value', function(req, res, next) {
  var param = { "value": req.params.value };
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

// クエリパラメータ利用例
router.get('/query/', function(req, res, next) {
  var param = { "id": req.query.id };
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

module.exports = router;
