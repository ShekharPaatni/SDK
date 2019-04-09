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
    define(['ApiClient', 'model/ModelTransactionPayload', 'model/SecondaryId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelTransactionPayload'), require('./SecondaryId'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.CreateModelTransactionResponse = factory(root.atom_api.ApiClient, root.atom_api.ModelTransactionPayload, root.atom_api.SecondaryId);
  }
}(this, function(ApiClient, ModelTransactionPayload, SecondaryId) {
  'use strict';




  /**
   * The CreateModelTransactionResponse model module.
   * @module model/CreateModelTransactionResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateModelTransactionResponse</code>.
   * @alias module:model/CreateModelTransactionResponse
   * @class
   * @implements module:model/ModelTransactionPayload
   * @param shares {Number} Number of shares of the security purchased as part of the transaction
   * @param price {Number} Security price at which the shares were purchased as part of the transaction
   * @param _date {Date} Date of the transaction
   * @param modelId {String} The ID of the model that the transaction record falls under
   * @param securityId {String} The ID of the security included in the transaction
   * @param transactionCodeId {Number} The ID referring to the transaction codes defined by your firm
   */
  var exports = function(shares, price, _date, modelId, securityId, transactionCodeId) {
    var _this = this;

    ModelTransactionPayload.call(_this, shares, price, _date, modelId, securityId, transactionCodeId);


  };

  /**
   * Constructs a <code>CreateModelTransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateModelTransactionResponse} obj Optional instance to populate.
   * @return {module:model/CreateModelTransactionResponse} The populated <code>CreateModelTransactionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ModelTransactionPayload.constructFromObject(data, obj);
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
   * ID of the model transaction
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Datetime the model transaction was created
   * @member {String} create_date
   */
  exports.prototype['create_date'] = undefined;

  // Implement ModelTransactionPayload interface:
  /**
   * Number of shares of the security purchased as part of the transaction
   * @member {Number} shares
   */
exports.prototype['shares'] = undefined;

  /**
   * Security price at which the shares were purchased as part of the transaction
   * @member {Number} price
   */
exports.prototype['price'] = undefined;

  /**
   * Date of the transaction
   * @member {Date} date
   */
exports.prototype['date'] = undefined;

  /**
   * The ID of the model that the transaction record falls under
   * @member {String} model_id
   */
exports.prototype['model_id'] = undefined;

  /**
   * The ID of the security included in the transaction
   * @member {String} security_id
   */
exports.prototype['security_id'] = undefined;

  /**
   * The ID referring to the transaction codes defined by your firm
   * @member {Number} transaction_code_id
   */
exports.prototype['transaction_code_id'] = undefined;

  /**
   * @member {module:model/SecondaryId} secondary_id
   */
exports.prototype['secondary_id'] = undefined;



  return exports;
}));


