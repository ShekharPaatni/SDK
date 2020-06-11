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
    define(['ApiClient', 'model/Benchmark', 'model/DateDoubleVO', 'model/PageBenchmark'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Benchmark'), require('../model/DateDoubleVO'), require('../model/PageBenchmark'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenAtomApi) {
      root.HydrogenAtomApi = {};
    }
    root.HydrogenAtomApi.BenchmarkApi = factory(root.HydrogenAtomApi.ApiClient, root.HydrogenAtomApi.Benchmark, root.HydrogenAtomApi.DateDoubleVO, root.HydrogenAtomApi.PageBenchmark);
  }
}(this, function(ApiClient, Benchmark, DateDoubleVO, PageBenchmark) {
  'use strict';

  /**
   * Benchmark service.
   * @module api/BenchmarkApi
   * @version 1.7.0
   */

  /**
   * Constructs a new BenchmarkApi. 
   * @alias module:api/BenchmarkApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createBenchmarkUsingPost operation.
     * @callback module:api/BenchmarkApi~createBenchmarkUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Benchmark} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a benchmark
     * Create a new benchmark for your firm.
     * @param {module:model/Benchmark} benchmark benchmark
     * @param {module:api/BenchmarkApi~createBenchmarkUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Benchmark}
     */
    this.createBenchmarkUsingPost = function(benchmark, callback) {
      var postBody = benchmark;

      // verify the required parameter 'benchmark' is set
      if (benchmark === undefined || benchmark === null) {
        throw new Error("Missing the required parameter 'benchmark' when calling createBenchmarkUsingPost");
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
      var returnType = Benchmark;

      return this.apiClient.callApi(
        '/benchmark', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteBenchmarkUsingDelete operation.
     * @callback module:api/BenchmarkApi~deleteBenchmarkUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a benchmark
     * Permanently delete a benchmark.
     * @param {String} benchmarkId UUID benchmark_id
     * @param {module:api/BenchmarkApi~deleteBenchmarkUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBenchmarkUsingDelete = function(benchmarkId, callback) {
      var postBody = null;

      // verify the required parameter 'benchmarkId' is set
      if (benchmarkId === undefined || benchmarkId === null) {
        throw new Error("Missing the required parameter 'benchmarkId' when calling deleteBenchmarkUsingDelete");
      }


      var pathParams = {
        'benchmark_id': benchmarkId
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
        '/benchmark/{benchmark_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBenchmarkAllUsingGet operation.
     * @callback module:api/BenchmarkApi~getBenchmarkAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBenchmark} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all benchmarks
     * Get details for all benchmarks defined for your firm.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/BenchmarkApi~getBenchmarkAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBenchmark}
     */
    this.getBenchmarkAllUsingGet = function(opts, callback) {
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
      var returnType = PageBenchmark;

      return this.apiClient.callApi(
        '/benchmark', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBenchmarkAssetSizeAllUsingGet operation.
     * @callback module:api/BenchmarkApi~getBenchmarkAssetSizeAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DateDoubleVO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all benchmark asset sizes
     * Get a list of asset sizes by date for a benchmark.
     * @param {String} benchmarkId benchmark_id
     * @param {Object} opts Optional parameters
     * @param {Date} opts.endDate end_date (default to null)
     * @param {String} opts.sortType sort_type
     * @param {Date} opts.startDate start_date (default to null)
     * @param {module:api/BenchmarkApi~getBenchmarkAssetSizeAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DateDoubleVO>}
     */
    this.getBenchmarkAssetSizeAllUsingGet = function(benchmarkId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'benchmarkId' is set
      if (benchmarkId === undefined || benchmarkId === null) {
        throw new Error("Missing the required parameter 'benchmarkId' when calling getBenchmarkAssetSizeAllUsingGet");
      }


      var pathParams = {
        'benchmark_id': benchmarkId
      };
      var queryParams = {
        'end_date': opts['endDate'],
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
      var returnType = [DateDoubleVO];

      return this.apiClient.callApi(
        '/benchmark/{benchmark_id}/asset_size', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBenchmarkUsingGet operation.
     * @callback module:api/BenchmarkApi~getBenchmarkUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Benchmark} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a benchmark
     * Retrieve the information for a benchmark.
     * @param {String} benchmarkId UUID benchmark_id
     * @param {module:api/BenchmarkApi~getBenchmarkUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Benchmark}
     */
    this.getBenchmarkUsingGet = function(benchmarkId, callback) {
      var postBody = null;

      // verify the required parameter 'benchmarkId' is set
      if (benchmarkId === undefined || benchmarkId === null) {
        throw new Error("Missing the required parameter 'benchmarkId' when calling getBenchmarkUsingGet");
      }


      var pathParams = {
        'benchmark_id': benchmarkId
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
      var returnType = Benchmark;

      return this.apiClient.callApi(
        '/benchmark/{benchmark_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBenchmarkUsingPut operation.
     * @callback module:api/BenchmarkApi~updateBenchmarkUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Benchmark} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a benchmark
     * Updated the information for a benchmark.
     * @param {module:model/Benchmark} benchmark benchmark
     * @param {String} benchmarkId UUID benchmark_id
     * @param {module:api/BenchmarkApi~updateBenchmarkUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Benchmark}
     */
    this.updateBenchmarkUsingPut = function(benchmark, benchmarkId, callback) {
      var postBody = benchmark;

      // verify the required parameter 'benchmark' is set
      if (benchmark === undefined || benchmark === null) {
        throw new Error("Missing the required parameter 'benchmark' when calling updateBenchmarkUsingPut");
      }

      // verify the required parameter 'benchmarkId' is set
      if (benchmarkId === undefined || benchmarkId === null) {
        throw new Error("Missing the required parameter 'benchmarkId' when calling updateBenchmarkUsingPut");
      }


      var pathParams = {
        'benchmark_id': benchmarkId
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
      var returnType = Benchmark;

      return this.apiClient.callApi(
        '/benchmark/{benchmark_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
