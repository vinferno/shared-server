"use strict";
exports.__esModule = true;
exports.PropertyManager = void 0;
var sequelize_1 = require("sequelize");
var sequelizeConnection_1 = require("../db/sequelizeConnection");
exports.PropertyManager = sequelizeConnection_1.sequelize.define('propertyManager', {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    street: {
        type: sequelize_1.DataTypes.STRING
    },
    city: {
        type: sequelize_1.DataTypes.STRING
    },
    state: {
        type: sequelize_1.DataTypes.STRING
    },
    zip: {
        type: sequelize_1.DataTypes.STRING
    },
    county: {
        type: sequelize_1.DataTypes.STRING
    },
    phone: {
        type: sequelize_1.DataTypes.STRING
    },
    property_id: {
        type: sequelize_1.DataTypes.STRING
    }
}, {});
