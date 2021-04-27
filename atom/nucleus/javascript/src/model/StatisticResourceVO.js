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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.StatisticResourceVO = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StatisticResourceVO model module.
   * @module model/StatisticResourceVO
   * @version 1.9.0
   */

  /**
   * Constructs a new <code>StatisticResourceVO</code>.
   * @alias module:model/StatisticResourceVO
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>StatisticResourceVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatisticResourceVO} obj Optional instance to populate.
   * @return {module:model/StatisticResourceVO} The populated <code>StatisticResourceVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('parameter')) {
        obj['parameter'] = ApiClient.convertToType(data['parameter'], 'String');
      }
      if (data.hasOwnProperty('stat_name')) {
        obj['stat_name'] = ApiClient.convertToType(data['stat_name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} parameter
   */
  exports.prototype['parameter'] = undefined;
  /**
   * @member {String} stat_name
   */
  exports.prototype['stat_name'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


