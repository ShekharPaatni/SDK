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
    define(['ApiClient', 'model/FaqPayload', 'model/FaqPayloadFaqKeywords', 'model/SecondaryId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FaqPayload'), require('./FaqPayloadFaqKeywords'), require('./SecondaryId'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.CreateFaqResponse = factory(root.atom_api.ApiClient, root.atom_api.FaqPayload, root.atom_api.FaqPayloadFaqKeywords, root.atom_api.SecondaryId);
  }
}(this, function(ApiClient, FaqPayload, FaqPayloadFaqKeywords, SecondaryId) {
  'use strict';




  /**
   * The CreateFaqResponse model module.
   * @module model/CreateFaqResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateFaqResponse</code>.
   * @alias module:model/CreateFaqResponse
   * @class
   * @implements module:model/FaqPayload
   * @param question {String} Value for the question in the FAQ
   * @param answer {String} Value for the answer to the question in the FAQ
   */
  var exports = function(question, answer) {
    var _this = this;

    FaqPayload.call(_this, question, answer);


  };

  /**
   * Constructs a <code>CreateFaqResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateFaqResponse} obj Optional instance to populate.
   * @return {module:model/CreateFaqResponse} The populated <code>CreateFaqResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      FaqPayload.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the FAQ
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Datetime the FAQ was created
   * @member {String} create_date
   */
  exports.prototype['create_date'] = undefined;

  // Implement FaqPayload interface:
  /**
   * Value for the question in the FAQ
   * @member {String} question
   */
exports.prototype['question'] = undefined;

  /**
   * Value for the answer to the question in the FAQ
   * @member {String} answer
   */
exports.prototype['answer'] = undefined;

  /**
   * Category that the FAQ falls under
   * @member {String} category
   */
exports.prototype['category'] = undefined;

  /**
   * Subcategory that the FAQ falls under within a category
   * @member {String} subcategory
   */
exports.prototype['subcategory'] = undefined;

  /**
   * Indicates if the FAQ is active. Defaults to true which indicates that the FAQ is active
   * @member {Boolean} is_active
   * @default true
   */
exports.prototype['is_active'] = true;

  /**
   * Order number of the FAQ. For example 3 indicates it’s the third FAQ in a list. Must be a whole number
   * @member {Number} number
   */
exports.prototype['number'] = undefined;

  /**
   * File name used to optimize finding the FAQ in a search engine query
   * @member {String} seo_name
   */
exports.prototype['seo_name'] = undefined;

  /**
   * @member {Array.<module:model/FaqPayloadFaqKeywords>} faq_keywords
   */
exports.prototype['faq_keywords'] = undefined;

  /**
   * Indicator for whether or not this is a featured FAQ. Defaults to false indicating it is not featured
   * @member {Boolean} is_featured
   * @default false
   */
exports.prototype['is_featured'] = false;

  /**
   * @member {module:model/SecondaryId} secondary_id
   */
exports.prototype['secondary_id'] = undefined;



  return exports;
}));


