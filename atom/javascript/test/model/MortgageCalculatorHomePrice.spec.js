/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2-SNAPSHOT
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
    factory(root.expect, root.atom_api);
  }
}(this, function(expect, atom_api) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new atom_api.MortgageCalculatorHomePrice();
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

  describe('MortgageCalculatorHomePrice', function() {
    it('should create an instance of MortgageCalculatorHomePrice', function() {
      // uncomment below and update the code to test MortgageCalculatorHomePrice
      //var instance = new atom_api.MortgageCalculatorHomePrice();
      //expect(instance).to.be.a(atom_api.MortgageCalculatorHomePrice);
    });

    it('should have the property downPayment (base name: "down_payment")', function() {
      // uncomment below and update the code to test the property downPayment
      //var instance = new atom_api.MortgageCalculatorHomePrice();
      //expect(instance).to.be();
    });

    it('should have the property periodicPayment (base name: "periodic_payment")', function() {
      // uncomment below and update the code to test the property periodicPayment
      //var instance = new atom_api.MortgageCalculatorHomePrice();
      //expect(instance).to.be();
    });

    it('should have the property interestRate (base name: "interest_rate")', function() {
      // uncomment below and update the code to test the property interestRate
      //var instance = new atom_api.MortgageCalculatorHomePrice();
      //expect(instance).to.be();
    });

    it('should have the property mortgageTerm (base name: "mortgage_term")', function() {
      // uncomment below and update the code to test the property mortgageTerm
      //var instance = new atom_api.MortgageCalculatorHomePrice();
      //expect(instance).to.be();
    });

  });

}));
