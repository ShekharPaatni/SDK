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
    define(['ApiClient', 'model/Pagination', 'model/PaginationSort', 'model/SpecificAggregationAccountBalanceResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'), require('./PaginationSort'), require('./SpecificAggregationAccountBalanceResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.GetAggregationAccountBalanceResponse = factory(root.atom_api.ApiClient, root.atom_api.Pagination, root.atom_api.PaginationSort, root.atom_api.SpecificAggregationAccountBalanceResponse);
  }
}(this, function(ApiClient, Pagination, PaginationSort, SpecificAggregationAccountBalanceResponse) {
  'use strict';




  /**
   * The GetAggregationAccountBalanceResponse model module.
   * @module model/GetAggregationAccountBalanceResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetAggregationAccountBalanceResponse</code>.
   * @alias module:model/GetAggregationAccountBalanceResponse
   * @class
   * @implements module:model/Pagination
   */
  var exports = function() {
    var _this = this;

    Pagination.call(_this);

  };

  /**
   * Constructs a <code>GetAggregationAccountBalanceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAggregationAccountBalanceResponse} obj Optional instance to populate.
   * @return {module:model/GetAggregationAccountBalanceResponse} The populated <code>GetAggregationAccountBalanceResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Pagination.constructFromObject(data, obj);
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], [SpecificAggregationAccountBalanceResponse]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SpecificAggregationAccountBalanceResponse>} content
   */
  exports.prototype['content'] = undefined;

  // Implement Pagination interface:
  /**
   * If true, the last record in the result set is shown
   * @member {Boolean} last
   */
exports.prototype['last'] = undefined;

  /**
   * Total number of pages in the result set
   * @member {Number} total_pages
   */
exports.prototype['total_pages'] = undefined;

  /**
   * Total number of elements in the result set
   * @member {Number} total_elements
   */
exports.prototype['total_elements'] = undefined;

  /**
   * Details of the sort
   * @member {Array.<module:model/PaginationSort>} sort
   */
exports.prototype['sort'] = undefined;

  /**
   * If true, the first record in the result set is shown
   * @member {Boolean} first
   */
exports.prototype['first'] = undefined;

  /**
   * Number of elements per page
   * @member {Number} number_of_elements
   */
exports.prototype['number_of_elements'] = undefined;

  /**
   * The number or records to be included per page. The default is 25. There is no max value.
   * @member {Number} size
   */
exports.prototype['size'] = undefined;

  /**
   * Number of the first result shown
   * @member {Number} number
   */
exports.prototype['number'] = undefined;



  return exports;
}));


