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
    root.HydrogenNucleusApi.CustomerRevenue = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CustomerRevenue model module.
   * @module model/CustomerRevenue
   * @version 1.9.1
   */

  /**
   * Constructs a new <code>CustomerRevenue</code>.
   * Customer Revenue Object
   * @alias module:model/CustomerRevenue
   * @class
   * @param accountingMethod {String} accounting_method
   * @param contactId {String} contactId
   * @param currencyCode {String} currency_code
   * @param _date {Date} date
   * @param revenue {Number} revenue
   */
  var exports = function(accountingMethod, contactId, currencyCode, _date, revenue) {
    var _this = this;

    _this['accounting_method'] = accountingMethod;
    _this['contact_id'] = contactId;

    _this['currency_code'] = currencyCode;
    _this['date'] = _date;


    _this['revenue'] = revenue;


  };

  /**
   * Constructs a <code>CustomerRevenue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerRevenue} obj Optional instance to populate.
   * @return {module:model/CustomerRevenue} The populated <code>CustomerRevenue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accounting_method')) {
        obj['accounting_method'] = ApiClient.convertToType(data['accounting_method'], 'String');
      }
      if (data.hasOwnProperty('contact_id')) {
        obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('revenue')) {
        obj['revenue'] = ApiClient.convertToType(data['revenue'], 'Number');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * accounting_method
   * @member {String} accounting_method
   */
  exports.prototype['accounting_method'] = undefined;
  /**
   * contactId
   * @member {String} contact_id
   */
  exports.prototype['contact_id'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * currency_code
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * date
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * metadata
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * revenue
   * @member {Number} revenue
   */
  exports.prototype['revenue'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


