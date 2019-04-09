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
    root.atom_api.ChangeModelCompositionResponseInner = factory(root.atom_api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChangeModelCompositionResponseInner model module.
   * @module model/ChangeModelCompositionResponseInner
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ChangeModelCompositionResponseInner</code>.
   * @alias module:model/ChangeModelCompositionResponseInner
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>ChangeModelCompositionResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeModelCompositionResponseInner} obj Optional instance to populate.
   * @return {module:model/ChangeModelCompositionResponseInner} The populated <code>ChangeModelCompositionResponseInner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('shares')) {
        obj['shares'] = ApiClient.convertToType(data['shares'], 'Number');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('model_id')) {
        obj['model_id'] = ApiClient.convertToType(data['model_id'], 'String');
      }
      if (data.hasOwnProperty('security_id')) {
        obj['security_id'] = ApiClient.convertToType(data['security_id'], 'String');
      }
      if (data.hasOwnProperty('transaction_code_id')) {
        obj['transaction_code_id'] = ApiClient.convertToType(data['transaction_code_id'], 'String');
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
   * The ID of the model transaction record created
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
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
   * @member {String} transaction_code_id
   */
  exports.prototype['transaction_code_id'] = undefined;
  /**
   * Timestamp for the date and time that the record was created
   * @member {String} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * Timestamp for the date and time that the record was last updated
   * @member {String} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


