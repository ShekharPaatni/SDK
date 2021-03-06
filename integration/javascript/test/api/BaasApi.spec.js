/**
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.3.0
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
    factory(root.expect, root.HydrogenIntegrationApi);
  }
}(this, function(expect, HydrogenIntegrationApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HydrogenIntegrationApi.BaasApi();
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

  describe('BaasApi', function() {
    describe('createBaasAccountUsingPost', function() {
      it('should call createBaasAccountUsingPost successfully', function(done) {
        //uncomment below and update the code to test createBaasAccountUsingPost
        //instance.createBaasAccountUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createBaasBusinessUsingPost', function() {
      it('should call createBaasBusinessUsingPost successfully', function(done) {
        //uncomment below and update the code to test createBaasBusinessUsingPost
        //instance.createBaasBusinessUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createBaasClientUsingPost', function() {
      it('should call createBaasClientUsingPost successfully', function(done) {
        //uncomment below and update the code to test createBaasClientUsingPost
        //instance.createBaasClientUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createBaasSubAccountUsingPost', function() {
      it('should call createBaasSubAccountUsingPost successfully', function(done) {
        //uncomment below and update the code to test createBaasSubAccountUsingPost
        //instance.createBaasSubAccountUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBaasAccountStatementUsingGet', function() {
      it('should call getBaasAccountStatementUsingGet successfully', function(done) {
        //uncomment below and update the code to test getBaasAccountStatementUsingGet
        //instance.getBaasAccountStatementUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBaasPortfolioBalanceUsingGet', function() {
      it('should call getBaasPortfolioBalanceUsingGet successfully', function(done) {
        //uncomment below and update the code to test getBaasPortfolioBalanceUsingGet
        //instance.getBaasPortfolioBalanceUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBaasPortfolioTransactionUsingGet', function() {
      it('should call getBaasPortfolioTransactionUsingGet successfully', function(done) {
        //uncomment below and update the code to test getBaasPortfolioTransactionUsingGet
        //instance.getBaasPortfolioTransactionUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBaasBusinessUsingPut', function() {
      it('should call updateBaasBusinessUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateBaasBusinessUsingPut
        //instance.updateBaasBusinessUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBaasClientUsingPut', function() {
      it('should call updateBaasClientUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateBaasClientUsingPut
        //instance.updateBaasClientUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
