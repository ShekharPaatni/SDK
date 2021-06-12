/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HydrogenNucleusApi);
  }
}(this, function(expect, HydrogenNucleusApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HydrogenNucleusApi.Balances();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Balances', function() {
    it('should create an instance of Balances', function() {
      // uncomment below and update the code to test Balances
      //var instane = new HydrogenNucleusApi.Balances();
      //expect(instance).to.be.a(HydrogenNucleusApi.Balances);
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new HydrogenNucleusApi.Balances();
      //expect(instance).to.be();
    });

    it('should have the property payableOutstanding (base name: "payable_outstanding")', function() {
      // uncomment below and update the code to test the property payableOutstanding
      //var instane = new HydrogenNucleusApi.Balances();
      //expect(instance).to.be();
    });

    it('should have the property payableOverdue (base name: "payable_overdue")', function() {
      // uncomment below and update the code to test the property payableOverdue
      //var instane = new HydrogenNucleusApi.Balances();
      //expect(instance).to.be();
    });

    it('should have the property receivableOutstanding (base name: "receivable_outstanding")', function() {
      // uncomment below and update the code to test the property receivableOutstanding
      //var instane = new HydrogenNucleusApi.Balances();
      //expect(instance).to.be();
    });

    it('should have the property receivableOverdue (base name: "receivable_overdue")', function() {
      // uncomment below and update the code to test the property receivableOverdue
      //var instane = new HydrogenNucleusApi.Balances();
      //expect(instance).to.be();
    });

  });

}));
