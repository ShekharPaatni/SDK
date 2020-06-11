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
    instance = new HydrogenAtomApi.InsuranceQuote();
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

  describe('InsuranceQuote', function() {
    it('should create an instance of InsuranceQuote', function() {
      // uncomment below and update the code to test InsuranceQuote
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be.a(HydrogenAtomApi.InsuranceQuote);
    });

    it('should have the property coverages (base name: "coverages")', function() {
      // uncomment below and update the code to test the property coverages
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "create_date")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be();
    });

    it('should have the property discounts (base name: "discounts")', function() {
      // uncomment below and update the code to test the property discounts
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "end_date")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "is_active")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be();
    });

    it('should have the property nodeMap (base name: "node_map")', function() {
      // uncomment below and update the code to test the property nodeMap
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be();
    });

    it('should have the property premium (base name: "premium")', function() {
      // uncomment below and update the code to test the property premium
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be();
    });

    it('should have the property premiumDuration (base name: "premium_duration")', function() {
      // uncomment below and update the code to test the property premiumDuration
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be();
    });

    it('should have the property premiumFrequency (base name: "premium_frequency")', function() {
      // uncomment below and update the code to test the property premiumFrequency
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be();
    });

    it('should have the property premiumFrequencyUnit (base name: "premium_frequency_unit")', function() {
      // uncomment below and update the code to test the property premiumFrequencyUnit
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be();
    });

    it('should have the property secondaryId (base name: "secondary_id")', function() {
      // uncomment below and update the code to test the property secondaryId
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be();
    });

    it('should have the property updateDate (base name: "update_date")', function() {
      // uncomment below and update the code to test the property updateDate
      //var instane = new HydrogenAtomApi.InsuranceQuote();
      //expect(instance).to.be();
    });

  });

}));
