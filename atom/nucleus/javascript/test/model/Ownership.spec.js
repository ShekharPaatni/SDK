/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.0
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
    instance = new HydrogenNucleusApi.Ownership();
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

  describe('Ownership', function() {
    it('should create an instance of Ownership', function() {
      // uncomment below and update the code to test Ownership
      //var instane = new HydrogenNucleusApi.Ownership();
      //expect(instance).to.be.a(HydrogenNucleusApi.Ownership);
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new HydrogenNucleusApi.Ownership();
      //expect(instance).to.be();
    });

    it('should have the property isBeneficial (base name: "is_beneficial")', function() {
      // uncomment below and update the code to test the property isBeneficial
      //var instane = new HydrogenNucleusApi.Ownership();
      //expect(instance).to.be();
    });

    it('should have the property isPrimary (base name: "is_primary")', function() {
      // uncomment below and update the code to test the property isPrimary
      //var instane = new HydrogenNucleusApi.Ownership();
      //expect(instance).to.be();
    });

    it('should have the property percentOwnership (base name: "percent_ownership")', function() {
      // uncomment below and update the code to test the property percentOwnership
      //var instane = new HydrogenNucleusApi.Ownership();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new HydrogenNucleusApi.Ownership();
      //expect(instance).to.be();
    });

  });

}));
