/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.2
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
    instance = new HydrogenNucleusApi.ClientTotalCardBalanceVO();
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

  describe('ClientTotalCardBalanceVO', function() {
    it('should create an instance of ClientTotalCardBalanceVO', function() {
      // uncomment below and update the code to test ClientTotalCardBalanceVO
      //var instane = new HydrogenNucleusApi.ClientTotalCardBalanceVO();
      //expect(instance).to.be.a(HydrogenNucleusApi.ClientTotalCardBalanceVO);
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new HydrogenNucleusApi.ClientTotalCardBalanceVO();
      //expect(instance).to.be();
    });

    it('should have the property totalBalance (base name: "total_balance")', function() {
      // uncomment below and update the code to test the property totalBalance
      //var instane = new HydrogenNucleusApi.ClientTotalCardBalanceVO();
      //expect(instance).to.be();
    });

    it('should have the property totalBalanceAvailable (base name: "total_balance_available")', function() {
      // uncomment below and update the code to test the property totalBalanceAvailable
      //var instane = new HydrogenNucleusApi.ClientTotalCardBalanceVO();
      //expect(instance).to.be();
    });

  });

}));
