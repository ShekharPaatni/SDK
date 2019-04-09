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
    root.atom_api.AnnuityCalculatorAccumulationHorizon = factory(root.atom_api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AnnuityCalculatorAccumulationHorizon model module.
   * @module model/AnnuityCalculatorAccumulationHorizon
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AnnuityCalculatorAccumulationHorizon</code>.
   * @alias module:model/AnnuityCalculatorAccumulationHorizon
   * @class
   * @param portfolioReturn {Number} The annualized portfolio return
   * @param initialBalance {Number} The initial balance of the account
   * @param decumulationHorizon {Number} The number of years in the accumulation period
   * @param annuityAmount {Number} The amount of the annuity payments
   */
  var exports = function(portfolioReturn, initialBalance, decumulationHorizon, annuityAmount) {
    var _this = this;

    _this['portfolio_return'] = portfolioReturn;
    _this['initial_balance'] = initialBalance;
    _this['decumulation_horizon'] = decumulationHorizon;
    _this['annuity_amount'] = annuityAmount;




  };

  /**
   * Constructs a <code>AnnuityCalculatorAccumulationHorizon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnnuityCalculatorAccumulationHorizon} obj Optional instance to populate.
   * @return {module:model/AnnuityCalculatorAccumulationHorizon} The populated <code>AnnuityCalculatorAccumulationHorizon</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('portfolio_return')) {
        obj['portfolio_return'] = ApiClient.convertToType(data['portfolio_return'], 'Number');
      }
      if (data.hasOwnProperty('initial_balance')) {
        obj['initial_balance'] = ApiClient.convertToType(data['initial_balance'], 'Number');
      }
      if (data.hasOwnProperty('decumulation_horizon')) {
        obj['decumulation_horizon'] = ApiClient.convertToType(data['decumulation_horizon'], 'Number');
      }
      if (data.hasOwnProperty('annuity_amount')) {
        obj['annuity_amount'] = ApiClient.convertToType(data['annuity_amount'], 'Number');
      }
      if (data.hasOwnProperty('annuity_frequency_interval')) {
        obj['annuity_frequency_interval'] = ApiClient.convertToType(data['annuity_frequency_interval'], 'String');
      }
      if (data.hasOwnProperty('inflation_rate')) {
        obj['inflation_rate'] = ApiClient.convertToType(data['inflation_rate'], 'Number');
      }
      if (data.hasOwnProperty('tax_rate')) {
        obj['tax_rate'] = ApiClient.convertToType(data['tax_rate'], 'Number');
      }
      if (data.hasOwnProperty('deposit_schedule')) {
        obj['deposit_schedule'] = ApiClient.convertToType(data['deposit_schedule'], Object);
      }
    }
    return obj;
  }

  /**
   * The annualized portfolio return
   * @member {Number} portfolio_return
   */
  exports.prototype['portfolio_return'] = undefined;
  /**
   * The initial balance of the account
   * @member {Number} initial_balance
   */
  exports.prototype['initial_balance'] = undefined;
  /**
   * The number of years in the accumulation period
   * @member {Number} decumulation_horizon
   */
  exports.prototype['decumulation_horizon'] = undefined;
  /**
   * The amount of the annuity payments
   * @member {Number} annuity_amount
   */
  exports.prototype['annuity_amount'] = undefined;
  /**
   * The frequency interval of the annuity
   * @member {module:model/AnnuityCalculatorAccumulationHorizon.AnnuityFrequencyIntervalEnum} annuity_frequency_interval
   * @default 'year'
   */
  exports.prototype['annuity_frequency_interval'] = 'year';
  /**
   * The annualized inflation rate
   * @member {Number} inflation_rate
   */
  exports.prototype['inflation_rate'] = undefined;
  /**
   * The tax rate on withdrawals
   * @member {Number} tax_rate
   */
  exports.prototype['tax_rate'] = undefined;
  /**
   * @member {Object} deposit_schedule
   */
  exports.prototype['deposit_schedule'] = undefined;


  /**
   * Allowed values for the <code>annuity_frequency_interval</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AnnuityFrequencyIntervalEnum = {
    /**
     * value: "year"
     * @const
     */
    "year": "year",
    /**
     * value: "quarter"
     * @const
     */
    "quarter": "quarter",
    /**
     * value: "month"
     * @const
     */
    "month": "month",
    /**
     * value: "week"
     * @const
     */
    "week": "week"  };


  return exports;
}));


