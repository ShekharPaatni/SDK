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
    root.atom_api.OptScorePortfolio = factory(root.atom_api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OptScorePortfolio model module.
   * @module model/OptScorePortfolio
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OptScorePortfolio</code>.
   * @alias module:model/OptScorePortfolio
   * @class
   * @param tickers {Array.<String>} Tickers in the portfolio.
   * @param weights {Array.<Number>} Weights in the current portfolio, corresponding to tickers.
   * @param _return {Number} The annualized mean return.
   * @param risk {Number} The annualized standard deviation of returns.
   */
  var exports = function(tickers, weights, _return, risk) {
    var _this = this;

    _this['tickers'] = tickers;
    _this['weights'] = weights;
    _this['return'] = _return;
    _this['risk'] = risk;
  };

  /**
   * Constructs a <code>OptScorePortfolio</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptScorePortfolio} obj Optional instance to populate.
   * @return {module:model/OptScorePortfolio} The populated <code>OptScorePortfolio</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tickers')) {
        obj['tickers'] = ApiClient.convertToType(data['tickers'], ['String']);
      }
      if (data.hasOwnProperty('weights')) {
        obj['weights'] = ApiClient.convertToType(data['weights'], ['Number']);
      }
      if (data.hasOwnProperty('return')) {
        obj['return'] = ApiClient.convertToType(data['return'], 'Number');
      }
      if (data.hasOwnProperty('risk')) {
        obj['risk'] = ApiClient.convertToType(data['risk'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Tickers in the portfolio.
   * @member {Array.<String>} tickers
   */
  exports.prototype['tickers'] = undefined;
  /**
   * Weights in the current portfolio, corresponding to tickers.
   * @member {Array.<Number>} weights
   */
  exports.prototype['weights'] = undefined;
  /**
   * The annualized mean return.
   * @member {Number} return
   */
  exports.prototype['return'] = undefined;
  /**
   * The annualized standard deviation of returns.
   * @member {Number} risk
   */
  exports.prototype['risk'] = undefined;



  return exports;
}));


