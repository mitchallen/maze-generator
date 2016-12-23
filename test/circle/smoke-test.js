/**
    Module: @mitchallen/maze-generator
      Test: circle/smoke-test
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../../dist/maze-generator";

describe('Circle smoke test', function() {

    var _module = null;

    before(function(done) {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        _module = require(modulePath);
        done();
    });

    after(function(done) {
        // Call after all tests
        done();
    });

    beforeEach(function(done) {
        // Call before each test
        done();
    });

    afterEach(function(done) {
        // Call after eeach test
        done();
    });

    it('module should exist', function(done) {
        should.exist(_module);
        done();
    });

    it('with no spec should return object', function(done) {
        var mazeGenerator = _module.Circle();
        should.exist(mazeGenerator);
        done();
    });

    it('with valid rings parameters should return object', function(done) {
        var mazeGenerator = _module.Circle({ rings: 5 });
        should.exist(mazeGenerator);
        done();
    });

    it('generate 0 method should generate an empty maze', function(done) {
        var mazeGenerator = _module.Circle({ rings: 0 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate -1 method should generate an empty maze', function(done) {
        var mazeGenerator = _module.Circle({ rings: -1 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate -1 x -1 method should normalize rings to 0', function(done) {
        var mazeGenerator = _module.Circle({ rings: -1 });
        mazeGenerator.rings.should.eql(0);
        done();
    });

    it('generate 1 method should generate a maze', function(done) {
        var mazeGenerator = _module.Circle({ rings: 1 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 2 method should generate a maze', function(done) {
        var mazeGenerator = _module.Circle({ rings: 2 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 3 method should generate a maze', function(done) {
        var mazeGenerator = _module.Circle({ rings: 3 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 4 method should generate a maze', function(done) {
        var mazeGenerator = _module.Circle({ rings: 4 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 5 method should generate a maze', function(done) {
        var mazeGenerator = _module.Circle({ rings: 5 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 10 method should generate a maze', function(done) {
        var mazeGenerator = _module.Circle({ rings: 10 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 15 method should generate a maze', function(done) {
        var mazeGenerator = _module.Circle({ rings: 15 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 20 method should generate a maze', function(done) {
        var mazeGenerator = _module.Circle({ rings: 20 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate start should start the maze in a new location', function(done) {
        var mazeGenerator = _module.Circle({ rings: 5 });
        should.exist(mazeGenerator);
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
        done();
    });

    it('generate mask should mask parts of the maze', function(done) {
        var mazeGenerator = _module.Circle({ rings: 6 });
        should.exist(mazeGenerator);
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
        done();
    });

    it('generate mask should mask center parts of the maze', function(done) {
        var mazeGenerator = _module.Circle({ rings: 5 });
        should.exist(mazeGenerator);
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
        done();
    });

    it('generate called twice should generate two valid and distinct mazes', function(done) {
        var mazeGenerator = _module.Circle({ rings: 5 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });



    it('generate 7 method should generate a maze', function(done) {
        var mazeGenerator = _module.Circle({ rings: 7 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });
});
