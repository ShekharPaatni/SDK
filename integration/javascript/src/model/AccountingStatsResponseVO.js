/**
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.3.0
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
    define(['ApiClient', 'model/FinancialStatement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FinancialStatement'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.AccountingStatsResponseVO = factory(root.HydrogenIntegrationApi.ApiClient, root.HydrogenIntegrationApi.FinancialStatement);
  }
}(this, function(ApiClient, FinancialStatement) {
  'use strict';




  /**
   * The AccountingStatsResponseVO model module.
   * @module model/AccountingStatsResponseVO
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>AccountingStatsResponseVO</code>.
   * @alias module:model/AccountingStatsResponseVO
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AccountingStatsResponseVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountingStatsResponseVO} obj Optional instance to populate.
   * @return {module:model/AccountingStatsResponseVO} The populated <code>AccountingStatsResponseVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('body')) {
        obj['body'] = FinancialStatement.constructFromObject(data['body']);
      }
      if (data.hasOwnProperty('status_code')) {
        obj['status_code'] = ApiClient.convertToType(data['status_code'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/FinancialStatement} body
   */
  exports.prototype['body'] = undefined;
  /**
   * @member {Number} status_code
   */
  exports.prototype['status_code'] = undefined;



  return exports;
}));


