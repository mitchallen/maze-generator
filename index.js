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
                if(
                    this.isCell(n.x, n.y) 
                    && !this.hasConnections(n.x, n.y)
                    // && (this.get(n.x, n.y) === 0)
                ){
                    // Connect cell to neighbor
                    this.connectUndirected( x, y, sDir);
                    this.carveMaze( n.x, n.y, depth + 1, maxDepth );
                }
            }
        },
        generate: function(maxDepth) {
            this.carveMaze(0,0,0,maxDepth);
            this.log();
        }
    });
};
