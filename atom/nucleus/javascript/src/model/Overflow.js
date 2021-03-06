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
    define(['ApiClient', 'model/FundingRequestMap'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FundingRequestMap'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.Overflow = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.FundingRequestMap);
  }
}(this, function(ApiClient, FundingRequestMap) {
  'use strict';




  /**
   * The Overflow model module.
   * @module model/Overflow
   * @version 1.9.2
   */

  /**
   * Constructs a new <code>Overflow</code>.
   * Overflow Object
   * @alias module:model/Overflow
   * @class
   * @param accountId {String} accountId
   * @param clientId {String} clientId
   * @param overflowSettingId {String} overflowSettingId
   * @param totalOverflowAmount {Number} totalOverflowAmount
   */
  var exports = function(accountId, clientId, overflowSettingId, totalOverflowAmount) {
    var _this = this;

    _this['account_id'] = accountId;
    _this['client_id'] = clientId;



    _this['overflow_setting_id'] = overflowSettingId;
    _this['total_overflow_amount'] = totalOverflowAmount;


  };

  /**
   * Constructs a <code>Overflow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Overflow} obj Optional instance to populate.
   * @return {module:model/Overflow} The populated <code>Overflow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('funding_requests')) {
        obj['funding_requests'] = ApiClient.convertToType(data['funding_requests'], [FundingRequestMap]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('overflow_setting_id')) {
        obj['overflow_setting_id'] = ApiClient.convertToType(data['overflow_setting_id'], 'String');
      }
      if (data.hasOwnProperty('total_overflow_amount')) {
        obj['total_overflow_amount'] = ApiClient.convertToType(data['total_overflow_amount'], 'Number');
      }
      if (data.hasOwnProperty('update_balances')) {
        obj['update_balances'] = ApiClient.convertToType(data['update_balances'], 'Boolean');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
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
   * clientId
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * @member {Array.<module:model/FundingRequestMap>} funding_requests
   */
  exports.prototype['funding_requests'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * overflowSettingId
   * @member {String} overflow_setting_id
   */
  exports.prototype['overflow_setting_id'] = undefined;
  /**
   * totalOverflowAmount
   * @member {Number} total_overflow_amount
   */
  exports.prototype['total_overflow_amount'] = undefined;
  /**
   * updateBalances
   * @member {Boolean} update_balances
   */
  exports.prototype['update_balances'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


