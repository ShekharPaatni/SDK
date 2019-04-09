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
    define(['ApiClient', 'model/CampaignDataPayload', 'model/SecondaryId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CampaignDataPayload'), require('./SecondaryId'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.CreateCampaignDataResponse = factory(root.atom_api.ApiClient, root.atom_api.CampaignDataPayload, root.atom_api.SecondaryId);
  }
}(this, function(ApiClient, CampaignDataPayload, SecondaryId) {
  'use strict';




  /**
   * The CreateCampaignDataResponse model module.
   * @module model/CreateCampaignDataResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CreateCampaignDataResponse</code>.
   * @alias module:model/CreateCampaignDataResponse
   * @class
   * @implements module:model/CampaignDataPayload
   * @param campaignId {String} The ID of the campaign to which the campaign data record belongs
   * @param startDate {Date} Date for when the period being measured by the campaign data record began
   * @param endDate {Date} Date for when the period being measured by the campaign data record ended
   */
  var exports = function(campaignId, startDate, endDate) {
    var _this = this;

    CampaignDataPayload.call(_this, campaignId, startDate, endDate);


  };

  /**
   * Constructs a <code>CreateCampaignDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateCampaignDataResponse} obj Optional instance to populate.
   * @return {module:model/CreateCampaignDataResponse} The populated <code>CreateCampaignDataResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      CampaignDataPayload.constructFromObject(data, obj);
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
   * ID of the marketing campaign data record
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Datetime the marketing campaign data record was created
   * @member {String} create_date
   */
  exports.prototype['create_date'] = undefined;

  // Implement CampaignDataPayload interface:
  /**
   * The ID of the campaign to which the campaign data record belongs
   * @member {String} campaign_id
   */
exports.prototype['campaign_id'] = undefined;

  /**
   * Date for when the period being measured by the campaign data record began
   * @member {Date} start_date
   */
exports.prototype['start_date'] = undefined;

  /**
   * Date for when the period being measured by the campaign data record ended
   * @member {Date} end_date
   */
exports.prototype['end_date'] = undefined;

  /**
   * Rate of clicks measured in the campaign data record for a specific feature as a whole number
   * @member {Number} click_through_rate
   */
exports.prototype['click_through_rate'] = undefined;

  /**
   * Name of the campaign data record indicating the feature that it is measuring such as banner click through
   * @member {String} line_item
   */
exports.prototype['line_item'] = undefined;

  /**
   * Name of the campaign publisher
   * @member {String} publisher_campaign_name
   */
exports.prototype['publisher_campaign_name'] = undefined;

  /**
   * Total number of clicks measured in the campaign data record for a specific feature as a whole number
   * @member {Number} total_clicks
   */
exports.prototype['total_clicks'] = undefined;

  /**
   * Total number of impressions measured in the campaign data record for a specific feature as a whole number
   * @member {Number} total_impressions
   */
exports.prototype['total_impressions'] = undefined;

  /**
   * @member {module:model/SecondaryId} secondary_id
   */
exports.prototype['secondary_id'] = undefined;



  return exports;
}));


