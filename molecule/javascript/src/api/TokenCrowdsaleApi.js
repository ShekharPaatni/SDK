/*
 * Molecule API Documentation
 * The Hydrogen Molecule API
 *
 * OpenAPI spec version: 1.3.0
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
    define(['ApiClient', 'model/CrowdsaleDeployParams', 'model/CrowdsaleFundParams', 'model/CrowdsalePurchaseParams', 'model/ErrorResponse', 'model/TransactionSuccessResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CrowdsaleDeployParams'), require('../model/CrowdsaleFundParams'), require('../model/CrowdsalePurchaseParams'), require('../model/ErrorResponse'), require('../model/TransactionSuccessResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.MoleculeApiDocumentation) {
      root.MoleculeApiDocumentation = {};
    }
    root.MoleculeApiDocumentation.TokenCrowdsaleApi = factory(root.MoleculeApiDocumentation.ApiClient, root.MoleculeApiDocumentation.CrowdsaleDeployParams, root.MoleculeApiDocumentation.CrowdsaleFundParams, root.MoleculeApiDocumentation.CrowdsalePurchaseParams, root.MoleculeApiDocumentation.ErrorResponse, root.MoleculeApiDocumentation.TransactionSuccessResponse);
  }
}(this, function(ApiClient, CrowdsaleDeployParams, CrowdsaleFundParams, CrowdsalePurchaseParams, ErrorResponse, TransactionSuccessResponse) {
  'use strict';

  /**
   * TokenCrowdsale service.
   * @module api/TokenCrowdsaleApi
   * @version 1.3.0
   */

  /**
   * Constructs a new TokenCrowdsaleApi. 
   * @alias module:api/TokenCrowdsaleApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deployCrowdsaleUsingPost operation.
     * @callback module:api/TokenCrowdsaleApi~deployCrowdsaleUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactionSuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy token for Crowdsale
     * @param {module:model/CrowdsaleDeployParams} crowdsaleDeployParams Deploy token for Crowdsale
     * @param {module:api/TokenCrowdsaleApi~deployCrowdsaleUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransactionSuccessResponse}
     */
    this.deployCrowdsaleUsingPost = function(crowdsaleDeployParams, callback) {
      var postBody = crowdsaleDeployParams;

      // verify the required parameter 'crowdsaleDeployParams' is set
      if (crowdsaleDeployParams === undefined || crowdsaleDeployParams === null) {
        throw new Error("Missing the required parameter 'crowdsaleDeployParams' when calling deployCrowdsaleUsingPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TransactionSuccessResponse;

      return this.apiClient.callApi(
        '/crowdsale/deploy', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fundCrowdsaleUsingPost operation.
     * @callback module:api/TokenCrowdsaleApi~fundCrowdsaleUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactionSuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fund/add Tokens supply to Crowdsale
     * @param {module:model/CrowdsaleFundParams} crowdsaleFundParams Fund provided Token's supply to Crowdsale
     * @param {module:api/TokenCrowdsaleApi~fundCrowdsaleUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransactionSuccessResponse}
     */
    this.fundCrowdsaleUsingPost = function(crowdsaleFundParams, callback) {
      var postBody = crowdsaleFundParams;

      // verify the required parameter 'crowdsaleFundParams' is set
      if (crowdsaleFundParams === undefined || crowdsaleFundParams === null) {
        throw new Error("Missing the required parameter 'crowdsaleFundParams' when calling fundCrowdsaleUsingPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TransactionSuccessResponse;

      return this.apiClient.callApi(
        '/crowdsale/fund', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the purchaseCrowdsaleUsingPost operation.
     * @callback module:api/TokenCrowdsaleApi~purchaseCrowdsaleUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransactionSuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Purchase Tokens from Crowdsale
     * @param {module:model/CrowdsalePurchaseParams} crowdsalePurchaseParams Purchase Tokens
     * @param {module:api/TokenCrowdsaleApi~purchaseCrowdsaleUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TransactionSuccessResponse}
     */
    this.purchaseCrowdsaleUsingPost = function(crowdsalePurchaseParams, callback) {
      var postBody = crowdsalePurchaseParams;

      // verify the required parameter 'crowdsalePurchaseParams' is set
      if (crowdsalePurchaseParams === undefined || crowdsalePurchaseParams === null) {
        throw new Error("Missing the required parameter 'crowdsalePurchaseParams' when calling purchaseCrowdsaleUsingPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TransactionSuccessResponse;

      return this.apiClient.callApi(
        '/crowdsale/purchase', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));