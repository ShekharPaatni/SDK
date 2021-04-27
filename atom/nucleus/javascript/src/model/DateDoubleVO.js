/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.0
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
    root.HydrogenNucleusApi.DateDoubleVO = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DateDoubleVO model module.
   * @module model/DateDoubleVO
   * @version 1.9.0
   */

  /**
   * Constructs a new <code>DateDoubleVO</code>.
   * Date-Double Mapping Object
   * @alias module:model/DateDoubleVO
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DateDoubleVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DateDoubleVO} obj Optional instance to populate.
   * @return {module:model/DateDoubleVO} The populated <code>DateDoubleVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additions')) {
        obj['additions'] = ApiClient.convertToType(data['additions'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
    }
    return obj;
  }

  /**
   * additions
   * @member {Number} additions
   */
  exports.prototype['additions'] = undefined;
  /**
   * date
   * @member {String} date
   */
  exports.prototype['date'] = undefined;
  /**
   * value
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


