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
    instance = new HydrogenNucleusApi.Card();
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

  describe('Card', function() {
    it('should create an instance of Card', function() {
      // uncomment below and update the code to test Card
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be.a(HydrogenNucleusApi.Card);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property businessId (base name: "business_id")', function() {
      // uncomment below and update the code to test the property businessId
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property cardHolderName (base name: "card_holder_name")', function() {
      // uncomment below and update the code to test the property cardHolderName
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property cardImage (base name: "card_image")', function() {
      // uncomment below and update the code to test the property cardImage
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property cardIssuance (base name: "card_issuance")', function() {
      // uncomment below and update the code to test the property cardIssuance
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property cardName (base name: "card_name")', function() {
      // uncomment below and update the code to test the property cardName
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property cardNetwork (base name: "card_network")', function() {
      // uncomment below and update the code to test the property cardNetwork
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property cardProgramId (base name: "card_program_id")', function() {
      // uncomment below and update the code to test the property cardProgramId
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property cardType (base name: "card_type")', function() {
      // uncomment below and update the code to test the property cardType
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "create_date")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property creditLimit (base name: "credit_limit")', function() {
      // uncomment below and update the code to test the property creditLimit
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property expiryDate (base name: "expiry_date")', function() {
      // uncomment below and update the code to test the property expiryDate
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property fulfillment (base name: "fulfillment")', function() {
      // uncomment below and update the code to test the property fulfillment
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property institutionId (base name: "institution_id")', function() {
      // uncomment below and update the code to test the property institutionId
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property institutionName (base name: "institution_name")', function() {
      // uncomment below and update the code to test the property institutionName
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "is_active")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property isPinSet (base name: "is_pin_set")', function() {
      // uncomment below and update the code to test the property isPinSet
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property isPrimary (base name: "is_primary")', function() {
      // uncomment below and update the code to test the property isPrimary
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property isReloadable (base name: "is_reloadable")', function() {
      // uncomment below and update the code to test the property isReloadable
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property mask (base name: "mask")', function() {
      // uncomment below and update the code to test the property mask
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phone_number")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property portfolioId (base name: "portfolio_id")', function() {
      // uncomment below and update the code to test the property portfolioId
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property prepaidAmount (base name: "prepaid_amount")', function() {
      // uncomment below and update the code to test the property prepaidAmount
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property secondaryId (base name: "secondary_id")', function() {
      // uncomment below and update the code to test the property secondaryId
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

    it('should have the property updateDate (base name: "update_date")', function() {
      // uncomment below and update the code to test the property updateDate
      //var instane = new HydrogenNucleusApi.Card();
      //expect(instance).to.be();
    });

  });

}));
