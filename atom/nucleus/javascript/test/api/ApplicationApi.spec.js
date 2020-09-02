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
    factory(root.expect, root.HydrogenNucleusApi);
  }
}(this, function(expect, HydrogenNucleusApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HydrogenNucleusApi.ApplicationApi();
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

  describe('ApplicationApi', function() {
    describe('createApplicationUsingPost', function() {
      it('should call createApplicationUsingPost successfully', function(done) {
        //uncomment below and update the code to test createApplicationUsingPost
        //instance.createApplicationUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteApplicationUsingDelete', function() {
      it('should call deleteApplicationUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteApplicationUsingDelete
        //instance.deleteApplicationUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationAllUsingGet', function() {
      it('should call getApplicationAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getApplicationAllUsingGet
        //instance.getApplicationAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getApplicationUsingGet', function() {
      it('should call getApplicationUsingGet successfully', function(done) {
        //uncomment below and update the code to test getApplicationUsingGet
        //instance.getApplicationUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateApplicationUsingPut', function() {
      it('should call updateApplicationUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateApplicationUsingPut
        //instance.updateApplicationUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));