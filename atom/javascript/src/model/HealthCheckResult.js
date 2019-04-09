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
    root.atom_api.HealthCheckResult = factory(root.atom_api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HealthCheckResult model module.
   * @module model/HealthCheckResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>HealthCheckResult</code>.
   * @alias module:model/HealthCheckResult
   * @class
   * @param ratioResult {Number} The ratio value
   * @param pass {Boolean} A boolean indicating if ratio_result is sufficiently high. If ratio_result is greater than or equal to the corresponding value from ratio_targets, then pass is true.
   * @param percentileGrade {Number} A linear percentile score for ratio_result on a scale from 0 to 100, where 100 represents the relevant value in ratio_targets.
   */
  var exports = function(ratioResult, pass, percentileGrade) {
    var _this = this;

    _this['ratio_result'] = ratioResult;
    _this['pass'] = pass;
    _this['percentile_grade'] = percentileGrade;
  };

  /**
   * Constructs a <code>HealthCheckResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HealthCheckResult} obj Optional instance to populate.
   * @return {module:model/HealthCheckResult} The populated <code>HealthCheckResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ratio_result')) {
        obj['ratio_result'] = ApiClient.convertToType(data['ratio_result'], 'Number');
      }
      if (data.hasOwnProperty('pass')) {
        obj['pass'] = ApiClient.convertToType(data['pass'], 'Boolean');
      }
      if (data.hasOwnProperty('percentile_grade')) {
        obj['percentile_grade'] = ApiClient.convertToType(data['percentile_grade'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The ratio value
   * @member {Number} ratio_result
   */
  exports.prototype['ratio_result'] = undefined;
  /**
   * A boolean indicating if ratio_result is sufficiently high. If ratio_result is greater than or equal to the corresponding value from ratio_targets, then pass is true.
   * @member {Boolean} pass
   */
  exports.prototype['pass'] = undefined;
  /**
   * A linear percentile score for ratio_result on a scale from 0 to 100, where 100 represents the relevant value in ratio_targets.
   * @member {Number} percentile_grade
   */
  exports.prototype['percentile_grade'] = undefined;



  return exports;
}));


