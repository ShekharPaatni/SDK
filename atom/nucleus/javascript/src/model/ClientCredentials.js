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
    root.HydrogenNucleusApi.ClientCredentials = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClientCredentials model module.
   * @module model/ClientCredentials
   * @version 1.9.2
   */

  /**
   * Constructs a new <code>ClientCredentials</code>.
   * @alias module:model/ClientCredentials
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ClientCredentials</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientCredentials} obj Optional instance to populate.
   * @return {module:model/ClientCredentials} The populated <code>ClientCredentials</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('current_password')) {
        obj['current_password'] = ApiClient.convertToType(data['current_password'], 'String');
      }
      if (data.hasOwnProperty('new_password')) {
        obj['new_password'] = ApiClient.convertToType(data['new_password'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} current_password
   */
  exports.prototype['current_password'] = undefined;
  /**
   * @member {String} new_password
   */
  exports.prototype['new_password'] = undefined;
  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;



  return exports;
}));


