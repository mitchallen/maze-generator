/**
    Module: @mitchallen/maze-generator/../square
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var connectionGridFactory = require("@mitchallen/connection-grid"),
    baseGrid = require("@mitchallen/maze-generator-core");

module.exports = (spec) => {
    
    spec = spec || {};

    let _x = spec.x || 0;
    let _y = spec.y || 0;

    let _gridSpec = {
        x: _x,
        y: _y
    };

    var _connectionGrid = connectionGridFactory.Square(_gridSpec);
    if(!_connectionGrid) {
        return null;
    }

    var obj = baseGrid( {
        grid: _connectionGrid,
    });

    return Object.assign( _connectionGrid, {
        printBorder: function() {
            var row = "";
            var lim = _x  * 2;
            for( var i = 0; i < lim; i++ ) {
                row += i === 0 ? " " : "_";
            }
            console.log( row );
        },
        printBoard: function() {
            console.log("SQUARE MAZE: %d, %d", _x, _y);
            this.printBorder();
            let dirMap = this.dirMap;
            for(var y = 0; y < _y; y++) {
                var row = "|";
                for(var x = 0; x < _x; x++) {
                    row += this.connects( x, y, "S" ) ? " " : "_";
                    if(this.connects( x, y, "E" )) {
                        row += ( ( ( this.get(x,y) | this.get(x+1,y) ) & dirMap.S ) !== 0) ? " " : "_";
                    } else {
                        row += "|";
                    }
                }
                console.log( row );
            }
        }
    });
};