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
    root.atom_api.RiskAllocation = factory(root.atom_api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RiskAllocation model module.
   * @module model/RiskAllocation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RiskAllocation</code>.
   * @alias module:model/RiskAllocation
   * @class
   * @param riskScore {Number} A risk score from 0 to 100
   * @param allocationMethod {module:model/RiskAllocation.AllocationMethodEnum} The portfolio standard deviation
   */
  var exports = function(riskScore, allocationMethod) {
    var _this = this;

    _this['risk_score'] = riskScore;
    _this['allocation_method'] = allocationMethod;


  };

  /**
   * Constructs a <code>RiskAllocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RiskAllocation} obj Optional instance to populate.
   * @return {module:model/RiskAllocation} The populated <code>RiskAllocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('risk_score')) {
        obj['risk_score'] = ApiClient.convertToType(data['risk_score'], 'Number');
      }
      if (data.hasOwnProperty('allocation_method')) {
        obj['allocation_method'] = ApiClient.convertToType(data['allocation_method'], 'String');
      }
      if (data.hasOwnProperty('opt_config')) {
        obj['opt_config'] = ApiClient.convertToType(data['opt_config'], Object);
      }
      if (data.hasOwnProperty('allocations')) {
        obj['allocations'] = ApiClient.convertToType(data['allocations'], ['String']);
      }
    }
    return obj;
  }

  /**
   * A risk score from 0 to 100
   * @member {Number} risk_score
   */
  exports.prototype['risk_score'] = undefined;
  /**
   * The portfolio standard deviation
   * @member {module:model/RiskAllocation.AllocationMethodEnum} allocation_method
   */
  exports.prototype['allocation_method'] = undefined;
  /**
   * @member {Object} opt_config
   */
  exports.prototype['opt_config'] = undefined;
  /**
   * The portfolio standard deviation
   * @member {Array.<String>} allocations
   */
  exports.prototype['allocations'] = undefined;


  /**
   * Allowed values for the <code>allocation_method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AllocationMethodEnum = {
    /**
     * value: "select"
     * @const
     */
    "select": "select",
    /**
     * value: "create"
     * @const
     */
    "create": "create"  };


  return exports;
}));


