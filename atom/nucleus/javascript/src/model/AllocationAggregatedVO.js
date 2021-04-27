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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AllocationCompositionAggregatedVO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AllocationCompositionAggregatedVO'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.AllocationAggregatedVO = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.AllocationCompositionAggregatedVO);
  }
}(this, function(ApiClient, AllocationCompositionAggregatedVO) {
  'use strict';




  /**
   * The AllocationAggregatedVO model module.
   * @module model/AllocationAggregatedVO
   * @version 1.9.0
   */

  /**
   * Constructs a new <code>AllocationAggregatedVO</code>.
   * @alias module:model/AllocationAggregatedVO
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>AllocationAggregatedVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllocationAggregatedVO} obj Optional instance to populate.
   * @return {module:model/AllocationAggregatedVO} The populated <code>AllocationAggregatedVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allocation_category')) {
        obj['allocation_category'] = ApiClient.convertToType(data['allocation_category'], 'String');
      }
      if (data.hasOwnProperty('allocation_compositions')) {
        obj['allocation_compositions'] = ApiClient.convertToType(data['allocation_compositions'], [AllocationCompositionAggregatedVO]);
      }
      if (data.hasOwnProperty('allocation_description')) {
        obj['allocation_description'] = ApiClient.convertToType(data['allocation_description'], 'String');
      }
      if (data.hasOwnProperty('allocation_id')) {
        obj['allocation_id'] = ApiClient.convertToType(data['allocation_id'], 'String');
      }
      if (data.hasOwnProperty('allocation_name')) {
        obj['allocation_name'] = ApiClient.convertToType(data['allocation_name'], 'String');
      }
      if (data.hasOwnProperty('allocation_secondary_id')) {
        obj['allocation_secondary_id'] = ApiClient.convertToType(data['allocation_secondary_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} allocation_category
   */
  exports.prototype['allocation_category'] = undefined;
  /**
   * @member {Array.<module:model/AllocationCompositionAggregatedVO>} allocation_compositions
   */
  exports.prototype['allocation_compositions'] = undefined;
  /**
   * @member {String} allocation_description
   */
  exports.prototype['allocation_description'] = undefined;
  /**
   * @member {String} allocation_id
   */
  exports.prototype['allocation_id'] = undefined;
  /**
   * @member {String} allocation_name
   */
  exports.prototype['allocation_name'] = undefined;
  /**
   * @member {String} allocation_secondary_id
   */
  exports.prototype['allocation_secondary_id'] = undefined;



  return exports;
}));


