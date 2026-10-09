/**
    Module: @mitchallen/maze-generator
      Test: circle/smoke-test
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

const { describe, it, before, after, beforeEach, afterEach } = require('node:test');
var assert = require('node:assert/strict'),
    modulePath = "../../src/index";

describe('Circle smoke test', function() {

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
        var mazeGenerator = _module.Circle();
        assert.ok(mazeGenerator != null);
    });

    it('with valid rings parameters should return object', function() {
        var mazeGenerator = _module.Circle({ rings: 5 });
        assert.ok(mazeGenerator != null);
    });

    it('generate 0 method should generate an empty maze', function() {
        var mazeGenerator = _module.Circle({ rings: 0 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate -1 method should generate an empty maze', function() {
        var mazeGenerator = _module.Circle({ rings: -1 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate -1 x -1 method should normalize rings to 0', function() {
        var mazeGenerator = _module.Circle({ rings: -1 });
        assert.deepStrictEqual(mazeGenerator.rings, 0);
    });

    it('generate 1 method should generate a maze', function() {
        var mazeGenerator = _module.Circle({ rings: 1 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate 2 method should generate a maze', function() {
        var mazeGenerator = _module.Circle({ rings: 2 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate 3 method should generate a maze', function() {
        var mazeGenerator = _module.Circle({ rings: 3 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate 4 method should generate a maze', function() {
        var mazeGenerator = _module.Circle({ rings: 4 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate 5 method should generate a maze', function() {
        var mazeGenerator = _module.Circle({ rings: 5 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate 10 method should generate a maze', function() {
        var mazeGenerator = _module.Circle({ rings: 10 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate 15 method should generate a maze', function() {
        var mazeGenerator = _module.Circle({ rings: 15 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate 20 method should generate a maze', function() {
        var mazeGenerator = _module.Circle({ rings: 20 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate start should start the maze in a new location', function() {
        var mazeGenerator = _module.Circle({ rings: 5 });
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
        var mazeGenerator = _module.Circle({ rings: 6 });
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
        var mazeGenerator = _module.Circle({ rings: 5 });
        assert.ok(mazeGenerator != null);
        let spec = {
            start: { c: 4, r: 0 },
            mask: [
                { c: 0, r: 0 },
                { c: 1, r: 1 },
                { c: 1, r: 3 },
                { c: 1, r: 5 },
            ]
        };
        mazeGenerator.generate(spec);
        mazeGenerator.printBoard();
    });

    it('generate called twice should generate two valid and distinct mazes', function() {
        var mazeGenerator = _module.Circle({ rings: 5 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });

    it('generate 7 method should generate a maze', function() {
        var mazeGenerator = _module.Circle({ rings: 7 });
        assert.ok(mazeGenerator != null);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
    });
});
