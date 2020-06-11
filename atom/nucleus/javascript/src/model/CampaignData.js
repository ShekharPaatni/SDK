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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenAtomApi) {
      root.HydrogenAtomApi = {};
    }
    root.HydrogenAtomApi.CampaignData = factory(root.HydrogenAtomApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CampaignData model module.
   * @module model/CampaignData
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>CampaignData</code>.
   * CampaignData Object
   * @alias module:model/CampaignData
   * @class
   * @param campaignId {String} campaignId
   * @param endDate {Date} endDate
   * @param startDate {Date} startDate
   */
  var exports = function(campaignId, endDate, startDate) {
    var _this = this;

    _this['campaign_id'] = campaignId;


    _this['end_date'] = endDate;





    _this['start_date'] = startDate;



  };

  /**
   * Constructs a <code>CampaignData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignData} obj Optional instance to populate.
   * @return {module:model/CampaignData} The populated <code>CampaignData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('campaign_id')) {
        obj['campaign_id'] = ApiClient.convertToType(data['campaign_id'], 'String');
      }
      if (data.hasOwnProperty('click_through_rate')) {
        obj['click_through_rate'] = ApiClient.convertToType(data['click_through_rate'], 'Number');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('line_item')) {
        obj['line_item'] = ApiClient.convertToType(data['line_item'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('publisher_campaign_name')) {
        obj['publisher_campaign_name'] = ApiClient.convertToType(data['publisher_campaign_name'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('total_clicks')) {
        obj['total_clicks'] = ApiClient.convertToType(data['total_clicks'], 'Number');
      }
      if (data.hasOwnProperty('total_impressions')) {
        obj['total_impressions'] = ApiClient.convertToType(data['total_impressions'], 'Number');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * campaignId
   * @member {String} campaign_id
   */
  exports.prototype['campaign_id'] = undefined;
  /**
   * clickThroughRate
   * @member {Number} click_through_rate
   */
  exports.prototype['click_through_rate'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * endDate
   * @member {Date} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * lineItem
   * @member {String} line_item
   */
  exports.prototype['line_item'] = undefined;
  /**
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * publisherCampaignName
   * @member {String} publisher_campaign_name
   */
  exports.prototype['publisher_campaign_name'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * startDate
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * clickThroughRate
   * @member {Number} total_clicks
   */
  exports.prototype['total_clicks'] = undefined;
  /**
   * totalImpressions
   * @member {Number} total_impressions
   */
  exports.prototype['total_impressions'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


