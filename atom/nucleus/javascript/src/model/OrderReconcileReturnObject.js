/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.1
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
    root.HydrogenNucleusApi.OrderReconcileReturnObject = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OrderReconcileReturnObject model module.
   * @module model/OrderReconcileReturnObject
   * @version 1.9.1
   */

  /**
   * Constructs a new <code>OrderReconcileReturnObject</code>.
   * @alias module:model/OrderReconcileReturnObject
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>OrderReconcileReturnObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderReconcileReturnObject} obj Optional instance to populate.
   * @return {module:model/OrderReconcileReturnObject} The populated <code>OrderReconcileReturnObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = ApiClient.convertToType(data['account_id'], ['String']);
      }
      if (data.hasOwnProperty('portfolio_asset_size_id')) {
        obj['portfolio_asset_size_id'] = ApiClient.convertToType(data['portfolio_asset_size_id'], ['String']);
      }
      if (data.hasOwnProperty('portfolio_holding_id')) {
        obj['portfolio_holding_id'] = ApiClient.convertToType(data['portfolio_holding_id'], ['String']);
      }
      if (data.hasOwnProperty('portfolio_id')) {
        obj['portfolio_id'] = ApiClient.convertToType(data['portfolio_id'], ['String']);
      }
      if (data.hasOwnProperty('portfolio_transaction_id')) {
        obj['portfolio_transaction_id'] = ApiClient.convertToType(data['portfolio_transaction_id'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * @member {Array.<String>} portfolio_asset_size_id
   */
  exports.prototype['portfolio_asset_size_id'] = undefined;
  /**
   * @member {Array.<String>} portfolio_holding_id
   */
  exports.prototype['portfolio_holding_id'] = undefined;
  /**
   * @member {Array.<String>} portfolio_id
   */
  exports.prototype['portfolio_id'] = undefined;
  /**
   * @member {Array.<String>} portfolio_transaction_id
   */
  exports.prototype['portfolio_transaction_id'] = undefined;



  return exports;
}));


