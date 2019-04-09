/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SecurityPayload', 'model/SecurityPayloadSecurityComposition', 'model/SecurityPayloadSecurityCountry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SecurityPayload'), require('./SecurityPayloadSecurityComposition'), require('./SecurityPayloadSecurityCountry'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.CreateSecurityResponse = factory(root.atom_api.ApiClient, root.atom_api.SecurityPayload, root.atom_api.SecurityPayloadSecurityComposition, root.atom_api.SecurityPayloadSecurityCountry);
  }
}(this, function(ApiClient, SecurityPayload, SecurityPayloadSecurityComposition, SecurityPayloadSecurityCountry) {
  'use strict';




  /**
   * The CreateSecurityResponse model module.
   * @module model/CreateSecurityResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateSecurityResponse</code>.
   * @alias module:model/CreateSecurityResponse
   * @class
   * @implements module:model/SecurityPayload
   * @param name {String} Name for the security
   * @param ticker {String} Security’s ticker on the exchange where it is traded
   */
  var exports = function(name, ticker) {
    var _this = this;

    SecurityPayload.call(_this, name, ticker);


  };

  /**
   * Constructs a <code>CreateSecurityResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSecurityResponse} obj Optional instance to populate.
   * @return {module:model/CreateSecurityResponse} The populated <code>CreateSecurityResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      SecurityPayload.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the security
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Datetime the security was created
   * @member {String} create_date
   */
  exports.prototype['create_date'] = undefined;

  // Implement SecurityPayload interface:
  /**
   * Name for the security
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * Security’s ticker on the exchange where it is traded
   * @member {String} ticker
   */
exports.prototype['ticker'] = undefined;

  /**
   * The asset class for the security such as “equity”, “fixed-income”, “cash”, etc.
   * @member {String} asset_class
   */
exports.prototype['asset_class'] = undefined;

  /**
   * Sector for the security such as “Technology” or “Pharmaceuticals”
   * @member {String} sector
   */
exports.prototype['sector'] = undefined;

  /**
   * The industry of the security such as “Consumer Tech” or “Enterprise Systems”
   * @member {String} industry
   */
exports.prototype['industry'] = undefined;

  /**
   * The security class of the security such as “stock”, “mutual fund”, “ETF” (exchange-traded fund), etc.
   * @member {String} security_class
   */
exports.prototype['security_class'] = undefined;

  /**
   * The exchange on which the security is traded
   * @member {String} exchange
   */
exports.prototype['exchange'] = undefined;

  /**
   * Indicates if the security is active. Defaults to true which indicates that the it is active
   * @member {Boolean} is_active
   * @default true
   */
exports.prototype['is_active'] = true;

  /**
   * Details on the components of a security, their relative weight within the security, and their start and end dates
   * @member {Array.<module:model/SecurityPayloadSecurityComposition>} security_composition
   */
exports.prototype['security_composition'] = undefined;

  /**
   * Each country where the security is traded and its relative weight within the security
   * @member {Array.<module:model/SecurityPayloadSecurityCountry>} security_country
   */
exports.prototype['security_country'] = undefined;



  return exports;
}));


