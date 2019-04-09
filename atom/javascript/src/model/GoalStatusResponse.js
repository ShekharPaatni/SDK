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
    define(['ApiClient', 'model/GoalRecommendationResponse', 'model/GoalStatusSectionResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GoalRecommendationResponse'), require('./GoalStatusSectionResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.GoalStatusResponse = factory(root.atom_api.ApiClient, root.atom_api.GoalRecommendationResponse, root.atom_api.GoalStatusSectionResponse);
  }
}(this, function(ApiClient, GoalRecommendationResponse, GoalStatusSectionResponse) {
  'use strict';




  /**
   * The GoalStatusResponse model module.
   * @module model/GoalStatusResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GoalStatusResponse</code>.
   * @alias module:model/GoalStatusResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GoalStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalStatusResponse} obj Optional instance to populate.
   * @return {module:model/GoalStatusResponse} The populated <code>GoalStatusResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('current_status')) {
        obj['current_status'] = GoalStatusSectionResponse.constructFromObject(data['current_status']);
      }
      if (data.hasOwnProperty('recommended_status')) {
        obj['recommended_status'] = GoalRecommendationResponse.constructFromObject(data['recommended_status']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/GoalStatusSectionResponse} current_status
   */
  exports.prototype['current_status'] = undefined;
  /**
   * @member {module:model/GoalRecommendationResponse} recommended_status
   */
  exports.prototype['recommended_status'] = undefined;



  return exports;
}));


