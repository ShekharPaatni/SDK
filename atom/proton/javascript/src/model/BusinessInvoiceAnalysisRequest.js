/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.9.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Periods'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Periods'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenProtonApi) {
      root.HydrogenProtonApi = {};
    }
    root.HydrogenProtonApi.BusinessInvoiceAnalysisRequest = factory(root.HydrogenProtonApi.ApiClient, root.HydrogenProtonApi.Periods);
  }
}(this, function(ApiClient, Periods) {
  'use strict';

  /**
   * The BusinessInvoiceAnalysisRequest model module.
   * @module model/BusinessInvoiceAnalysisRequest
   * @version 1.9.1
   */

  /**
   * Constructs a new <code>BusinessInvoiceAnalysisRequest</code>.
   * @alias module:model/BusinessInvoiceAnalysisRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BusinessInvoiceAnalysisRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BusinessInvoiceAnalysisRequest} obj Optional instance to populate.
   * @return {module:model/BusinessInvoiceAnalysisRequest} The populated <code>BusinessInvoiceAnalysisRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('currency_code'))
        obj.currencyCode = ApiClient.convertToType(data['currency_code'], 'String');
      if (data.hasOwnProperty('client_id'))
        obj.clientId = ApiClient.convertToType(data['client_id'], 'String');
      if (data.hasOwnProperty('show_history'))
        obj.showHistory = ApiClient.convertToType(data['show_history'], 'Boolean');
      if (data.hasOwnProperty('show_outstanding_invoices'))
        obj.showOutstandingInvoices = ApiClient.convertToType(data['show_outstanding_invoices'], 'Boolean');
      if (data.hasOwnProperty('response_limit'))
        obj.responseLimit = ApiClient.convertToType(data['response_limit'], 'Number');
      if (data.hasOwnProperty('end_date'))
        obj.endDate = ApiClient.convertToType(data['end_date'], 'Date');
      if (data.hasOwnProperty('history_frequency_interval'))
        obj.historyFrequencyInterval = ApiClient.convertToType(data['history_frequency_interval'], 'String');
      if (data.hasOwnProperty('currency_conversion'))
        obj.currencyConversion = ApiClient.convertToType(data['currency_conversion'], 'String');
      if (data.hasOwnProperty('start_date'))
        obj.startDate = ApiClient.convertToType(data['start_date'], 'Date');
      if (data.hasOwnProperty('future_due_periods'))
        obj.futureDuePeriods = ApiClient.convertToType(data['future_due_periods'], [Periods]);
      if (data.hasOwnProperty('overdue_periods'))
        obj.overduePeriods = ApiClient.convertToType(data['overdue_periods'], [Periods]);
      if (data.hasOwnProperty('business_id'))
        obj.businessId = ApiClient.convertToType(data['business_id'], 'String');
      if (data.hasOwnProperty('invoice_ids'))
        obj.invoiceIds = ApiClient.convertToType(data['invoice_ids'], ['String']);
      if (data.hasOwnProperty('customer_id'))
        obj.customerId = ApiClient.convertToType(data['customer_id'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} currencyCode
   */
  exports.prototype.currencyCode = undefined;

  /**
   * @member {String} clientId
   */
  exports.prototype.clientId = undefined;

  /**
   * @member {Boolean} showHistory
   * @default false
   */
  exports.prototype.showHistory = false;

  /**
   * @member {Boolean} showOutstandingInvoices
   * @default false
   */
  exports.prototype.showOutstandingInvoices = false;

  /**
   * @member {Number} responseLimit
   * @default 10
   */
  exports.prototype.responseLimit = 10;

  /**
   * @member {Date} endDate
   */
  exports.prototype.endDate = undefined;

  /**
   * @member {module:model/BusinessInvoiceAnalysisRequest.HistoryFrequencyIntervalEnum} historyFrequencyInterval
   * @default 'month'
   */
  exports.prototype.historyFrequencyInterval = 'month';

  /**
   * @member {String} currencyConversion
   */
  exports.prototype.currencyConversion = undefined;

  /**
   * @member {Date} startDate
   */
  exports.prototype.startDate = undefined;

  /**
   * @member {Array.<module:model/Periods>} futureDuePeriods
   */
  exports.prototype.futureDuePeriods = undefined;

  /**
   * @member {Array.<module:model/Periods>} overduePeriods
   */
  exports.prototype.overduePeriods = undefined;

  /**
   * @member {String} businessId
   */
  exports.prototype.businessId = undefined;

  /**
   * @member {Array.<String>} invoiceIds
   */
  exports.prototype.invoiceIds = undefined;

  /**
   * @member {String} customerId
   */
  exports.prototype.customerId = undefined;



  /**
   * Allowed values for the <code>historyFrequencyInterval</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HistoryFrequencyIntervalEnum = {
    /**
     * value: "day"
     * @const
     */
    day: "day",

    /**
     * value: "week"
     * @const
     */
    week: "week",

    /**
     * value: "month"
     * @const
     */
    month: "month",

    /**
     * value: "quarter"
     * @const
     */
    quarter: "quarter",

    /**
     * value: "year"
     * @const
     */
    year: "year"
  };

  return exports;

}));
