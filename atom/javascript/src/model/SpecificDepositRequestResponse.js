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
    define(['ApiClient', 'model/CreateDepositRequestResponse', 'model/SecondaryId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateDepositRequestResponse'), require('./SecondaryId'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.SpecificDepositRequestResponse = factory(root.atom_api.ApiClient, root.atom_api.CreateDepositRequestResponse, root.atom_api.SecondaryId);
  }
}(this, function(ApiClient, CreateDepositRequestResponse, SecondaryId) {
  'use strict';




  /**
   * The SpecificDepositRequestResponse model module.
   * @module model/SpecificDepositRequestResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SpecificDepositRequestResponse</code>.
   * @alias module:model/SpecificDepositRequestResponse
   * @class
   * @implements module:model/CreateDepositRequestResponse
   * @param accountId {String} The ID for the account that is the destination of the deposit
   * @param amount {Number} Amount that is being deposited
   * @param fundingId {String} The ID of the funding record that maps to this deposit
   * @param investedDate {String} Date and time that the funds should be pulled from the funding request to be invested
   */
  var exports = function(accountId, amount, fundingId, investedDate) {
    var _this = this;

    CreateDepositRequestResponse.call(_this, accountId, amount, fundingId, investedDate);

  };

  /**
   * Constructs a <code>SpecificDepositRequestResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpecificDepositRequestResponse} obj Optional instance to populate.
   * @return {module:model/SpecificDepositRequestResponse} The populated <code>SpecificDepositRequestResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      CreateDepositRequestResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'String');
      }
    }
    return obj;
  }

  /**
   * Datetime the deposit request was last updated
   * @member {String} update_date
   */
  exports.prototype['update_date'] = undefined;

  // Implement CreateDepositRequestResponse interface:
  /**
   * The ID for the account that is the destination of the deposit
   * @member {String} account_id
   */
exports.prototype['account_id'] = undefined;

  /**
   * Amount that is being deposited
   * @member {Number} amount
   */
exports.prototype['amount'] = undefined;

  /**
   * The ID of the funding record that maps to this deposit
   * @member {String} funding_id
   */
exports.prototype['funding_id'] = undefined;

  /**
   * Date and time that the funds should be pulled from the funding request to be invested
   * @member {String} invested_date
   */
exports.prototype['invested_date'] = undefined;

  /**
   * Bank account number that is the source of the deposit
   * @member {String} account_number
   */
exports.prototype['account_number'] = undefined;

  /**
   * Comment for the deposit such as “Funded”
   * @member {String} comments
   */
exports.prototype['comments'] = undefined;

  /**
   * Label to indicate the direction of the transaction such as “Incoming” or “Outgoing”
   * @member {String} direction
   */
exports.prototype['direction'] = undefined;

  /**
   * In the case of recurring deposits, the last date and time that the deposit was last requested
   * @member {String} last_request_date
   */
exports.prototype['last_request_date'] = undefined;

  /**
   * Date and time that the deposit was received into the account
   * @member {String} received_date
   */
exports.prototype['received_date'] = undefined;

  /**
   * Status of the deposit transaction such as “Processing”. Use this field to track the status of the individual deposit if it is associated with a recurring Funding request
   * @member {String} status
   */
exports.prototype['status'] = undefined;

  /**
   * Date and time that the record was last updated
   * @member {String} status_time_stamp
   */
exports.prototype['status_time_stamp'] = undefined;

  /**
   * Indicates the payment type such as “check, “wire”, etc.
   * @member {String} type
   */
exports.prototype['type'] = undefined;

  /**
   * @member {module:model/SecondaryId} secondary_id
   */
exports.prototype['secondary_id'] = undefined;

  /**
   * ID of the deposit request
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * Datetime the deposit request was last updated
   * @member {String} create_date
   */
exports.prototype['create_date'] = undefined;



  return exports;
}));


