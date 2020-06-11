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
    define(['ApiClient', 'model/AllocationNodeMap', 'model/InsuranceCoverageMap', 'model/InsuranceDiscountMap'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AllocationNodeMap'), require('./InsuranceCoverageMap'), require('./InsuranceDiscountMap'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenAtomApi) {
      root.HydrogenAtomApi = {};
    }
    root.HydrogenAtomApi.InsuranceQuote = factory(root.HydrogenAtomApi.ApiClient, root.HydrogenAtomApi.AllocationNodeMap, root.HydrogenAtomApi.InsuranceCoverageMap, root.HydrogenAtomApi.InsuranceDiscountMap);
  }
}(this, function(ApiClient, AllocationNodeMap, InsuranceCoverageMap, InsuranceDiscountMap) {
  'use strict';




  /**
   * The InsuranceQuote model module.
   * @module model/InsuranceQuote
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>InsuranceQuote</code>.
   * Insurance Quote Object
   * @alias module:model/InsuranceQuote
   * @class
   * @param currencyCode {String} currencyCode
   * @param premium {Number} premium
   * @param premiumFrequencyUnit {String} premiumFrequencyUnit
   */
  var exports = function(currencyCode, premium, premiumFrequencyUnit) {
    var _this = this;



    _this['currency_code'] = currencyCode;






    _this['premium'] = premium;


    _this['premium_frequency_unit'] = premiumFrequencyUnit;



  };

  /**
   * Constructs a <code>InsuranceQuote</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InsuranceQuote} obj Optional instance to populate.
   * @return {module:model/InsuranceQuote} The populated <code>InsuranceQuote</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('coverages')) {
        obj['coverages'] = ApiClient.convertToType(data['coverages'], [InsuranceCoverageMap]);
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('discounts')) {
        obj['discounts'] = ApiClient.convertToType(data['discounts'], [InsuranceDiscountMap]);
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('is_active')) {
        obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('node_map')) {
        obj['node_map'] = ApiClient.convertToType(data['node_map'], [AllocationNodeMap]);
      }
      if (data.hasOwnProperty('premium')) {
        obj['premium'] = ApiClient.convertToType(data['premium'], 'Number');
      }
      if (data.hasOwnProperty('premium_duration')) {
        obj['premium_duration'] = ApiClient.convertToType(data['premium_duration'], 'Number');
      }
      if (data.hasOwnProperty('premium_frequency')) {
        obj['premium_frequency'] = ApiClient.convertToType(data['premium_frequency'], 'Number');
      }
      if (data.hasOwnProperty('premium_frequency_unit')) {
        obj['premium_frequency_unit'] = ApiClient.convertToType(data['premium_frequency_unit'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/InsuranceCoverageMap>} coverages
   */
  exports.prototype['coverages'] = undefined;
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
   * @member {Array.<module:model/InsuranceDiscountMap>} discounts
   */
  exports.prototype['discounts'] = undefined;
  /**
   * @member {Date} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * is_active
   * @member {Boolean} is_active
   */
  exports.prototype['is_active'] = undefined;
  /**
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {Array.<module:model/AllocationNodeMap>} node_map
   */
  exports.prototype['node_map'] = undefined;
  /**
   * premium
   * @member {Number} premium
   */
  exports.prototype['premium'] = undefined;
  /**
   * premiumDuration
   * @member {Number} premium_duration
   */
  exports.prototype['premium_duration'] = undefined;
  /**
   * premiumFrequency
   * @member {Number} premium_frequency
   */
  exports.prototype['premium_frequency'] = undefined;
  /**
   * premiumFrequencyUnit
   * @member {String} premium_frequency_unit
   */
  exports.prototype['premium_frequency_unit'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


