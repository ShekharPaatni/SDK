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
    root.HydrogenAtomApi.Location = factory(root.HydrogenAtomApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Location model module.
   * @module model/Location
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>Location</code>.
   * Location Object
   * @alias module:model/Location
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Location} obj Optional instance to populate.
   * @return {module:model/Location} The populated <code>Location</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address_line1')) {
        obj['address_line1'] = ApiClient.convertToType(data['address_line1'], 'String');
      }
      if (data.hasOwnProperty('address_line2')) {
        obj['address_line2'] = ApiClient.convertToType(data['address_line2'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
      if (data.hasOwnProperty('postalcode')) {
        obj['postalcode'] = ApiClient.convertToType(data['postalcode'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
    }
    return obj;
  }

  /**
   * addressLine1
   * @member {String} address_line1
   */
  exports.prototype['address_line1'] = undefined;
  /**
   * addressLine2
   * @member {String} address_line2
   */
  exports.prototype['address_line2'] = undefined;
  /**
   * city
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * country
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * latitude
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;
  /**
   * longitude
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;
  /**
   * postalcode
   * @member {String} postalcode
   */
  exports.prototype['postalcode'] = undefined;
  /**
   * state
   * @member {String} state
   */
  exports.prototype['state'] = undefined;



  return exports;
}));


