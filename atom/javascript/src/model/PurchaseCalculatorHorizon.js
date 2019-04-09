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
    root.atom_api.PurchaseCalculatorHorizon = factory(root.atom_api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PurchaseCalculatorHorizon model module.
   * @module model/PurchaseCalculatorHorizon
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PurchaseCalculatorHorizon</code>.
   * @alias module:model/PurchaseCalculatorHorizon
   * @class
   * @param purchaseAmount {Number} The amount of the purchase
   * @param portfolioReturn {Number} The annualized portfolio return
   */
  var exports = function(purchaseAmount, portfolioReturn) {
    var _this = this;

    _this['purchase_amount'] = purchaseAmount;
    _this['portfolio_return'] = portfolioReturn;





  };

  /**
   * Constructs a <code>PurchaseCalculatorHorizon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PurchaseCalculatorHorizon} obj Optional instance to populate.
   * @return {module:model/PurchaseCalculatorHorizon} The populated <code>PurchaseCalculatorHorizon</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('purchase_amount')) {
        obj['purchase_amount'] = ApiClient.convertToType(data['purchase_amount'], 'Number');
      }
      if (data.hasOwnProperty('portfolio_return')) {
        obj['portfolio_return'] = ApiClient.convertToType(data['portfolio_return'], 'Number');
      }
      if (data.hasOwnProperty('horizon_frequency_interval')) {
        obj['horizon_frequency_interval'] = ApiClient.convertToType(data['horizon_frequency_interval'], 'String');
      }
      if (data.hasOwnProperty('current_savings')) {
        obj['current_savings'] = ApiClient.convertToType(data['current_savings'], 'Number');
      }
      if (data.hasOwnProperty('deposit_schedule')) {
        obj['deposit_schedule'] = ApiClient.convertToType(data['deposit_schedule'], Object);
      }
      if (data.hasOwnProperty('inflation_rate')) {
        obj['inflation_rate'] = ApiClient.convertToType(data['inflation_rate'], 'Number');
      }
      if (data.hasOwnProperty('investment_tax')) {
        obj['investment_tax'] = ApiClient.convertToType(data['investment_tax'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The amount of the purchase
   * @member {Number} purchase_amount
   */
  exports.prototype['purchase_amount'] = undefined;
  /**
   * The annualized portfolio return
   * @member {Number} portfolio_return
   */
  exports.prototype['portfolio_return'] = undefined;
  /**
   * The horizon frequency interval
   * @member {module:model/PurchaseCalculatorHorizon.HorizonFrequencyIntervalEnum} horizon_frequency_interval
   * @default 'year'
   */
  exports.prototype['horizon_frequency_interval'] = 'year';
  /**
   * The current savings amount
   * @member {Number} current_savings
   */
  exports.prototype['current_savings'] = undefined;
  /**
   * @member {Object} deposit_schedule
   */
  exports.prototype['deposit_schedule'] = undefined;
  /**
   * The inflation rate
   * @member {Number} inflation_rate
   */
  exports.prototype['inflation_rate'] = undefined;
  /**
   * The tax on investments used for the major purchase
   * @member {Number} investment_tax
   */
  exports.prototype['investment_tax'] = undefined;


  /**
   * Allowed values for the <code>horizon_frequency_interval</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HorizonFrequencyIntervalEnum = {
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


