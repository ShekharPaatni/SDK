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
    define(['ApiClient', 'model/Question'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Question'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.Answer = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.Question);
  }
}(this, function(ApiClient, Question) {
  'use strict';




  /**
   * The Answer model module.
   * @module model/Answer
   * @version 1.9.1
   */

  /**
   * Constructs a new <code>Answer</code>.
   * @alias module:model/Answer
   * @class
   * @param value {String} value
   */
  var exports = function(value) {
    var _this = this;













    _this['value'] = value;

  };

  /**
   * Constructs a <code>Answer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Answer} obj Optional instance to populate.
   * @return {module:model/Answer} The populated <code>Answer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('is_default')) {
        obj['is_default'] = ApiClient.convertToType(data['is_default'], 'Boolean');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('order_index')) {
        obj['order_index'] = ApiClient.convertToType(data['order_index'], 'String');
      }
      if (data.hasOwnProperty('question')) {
        obj['question'] = Question.constructFromObject(data['question']);
      }
      if (data.hasOwnProperty('question_id')) {
        obj['question_id'] = ApiClient.convertToType(data['question_id'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('tooltip')) {
        obj['tooltip'] = ApiClient.convertToType(data['tooltip'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * image
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * isDefault
   * @member {Boolean} is_default
   */
  exports.prototype['is_default'] = undefined;
  /**
   * label
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * metadata
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * orderIndex
   * @member {String} order_index
   */
  exports.prototype['order_index'] = undefined;
  /**
   * @member {module:model/Question} question
   */
  exports.prototype['question'] = undefined;
  /**
   * questionId
   * @member {String} question_id
   */
  exports.prototype['question_id'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * @member {String} tooltip
   */
  exports.prototype['tooltip'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;
  /**
   * value
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * weight
   * @member {Number} weight
   */
  exports.prototype['weight'] = undefined;



  return exports;
}));


