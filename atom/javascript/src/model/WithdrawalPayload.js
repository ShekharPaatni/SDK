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
    define(['ApiClient', 'model/SecondaryId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SecondaryId'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.WithdrawalPayload = factory(root.atom_api.ApiClient, root.atom_api.SecondaryId);
  }
}(this, function(ApiClient, SecondaryId) {
  'use strict';




  /**
   * The WithdrawalPayload model module.
   * @module model/WithdrawalPayload
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>WithdrawalPayload</code>.
   * @alias module:model/WithdrawalPayload
   * @class
   * @param accountId {String} The ID for the account that is the destination of the withdrawal
   * @param amount {Number} Amount that is being withdrawn from the account
   * @param fundingId {String} The ID of the funding record that maps to this withdrawal
   * @param withdrawalDate {String} Date and time that the withdrawal was made
   */
  var exports = function(accountId, amount, fundingId, withdrawalDate) {
    var _this = this;

    _this['account_id'] = accountId;
    _this['amount'] = amount;
    _this['funding_id'] = fundingId;
    _this['withdrawal_date'] = withdrawalDate;










  };

  /**
   * Constructs a <code>WithdrawalPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WithdrawalPayload} obj Optional instance to populate.
   * @return {module:model/WithdrawalPayload} The populated <code>WithdrawalPayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('funding_id')) {
        obj['funding_id'] = ApiClient.convertToType(data['funding_id'], 'String');
      }
      if (data.hasOwnProperty('withdrawal_date')) {
        obj['withdrawal_date'] = ApiClient.convertToType(data['withdrawal_date'], 'String');
      }
      if (data.hasOwnProperty('account_number')) {
        obj['account_number'] = ApiClient.convertToType(data['account_number'], 'String');
      }
      if (data.hasOwnProperty('comments')) {
        obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('fees')) {
        obj['fees'] = ApiClient.convertToType(data['fees'], 'String');
      }
      if (data.hasOwnProperty('last_request_date')) {
        obj['last_request_date'] = ApiClient.convertToType(data['last_request_date'], 'String');
      }
      if (data.hasOwnProperty('received_date')) {
        obj['received_date'] = ApiClient.convertToType(data['received_date'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('status_time_stamp')) {
        obj['status_time_stamp'] = ApiClient.convertToType(data['status_time_stamp'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = SecondaryId.constructFromObject(data['secondary_id']);
      }
    }
    return obj;
  }

  /**
   * The ID for the account that is the destination of the withdrawal
   * @member {String} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * Amount that is being withdrawn from the account
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * The ID of the funding record that maps to this withdrawal
   * @member {String} funding_id
   */
  exports.prototype['funding_id'] = undefined;
  /**
   * Date and time that the withdrawal was made
   * @member {String} withdrawal_date
   */
  exports.prototype['withdrawal_date'] = undefined;
  /**
   * Bank account number that is the destination of the withdrawal
   * @member {String} account_number
   */
  exports.prototype['account_number'] = undefined;
  /**
   * Comment for the withdrawal such as “Funded”
   * @member {String} comments
   */
  exports.prototype['comments'] = undefined;
  /**
   * Label to indicate the direction of the transaction such as “Incoming” or “Outgoing”
   * @member {String} direction
   */
  exports.prototype['direction'] = undefined;
  /**
   * Any fees associated with the withdrawal, especially for an investment account
   * @member {String} fees
   */
  exports.prototype['fees'] = undefined;
  /**
   * In the case of recurring withdrawals, the date and time that the withdrawal was last requested
   * @member {String} last_request_date
   */
  exports.prototype['last_request_date'] = undefined;
  /**
   * Date and time that the withdrawal was received
   * @member {String} received_date
   */
  exports.prototype['received_date'] = undefined;
  /**
   * Status of the transaction such as “Processing”
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Date and time that the status of the record was last updated
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



  return exports;
}));


