/*
 * Molecule API Documentation
 * The Hydrogen Molecule API
 *
 * OpenAPI spec version: 1.3.0
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
    factory(root.expect, root.MoleculeApiDocumentation);
  }
}(this, function(expect, MoleculeApiDocumentation) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('WalletKeyParams', function() {
      beforeEach(function() {
        instance = new MoleculeApiDocumentation.WalletKeyParams();
      });

      it('should create an instance of WalletKeyParams', function() {
        // TODO: update the code to test WalletKeyParams
        expect(instance).to.be.a(MoleculeApiDocumentation.WalletKeyParams);
      });

      it('should have the property walletId (base name: "wallet_id")', function() {
        // TODO: update the code to test the property walletId
        expect(instance).to.have.property('walletId');
        // expect(instance.walletId).to.be(expectedValueLiteral);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property privateKey (base name: "private_key")', function() {
        // TODO: update the code to test the property privateKey
        expect(instance).to.have.property('privateKey');
        // expect(instance.privateKey).to.be(expectedValueLiteral);
      });

      it('should have the property keyId (base name: "key_id")', function() {
        // TODO: update the code to test the property keyId
        expect(instance).to.have.property('keyId');
        // expect(instance.keyId).to.be(expectedValueLiteral);
      });

      it('should have the property keyServer (base name: "key_server")', function() {
        // TODO: update the code to test the property keyServer
        expect(instance).to.have.property('keyServer');
        // expect(instance.keyServer).to.be(expectedValueLiteral);
      });

      it('should have the property isActive (base name: "is_active")', function() {
        // TODO: update the code to test the property isActive
        expect(instance).to.have.property('isActive');
        // expect(instance.isActive).to.be(expectedValueLiteral);
      });

      it('should have the property recordStatus (base name: "record_status")', function() {
        // TODO: update the code to test the property recordStatus
        expect(instance).to.have.property('recordStatus');
        // expect(instance.recordStatus).to.be(expectedValueLiteral);
      });

    });
  });

}));