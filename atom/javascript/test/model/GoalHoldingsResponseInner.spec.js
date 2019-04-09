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
    instance = new atom_api.GoalHoldingsResponseInner();
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

  describe('GoalHoldingsResponseInner', function() {
    it('should create an instance of GoalHoldingsResponseInner', function() {
      // uncomment below and update the code to test GoalHoldingsResponseInner
      //var instance = new atom_api.GoalHoldingsResponseInner();
      //expect(instance).to.be.a(atom_api.GoalHoldingsResponseInner);
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instance = new atom_api.GoalHoldingsResponseInner();
      //expect(instance).to.be();
    });

    it('should have the property securityId (base name: "security_id")', function() {
      // uncomment below and update the code to test the property securityId
      //var instance = new atom_api.GoalHoldingsResponseInner();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instance = new atom_api.GoalHoldingsResponseInner();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new atom_api.GoalHoldingsResponseInner();
      //expect(instance).to.be();
    });

    it('should have the property shares (base name: "shares")', function() {
      // uncomment below and update the code to test the property shares
      //var instance = new atom_api.GoalHoldingsResponseInner();
      //expect(instance).to.be();
    });

  });

}));
