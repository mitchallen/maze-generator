/**
    Module: @mitchallen/maze-generator
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var connectionGridFactory = require("@mitchallen/connection-grid"),
    squareMaze = require('./lib/square'),
    hexagonMaze = require('./lib/hexagon'),
    triangleMaze = require('./lib/triangle');

var createMaze = (spec) => {
    console.warn("@mitchallen/maze-generator: .create is deprecated. Use .Square instead.");
    return squareMaze( spec );
};

module.exports = {
    create: createMaze,
    Square: squareMaze,
    Hexagon: hexagonMaze,
    Triangle: triangleMaze,
};
