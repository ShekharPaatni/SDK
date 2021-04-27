/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.0
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
    define(['ApiClient', 'model/ClientAccountMapping', 'model/GoalAccountMapping'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClientAccountMapping'), require('./GoalAccountMapping'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.Account = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.ClientAccountMapping, root.HydrogenNucleusApi.GoalAccountMapping);
  }
}(this, function(ApiClient, ClientAccountMapping, GoalAccountMapping) {
  'use strict';




  /**
   * The Account model module.
   * @module model/Account
   * @version 1.9.0
   */

  /**
   * Constructs a new <code>Account</code>.
   * Account Object
   * @alias module:model/Account
   * @class
   * @param accountTypeId {String} accountTypeId
   * @param name {String} name
   */
  var exports = function(accountTypeId, name) {
    var _this = this;


    _this['account_type_id'] = accountTypeId;









    _this['name'] = name;



  };

  /**
   * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Account} obj Optional instance to populate.
   * @return {module:model/Account} The populated <code>Account</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account_number')) {
        obj['account_number'] = ApiClient.convertToType(data['account_number'], 'String');
      }
      if (data.hasOwnProperty('account_type_id')) {
        obj['account_type_id'] = ApiClient.convertToType(data['account_type_id'], 'String');
      }
      if (data.hasOwnProperty('clients')) {
        obj['clients'] = ApiClient.convertToType(data['clients'], [ClientAccountMapping]);
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('discretionary')) {
        obj['discretionary'] = ApiClient.convertToType(data['discretionary'], 'Boolean');
      }
      if (data.hasOwnProperty('goals')) {
        obj['goals'] = ApiClient.convertToType(data['goals'], [GoalAccountMapping]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('is_active')) {
        obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
      }
      if (data.hasOwnProperty('managed')) {
        obj['managed'] = ApiClient.convertToType(data['managed'], 'Boolean');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * accountNumber
   * @member {String} account_number
   */
  exports.prototype['account_number'] = undefined;
  /**
   * accountTypeId
   * @member {String} account_type_id
   */
  exports.prototype['account_type_id'] = undefined;
  /**
   * @member {Array.<module:model/ClientAccountMapping>} clients
   */
  exports.prototype['clients'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * currencyCode
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * discretionary
   * @member {Boolean} discretionary
   */
  exports.prototype['discretionary'] = undefined;
  /**
   * @member {Array.<module:model/GoalAccountMapping>} goals
   */
  exports.prototype['goals'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * isActive
   * @member {Boolean} is_active
   */
  exports.prototype['is_active'] = undefined;
  /**
   * managed
   * @member {Boolean} managed
   */
  exports.prototype['managed'] = undefined;
  /**
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * status
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


