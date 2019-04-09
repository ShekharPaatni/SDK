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
    define(['ApiClient', 'model/GoalRecommendationResponseAction', 'model/GoalReturnDetailsPeriodResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GoalRecommendationResponseAction'), require('./GoalReturnDetailsPeriodResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.atom_api) {
      root.atom_api = {};
    }
    root.atom_api.GoalRecommendationResponse = factory(root.atom_api.ApiClient, root.atom_api.GoalRecommendationResponseAction, root.atom_api.GoalReturnDetailsPeriodResponse);
  }
}(this, function(ApiClient, GoalRecommendationResponseAction, GoalReturnDetailsPeriodResponse) {
  'use strict';




  /**
   * The GoalRecommendationResponse model module.
   * @module model/GoalRecommendationResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GoalRecommendationResponse</code>.
   * @alias module:model/GoalRecommendationResponse
   * @class
   * @param onTrack {Boolean} If true, the goal is on track.
   * @param progress {Number} The goal progress percentage, defined as the current invested amount divided by the total target withdrawal amount over d_horizon.
   * @param goalProbability {Number} The probability of achieving the goal with the given portfolio.
   * @param goalAchievementScore {Number} A ratio of goal_probability to the conf_tgt on a scale from 0 to 100.
   * @param action {Array.<module:model/GoalRecommendationResponseAction>} 
   * @param returnDetails {Object.<String, module:model/GoalReturnDetailsPeriodResponse>} Portfolio return information over the length of the horizon, broken down by period.
   * @param adjustedGoalAmount {Number} The effective goal target amount, adjusted for taxes, inflation, and goal deviation threshold.
   */
  var exports = function(onTrack, progress, goalProbability, goalAchievementScore, action, returnDetails, adjustedGoalAmount) {
    var _this = this;

    _this['on_track'] = onTrack;
    _this['progress'] = progress;
    _this['goal_probability'] = goalProbability;
    _this['goal_achievement_score'] = goalAchievementScore;
    _this['action'] = action;
    _this['return_details'] = returnDetails;
    _this['adjusted_goal_amount'] = adjustedGoalAmount;
  };

  /**
   * Constructs a <code>GoalRecommendationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoalRecommendationResponse} obj Optional instance to populate.
   * @return {module:model/GoalRecommendationResponse} The populated <code>GoalRecommendationResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('on_track')) {
        obj['on_track'] = ApiClient.convertToType(data['on_track'], 'Boolean');
      }
      if (data.hasOwnProperty('progress')) {
        obj['progress'] = ApiClient.convertToType(data['progress'], 'Number');
      }
      if (data.hasOwnProperty('goal_probability')) {
        obj['goal_probability'] = ApiClient.convertToType(data['goal_probability'], 'Number');
      }
      if (data.hasOwnProperty('goal_achievement_score')) {
        obj['goal_achievement_score'] = ApiClient.convertToType(data['goal_achievement_score'], 'Number');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], [GoalRecommendationResponseAction]);
      }
      if (data.hasOwnProperty('return_details')) {
        obj['return_details'] = ApiClient.convertToType(data['return_details'], {'String': GoalReturnDetailsPeriodResponse});
      }
      if (data.hasOwnProperty('adjusted_goal_amount')) {
        obj['adjusted_goal_amount'] = ApiClient.convertToType(data['adjusted_goal_amount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * If true, the goal is on track.
   * @member {Boolean} on_track
   */
  exports.prototype['on_track'] = undefined;
  /**
   * The goal progress percentage, defined as the current invested amount divided by the total target withdrawal amount over d_horizon.
   * @member {Number} progress
   */
  exports.prototype['progress'] = undefined;
  /**
   * The probability of achieving the goal with the given portfolio.
   * @member {Number} goal_probability
   */
  exports.prototype['goal_probability'] = undefined;
  /**
   * A ratio of goal_probability to the conf_tgt on a scale from 0 to 100.
   * @member {Number} goal_achievement_score
   */
  exports.prototype['goal_achievement_score'] = undefined;
  /**
   * @member {Array.<module:model/GoalRecommendationResponseAction>} action
   */
  exports.prototype['action'] = undefined;
  /**
   * Portfolio return information over the length of the horizon, broken down by period.
   * @member {Object.<String, module:model/GoalReturnDetailsPeriodResponse>} return_details
   */
  exports.prototype['return_details'] = undefined;
  /**
   * The effective goal target amount, adjusted for taxes, inflation, and goal deviation threshold.
   * @member {Number} adjusted_goal_amount
   */
  exports.prototype['adjusted_goal_amount'] = undefined;



  return exports;
}));


