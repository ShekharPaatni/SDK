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
    root.HydrogenNucleusApi.TransactionCode = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TransactionCode model module.
   * @module model/TransactionCode
   * @version 1.9.1
   */

  /**
   * Constructs a new <code>TransactionCode</code>.
   * @alias module:model/TransactionCode
   * @class
   * @param transactionCode {String} transactionCode
   */
  var exports = function(transactionCode) {
    var _this = this;











    _this['transaction_code'] = transactionCode;



  };

  /**
   * Constructs a <code>TransactionCode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionCode} obj Optional instance to populate.
   * @return {module:model/TransactionCode} The populated <code>TransactionCode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('is_buy')) {
        obj['is_buy'] = ApiClient.convertToType(data['is_buy'], 'Boolean');
      }
      if (data.hasOwnProperty('is_deposit')) {
        obj['is_deposit'] = ApiClient.convertToType(data['is_deposit'], 'Boolean');
      }
      if (data.hasOwnProperty('is_fee')) {
        obj['is_fee'] = ApiClient.convertToType(data['is_fee'], 'Boolean');
      }
      if (data.hasOwnProperty('is_transfer')) {
        obj['is_transfer'] = ApiClient.convertToType(data['is_transfer'], 'Boolean');
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
      if (data.hasOwnProperty('transaction_code')) {
        obj['transaction_code'] = ApiClient.convertToType(data['transaction_code'], 'String');
      }
      if (data.hasOwnProperty('transaction_code_description')) {
        obj['transaction_code_description'] = ApiClient.convertToType(data['transaction_code_description'], 'String');
      }
      if (data.hasOwnProperty('transaction_type')) {
        obj['transaction_type'] = ApiClient.convertToType(data['transaction_type'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * category
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Boolean} is_buy
   */
  exports.prototype['is_buy'] = undefined;
  /**
   * @member {Boolean} is_deposit
   */
  exports.prototype['is_deposit'] = undefined;
  /**
   * @member {Boolean} is_fee
   */
  exports.prototype['is_fee'] = undefined;
  /**
   * @member {Boolean} is_transfer
   */
  exports.prototype['is_transfer'] = undefined;
  /**
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * subcategory
   * @member {String} subcategory
   */
  exports.prototype['subcategory'] = undefined;
  /**
   * transactionCode
   * @member {String} transaction_code
   */
  exports.prototype['transaction_code'] = undefined;
  /**
   * transactionCodeDescription
   * @member {String} transaction_code_description
   */
  exports.prototype['transaction_code_description'] = undefined;
  /**
   * transactionType
   * @member {String} transaction_type
   */
  exports.prototype['transaction_type'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


