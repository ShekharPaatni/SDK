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
    instance = new HydrogenIntegrationApi.CardApi();
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

  describe('CardApi', function() {
    describe('createAutoReloadUsingPost', function() {
      it('should call createAutoReloadUsingPost successfully', function(done) {
        //uncomment below and update the code to test createAutoReloadUsingPost
        //instance.createAutoReloadUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCardActivateUsingPost', function() {
      it('should call createCardActivateUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCardActivateUsingPost
        //instance.createCardActivateUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCardBusinessUsingPost', function() {
      it('should call createCardBusinessUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCardBusinessUsingPost
        //instance.createCardBusinessUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCardCloseUsingPost', function() {
      it('should call createCardCloseUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCardCloseUsingPost
        //instance.createCardCloseUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCardIssueUsingPost', function() {
      it('should call createCardIssueUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCardIssueUsingPost
        //instance.createCardIssueUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCardLoadUsingPost', function() {
      it('should call createCardLoadUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCardLoadUsingPost
        //instance.createCardLoadUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCardPinUsingPost', function() {
      it('should call createCardPinUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCardPinUsingPost
        //instance.createCardPinUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCardReactivateUsingPost', function() {
      it('should call createCardReactivateUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCardReactivateUsingPost
        //instance.createCardReactivateUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCardReissueUsingPost', function() {
      it('should call createCardReissueUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCardReissueUsingPost
        //instance.createCardReissueUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCardReplaceUsingPost', function() {
      it('should call createCardReplaceUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCardReplaceUsingPost
        //instance.createCardReplaceUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCardReserveTransferUsingPost', function() {
      it('should call createCardReserveTransferUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCardReserveTransferUsingPost
        //instance.createCardReserveTransferUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCardSpendingControlUsingPost', function() {
      it('should call createCardSpendingControlUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCardSpendingControlUsingPost
        //instance.createCardSpendingControlUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCardSuspendUsingPost', function() {
      it('should call createCardSuspendUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCardSuspendUsingPost
        //instance.createCardSuspendUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCardTokenUsingPost', function() {
      it('should call createCardTokenUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCardTokenUsingPost
        //instance.createCardTokenUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCardUnloadUsingPost', function() {
      it('should call createCardUnloadUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCardUnloadUsingPost
        //instance.createCardUnloadUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createClientCardUsingPost', function() {
      it('should call createClientCardUsingPost successfully', function(done) {
        //uncomment below and update the code to test createClientCardUsingPost
        //instance.createClientCardUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBusinessStatusUsingGet', function() {
      it('should call getBusinessStatusUsingGet successfully', function(done) {
        //uncomment below and update the code to test getBusinessStatusUsingGet
        //instance.getBusinessStatusUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCardBalanceUsingGet', function() {
      it('should call getCardBalanceUsingGet successfully', function(done) {
        //uncomment below and update the code to test getCardBalanceUsingGet
        //instance.getCardBalanceUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCardImage', function() {
      it('should call getCardImage successfully', function(done) {
        //uncomment below and update the code to test getCardImage
        //instance.getCardImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCardPciDetails', function() {
      it('should call getCardPciDetails successfully', function(done) {
        //uncomment below and update the code to test getCardPciDetails
        //instance.getCardPciDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCardReserveAccountDetailsUsingGet', function() {
      it('should call getCardReserveAccountDetailsUsingGet successfully', function(done) {
        //uncomment below and update the code to test getCardReserveAccountDetailsUsingGet
        //instance.getCardReserveAccountDetailsUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCardStatementUsingGet', function() {
      it('should call getCardStatementUsingGet successfully', function(done) {
        //uncomment below and update the code to test getCardStatementUsingGet
        //instance.getCardStatementUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCardTokenUsingToken', function() {
      it('should call getCardTokenUsingToken successfully', function(done) {
        //uncomment below and update the code to test getCardTokenUsingToken
        //instance.getCardTokenUsingToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCardTransactionUsingGet', function() {
      it('should call getCardTransactionUsingGet successfully', function(done) {
        //uncomment below and update the code to test getCardTransactionUsingGet
        //instance.getCardTransactionUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCardUsingGet', function() {
      it('should call getCardUsingGet successfully', function(done) {
        //uncomment below and update the code to test getCardUsingGet
        //instance.getCardUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCardBusinessUsingPut', function() {
      it('should call updateCardBusinessUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateCardBusinessUsingPut
        //instance.updateCardBusinessUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCardPinUsingPost', function() {
      it('should call updateCardPinUsingPost successfully', function(done) {
        //uncomment below and update the code to test updateCardPinUsingPost
        //instance.updateCardPinUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCardSpendingControlUsingPut', function() {
      it('should call updateCardSpendingControlUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateCardSpendingControlUsingPut
        //instance.updateCardSpendingControlUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCardUsingPut', function() {
      it('should call updateCardUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateCardUsingPut
        //instance.updateCardUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateClientCardUsingPut', function() {
      it('should call updateClientCardUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateClientCardUsingPut
        //instance.updateClientCardUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verifyCardPinUsingPost', function() {
      it('should call verifyCardPinUsingPost successfully', function(done) {
        //uncomment below and update the code to test verifyCardPinUsingPost
        //instance.verifyCardPinUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
