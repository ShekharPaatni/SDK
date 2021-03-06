/**
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.3.0
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
    define(['ApiClient', 'model/AggregationAccountTransactionResponseInternalObjectVO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AggregationAccountTransactionResponseInternalObjectVO'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.AggregationAccountTransactionResponseVO = factory(root.HydrogenIntegrationApi.ApiClient, root.HydrogenIntegrationApi.AggregationAccountTransactionResponseInternalObjectVO);
  }
}(this, function(ApiClient, AggregationAccountTransactionResponseInternalObjectVO) {
  'use strict';




  /**
   * The AggregationAccountTransactionResponseVO model module.
   * @module model/AggregationAccountTransactionResponseVO
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>AggregationAccountTransactionResponseVO</code>.
   * @alias module:model/AggregationAccountTransactionResponseVO
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>AggregationAccountTransactionResponseVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AggregationAccountTransactionResponseVO} obj Optional instance to populate.
   * @return {module:model/AggregationAccountTransactionResponseVO} The populated <code>AggregationAccountTransactionResponseVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('nucleus_aggregation_account_id')) {
        obj['nucleus_aggregation_account_id'] = ApiClient.convertToType(data['nucleus_aggregation_account_id'], 'String');
      }
      if (data.hasOwnProperty('nucleus_transactions_canceled')) {
        obj['nucleus_transactions_canceled'] = ApiClient.convertToType(data['nucleus_transactions_canceled'], [AggregationAccountTransactionResponseInternalObjectVO]);
      }
      if (data.hasOwnProperty('nucleus_transactions_posted')) {
        obj['nucleus_transactions_posted'] = ApiClient.convertToType(data['nucleus_transactions_posted'], [AggregationAccountTransactionResponseInternalObjectVO]);
      }
      if (data.hasOwnProperty('vendor_name')) {
        obj['vendor_name'] = ApiClient.convertToType(data['vendor_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} nucleus_aggregation_account_id
   */
  exports.prototype['nucleus_aggregation_account_id'] = undefined;
  /**
   * @member {Array.<module:model/AggregationAccountTransactionResponseInternalObjectVO>} nucleus_transactions_canceled
   */
  exports.prototype['nucleus_transactions_canceled'] = undefined;
  /**
   * @member {Array.<module:model/AggregationAccountTransactionResponseInternalObjectVO>} nucleus_transactions_posted
   */
  exports.prototype['nucleus_transactions_posted'] = undefined;
  /**
   * @member {String} vendor_name
   */
  exports.prototype['vendor_name'] = undefined;



  return exports;
}));


