/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
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
    factory(root.expect, root.HydrogenAtomApi);
  }
}(this, function(expect, HydrogenAtomApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HydrogenAtomApi.JsonNode();
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

  describe('JsonNode', function() {
    it('should create an instance of JsonNode', function() {
      // uncomment below and update the code to test JsonNode
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be.a(HydrogenAtomApi.JsonNode);
    });

    it('should have the property _array (base name: "array")', function() {
      // uncomment below and update the code to test the property _array
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property bigDecimal (base name: "big_decimal")', function() {
      // uncomment below and update the code to test the property bigDecimal
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property bigInteger (base name: "big_integer")', function() {
      // uncomment below and update the code to test the property bigInteger
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property binary (base name: "binary")', function() {
      // uncomment below and update the code to test the property binary
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property _boolean (base name: "boolean")', function() {
      // uncomment below and update the code to test the property _boolean
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property containerNode (base name: "container_node")', function() {
      // uncomment below and update the code to test the property containerNode
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property _double (base name: "double")', function() {
      // uncomment below and update the code to test the property _double
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property empty (base name: "empty")', function() {
      // uncomment below and update the code to test the property empty
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property _float (base name: "float")', function() {
      // uncomment below and update the code to test the property _float
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property floatingPointNumber (base name: "floating_point_number")', function() {
      // uncomment below and update the code to test the property floatingPointNumber
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property _int (base name: "int")', function() {
      // uncomment below and update the code to test the property _int
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property integralNumber (base name: "integral_number")', function() {
      // uncomment below and update the code to test the property integralNumber
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property _long (base name: "long")', function() {
      // uncomment below and update the code to test the property _long
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property missingNode (base name: "missing_node")', function() {
      // uncomment below and update the code to test the property missingNode
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property nodeType (base name: "node_type")', function() {
      // uncomment below and update the code to test the property nodeType
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property _null (base name: "null")', function() {
      // uncomment below and update the code to test the property _null
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property _object (base name: "object")', function() {
      // uncomment below and update the code to test the property _object
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property pojo (base name: "pojo")', function() {
      // uncomment below and update the code to test the property pojo
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property _short (base name: "short")', function() {
      // uncomment below and update the code to test the property _short
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property textual (base name: "textual")', function() {
      // uncomment below and update the code to test the property textual
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

    it('should have the property valueNode (base name: "value_node")', function() {
      // uncomment below and update the code to test the property valueNode
      //var instane = new HydrogenAtomApi.JsonNode();
      //expect(instance).to.be();
    });

  });

}));
