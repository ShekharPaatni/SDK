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
    root.HydrogenIntegrationApi.CardReserveTransferRequestCO = factory(root.HydrogenIntegrationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CardReserveTransferRequestCO model module.
   * @module model/CardReserveTransferRequestCO
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>CardReserveTransferRequestCO</code>.
   * @alias module:model/CardReserveTransferRequestCO
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CardReserveTransferRequestCO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CardReserveTransferRequestCO} obj Optional instance to populate.
   * @return {module:model/CardReserveTransferRequestCO} The populated <code>CardReserveTransferRequestCO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('nucleus_funding_id')) {
        obj['nucleus_funding_id'] = ApiClient.convertToType(data['nucleus_funding_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} nucleus_funding_id
   */
  exports.prototype['nucleus_funding_id'] = undefined;



  return exports;
}));

