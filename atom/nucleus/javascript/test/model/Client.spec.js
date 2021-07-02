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
    instance = new HydrogenNucleusApi.Client();
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

  describe('Client', function() {
    it('should create an instance of Client', function() {
      // uncomment below and update the code to test Client
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be.a(HydrogenNucleusApi.Client);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property businessId (base name: "business_id")', function() {
      // uncomment below and update the code to test the property businessId
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property citizenshipStatus (base name: "citizenship_status")', function() {
      // uncomment below and update the code to test the property citizenshipStatus
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property clientType (base name: "client_type")', function() {
      // uncomment below and update the code to test the property clientType
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property countryOfCitizenship (base name: "country_of_citizenship")', function() {
      // uncomment below and update the code to test the property countryOfCitizenship
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property countryOfResidence (base name: "country_of_residence")', function() {
      // uncomment below and update the code to test the property countryOfResidence
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "create_date")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property dateOfBirth (base name: "date_of_birth")', function() {
      // uncomment below and update the code to test the property dateOfBirth
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property employment (base name: "employment")', function() {
      // uncomment below and update the code to test the property employment
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property firmName (base name: "firm_name")', function() {
      // uncomment below and update the code to test the property firmName
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property firmType (base name: "firm_type")', function() {
      // uncomment below and update the code to test the property firmType
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property hydroId (base name: "hydro_id")', function() {
      // uncomment below and update the code to test the property hydroId
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property identificationNumber (base name: "identification_number")', function() {
      // uncomment below and update the code to test the property identificationNumber
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property identificationNumberType (base name: "identification_number_type")', function() {
      // uncomment below and update the code to test the property identificationNumberType
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property income (base name: "income")', function() {
      // uncomment below and update the code to test the property income
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "is_active")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property isVerified (base name: "is_verified")', function() {
      // uncomment below and update the code to test the property isVerified
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property liquidNetWorth (base name: "liquid_net_worth")', function() {
      // uncomment below and update the code to test the property liquidNetWorth
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property middleName (base name: "middle_name")', function() {
      // uncomment below and update the code to test the property middleName
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phone_number")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property secondaryId (base name: "secondary_id")', function() {
      // uncomment below and update the code to test the property secondaryId
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property suffix (base name: "suffix")', function() {
      // uncomment below and update the code to test the property suffix
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property totalNetWorth (base name: "total_net_worth")', function() {
      // uncomment below and update the code to test the property totalNetWorth
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property updateDate (base name: "update_date")', function() {
      // uncomment below and update the code to test the property updateDate
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new HydrogenNucleusApi.Client();
      //expect(instance).to.be();
    });

  });

}));
