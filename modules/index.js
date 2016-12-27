/**
    Module: @mitchallen/maze-generator
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var squareMaze = require('@mitchallen/maze-generator-square').create,
    hexagonMaze = require('./hexagon'),
    triangleMaze = require('./triangle'),
    circleMaze = require('./circle');

var createMaze = (spec) => {
    console.warn("@mitchallen/maze-generator: .create is deprecated. Use .Square instead.");
    return squareMaze( spec );
};

module.exports = {
    create: createMaze,
    Square: squareMaze,
    Hexagon: hexagonMaze,
    Triangle: triangleMaze,
    Circle: circleMaze
};
