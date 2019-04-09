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
    instance = new atom_api.GoalAllocationResponse();
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

  describe('GoalAllocationResponse', function() {
    it('should create an instance of GoalAllocationResponse', function() {
      // uncomment below and update the code to test GoalAllocationResponse
      //var instance = new atom_api.GoalAllocationResponse();
      //expect(instance).to.be.a(atom_api.GoalAllocationResponse);
    });

    it('should have the property currentStatus (base name: "current_status")', function() {
      // uncomment below and update the code to test the property currentStatus
      //var instance = new atom_api.GoalAllocationResponse();
      //expect(instance).to.be();
    });

    it('should have the property recommendedStatus (base name: "recommended_status")', function() {
      // uncomment below and update the code to test the property recommendedStatus
      //var instance = new atom_api.GoalAllocationResponse();
      //expect(instance).to.be();
    });

    it('should have the property allocation (base name: "allocation")', function() {
      // uncomment below and update the code to test the property allocation
      //var instance = new atom_api.GoalAllocationResponse();
      //expect(instance).to.be();
    });

  });

}));
