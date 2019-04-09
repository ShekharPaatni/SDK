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
    root.atom_api.HoldingsDetail = factory(root.atom_api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HoldingsDetail model module.
   * @module model/HoldingsDetail
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>HoldingsDetail</code>.
   * @alias module:model/HoldingsDetail
   * @class
   * @param _date {String} The date for the holding details.
   * @param tickers {Array.<String>} The tickers of the holdings.
   * @param weights {Array.<Number>} The weights of the holdings, represented on a percentage basis.
   * @param amount {Array.<Number>} The total value for each security.
   */
  var exports = function(_date, tickers, weights, amount) {
    var _this = this;

    _this['date'] = _date;
    _this['tickers'] = tickers;
    _this['weights'] = weights;
    _this['amount'] = amount;
  };

  /**
   * Constructs a <code>HoldingsDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HoldingsDetail} obj Optional instance to populate.
   * @return {module:model/HoldingsDetail} The populated <code>HoldingsDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
      if (data.hasOwnProperty('tickers')) {
        obj['tickers'] = ApiClient.convertToType(data['tickers'], ['String']);
      }
      if (data.hasOwnProperty('weights')) {
        obj['weights'] = ApiClient.convertToType(data['weights'], ['Number']);
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * The date for the holding details.
   * @member {String} date
   */
  exports.prototype['date'] = undefined;
  /**
   * The tickers of the holdings.
   * @member {Array.<String>} tickers
   */
  exports.prototype['tickers'] = undefined;
  /**
   * The weights of the holdings, represented on a percentage basis.
   * @member {Array.<Number>} weights
   */
  exports.prototype['weights'] = undefined;
  /**
   * The total value for each security.
   * @member {Array.<Number>} amount
   */
  exports.prototype['amount'] = undefined;



  return exports;
}));


