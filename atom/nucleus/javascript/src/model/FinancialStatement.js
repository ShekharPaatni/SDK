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
    define(['ApiClient', 'model/Stat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Stat'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.FinancialStatement = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.Stat);
  }
}(this, function(ApiClient, Stat) {
  'use strict';




  /**
   * The FinancialStatement model module.
   * @module model/FinancialStatement
   * @version 1.9.2
   */

  /**
   * Constructs a new <code>FinancialStatement</code>.
   * FinancialStatement Object
   * @alias module:model/FinancialStatement
   * @class
   * @param accountingMethod {String} accounting_method
   * @param currencyCode {String} currencyCode
   * @param statementDate {Date} statementDate
   * @param statementType {String} statement_type
   */
  var exports = function(accountingMethod, currencyCode, statementDate, statementType) {
    var _this = this;

    _this['accounting_method'] = accountingMethod;



    _this['currency_code'] = currencyCode;








    _this['statement_date'] = statementDate;
    _this['statement_type'] = statementType;


  };

  /**
   * Constructs a <code>FinancialStatement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FinancialStatement} obj Optional instance to populate.
   * @return {module:model/FinancialStatement} The populated <code>FinancialStatement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accounting_method')) {
        obj['accounting_method'] = ApiClient.convertToType(data['accounting_method'], 'String');
      }
      if (data.hasOwnProperty('business_id')) {
        obj['business_id'] = ApiClient.convertToType(data['business_id'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('period_length')) {
        obj['period_length'] = ApiClient.convertToType(data['period_length'], 'String');
      }
      if (data.hasOwnProperty('period_month')) {
        obj['period_month'] = ApiClient.convertToType(data['period_month'], 'Number');
      }
      if (data.hasOwnProperty('period_quarter')) {
        obj['period_quarter'] = ApiClient.convertToType(data['period_quarter'], 'Number');
      }
      if (data.hasOwnProperty('period_type')) {
        obj['period_type'] = ApiClient.convertToType(data['period_type'], 'String');
      }
      if (data.hasOwnProperty('period_year')) {
        obj['period_year'] = ApiClient.convertToType(data['period_year'], 'Number');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('statement_date')) {
        obj['statement_date'] = ApiClient.convertToType(data['statement_date'], 'Date');
      }
      if (data.hasOwnProperty('statement_type')) {
        obj['statement_type'] = ApiClient.convertToType(data['statement_type'], 'String');
      }
      if (data.hasOwnProperty('stats')) {
        obj['stats'] = ApiClient.convertToType(data['stats'], [Stat]);
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
   * businessId
   * @member {String} business_id
   */
  exports.prototype['business_id'] = undefined;
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
   * currencyCode
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * periodLength
   * @member {String} period_length
   */
  exports.prototype['period_length'] = undefined;
  /**
   * periodMonth
   * @member {Number} period_month
   */
  exports.prototype['period_month'] = undefined;
  /**
   * periodQuarter
   * @member {Number} period_quarter
   */
  exports.prototype['period_quarter'] = undefined;
  /**
   * periodType
   * @member {String} period_type
   */
  exports.prototype['period_type'] = undefined;
  /**
   * periodYear
   * @member {Number} period_year
   */
  exports.prototype['period_year'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * statementDate
   * @member {Date} statement_date
   */
  exports.prototype['statement_date'] = undefined;
  /**
   * statement_type
   * @member {String} statement_type
   */
  exports.prototype['statement_type'] = undefined;
  /**
   * stats
   * @member {Array.<module:model/Stat>} stats
   */
  exports.prototype['stats'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


