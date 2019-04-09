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
    define(['ApiClient', 'model/RebalanceSubresponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RebalanceSubresponse'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.CreateSellOnlyPortfolioRebalanceOrderResponse = factory(root.atom_api.ApiClient, root.atom_api.RebalanceSubresponse);
  }
}(this, function(ApiClient, RebalanceSubresponse) {
  'use strict';




  /**
   * The CreateSellOnlyPortfolioRebalanceOrderResponse model module.
   * @module model/CreateSellOnlyPortfolioRebalanceOrderResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateSellOnlyPortfolioRebalanceOrderResponse</code>.
   * @alias module:model/CreateSellOnlyPortfolioRebalanceOrderResponse
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);

    return _this;
  };

  /**
   * Constructs a <code>CreateSellOnlyPortfolioRebalanceOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSellOnlyPortfolioRebalanceOrderResponse} obj Optional instance to populate.
   * @return {module:model/CreateSellOnlyPortfolioRebalanceOrderResponse} The populated <code>CreateSellOnlyPortfolioRebalanceOrderResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'RebalanceSubresponse');

    }
    return obj;
  }




  return exports;
}));


