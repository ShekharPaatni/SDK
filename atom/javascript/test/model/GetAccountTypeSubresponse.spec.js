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
    instance = new atom_api.GetAccountTypeSubresponse();
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

  describe('GetAccountTypeSubresponse', function() {
    it('should create an instance of GetAccountTypeSubresponse', function() {
      // uncomment below and update the code to test GetAccountTypeSubresponse
      //var instance = new atom_api.GetAccountTypeSubresponse();
      //expect(instance).to.be.a(atom_api.GetAccountTypeSubresponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new atom_api.GetAccountTypeSubresponse();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "create_date")', function() {
      // uncomment below and update the code to test the property createDate
      //var instance = new atom_api.GetAccountTypeSubresponse();
      //expect(instance).to.be();
    });

    it('should have the property updateDate (base name: "update_date")', function() {
      // uncomment below and update the code to test the property updateDate
      //var instance = new atom_api.GetAccountTypeSubresponse();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instance = new atom_api.GetAccountTypeSubresponse();
      //expect(instance).to.be();
    });

    it('should have the property subcategory (base name: "subcategory")', function() {
      // uncomment below and update the code to test the property subcategory
      //var instance = new atom_api.GetAccountTypeSubresponse();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new atom_api.GetAccountTypeSubresponse();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "is_active")', function() {
      // uncomment below and update the code to test the property isActive
      //var instance = new atom_api.GetAccountTypeSubresponse();
      //expect(instance).to.be();
    });

    it('should have the property isTaxable (base name: "is_taxable")', function() {
      // uncomment below and update the code to test the property isTaxable
      //var instance = new atom_api.GetAccountTypeSubresponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new atom_api.GetAccountTypeSubresponse();
      //expect(instance).to.be();
    });

    it('should have the property shortName (base name: "short_name")', function() {
      // uncomment below and update the code to test the property shortName
      //var instance = new atom_api.GetAccountTypeSubresponse();
      //expect(instance).to.be();
    });

  });

}));
