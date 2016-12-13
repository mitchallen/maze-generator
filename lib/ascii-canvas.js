/**
    Module: @mitchallen/maze-generator/lib/ascii-canvas
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var gridFactory = require("@mitchallen/grid");

module.exports.Canvas = (spec) => {

    spec = spec || {};

    var _columns = spec.columns || 0,  
        _rows = spec.rows || 0,
        _fill = spec.fill || " ";  

    let _gridSpec = {
        x: _columns,
        y: _rows
    };

    var grid = gridFactory.Square( _gridSpec );

    grid.fill(_fill);  

    return Object.assign( grid, {
        toString: function() {
            var str = "";
            for( var row = 0; row < _rows; row++ ) {
                for( var col = 0; col < _columns; col++ ) {
                    str += this.get(col,row);
                }
                str += "\n";
            }
            return str;
        },
        print: function() {
            console.log(this.toString());
        }
    });
};