/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
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
    if (!root.HydrogenAtomApi) {
      root.HydrogenAtomApi = {};
    }
    root.HydrogenAtomApi.AggregationAccountDetailsAggregateDataVO = factory(root.HydrogenAtomApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AggregationAccountDetailsAggregateDataVO model module.
   * @module model/AggregationAccountDetailsAggregateDataVO
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>AggregationAccountDetailsAggregateDataVO</code>.
   * @alias module:model/AggregationAccountDetailsAggregateDataVO
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>AggregationAccountDetailsAggregateDataVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AggregationAccountDetailsAggregateDataVO} obj Optional instance to populate.
   * @return {module:model/AggregationAccountDetailsAggregateDataVO} The populated <code>AggregationAccountDetailsAggregateDataVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account_holder')) {
        obj['account_holder'] = ApiClient.convertToType(data['account_holder'], 'String');
      }
      if (data.hasOwnProperty('account_name')) {
        obj['account_name'] = ApiClient.convertToType(data['account_name'], 'String');
      }
      if (data.hasOwnProperty('account_number')) {
        obj['account_number'] = ApiClient.convertToType(data['account_number'], 'String');
      }
      if (data.hasOwnProperty('asset')) {
        obj['asset'] = ApiClient.convertToType(data['asset'], 'Boolean');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('financial_offer_id')) {
        obj['financial_offer_id'] = ApiClient.convertToType(data['financial_offer_id'], 'String');
      }
      if (data.hasOwnProperty('institution_name')) {
        obj['institution_name'] = ApiClient.convertToType(data['institution_name'], 'String');
      }
      if (data.hasOwnProperty('mask')) {
        obj['mask'] = ApiClient.convertToType(data['mask'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('subcategory')) {
        obj['subcategory'] = ApiClient.convertToType(data['subcategory'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} account_holder
   */
  exports.prototype['account_holder'] = undefined;
  /**
   * @member {String} account_name
   */
  exports.prototype['account_name'] = undefined;
  /**
   * @member {String} account_number
   */
  exports.prototype['account_number'] = undefined;
  /**
   * @member {Boolean} asset
   */
  exports.prototype['asset'] = undefined;
  /**
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * @member {String} financial_offer_id
   */
  exports.prototype['financial_offer_id'] = undefined;
  /**
   * @member {String} institution_name
   */
  exports.prototype['institution_name'] = undefined;
  /**
   * @member {String} mask
   */
  exports.prototype['mask'] = undefined;
  /**
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * @member {String} subcategory
   */
  exports.prototype['subcategory'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


