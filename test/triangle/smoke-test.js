/**
    Module: @mitchallen/maze-generator
      Test: triangle/smoke-test
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

const { describe, it, before, after, beforeEach, afterEach } = require('node:test');
var assert = require('node:assert/strict'),
    modulePath = "../../src/index";

describe('Triangle smoke test', function() {

    var _module = null;

    before(function() {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        _module = require(modulePath);
    });

    after(function() {
        // Call after all tests
    });

    beforeEach(function() {
        // Call before each test
    });

    afterEach(function() {
        // Call after eeach test
    });

    it('module should exist', function() {
        assert.ok(_module != null);
    });

    it('with no spec should return object', function() {
        var mazeGenerator = _module.Triangle();
        assert.ok(mazeGenerator != null);
    });

    it('with valid x and y parameters should return object', function() {
        var mazeGenerator = _module.Triangle({ x: 5, y: 5 });
        assert.ok(mazeGenerator != null);
    });

    it('generate 0 x 0 method should generate an empty maze', function() {
        var mazeGenerator = _module.Triangle({ x: 0, y: 0 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate -1 x -1 method should generate an empty maze', function() {
        var mazeGenerator = _module.Triangle({ x: -1, y: -1 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate -1 x -1 method should normalize x and y to 0', function() {
        var mazeGenerator = _module.Triangle({ x: -1, y: -1 });
        assert.deepStrictEqual(mazeGenerator.xSize, 0);
        assert.deepStrictEqual(mazeGenerator.ySize, 0);
    });

    it('generate 1 x 1 method should generate a maze', function() {
        var mazeGenerator = _module.Triangle({ x: 1, y: 1 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    // it('generate 1 x 2 method should generate a maze', function(done) {
    //     var mazeGenerator = _module.Triangle({ x: 1, y: 2 });
    //     should.exist(mazeGenerator);
    //     mazeGenerator.generate();
    //     mazeGenerator.printBoard();
    //     done();
    // });

    it('generate 2 x 1 method should generate a maze', function() {
        var mazeGenerator = _module.Triangle({ x: 2, y: 1 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate 5 x 5 method should generate a maze', function() {
        var mazeGenerator = _module.Triangle({ x: 5, y: 5 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate 10 x 5 method should generate a maze', function() {
        var mazeGenerator = _module.Triangle({ x: 10, y: 5 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate 10 x 10 method should generate a maze', function() {
        var mazeGenerator = _module.Triangle({ x: 10, y: 10 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate 20 x 15 method should generate a maze', function() {
        var mazeGenerator = _module.Triangle({ x: 20, y: 15 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate 20 x 20 method should generate a maze', function() {
        var mazeGenerator = _module.Triangle({ x: 20, y: 20 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate called twice should generate two valid and distinct mazes', function() {
        var mazeGenerator = _module.Triangle({ x: 10, y: 5 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate start should start the maze in a new location', function() {
        var mazeGenerator = _module.Triangle({ x: 5, y: 6 });
        assert.ok(mazeGenerator != null);
        let spec = {
            start: { c: 3, r: 3 },
            mask: [
                { c: 0, r: 0 },
                { c: 0, r: 1 },
                { c: 1, r: 0 },
                { c: 1, r: 1 },
            ]
        };
        mazeGenerator.generate(spec);
        mazeGenerator.printBoard();
    });

    it('generate mask should mask parts of the maze', function() {
        var mazeGenerator = _module.Triangle({ x: 5, y: 6 });
        assert.ok(mazeGenerator != null);
        let spec = {
            start: { c: 3, r: 3 },
            mask: [
                { c: 1, r: 1 },
                { c: 2, r: 0 },
                { c: 3, r: 1 },
            ]
        };
        mazeGenerator.generate(spec);
        mazeGenerator.printBoard();
    });

    it('generate mask should mask center parts of the maze', function() {
        var mazeGenerator = _module.Triangle({ x: 10, y: 6 });
        assert.ok(mazeGenerator != null);
        let spec = {
            start: { c: 0, r: 0 },
            mask: [
                { c: 1, r: 2 },
                { c: 2, r: 2 },
                { c: 2, r: 3 },
                { c: 3, r: 2 },
            ]
        };
        mazeGenerator.generate(spec);
        mazeGenerator.printBoard();
    });

    it('generate should use depth function', function() {
        var mazeGenerator = _module.Triangle({ x: 5, y: 5 });
        assert.ok(mazeGenerator != null);
        let spec = {
            start: { c: 0, r: 0 },
            depthFunction: function (depth, maxDepth) { 
                return depth > 3 || depth >= maxDepth; 
              }
        };
        mazeGenerator.generate(spec);
        mazeGenerator.printBoard();
    });

    it('printBorder should not throw', function() {
        var mazeGenerator = _module.Triangle({ x: 5, y: 6 });
        assert.ok(mazeGenerator != null);
        var origLog = console.log;
        console.log = function() {};
        mazeGenerator.printBorder();
        console.log = origLog;
    });
});
