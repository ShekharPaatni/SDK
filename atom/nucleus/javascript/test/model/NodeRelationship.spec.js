/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.0
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
    instance = new HydrogenNucleusApi.NodeRelationship();
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

  describe('NodeRelationship', function() {
    it('should create an instance of NodeRelationship', function() {
      // uncomment below and update the code to test NodeRelationship
      //var instane = new HydrogenNucleusApi.NodeRelationship();
      //expect(instance).to.be.a(HydrogenNucleusApi.NodeRelationship);
    });

    it('should have the property answerId (base name: "answer_id")', function() {
      // uncomment below and update the code to test the property answerId
      //var instane = new HydrogenNucleusApi.NodeRelationship();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "create_date")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new HydrogenNucleusApi.NodeRelationship();
      //expect(instance).to.be();
    });

    it('should have the property decisionTreeId (base name: "decision_tree_id")', function() {
      // uncomment below and update the code to test the property decisionTreeId
      //var instane = new HydrogenNucleusApi.NodeRelationship();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new HydrogenNucleusApi.NodeRelationship();
      //expect(instance).to.be();
    });

    it('should have the property isLeaf (base name: "is_leaf")', function() {
      // uncomment below and update the code to test the property isLeaf
      //var instane = new HydrogenNucleusApi.NodeRelationship();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new HydrogenNucleusApi.NodeRelationship();
      //expect(instance).to.be();
    });

    it('should have the property nodeChildId (base name: "node_child_id")', function() {
      // uncomment below and update the code to test the property nodeChildId
      //var instane = new HydrogenNucleusApi.NodeRelationship();
      //expect(instance).to.be();
    });

    it('should have the property nodeParentId (base name: "node_parent_id")', function() {
      // uncomment below and update the code to test the property nodeParentId
      //var instane = new HydrogenNucleusApi.NodeRelationship();
      //expect(instance).to.be();
    });

    it('should have the property secondaryId (base name: "secondary_id")', function() {
      // uncomment below and update the code to test the property secondaryId
      //var instane = new HydrogenNucleusApi.NodeRelationship();
      //expect(instance).to.be();
    });

    it('should have the property updateDate (base name: "update_date")', function() {
      // uncomment below and update the code to test the property updateDate
      //var instane = new HydrogenNucleusApi.NodeRelationship();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new HydrogenNucleusApi.NodeRelationship();
      //expect(instance).to.be();
    });

  });

}));
