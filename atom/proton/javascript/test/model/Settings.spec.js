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
    describe('Settings', function() {
      beforeEach(function() {
        instance = new HydrogenProtonApi.Settings();
      });

      it('should create an instance of Settings', function() {
        // TODO: update the code to test Settings
        expect(instance).to.be.a(HydrogenProtonApi.Settings);
      });

      it('should have the property defaultDriftFactor (base name: "default_drift_factor")', function() {
        // TODO: update the code to test the property defaultDriftFactor
        expect(instance).to.have.property('defaultDriftFactor');
        // expect(instance.defaultDriftFactor).to.be(expectedValueLiteral);
      });

      it('should have the property downside (base name: "downside")', function() {
        // TODO: update the code to test the property downside
        expect(instance).to.have.property('downside');
        // expect(instance.downside).to.be(expectedValueLiteral);
      });

      it('should have the property periodRebal (base name: "period_rebal")', function() {
        // TODO: update the code to test the property periodRebal
        expect(instance).to.have.property('periodRebal');
        // expect(instance.periodRebal).to.be(expectedValueLiteral);
      });

      it('should have the property rebalancePeriod (base name: "rebalance_period")', function() {
        // TODO: update the code to test the property rebalancePeriod
        expect(instance).to.have.property('rebalancePeriod');
        // expect(instance.rebalancePeriod).to.be(expectedValueLiteral);
      });

      it('should have the property taxEfficiencyId (base name: "tax_efficiency_id")', function() {
        // TODO: update the code to test the property taxEfficiencyId
        expect(instance).to.have.property('taxEfficiencyId');
        // expect(instance.taxEfficiencyId).to.be(expectedValueLiteral);
      });

      it('should have the property driftRebal (base name: "drift_rebal")', function() {
        // TODO: update the code to test the property driftRebal
        expect(instance).to.have.property('driftRebal');
        // expect(instance.driftRebal).to.be(expectedValueLiteral);
      });

    });
  });

}));
