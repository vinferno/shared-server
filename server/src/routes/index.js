"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var path_1 = __importDefault(require("path"));
var root_1 = require("../root");
var indexRouter = express_1.Router();
/* GET home page. */
indexRouter.get('/', function (req, res, next) {
    res.sendFile(path_1["default"].join(root_1.rootPath, 'public/index.html'));
});
exports["default"] = indexRouter;
