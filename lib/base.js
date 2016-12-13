/**
    Module: @mitchallen/maze-generator/lib/base
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

// var connectionGridFactory = require("@mitchallen/connection-grid");

module.exports = (spec) => {

    spec = spec || {};
    var _grid = spec.grid;

    if(!_grid) {
        return null;
    }

    // Object.defineProperties( _grid, {
    // });

    return Object.assign( _grid, {

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
            let aMask = null,
                start = null;
            if(spec) {
                aMask = spec.mask;
                start = spec.start;
            }
            this.fill(0);
            for( var key in aMask ) {
                var mask = aMask[key];
                this.mask(mask.c,mask.r);
            }
            let maxDepth = this.xSize * this.ySize,
                x = 0,
                y = 0;
            if(start) {
                x = start.c || 0;
                y = start.r || 0;
            }
            this.carveMaze(x,y,0,maxDepth);
        },
    });

};