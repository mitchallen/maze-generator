/**
    Module: @mitchallen/maze-generator
    Author: Mitch Allen
*/

/*jshint esversion: 6 */

"use strict";

var connectionGridFactory = require("@mitchallen/connection-grid");

module.exports.create = function (spec) {
    if(!spec) {
        return null;
    }
    if(!spec.x || !spec.y) {
        return null;
    }
    let _x = spec.x;
    let _y = spec.y;
    let _gridSpec = {
        x: _x,
        y: _y
    };
    var _connectionGrid = connectionGridFactory.create(_gridSpec);
    if(!_connectionGrid) {
        return null;
    }
    return Object.assign( _connectionGrid, {
        generate: function() {
            console.log("generate ...");
        }
    });
};
