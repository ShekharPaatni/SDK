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
    root.HydrogenNucleusApi.VAccountVO = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VAccountVO model module.
   * @module model/VAccountVO
   * @version 1.9.0
   */

  /**
   * Constructs a new <code>VAccountVO</code>.
   * @alias module:model/VAccountVO
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>VAccountVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VAccountVO} obj Optional instance to populate.
   * @return {module:model/VAccountVO} The populated <code>VAccountVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
      }
      if (data.hasOwnProperty('account_name')) {
        obj['account_name'] = ApiClient.convertToType(data['account_name'], 'String');
      }
      if (data.hasOwnProperty('account_type_id')) {
        obj['account_type_id'] = ApiClient.convertToType(data['account_type_id'], 'String');
      }
      if (data.hasOwnProperty('account_type_name')) {
        obj['account_type_name'] = ApiClient.convertToType(data['account_type_name'], 'String');
      }
      if (data.hasOwnProperty('goal_asset_size_by_account')) {
        obj['goal_asset_size_by_account'] = ApiClient.convertToType(data['goal_asset_size_by_account'], 'Number');
      }
      if (data.hasOwnProperty('goal_asset_size_by_account_date')) {
        obj['goal_asset_size_by_account_date'] = ApiClient.convertToType(data['goal_asset_size_by_account_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * @member {String} account_name
   */
  exports.prototype['account_name'] = undefined;
  /**
   * @member {String} account_type_id
   */
  exports.prototype['account_type_id'] = undefined;
  /**
   * @member {String} account_type_name
   */
  exports.prototype['account_type_name'] = undefined;
  /**
   * @member {Number} goal_asset_size_by_account
   */
  exports.prototype['goal_asset_size_by_account'] = undefined;
  /**
   * @member {Date} goal_asset_size_by_account_date
   */
  exports.prototype['goal_asset_size_by_account_date'] = undefined;



  return exports;
}));


