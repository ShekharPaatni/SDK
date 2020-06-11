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
    define(['ApiClient', 'model/AnswerMap'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnswerMap'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenAtomApi) {
      root.HydrogenAtomApi = {};
    }
    root.HydrogenAtomApi.DecisionTreeCO = factory(root.HydrogenAtomApi.ApiClient, root.HydrogenAtomApi.AnswerMap);
  }
}(this, function(ApiClient, AnswerMap) {
  'use strict';




  /**
   * The DecisionTreeCO model module.
   * @module model/DecisionTreeCO
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>DecisionTreeCO</code>.
   * @alias module:model/DecisionTreeCO
   * @class
   * @param answers {Array.<module:model/AnswerMap>} 
   * @param entityType {String} 
   */
  var exports = function(answers, entityType) {
    var _this = this;

    _this['answers'] = answers;
    _this['entity_type'] = entityType;
  };

  /**
   * Constructs a <code>DecisionTreeCO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecisionTreeCO} obj Optional instance to populate.
   * @return {module:model/DecisionTreeCO} The populated <code>DecisionTreeCO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('answers')) {
        obj['answers'] = ApiClient.convertToType(data['answers'], [AnswerMap]);
      }
      if (data.hasOwnProperty('entity_type')) {
        obj['entity_type'] = ApiClient.convertToType(data['entity_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/AnswerMap>} answers
   */
  exports.prototype['answers'] = undefined;
  /**
   * @member {String} entity_type
   */
  exports.prototype['entity_type'] = undefined;



  return exports;
}));


