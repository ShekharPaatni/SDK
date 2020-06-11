/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.7.18
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
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
    factory(root.expect, root.HydrogenProtonApi);
  }
}(this, function(expect, HydrogenProtonApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('MonteCarloRequest', function() {
      beforeEach(function() {
        instance = new HydrogenProtonApi.MonteCarloRequest();
      });

      it('should create an instance of MonteCarloRequest', function() {
        // TODO: update the code to test MonteCarloRequest
        expect(instance).to.be.a(HydrogenProtonApi.MonteCarloRequest);
      });

      it('should have the property sigma (base name: "sigma")', function() {
        // TODO: update the code to test the property sigma
        expect(instance).to.have.property('sigma');
        // expect(instance.sigma).to.be(expectedValueLiteral);
      });

      it('should have the property maxBal (base name: "max_bal")', function() {
        // TODO: update the code to test the property maxBal
        expect(instance).to.have.property('maxBal');
        // expect(instance.maxBal).to.be(expectedValueLiteral);
      });

      it('should have the property allocationId (base name: "allocation_id")', function() {
        // TODO: update the code to test the property allocationId
        expect(instance).to.have.property('allocationId');
        // expect(instance.allocationId).to.be(expectedValueLiteral);
      });

      it('should have the property accountId (base name: "account_id")', function() {
        // TODO: update the code to test the property accountId
        expect(instance).to.have.property('accountId');
        // expect(instance.accountId).to.be(expectedValueLiteral);
      });

      it('should have the property resultType (base name: "result_type")', function() {
        // TODO: update the code to test the property resultType
        expect(instance).to.have.property('resultType');
        // expect(instance.resultType).to.be(expectedValueLiteral);
      });

      it('should have the property aggregationAccountId (base name: "aggregation_account_id")', function() {
        // TODO: update the code to test the property aggregationAccountId
        expect(instance).to.have.property('aggregationAccountId');
        // expect(instance.aggregationAccountId).to.be(expectedValueLiteral);
      });

      it('should have the property marketDataSource (base name: "market_data_source")', function() {
        // TODO: update the code to test the property marketDataSource
        expect(instance).to.have.property('marketDataSource');
        // expect(instance.marketDataSource).to.be(expectedValueLiteral);
      });

      it('should have the property maxSample (base name: "max_sample")', function() {
        // TODO: update the code to test the property maxSample
        expect(instance).to.have.property('maxSample');
        // expect(instance.maxSample).to.be(expectedValueLiteral);
      });

      it('should have the property portfolioId (base name: "portfolio_id")', function() {
        // TODO: update the code to test the property portfolioId
        expect(instance).to.have.property('portfolioId');
        // expect(instance.portfolioId).to.be(expectedValueLiteral);
      });

      it('should have the property mu (base name: "mu")', function() {
        // TODO: update the code to test the property mu
        expect(instance).to.have.property('mu');
        // expect(instance.mu).to.be(expectedValueLiteral);
      });

      it('should have the property frequencyInterval (base name: "frequency_interval")', function() {
        // TODO: update the code to test the property frequencyInterval
        expect(instance).to.have.property('frequencyInterval');
        // expect(instance.frequencyInterval).to.be(expectedValueLiteral);
      });

      it('should have the property retMod (base name: "ret_mod")', function() {
        // TODO: update the code to test the property retMod
        expect(instance).to.have.property('retMod');
        // expect(instance.retMod).to.be(expectedValueLiteral);
      });

      it('should have the property minSample (base name: "min_sample")', function() {
        // TODO: update the code to test the property minSample
        expect(instance).to.have.property('minSample');
        // expect(instance.minSample).to.be(expectedValueLiteral);
      });

      it('should have the property n (base name: "n")', function() {
        // TODO: update the code to test the property n
        expect(instance).to.have.property('n');
        // expect(instance.n).to.be(expectedValueLiteral);
      });

      it('should have the property cf (base name: "cf")', function() {
        // TODO: update the code to test the property cf
        expect(instance).to.have.property('cf');
        // expect(instance.cf).to.be(expectedValueLiteral);
      });

      it('should have the property modelId (base name: "model_id")', function() {
        // TODO: update the code to test the property modelId
        expect(instance).to.have.property('modelId');
        // expect(instance.modelId).to.be(expectedValueLiteral);
      });

      it('should have the property useProxyData (base name: "use_proxy_data")', function() {
        // TODO: update the code to test the property useProxyData
        expect(instance).to.have.property('useProxyData');
        // expect(instance.useProxyData).to.be(expectedValueLiteral);
      });

      it('should have the property initBal (base name: "init_bal")', function() {
        // TODO: update the code to test the property initBal
        expect(instance).to.have.property('initBal');
        // expect(instance.initBal).to.be(expectedValueLiteral);
      });

      it('should have the property removeOutliers (base name: "remove_outliers")', function() {
        // TODO: update the code to test the property removeOutliers
        expect(instance).to.have.property('removeOutliers');
        // expect(instance.removeOutliers).to.be(expectedValueLiteral);
      });

      it('should have the property minBal (base name: "min_bal")', function() {
        // TODO: update the code to test the property minBal
        expect(instance).to.have.property('minBal');
        // expect(instance.minBal).to.be(expectedValueLiteral);
      });

      it('should have the property p (base name: "p")', function() {
        // TODO: update the code to test the property p
        expect(instance).to.have.property('p');
        // expect(instance.p).to.be(expectedValueLiteral);
      });

    });
  });

}));
