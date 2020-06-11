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
    root.HydrogenAtomApi.AccountClientsOverviewVO = factory(root.HydrogenAtomApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountClientsOverviewVO model module.
   * @module model/AccountClientsOverviewVO
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>AccountClientsOverviewVO</code>.
   * @alias module:model/AccountClientsOverviewVO
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>AccountClientsOverviewVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountClientsOverviewVO} obj Optional instance to populate.
   * @return {module:model/AccountClientsOverviewVO} The populated <code>AccountClientsOverviewVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('client_account_association')) {
        obj['client_account_association'] = ApiClient.convertToType(data['client_account_association'], 'String');
      }
      if (data.hasOwnProperty('client_first_name')) {
        obj['client_first_name'] = ApiClient.convertToType(data['client_first_name'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('client_last_name')) {
        obj['client_last_name'] = ApiClient.convertToType(data['client_last_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} client_account_association
   */
  exports.prototype['client_account_association'] = undefined;
  /**
   * @member {String} client_first_name
   */
  exports.prototype['client_first_name'] = undefined;
  /**
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {String} client_last_name
   */
  exports.prototype['client_last_name'] = undefined;



  return exports;
}));


