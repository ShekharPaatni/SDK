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
    instance = new HydrogenAtomApi.AggregationAccountAggregateDataVO();
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

  describe('AggregationAccountAggregateDataVO', function() {
    it('should create an instance of AggregationAccountAggregateDataVO', function() {
      // uncomment below and update the code to test AggregationAccountAggregateDataVO
      //var instane = new HydrogenAtomApi.AggregationAccountAggregateDataVO();
      //expect(instance).to.be.a(HydrogenAtomApi.AggregationAccountAggregateDataVO);
    });

    it('should have the property aggregationAccountBalances (base name: "aggregation_account_balances")', function() {
      // uncomment below and update the code to test the property aggregationAccountBalances
      //var instane = new HydrogenAtomApi.AggregationAccountAggregateDataVO();
      //expect(instance).to.be();
    });

    it('should have the property aggregationAccountDetails (base name: "aggregation_account_details")', function() {
      // uncomment below and update the code to test the property aggregationAccountDetails
      //var instane = new HydrogenAtomApi.AggregationAccountAggregateDataVO();
      //expect(instance).to.be();
    });

    it('should have the property aggregationAccountHoldings (base name: "aggregation_account_holdings")', function() {
      // uncomment below and update the code to test the property aggregationAccountHoldings
      //var instane = new HydrogenAtomApi.AggregationAccountAggregateDataVO();
      //expect(instance).to.be();
    });

    it('should have the property aggregationAccountId (base name: "aggregation_account_id")', function() {
      // uncomment below and update the code to test the property aggregationAccountId
      //var instane = new HydrogenAtomApi.AggregationAccountAggregateDataVO();
      //expect(instance).to.be();
    });

    it('should have the property aggregationAccountTransactions (base name: "aggregation_account_transactions")', function() {
      // uncomment below and update the code to test the property aggregationAccountTransactions
      //var instane = new HydrogenAtomApi.AggregationAccountAggregateDataVO();
      //expect(instance).to.be();
    });

  });

}));
