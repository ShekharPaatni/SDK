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
    define(['ApiClient', 'model/BulkOrderSubresponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BulkOrderSubresponse'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.BulkOrderFirmclientaccountResponse = factory(root.atom_api.ApiClient, root.atom_api.BulkOrderSubresponse);
  }
}(this, function(ApiClient, BulkOrderSubresponse) {
  'use strict';




  /**
   * The BulkOrderFirmclientaccountResponse model module.
   * @module model/BulkOrderFirmclientaccountResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>BulkOrderFirmclientaccountResponse</code>.
   * @alias module:model/BulkOrderFirmclientaccountResponse
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
   * Constructs a <code>BulkOrderFirmclientaccountResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkOrderFirmclientaccountResponse} obj Optional instance to populate.
   * @return {module:model/BulkOrderFirmclientaccountResponse} The populated <code>BulkOrderFirmclientaccountResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'BulkOrderSubresponse');

    }
    return obj;
  }




  return exports;
}));


