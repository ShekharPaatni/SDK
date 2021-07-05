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
    describe('PurchaseCalculatorHorizonRequest', function() {
      beforeEach(function() {
        instance = new HydrogenProtonApi.PurchaseCalculatorHorizonRequest();
      });

      it('should create an instance of PurchaseCalculatorHorizonRequest', function() {
        // TODO: update the code to test PurchaseCalculatorHorizonRequest
        expect(instance).to.be.a(HydrogenProtonApi.PurchaseCalculatorHorizonRequest);
      });

      it('should have the property accountIds (base name: "account_ids")', function() {
        // TODO: update the code to test the property accountIds
        expect(instance).to.have.property('accountIds');
        // expect(instance.accountIds).to.be(expectedValueLiteral);
      });

      it('should have the property investmentTax (base name: "investment_tax")', function() {
        // TODO: update the code to test the property investmentTax
        expect(instance).to.have.property('investmentTax');
        // expect(instance.investmentTax).to.be(expectedValueLiteral);
      });

      it('should have the property portfolioReturn (base name: "portfolio_return")', function() {
        // TODO: update the code to test the property portfolioReturn
        expect(instance).to.have.property('portfolioReturn');
        // expect(instance.portfolioReturn).to.be(expectedValueLiteral);
      });

      it('should have the property depositSchedule (base name: "deposit_schedule")', function() {
        // TODO: update the code to test the property depositSchedule
        expect(instance).to.have.property('depositSchedule');
        // expect(instance.depositSchedule).to.be(expectedValueLiteral);
      });

      it('should have the property currentSavings (base name: "current_savings")', function() {
        // TODO: update the code to test the property currentSavings
        expect(instance).to.have.property('currentSavings');
        // expect(instance.currentSavings).to.be(expectedValueLiteral);
      });

      it('should have the property purchaseAmount (base name: "purchase_amount")', function() {
        // TODO: update the code to test the property purchaseAmount
        expect(instance).to.have.property('purchaseAmount');
        // expect(instance.purchaseAmount).to.be(expectedValueLiteral);
      });

      it('should have the property inflationRate (base name: "inflation_rate")', function() {
        // TODO: update the code to test the property inflationRate
        expect(instance).to.have.property('inflationRate');
        // expect(instance.inflationRate).to.be(expectedValueLiteral);
      });

      it('should have the property aggregationAccountIds (base name: "aggregation_account_ids")', function() {
        // TODO: update the code to test the property aggregationAccountIds
        expect(instance).to.have.property('aggregationAccountIds');
        // expect(instance.aggregationAccountIds).to.be(expectedValueLiteral);
      });

    });
  });

}));
