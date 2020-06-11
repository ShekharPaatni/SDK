/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.7.18
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
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
    if (!root.HydrogenProtonApi) {
      root.HydrogenProtonApi = {};
    }
    root.HydrogenProtonApi.GoalConfig = factory(root.HydrogenProtonApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GoalConfig model module.
   * @module model/GoalConfig
   * @version 1.7.18
   */

  /**
   * Constructs a new <code>GoalConfig</code>.
   * @alias module:model/GoalConfig
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GoalConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalConfig} obj Optional instance to populate.
   * @return {module:model/GoalConfig} The populated <code>GoalConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('goal_amount'))
        obj.goalAmount = ApiClient.convertToType(data['goal_amount'], 'Number');
      if (data.hasOwnProperty('goal_inflation'))
        obj.goalInflation = ApiClient.convertToType(data['goal_inflation'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} goalAmount
   */
  exports.prototype.goalAmount = undefined;

  /**
   * @member {Number} goalInflation
   * @default 0.0
   */
  exports.prototype.goalInflation = 0.0;

  return exports;

}));
