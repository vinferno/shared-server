"use strict";
exports.__esModule = true;
var user_model_1 = require("../models/user.model");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.createNewUser = function (user) {
        return user_model_1.User.create(user);
    };
    return UserService;
}());
