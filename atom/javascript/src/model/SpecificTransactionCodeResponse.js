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
    define(['ApiClient', 'model/CreateTransactionCodeResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreateTransactionCodeResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.SpecificTransactionCodeResponse = factory(root.atom_api.ApiClient, root.atom_api.CreateTransactionCodeResponse);
  }
}(this, function(ApiClient, CreateTransactionCodeResponse) {
  'use strict';




  /**
   * The SpecificTransactionCodeResponse model module.
   * @module model/SpecificTransactionCodeResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SpecificTransactionCodeResponse</code>.
   * @alias module:model/SpecificTransactionCodeResponse
   * @class
   * @implements module:model/CreateTransactionCodeResponse
   * @param transactionCode {String} Usually a standard short combination of letters and numbers used to identify the transaction code within your firm
   */
  var exports = function(transactionCode) {
    var _this = this;

    CreateTransactionCodeResponse.call(_this, transactionCode);

  };

  /**
   * Constructs a <code>SpecificTransactionCodeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpecificTransactionCodeResponse} obj Optional instance to populate.
   * @return {module:model/SpecificTransactionCodeResponse} The populated <code>SpecificTransactionCodeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      CreateTransactionCodeResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'String');
      }
    }
    return obj;
  }

  /**
   * Datetime the transaction code was last updated
   * @member {String} update_date
   */
  exports.prototype['update_date'] = undefined;

  // Implement CreateTransactionCodeResponse interface:
  /**
   * Usually a standard short combination of letters and numbers used to identify the transaction code within your firm
   * @member {String} transaction_code
   */
exports.prototype['transaction_code'] = undefined;

  /**
   * Short description to clarify the type of transaction
   * @member {String} transaction_code_description
   */
exports.prototype['transaction_code_description'] = undefined;

  /**
   * Name of the transaction code such as “Customer Payment”
   * @member {String} transaction_type
   */
exports.prototype['transaction_type'] = undefined;

  /**
   * Grouping of similar transaction codes
   * @member {String} category
   */
exports.prototype['category'] = undefined;

  /**
   * Sub-grouping of similar transaction codes
   * @member {String} subcategory
   */
exports.prototype['subcategory'] = undefined;

  /**
   * Indicates if the transaction is to buy securities. Defaults to false which means it is a sell transaction.
   * @member {Boolean} is_buy
   * @default false
   */
exports.prototype['is_buy'] = false;

  /**
   * ID of the transaction code
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * Datetime the transaction code was created
   * @member {String} create_date
   */
exports.prototype['create_date'] = undefined;



  return exports;
}));


