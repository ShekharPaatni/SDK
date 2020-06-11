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
    describe('RiskAllocationRequest', function() {
      beforeEach(function() {
        instance = new HydrogenProtonApi.RiskAllocationRequest();
      });

      it('should create an instance of RiskAllocationRequest', function() {
        // TODO: update the code to test RiskAllocationRequest
        expect(instance).to.be.a(HydrogenProtonApi.RiskAllocationRequest);
      });

      it('should have the property allocations (base name: "allocations")', function() {
        // TODO: update the code to test the property allocations
        expect(instance).to.have.property('allocations');
        // expect(instance.allocations).to.be(expectedValueLiteral);
      });

      it('should have the property useProxyData (base name: "use_proxy_data")', function() {
        // TODO: update the code to test the property useProxyData
        expect(instance).to.have.property('useProxyData');
        // expect(instance.useProxyData).to.be(expectedValueLiteral);
      });

      it('should have the property clientId (base name: "client_id")', function() {
        // TODO: update the code to test the property clientId
        expect(instance).to.have.property('clientId');
        // expect(instance.clientId).to.be(expectedValueLiteral);
      });

      it('should have the property riskScore (base name: "risk_score")', function() {
        // TODO: update the code to test the property riskScore
        expect(instance).to.have.property('riskScore');
        // expect(instance.riskScore).to.be(expectedValueLiteral);
      });

      it('should have the property optConfig (base name: "opt_config")', function() {
        // TODO: update the code to test the property optConfig
        expect(instance).to.have.property('optConfig');
        // expect(instance.optConfig).to.be(expectedValueLiteral);
      });

      it('should have the property marketDataSource (base name: "market_data_source")', function() {
        // TODO: update the code to test the property marketDataSource
        expect(instance).to.have.property('marketDataSource');
        // expect(instance.marketDataSource).to.be(expectedValueLiteral);
      });

      it('should have the property allocationMethod (base name: "allocation_method")', function() {
        // TODO: update the code to test the property allocationMethod
        expect(instance).to.have.property('allocationMethod');
        // expect(instance.allocationMethod).to.be(expectedValueLiteral);
      });

    });
  });

}));
