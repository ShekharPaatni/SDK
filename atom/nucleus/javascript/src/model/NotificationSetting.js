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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.NotificationSetting = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NotificationSetting model module.
   * @module model/NotificationSetting
   * @version 1.9.0
   */

  /**
   * Constructs a new <code>NotificationSetting</code>.
   * Notification Setting Object
   * @alias module:model/NotificationSetting
   * @class
   * @param clientId {String} client_id
   * @param notificationId {String} notification_id
   */
  var exports = function(clientId, notificationId) {
    var _this = this;

    _this['client_id'] = clientId;







    _this['notification_id'] = notificationId;



  };

  /**
   * Constructs a <code>NotificationSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificationSetting} obj Optional instance to populate.
   * @return {module:model/NotificationSetting} The populated <code>NotificationSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('frequency')) {
        obj['frequency'] = ApiClient.convertToType(data['frequency'], 'Number');
      }
      if (data.hasOwnProperty('frequency_unit')) {
        obj['frequency_unit'] = ApiClient.convertToType(data['frequency_unit'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('is_receive')) {
        obj['is_receive'] = ApiClient.convertToType(data['is_receive'], 'Boolean');
      }
      if (data.hasOwnProperty('last_run_date')) {
        obj['last_run_date'] = ApiClient.convertToType(data['last_run_date'], 'Date');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('notification_id')) {
        obj['notification_id'] = ApiClient.convertToType(data['notification_id'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('threshold_value')) {
        obj['threshold_value'] = ApiClient.convertToType(data['threshold_value'], 'Number');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * client_id
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * frequency
   * @member {Number} frequency
   */
  exports.prototype['frequency'] = undefined;
  /**
   * frequency_unit
   * @member {String} frequency_unit
   */
  exports.prototype['frequency_unit'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * is_receive
   * @member {Boolean} is_receive
   */
  exports.prototype['is_receive'] = undefined;
  /**
   * last_run_date
   * @member {Date} last_run_date
   */
  exports.prototype['last_run_date'] = undefined;
  /**
   * metadata
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * notification_id
   * @member {String} notification_id
   */
  exports.prototype['notification_id'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * @member {Number} threshold_value
   */
  exports.prototype['threshold_value'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


