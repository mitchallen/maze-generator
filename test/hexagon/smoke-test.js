/**
    Module: @mitchallen/maze-generator
      Test: hexagon/smoke-test
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../../dist/maze-generator";

describe('Hexagon smoke test', function() {

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
        var mazeGenerator = _module.Hexagon();
        should.exist(mazeGenerator);
        done();
    });

    it('with valid x and y parameters should return object', function(done) {
        var mazeGenerator = _module.Hexagon({ x: 5, y: 5 });
        should.exist(mazeGenerator);
        done();
    });

    it('generate 0 x 0 method should generate an empty maze', function(done) {
        var mazeGenerator = _module.Hexagon({ x: 0, y: 0 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate -1 x -1 method should generate an empty maze', function(done) {
        var mazeGenerator = _module.Hexagon({ x: -1, y: -1 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate -1 x -1 method should normalize x and y to 0', function(done) {
        var mazeGenerator = _module.Hexagon({ x: -1, y: -1 });
        mazeGenerator.xSize.should.eql(0);
        mazeGenerator.ySize.should.eql(0);
        done();
    });

    it('generate 1 x 1 method should generate a maze', function(done) {
        var mazeGenerator = _module.Hexagon({ x: 1, y: 1 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 1 x 2 method should generate a maze', function(done) {
        var mazeGenerator = _module.Hexagon({ x: 1, y: 2 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 2 x 1 method should generate a maze', function(done) {
        var mazeGenerator = _module.Hexagon({ x: 2, y: 1 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 5 x 5 method should generate a maze', function(done) {
        var mazeGenerator = _module.Hexagon({ x: 5, y: 5 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 10 x 5 method should generate a maze', function(done) {
        var mazeGenerator = _module.Hexagon({ x: 10, y: 5 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 10 x 10 method should generate a maze', function(done) {
        var mazeGenerator = _module.Hexagon({ x: 10, y: 10 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 20 x 15 method should generate a maze', function(done) {
        var mazeGenerator = _module.Hexagon({ x: 20, y: 15 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 20 x 20 method should generate a maze', function(done) {
        var mazeGenerator = _module.Hexagon({ x: 20, y: 20 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate called twice should generate two valid and distinct mazes', function(done) {
        var mazeGenerator = _module.Hexagon({ x: 10, y: 5 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate start should start the maze in a new location', function(done) {
        var mazeGenerator = _module.Hexagon({ x: 5, y: 6 });
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
        var mazeGenerator = _module.Hexagon({ x: 5, y: 6 });
        should.exist(mazeGenerator);
        let spec = {
            start: { c: 3, r: 3 },
            mask: [
                { c: 0, r: 1 },
                { c: 1, r: 0 },
                { c: 1, r: 1 },
            ]
        };
        mazeGenerator.generate(spec);
        mazeGenerator.printBoard();
        done();
    });

    it('generate mask should mask center parts of the maze', function(done) {
        var mazeGenerator = _module.Hexagon({ x: 5, y: 6 });
        should.exist(mazeGenerator);
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
        done();
    });

    it('getMaxDistance for hexagon maze 5x6', function (done) {
      var mazeGenerator = _module.Hexagon({ x: 5, y: 6 });
      should.exist(mazeGenerator);
      let spec = {
          start: { c: 0, r: 0 },
      };
      mazeGenerator.generate(spec);
      let d = mazeGenerator.getMaxDistance(0, 0);
      console.log(d);
      // TODO - add target handler
      mazeGenerator.printBoard({ target: d });
      // console.log('\ntarget: ', d, '\n');
      done();
    });

    it('solve for hexagon maze', function (done) {
      let size = { x: 5, y: 6 };
      var mazeGenerator = _module.Hexagon(size);
      should.exist(mazeGenerator);
      let spec = {
          start: { c: 0, r: 0 },
      };
      mazeGenerator.generate(spec);
      let d = mazeGenerator.getMaxDistance(0, 0);
      console.log(d);
      // TODO - add target handler
      mazeGenerator.printBoard({ target: d });
      // console.log('\ntarget: ', d, '\n');
      let { x: dx, y: dy } = d;
      let points = [
        { x: 0, y: 0 },
        { x: dx, y: dy },
      ];
      mazeGenerator.solve(points);
      mazeGenerator.printBoard({ target: d });
      done();
    });

    it('should use depth function', function (done) {
        let size = { x: 5, y: 6 };
        var mazeGenerator = _module.Hexagon(size);
        should.exist(mazeGenerator);
        let spec = {
            start: { c: 0, r: 0 },
            depthFunction: function (depth, maxDepth) { 
                return depth > 3 || depth >= maxDepth; 
            }
        };
        mazeGenerator.generate(spec);
        mazeGenerator.printBoard();
        done();
      });
});
