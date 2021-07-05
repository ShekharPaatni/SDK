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
    describe('GoalWithdrawalConfig', function() {
      beforeEach(function() {
        instance = new HydrogenProtonApi.GoalWithdrawalConfig();
      });

      it('should create an instance of GoalWithdrawalConfig', function() {
        // TODO: update the code to test GoalWithdrawalConfig
        expect(instance).to.be.a(HydrogenProtonApi.GoalWithdrawalConfig);
      });

      it('should have the property withInflation (base name: "with_inflation")', function() {
        // TODO: update the code to test the property withInflation
        expect(instance).to.have.property('withInflation');
        // expect(instance.withInflation).to.be(expectedValueLiteral);
      });

      it('should have the property withFrequency (base name: "with_frequency")', function() {
        // TODO: update the code to test the property withFrequency
        expect(instance).to.have.property('withFrequency');
        // expect(instance.withFrequency).to.be(expectedValueLiteral);
      });

      it('should have the property withEndReference (base name: "with_end_reference")', function() {
        // TODO: update the code to test the property withEndReference
        expect(instance).to.have.property('withEndReference');
        // expect(instance.withEndReference).to.be(expectedValueLiteral);
      });

      it('should have the property withStartReference (base name: "with_start_reference")', function() {
        // TODO: update the code to test the property withStartReference
        expect(instance).to.have.property('withStartReference');
        // expect(instance.withStartReference).to.be(expectedValueLiteral);
      });

      it('should have the property withEndPeriod (base name: "with_end_period")', function() {
        // TODO: update the code to test the property withEndPeriod
        expect(instance).to.have.property('withEndPeriod');
        // expect(instance.withEndPeriod).to.be(expectedValueLiteral);
      });

      it('should have the property withAmount (base name: "with_amount")', function() {
        // TODO: update the code to test the property withAmount
        expect(instance).to.have.property('withAmount');
        // expect(instance.withAmount).to.be(expectedValueLiteral);
      });

      it('should have the property withStartPeriod (base name: "with_start_period")', function() {
        // TODO: update the code to test the property withStartPeriod
        expect(instance).to.have.property('withStartPeriod');
        // expect(instance.withStartPeriod).to.be(expectedValueLiteral);
      });

    });
  });

}));
