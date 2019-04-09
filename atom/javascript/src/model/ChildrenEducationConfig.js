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
    define(['ApiClient', 'model/EducationConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EducationConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.ChildrenEducationConfig = factory(root.atom_api.ApiClient, root.atom_api.EducationConfig);
  }
}(this, function(ApiClient, EducationConfig) {
  'use strict';




  /**
   * The ChildrenEducationConfig model module.
   * @module model/ChildrenEducationConfig
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ChildrenEducationConfig</code>.
   * @alias module:model/ChildrenEducationConfig
   * @class
   * @param currentAge {Number} The current age
   * @param educationConfig {Array.<module:model/EducationConfig>} The education configuration
   */
  var exports = function(currentAge, educationConfig) {
    var _this = this;

    _this['current_age'] = currentAge;
    _this['education_config'] = educationConfig;
  };

  /**
   * Constructs a <code>ChildrenEducationConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChildrenEducationConfig} obj Optional instance to populate.
   * @return {module:model/ChildrenEducationConfig} The populated <code>ChildrenEducationConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('current_age')) {
        obj['current_age'] = ApiClient.convertToType(data['current_age'], 'Number');
      }
      if (data.hasOwnProperty('education_config')) {
        obj['education_config'] = ApiClient.convertToType(data['education_config'], [EducationConfig]);
      }
    }
    return obj;
  }

  /**
   * The current age
   * @member {Number} current_age
   */
  exports.prototype['current_age'] = undefined;
  /**
   * The education configuration
   * @member {Array.<module:model/EducationConfig>} education_config
   */
  exports.prototype['education_config'] = undefined;



  return exports;
}));


