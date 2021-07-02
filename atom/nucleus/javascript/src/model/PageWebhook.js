/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.2
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
    define(['ApiClient', 'model/Sort', 'model/Webhook'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Sort'), require('./Webhook'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.PageWebhook = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.Sort, root.HydrogenNucleusApi.Webhook);
  }
}(this, function(ApiClient, Sort, Webhook) {
  'use strict';




  /**
   * The PageWebhook model module.
   * @module model/PageWebhook
   * @version 1.9.2
   */

  /**
   * Constructs a new <code>PageWebhook</code>.
   * Page Object
   * @alias module:model/PageWebhook
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>PageWebhook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PageWebhook} obj Optional instance to populate.
   * @return {module:model/PageWebhook} The populated <code>PageWebhook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], [Webhook]);
      }
      if (data.hasOwnProperty('first')) {
        obj['first'] = ApiClient.convertToType(data['first'], 'Boolean');
      }
      if (data.hasOwnProperty('last')) {
        obj['last'] = ApiClient.convertToType(data['last'], 'Boolean');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'Number');
      }
      if (data.hasOwnProperty('number_of_elements')) {
        obj['number_of_elements'] = ApiClient.convertToType(data['number_of_elements'], 'Number');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], [Sort]);
      }
      if (data.hasOwnProperty('total_elements')) {
        obj['total_elements'] = ApiClient.convertToType(data['total_elements'], 'Number');
      }
      if (data.hasOwnProperty('total_pages')) {
        obj['total_pages'] = ApiClient.convertToType(data['total_pages'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Webhook>} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {Boolean} first
   */
  exports.prototype['first'] = undefined;
  /**
   * @member {Boolean} last
   */
  exports.prototype['last'] = undefined;
  /**
   * @member {Number} number
   */
  exports.prototype['number'] = undefined;
  /**
   * @member {Number} number_of_elements
   */
  exports.prototype['number_of_elements'] = undefined;
  /**
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * @member {Array.<module:model/Sort>} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * @member {Number} total_elements
   */
  exports.prototype['total_elements'] = undefined;
  /**
   * @member {Number} total_pages
   */
  exports.prototype['total_pages'] = undefined;



  return exports;
}));


