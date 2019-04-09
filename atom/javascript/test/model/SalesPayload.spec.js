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
    instance = new atom_api.SalesPayload();
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

  describe('SalesPayload', function() {
    it('should create an instance of SalesPayload', function() {
      // uncomment below and update the code to test SalesPayload
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be.a(atom_api.SalesPayload);
    });

    it('should have the property questions (base name: "questions")', function() {
      // uncomment below and update the code to test the property questions
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property assigned (base name: "assigned")', function() {
      // uncomment below and update the code to test the property assigned
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property openTime (base name: "open_time")', function() {
      // uncomment below and update the code to test the property openTime
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property closeTime (base name: "close_time")', function() {
      // uncomment below and update the code to test the property closeTime
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property closedBy (base name: "closed_by")', function() {
      // uncomment below and update the code to test the property closedBy
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property contacted (base name: "contacted")', function() {
      // uncomment below and update the code to test the property contacted
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property firmName (base name: "firm_name")', function() {
      // uncomment below and update the code to test the property firmName
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property solution (base name: "solution")', function() {
      // uncomment below and update the code to test the property solution
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property referralSource (base name: "referral_source")', function() {
      // uncomment below and update the code to test the property referralSource
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property notification (base name: "notification")', function() {
      // uncomment below and update the code to test the property notification
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

    it('should have the property secondaryId (base name: "secondary_id")', function() {
      // uncomment below and update the code to test the property secondaryId
      //var instance = new atom_api.SalesPayload();
      //expect(instance).to.be();
    });

  });

}));
