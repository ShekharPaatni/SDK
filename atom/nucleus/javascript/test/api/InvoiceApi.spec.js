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
    factory(root.expect, root.HydrogenAtomApi);
  }
}(this, function(expect, HydrogenAtomApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HydrogenAtomApi.InvoiceApi();
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

  describe('InvoiceApi', function() {
    describe('createInvoicePaymentUsingPost', function() {
      it('should call createInvoicePaymentUsingPost successfully', function(done) {
        //uncomment below and update the code to test createInvoicePaymentUsingPost
        //instance.createInvoicePaymentUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createInvoiceUsingPost', function() {
      it('should call createInvoiceUsingPost successfully', function(done) {
        //uncomment below and update the code to test createInvoiceUsingPost
        //instance.createInvoiceUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInvoicePaymentUsingDelete', function() {
      it('should call deleteInvoicePaymentUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteInvoicePaymentUsingDelete
        //instance.deleteInvoicePaymentUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInvoiceUsingDelete', function() {
      it('should call deleteInvoiceUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteInvoiceUsingDelete
        //instance.deleteInvoiceUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInvoiceAllUsingGet', function() {
      it('should call getInvoiceAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getInvoiceAllUsingGet
        //instance.getInvoiceAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInvoicePaymentAllUsingGet', function() {
      it('should call getInvoicePaymentAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getInvoicePaymentAllUsingGet
        //instance.getInvoicePaymentAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInvoicePaymentUsingGet', function() {
      it('should call getInvoicePaymentUsingGet successfully', function(done) {
        //uncomment below and update the code to test getInvoicePaymentUsingGet
        //instance.getInvoicePaymentUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInvoiceUsingGet', function() {
      it('should call getInvoiceUsingGet successfully', function(done) {
        //uncomment below and update the code to test getInvoiceUsingGet
        //instance.getInvoiceUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInvoicePaymentUsingPut', function() {
      it('should call updateInvoicePaymentUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateInvoicePaymentUsingPut
        //instance.updateInvoicePaymentUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInvoiceUsingPut', function() {
      it('should call updateInvoiceUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateInvoiceUsingPut
        //instance.updateInvoiceUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
