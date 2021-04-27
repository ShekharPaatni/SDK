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
    root.HydrogenNucleusApi.SecurityExclusion = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SecurityExclusion model module.
   * @module model/SecurityExclusion
   * @version 1.9.0
   */

  /**
   * Constructs a new <code>SecurityExclusion</code>.
   * SecurityExclusion Object
   * @alias module:model/SecurityExclusion
   * @class
   * @param clientId {String} Client id
   * @param isRestrictBuy {Boolean} restrict buy
   * @param isRestrictSell {Boolean} restrict sell
   * @param securityId {String} Security id
   */
  var exports = function(clientId, isRestrictBuy, isRestrictSell, securityId) {
    var _this = this;


    _this['client_id'] = clientId;


    _this['is_restrict_buy'] = isRestrictBuy;
    _this['is_restrict_sell'] = isRestrictSell;



    _this['security_id'] = securityId;

  };

  /**
   * Constructs a <code>SecurityExclusion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityExclusion} obj Optional instance to populate.
   * @return {module:model/SecurityExclusion} The populated <code>SecurityExclusion</code> instance.
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
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('is_restrict_buy')) {
        obj['is_restrict_buy'] = ApiClient.convertToType(data['is_restrict_buy'], 'Boolean');
      }
      if (data.hasOwnProperty('is_restrict_sell')) {
        obj['is_restrict_sell'] = ApiClient.convertToType(data['is_restrict_sell'], 'Boolean');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('portfolio_id')) {
        obj['portfolio_id'] = ApiClient.convertToType(data['portfolio_id'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('security_id')) {
        obj['security_id'] = ApiClient.convertToType(data['security_id'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * account id
   * @member {String} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * Client id
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * restrict buy
   * @member {Boolean} is_restrict_buy
   */
  exports.prototype['is_restrict_buy'] = undefined;
  /**
   * restrict sell
   * @member {Boolean} is_restrict_sell
   */
  exports.prototype['is_restrict_sell'] = undefined;
  /**
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * portfolio id
   * @member {String} portfolio_id
   */
  exports.prototype['portfolio_id'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * Security id
   * @member {String} security_id
   */
  exports.prototype['security_id'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


