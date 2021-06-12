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
    define(['ApiClient', 'model/BusinessAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BusinessAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.BusinessDetailsVO = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.BusinessAddress);
  }
}(this, function(ApiClient, BusinessAddress) {
  'use strict';




  /**
   * The BusinessDetailsVO model module.
   * @module model/BusinessDetailsVO
   * @version 1.9.1
   */

  /**
   * Constructs a new <code>BusinessDetailsVO</code>.
   * Business Details Mapping Object
   * @alias module:model/BusinessDetailsVO
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>BusinessDetailsVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BusinessDetailsVO} obj Optional instance to populate.
   * @return {module:model/BusinessDetailsVO} The populated <code>BusinessDetailsVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], [BusinessAddress]);
      }
      if (data.hasOwnProperty('business_id')) {
        obj['business_id'] = ApiClient.convertToType(data['business_id'], 'String');
      }
      if (data.hasOwnProperty('dba_name')) {
        obj['dba_name'] = ApiClient.convertToType(data['dba_name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('legal_name')) {
        obj['legal_name'] = ApiClient.convertToType(data['legal_name'], 'String');
      }
      if (data.hasOwnProperty('website')) {
        obj['website'] = ApiClient.convertToType(data['website'], 'String');
      }
    }
    return obj;
  }

  /**
   * address
   * @member {Array.<module:model/BusinessAddress>} address
   */
  exports.prototype['address'] = undefined;
  /**
   * businessId
   * @member {String} business_id
   */
  exports.prototype['business_id'] = undefined;
  /**
   * dbaName
   * @member {String} dba_name
   */
  exports.prototype['dba_name'] = undefined;
  /**
   * email
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * legalName
   * @member {String} legal_name
   */
  exports.prototype['legal_name'] = undefined;
  /**
   * website
   * @member {String} website
   */
  exports.prototype['website'] = undefined;



  return exports;
}));


