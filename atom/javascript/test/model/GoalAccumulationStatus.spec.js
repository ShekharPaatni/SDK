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
    instance = new atom_api.GoalAccumulationStatus();
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

  describe('GoalAccumulationStatus', function() {
    it('should create an instance of GoalAccumulationStatus', function() {
      // uncomment below and update the code to test GoalAccumulationStatus
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be.a(atom_api.GoalAccumulationStatus);
    });

    it('should have the property pRet (base name: "p_ret")', function() {
      // uncomment below and update the code to test the property pRet
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property pRisk (base name: "p_risk")', function() {
      // uncomment below and update the code to test the property pRisk
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property currInv (base name: "curr_inv")', function() {
      // uncomment below and update the code to test the property currInv
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property horizon (base name: "horizon")', function() {
      // uncomment below and update the code to test the property horizon
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property horizonFrequency (base name: "horizon_frequency")', function() {
      // uncomment below and update the code to test the property horizonFrequency
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property goalConfig (base name: "goal_config")', function() {
      // uncomment below and update the code to test the property goalConfig
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property depositConfig (base name: "deposit_config")', function() {
      // uncomment below and update the code to test the property depositConfig
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property recommendationConfig (base name: "recommendation_config")', function() {
      // uncomment below and update the code to test the property recommendationConfig
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property recommendType (base name: "recommend_type")', function() {
      // uncomment below and update the code to test the property recommendType
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property confTgt (base name: "conf_tgt")', function() {
      // uncomment below and update the code to test the property confTgt
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property n (base name: "n")', function() {
      // uncomment below and update the code to test the property n
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property removeOutliers (base name: "remove_outliers")', function() {
      // uncomment below and update the code to test the property removeOutliers
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property threshType (base name: "thresh_type")', function() {
      // uncomment below and update the code to test the property threshType
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property thresh (base name: "thresh")', function() {
      // uncomment below and update the code to test the property thresh
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property withdrawalTax (base name: "withdrawal_tax")', function() {
      // uncomment below and update the code to test the property withdrawalTax
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property tradingDaysPerYear (base name: "trading_days_per_year")', function() {
      // uncomment below and update the code to test the property tradingDaysPerYear
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property adjustForCompounding (base name: "adjust_for_compounding")', function() {
      // uncomment below and update the code to test the property adjustForCompounding
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

    it('should have the property compoundingRate (base name: "compounding_rate")', function() {
      // uncomment below and update the code to test the property compoundingRate
      //var instance = new atom_api.GoalAccumulationStatus();
      //expect(instance).to.be();
    });

  });

}));
