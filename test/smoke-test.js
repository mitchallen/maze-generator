/**
    Module: @mitchallen/maze-generator
      Test: smoke-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../index";

describe('module smoke test', function() {

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

    it('create method with no spec should return null', function(done) {
        var mazeGenerator = _module.create();
        should.not.exist(mazeGenerator);
        done();
    });

    it('create method with valid x and y parameters should return object', function(done) {
        var mazeGenerator = _module.create({ x: 5, y: 5 });
        should.exist(mazeGenerator);
        done();
    });

    it('generate 5 x 5 method should generate a maze', function(done) {
        var mazeGenerator = _module.create({ x: 5, y: 5 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 10 x 5 method should generate a maze', function(done) {
        var mazeGenerator = _module.create({ x: 10, y: 5 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 10 x 10 method should generate a maze', function(done) {
        var mazeGenerator = _module.create({ x: 10, y: 10 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 20 x 15 method should generate a maze', function(done) {
        var mazeGenerator = _module.create({ x: 20, y: 15 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate 20 x 20 method should generate a maze', function(done) {
        var mazeGenerator = _module.create({ x: 20, y: 20 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });

    it('generate called twice should generate two valid and distinct mazes', function(done) {
        var mazeGenerator = _module.create({ x: 10, y: 5 });
        should.exist(mazeGenerator);
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        mazeGenerator.generate();
        mazeGenerator.printBoard();
        done();
    });
});
