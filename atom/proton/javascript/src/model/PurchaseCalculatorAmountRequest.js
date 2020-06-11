/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.7.18
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
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
    if (!root.HydrogenProtonApi) {
      root.HydrogenProtonApi = {};
    }
    root.HydrogenProtonApi.PurchaseCalculatorAmountRequest = factory(root.HydrogenProtonApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PurchaseCalculatorAmountRequest model module.
   * @module model/PurchaseCalculatorAmountRequest
   * @version 1.7.18
   */

  /**
   * Constructs a new <code>PurchaseCalculatorAmountRequest</code>.
   * @alias module:model/PurchaseCalculatorAmountRequest
   * @class
   * @param portfolioReturn {Number} 
   * @param purchaseHorizon {Number} 
   */
  var exports = function(portfolioReturn, purchaseHorizon) {
    this.portfolioReturn = portfolioReturn;
    this.purchaseHorizon = purchaseHorizon;
  };

  /**
   * Constructs a <code>PurchaseCalculatorAmountRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PurchaseCalculatorAmountRequest} obj Optional instance to populate.
   * @return {module:model/PurchaseCalculatorAmountRequest} The populated <code>PurchaseCalculatorAmountRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('deposit_schedule'))
        obj.depositSchedule = ApiClient.convertToType(data['deposit_schedule'], Object);
      if (data.hasOwnProperty('portfolio_return'))
        obj.portfolioReturn = ApiClient.convertToType(data['portfolio_return'], 'Number');
      if (data.hasOwnProperty('inflation_rate'))
        obj.inflationRate = ApiClient.convertToType(data['inflation_rate'], 'Number');
      if (data.hasOwnProperty('investment_tax'))
        obj.investmentTax = ApiClient.convertToType(data['investment_tax'], 'Number');
      if (data.hasOwnProperty('purchase_horizon'))
        obj.purchaseHorizon = ApiClient.convertToType(data['purchase_horizon'], 'Number');
      if (data.hasOwnProperty('aggregation_account_ids'))
        obj.aggregationAccountIds = ApiClient.convertToType(data['aggregation_account_ids'], ['String']);
      if (data.hasOwnProperty('account_ids'))
        obj.accountIds = ApiClient.convertToType(data['account_ids'], ['String']);
      if (data.hasOwnProperty('current_savings'))
        obj.currentSavings = ApiClient.convertToType(data['current_savings'], 'Number');
      if (data.hasOwnProperty('horizon_frequency_interval'))
        obj.horizonFrequencyInterval = ApiClient.convertToType(data['horizon_frequency_interval'], 'String');
    }
    return obj;
  }

  /**
   * @member {Object} depositSchedule
   */
  exports.prototype.depositSchedule = undefined;

  /**
   * @member {Number} portfolioReturn
   */
  exports.prototype.portfolioReturn = undefined;

  /**
   * @member {Number} inflationRate
   * @default 0.0
   */
  exports.prototype.inflationRate = 0.0;

  /**
   * @member {Number} investmentTax
   * @default 0.0
   */
  exports.prototype.investmentTax = 0.0;

  /**
   * @member {Number} purchaseHorizon
   */
  exports.prototype.purchaseHorizon = undefined;

  /**
   * @member {Array.<String>} aggregationAccountIds
   */
  exports.prototype.aggregationAccountIds = undefined;

  /**
   * @member {Array.<String>} accountIds
   */
  exports.prototype.accountIds = undefined;

  /**
   * @member {Number} currentSavings
   * @default 0.0
   */
  exports.prototype.currentSavings = 0.0;

  /**
   * @member {module:model/PurchaseCalculatorAmountRequest.HorizonFrequencyIntervalEnum} horizonFrequencyInterval
   * @default 'year'
   */
  exports.prototype.horizonFrequencyInterval = 'year';


  /**
   * Allowed values for the <code>horizonFrequencyInterval</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HorizonFrequencyIntervalEnum = {
    /**
     * value: "year"
     * @const
     */
    year: "year",

    /**
     * value: "quarter"
     * @const
     */
    quarter: "quarter",

    /**
     * value: "month"
     * @const
     */
    month: "month",

    /**
     * value: "week"
     * @const
     */
    week: "week"
  };

  return exports;

}));
