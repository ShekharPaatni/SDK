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
    root.HydrogenIntegrationApi.MdQuoteRequestCO = factory(root.HydrogenIntegrationApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MdQuoteRequestCO model module.
   * @module model/MdQuoteRequestCO
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>MdQuoteRequestCO</code>.
   * @alias module:model/MdQuoteRequestCO
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>MdQuoteRequestCO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MdQuoteRequestCO} obj Optional instance to populate.
   * @return {module:model/MdQuoteRequestCO} The populated <code>MdQuoteRequestCO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('nucleus_security_id')) {
        obj['nucleus_security_id'] = ApiClient.convertToType(data['nucleus_security_id'], ['String']);
      }
      if (data.hasOwnProperty('product')) {
        obj['product'] = ApiClient.convertToType(data['product'], 'String');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], ['String']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} nucleus_security_id
   */
  exports.prototype['nucleus_security_id'] = undefined;
  /**
   * @member {String} product
   */
  exports.prototype['product'] = undefined;
  /**
   * @member {Array.<String>} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * @member {module:model/MdQuoteRequestCO.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "delayed"
     * @const
     */
    "delayed": "delayed",
    /**
     * value: "realtime"
     * @const
     */
    "realtime": "realtime"  };


  return exports;
}));


