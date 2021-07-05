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
    describe('WConfig', function() {
      beforeEach(function() {
        instance = new HydrogenProtonApi.WConfig();
      });

      it('should create an instance of WConfig', function() {
        // TODO: update the code to test WConfig
        expect(instance).to.be.a(HydrogenProtonApi.WConfig);
      });

      it('should have the property wMinMinor (base name: "w_min_minor")', function() {
        // TODO: update the code to test the property wMinMinor
        expect(instance).to.have.property('wMinMinor');
        // expect(instance.wMinMinor).to.be(expectedValueLiteral);
      });

      it('should have the property wMinMajor (base name: "w_min_major")', function() {
        // TODO: update the code to test the property wMinMajor
        expect(instance).to.have.property('wMinMajor');
        // expect(instance.wMinMajor).to.be(expectedValueLiteral);
      });

      it('should have the property cashAmount (base name: "cash_amount")', function() {
        // TODO: update the code to test the property cashAmount
        expect(instance).to.have.property('cashAmount');
        // expect(instance.cashAmount).to.be(expectedValueLiteral);
      });

      it('should have the property wMaxMajor (base name: "w_max_major")', function() {
        // TODO: update the code to test the property wMaxMajor
        expect(instance).to.have.property('wMaxMajor');
        // expect(instance.wMaxMajor).to.be(expectedValueLiteral);
      });

      it('should have the property wMaxMinor (base name: "w_max_minor")', function() {
        // TODO: update the code to test the property wMaxMinor
        expect(instance).to.have.property('wMaxMinor');
        // expect(instance.wMaxMinor).to.be(expectedValueLiteral);
      });

    });
  });

}));
