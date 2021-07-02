/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.2
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
    root.HydrogenNucleusApi.Currency = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Currency model module.
   * @module model/Currency
   * @version 1.9.2
   */

  /**
   * Constructs a new <code>Currency</code>.
   * Currency Object
   * @alias module:model/Currency
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Currency} obj Optional instance to populate.
   * @return {module:model/Currency} The populated <code>Currency</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alphabetic_code')) {
        obj['alphabetic_code'] = ApiClient.convertToType(data['alphabetic_code'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('numeric_code')) {
        obj['numeric_code'] = ApiClient.convertToType(data['numeric_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * alphabetic_code
   * @member {String} alphabetic_code
   */
  exports.prototype['alphabetic_code'] = undefined;
  /**
   * currency
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * numeric_code
   * @member {String} numeric_code
   */
  exports.prototype['numeric_code'] = undefined;



  return exports;
}));


