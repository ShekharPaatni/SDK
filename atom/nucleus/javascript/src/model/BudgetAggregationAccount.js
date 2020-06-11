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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenAtomApi) {
      root.HydrogenAtomApi = {};
    }
    root.HydrogenAtomApi.BudgetAggregationAccount = factory(root.HydrogenAtomApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BudgetAggregationAccount model module.
   * @module model/BudgetAggregationAccount
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>BudgetAggregationAccount</code>.
   * @alias module:model/BudgetAggregationAccount
   * @class
   * @param aggregationAccountId {String} node_id
   */
  var exports = function(aggregationAccountId) {
    var _this = this;

    _this['aggregation_account_id'] = aggregationAccountId;
  };

  /**
   * Constructs a <code>BudgetAggregationAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BudgetAggregationAccount} obj Optional instance to populate.
   * @return {module:model/BudgetAggregationAccount} The populated <code>BudgetAggregationAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('aggregation_account_id')) {
        obj['aggregation_account_id'] = ApiClient.convertToType(data['aggregation_account_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * node_id
   * @member {String} aggregation_account_id
   */
  exports.prototype['aggregation_account_id'] = undefined;



  return exports;
}));


