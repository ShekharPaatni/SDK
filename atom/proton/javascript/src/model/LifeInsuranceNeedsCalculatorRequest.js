/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.7.18
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BeneficiaryBequestConfig', 'model/ChildrenEducationConfig', 'model/IncomeConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BeneficiaryBequestConfig'), require('./ChildrenEducationConfig'), require('./IncomeConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenProtonApi) {
      root.HydrogenProtonApi = {};
    }
    root.HydrogenProtonApi.LifeInsuranceNeedsCalculatorRequest = factory(root.HydrogenProtonApi.ApiClient, root.HydrogenProtonApi.BeneficiaryBequestConfig, root.HydrogenProtonApi.ChildrenEducationConfig, root.HydrogenProtonApi.IncomeConfig);
  }
}(this, function(ApiClient, BeneficiaryBequestConfig, ChildrenEducationConfig, IncomeConfig) {
  'use strict';

  /**
   * The LifeInsuranceNeedsCalculatorRequest model module.
   * @module model/LifeInsuranceNeedsCalculatorRequest
   * @version 1.7.18
   */

  /**
   * Constructs a new <code>LifeInsuranceNeedsCalculatorRequest</code>.
   * @alias module:model/LifeInsuranceNeedsCalculatorRequest
   * @class
   * @param interestRate {Number} 
   */
  var exports = function(interestRate) {
    this.interestRate = interestRate;
  };

  /**
   * Constructs a <code>LifeInsuranceNeedsCalculatorRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LifeInsuranceNeedsCalculatorRequest} obj Optional instance to populate.
   * @return {module:model/LifeInsuranceNeedsCalculatorRequest} The populated <code>LifeInsuranceNeedsCalculatorRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('margin_of_error'))
        obj.marginOfError = ApiClient.convertToType(data['margin_of_error'], 'Number');
      if (data.hasOwnProperty('end_of_life_expenses'))
        obj.endOfLifeExpenses = ApiClient.convertToType(data['end_of_life_expenses'], 'Number');
      if (data.hasOwnProperty('interest_rate'))
        obj.interestRate = ApiClient.convertToType(data['interest_rate'], 'Number');
      if (data.hasOwnProperty('existing_life_insurance'))
        obj.existingLifeInsurance = ApiClient.convertToType(data['existing_life_insurance'], 'Number');
      if (data.hasOwnProperty('tax_rate'))
        obj.taxRate = ApiClient.convertToType(data['tax_rate'], 'Number');
      if (data.hasOwnProperty('education_inflation_rate'))
        obj.educationInflationRate = ApiClient.convertToType(data['education_inflation_rate'], 'Number');
      if (data.hasOwnProperty('liquid_assets'))
        obj.liquidAssets = ApiClient.convertToType(data['liquid_assets'], 'Number');
      if (data.hasOwnProperty('other_debt'))
        obj.otherDebt = ApiClient.convertToType(data['other_debt'], 'Number');
      if (data.hasOwnProperty('client_id'))
        obj.clientId = ApiClient.convertToType(data['client_id'], 'String');
      if (data.hasOwnProperty('mortgage_balance'))
        obj.mortgageBalance = ApiClient.convertToType(data['mortgage_balance'], 'Number');
      if (data.hasOwnProperty('benefit_amount_rounding'))
        obj.benefitAmountRounding = ApiClient.convertToType(data['benefit_amount_rounding'], 'Number');
      if (data.hasOwnProperty('income_config'))
        obj.incomeConfig = ApiClient.convertToType(data['income_config'], [IncomeConfig]);
      if (data.hasOwnProperty('beneficiary_bequest_config'))
        obj.beneficiaryBequestConfig = ApiClient.convertToType(data['beneficiary_bequest_config'], [BeneficiaryBequestConfig]);
      if (data.hasOwnProperty('general_inflation_rate'))
        obj.generalInflationRate = ApiClient.convertToType(data['general_inflation_rate'], 'Number');
      if (data.hasOwnProperty('children_education_config'))
        obj.childrenEducationConfig = ApiClient.convertToType(data['children_education_config'], [ChildrenEducationConfig]);
    }
    return obj;
  }

  /**
   * @member {Number} marginOfError
   * @default 0.0
   */
  exports.prototype.marginOfError = 0.0;

  /**
   * @member {Number} endOfLifeExpenses
   */
  exports.prototype.endOfLifeExpenses = undefined;

  /**
   * @member {Number} interestRate
   */
  exports.prototype.interestRate = undefined;

  /**
   * @member {Number} existingLifeInsurance
   */
  exports.prototype.existingLifeInsurance = undefined;

  /**
   * @member {Number} taxRate
   * @default 0.0
   */
  exports.prototype.taxRate = 0.0;

  /**
   * @member {Number} educationInflationRate
   * @default 0.0
   */
  exports.prototype.educationInflationRate = 0.0;

  /**
   * @member {Number} liquidAssets
   */
  exports.prototype.liquidAssets = undefined;

  /**
   * @member {Number} otherDebt
   */
  exports.prototype.otherDebt = undefined;

  /**
   * @member {String} clientId
   */
  exports.prototype.clientId = undefined;

  /**
   * @member {Number} mortgageBalance
   */
  exports.prototype.mortgageBalance = undefined;

  /**
   * @member {Number} benefitAmountRounding
   * @default 0
   */
  exports.prototype.benefitAmountRounding = 0;

  /**
   * @member {Array.<module:model/IncomeConfig>} incomeConfig
   */
  exports.prototype.incomeConfig = undefined;

  /**
   * @member {Array.<module:model/BeneficiaryBequestConfig>} beneficiaryBequestConfig
   */
  exports.prototype.beneficiaryBequestConfig = undefined;

  /**
   * @member {Number} generalInflationRate
   * @default 0.0
   */
  exports.prototype.generalInflationRate = 0.0;

  /**
   * @member {Array.<module:model/ChildrenEducationConfig>} childrenEducationConfig
   */
  exports.prototype.childrenEducationConfig = undefined;

  return exports;

}));
