"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersRouter = express_1.Router();
/* GET users listing. */
usersRouter.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
exports["default"] = usersRouter;
