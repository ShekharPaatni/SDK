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
    define(['ApiClient', 'model/CardBalanceVO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CardBalanceVO'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.CardDetailsVO = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.CardBalanceVO);
  }
}(this, function(ApiClient, CardBalanceVO) {
  'use strict';




  /**
   * The CardDetailsVO model module.
   * @module model/CardDetailsVO
   * @version 1.9.1
   */

  /**
   * Constructs a new <code>CardDetailsVO</code>.
   * Card Details Object
   * @alias module:model/CardDetailsVO
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>CardDetailsVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CardDetailsVO} obj Optional instance to populate.
   * @return {module:model/CardDetailsVO} The populated <code>CardDetailsVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('balance')) {
        obj['balance'] = CardBalanceVO.constructFromObject(data['balance']);
      }
      if (data.hasOwnProperty('card_holder_name')) {
        obj['card_holder_name'] = ApiClient.convertToType(data['card_holder_name'], 'String');
      }
      if (data.hasOwnProperty('card_id')) {
        obj['card_id'] = ApiClient.convertToType(data['card_id'], 'String');
      }
      if (data.hasOwnProperty('card_issuance')) {
        obj['card_issuance'] = ApiClient.convertToType(data['card_issuance'], 'String');
      }
      if (data.hasOwnProperty('card_name')) {
        obj['card_name'] = ApiClient.convertToType(data['card_name'], 'String');
      }
      if (data.hasOwnProperty('card_network')) {
        obj['card_network'] = ApiClient.convertToType(data['card_network'], 'String');
      }
      if (data.hasOwnProperty('card_type')) {
        obj['card_type'] = ApiClient.convertToType(data['card_type'], 'String');
      }
      if (data.hasOwnProperty('expiry_date')) {
        obj['expiry_date'] = ApiClient.convertToType(data['expiry_date'], 'Date');
      }
      if (data.hasOwnProperty('mask')) {
        obj['mask'] = ApiClient.convertToType(data['mask'], 'String');
      }
      if (data.hasOwnProperty('prepaid_amount')) {
        obj['prepaid_amount'] = ApiClient.convertToType(data['prepaid_amount'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * balance
   * @member {module:model/CardBalanceVO} balance
   */
  exports.prototype['balance'] = undefined;
  /**
   * cardHolderName
   * @member {String} card_holder_name
   */
  exports.prototype['card_holder_name'] = undefined;
  /**
   * cardId
   * @member {String} card_id
   */
  exports.prototype['card_id'] = undefined;
  /**
   * cardIssuance
   * @member {String} card_issuance
   */
  exports.prototype['card_issuance'] = undefined;
  /**
   * cardName
   * @member {String} card_name
   */
  exports.prototype['card_name'] = undefined;
  /**
   * cardNetwork
   * @member {String} card_network
   */
  exports.prototype['card_network'] = undefined;
  /**
   * cardType
   * @member {String} card_type
   */
  exports.prototype['card_type'] = undefined;
  /**
   * expiryDate
   * @member {Date} expiry_date
   */
  exports.prototype['expiry_date'] = undefined;
  /**
   * mask
   * @member {String} mask
   */
  exports.prototype['mask'] = undefined;
  /**
   * prepaidAmount
   * @member {Number} prepaid_amount
   */
  exports.prototype['prepaid_amount'] = undefined;
  /**
   * status
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


