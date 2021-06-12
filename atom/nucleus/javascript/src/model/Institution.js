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
    root.HydrogenNucleusApi.Institution = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Institution model module.
   * @module model/Institution
   * @version 1.9.1
   */

  /**
   * Constructs a new <code>Institution</code>.
   * Institution Object
   * @alias module:model/Institution
   * @class
   * @param name {String} name
   */
  var exports = function(name) {
    var _this = this;






    _this['name'] = name;


  };

  /**
   * Constructs a <code>Institution</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Institution} obj Optional instance to populate.
   * @return {module:model/Institution} The populated <code>Institution</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('logo_url_medium')) {
        obj['logo_url_medium'] = ApiClient.convertToType(data['logo_url_medium'], 'String');
      }
      if (data.hasOwnProperty('logo_url_small')) {
        obj['logo_url_small'] = ApiClient.convertToType(data['logo_url_small'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
      if (data.hasOwnProperty('website_url')) {
        obj['website_url'] = ApiClient.convertToType(data['website_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * code
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * logo_url_medium
   * @member {String} logo_url_medium
   */
  exports.prototype['logo_url_medium'] = undefined;
  /**
   * logo_url_small
   * @member {String} logo_url_small
   */
  exports.prototype['logo_url_small'] = undefined;
  /**
   * name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;
  /**
   * website_url
   * @member {String} website_url
   */
  exports.prototype['website_url'] = undefined;



  return exports;
}));


