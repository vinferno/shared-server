"use strict";
exports.__esModule = true;
exports.SubAccount = void 0;
var sequelize_1 = require("sequelize");
var sequelizeConnection_1 = require("../db/sequelizeConnection");
exports.SubAccount = sequelizeConnection_1.sequelize.define('subAccount', {
    user_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    account_id: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {});
