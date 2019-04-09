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
    instance = new atom_api.Backtest();
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

  describe('Backtest', function() {
    it('should create an instance of Backtest', function() {
      // uncomment below and update the code to test Backtest
      //var instance = new atom_api.Backtest();
      //expect(instance).to.be.a(atom_api.Backtest);
    });

    it('should have the property modelId (base name: "model_id")', function() {
      // uncomment below and update the code to test the property modelId
      //var instance = new atom_api.Backtest();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instance = new atom_api.Backtest();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "end_date")', function() {
      // uncomment below and update the code to test the property endDate
      //var instance = new atom_api.Backtest();
      //expect(instance).to.be();
    });

    it('should have the property initialWeights (base name: "initial_weights")', function() {
      // uncomment below and update the code to test the property initialWeights
      //var instance = new atom_api.Backtest();
      //expect(instance).to.be();
    });

    it('should have the property assetSize (base name: "asset_size")', function() {
      // uncomment below and update the code to test the property assetSize
      //var instance = new atom_api.Backtest();
      //expect(instance).to.be();
    });

    it('should have the property assetSizes (base name: "asset_sizes")', function() {
      // uncomment below and update the code to test the property assetSizes
      //var instance = new atom_api.Backtest();
      //expect(instance).to.be();
    });

    it('should have the property trades (base name: "trades")', function() {
      // uncomment below and update the code to test the property trades
      //var instance = new atom_api.Backtest();
      //expect(instance).to.be();
    });

    it('should have the property holdings (base name: "holdings")', function() {
      // uncomment below and update the code to test the property holdings
      //var instance = new atom_api.Backtest();
      //expect(instance).to.be();
    });

    it('should have the property stats (base name: "stats")', function() {
      // uncomment below and update the code to test the property stats
      //var instance = new atom_api.Backtest();
      //expect(instance).to.be();
    });

  });

}));
