/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.0
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
    instance = new HydrogenNucleusApi.Security();
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

  describe('Security', function() {
    it('should create an instance of Security', function() {
      // uncomment below and update the code to test Security
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be.a(HydrogenNucleusApi.Security);
    });

    it('should have the property assetClass (base name: "asset_class")', function() {
      // uncomment below and update the code to test the property assetClass
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property brokers (base name: "brokers")', function() {
      // uncomment below and update the code to test the property brokers
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "create_date")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property cusip (base name: "cusip")', function() {
      // uncomment below and update the code to test the property cusip
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property exchange (base name: "exchange")', function() {
      // uncomment below and update the code to test the property exchange
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property industry (base name: "industry")', function() {
      // uncomment below and update the code to test the property industry
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "is_active")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property isin (base name: "isin")', function() {
      // uncomment below and update the code to test the property isin
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property proxyId (base name: "proxy_id")', function() {
      // uncomment below and update the code to test the property proxyId
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property secondaryId (base name: "secondary_id")', function() {
      // uncomment below and update the code to test the property secondaryId
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property sector (base name: "sector")', function() {
      // uncomment below and update the code to test the property sector
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property securityClass (base name: "security_class")', function() {
      // uncomment below and update the code to test the property securityClass
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property securityComposition (base name: "security_composition")', function() {
      // uncomment below and update the code to test the property securityComposition
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property securityCountry (base name: "security_country")', function() {
      // uncomment below and update the code to test the property securityCountry
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property ticker (base name: "ticker")', function() {
      // uncomment below and update the code to test the property ticker
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property totalExpenseRatio (base name: "total_expense_ratio")', function() {
      // uncomment below and update the code to test the property totalExpenseRatio
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

    it('should have the property updateDate (base name: "update_date")', function() {
      // uncomment below and update the code to test the property updateDate
      //var instane = new HydrogenNucleusApi.Security();
      //expect(instance).to.be();
    });

  });

}));
