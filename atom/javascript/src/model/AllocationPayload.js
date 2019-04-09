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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SecondaryId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SecondaryId'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.AllocationPayload = factory(root.atom_api.ApiClient, root.atom_api.SecondaryId);
  }
}(this, function(ApiClient, SecondaryId) {
  'use strict';




  /**
   * The AllocationPayload model module.
   * @module model/AllocationPayload
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AllocationPayload</code>.
   * @alias module:model/AllocationPayload
   * @class
   * @param name {String} Name of the allocation
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;








  };

  /**
   * Constructs a <code>AllocationPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllocationPayload} obj Optional instance to populate.
   * @return {module:model/AllocationPayload} The populated <code>AllocationPayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('benchmark_id')) {
        obj['benchmark_id'] = ApiClient.convertToType(data['benchmark_id'], 'String');
      }
      if (data.hasOwnProperty('inception_date')) {
        obj['inception_date'] = ApiClient.convertToType(data['inception_date'], 'Date');
      }
      if (data.hasOwnProperty('node_map')) {
        obj['node_map'] = ApiClient.convertToType(data['node_map'], ['String']);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('is_active')) {
        obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = SecondaryId.constructFromObject(data['secondary_id']);
      }
    }
    return obj;
  }

  /**
   * Name of the allocation
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Description of the allocation
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * The ID for the benchmark that the allocation should be compared to
   * @member {String} benchmark_id
   */
  exports.prototype['benchmark_id'] = undefined;
  /**
   * Date that the allocation first was managed
   * @member {Date} inception_date
   */
  exports.prototype['inception_date'] = undefined;
  /**
   * List of nodes in a decision tree that map to the allocation
   * @member {Array.<String>} node_map
   */
  exports.prototype['node_map'] = undefined;
  /**
   * Custom information associated with the allocation in the format key:value
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Indicator if this allocation is active. Default is true which indicates it is active
   * @member {Boolean} is_active
   * @default true
   */
  exports.prototype['is_active'] = true;
  /**
   * @member {module:model/SecondaryId} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;



  return exports;
}));


