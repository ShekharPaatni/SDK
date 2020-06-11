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
    instance = new HydrogenAtomApi.GoalApi();
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

  describe('GoalApi', function() {
    describe('createGoalTrackUsingPost', function() {
      it('should call createGoalTrackUsingPost successfully', function(done) {
        //uncomment below and update the code to test createGoalTrackUsingPost
        //instance.createGoalTrackUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createGoalUsingPost', function() {
      it('should call createGoalUsingPost successfully', function(done) {
        //uncomment below and update the code to test createGoalUsingPost
        //instance.createGoalUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGoalTrackUsingDelete', function() {
      it('should call deleteGoalTrackUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteGoalTrackUsingDelete
        //instance.deleteGoalTrackUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGoalUsingDelete', function() {
      it('should call deleteGoalUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteGoalUsingDelete
        //instance.deleteGoalUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGoalAllUsingGet', function() {
      it('should call getGoalAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getGoalAllUsingGet
        //instance.getGoalAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGoalAssetSizeAllUsingGet', function() {
      it('should call getGoalAssetSizeAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getGoalAssetSizeAllUsingGet
        //instance.getGoalAssetSizeAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGoalHoldingAllUsingGet', function() {
      it('should call getGoalHoldingAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getGoalHoldingAllUsingGet
        //instance.getGoalHoldingAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGoalTrackAllUsingGet', function() {
      it('should call getGoalTrackAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getGoalTrackAllUsingGet
        //instance.getGoalTrackAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGoalTrackUsingGet', function() {
      it('should call getGoalTrackUsingGet successfully', function(done) {
        //uncomment below and update the code to test getGoalTrackUsingGet
        //instance.getGoalTrackUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGoalTransactionAllUsingGet', function() {
      it('should call getGoalTransactionAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getGoalTransactionAllUsingGet
        //instance.getGoalTransactionAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGoalUsingGet', function() {
      it('should call getGoalUsingGet successfully', function(done) {
        //uncomment below and update the code to test getGoalUsingGet
        //instance.getGoalUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGoalTrackUsingPut', function() {
      it('should call updateGoalTrackUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateGoalTrackUsingPut
        //instance.updateGoalTrackUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateGoalUsingPut', function() {
      it('should call updateGoalUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateGoalUsingPut
        //instance.updateGoalUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
