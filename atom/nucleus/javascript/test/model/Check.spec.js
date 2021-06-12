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
    instance = new HydrogenNucleusApi.Check();
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

  describe('Check', function() {
    it('should create an instance of Check', function() {
      // uncomment below and update the code to test Check
      //var instane = new HydrogenNucleusApi.Check();
      //expect(instance).to.be.a(HydrogenNucleusApi.Check);
    });

    it('should have the property checkAmount (base name: "check_amount")', function() {
      // uncomment below and update the code to test the property checkAmount
      //var instane = new HydrogenNucleusApi.Check();
      //expect(instance).to.be();
    });

    it('should have the property checkImages (base name: "check_images")', function() {
      // uncomment below and update the code to test the property checkImages
      //var instane = new HydrogenNucleusApi.Check();
      //expect(instance).to.be();
    });

    it('should have the property checkNumber (base name: "check_number")', function() {
      // uncomment below and update the code to test the property checkNumber
      //var instane = new HydrogenNucleusApi.Check();
      //expect(instance).to.be();
    });

  });

}));
