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
    root.HydrogenNucleusApi.InvoicePayment = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InvoicePayment model module.
   * @module model/InvoicePayment
   * @version 1.9.2
   */

  /**
   * Constructs a new <code>InvoicePayment</code>.
   * InvoicePayment Object
   * @alias module:model/InvoicePayment
   * @class
   * @param currencyCode {String} currency_code
   * @param invoiceId {String} invoiceId
   * @param paymentAmount {Number} paymentAmount
   * @param paymentDate {Date} paymentDate
   */
  var exports = function(currencyCode, invoiceId, paymentAmount, paymentDate) {
    var _this = this;


    _this['currency_code'] = currencyCode;

    _this['invoice_id'] = invoiceId;

    _this['payment_amount'] = paymentAmount;
    _this['payment_date'] = paymentDate;


  };

  /**
   * Constructs a <code>InvoicePayment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoicePayment} obj Optional instance to populate.
   * @return {module:model/InvoicePayment} The populated <code>InvoicePayment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('invoice_id')) {
        obj['invoice_id'] = ApiClient.convertToType(data['invoice_id'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('payment_amount')) {
        obj['payment_amount'] = ApiClient.convertToType(data['payment_amount'], 'Number');
      }
      if (data.hasOwnProperty('payment_date')) {
        obj['payment_date'] = ApiClient.convertToType(data['payment_date'], 'Date');
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
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * currency_code
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * invoiceId
   * @member {String} invoice_id
   */
  exports.prototype['invoice_id'] = undefined;
  /**
   * metadata
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * paymentAmount
   * @member {Number} payment_amount
   */
  exports.prototype['payment_amount'] = undefined;
  /**
   * paymentDate
   * @member {Date} payment_date
   */
  exports.prototype['payment_date'] = undefined;
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


