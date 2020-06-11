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
    define(['ApiClient', 'model/Campaign', 'model/CampaignData', 'model/CampaignPlan', 'model/ClientCampaignMapping', 'model/JsonNode', 'model/PageCampaign', 'model/PageCampaignData', 'model/PageCampaignPlan', 'model/PageClientCampaignMapping'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Campaign'), require('../model/CampaignData'), require('../model/CampaignPlan'), require('../model/ClientCampaignMapping'), require('../model/JsonNode'), require('../model/PageCampaign'), require('../model/PageCampaignData'), require('../model/PageCampaignPlan'), require('../model/PageClientCampaignMapping'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenAtomApi) {
      root.HydrogenAtomApi = {};
    }
    root.HydrogenAtomApi.MarketingApi = factory(root.HydrogenAtomApi.ApiClient, root.HydrogenAtomApi.Campaign, root.HydrogenAtomApi.CampaignData, root.HydrogenAtomApi.CampaignPlan, root.HydrogenAtomApi.ClientCampaignMapping, root.HydrogenAtomApi.JsonNode, root.HydrogenAtomApi.PageCampaign, root.HydrogenAtomApi.PageCampaignData, root.HydrogenAtomApi.PageCampaignPlan, root.HydrogenAtomApi.PageClientCampaignMapping);
  }
}(this, function(ApiClient, Campaign, CampaignData, CampaignPlan, ClientCampaignMapping, JsonNode, PageCampaign, PageCampaignData, PageCampaignPlan, PageClientCampaignMapping) {
  'use strict';

  /**
   * Marketing service.
   * @module api/MarketingApi
   * @version 1.7.0
   */

  /**
   * Constructs a new MarketingApi. 
   * @alias module:api/MarketingApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createCampaignDataUsingPost operation.
     * @callback module:api/MarketingApi~createCampaignDataUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CampaignData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a campaign data record
     * Create a new  campaign data record for your firm.
     * @param {module:model/CampaignData} campaignDataRequest campaignDataRequest
     * @param {module:api/MarketingApi~createCampaignDataUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CampaignData}
     */
    this.createCampaignDataUsingPost = function(campaignDataRequest, callback) {
      var postBody = campaignDataRequest;

      // verify the required parameter 'campaignDataRequest' is set
      if (campaignDataRequest === undefined || campaignDataRequest === null) {
        throw new Error("Missing the required parameter 'campaignDataRequest' when calling createCampaignDataUsingPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = CampaignData;

      return this.apiClient.callApi(
        '/campaign_data', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createCampaignPlanUsingPost operation.
     * @callback module:api/MarketingApi~createCampaignPlanUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CampaignPlan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a campaign plan
     * Create a new campaign plan for your firm.
     * @param {module:model/CampaignPlan} campaignPlanRequest campaignPlanRequest
     * @param {module:api/MarketingApi~createCampaignPlanUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CampaignPlan}
     */
    this.createCampaignPlanUsingPost = function(campaignPlanRequest, callback) {
      var postBody = campaignPlanRequest;

      // verify the required parameter 'campaignPlanRequest' is set
      if (campaignPlanRequest === undefined || campaignPlanRequest === null) {
        throw new Error("Missing the required parameter 'campaignPlanRequest' when calling createCampaignPlanUsingPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = CampaignPlan;

      return this.apiClient.callApi(
        '/campaign_plan', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createCampaignUsingPost operation.
     * @callback module:api/MarketingApi~createCampaignUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Campaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a campaign
     * Create a new campaign for your firm.
     * @param {module:model/Campaign} campaignRequest campaignRequest
     * @param {module:api/MarketingApi~createCampaignUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Campaign}
     */
    this.createCampaignUsingPost = function(campaignRequest, callback) {
      var postBody = campaignRequest;

      // verify the required parameter 'campaignRequest' is set
      if (campaignRequest === undefined || campaignRequest === null) {
        throw new Error("Missing the required parameter 'campaignRequest' when calling createCampaignUsingPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Campaign;

      return this.apiClient.callApi(
        '/campaign', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createClientCampaignUsingPost operation.
     * @callback module:api/MarketingApi~createClientCampaignUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClientCampaignMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark a client signing up through a campaign
     * We are adding a campaign association to a clientId or ip.  We create this association because we are trying to measure how affective a campaign is in directing traffic to our website.  
     * @param {module:model/ClientCampaignMapping} campaignMappingRequest campaignMappingRequest
     * @param {module:api/MarketingApi~createClientCampaignUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClientCampaignMapping}
     */
    this.createClientCampaignUsingPost = function(campaignMappingRequest, callback) {
      var postBody = campaignMappingRequest;

      // verify the required parameter 'campaignMappingRequest' is set
      if (campaignMappingRequest === undefined || campaignMappingRequest === null) {
        throw new Error("Missing the required parameter 'campaignMappingRequest' when calling createClientCampaignUsingPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ClientCampaignMapping;

      return this.apiClient.callApi(
        '/client_campaign', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCampaignDataUsingDelete operation.
     * @callback module:api/MarketingApi~deleteCampaignDataUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a campaign data record
     * Permanently delete a campaign data record
     * @param {String} campaignDataId UUID campaign_data_id
     * @param {module:api/MarketingApi~deleteCampaignDataUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCampaignDataUsingDelete = function(campaignDataId, callback) {
      var postBody = null;

      // verify the required parameter 'campaignDataId' is set
      if (campaignDataId === undefined || campaignDataId === null) {
        throw new Error("Missing the required parameter 'campaignDataId' when calling deleteCampaignDataUsingDelete");
      }


      var pathParams = {
        'campaign_data_id': campaignDataId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/campaign_data/{campaign_data_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCampaignPlanUsingDelete operation.
     * @callback module:api/MarketingApi~deleteCampaignPlanUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a campaign plan
     * Permanently delete a campaign plan
     * @param {String} campaignPlanId UUID campaign_plan_id
     * @param {module:api/MarketingApi~deleteCampaignPlanUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCampaignPlanUsingDelete = function(campaignPlanId, callback) {
      var postBody = null;

      // verify the required parameter 'campaignPlanId' is set
      if (campaignPlanId === undefined || campaignPlanId === null) {
        throw new Error("Missing the required parameter 'campaignPlanId' when calling deleteCampaignPlanUsingDelete");
      }


      var pathParams = {
        'campaign_plan_id': campaignPlanId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/campaign_plan/{campaign_plan_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCampaignUsingDelete operation.
     * @callback module:api/MarketingApi~deleteCampaignUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a campaign
     * Permanently delete a campaign
     * @param {String} campaignId Campaign Id
     * @param {module:api/MarketingApi~deleteCampaignUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCampaignUsingDelete = function(campaignId, callback) {
      var postBody = null;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling deleteCampaignUsingDelete");
      }


      var pathParams = {
        'campaign_id': campaignId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/campaign/{campaign_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteClientCampaignUsingDelete operation.
     * @callback module:api/MarketingApi~deleteClientCampaignUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a clients/ips pair under a campaign
     * Permanently delete a clients/ips pair under a campaign
     * @param {String} clientCampaignId UUID client_campaign_id
     * @param {module:api/MarketingApi~deleteClientCampaignUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteClientCampaignUsingDelete = function(clientCampaignId, callback) {
      var postBody = null;

      // verify the required parameter 'clientCampaignId' is set
      if (clientCampaignId === undefined || clientCampaignId === null) {
        throw new Error("Missing the required parameter 'clientCampaignId' when calling deleteClientCampaignUsingDelete");
      }


      var pathParams = {
        'client_campaign_id': clientCampaignId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/client_campaign/{client_campaign_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignAllUsingGet operation.
     * @callback module:api/MarketingApi~getCampaignAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all campaigns
     * Get details for all campaigns defined for your firm.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/MarketingApi~getCampaignAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageCampaign}
     */
    this.getCampaignAllUsingGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'ascending': opts['ascending'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page': opts['page'],
        'size': opts['size']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = PageCampaign;

      return this.apiClient.callApi(
        '/campaign', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignDataAllUsingGet operation.
     * @callback module:api/MarketingApi~getCampaignDataAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampaignData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all campaign data
     * Get details for all campaign data defined for your firm.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/MarketingApi~getCampaignDataAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageCampaignData}
     */
    this.getCampaignDataAllUsingGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'ascending': opts['ascending'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page': opts['page'],
        'size': opts['size']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = PageCampaignData;

      return this.apiClient.callApi(
        '/campaign_data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignDataUsingGet operation.
     * @callback module:api/MarketingApi~getCampaignDataUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CampaignData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a campaign data record
     * Retrieve the information for a campaign data record
     * @param {String} campaignDataId UUID campaign_data_id
     * @param {module:api/MarketingApi~getCampaignDataUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CampaignData}
     */
    this.getCampaignDataUsingGet = function(campaignDataId, callback) {
      var postBody = null;

      // verify the required parameter 'campaignDataId' is set
      if (campaignDataId === undefined || campaignDataId === null) {
        throw new Error("Missing the required parameter 'campaignDataId' when calling getCampaignDataUsingGet");
      }


      var pathParams = {
        'campaign_data_id': campaignDataId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = CampaignData;

      return this.apiClient.callApi(
        '/campaign_data/{campaign_data_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignPlanAllUsingGet operation.
     * @callback module:api/MarketingApi~getCampaignPlanAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampaignPlan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all campaign plans
     * Get details for all campaign plans defined for your firm.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/MarketingApi~getCampaignPlanAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageCampaignPlan}
     */
    this.getCampaignPlanAllUsingGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'ascending': opts['ascending'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page': opts['page'],
        'size': opts['size']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = PageCampaignPlan;

      return this.apiClient.callApi(
        '/campaign_plan', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignPlanUsingGet operation.
     * @callback module:api/MarketingApi~getCampaignPlanUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CampaignPlan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a campaign plan
     * Retrieve the information for a campaign plan
     * @param {String} campaignPlanId UUID campaign_plan_id
     * @param {module:api/MarketingApi~getCampaignPlanUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CampaignPlan}
     */
    this.getCampaignPlanUsingGet = function(campaignPlanId, callback) {
      var postBody = null;

      // verify the required parameter 'campaignPlanId' is set
      if (campaignPlanId === undefined || campaignPlanId === null) {
        throw new Error("Missing the required parameter 'campaignPlanId' when calling getCampaignPlanUsingGet");
      }


      var pathParams = {
        'campaign_plan_id': campaignPlanId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = CampaignPlan;

      return this.apiClient.callApi(
        '/campaign_plan/{campaign_plan_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignUsingGet operation.
     * @callback module:api/MarketingApi~getCampaignUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Campaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a campaign
     * Retrieve the information for a campaign.
     * @param {String} campaignId Campaign Id
     * @param {module:api/MarketingApi~getCampaignUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Campaign}
     */
    this.getCampaignUsingGet = function(campaignId, callback) {
      var postBody = null;

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getCampaignUsingGet");
      }


      var pathParams = {
        'campaign_id': campaignId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = Campaign;

      return this.apiClient.callApi(
        '/campaign/{campaign_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClientCampaignAllUsingGet operation.
     * @callback module:api/MarketingApi~getClientCampaignAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageClientCampaignMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all clients/ips under a campaign
     * Get details for all clients/ips under a campaign
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/MarketingApi~getClientCampaignAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageClientCampaignMapping}
     */
    this.getClientCampaignAllUsingGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'ascending': opts['ascending'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page': opts['page'],
        'size': opts['size']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = PageClientCampaignMapping;

      return this.apiClient.callApi(
        '/client_campaign', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClientCampaignUsingGet operation.
     * @callback module:api/MarketingApi~getClientCampaignUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClientCampaignMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a clients/ips pair under a campaign
     * Retrieve the information for a clients/ips pair under a campaign
     * @param {String} clientCampaignId UUID client_campaign_id
     * @param {module:api/MarketingApi~getClientCampaignUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClientCampaignMapping}
     */
    this.getClientCampaignUsingGet = function(clientCampaignId, callback) {
      var postBody = null;

      // verify the required parameter 'clientCampaignId' is set
      if (clientCampaignId === undefined || clientCampaignId === null) {
        throw new Error("Missing the required parameter 'clientCampaignId' when calling getClientCampaignUsingGet");
      }


      var pathParams = {
        'client_campaign_id': clientCampaignId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = ClientCampaignMapping;

      return this.apiClient.callApi(
        '/client_campaign/{client_campaign_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCampaignDataUsingPut operation.
     * @callback module:api/MarketingApi~updateCampaignDataUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CampaignData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a campaign data record
     * Updated the information for a campaign data record
     * @param {module:model/CampaignPlan} campaignData campaign_data
     * @param {String} campaignDataId UUID campaign_data_id
     * @param {module:api/MarketingApi~updateCampaignDataUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CampaignData}
     */
    this.updateCampaignDataUsingPut = function(campaignData, campaignDataId, callback) {
      var postBody = campaignData;

      // verify the required parameter 'campaignData' is set
      if (campaignData === undefined || campaignData === null) {
        throw new Error("Missing the required parameter 'campaignData' when calling updateCampaignDataUsingPut");
      }

      // verify the required parameter 'campaignDataId' is set
      if (campaignDataId === undefined || campaignDataId === null) {
        throw new Error("Missing the required parameter 'campaignDataId' when calling updateCampaignDataUsingPut");
      }


      var pathParams = {
        'campaign_data_id': campaignDataId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = CampaignData;

      return this.apiClient.callApi(
        '/campaign_data/{campaign_data_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCampaignPlanUsingPut operation.
     * @callback module:api/MarketingApi~updateCampaignPlanUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CampaignPlan} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a campaign plan
     * Updated the information for a campaign plan
     * @param {module:model/CampaignPlan} campaignPlan campaign_plan
     * @param {String} campaignPlanId UUID campaign_plan_id
     * @param {module:api/MarketingApi~updateCampaignPlanUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CampaignPlan}
     */
    this.updateCampaignPlanUsingPut = function(campaignPlan, campaignPlanId, callback) {
      var postBody = campaignPlan;

      // verify the required parameter 'campaignPlan' is set
      if (campaignPlan === undefined || campaignPlan === null) {
        throw new Error("Missing the required parameter 'campaignPlan' when calling updateCampaignPlanUsingPut");
      }

      // verify the required parameter 'campaignPlanId' is set
      if (campaignPlanId === undefined || campaignPlanId === null) {
        throw new Error("Missing the required parameter 'campaignPlanId' when calling updateCampaignPlanUsingPut");
      }


      var pathParams = {
        'campaign_plan_id': campaignPlanId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = CampaignPlan;

      return this.apiClient.callApi(
        '/campaign_plan/{campaign_plan_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCampaignUsingPut operation.
     * @callback module:api/MarketingApi~updateCampaignUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Campaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a campaign
     * Updated the information for a campaign
     * @param {module:model/Campaign} campaign campaign
     * @param {String} campaignId UUID campaign_id
     * @param {module:api/MarketingApi~updateCampaignUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Campaign}
     */
    this.updateCampaignUsingPut = function(campaign, campaignId, callback) {
      var postBody = campaign;

      // verify the required parameter 'campaign' is set
      if (campaign === undefined || campaign === null) {
        throw new Error("Missing the required parameter 'campaign' when calling updateCampaignUsingPut");
      }

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling updateCampaignUsingPut");
      }


      var pathParams = {
        'campaign_id': campaignId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Campaign;

      return this.apiClient.callApi(
        '/campaign/{campaign_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateClientCampaignUsingPut operation.
     * @callback module:api/MarketingApi~updateClientCampaignUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ClientCampaignMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a clients/ips pair under a campaign
     * Updated the information for clients/ips pair under a campaign
     * @param {String} clientCampaignId UUID client_campaign_id
     * @param {module:model/JsonNode} jsonNode jsonNode
     * @param {module:api/MarketingApi~updateClientCampaignUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ClientCampaignMapping}
     */
    this.updateClientCampaignUsingPut = function(clientCampaignId, jsonNode, callback) {
      var postBody = jsonNode;

      // verify the required parameter 'clientCampaignId' is set
      if (clientCampaignId === undefined || clientCampaignId === null) {
        throw new Error("Missing the required parameter 'clientCampaignId' when calling updateClientCampaignUsingPut");
      }

      // verify the required parameter 'jsonNode' is set
      if (jsonNode === undefined || jsonNode === null) {
        throw new Error("Missing the required parameter 'jsonNode' when calling updateClientCampaignUsingPut");
      }


      var pathParams = {
        'client_campaign_id': clientCampaignId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ClientCampaignMapping;

      return this.apiClient.callApi(
        '/client_campaign/{client_campaign_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
