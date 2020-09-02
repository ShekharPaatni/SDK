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
    define(['ApiClient', 'model/AccountVO', 'model/DepositAccountVO', 'model/WithdrawalAccountVO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountVO'), require('./DepositAccountVO'), require('./WithdrawalAccountVO'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.ClientAccountVO = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.AccountVO, root.HydrogenNucleusApi.DepositAccountVO, root.HydrogenNucleusApi.WithdrawalAccountVO);
  }
}(this, function(ApiClient, AccountVO, DepositAccountVO, WithdrawalAccountVO) {
  'use strict';




  /**
   * The ClientAccountVO model module.
   * @module model/ClientAccountVO
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>ClientAccountVO</code>.
   * @alias module:model/ClientAccountVO
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ClientAccountVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClientAccountVO} obj Optional instance to populate.
   * @return {module:model/ClientAccountVO} The populated <code>ClientAccountVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accounts')) {
        obj['accounts'] = ApiClient.convertToType(data['accounts'], [AccountVO]);
      }
      if (data.hasOwnProperty('client_asset_size')) {
        obj['client_asset_size'] = ApiClient.convertToType(data['client_asset_size'], 'Number');
      }
      if (data.hasOwnProperty('client_asset_size_date')) {
        obj['client_asset_size_date'] = ApiClient.convertToType(data['client_asset_size_date'], 'Date');
      }
      if (data.hasOwnProperty('client_first_name')) {
        obj['client_first_name'] = ApiClient.convertToType(data['client_first_name'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('client_last_name')) {
        obj['client_last_name'] = ApiClient.convertToType(data['client_last_name'], 'String');
      }
      if (data.hasOwnProperty('deposits')) {
        obj['deposits'] = ApiClient.convertToType(data['deposits'], [DepositAccountVO]);
      }
      if (data.hasOwnProperty('withdrawals')) {
        obj['withdrawals'] = ApiClient.convertToType(data['withdrawals'], [WithdrawalAccountVO]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/AccountVO>} accounts
   */
  exports.prototype['accounts'] = undefined;
  /**
   * @member {Number} client_asset_size
   */
  exports.prototype['client_asset_size'] = undefined;
  /**
   * @member {Date} client_asset_size_date
   */
  exports.prototype['client_asset_size_date'] = undefined;
  /**
   * @member {String} client_first_name
   */
  exports.prototype['client_first_name'] = undefined;
  /**
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {String} client_last_name
   */
  exports.prototype['client_last_name'] = undefined;
  /**
   * @member {Array.<module:model/DepositAccountVO>} deposits
   */
  exports.prototype['deposits'] = undefined;
  /**
   * @member {Array.<module:model/WithdrawalAccountVO>} withdrawals
   */
  exports.prototype['withdrawals'] = undefined;



  return exports;
}));

