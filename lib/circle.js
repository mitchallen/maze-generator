/**
    Module: @mitchallen/maze-generator/lib/triangel
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var connectionGridFactory = require("@mitchallen/connection-grid"),
    baseGrid = require("../lib/base");

module.exports = (spec) => {
    
    spec = spec || {};

    let _rings = spec.rings || 0;

    let _gridSpec = {
        rings: _rings
    };

    var _grid = connectionGridFactory.Circle(_gridSpec);
    if(!_grid) {
        return null;
    }

    var obj = baseGrid( {
        grid: _grid,
    });

    return Object.assign( _grid, {

        connectsAny: function(ring,pos,list) {
            var connects = false;
            list.forEach( el => {
                if(this.connects( ring, pos, el )) {
                    connects = true;
                }
            });
            return connects;
        },

        printDivider: function(ring) {
            var row = "",
                rowSize = _grid.ringSize(ring),
                lim = rowSize * 2 + 1;
            for( var i = 0; i < lim; i++ ) {
                row += "_";
            }
            console.log( row )
        },

        printBorder: function() {
            this.printDivider(_rings - 1);
        },
        
        printBoard: function() {
            console.log("CIRCLE MAZE: %d", _rings);
            this.printBorder();
            var innerWall = "_";
            var innerOpen = " ";
            var incWidth = 1;
            for(var ring = _rings - 1; ring >= 0; ring--) {
                var lim = _grid.ringSize(ring);
                // console.log(lim);
                var row = "";
                if( ring === 0 ) {
                    row = "|";
                    var cLim = _grid.ringSize(_rings - 1) - 1;
                    for( var ci = 0; ci < cLim; ci++ ) {
                        row += "__";
                    }
                    row += "_|";
                    console.log(row);
                    continue;
                }
                if( ring != _rings - 1) {
                    if(this.ringSize(ring) != this.ringSize(ring + 1)) {
                        incWidth *= 2;
                        for( var i = 0; i < incWidth; i++ ) {
                            innerWall += "_";
                            innerOpen += " ";
                        }
                    }
                }
                for(var pos = 0; pos < lim; pos++) {
                    if(pos === 0) {
                        row += this.connects( ring, pos, "CCW" ) ? "_" : "|";
                    }
                    row += this.connectsAny( ring, pos, ["T","T0","T1"] ) ? innerOpen : innerWall;
                    row += this.connects( ring, pos, "CW" ) ? "_" : "|";
                }

                console.log(row);
            };
        }
    });
};