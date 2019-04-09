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
    define(['ApiClient', 'model/Address', 'model/SecondaryId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./SecondaryId'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.ClientPayload = factory(root.atom_api.ApiClient, root.atom_api.Address, root.atom_api.SecondaryId);
  }
}(this, function(ApiClient, Address, SecondaryId) {
  'use strict';




  /**
   * The ClientPayload model module.
   * @module model/ClientPayload
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ClientPayload</code>.
   * @alias module:model/ClientPayload
   * @class
   * @param username {String} Username for the client used on the firm’s platform
   * @param clientType {module:model/ClientPayload.ClientTypeEnum} 
   */
  var exports = function(username, clientType) {
    var _this = this;

    _this['username'] = username;
    _this['client_type'] = clientType;















  };

  /**
   * Constructs a <code>ClientPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientPayload} obj Optional instance to populate.
   * @return {module:model/ClientPayload} The populated <code>ClientPayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('client_type')) {
        obj['client_type'] = ApiClient.convertToType(data['client_type'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('middle_name')) {
        obj['middle_name'] = ApiClient.convertToType(data['middle_name'], 'String');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('phone_number')) {
        obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
      }
      if (data.hasOwnProperty('date_of_birth')) {
        obj['date_of_birth'] = ApiClient.convertToType(data['date_of_birth'], 'Date');
      }
      if (data.hasOwnProperty('identification_number')) {
        obj['identification_number'] = ApiClient.convertToType(data['identification_number'], 'String');
      }
      if (data.hasOwnProperty('country_of_residence')) {
        obj['country_of_residence'] = ApiClient.convertToType(data['country_of_residence'], 'String');
      }
      if (data.hasOwnProperty('is_verified')) {
        obj['is_verified'] = ApiClient.convertToType(data['is_verified'], 'Boolean');
      }
      if (data.hasOwnProperty('hydro_id')) {
        obj['hydro_id'] = ApiClient.convertToType(data['hydro_id'], 'String');
      }
      if (data.hasOwnProperty('is_active')) {
        obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], [Address]);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = SecondaryId.constructFromObject(data['secondary_id']);
      }
    }
    return obj;
  }

  /**
   * Username for the client used on the firm’s platform
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {module:model/ClientPayload.ClientTypeEnum} client_type
   */
  exports.prototype['client_type'] = undefined;
  /**
   * Contact email for the client in the format sample@example.com
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The title of the client such as “Mr.”, “Ms.”, “Miss”, “Mx.”, etc.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * First name or given name of the client
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * Middle name of the client
   * @member {String} middle_name
   */
  exports.prototype['middle_name'] = undefined;
  /**
   * Last name or surname of the client
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * Phone number associated with the client
   * @member {String} phone_number
   */
  exports.prototype['phone_number'] = undefined;
  /**
   * Date of birth of the client in the ISO 8601 format YYYY-MM-DD
   * @member {Date} date_of_birth
   */
  exports.prototype['date_of_birth'] = undefined;
  /**
   * National or local identification number for a client such as Social Security Number, frequently used for Know-Your-Customer (KYC) purposes
   * @member {String} identification_number
   */
  exports.prototype['identification_number'] = undefined;
  /**
   * The country of residence of a client, often corresponding to the country issuing the identification number provided above using the ISO ALPHA-2 Code, frequently used for Know-Your-Customer (KYC) purposes
   * @member {String} country_of_residence
   */
  exports.prototype['country_of_residence'] = undefined;
  /**
   * Indicator if the identifying details provided by the client have been verified by a Know-Your-Customer (KYC) vendor. Defaults to false which indicates it is not verified
   * @member {Boolean} is_verified
   * @default false
   */
  exports.prototype['is_verified'] = false;
  /**
   * The Hydro ID associated with the client (if applicable). Corresponds to the Client Hydro entity
   * @member {String} hydro_id
   */
  exports.prototype['hydro_id'] = undefined;
  /**
   * Indicates if the client is currently active. Defaults to true which indicates it is active
   * @member {Boolean} is_active
   * @default true
   */
  exports.prototype['is_active'] = true;
  /**
   * @member {Array.<module:model/Address>} address
   */
  exports.prototype['address'] = undefined;
  /**
   * Custom information associated with the client in the format key:value
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {module:model/SecondaryId} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;


  /**
   * Allowed values for the <code>client_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ClientTypeEnum = {
    /**
     * value: "individual"
     * @const
     */
    "individual": "individual",
    /**
     * value: "firm"
     * @const
     */
    "firm": "firm",
    /**
     * value: "admin"
     * @const
     */
    "admin": "admin",
    /**
     * value: "advisor"
     * @const
     */
    "advisor": "advisor"  };


  return exports;
}));


