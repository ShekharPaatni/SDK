/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.2
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
    root.HydrogenNucleusApi.TokenDateRequest = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TokenDateRequest model module.
   * @module model/TokenDateRequest
   * @version 1.9.2
   */

  /**
   * Constructs a new <code>TokenDateRequest</code>.
   * TokenDateRequest Object
   * @alias module:model/TokenDateRequest
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>TokenDateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenDateRequest} obj Optional instance to populate.
   * @return {module:model/TokenDateRequest} The populated <code>TokenDateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
      }
      if (data.hasOwnProperty('buy_transaction_code_id')) {
        obj['buy_transaction_code_id'] = ApiClient.convertToType(data['buy_transaction_code_id'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('sell_transaction_code_id')) {
        obj['sell_transaction_code_id'] = ApiClient.convertToType(data['sell_transaction_code_id'], 'String');
      }
      if (data.hasOwnProperty('tenant_id')) {
        obj['tenant_id'] = ApiClient.convertToType(data['tenant_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * accountId
   * @member {String} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * buyTransactionCodeId
   * @member {String} buy_transaction_code_id
   */
  exports.prototype['buy_transaction_code_id'] = undefined;
  /**
   * clientId
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * date
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * sellTransactionCodeId
   * @member {String} sell_transaction_code_id
   */
  exports.prototype['sell_transaction_code_id'] = undefined;
  /**
   * tenantId
   * @member {String} tenant_id
   */
  exports.prototype['tenant_id'] = undefined;



  return exports;
}));


