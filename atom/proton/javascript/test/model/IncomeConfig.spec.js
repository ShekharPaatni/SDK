/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.9.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
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
    describe('IncomeConfig', function() {
      beforeEach(function() {
        instance = new HydrogenProtonApi.IncomeConfig();
      });

      it('should create an instance of IncomeConfig', function() {
        // TODO: update the code to test IncomeConfig
        expect(instance).to.be.a(HydrogenProtonApi.IncomeConfig);
      });

      it('should have the property annualNetTakeHomePay (base name: "annual_net_take_home_pay")', function() {
        // TODO: update the code to test the property annualNetTakeHomePay
        expect(instance).to.have.property('annualNetTakeHomePay');
        // expect(instance.annualNetTakeHomePay).to.be(expectedValueLiteral);
      });

      it('should have the property incomeBenefitDuration (base name: "income_benefit_duration")', function() {
        // TODO: update the code to test the property incomeBenefitDuration
        expect(instance).to.have.property('incomeBenefitDuration');
        // expect(instance.incomeBenefitDuration).to.be(expectedValueLiteral);
      });

      it('should have the property percentageOfIncomeCovered (base name: "percentage_of_income_covered")', function() {
        // TODO: update the code to test the property percentageOfIncomeCovered
        expect(instance).to.have.property('percentageOfIncomeCovered');
        // expect(instance.percentageOfIncomeCovered).to.be(expectedValueLiteral);
      });

    });
  });

}));
