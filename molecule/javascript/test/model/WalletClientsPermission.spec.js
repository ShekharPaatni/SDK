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
    describe('WalletClientsPermission', function() {
      beforeEach(function() {
        instance = new MoleculeApiDocumentation.WalletClientsPermission();
      });

      it('should create an instance of WalletClientsPermission', function() {
        // TODO: update the code to test WalletClientsPermission
        expect(instance).to.be.a(MoleculeApiDocumentation.WalletClientsPermission);
      });

      it('should have the property nucleusClientId (base name: "nucleus_client_id")', function() {
        // TODO: update the code to test the property nucleusClientId
        expect(instance).to.have.property('nucleusClientId');
        // expect(instance.nucleusClientId).to.be(expectedValueLiteral);
      });

      it('should have the property clientWalletAssociationType (base name: "client_wallet_association_type")', function() {
        // TODO: update the code to test the property clientWalletAssociationType
        expect(instance).to.have.property('clientWalletAssociationType');
        // expect(instance.clientWalletAssociationType).to.be(expectedValueLiteral);
      });

      it('should have the property permissionType (base name: "permission_type")', function() {
        // TODO: update the code to test the property permissionType
        expect(instance).to.have.property('permissionType');
        // expect(instance.permissionType).to.be(expectedValueLiteral);
      });

      it('should have the property isPrimary (base name: "is_primary")', function() {
        // TODO: update the code to test the property isPrimary
        expect(instance).to.have.property('isPrimary');
        // expect(instance.isPrimary).to.be(expectedValueLiteral);
      });

    });
  });

}));