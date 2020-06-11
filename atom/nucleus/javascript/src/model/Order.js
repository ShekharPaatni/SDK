/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenAtomApi) {
      root.HydrogenAtomApi = {};
    }
    root.HydrogenAtomApi.Order = factory(root.HydrogenAtomApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Order model module.
   * @module model/Order
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>Order</code>.
   * Order Object
   * @alias module:model/Order
   * @class
   * @param _date {Date} date
   * @param orderTicketId {String} orderTicketId
   * @param quantity {Number} quantity
   * @param securityId {String} securityId
   * @param transactionCodeId {String} transactionCodeId
   */
  var exports = function(_date, orderTicketId, quantity, securityId, transactionCodeId) {
    var _this = this;



    _this['date'] = _date;





    _this['order_ticket_id'] = orderTicketId;



    _this['quantity'] = quantity;

    _this['security_id'] = securityId;

    _this['transaction_code_id'] = transactionCodeId;

  };

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Order} obj Optional instance to populate.
   * @return {module:model/Order} The populated <code>Order</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('is_read')) {
        obj['is_read'] = ApiClient.convertToType(data['is_read'], 'Boolean');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('model_id')) {
        obj['model_id'] = ApiClient.convertToType(data['model_id'], 'String');
      }
      if (data.hasOwnProperty('order_bulk_id')) {
        obj['order_bulk_id'] = ApiClient.convertToType(data['order_bulk_id'], 'String');
      }
      if (data.hasOwnProperty('order_ticket_id')) {
        obj['order_ticket_id'] = ApiClient.convertToType(data['order_ticket_id'], 'String');
      }
      if (data.hasOwnProperty('order_type')) {
        obj['order_type'] = ApiClient.convertToType(data['order_type'], 'String');
      }
      if (data.hasOwnProperty('portfolio_id')) {
        obj['portfolio_id'] = ApiClient.convertToType(data['portfolio_id'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('security_id')) {
        obj['security_id'] = ApiClient.convertToType(data['security_id'], 'String');
      }
      if (data.hasOwnProperty('tmp_tracker_id')) {
        obj['tmp_tracker_id'] = ApiClient.convertToType(data['tmp_tracker_id'], 'String');
      }
      if (data.hasOwnProperty('transaction_code_id')) {
        obj['transaction_code_id'] = ApiClient.convertToType(data['transaction_code_id'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * accountId
   * @member {String} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * date
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * isRead
   * @member {Boolean} is_read
   */
  exports.prototype['is_read'] = undefined;
  /**
   * metadata
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * modelId
   * @member {String} model_id
   */
  exports.prototype['model_id'] = undefined;
  /**
   * orderBulkId
   * @member {String} order_bulk_id
   */
  exports.prototype['order_bulk_id'] = undefined;
  /**
   * orderTicketId
   * @member {String} order_ticket_id
   */
  exports.prototype['order_ticket_id'] = undefined;
  /**
   * orderType
   * @member {String} order_type
   */
  exports.prototype['order_type'] = undefined;
  /**
   * portfolioId
   * @member {String} portfolio_id
   */
  exports.prototype['portfolio_id'] = undefined;
  /**
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * quantity
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * securityId
   * @member {String} security_id
   */
  exports.prototype['security_id'] = undefined;
  /**
   * @member {String} tmp_tracker_id
   */
  exports.prototype['tmp_tracker_id'] = undefined;
  /**
   * transactionCodeId
   * @member {String} transaction_code_id
   */
  exports.prototype['transaction_code_id'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


