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
    instance = new HydrogenIntegrationApi.BrokerageApi();
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

  describe('BrokerageApi', function() {
    describe('cancelOrderUsingPut', function() {
      it('should call cancelOrderUsingPut successfully', function(done) {
        //uncomment below and update the code to test cancelOrderUsingPut
        //instance.cancelOrderUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createBankLinkUsingPost1', function() {
      it('should call createBankLinkUsingPost1 successfully', function(done) {
        //uncomment below and update the code to test createBankLinkUsingPost1
        //instance.createBankLinkUsingPost1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createBrokerageAccountUsingPost', function() {
      it('should call createBrokerageAccountUsingPost successfully', function(done) {
        //uncomment below and update the code to test createBrokerageAccountUsingPost
        //instance.createBrokerageAccountUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createBrokerageClientUsingPost', function() {
      it('should call createBrokerageClientUsingPost successfully', function(done) {
        //uncomment below and update the code to test createBrokerageClientUsingPost
        //instance.createBrokerageClientUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDepositUsingPost', function() {
      it('should call createDepositUsingPost successfully', function(done) {
        //uncomment below and update the code to test createDepositUsingPost
        //instance.createDepositUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDocumentUsingPost', function() {
      it('should call createDocumentUsingPost successfully', function(done) {
        //uncomment below and update the code to test createDocumentUsingPost
        //instance.createDocumentUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrderUsingPost', function() {
      it('should call createOrderUsingPost successfully', function(done) {
        //uncomment below and update the code to test createOrderUsingPost
        //instance.createOrderUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createWithdrawalUsingPost', function() {
      it('should call createWithdrawalUsingPost successfully', function(done) {
        //uncomment below and update the code to test createWithdrawalUsingPost
        //instance.createWithdrawalUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteBankLinkUsingDelete1', function() {
      it('should call deleteBankLinkUsingDelete1 successfully', function(done) {
        //uncomment below and update the code to test deleteBankLinkUsingDelete1
        //instance.deleteBankLinkUsingDelete1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBalanceUsingGet1', function() {
      it('should call getBalanceUsingGet1 successfully', function(done) {
        //uncomment below and update the code to test getBalanceUsingGet1
        //instance.getBalanceUsingGet1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBankLinkUsingGet1', function() {
      it('should call getBankLinkUsingGet1 successfully', function(done) {
        //uncomment below and update the code to test getBankLinkUsingGet1
        //instance.getBankLinkUsingGet1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBrokerageAccountStatementUsingGet', function() {
      it('should call getBrokerageAccountStatementUsingGet successfully', function(done) {
        //uncomment below and update the code to test getBrokerageAccountStatementUsingGet
        //instance.getBrokerageAccountStatementUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentUsingGet', function() {
      it('should call getDocumentUsingGet successfully', function(done) {
        //uncomment below and update the code to test getDocumentUsingGet
        //instance.getDocumentUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHoldingPerformanceUsingGet', function() {
      it('should call getHoldingPerformanceUsingGet successfully', function(done) {
        //uncomment below and update the code to test getHoldingPerformanceUsingGet
        //instance.getHoldingPerformanceUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getHoldingUsingGet', function() {
      it('should call getHoldingUsingGet successfully', function(done) {
        //uncomment below and update the code to test getHoldingUsingGet
        //instance.getHoldingUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrderUsingGet', function() {
      it('should call getOrderUsingGet successfully', function(done) {
        //uncomment below and update the code to test getOrderUsingGet
        //instance.getOrderUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecuritiesUsingGet', function() {
      it('should call getSecuritiesUsingGet successfully', function(done) {
        //uncomment below and update the code to test getSecuritiesUsingGet
        //instance.getSecuritiesUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransactionsUsingGet', function() {
      it('should call getTransactionsUsingGet successfully', function(done) {
        //uncomment below and update the code to test getTransactionsUsingGet
        //instance.getTransactionsUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBankLinkUsingPut1', function() {
      it('should call updateBankLinkUsingPut1 successfully', function(done) {
        //uncomment below and update the code to test updateBankLinkUsingPut1
        //instance.updateBankLinkUsingPut1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBrokerageClientUsingPut', function() {
      it('should call updateBrokerageClientUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateBrokerageClientUsingPut
        //instance.updateBrokerageClientUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
