/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.2.1
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
    factory(root.expect, root.HydrogenIntegrationApi);
  }
}(this, function(expect, HydrogenIntegrationApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('AggregationVendorRequestCO', function() {
      beforeEach(function() {
        instance = new HydrogenIntegrationApi.AggregationVendorRequestCO();
      });

      it('should create an instance of AggregationVendorRequestCO', function() {
        // TODO: update the code to test AggregationVendorRequestCO
        expect(instance).to.be.a(HydrogenIntegrationApi.AggregationVendorRequestCO);
      });

      it('should have the property itemId (base name: "item_id")', function() {
        // TODO: update the code to test the property itemId
        expect(instance).to.have.property('itemId');
        // expect(instance.itemId).to.be(expectedValueLiteral);
      });

      it('should have the property memberId (base name: "member_id")', function() {
        // TODO: update the code to test the property memberId
        expect(instance).to.have.property('memberId');
        // expect(instance.memberId).to.be(expectedValueLiteral);
      });

      it('should have the property nucleusAccountId (base name: "nucleus_account_id")', function() {
        // TODO: update the code to test the property nucleusAccountId
        expect(instance).to.have.property('nucleusAccountId');
        // expect(instance.nucleusAccountId).to.be(expectedValueLiteral);
      });

    });
  });

}));