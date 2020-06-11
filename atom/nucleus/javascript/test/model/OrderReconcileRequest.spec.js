/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
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
    factory(root.expect, root.HydrogenAtomApi);
  }
}(this, function(expect, HydrogenAtomApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HydrogenAtomApi.OrderReconcileRequest();
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

  describe('OrderReconcileRequest', function() {
    it('should create an instance of OrderReconcileRequest', function() {
      // uncomment below and update the code to test OrderReconcileRequest
      //var instane = new HydrogenAtomApi.OrderReconcileRequest();
      //expect(instance).to.be.a(HydrogenAtomApi.OrderReconcileRequest);
    });

    it('should have the property accountId (base name: "account_id")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new HydrogenAtomApi.OrderReconcileRequest();
      //expect(instance).to.be();
    });

    it('should have the property nonFractional (base name: "non_fractional")', function() {
      // uncomment below and update the code to test the property nonFractional
      //var instane = new HydrogenAtomApi.OrderReconcileRequest();
      //expect(instance).to.be();
    });

    it('should have the property orderTrackIds (base name: "order_track_ids")', function() {
      // uncomment below and update the code to test the property orderTrackIds
      //var instane = new HydrogenAtomApi.OrderReconcileRequest();
      //expect(instance).to.be();
    });

    it('should have the property portfolioId (base name: "portfolio_id")', function() {
      // uncomment below and update the code to test the property portfolioId
      //var instane = new HydrogenAtomApi.OrderReconcileRequest();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenant_id")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instane = new HydrogenAtomApi.OrderReconcileRequest();
      //expect(instance).to.be();
    });

  });

}));
