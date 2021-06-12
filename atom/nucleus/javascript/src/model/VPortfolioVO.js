/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.1
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.VPortfolioVO = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VPortfolioVO model module.
   * @module model/VPortfolioVO
   * @version 1.9.1
   */

  /**
   * Constructs a new <code>VPortfolioVO</code>.
   * @alias module:model/VPortfolioVO
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>VPortfolioVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VPortfolioVO} obj Optional instance to populate.
   * @return {module:model/VPortfolioVO} The populated <code>VPortfolioVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('goal_asset_size_by_portfolio')) {
        obj['goal_asset_size_by_portfolio'] = ApiClient.convertToType(data['goal_asset_size_by_portfolio'], 'Number');
      }
      if (data.hasOwnProperty('goal_asset_size_by_portfolio_date')) {
        obj['goal_asset_size_by_portfolio_date'] = ApiClient.convertToType(data['goal_asset_size_by_portfolio_date'], 'Date');
      }
      if (data.hasOwnProperty('portfolio_id')) {
        obj['portfolio_id'] = ApiClient.convertToType(data['portfolio_id'], 'String');
      }
      if (data.hasOwnProperty('portfolio_name')) {
        obj['portfolio_name'] = ApiClient.convertToType(data['portfolio_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} goal_asset_size_by_portfolio
   */
  exports.prototype['goal_asset_size_by_portfolio'] = undefined;
  /**
   * @member {Date} goal_asset_size_by_portfolio_date
   */
  exports.prototype['goal_asset_size_by_portfolio_date'] = undefined;
  /**
   * @member {String} portfolio_id
   */
  exports.prototype['portfolio_id'] = undefined;
  /**
   * @member {String} portfolio_name
   */
  exports.prototype['portfolio_name'] = undefined;



  return exports;
}));


