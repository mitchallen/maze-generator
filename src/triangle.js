/**
    Module: @mitchallen/maze-generator/../triangle
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

    var _connectionGrid = connectionGridFactory.Triangle(_gridSpec);
    if(!_connectionGrid) {
        return null;
    }

    var obj = baseGrid.create( {
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
            console.log("TRIANGLE MAZE: %d, %d", _x, _y);
            let dirMap = this.dirMap;
            var canvas = ascii.Canvas( { columns: _x * 3, rows: _y * 3 } );

            let UP = 0x01,
                DOWN = 0x02;

            for(var y = 0; y < _y; y++) {
                for(var x = 0; x < _x; x++) {

                    //     __
                    //   /\  /\
                    //  /__\/__\
                    //  \  /\  /
                    //   \/__\/

                    var tDir = ( ( x + y ) % 2 === 0  ) ? UP : DOWN;

                    var cell = this.get(x,y);

                    var px = x * 2;
                    var py = y * 2 + 1;

                    if( cell !== 0 ) {

                        if( tDir == UP ) {

                            //   /\  
                            //  /__\

                            // West Wall 
                            if(!this.connects( x, y, "W" )) {
                                canvas.set(px + 1, py   , "/");
                                canvas.set(px ,   py + 1, "/");
                            }
                            // East Wall
                            if(!this.connects( x, y, "E" )) {
                                canvas.set(px + 3, py + 1 , "\\");
                                canvas.set(px + 2, py   , "\\");
                            }
                            // South Wall
                            if(!this.connects( x, y, "S" )) {
                                canvas.set(px  + 1,   py + 1, "_");
                                canvas.set(px  + 2,   py + 1, "_");
                            }

                        } else {

                            //  __
                            // \  /
                            //  \/

                            // North Wall Border (only draw for first row)
                            if( y === 0 ) {
                                canvas.set(px,   py - 1, "_");
                                canvas.set(px  + 1,   py - 1, "_");
                                canvas.set(px  + 2,   py - 1, "_");
                                canvas.set(px  + 3,   py - 1, "_");
                            }

                            // West Wall (only draw for first column)
                            if( y % 2 !== 0 && x === 0 ) {
                                // console.log("x: %d, y: %d", x, y);
                                canvas.set(px , py    , "\\");
                                canvas.set(px + 1, py + 1, "\\");
                            }

                            // East Wall Border (only draw at end)
                            if( x === (_x - 1) ) {
                                // console.log("x: %d, y: %d", x, y);
                                canvas.set(px + 3, py   , "/");
                                canvas.set(px + 2 ,py + 1, "/"); 
                            }
                        }
                    }
                }
            }

            canvas.print();
        }
    });
};