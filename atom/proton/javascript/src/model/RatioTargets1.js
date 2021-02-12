/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.8.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
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
    root.HydrogenProtonApi.RatioTargets1 = factory(root.HydrogenProtonApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RatioTargets1 model module.
   * @module model/RatioTargets1
   * @version 1.8.0
   */

  /**
   * Constructs a new <code>RatioTargets1</code>.
   * @alias module:model/RatioTargets1
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RatioTargets1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RatioTargets1} obj Optional instance to populate.
   * @return {module:model/RatioTargets1} The populated <code>RatioTargets1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('profit_margin'))
        obj.profitMargin = ApiClient.convertToType(data['profit_margin'], 'Number');
      if (data.hasOwnProperty('return_on_assets'))
        obj.returnOnAssets = ApiClient.convertToType(data['return_on_assets'], 'Number');
      if (data.hasOwnProperty('debt_to_equity'))
        obj.debtToEquity = ApiClient.convertToType(data['debt_to_equity'], 'Number');
      if (data.hasOwnProperty('return_on_equity'))
        obj.returnOnEquity = ApiClient.convertToType(data['return_on_equity'], 'Number');
      if (data.hasOwnProperty('debt_ratio'))
        obj.debtRatio = ApiClient.convertToType(data['debt_ratio'], 'Number');
      if (data.hasOwnProperty('asset_turnover'))
        obj.assetTurnover = ApiClient.convertToType(data['asset_turnover'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} profitMargin
   * @default 0.1
   */
  exports.prototype.profitMargin = 0.1;

  /**
   * @member {Number} returnOnAssets
   * @default 0.05
   */
  exports.prototype.returnOnAssets = 0.05;

  /**
   * @member {Number} debtToEquity
   * @default 1.5
   */
  exports.prototype.debtToEquity = 1.5;

  /**
   * @member {Number} returnOnEquity
   * @default 0.15
   */
  exports.prototype.returnOnEquity = 0.15;

  /**
   * @member {Number} debtRatio
   * @default 0.5
   */
  exports.prototype.debtRatio = 0.5;

  /**
   * @member {Number} assetTurnover
   * @default 1.0
   */
  exports.prototype.assetTurnover = 1.0;

  return exports;

}));