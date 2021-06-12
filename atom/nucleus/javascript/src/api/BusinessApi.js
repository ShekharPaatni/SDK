/**
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.1
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
    define(['ApiClient', 'model/AvailableDateDoubleVO', 'model/Business', 'model/PageBusiness', 'model/PagePortfolioHoldingAgg', 'model/PagePortfolioTransaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AvailableDateDoubleVO'), require('../model/Business'), require('../model/PageBusiness'), require('../model/PagePortfolioHoldingAgg'), require('../model/PagePortfolioTransaction'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.BusinessApi = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.AvailableDateDoubleVO, root.HydrogenNucleusApi.Business, root.HydrogenNucleusApi.PageBusiness, root.HydrogenNucleusApi.PagePortfolioHoldingAgg, root.HydrogenNucleusApi.PagePortfolioTransaction);
  }
}(this, function(ApiClient, AvailableDateDoubleVO, Business, PageBusiness, PagePortfolioHoldingAgg, PagePortfolioTransaction) {
  'use strict';

  /**
   * Business service.
   * @module api/BusinessApi
   * @version 1.9.1
   */

  /**
   * Constructs a new BusinessApi. 
   * @alias module:api/BusinessApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createBusinessUsingPost operation.
     * @callback module:api/BusinessApi~createBusinessUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Business} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a business
     * Create a new business, or register a new business.
     * @param {module:model/Business} businessRequest businessRequest
     * @param {module:api/BusinessApi~createBusinessUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Business}
     */
    this.createBusinessUsingPost = function(businessRequest, callback) {
      var postBody = businessRequest;

      // verify the required parameter 'businessRequest' is set
      if (businessRequest === undefined || businessRequest === null) {
        throw new Error("Missing the required parameter 'businessRequest' when calling createBusinessUsingPost");
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
      var returnType = Business;

      return this.apiClient.callApi(
        '/nucleus/v1/business', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBusinessUsingDelete operation.
     * @callback module:api/BusinessApi~deleteBusinessUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a business
     * Permanently delete a business.
     * @param {String} businessId UUID business_id
     * @param {module:api/BusinessApi~deleteBusinessUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBusinessUsingDelete = function(businessId, callback) {
      var postBody = null;

      // verify the required parameter 'businessId' is set
      if (businessId === undefined || businessId === null) {
        throw new Error("Missing the required parameter 'businessId' when calling deleteBusinessUsingDelete");
      }


      var pathParams = {
        'business_id': businessId
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
        '/nucleus/v1/business/{business_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBusinessAllUsingGet operation.
     * @callback module:api/BusinessApi~getBusinessAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBusiness} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all business
     * Get details for all business.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/BusinessApi~getBusinessAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBusiness}
     */
    this.getBusinessAllUsingGet = function(opts, callback) {
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
      var returnType = PageBusiness;

      return this.apiClient.callApi(
        '/nucleus/v1/business', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBusinessAssetSizeUsingGet operation.
     * @callback module:api/BusinessApi~getBusinessAssetSizeUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AvailableDateDoubleVO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all business asset sizes
     * Get a list of asset sizes per date for a business.
     * @param {String} businessId UUID business_id
     * @param {Object} opts Optional parameters
     * @param {String} opts.currencyConversion Currency Code
     * @param {Date} opts.endDate end date (default to null)
     * @param {Boolean} opts.excludeSubledger exclude_subledger (default to false)
     * @param {Boolean} opts.getLatest true or false
     * @param {String} opts.sortType  Quarter (Q), Monthly (M) , Annually (Y), Daily (D) --caps matter, codes in ()
     * @param {Date} opts.startDate start date (default to null)
     * @param {module:api/BusinessApi~getBusinessAssetSizeUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AvailableDateDoubleVO>}
     */
    this.getBusinessAssetSizeUsingGet = function(businessId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'businessId' is set
      if (businessId === undefined || businessId === null) {
        throw new Error("Missing the required parameter 'businessId' when calling getBusinessAssetSizeUsingGet");
      }


      var pathParams = {
        'business_id': businessId
      };
      var queryParams = {
        'currency_conversion': opts['currencyConversion'],
        'end_date': opts['endDate'],
        'exclude_subledger': opts['excludeSubledger'],
        'get_latest': opts['getLatest'],
        'sort_type': opts['sortType'],
        'start_date': opts['startDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = [AvailableDateDoubleVO];

      return this.apiClient.callApi(
        '/nucleus/v1/business/{business_id}/asset_size', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBusinessClientTransactionAllUsingGet operation.
     * @callback module:api/BusinessApi~getBusinessClientTransactionAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePortfolioTransaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all business transactions
     * Get the information for all transactions under all client registered with your business.
     * @param {String} businessId UUID business_id
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.currencyConversion currency_conversion
     * @param {String} opts.endDate end date - yyyy-mm-dd
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {String} opts.startDate start date - yyyy-mm-dd
     * @param {module:api/BusinessApi~getBusinessClientTransactionAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagePortfolioTransaction}
     */
    this.getBusinessClientTransactionAllUsingGet = function(businessId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'businessId' is set
      if (businessId === undefined || businessId === null) {
        throw new Error("Missing the required parameter 'businessId' when calling getBusinessClientTransactionAllUsingGet");
      }


      var pathParams = {
        'business_id': businessId
      };
      var queryParams = {
        'ascending': opts['ascending'],
        'currency_conversion': opts['currencyConversion'],
        'end_date': opts['endDate'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page': opts['page'],
        'size': opts['size'],
        'start_date': opts['startDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = PagePortfolioTransaction;

      return this.apiClient.callApi(
        '/nucleus/v1/business/{business_id}/transaction', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBusinessHoldingUsingGet operation.
     * @callback module:api/BusinessApi~getBusinessHoldingUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePortfolioHoldingAgg} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all business holdings
     * Get a list of holdings for a business.
     * @param {String} businessId UUID business_id
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.currencyConversion Currency Code
     * @param {String} opts.endDate end date - yyyy-mm-dd
     * @param {String} opts.filter filter
     * @param {Boolean} opts.getLatest true or false
     * @param {String} opts.orderBy order_by (default to date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {String} opts.startDate start date - yyyy-mm-dd
     * @param {module:api/BusinessApi~getBusinessHoldingUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PagePortfolioHoldingAgg}
     */
    this.getBusinessHoldingUsingGet = function(businessId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'businessId' is set
      if (businessId === undefined || businessId === null) {
        throw new Error("Missing the required parameter 'businessId' when calling getBusinessHoldingUsingGet");
      }


      var pathParams = {
        'business_id': businessId
      };
      var queryParams = {
        'ascending': opts['ascending'],
        'currency_conversion': opts['currencyConversion'],
        'end_date': opts['endDate'],
        'filter': opts['filter'],
        'get_latest': opts['getLatest'],
        'order_by': opts['orderBy'],
        'page': opts['page'],
        'size': opts['size'],
        'start_date': opts['startDate']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = PagePortfolioHoldingAgg;

      return this.apiClient.callApi(
        '/nucleus/v1/business/{business_id}/holding', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBusinessUsingGet operation.
     * @callback module:api/BusinessApi~getBusinessUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Business} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a business
     * Retrieve the information for a business.
     * @param {String} businessId UUID business_id
     * @param {module:api/BusinessApi~getBusinessUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Business}
     */
    this.getBusinessUsingGet = function(businessId, callback) {
      var postBody = null;

      // verify the required parameter 'businessId' is set
      if (businessId === undefined || businessId === null) {
        throw new Error("Missing the required parameter 'businessId' when calling getBusinessUsingGet");
      }


      var pathParams = {
        'business_id': businessId
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
      var returnType = Business;

      return this.apiClient.callApi(
        '/nucleus/v1/business/{business_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBusinessUsingPut operation.
     * @callback module:api/BusinessApi~updateBusinessUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Business} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a business
     * Update the information for a business.
     * @param {Object} business business
     * @param {String} businessId UUID business_id
     * @param {module:api/BusinessApi~updateBusinessUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Business}
     */
    this.updateBusinessUsingPut = function(business, businessId, callback) {
      var postBody = business;

      // verify the required parameter 'business' is set
      if (business === undefined || business === null) {
        throw new Error("Missing the required parameter 'business' when calling updateBusinessUsingPut");
      }

      // verify the required parameter 'businessId' is set
      if (businessId === undefined || businessId === null) {
        throw new Error("Missing the required parameter 'businessId' when calling updateBusinessUsingPut");
      }


      var pathParams = {
        'business_id': businessId
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
      var returnType = Business;

      return this.apiClient.callApi(
        '/nucleus/v1/business/{business_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
