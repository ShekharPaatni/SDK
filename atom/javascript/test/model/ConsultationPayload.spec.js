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
    instance = new atom_api.ConsultationPayload();
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

  describe('ConsultationPayload', function() {
    it('should create an instance of ConsultationPayload', function() {
      // uncomment below and update the code to test ConsultationPayload
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be.a(atom_api.ConsultationPayload);
    });

    it('should have the property accountTypeId (base name: "account_type_id")', function() {
      // uncomment below and update the code to test the property accountTypeId
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property additionalQuestions (base name: "additional_questions")', function() {
      // uncomment below and update the code to test the property additionalQuestions
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property assets (base name: "assets")', function() {
      // uncomment below and update the code to test the property assets
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property assigned (base name: "assigned")', function() {
      // uncomment below and update the code to test the property assigned
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property calendar (base name: "calendar")', function() {
      // uncomment below and update the code to test the property calendar
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property closeTime (base name: "close_time")', function() {
      // uncomment below and update the code to test the property closeTime
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property closedBy (base name: "closed_by")', function() {
      // uncomment below and update the code to test the property closedBy
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property completed (base name: "completed")', function() {
      // uncomment below and update the code to test the property completed
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property firmname (base name: "firmname")', function() {
      // uncomment below and update the code to test the property firmname
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property investmentAllocation (base name: "investment_allocation")', function() {
      // uncomment below and update the code to test the property investmentAllocation
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property investmentLocation (base name: "investment_location")', function() {
      // uncomment below and update the code to test the property investmentLocation
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property investmentObjectives (base name: "investment_objectives")', function() {
      // uncomment below and update the code to test the property investmentObjectives
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "is_active")', function() {
      // uncomment below and update the code to test the property isActive
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property reminded (base name: "reminded")', function() {
      // uncomment below and update the code to test the property reminded
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

    it('should have the property secondaryId (base name: "secondary_id")', function() {
      // uncomment below and update the code to test the property secondaryId
      //var instance = new atom_api.ConsultationPayload();
      //expect(instance).to.be();
    });

  });

}));
