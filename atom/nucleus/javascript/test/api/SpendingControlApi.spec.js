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
    instance = new HydrogenNucleusApi.SpendingControlApi();
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

  describe('SpendingControlApi', function() {
    describe('createSpendingControlUsingPost', function() {
      it('should call createSpendingControlUsingPost successfully', function(done) {
        //uncomment below and update the code to test createSpendingControlUsingPost
        //instance.createSpendingControlUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSpendingControlUsingDelete', function() {
      it('should call deleteSpendingControlUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteSpendingControlUsingDelete
        //instance.deleteSpendingControlUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSpendingControlAllUsingGet', function() {
      it('should call getSpendingControlAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getSpendingControlAllUsingGet
        //instance.getSpendingControlAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSpendingControlUsingGet', function() {
      it('should call getSpendingControlUsingGet successfully', function(done) {
        //uncomment below and update the code to test getSpendingControlUsingGet
        //instance.getSpendingControlUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSpendingControlUsingPut', function() {
      it('should call updateSpendingControlUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateSpendingControlUsingPut
        //instance.updateSpendingControlUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
