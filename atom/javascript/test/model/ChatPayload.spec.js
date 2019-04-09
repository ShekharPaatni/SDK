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
    instance = new atom_api.ChatPayload();
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

  describe('ChatPayload', function() {
    it('should create an instance of ChatPayload', function() {
      // uncomment below and update the code to test ChatPayload
      //var instance = new atom_api.ChatPayload();
      //expect(instance).to.be.a(atom_api.ChatPayload);
    });

    it('should have the property chatLog (base name: "chat_log")', function() {
      // uncomment below and update the code to test the property chatLog
      //var instance = new atom_api.ChatPayload();
      //expect(instance).to.be();
    });

    it('should have the property assignedTo (base name: "assigned_to")', function() {
      // uncomment below and update the code to test the property assignedTo
      //var instance = new atom_api.ChatPayload();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instance = new atom_api.ChatPayload();
      //expect(instance).to.be();
    });

    it('should have the property isNotification (base name: "is_notification")', function() {
      // uncomment below and update the code to test the property isNotification
      //var instance = new atom_api.ChatPayload();
      //expect(instance).to.be();
    });

    it('should have the property isOpen (base name: "is_open")', function() {
      // uncomment below and update the code to test the property isOpen
      //var instance = new atom_api.ChatPayload();
      //expect(instance).to.be();
    });

    it('should have the property secondaryId (base name: "secondary_id")', function() {
      // uncomment below and update the code to test the property secondaryId
      //var instance = new atom_api.ChatPayload();
      //expect(instance).to.be();
    });

  });

}));
