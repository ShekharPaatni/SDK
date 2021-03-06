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
    instance = new HydrogenIntegrationApi.WireApi();
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

  describe('WireApi', function() {
    describe('cancelWireTransferUsingDelete', function() {
      it('should call cancelWireTransferUsingDelete successfully', function(done) {
        //uncomment below and update the code to test cancelWireTransferUsingDelete
        //instance.cancelWireTransferUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createBankLinkUsingPost3', function() {
      it('should call createBankLinkUsingPost3 successfully', function(done) {
        //uncomment below and update the code to test createBankLinkUsingPost3
        //instance.createBankLinkUsingPost3(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBankLinkUsingDelete4', function() {
      it('should call deleteBankLinkUsingDelete4 successfully', function(done) {
        //uncomment below and update the code to test deleteBankLinkUsingDelete4
        //instance.deleteBankLinkUsingDelete4(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBankLinkUsingGet3', function() {
      it('should call getBankLinkUsingGet3 successfully', function(done) {
        //uncomment below and update the code to test getBankLinkUsingGet3
        //instance.getBankLinkUsingGet3(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClientBankLinksUsingGet2', function() {
      it('should call getClientBankLinksUsingGet2 successfully', function(done) {
        //uncomment below and update the code to test getClientBankLinksUsingGet2
        //instance.getClientBankLinksUsingGet2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getListOfWireTransfersUsingGet', function() {
      it('should call getListOfWireTransfersUsingGet successfully', function(done) {
        //uncomment below and update the code to test getListOfWireTransfersUsingGet
        //instance.getListOfWireTransfersUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWireTransferUsingGet', function() {
      it('should call getWireTransferUsingGet successfully', function(done) {
        //uncomment below and update the code to test getWireTransferUsingGet
        //instance.getWireTransferUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('submitWireTransferUsingPost', function() {
      it('should call submitWireTransferUsingPost successfully', function(done) {
        //uncomment below and update the code to test submitWireTransferUsingPost
        //instance.submitWireTransferUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBankLinkUsingPut3', function() {
      it('should call updateBankLinkUsingPut3 successfully', function(done) {
        //uncomment below and update the code to test updateBankLinkUsingPut3
        //instance.updateBankLinkUsingPut3(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
