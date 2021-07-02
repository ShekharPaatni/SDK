/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.2
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
    instance = new HydrogenNucleusApi.AccountApi();
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

  describe('AccountApi', function() {
    describe('createAccountAllocationMappingUsingPost', function() {
      it('should call createAccountAllocationMappingUsingPost successfully', function(done) {
        //uncomment below and update the code to test createAccountAllocationMappingUsingPost
        //instance.createAccountAllocationMappingUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAccountStatusUsingPost', function() {
      it('should call createAccountStatusUsingPost successfully', function(done) {
        //uncomment below and update the code to test createAccountStatusUsingPost
        //instance.createAccountStatusUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAccountTypeUsingPost', function() {
      it('should call createAccountTypeUsingPost successfully', function(done) {
        //uncomment below and update the code to test createAccountTypeUsingPost
        //instance.createAccountTypeUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAccountUsingPost', function() {
      it('should call createAccountUsingPost successfully', function(done) {
        //uncomment below and update the code to test createAccountUsingPost
        //instance.createAccountUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAccountAllocationMappingUsingDelete', function() {
      it('should call deleteAccountAllocationMappingUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteAccountAllocationMappingUsingDelete
        //instance.deleteAccountAllocationMappingUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAccountPermissionUsingDELETE', function() {
      it('should call deleteAccountPermissionUsingDELETE successfully', function(done) {
        //uncomment below and update the code to test deleteAccountPermissionUsingDELETE
        //instance.deleteAccountPermissionUsingDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAccountStatusUsingDelete', function() {
      it('should call deleteAccountStatusUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteAccountStatusUsingDelete
        //instance.deleteAccountStatusUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAccountTypeUsingDelete', function() {
      it('should call deleteAccountTypeUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteAccountTypeUsingDelete
        //instance.deleteAccountTypeUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAccountUsingDelete', function() {
      it('should call deleteAccountUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteAccountUsingDelete
        //instance.deleteAccountUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountAllUsingGet', function() {
      it('should call getAccountAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getAccountAllUsingGet
        //instance.getAccountAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountAllocationMappingAllUsingGet', function() {
      it('should call getAccountAllocationMappingAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getAccountAllocationMappingAllUsingGet
        //instance.getAccountAllocationMappingAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountAllocationMappingUsingGet', function() {
      it('should call getAccountAllocationMappingUsingGet successfully', function(done) {
        //uncomment below and update the code to test getAccountAllocationMappingUsingGet
        //instance.getAccountAllocationMappingUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountAssetSizeAggAllUsingGet', function() {
      it('should call getAccountAssetSizeAggAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getAccountAssetSizeAggAllUsingGet
        //instance.getAccountAssetSizeAggAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountOverviewUsingGet', function() {
      it('should call getAccountOverviewUsingGet successfully', function(done) {
        //uncomment below and update the code to test getAccountOverviewUsingGet
        //instance.getAccountOverviewUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountPermissionUsingGET', function() {
      it('should call getAccountPermissionUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAccountPermissionUsingGET
        //instance.getAccountPermissionUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountStatusAllUsingGet', function() {
      it('should call getAccountStatusAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getAccountStatusAllUsingGet
        //instance.getAccountStatusAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountStatusUsingGet', function() {
      it('should call getAccountStatusUsingGet successfully', function(done) {
        //uncomment below and update the code to test getAccountStatusUsingGet
        //instance.getAccountStatusUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountTypeAllUsingGet', function() {
      it('should call getAccountTypeAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getAccountTypeAllUsingGet
        //instance.getAccountTypeAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountTypeUsingGet', function() {
      it('should call getAccountTypeUsingGet successfully', function(done) {
        //uncomment below and update the code to test getAccountTypeUsingGet
        //instance.getAccountTypeUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountUsingGet', function() {
      it('should call getAccountUsingGet successfully', function(done) {
        //uncomment below and update the code to test getAccountUsingGet
        //instance.getAccountUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllAccountPermissionUsingGET', function() {
      it('should call getAllAccountPermissionUsingGET successfully', function(done) {
        //uncomment below and update the code to test getAllAccountPermissionUsingGET
        //instance.getAllAccountPermissionUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPortfolioHoldingAggAllUsingGet', function() {
      it('should call getPortfolioHoldingAggAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getPortfolioHoldingAggAllUsingGet
        //instance.getPortfolioHoldingAggAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPortfolioTransactionAggAllUsingGet', function() {
      it('should call getPortfolioTransactionAggAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getPortfolioTransactionAggAllUsingGet
        //instance.getPortfolioTransactionAggAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('insertAccountAndRelatedPermissionUsingPOST', function() {
      it('should call insertAccountAndRelatedPermissionUsingPOST successfully', function(done) {
        //uncomment below and update the code to test insertAccountAndRelatedPermissionUsingPOST
        //instance.insertAccountAndRelatedPermissionUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscribeAccountUsingPost', function() {
      it('should call subscribeAccountUsingPost successfully', function(done) {
        //uncomment below and update the code to test subscribeAccountUsingPost
        //instance.subscribeAccountUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAccountAllocationMappingUsingPut', function() {
      it('should call updateAccountAllocationMappingUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateAccountAllocationMappingUsingPut
        //instance.updateAccountAllocationMappingUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAccountStatusUsingPut', function() {
      it('should call updateAccountStatusUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateAccountStatusUsingPut
        //instance.updateAccountStatusUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAccountTypeUsingPut', function() {
      it('should call updateAccountTypeUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateAccountTypeUsingPut
        //instance.updateAccountTypeUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAccountUsingPut', function() {
      it('should call updateAccountUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateAccountUsingPut
        //instance.updateAccountUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateClientAccountPermissionUsingPUT', function() {
      it('should call updateClientAccountPermissionUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateClientAccountPermissionUsingPUT
        //instance.updateClientAccountPermissionUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
