"use strict";
exports.__esModule = true;
exports.Account = void 0;
var sequelize_1 = require("sequelize");
var sequelizeConnection_1 = require("../db/sequelizeConnection");
exports.Account = sequelizeConnection_1.sequelize.define('account', {
    user_id: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {});
