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
    instance = new HydrogenNucleusApi.BankCredit();
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

  describe('BankCredit', function() {
    it('should create an instance of BankCredit', function() {
      // uncomment below and update the code to test BankCredit
      //var instane = new HydrogenNucleusApi.BankCredit();
      //expect(instance).to.be.a(HydrogenNucleusApi.BankCredit);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new HydrogenNucleusApi.BankCredit();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new HydrogenNucleusApi.BankCredit();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new HydrogenNucleusApi.BankCredit();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new HydrogenNucleusApi.BankCredit();
      //expect(instance).to.be();
    });

    it('should have the property memo (base name: "memo")', function() {
      // uncomment below and update the code to test the property memo
      //var instane = new HydrogenNucleusApi.BankCredit();
      //expect(instance).to.be();
    });

    it('should have the property merchant (base name: "merchant")', function() {
      // uncomment below and update the code to test the property merchant
      //var instane = new HydrogenNucleusApi.BankCredit();
      //expect(instance).to.be();
    });

    it('should have the property merchantId (base name: "merchant_id")', function() {
      // uncomment below and update the code to test the property merchantId
      //var instane = new HydrogenNucleusApi.BankCredit();
      //expect(instance).to.be();
    });

    it('should have the property subcategory (base name: "subcategory")', function() {
      // uncomment below and update the code to test the property subcategory
      //var instane = new HydrogenNucleusApi.BankCredit();
      //expect(instance).to.be();
    });

    it('should have the property transactionCategoryId (base name: "transaction_category_id")', function() {
      // uncomment below and update the code to test the property transactionCategoryId
      //var instane = new HydrogenNucleusApi.BankCredit();
      //expect(instance).to.be();
    });

    it('should have the property transactionType (base name: "transaction_type")', function() {
      // uncomment below and update the code to test the property transactionType
      //var instane = new HydrogenNucleusApi.BankCredit();
      //expect(instance).to.be();
    });

  });

}));
