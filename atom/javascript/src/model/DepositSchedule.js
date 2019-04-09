/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2-SNAPSHOT
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
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.DepositSchedule = factory(root.atom_api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DepositSchedule model module.
   * @module model/DepositSchedule
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DepositSchedule</code>.
   * @alias module:model/DepositSchedule
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DepositSchedule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DepositSchedule} obj Optional instance to populate.
   * @return {module:model/DepositSchedule} The populated <code>DepositSchedule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('deposit_amount')) {
        obj['deposit_amount'] = ApiClient.convertToType(data['deposit_amount'], 'Number');
      }
      if (data.hasOwnProperty('deposit_frequency_interval')) {
        obj['deposit_frequency_interval'] = ApiClient.convertToType(data['deposit_frequency_interval'], 'String');
      }
      if (data.hasOwnProperty('deposit_duration')) {
        obj['deposit_duration'] = ApiClient.convertToType(data['deposit_duration'], 'Number');
      }
      if (data.hasOwnProperty('adjust_deposit_for_inflation')) {
        obj['adjust_deposit_for_inflation'] = ApiClient.convertToType(data['adjust_deposit_for_inflation'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The periodic deposit amount
   * @member {Number} deposit_amount
   */
  exports.prototype['deposit_amount'] = undefined;
  /**
   * The deposit frequency interval
   * @member {module:model/DepositSchedule.DepositFrequencyIntervalEnum} deposit_frequency_interval
   */
  exports.prototype['deposit_frequency_interval'] = undefined;
  /**
   * The duration of the deposits
   * @member {Number} deposit_duration
   */
  exports.prototype['deposit_duration'] = undefined;
  /**
   * T/F adjust deposit for inflation rate
   * @member {Boolean} adjust_deposit_for_inflation
   */
  exports.prototype['adjust_deposit_for_inflation'] = undefined;


  /**
   * Allowed values for the <code>deposit_frequency_interval</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DepositFrequencyIntervalEnum = {
    /**
     * value: "year"
     * @const
     */
    "year": "year",
    /**
     * value: "month"
     * @const
     */
    "month": "month",
    /**
     * value: "quarter"
     * @const
     */
    "quarter": "quarter",
    /**
     * value: "week"
     * @const
     */
    "week": "week"  };


  return exports;
}));


