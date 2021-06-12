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
    instance = new HydrogenNucleusApi.GoalAccountMapping();
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

  describe('GoalAccountMapping', function() {
    it('should create an instance of GoalAccountMapping', function() {
      // uncomment below and update the code to test GoalAccountMapping
      //var instane = new HydrogenNucleusApi.GoalAccountMapping();
      //expect(instance).to.be.a(HydrogenNucleusApi.GoalAccountMapping);
    });

    it('should have the property accumulationHorizon (base name: "accumulation_horizon")', function() {
      // uncomment below and update the code to test the property accumulationHorizon
      //var instane = new HydrogenNucleusApi.GoalAccountMapping();
      //expect(instance).to.be();
    });

    it('should have the property decumulationHorizon (base name: "decumulation_horizon")', function() {
      // uncomment below and update the code to test the property decumulationHorizon
      //var instane = new HydrogenNucleusApi.GoalAccountMapping();
      //expect(instance).to.be();
    });

    it('should have the property goalAmount (base name: "goal_amount")', function() {
      // uncomment below and update the code to test the property goalAmount
      //var instane = new HydrogenNucleusApi.GoalAccountMapping();
      //expect(instance).to.be();
    });

    it('should have the property goalId (base name: "goal_id")', function() {
      // uncomment below and update the code to test the property goalId
      //var instane = new HydrogenNucleusApi.GoalAccountMapping();
      //expect(instance).to.be();
    });

  });

}));
