/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2-SNAPSHOT
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
    factory(root.expect, root.atom_api);
  }
}(this, function(expect, atom_api) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new atom_api.RetirementCalculatorDepositAmount();
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

  describe('RetirementCalculatorDepositAmount', function() {
    it('should create an instance of RetirementCalculatorDepositAmount', function() {
      // uncomment below and update the code to test RetirementCalculatorDepositAmount
      //var instance = new atom_api.RetirementCalculatorDepositAmount();
      //expect(instance).to.be.a(atom_api.RetirementCalculatorDepositAmount);
    });

    it('should have the property currentAge (base name: "current_age")', function() {
      // uncomment below and update the code to test the property currentAge
      //var instance = new atom_api.RetirementCalculatorDepositAmount();
      //expect(instance).to.be();
    });

    it('should have the property deathAge (base name: "death_age")', function() {
      // uncomment below and update the code to test the property deathAge
      //var instance = new atom_api.RetirementCalculatorDepositAmount();
      //expect(instance).to.be();
    });

    it('should have the property retirementExpenses (base name: "retirement_expenses")', function() {
      // uncomment below and update the code to test the property retirementExpenses
      //var instance = new atom_api.RetirementCalculatorDepositAmount();
      //expect(instance).to.be();
    });

    it('should have the property portfolioReturn (base name: "portfolio_return")', function() {
      // uncomment below and update the code to test the property portfolioReturn
      //var instance = new atom_api.RetirementCalculatorDepositAmount();
      //expect(instance).to.be();
    });

    it('should have the property retirementAge (base name: "retirement_age")', function() {
      // uncomment below and update the code to test the property retirementAge
      //var instance = new atom_api.RetirementCalculatorDepositAmount();
      //expect(instance).to.be();
    });

    it('should have the property percentOfExpensesCovered (base name: "percent_of_expenses_covered")', function() {
      // uncomment below and update the code to test the property percentOfExpensesCovered
      //var instance = new atom_api.RetirementCalculatorDepositAmount();
      //expect(instance).to.be();
    });

    it('should have the property retirementSavings (base name: "retirement_savings")', function() {
      // uncomment below and update the code to test the property retirementSavings
      //var instance = new atom_api.RetirementCalculatorDepositAmount();
      //expect(instance).to.be();
    });

    it('should have the property retirementIncome (base name: "retirement_income")', function() {
      // uncomment below and update the code to test the property retirementIncome
      //var instance = new atom_api.RetirementCalculatorDepositAmount();
      //expect(instance).to.be();
    });

    it('should have the property depositSchedule (base name: "deposit_schedule")', function() {
      // uncomment below and update the code to test the property depositSchedule
      //var instance = new atom_api.RetirementCalculatorDepositAmount();
      //expect(instance).to.be();
    });

    it('should have the property inflationRate (base name: "inflation_rate")', function() {
      // uncomment below and update the code to test the property inflationRate
      //var instance = new atom_api.RetirementCalculatorDepositAmount();
      //expect(instance).to.be();
    });

    it('should have the property retirementTax (base name: "retirement_tax")', function() {
      // uncomment below and update the code to test the property retirementTax
      //var instance = new atom_api.RetirementCalculatorDepositAmount();
      //expect(instance).to.be();
    });

  });

}));
