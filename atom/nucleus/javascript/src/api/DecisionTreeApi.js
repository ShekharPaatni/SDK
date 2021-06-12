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
    define(['ApiClient', 'model/DecisionTree', 'model/DecisionTreeCO', 'model/DecisionTreeResultVO', 'model/Node', 'model/NodeRelationship', 'model/PageDecisionTree', 'model/PageNode', 'model/PageNodeRelationship'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DecisionTree'), require('../model/DecisionTreeCO'), require('../model/DecisionTreeResultVO'), require('../model/Node'), require('../model/NodeRelationship'), require('../model/PageDecisionTree'), require('../model/PageNode'), require('../model/PageNodeRelationship'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.DecisionTreeApi = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.DecisionTree, root.HydrogenNucleusApi.DecisionTreeCO, root.HydrogenNucleusApi.DecisionTreeResultVO, root.HydrogenNucleusApi.Node, root.HydrogenNucleusApi.NodeRelationship, root.HydrogenNucleusApi.PageDecisionTree, root.HydrogenNucleusApi.PageNode, root.HydrogenNucleusApi.PageNodeRelationship);
  }
}(this, function(ApiClient, DecisionTree, DecisionTreeCO, DecisionTreeResultVO, Node, NodeRelationship, PageDecisionTree, PageNode, PageNodeRelationship) {
  'use strict';

  /**
   * DecisionTree service.
   * @module api/DecisionTreeApi
   * @version 1.9.1
   */

  /**
   * Constructs a new DecisionTreeApi. 
   * @alias module:api/DecisionTreeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createDecisionTreeResultUsingPost operation.
     * @callback module:api/DecisionTreeApi~createDecisionTreeResultUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DecisionTreeResultVO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Decision tree result
     * Decision tree result. 
     * @param {module:model/DecisionTreeCO} decisionTreeCO decisionTreeCO
     * @param {module:api/DecisionTreeApi~createDecisionTreeResultUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DecisionTreeResultVO}
     */
    this.createDecisionTreeResultUsingPost = function(decisionTreeCO, callback) {
      var postBody = decisionTreeCO;

      // verify the required parameter 'decisionTreeCO' is set
      if (decisionTreeCO === undefined || decisionTreeCO === null) {
        throw new Error("Missing the required parameter 'decisionTreeCO' when calling createDecisionTreeResultUsingPost");
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
      var returnType = DecisionTreeResultVO;

      return this.apiClient.callApi(
        '/nucleus/v1/decision_tree_result', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createDecisionTreeUsingPost operation.
     * @callback module:api/DecisionTreeApi~createDecisionTreeUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DecisionTree} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a decision tree
     * Create a new decision tree for your firm.
     * @param {module:model/DecisionTree} decisionTree decisionTree
     * @param {module:api/DecisionTreeApi~createDecisionTreeUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DecisionTree}
     */
    this.createDecisionTreeUsingPost = function(decisionTree, callback) {
      var postBody = decisionTree;

      // verify the required parameter 'decisionTree' is set
      if (decisionTree === undefined || decisionTree === null) {
        throw new Error("Missing the required parameter 'decisionTree' when calling createDecisionTreeUsingPost");
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
      var returnType = DecisionTree;

      return this.apiClient.callApi(
        '/nucleus/v1/decision_tree', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createNodeRelationshipUsingPost operation.
     * @callback module:api/DecisionTreeApi~createNodeRelationshipUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeRelationship} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a node relationship
     * Create a new node relationship for your firm.
     * @param {module:model/NodeRelationship} node node
     * @param {module:api/DecisionTreeApi~createNodeRelationshipUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NodeRelationship}
     */
    this.createNodeRelationshipUsingPost = function(node, callback) {
      var postBody = node;

      // verify the required parameter 'node' is set
      if (node === undefined || node === null) {
        throw new Error("Missing the required parameter 'node' when calling createNodeRelationshipUsingPost");
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
      var returnType = NodeRelationship;

      return this.apiClient.callApi(
        '/nucleus/v1/node_relationship', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createNodeUsingPost operation.
     * @callback module:api/DecisionTreeApi~createNodeUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Node} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a node
     * Create a new node for your firm that can be used in a decision tree and mapped to other nodes.
     * @param {module:model/Node} node node
     * @param {module:api/DecisionTreeApi~createNodeUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Node}
     */
    this.createNodeUsingPost = function(node, callback) {
      var postBody = node;

      // verify the required parameter 'node' is set
      if (node === undefined || node === null) {
        throw new Error("Missing the required parameter 'node' when calling createNodeUsingPost");
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
      var returnType = Node;

      return this.apiClient.callApi(
        '/nucleus/v1/node', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteDecisionTreeUsingDelete operation.
     * @callback module:api/DecisionTreeApi~deleteDecisionTreeUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a decision tree
     * Permanently delete a decision tree.
     * @param {String} decisionTreeId UUID decision_tree_id
     * @param {module:api/DecisionTreeApi~deleteDecisionTreeUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteDecisionTreeUsingDelete = function(decisionTreeId, callback) {
      var postBody = null;

      // verify the required parameter 'decisionTreeId' is set
      if (decisionTreeId === undefined || decisionTreeId === null) {
        throw new Error("Missing the required parameter 'decisionTreeId' when calling deleteDecisionTreeUsingDelete");
      }


      var pathParams = {
        'decision_tree_id': decisionTreeId
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
        '/nucleus/v1/decision_tree/{decision_tree_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteNodeRelationshipUsingDelete operation.
     * @callback module:api/DecisionTreeApi~deleteNodeRelationshipUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a node relationship
     * Permanently delete a node relationship.
     * @param {String} nodeRelationshipId UUID node_relationship_id
     * @param {module:api/DecisionTreeApi~deleteNodeRelationshipUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteNodeRelationshipUsingDelete = function(nodeRelationshipId, callback) {
      var postBody = null;

      // verify the required parameter 'nodeRelationshipId' is set
      if (nodeRelationshipId === undefined || nodeRelationshipId === null) {
        throw new Error("Missing the required parameter 'nodeRelationshipId' when calling deleteNodeRelationshipUsingDelete");
      }


      var pathParams = {
        'node_relationship_id': nodeRelationshipId
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
        '/nucleus/v1/node_relationship/{node_relationship_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteNodeUsingDelete operation.
     * @callback module:api/DecisionTreeApi~deleteNodeUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a node
     * Permanently delete a node.
     * @param {String} nodeId UUID node_id
     * @param {module:api/DecisionTreeApi~deleteNodeUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteNodeUsingDelete = function(nodeId, callback) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId === undefined || nodeId === null) {
        throw new Error("Missing the required parameter 'nodeId' when calling deleteNodeUsingDelete");
      }


      var pathParams = {
        'node_id': nodeId
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
        '/nucleus/v1/node/{node_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDecisionTreeAllUsingGet operation.
     * @callback module:api/DecisionTreeApi~getDecisionTreeAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageDecisionTree} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all decision tree
     * Get the information for all decision trees defined for your firm.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/DecisionTreeApi~getDecisionTreeAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageDecisionTree}
     */
    this.getDecisionTreeAllUsingGet = function(opts, callback) {
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
      var returnType = PageDecisionTree;

      return this.apiClient.callApi(
        '/nucleus/v1/decision_tree', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDecisionTreeUsingGet operation.
     * @callback module:api/DecisionTreeApi~getDecisionTreeUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DecisionTree} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a decision tree
     * Retrieve the information for a decision tree.
     * @param {String} decisionTreeId UUID decision_tree_id
     * @param {module:api/DecisionTreeApi~getDecisionTreeUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DecisionTree}
     */
    this.getDecisionTreeUsingGet = function(decisionTreeId, callback) {
      var postBody = null;

      // verify the required parameter 'decisionTreeId' is set
      if (decisionTreeId === undefined || decisionTreeId === null) {
        throw new Error("Missing the required parameter 'decisionTreeId' when calling getDecisionTreeUsingGet");
      }


      var pathParams = {
        'decision_tree_id': decisionTreeId
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
      var returnType = DecisionTree;

      return this.apiClient.callApi(
        '/nucleus/v1/decision_tree/{decision_tree_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNodeAllUsingGet operation.
     * @callback module:api/DecisionTreeApi~getNodeAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageNode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all nodes
     * List all nodes that are defined for your firm.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/DecisionTreeApi~getNodeAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageNode}
     */
    this.getNodeAllUsingGet = function(opts, callback) {
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
      var returnType = PageNode;

      return this.apiClient.callApi(
        '/nucleus/v1/node', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNodeRelationshipAllUsingGet operation.
     * @callback module:api/DecisionTreeApi~getNodeRelationshipAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageNodeRelationship} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all node relationships
     * Get the information for all the node relationships defined for your firm.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/DecisionTreeApi~getNodeRelationshipAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageNodeRelationship}
     */
    this.getNodeRelationshipAllUsingGet = function(opts, callback) {
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
      var returnType = PageNodeRelationship;

      return this.apiClient.callApi(
        '/nucleus/v1/node_relationship', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNodeRelationshipUsingGet operation.
     * @callback module:api/DecisionTreeApi~getNodeRelationshipUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeRelationship} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a node relationship
     * Retrieve the information for a node relationship.
     * @param {String} nodeRelationshipId UUID node_relationship_id
     * @param {module:api/DecisionTreeApi~getNodeRelationshipUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NodeRelationship}
     */
    this.getNodeRelationshipUsingGet = function(nodeRelationshipId, callback) {
      var postBody = null;

      // verify the required parameter 'nodeRelationshipId' is set
      if (nodeRelationshipId === undefined || nodeRelationshipId === null) {
        throw new Error("Missing the required parameter 'nodeRelationshipId' when calling getNodeRelationshipUsingGet");
      }


      var pathParams = {
        'node_relationship_id': nodeRelationshipId
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
      var returnType = NodeRelationship;

      return this.apiClient.callApi(
        '/nucleus/v1/node_relationship/{node_relationship_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNodeUsingGet operation.
     * @callback module:api/DecisionTreeApi~getNodeUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Node} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a node
     * Retrieve the information for a node.
     * @param {String} nodeId UUID node_id
     * @param {module:api/DecisionTreeApi~getNodeUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Node}
     */
    this.getNodeUsingGet = function(nodeId, callback) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId === undefined || nodeId === null) {
        throw new Error("Missing the required parameter 'nodeId' when calling getNodeUsingGet");
      }


      var pathParams = {
        'node_id': nodeId
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
      var returnType = Node;

      return this.apiClient.callApi(
        '/nucleus/v1/node/{node_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateDecisionTreeUsingPut operation.
     * @callback module:api/DecisionTreeApi~updateDecisionTreeUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DecisionTree} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a decision tree
     * Updated the information for a decision tree.
     * @param {Object} decisionTree decision_tree
     * @param {String} decisionTreeId UUID decision_tree_id
     * @param {module:api/DecisionTreeApi~updateDecisionTreeUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DecisionTree}
     */
    this.updateDecisionTreeUsingPut = function(decisionTree, decisionTreeId, callback) {
      var postBody = decisionTree;

      // verify the required parameter 'decisionTree' is set
      if (decisionTree === undefined || decisionTree === null) {
        throw new Error("Missing the required parameter 'decisionTree' when calling updateDecisionTreeUsingPut");
      }

      // verify the required parameter 'decisionTreeId' is set
      if (decisionTreeId === undefined || decisionTreeId === null) {
        throw new Error("Missing the required parameter 'decisionTreeId' when calling updateDecisionTreeUsingPut");
      }


      var pathParams = {
        'decision_tree_id': decisionTreeId
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
      var returnType = DecisionTree;

      return this.apiClient.callApi(
        '/nucleus/v1/decision_tree/{decision_tree_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNodeRelationshipUsingPut operation.
     * @callback module:api/DecisionTreeApi~updateNodeRelationshipUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeRelationship} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a node relationship
     * Update the information for a node relationship.
     * @param {Object} jsonNode jsonNode
     * @param {String} nodeRelationshipId UUID node_relationship_id
     * @param {module:api/DecisionTreeApi~updateNodeRelationshipUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NodeRelationship}
     */
    this.updateNodeRelationshipUsingPut = function(jsonNode, nodeRelationshipId, callback) {
      var postBody = jsonNode;

      // verify the required parameter 'jsonNode' is set
      if (jsonNode === undefined || jsonNode === null) {
        throw new Error("Missing the required parameter 'jsonNode' when calling updateNodeRelationshipUsingPut");
      }

      // verify the required parameter 'nodeRelationshipId' is set
      if (nodeRelationshipId === undefined || nodeRelationshipId === null) {
        throw new Error("Missing the required parameter 'nodeRelationshipId' when calling updateNodeRelationshipUsingPut");
      }


      var pathParams = {
        'node_relationship_id': nodeRelationshipId
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
      var returnType = NodeRelationship;

      return this.apiClient.callApi(
        '/nucleus/v1/node_relationship/{node_relationship_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNodeUsingPut operation.
     * @callback module:api/DecisionTreeApi~updateNodeUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Node} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a node
     * Updated the information for a node.
     * @param {Object} jsonNode jsonNode
     * @param {String} nodeId UUID node_id
     * @param {module:api/DecisionTreeApi~updateNodeUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Node}
     */
    this.updateNodeUsingPut = function(jsonNode, nodeId, callback) {
      var postBody = jsonNode;

      // verify the required parameter 'jsonNode' is set
      if (jsonNode === undefined || jsonNode === null) {
        throw new Error("Missing the required parameter 'jsonNode' when calling updateNodeUsingPut");
      }

      // verify the required parameter 'nodeId' is set
      if (nodeId === undefined || nodeId === null) {
        throw new Error("Missing the required parameter 'nodeId' when calling updateNodeUsingPut");
      }


      var pathParams = {
        'node_id': nodeId
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
      var returnType = Node;

      return this.apiClient.callApi(
        '/nucleus/v1/node/{node_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
