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
    instance = new HydrogenNucleusApi.VClientGoalViewData();
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

  describe('VClientGoalViewData', function() {
    it('should create an instance of VClientGoalViewData', function() {
      // uncomment below and update the code to test VClientGoalViewData
      //var instane = new HydrogenNucleusApi.VClientGoalViewData();
      //expect(instance).to.be.a(HydrogenNucleusApi.VClientGoalViewData);
    });

    it('should have the property clientAssetSize (base name: "client_asset_size")', function() {
      // uncomment below and update the code to test the property clientAssetSize
      //var instane = new HydrogenNucleusApi.VClientGoalViewData();
      //expect(instance).to.be();
    });

    it('should have the property clientAssetSizeDate (base name: "client_asset_size_date")', function() {
      // uncomment below and update the code to test the property clientAssetSizeDate
      //var instane = new HydrogenNucleusApi.VClientGoalViewData();
      //expect(instance).to.be();
    });

    it('should have the property clientFirstName (base name: "client_first_name")', function() {
      // uncomment below and update the code to test the property clientFirstName
      //var instane = new HydrogenNucleusApi.VClientGoalViewData();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new HydrogenNucleusApi.VClientGoalViewData();
      //expect(instance).to.be();
    });

    it('should have the property clientLastName (base name: "client_last_name")', function() {
      // uncomment below and update the code to test the property clientLastName
      //var instane = new HydrogenNucleusApi.VClientGoalViewData();
      //expect(instance).to.be();
    });

    it('should have the property clientViewGoalData (base name: "client_view_goal_data")', function() {
      // uncomment below and update the code to test the property clientViewGoalData
      //var instane = new HydrogenNucleusApi.VClientGoalViewData();
      //expect(instance).to.be();
    });

  });

}));
