/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.1
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
    root.HydrogenNucleusApi.ModelHoldingVO = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModelHoldingVO model module.
   * @module model/ModelHoldingVO
   * @version 1.9.1
   */

  /**
   * Constructs a new <code>ModelHoldingVO</code>.
   * @alias module:model/ModelHoldingVO
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ModelHoldingVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelHoldingVO} obj Optional instance to populate.
   * @return {module:model/ModelHoldingVO} The populated <code>ModelHoldingVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('current_weight')) {
        obj['current_weight'] = ApiClient.convertToType(data['current_weight'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('security_id')) {
        obj['security_id'] = ApiClient.convertToType(data['security_id'], 'String');
      }
      if (data.hasOwnProperty('strategic_weight')) {
        obj['strategic_weight'] = ApiClient.convertToType(data['strategic_weight'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} current_weight
   */
  exports.prototype['current_weight'] = undefined;
  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {String} security_id
   */
  exports.prototype['security_id'] = undefined;
  /**
   * @member {Number} strategic_weight
   */
  exports.prototype['strategic_weight'] = undefined;



  return exports;
}));


