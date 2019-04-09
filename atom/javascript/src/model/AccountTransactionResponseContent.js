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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.AccountTransactionResponseContent = factory(root.atom_api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountTransactionResponseContent model module.
   * @module model/AccountTransactionResponseContent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AccountTransactionResponseContent</code>.
   * @alias module:model/AccountTransactionResponseContent
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>AccountTransactionResponseContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountTransactionResponseContent} obj Optional instance to populate.
   * @return {module:model/AccountTransactionResponseContent} The populated <code>AccountTransactionResponseContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('is_read')) {
        obj['is_read'] = ApiClient.convertToType(data['is_read'], 'Boolean');
      }
      if (data.hasOwnProperty('portfolio_id')) {
        obj['portfolio_id'] = ApiClient.convertToType(data['portfolio_id'], 'String');
      }
      if (data.hasOwnProperty('model_id')) {
        obj['model_id'] = ApiClient.convertToType(data['model_id'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('security_id')) {
        obj['security_id'] = ApiClient.convertToType(data['security_id'], 'String');
      }
      if (data.hasOwnProperty('transaction_code_id')) {
        obj['transaction_code_id'] = ApiClient.convertToType(data['transaction_code_id'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID for the transaction record
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Date for when the transaction occurred
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * Indicates if the transaction has been read. Defaults to false which indicates it has not been read
   * @member {Boolean} is_read
   */
  exports.prototype['is_read'] = undefined;
  /**
   * The ID for the portfolio that the transaction falls under
   * @member {String} portfolio_id
   */
  exports.prototype['portfolio_id'] = undefined;
  /**
   * The ID for the model to which the portfolio that the transaction falls under subscribes
   * @member {String} model_id
   */
  exports.prototype['model_id'] = undefined;
  /**
   * Price at which security was bought or sold included in the transaction
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Quantity of shares of the security purchased
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * The ID of the security included in the transaction
   * @member {String} security_id
   */
  exports.prototype['security_id'] = undefined;
  /**
   * The ID referring to the transaction code, defined by your firm
   * @member {String} transaction_code_id
   */
  exports.prototype['transaction_code_id'] = undefined;
  /**
   * Alternate ID that can be used to identify the object such as an internal id
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * Timestamp for the date and time that the transaction record was created
   * @member {String} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * Timestamp for the date and time that the transaction record was last updated
   * @member {String} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


