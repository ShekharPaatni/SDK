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
    define(['ApiClient', 'model/InsuranceCoverage', 'model/InsuranceDiscount', 'model/InsuranceQuote', 'model/PageInsuranceCoverage', 'model/PageInsuranceDiscount', 'model/PageInsuranceQuote'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InsuranceCoverage'), require('../model/InsuranceDiscount'), require('../model/InsuranceQuote'), require('../model/PageInsuranceCoverage'), require('../model/PageInsuranceDiscount'), require('../model/PageInsuranceQuote'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.InsuranceApi = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.InsuranceCoverage, root.HydrogenNucleusApi.InsuranceDiscount, root.HydrogenNucleusApi.InsuranceQuote, root.HydrogenNucleusApi.PageInsuranceCoverage, root.HydrogenNucleusApi.PageInsuranceDiscount, root.HydrogenNucleusApi.PageInsuranceQuote);
  }
}(this, function(ApiClient, InsuranceCoverage, InsuranceDiscount, InsuranceQuote, PageInsuranceCoverage, PageInsuranceDiscount, PageInsuranceQuote) {
  'use strict';

  /**
   * Insurance service.
   * @module api/InsuranceApi
   * @version 1.7.0
   */

  /**
   * Constructs a new InsuranceApi. 
   * @alias module:api/InsuranceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createInsuranceCoverageUsingPost operation.
     * @callback module:api/InsuranceApi~createInsuranceCoverageUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InsuranceCoverage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a insurance coverage request
     * Create a new insurance coverage.
     * @param {module:model/InsuranceCoverage} insuranceCoverage insuranceCoverage
     * @param {module:api/InsuranceApi~createInsuranceCoverageUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InsuranceCoverage}
     */
    this.createInsuranceCoverageUsingPost = function(insuranceCoverage, callback) {
      var postBody = insuranceCoverage;

      // verify the required parameter 'insuranceCoverage' is set
      if (insuranceCoverage === undefined || insuranceCoverage === null) {
        throw new Error("Missing the required parameter 'insuranceCoverage' when calling createInsuranceCoverageUsingPost");
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
      var returnType = InsuranceCoverage;

      return this.apiClient.callApi(
        '/insurance_coverage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createInsuranceDiscountUsingPost operation.
     * @callback module:api/InsuranceApi~createInsuranceDiscountUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InsuranceDiscount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a insurance discount request
     * Create a new insurance discount.
     * @param {module:model/InsuranceDiscount} insuranceDiscount insuranceDiscount
     * @param {module:api/InsuranceApi~createInsuranceDiscountUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InsuranceDiscount}
     */
    this.createInsuranceDiscountUsingPost = function(insuranceDiscount, callback) {
      var postBody = insuranceDiscount;

      // verify the required parameter 'insuranceDiscount' is set
      if (insuranceDiscount === undefined || insuranceDiscount === null) {
        throw new Error("Missing the required parameter 'insuranceDiscount' when calling createInsuranceDiscountUsingPost");
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
      var returnType = InsuranceDiscount;

      return this.apiClient.callApi(
        '/insurance_discount', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createInsuranceQuoteUsingPost operation.
     * @callback module:api/InsuranceApi~createInsuranceQuoteUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InsuranceQuote} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a insuranceQuote request
     * Create a new insuranceQuote request.
     * @param {module:model/InsuranceQuote} insuranceQuote insuranceQuote
     * @param {module:api/InsuranceApi~createInsuranceQuoteUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InsuranceQuote}
     */
    this.createInsuranceQuoteUsingPost = function(insuranceQuote, callback) {
      var postBody = insuranceQuote;

      // verify the required parameter 'insuranceQuote' is set
      if (insuranceQuote === undefined || insuranceQuote === null) {
        throw new Error("Missing the required parameter 'insuranceQuote' when calling createInsuranceQuoteUsingPost");
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
      var returnType = InsuranceQuote;

      return this.apiClient.callApi(
        '/insurance_quote', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInsuranceCoverageUsingDelete operation.
     * @callback module:api/InsuranceApi~deleteInsuranceCoverageUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an insurance coverage request
     * Delete an  insurance coverage.
     * @param {String} insuranceCoverageId UUID insurance_coverage_id
     * @param {module:api/InsuranceApi~deleteInsuranceCoverageUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInsuranceCoverageUsingDelete = function(insuranceCoverageId, callback) {
      var postBody = null;

      // verify the required parameter 'insuranceCoverageId' is set
      if (insuranceCoverageId === undefined || insuranceCoverageId === null) {
        throw new Error("Missing the required parameter 'insuranceCoverageId' when calling deleteInsuranceCoverageUsingDelete");
      }


      var pathParams = {
        'insurance_coverage_id': insuranceCoverageId
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
        '/insurance_coverage/{insurance_coverage_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInsuranceDiscountUsingDelete operation.
     * @callback module:api/InsuranceApi~deleteInsuranceDiscountUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an insurance discount request
     * Delete an  insurance discount.
     * @param {String} insuranceDiscountId UUID insurance_discount_id
     * @param {module:api/InsuranceApi~deleteInsuranceDiscountUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInsuranceDiscountUsingDelete = function(insuranceDiscountId, callback) {
      var postBody = null;

      // verify the required parameter 'insuranceDiscountId' is set
      if (insuranceDiscountId === undefined || insuranceDiscountId === null) {
        throw new Error("Missing the required parameter 'insuranceDiscountId' when calling deleteInsuranceDiscountUsingDelete");
      }


      var pathParams = {
        'insurance_discount_id': insuranceDiscountId
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
        '/insurance_discount/{insurance_discount_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInsuranceQuoteUsingDelete operation.
     * @callback module:api/InsuranceApi~deleteInsuranceQuoteUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a insuranceQuote request
     * Permanently delete a insuranceQuote request.
     * @param {String} insuranceQuote UUID insurance_quote_id
     * @param {String} insuranceQuoteId insurance_quote_id
     * @param {module:api/InsuranceApi~deleteInsuranceQuoteUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInsuranceQuoteUsingDelete = function(insuranceQuote, insuranceQuoteId, callback) {
      var postBody = null;

      // verify the required parameter 'insuranceQuote' is set
      if (insuranceQuote === undefined || insuranceQuote === null) {
        throw new Error("Missing the required parameter 'insuranceQuote' when calling deleteInsuranceQuoteUsingDelete");
      }

      // verify the required parameter 'insuranceQuoteId' is set
      if (insuranceQuoteId === undefined || insuranceQuoteId === null) {
        throw new Error("Missing the required parameter 'insuranceQuoteId' when calling deleteInsuranceQuoteUsingDelete");
      }


      var pathParams = {
        'insurance_quote': insuranceQuote,
        'insurance_quote_id': insuranceQuoteId
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
        '/insurance_quote/{insurance_quote_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInsuranceCoverageAllUsingGet operation.
     * @callback module:api/InsuranceApi~getInsuranceCoverageAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageInsuranceCoverage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all insurance coverage request
     * Get all new insurance coverage.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/InsuranceApi~getInsuranceCoverageAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageInsuranceCoverage}
     */
    this.getInsuranceCoverageAllUsingGet = function(opts, callback) {
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
      var returnType = PageInsuranceCoverage;

      return this.apiClient.callApi(
        '/insurance_coverage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInsuranceCoverageUsingGet operation.
     * @callback module:api/InsuranceApi~getInsuranceCoverageUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InsuranceCoverage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a insurance coverage request
     * Get a new insurance coverage.
     * @param {String} insuranceCoverageId UUID insurance_coverage_id
     * @param {module:api/InsuranceApi~getInsuranceCoverageUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InsuranceCoverage}
     */
    this.getInsuranceCoverageUsingGet = function(insuranceCoverageId, callback) {
      var postBody = null;

      // verify the required parameter 'insuranceCoverageId' is set
      if (insuranceCoverageId === undefined || insuranceCoverageId === null) {
        throw new Error("Missing the required parameter 'insuranceCoverageId' when calling getInsuranceCoverageUsingGet");
      }


      var pathParams = {
        'insurance_coverage_id': insuranceCoverageId
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
      var returnType = InsuranceCoverage;

      return this.apiClient.callApi(
        '/insurance_coverage/{insurance_coverage_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInsuranceDiscountAllUsingGet operation.
     * @callback module:api/InsuranceApi~getInsuranceDiscountAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageInsuranceDiscount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all insurance discount request
     * Get all new insurance discount.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/InsuranceApi~getInsuranceDiscountAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageInsuranceDiscount}
     */
    this.getInsuranceDiscountAllUsingGet = function(opts, callback) {
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
      var returnType = PageInsuranceDiscount;

      return this.apiClient.callApi(
        '/insurance_discount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInsuranceDiscountUsingGet operation.
     * @callback module:api/InsuranceApi~getInsuranceDiscountUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InsuranceDiscount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a insurance discount request
     * Get a new insurance discount.
     * @param {String} insuranceDiscountId  UUID insurance_discount_id
     * @param {module:api/InsuranceApi~getInsuranceDiscountUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InsuranceDiscount}
     */
    this.getInsuranceDiscountUsingGet = function(insuranceDiscountId, callback) {
      var postBody = null;

      // verify the required parameter 'insuranceDiscountId' is set
      if (insuranceDiscountId === undefined || insuranceDiscountId === null) {
        throw new Error("Missing the required parameter 'insuranceDiscountId' when calling getInsuranceDiscountUsingGet");
      }


      var pathParams = {
        'insurance_discount_id': insuranceDiscountId
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
      var returnType = InsuranceDiscount;

      return this.apiClient.callApi(
        '/insurance_discount/{insurance_discount_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInsuranceQuoteAllUsingGet operation.
     * @callback module:api/InsuranceApi~getInsuranceQuoteAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageInsuranceQuote} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all insuranceQuote requests
     * Get the information for all insuranceQuote requests.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/InsuranceApi~getInsuranceQuoteAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageInsuranceQuote}
     */
    this.getInsuranceQuoteAllUsingGet = function(opts, callback) {
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
      var returnType = PageInsuranceQuote;

      return this.apiClient.callApi(
        '/insurance_quote', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInsuranceQuoteUsingGet operation.
     * @callback module:api/InsuranceApi~getInsuranceQuoteUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InsuranceQuote} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a insuranceQuote request
     * Retrieve the information for a insuranceQuote request.
     * @param {String} insuranceQuote UUID insurance_quote_id
     * @param {String} insuranceQuoteId insurance_quote_id
     * @param {module:api/InsuranceApi~getInsuranceQuoteUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InsuranceQuote}
     */
    this.getInsuranceQuoteUsingGet = function(insuranceQuote, insuranceQuoteId, callback) {
      var postBody = null;

      // verify the required parameter 'insuranceQuote' is set
      if (insuranceQuote === undefined || insuranceQuote === null) {
        throw new Error("Missing the required parameter 'insuranceQuote' when calling getInsuranceQuoteUsingGet");
      }

      // verify the required parameter 'insuranceQuoteId' is set
      if (insuranceQuoteId === undefined || insuranceQuoteId === null) {
        throw new Error("Missing the required parameter 'insuranceQuoteId' when calling getInsuranceQuoteUsingGet");
      }


      var pathParams = {
        'insurance_quote': insuranceQuote,
        'insurance_quote_id': insuranceQuoteId
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
      var returnType = InsuranceQuote;

      return this.apiClient.callApi(
        '/insurance_quote/{insurance_quote_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInsuranceCoverageUsingPut operation.
     * @callback module:api/InsuranceApi~updateInsuranceCoverageUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InsuranceCoverage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a insurance coverage request
     * Update a new insurance coverage.
     * @param {module:model/InsuranceCoverage} insuranceCoverage insurance_coverage
     * @param {String} insuranceCoverageId UUID insurance_coverage_id
     * @param {module:api/InsuranceApi~updateInsuranceCoverageUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InsuranceCoverage}
     */
    this.updateInsuranceCoverageUsingPut = function(insuranceCoverage, insuranceCoverageId, callback) {
      var postBody = insuranceCoverage;

      // verify the required parameter 'insuranceCoverage' is set
      if (insuranceCoverage === undefined || insuranceCoverage === null) {
        throw new Error("Missing the required parameter 'insuranceCoverage' when calling updateInsuranceCoverageUsingPut");
      }

      // verify the required parameter 'insuranceCoverageId' is set
      if (insuranceCoverageId === undefined || insuranceCoverageId === null) {
        throw new Error("Missing the required parameter 'insuranceCoverageId' when calling updateInsuranceCoverageUsingPut");
      }


      var pathParams = {
        'insurance_coverage_id': insuranceCoverageId
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
      var returnType = InsuranceCoverage;

      return this.apiClient.callApi(
        '/insurance_coverage/{insurance_coverage_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInsuranceDiscountUsingPut operation.
     * @callback module:api/InsuranceApi~updateInsuranceDiscountUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InsuranceDiscount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an insurance discount 
     * Update an new insurance .
     * @param {module:model/InsuranceDiscount} insuranceDiscount insurance_discount
     * @param {String} insuranceDiscountId UUID insurance_discount_id
     * @param {module:api/InsuranceApi~updateInsuranceDiscountUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InsuranceDiscount}
     */
    this.updateInsuranceDiscountUsingPut = function(insuranceDiscount, insuranceDiscountId, callback) {
      var postBody = insuranceDiscount;

      // verify the required parameter 'insuranceDiscount' is set
      if (insuranceDiscount === undefined || insuranceDiscount === null) {
        throw new Error("Missing the required parameter 'insuranceDiscount' when calling updateInsuranceDiscountUsingPut");
      }

      // verify the required parameter 'insuranceDiscountId' is set
      if (insuranceDiscountId === undefined || insuranceDiscountId === null) {
        throw new Error("Missing the required parameter 'insuranceDiscountId' when calling updateInsuranceDiscountUsingPut");
      }


      var pathParams = {
        'insurance_discount_id': insuranceDiscountId
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
      var returnType = InsuranceDiscount;

      return this.apiClient.callApi(
        '/insurance_discount/{insurance_discount_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateInsuranceQuoteUsingPut operation.
     * @callback module:api/InsuranceApi~updateInsuranceQuoteUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InsuranceQuote} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a insuranceQuote request
     * Update the information for a insuranceQuote request.
     * @param {module:model/InsuranceQuote} insuranceQuote insurance_quote
     * @param {String} insuranceQuoteId UUID insurance_quote_id
     * @param {module:api/InsuranceApi~updateInsuranceQuoteUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InsuranceQuote}
     */
    this.updateInsuranceQuoteUsingPut = function(insuranceQuote, insuranceQuoteId, callback) {
      var postBody = insuranceQuote;

      // verify the required parameter 'insuranceQuote' is set
      if (insuranceQuote === undefined || insuranceQuote === null) {
        throw new Error("Missing the required parameter 'insuranceQuote' when calling updateInsuranceQuoteUsingPut");
      }

      // verify the required parameter 'insuranceQuoteId' is set
      if (insuranceQuoteId === undefined || insuranceQuoteId === null) {
        throw new Error("Missing the required parameter 'insuranceQuoteId' when calling updateInsuranceQuoteUsingPut");
      }


      var pathParams = {
        'insurance_quote_id': insuranceQuoteId
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
      var returnType = InsuranceQuote;

      return this.apiClient.callApi(
        '/insurance_quote/{insurance_quote_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));