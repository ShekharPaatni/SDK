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
    instance = new HydrogenNucleusApi.OrderApi();
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

  describe('OrderApi', function() {
    describe('createAccountOrderBulkUsingPost', function() {
      it('should call createAccountOrderBulkUsingPost successfully', function(done) {
        //uncomment below and update the code to test createAccountOrderBulkUsingPost
        //instance.createAccountOrderBulkUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAccountOrderBuyOnlyUsingPost', function() {
      it('should call createAccountOrderBuyOnlyUsingPost successfully', function(done) {
        //uncomment below and update the code to test createAccountOrderBuyOnlyUsingPost
        //instance.createAccountOrderBuyOnlyUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAccountOrderRebalanceUsingPost', function() {
      it('should call createAccountOrderRebalanceUsingPost successfully', function(done) {
        //uncomment below and update the code to test createAccountOrderRebalanceUsingPost
        //instance.createAccountOrderRebalanceUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAccountOrderReconciliation', function() {
      it('should call createAccountOrderReconciliation successfully', function(done) {
        //uncomment below and update the code to test createAccountOrderReconciliation
        //instance.createAccountOrderReconciliation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAccountOrderSellAllUsingPost', function() {
      it('should call createAccountOrderSellAllUsingPost successfully', function(done) {
        //uncomment below and update the code to test createAccountOrderSellAllUsingPost
        //instance.createAccountOrderSellAllUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAccountOrderSellOnlyUsingPost', function() {
      it('should call createAccountOrderSellOnlyUsingPost successfully', function(done) {
        //uncomment below and update the code to test createAccountOrderSellOnlyUsingPost
        //instance.createAccountOrderSellOnlyUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createClientOrderBulkUsingPost', function() {
      it('should call createClientOrderBulkUsingPost successfully', function(done) {
        //uncomment below and update the code to test createClientOrderBulkUsingPost
        //instance.createClientOrderBulkUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrderBulkUsingPost', function() {
      it('should call createOrderBulkUsingPost successfully', function(done) {
        //uncomment below and update the code to test createOrderBulkUsingPost
        //instance.createOrderBulkUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrderStatusUsingPost', function() {
      it('should call createOrderStatusUsingPost successfully', function(done) {
        //uncomment below and update the code to test createOrderStatusUsingPost
        //instance.createOrderStatusUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOrderTrackUsingPost', function() {
      it('should call createOrderTrackUsingPost successfully', function(done) {
        //uncomment below and update the code to test createOrderTrackUsingPost
        //instance.createOrderTrackUsingPost(function(error) {
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
    describe('createPortfolioOrderBuyOnlyUsingPost', function() {
      it('should call createPortfolioOrderBuyOnlyUsingPost successfully', function(done) {
        //uncomment below and update the code to test createPortfolioOrderBuyOnlyUsingPost
        //instance.createPortfolioOrderBuyOnlyUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPortfolioOrderRebalanceUsingPost', function() {
      it('should call createPortfolioOrderRebalanceUsingPost successfully', function(done) {
        //uncomment below and update the code to test createPortfolioOrderRebalanceUsingPost
        //instance.createPortfolioOrderRebalanceUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPortfolioOrderReconciliation', function() {
      it('should call createPortfolioOrderReconciliation successfully', function(done) {
        //uncomment below and update the code to test createPortfolioOrderReconciliation
        //instance.createPortfolioOrderReconciliation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPortfolioOrderSellAllUsingPost', function() {
      it('should call createPortfolioOrderSellAllUsingPost successfully', function(done) {
        //uncomment below and update the code to test createPortfolioOrderSellAllUsingPost
        //instance.createPortfolioOrderSellAllUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPortfolioOrderSellOnlyUsingPost', function() {
      it('should call createPortfolioOrderSellOnlyUsingPost successfully', function(done) {
        //uncomment below and update the code to test createPortfolioOrderSellOnlyUsingPost
        //instance.createPortfolioOrderSellOnlyUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrderStatusUsingDelete', function() {
      it('should call deleteOrderStatusUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteOrderStatusUsingDelete
        //instance.deleteOrderStatusUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrderTrackUsingDelete', function() {
      it('should call deleteOrderTrackUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteOrderTrackUsingDelete
        //instance.deleteOrderTrackUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOrderUsingDelete', function() {
      it('should call deleteOrderUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteOrderUsingDelete
        //instance.deleteOrderUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrderAllUsingGet', function() {
      it('should call getOrderAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getOrderAllUsingGet
        //instance.getOrderAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrderBulkAllUsingGet', function() {
      it('should call getOrderBulkAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getOrderBulkAllUsingGet
        //instance.getOrderBulkAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrderStatusAllUsingGet', function() {
      it('should call getOrderStatusAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getOrderStatusAllUsingGet
        //instance.getOrderStatusAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrderStatusUsingGet', function() {
      it('should call getOrderStatusUsingGet successfully', function(done) {
        //uncomment below and update the code to test getOrderStatusUsingGet
        //instance.getOrderStatusUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrderTrackAllUsingGet', function() {
      it('should call getOrderTrackAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getOrderTrackAllUsingGet
        //instance.getOrderTrackAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOrderTrackUsingGet', function() {
      it('should call getOrderTrackUsingGet successfully', function(done) {
        //uncomment below and update the code to test getOrderTrackUsingGet
        //instance.getOrderTrackUsingGet(function(error) {
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
    describe('updateOrderStatusUsingPut', function() {
      it('should call updateOrderStatusUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateOrderStatusUsingPut
        //instance.updateOrderStatusUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrderTrackUsingPut', function() {
      it('should call updateOrderTrackUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateOrderTrackUsingPut
        //instance.updateOrderTrackUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOrderUsingPut', function() {
      it('should call updateOrderUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateOrderUsingPut
        //instance.updateOrderUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
