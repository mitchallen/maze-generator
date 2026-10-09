/**
    Module: @mitchallen/maze-generator
      Test: ascii/smoke-test
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint esversion: 6 */

"use strict";

const { describe, it, before, after, beforeEach, afterEach } = require('node:test');
var assert = require('node:assert/strict'),
    // Not: modulePath = "../../dist/maze-generator";
    modulePath = "../../src/ascii-canvas";

describe('Ascii module', function() {

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

    it('Canvas with no spec should return object', function() {
        var ascii = _module.Canvas();
        assert.ok(ascii != null);
    });

    it('with valid x and y parameters should return object', function() {
        var ascii = _module.Canvas({ columns: 10, rows: 5 });
        assert.ok(ascii != null);
    });

    it('should print canvas', function() {
        var ascii = _module.Canvas({ columns: 10, rows: 5 });
        ascii.set(0,0,'#');
        ascii.print();
        ascii.log();
    });

    it('should fill canvas with fill parameter', function() {
        var ascii = _module.Canvas({ columns: 10, rows: 5, fill: "." });
        // ascii.fill('@');
        ascii.set(0,0,'A');
        ascii.set(0,1,'B');
        ascii.print();
        ascii.log();
    });

    it('should put rows in rows', function() {
        var ascii = _module.Canvas({ columns: 10, rows: 5, fill: "." });
        // ascii.fill('@');
        ascii.set(0,0,'H');
        ascii.set(1,0,'E');
        ascii.set(2,0,'L');
        ascii.set(3,0,'L');
        ascii.set(4,0,'O');
        ascii.set(0,1,'W');
        ascii.set(1,1,'O');
        ascii.set(2,1,'R');
        ascii.set(3,1,'L');
        ascii.set(4,1,'D');
        ascii.print();
        ascii.log();
    });

});
