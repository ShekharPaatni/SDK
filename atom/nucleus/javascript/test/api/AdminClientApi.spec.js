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
    instance = new HydrogenNucleusApi.AdminClientApi();
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

  describe('AdminClientApi', function() {
    describe('createAdminClientUsingPOST', function() {
      it('should call createAdminClientUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createAdminClientUsingPOST
        //instance.createAdminClientUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAdminClientUsingDELETE', function() {
      it('should call deleteAdminClientUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteAdminClientUsingDELETE
        //instance.deleteAdminClientUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAdminClientUsingGET', function() {
      it('should call getAdminClientUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAdminClientUsingGET
        //instance.getAdminClientUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllAdminClientUsingGET', function() {
      it('should call getAllAdminClientUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAllAdminClientUsingGET
        //instance.getAllAdminClientUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAdminClientUsingPUT', function() {
      it('should call updateAdminClientUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateAdminClientUsingPUT
        //instance.updateAdminClientUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateClientCredentialsUsingPOST', function() {
      it('should call updateClientCredentialsUsingPOST successfully', function(done) {
        //uncomment below and update the code to test updateClientCredentialsUsingPOST
        //instance.updateClientCredentialsUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
