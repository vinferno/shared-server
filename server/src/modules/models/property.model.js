"use strict";
exports.__esModule = true;
exports.Property = void 0;
var sequelize_1 = require("sequelize");
var sequelizeConnection_1 = require("../db/sequelizeConnection");
exports.Property = sequelizeConnection_1.sequelize.define('property', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name_of_property: {
        type: sequelize_1.DataTypes.STRING
    },
    enable_notifications: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
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
    country: {
        type: sequelize_1.DataTypes.STRING
    },
    principal: {
        type: sequelize_1.DataTypes.FLOAT
    },
    interest: {
        type: sequelize_1.DataTypes.FLOAT
    },
    MIP: {
        type: sequelize_1.DataTypes.FLOAT
    },
    IRP: {
        type: sequelize_1.DataTypes.FLOAT
    },
    other_debt: {
        type: sequelize_1.DataTypes.FLOAT
    },
    DUNS: {
        type: sequelize_1.DataTypes.STRING
    },
    reviewed: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {});
