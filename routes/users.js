var express = require('express');
var router = express.Router();
var userModel = require("../models/user.js");


/* GET /users */
router.get('/', async function(req, res, next) {
  var users = await userModel.getAll();
  var param = { "users": users };
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

/* GET /users/:id */
router.get('/:id', async function(req, res, next) {
  var user = await userModel.getById(req.params.id);
  var param = { "user": user };
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

/* POST /users */
router.post('/', async function(req, res, next) {
  var user = await userModel.register(req.body.name, req.body.age);
  var param = { "user": user };
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
