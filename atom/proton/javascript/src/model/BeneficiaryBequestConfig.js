/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.9.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
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
    if (!root.HydrogenProtonApi) {
      root.HydrogenProtonApi = {};
    }
    root.HydrogenProtonApi.BeneficiaryBequestConfig = factory(root.HydrogenProtonApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BeneficiaryBequestConfig model module.
   * @module model/BeneficiaryBequestConfig
   * @version 1.9.1
   */

  /**
   * Constructs a new <code>BeneficiaryBequestConfig</code>.
   * @alias module:model/BeneficiaryBequestConfig
   * @class
   * @param bequestAmount {Number} 
   */
  var exports = function(bequestAmount) {
    this.bequestAmount = bequestAmount;
  };

  /**
   * Constructs a <code>BeneficiaryBequestConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BeneficiaryBequestConfig} obj Optional instance to populate.
   * @return {module:model/BeneficiaryBequestConfig} The populated <code>BeneficiaryBequestConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('bequest_amount'))
        obj.bequestAmount = ApiClient.convertToType(data['bequest_amount'], 'Number');
      if (data.hasOwnProperty('bequest_duration'))
        obj.bequestDuration = ApiClient.convertToType(data['bequest_duration'], 'Number');
      if (data.hasOwnProperty('years_until_bequest'))
        obj.yearsUntilBequest = ApiClient.convertToType(data['years_until_bequest'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} bequestAmount
   */
  exports.prototype.bequestAmount = undefined;

  /**
   * @member {Number} bequestDuration
   * @default 10
   */
  exports.prototype.bequestDuration = 10;

  /**
   * @member {Number} yearsUntilBequest
   * @default 0
   */
  exports.prototype.yearsUntilBequest = 0;


  return exports;

}));
