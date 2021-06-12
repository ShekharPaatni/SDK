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
    root.HydrogenNucleusApi.MerchantCategoryCode = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MerchantCategoryCode model module.
   * @module model/MerchantCategoryCode
   * @version 1.9.1
   */

  /**
   * Constructs a new <code>MerchantCategoryCode</code>.
   * MerchantCategoryCode Object
   * @alias module:model/MerchantCategoryCode
   * @class
   * @param transactionCategoryId {String} TransactionCategory id
   */
  var exports = function(transactionCategoryId) {
    var _this = this;





    _this['transaction_category_id'] = transactionCategoryId;
  };

  /**
   * Constructs a <code>MerchantCategoryCode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MerchantCategoryCode} obj Optional instance to populate.
   * @return {module:model/MerchantCategoryCode} The populated <code>MerchantCategoryCode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('mcc')) {
        obj['mcc'] = ApiClient.convertToType(data['mcc'], 'Number');
      }
      if (data.hasOwnProperty('subcategory')) {
        obj['subcategory'] = ApiClient.convertToType(data['subcategory'], 'String');
      }
      if (data.hasOwnProperty('transaction_category_id')) {
        obj['transaction_category_id'] = ApiClient.convertToType(data['transaction_category_id'], 'String');
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
   * description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * mcc
   * @member {Number} mcc
   */
  exports.prototype['mcc'] = undefined;
  /**
   * subcategory
   * @member {String} subcategory
   */
  exports.prototype['subcategory'] = undefined;
  /**
   * TransactionCategory id
   * @member {String} transaction_category_id
   */
  exports.prototype['transaction_category_id'] = undefined;



  return exports;
}));


