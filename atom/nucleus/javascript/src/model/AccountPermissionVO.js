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
    define(['ApiClient', 'model/PermissionVO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PermissionVO'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.AccountPermissionVO = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.PermissionVO);
  }
}(this, function(ApiClient, PermissionVO) {
  'use strict';




  /**
   * The AccountPermissionVO model module.
   * @module model/AccountPermissionVO
   * @version 1.9.2
   */

  /**
   * Constructs a new <code>AccountPermissionVO</code>.
   * AccountPermissionVO Object
   * @alias module:model/AccountPermissionVO
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AccountPermissionVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountPermissionVO} obj Optional instance to populate.
   * @return {module:model/AccountPermissionVO} The populated <code>AccountPermissionVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
      }
      if (data.hasOwnProperty('clients')) {
        obj['clients'] = ApiClient.convertToType(data['clients'], [PermissionVO]);
      }
    }
    return obj;
  }

  /**
   * accountId
   * @member {String} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * PermissionVO
   * @member {Array.<module:model/PermissionVO>} clients
   */
  exports.prototype['clients'] = undefined;



  return exports;
}));


