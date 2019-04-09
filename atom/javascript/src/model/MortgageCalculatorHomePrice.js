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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.MortgageCalculatorHomePrice = factory(root.atom_api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MortgageCalculatorHomePrice model module.
   * @module model/MortgageCalculatorHomePrice
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MortgageCalculatorHomePrice</code>.
   * @alias module:model/MortgageCalculatorHomePrice
   * @class
   * @param downPayment {Number} The mortgage down payment
   * @param periodicPayment {Number} The monthly mortgage payment
   */
  var exports = function(downPayment, periodicPayment) {
    var _this = this;

    _this['down_payment'] = downPayment;
    _this['periodic_payment'] = periodicPayment;


  };

  /**
   * Constructs a <code>MortgageCalculatorHomePrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MortgageCalculatorHomePrice} obj Optional instance to populate.
   * @return {module:model/MortgageCalculatorHomePrice} The populated <code>MortgageCalculatorHomePrice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('down_payment')) {
        obj['down_payment'] = ApiClient.convertToType(data['down_payment'], 'Number');
      }
      if (data.hasOwnProperty('periodic_payment')) {
        obj['periodic_payment'] = ApiClient.convertToType(data['periodic_payment'], 'Number');
      }
      if (data.hasOwnProperty('interest_rate')) {
        obj['interest_rate'] = ApiClient.convertToType(data['interest_rate'], 'Number');
      }
      if (data.hasOwnProperty('mortgage_term')) {
        obj['mortgage_term'] = ApiClient.convertToType(data['mortgage_term'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The mortgage down payment
   * @member {Number} down_payment
   */
  exports.prototype['down_payment'] = undefined;
  /**
   * The monthly mortgage payment
   * @member {Number} periodic_payment
   */
  exports.prototype['periodic_payment'] = undefined;
  /**
   * The annualized interest rate
   * @member {Number} interest_rate
   */
  exports.prototype['interest_rate'] = undefined;
  /**
   * The mortgage term, in months
   * @member {Number} mortgage_term
   */
  exports.prototype['mortgage_term'] = undefined;



  return exports;
}));


