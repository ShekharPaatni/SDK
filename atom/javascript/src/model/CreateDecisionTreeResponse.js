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
    define(['ApiClient', 'model/DecisionTreePayload', 'model/SecondaryId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DecisionTreePayload'), require('./SecondaryId'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.CreateDecisionTreeResponse = factory(root.atom_api.ApiClient, root.atom_api.DecisionTreePayload, root.atom_api.SecondaryId);
  }
}(this, function(ApiClient, DecisionTreePayload, SecondaryId) {
  'use strict';




  /**
   * The CreateDecisionTreeResponse model module.
   * @module model/CreateDecisionTreeResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateDecisionTreeResponse</code>.
   * @alias module:model/CreateDecisionTreeResponse
   * @class
   * @implements module:model/DecisionTreePayload
   * @param name {String} Name of the decision tree
   */
  var exports = function(name) {
    var _this = this;

    DecisionTreePayload.call(_this, name);


  };

  /**
   * Constructs a <code>CreateDecisionTreeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateDecisionTreeResponse} obj Optional instance to populate.
   * @return {module:model/CreateDecisionTreeResponse} The populated <code>CreateDecisionTreeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      DecisionTreePayload.constructFromObject(data, obj);
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
   * ID of the decision tree
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Datetime the decision tree was created
   * @member {String} create_date
   */
  exports.prototype['create_date'] = undefined;

  // Implement DecisionTreePayload interface:
  /**
   * Name of the decision tree
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * Description for the decision tree such as “Tree to allocate clients to taxable portfolios”
   * @member {String} description
   */
exports.prototype['description'] = undefined;

  /**
   * @member {module:model/SecondaryId} secondary_id
   */
exports.prototype['secondary_id'] = undefined;



  return exports;
}));


