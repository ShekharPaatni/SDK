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
    instance = new HydrogenNucleusApi.BankLink();
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

  describe('BankLink', function() {
    it('should create an instance of BankLink', function() {
      // uncomment below and update the code to test BankLink
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be.a(HydrogenNucleusApi.BankLink);
    });

    it('should have the property accountId (base name: "account_id")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property availableBalance (base name: "available_balance")', function() {
      // uncomment below and update the code to test the property availableBalance
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property bankAccountHolder (base name: "bank_account_holder")', function() {
      // uncomment below and update the code to test the property bankAccountHolder
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property bankAccountName (base name: "bank_account_name")', function() {
      // uncomment below and update the code to test the property bankAccountName
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property bankAccountNumber (base name: "bank_account_number")', function() {
      // uncomment below and update the code to test the property bankAccountNumber
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property businessId (base name: "business_id")', function() {
      // uncomment below and update the code to test the property businessId
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "create_date")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property institutionId (base name: "institution_id")', function() {
      // uncomment below and update the code to test the property institutionId
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property institutionName (base name: "institution_name")', function() {
      // uncomment below and update the code to test the property institutionName
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "is_active")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property isDefault (base name: "is_default")', function() {
      // uncomment below and update the code to test the property isDefault
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property isLinkVerified (base name: "is_link_verified")', function() {
      // uncomment below and update the code to test the property isLinkVerified
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property linkVerifiedDate (base name: "link_verified_date")', function() {
      // uncomment below and update the code to test the property linkVerifiedDate
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property mask (base name: "mask")', function() {
      // uncomment below and update the code to test the property mask
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property routing (base name: "routing")', function() {
      // uncomment below and update the code to test the property routing
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property routingWire (base name: "routing_wire")', function() {
      // uncomment below and update the code to test the property routingWire
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property secondaryId (base name: "secondary_id")', function() {
      // uncomment below and update the code to test the property secondaryId
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

    it('should have the property updateDate (base name: "update_date")', function() {
      // uncomment below and update the code to test the property updateDate
      //var instane = new HydrogenNucleusApi.BankLink();
      //expect(instance).to.be();
    });

  });

}));
