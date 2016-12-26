/**
    Module: @mitchallen/maze-generator/../hexagon
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var connectionGridFactory = require("@mitchallen/connection-grid"),
    baseGrid = require("@mitchallen/maze-generator-core"),
    ascii = require("./ascii-canvas");

module.exports = (spec) => {
    
    spec = spec || {};

    let _x = spec.x || 0;
    let _y = spec.y || 0;

    let _gridSpec = {
        x: _x,
        y: _y
    };

    var _connectionGrid = connectionGridFactory.Hexagon(_gridSpec);
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
            console.log("HEXAGON MAZE: %d, %d", _x, _y);
            let dirMap = this.dirMap;
            var canvas = ascii.Canvas( { columns: _x * 2 + 1, rows: _y * 2 + 2 } );
            for(var y = 0; y < _y; y++) {
                var py = y * 2;
                for(var x = 0; x < _x; x++) {
                    var cell = this.get(x,y);

                    if( cell !== 0 ) {
                        var px = x * 2;
                        var shifted = x % 2 !== 0;
                        var ry = py;
                        var nw = "NW";
                        var ne = "NE";
                        var sw = "W";
                        var se = "E";
                        if( shifted ) {
                            ry = py + 1;
                            nw = "W";
                            ne = "E";
                            sw = "SW"; 
                            se = "SE"; 
                        }
              
                        if(!this.connects( x, y, "N" )) {
                            canvas.set(px + 1,ry,"_");
                        }
              
                        if(!this.connects( x, y, nw )) {
                            canvas.set(px,ry+1,"/");
                        }
              
                        if(!this.connects( x, y, ne )) {
                            canvas.set(px+2,ry+1,"\\");
                        }
              
                        if(!this.connects( x, y, sw )) {
                            canvas.set(px,ry+2,"\\");
                        }
              
                        if(!this.connects( x, y, "S" )) {
                            canvas.set(px+1,ry+2,"_");
                        }
              
                        if(!this.connects( x, y, se )) {
                            canvas.set(px+2,ry+2,"/");
                        }

                    }
                }
            }

            canvas.print();
        }
    });
};