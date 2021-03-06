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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenIntegrationApi) {
      root.HydrogenIntegrationApi = {};
    }
    root.HydrogenIntegrationApi.AchClientRequestCO = factory(root.HydrogenIntegrationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AchClientRequestCO model module.
   * @module model/AchClientRequestCO
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>AchClientRequestCO</code>.
   * @alias module:model/AchClientRequestCO
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AchClientRequestCO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AchClientRequestCO} obj Optional instance to populate.
   * @return {module:model/AchClientRequestCO} The populated <code>AchClientRequestCO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('kyc_required')) {
        obj['kyc_required'] = ApiClient.convertToType(data['kyc_required'], 'Boolean');
      }
      if (data.hasOwnProperty('nucleus_client_id')) {
        obj['nucleus_client_id'] = ApiClient.convertToType(data['nucleus_client_id'], 'String');
      }
      if (data.hasOwnProperty('vendor_request')) {
        obj['vendor_request'] = ApiClient.convertToType(data['vendor_request'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} kyc_required
   */
  exports.prototype['kyc_required'] = undefined;
  /**
   * @member {String} nucleus_client_id
   */
  exports.prototype['nucleus_client_id'] = undefined;
  /**
   * @member {Object} vendor_request
   */
  exports.prototype['vendor_request'] = undefined;



  return exports;
}));


