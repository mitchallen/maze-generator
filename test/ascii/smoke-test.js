/**
    Module: @mitchallen/maze-generator
      Test: ascii/smoke-test
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../../lib/ascii-canvas";

describe('Ascii module', function() {

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

    it('Canvas with no spec should return object', function(done) {
        var ascii = _module.Canvas();
        should.exist(ascii);
        done();
    });

    it('with valid x and y parameters should return object', function(done) {
        var ascii = _module.Canvas({ columns: 10, rows: 5 });
        should.exist(ascii);
        done();
    });

    it('should print canvas', function(done) {
        var ascii = _module.Canvas({ columns: 10, rows: 5 });
        ascii.set(0,0,'#');
        ascii.print();
        ascii.log();
        done();
    });

    it('should fill canvas with fill parameter', function(done) {
        var ascii = _module.Canvas({ columns: 10, rows: 5, fill: "." });
        // ascii.fill('@');
        ascii.set(0,0,'A');
        ascii.set(0,1,'B');
        ascii.print();
        ascii.log();
        done();
    });

});
