/**
    Module: @mitchallen/maze-generator
    Author: Mitch Allen
*/

/*jshint esversion: 6 */

"use strict";

var connectionGridFactory = require("@mitchallen/connection-grid");

module.exports.create = (spec) => {

    spec = spec || {};

    let _x = spec.x || 0;
    let _y = spec.y || 0;

    let _gridSpec = {
        x: _x,
        y: _y
    };

    var _connectionGrid = connectionGridFactory.create(_gridSpec);
    if(!_connectionGrid) {
        return null;
    }
    return Object.assign( _connectionGrid, {
        carveMaze: function(x,y,depth,maxDepth) {
            if( depth >= maxDepth ) {
                console.warn("MAXIMUM DEPTH REACHED: %d", maxDepth);
                return; 
            }

            if(!this.isCell(x,y)) { return; }
            let dirs = this.getShuffledNeighborDirs( x, y );
            for( var key in dirs ) {
                var sDir = dirs[key];
                var n = this.getNeighbor(x, y, sDir);
                if(n===null) {
                    continue;
                }

                if(this.isMasked(n.x,n.y)) {
                    continue;
                }
 
                if(
                    this.isCell(n.x, n.y) && !this.hasConnections(n.x, n.y)
                ) {
                    // Connect cell to neighbor
                    this.connectUndirected( x, y, sDir);
                    this.carveMaze( n.x, n.y, depth + 1, maxDepth );
                }
            }
        },
        generate: function(spec) {
            let aMask = null;
            let start = null;
            if(spec) {
                aMask = spec.mask;
                start = spec.start;
            }
            this.fill(0);
            for( var key in aMask ) {
                var mask = aMask[key];
                this.mask(mask.c,mask.r);
            }
            let maxDepth = this.xSize * this.ySize;
            let x = 0;
            let y = 0;
            if(start) {
                x = start.c || 0;
                y = start.y || 0;
            }
            this.carveMaze(x,y,0,maxDepth);
        },
        printBorder: function() {
            var row = "";
            var lim = _x  * 2;
            for( var i = 0; i < lim; i++ ) {
                row += i === 0 ? " " : "_";
            }
            console.log( row );
        },
        printBoard: function() {
            console.log("MAZE: %d, %d", _x, _y);
            this.printBorder();
            let dirMap = this.dirMap;
            for(var y = 0; y < _y; y++) {
                var row = "|";
                for(var x = 0; x < _x; x++) {
                    row += this.connects( x, y, "S" ) ? " " : "_";
                    if(this.connects( x, y, "E" )) {
                        // row += ( ( ( grid[x][y] | grid[x+1][y] ) & S ) != 0) ? " " : "_"
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
