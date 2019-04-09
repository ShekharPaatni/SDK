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
    root.atom_api.CampaignPlanPayloadPlanRates = factory(root.atom_api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CampaignPlanPayloadPlanRates model module.
   * @module model/CampaignPlanPayloadPlanRates
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CampaignPlanPayloadPlanRates</code>.
   * @alias module:model/CampaignPlanPayloadPlanRates
   * @class
   * @param maxAsset {Number} Maximum client or account asset size to which the rate applies
   * @param minAsset {Number} Minimum client or account asset size to which the rate applies
   * @param rate {Number} Pricing rate to be applied for this asset size range
   */
  var exports = function(maxAsset, minAsset, rate) {
    var _this = this;

    _this['max_asset'] = maxAsset;
    _this['min_asset'] = minAsset;
    _this['rate'] = rate;
  };

  /**
   * Constructs a <code>CampaignPlanPayloadPlanRates</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignPlanPayloadPlanRates} obj Optional instance to populate.
   * @return {module:model/CampaignPlanPayloadPlanRates} The populated <code>CampaignPlanPayloadPlanRates</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('max_asset')) {
        obj['max_asset'] = ApiClient.convertToType(data['max_asset'], 'Number');
      }
      if (data.hasOwnProperty('min_asset')) {
        obj['min_asset'] = ApiClient.convertToType(data['min_asset'], 'Number');
      }
      if (data.hasOwnProperty('rate')) {
        obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Maximum client or account asset size to which the rate applies
   * @member {Number} max_asset
   */
  exports.prototype['max_asset'] = undefined;
  /**
   * Minimum client or account asset size to which the rate applies
   * @member {Number} min_asset
   */
  exports.prototype['min_asset'] = undefined;
  /**
   * Pricing rate to be applied for this asset size range
   * @member {Number} rate
   */
  exports.prototype['rate'] = undefined;



  return exports;
}));


