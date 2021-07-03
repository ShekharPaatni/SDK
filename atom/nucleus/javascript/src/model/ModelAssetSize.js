/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.2
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.ModelAssetSize = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModelAssetSize model module.
   * @module model/ModelAssetSize
   * @version 1.9.2
   */

  /**
   * Constructs a new <code>ModelAssetSize</code>.
   * Model Asset_Size Object
   * @alias module:model/ModelAssetSize
   * @class
   * @param assetSize {Number} Model asset_size
   * @param _date {Date} Model asset_size date
   * @param modelId {String} Model asset_size Model id
   */
  var exports = function(assetSize, _date, modelId) {
    var _this = this;

    _this['asset_size'] = assetSize;


    _this['date'] = _date;


    _this['model_id'] = modelId;


  };

  /**
   * Constructs a <code>ModelAssetSize</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelAssetSize} obj Optional instance to populate.
   * @return {module:model/ModelAssetSize} The populated <code>ModelAssetSize</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('asset_size')) {
        obj['asset_size'] = ApiClient.convertToType(data['asset_size'], 'Number');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('is_reconciled')) {
        obj['is_reconciled'] = ApiClient.convertToType(data['is_reconciled'], 'Boolean');
      }
      if (data.hasOwnProperty('model_id')) {
        obj['model_id'] = ApiClient.convertToType(data['model_id'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Model asset_size
   * @member {Number} asset_size
   */
  exports.prototype['asset_size'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * currency_code
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * Model asset_size date
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Model asset_size is reconciled
   * @member {Boolean} is_reconciled
   */
  exports.prototype['is_reconciled'] = undefined;
  /**
   * Model asset_size Model id
   * @member {String} model_id
   */
  exports.prototype['model_id'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


