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
    instance = new atom_api.AccountRebalanceOrderPayload();
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

  describe('AccountRebalanceOrderPayload', function() {
    it('should create an instance of AccountRebalanceOrderPayload', function() {
      // uncomment below and update the code to test AccountRebalanceOrderPayload
      //var instance = new atom_api.AccountRebalanceOrderPayload();
      //expect(instance).to.be.a(atom_api.AccountRebalanceOrderPayload);
    });

    it('should have the property sellTransactionCodeId (base name: "sell_transaction_code_id")', function() {
      // uncomment below and update the code to test the property sellTransactionCodeId
      //var instance = new atom_api.AccountRebalanceOrderPayload();
      //expect(instance).to.be();
    });

    it('should have the property buyTransactionCodeId (base name: "buy_transaction_code_id")', function() {
      // uncomment below and update the code to test the property buyTransactionCodeId
      //var instance = new atom_api.AccountRebalanceOrderPayload();
      //expect(instance).to.be();
    });

    it('should have the property buyThreshold (base name: "buy_threshold")', function() {
      // uncomment below and update the code to test the property buyThreshold
      //var instance = new atom_api.AccountRebalanceOrderPayload();
      //expect(instance).to.be();
    });

    it('should have the property cashPortfolioId (base name: "cash_portfolio_id")', function() {
      // uncomment below and update the code to test the property cashPortfolioId
      //var instance = new atom_api.AccountRebalanceOrderPayload();
      //expect(instance).to.be();
    });

    it('should have the property commitOrders (base name: "commit_orders")', function() {
      // uncomment below and update the code to test the property commitOrders
      //var instance = new atom_api.AccountRebalanceOrderPayload();
      //expect(instance).to.be();
    });

    it('should have the property nonFractional (base name: "non_fractional")', function() {
      // uncomment below and update the code to test the property nonFractional
      //var instance = new atom_api.AccountRebalanceOrderPayload();
      //expect(instance).to.be();
    });

    it('should have the property portThreshold (base name: "port_threshold")', function() {
      // uncomment below and update the code to test the property portThreshold
      //var instance = new atom_api.AccountRebalanceOrderPayload();
      //expect(instance).to.be();
    });

    it('should have the property restrictionsOn (base name: "restrictions_on")', function() {
      // uncomment below and update the code to test the property restrictionsOn
      //var instance = new atom_api.AccountRebalanceOrderPayload();
      //expect(instance).to.be();
    });

    it('should have the property sellThreshold (base name: "sell_threshold")', function() {
      // uncomment below and update the code to test the property sellThreshold
      //var instance = new atom_api.AccountRebalanceOrderPayload();
      //expect(instance).to.be();
    });

    it('should have the property useCashAvailable (base name: "use_cash_available")', function() {
      // uncomment below and update the code to test the property useCashAvailable
      //var instance = new atom_api.AccountRebalanceOrderPayload();
      //expect(instance).to.be();
    });

    it('should have the property useStrategic (base name: "use_strategic")', function() {
      // uncomment below and update the code to test the property useStrategic
      //var instance = new atom_api.AccountRebalanceOrderPayload();
      //expect(instance).to.be();
    });

  });

}));
