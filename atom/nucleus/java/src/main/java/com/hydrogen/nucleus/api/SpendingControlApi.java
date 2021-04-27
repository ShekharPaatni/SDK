/*
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.nucleus.api;

import com.hydrogen.nucleus.ApiCallback;
import com.hydrogen.nucleus.ApiClient;
import com.hydrogen.nucleus.ApiException;
import com.hydrogen.nucleus.ApiResponse;
import com.hydrogen.nucleus.Configuration;
import com.hydrogen.nucleus.Pair;
import com.hydrogen.nucleus.ProgressRequestBody;
import com.hydrogen.nucleus.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import com.hydrogen.nucleus.model.PageSpendingControl;
import com.hydrogen.nucleus.model.SpendingControl;
import java.util.UUID;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SpendingControlApi {
    private ApiClient apiClient;

    public SpendingControlApi() {
        this(Configuration.getDefaultApiClient());
    }

    public SpendingControlApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for createSpendingControlUsingPost
     * @param spendingControl spendingControl (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call createSpendingControlUsingPostCall(SpendingControl spendingControl, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = spendingControl;

        // create path and map variables
        String localVarPath = "/nucleus/v1/spending_control";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "*/*"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "oauth2" };
        return apiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call createSpendingControlUsingPostValidateBeforeCall(SpendingControl spendingControl, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'spendingControl' is set
        if (spendingControl == null) {
            throw new ApiException("Missing the required parameter 'spendingControl' when calling createSpendingControlUsingPost(Async)");
        }
        

        com.squareup.okhttp.Call call = createSpendingControlUsingPostCall(spendingControl, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Create a Spending Control
     * Create a new Spending Control.
     * @param spendingControl spendingControl (required)
     * @return SpendingControl
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public SpendingControl createSpendingControlUsingPost(SpendingControl spendingControl) throws ApiException {
        ApiResponse<SpendingControl> resp = createSpendingControlUsingPostWithHttpInfo(spendingControl);
        return resp.getData();
    }

    /**
     * Create a Spending Control
     * Create a new Spending Control.
     * @param spendingControl spendingControl (required)
     * @return ApiResponse&lt;SpendingControl&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<SpendingControl> createSpendingControlUsingPostWithHttpInfo(SpendingControl spendingControl) throws ApiException {
        com.squareup.okhttp.Call call = createSpendingControlUsingPostValidateBeforeCall(spendingControl, null, null);
        Type localVarReturnType = new TypeToken<SpendingControl>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Create a Spending Control (asynchronously)
     * Create a new Spending Control.
     * @param spendingControl spendingControl (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call createSpendingControlUsingPostAsync(SpendingControl spendingControl, final ApiCallback<SpendingControl> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = createSpendingControlUsingPostValidateBeforeCall(spendingControl, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<SpendingControl>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for deleteSpendingControlUsingDelete
     * @param spendingControlId spending_control_id (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call deleteSpendingControlUsingDeleteCall(UUID spendingControlId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/nucleus/v1/spending_control/{spending_control_id}"
            .replaceAll("\\{" + "spending_control_id" + "\\}", apiClient.escapeString(spendingControlId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "*/*"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "oauth2" };
        return apiClient.buildCall(localVarPath, "DELETE", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call deleteSpendingControlUsingDeleteValidateBeforeCall(UUID spendingControlId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'spendingControlId' is set
        if (spendingControlId == null) {
            throw new ApiException("Missing the required parameter 'spendingControlId' when calling deleteSpendingControlUsingDelete(Async)");
        }
        

        com.squareup.okhttp.Call call = deleteSpendingControlUsingDeleteCall(spendingControlId, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Delete a Spending Control
     * Permanently Delete Spending Control.
     * @param spendingControlId spending_control_id (required)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public void deleteSpendingControlUsingDelete(UUID spendingControlId) throws ApiException {
        deleteSpendingControlUsingDeleteWithHttpInfo(spendingControlId);
    }

    /**
     * Delete a Spending Control
     * Permanently Delete Spending Control.
     * @param spendingControlId spending_control_id (required)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<Void> deleteSpendingControlUsingDeleteWithHttpInfo(UUID spendingControlId) throws ApiException {
        com.squareup.okhttp.Call call = deleteSpendingControlUsingDeleteValidateBeforeCall(spendingControlId, null, null);
        return apiClient.execute(call);
    }

    /**
     * Delete a Spending Control (asynchronously)
     * Permanently Delete Spending Control.
     * @param spendingControlId spending_control_id (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call deleteSpendingControlUsingDeleteAsync(UUID spendingControlId, final ApiCallback<Void> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = deleteSpendingControlUsingDeleteValidateBeforeCall(spendingControlId, progressListener, progressRequestListener);
        apiClient.executeAsync(call, callback);
        return call;
    }
    /**
     * Build call for getSpendingControlAllUsingGet
     * @param ascending ascending (optional, default to false)
     * @param filter filter (optional)
     * @param orderBy order_by (optional, default to update_date)
     * @param page page (optional, default to 0)
     * @param size size (optional, default to 25)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call getSpendingControlAllUsingGetCall(Boolean ascending, String filter, String orderBy, Integer page, Integer size, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/nucleus/v1/spending_control";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (ascending != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("ascending", ascending));
        if (filter != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("filter", filter));
        if (orderBy != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("order_by", orderBy));
        if (page != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("page", page));
        if (size != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("size", size));

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "oauth2" };
        return apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call getSpendingControlAllUsingGetValidateBeforeCall(Boolean ascending, String filter, String orderBy, Integer page, Integer size, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        

        com.squareup.okhttp.Call call = getSpendingControlAllUsingGetCall(ascending, filter, orderBy, page, size, progressListener, progressRequestListener);
        return call;

    }

    /**
     * List all Spending Control
     * List all Spending Control.
     * @param ascending ascending (optional, default to false)
     * @param filter filter (optional)
     * @param orderBy order_by (optional, default to update_date)
     * @param page page (optional, default to 0)
     * @param size size (optional, default to 25)
     * @return PageSpendingControl
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public PageSpendingControl getSpendingControlAllUsingGet(Boolean ascending, String filter, String orderBy, Integer page, Integer size) throws ApiException {
        ApiResponse<PageSpendingControl> resp = getSpendingControlAllUsingGetWithHttpInfo(ascending, filter, orderBy, page, size);
        return resp.getData();
    }

    /**
     * List all Spending Control
     * List all Spending Control.
     * @param ascending ascending (optional, default to false)
     * @param filter filter (optional)
     * @param orderBy order_by (optional, default to update_date)
     * @param page page (optional, default to 0)
     * @param size size (optional, default to 25)
     * @return ApiResponse&lt;PageSpendingControl&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<PageSpendingControl> getSpendingControlAllUsingGetWithHttpInfo(Boolean ascending, String filter, String orderBy, Integer page, Integer size) throws ApiException {
        com.squareup.okhttp.Call call = getSpendingControlAllUsingGetValidateBeforeCall(ascending, filter, orderBy, page, size, null, null);
        Type localVarReturnType = new TypeToken<PageSpendingControl>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * List all Spending Control (asynchronously)
     * List all Spending Control.
     * @param ascending ascending (optional, default to false)
     * @param filter filter (optional)
     * @param orderBy order_by (optional, default to update_date)
     * @param page page (optional, default to 0)
     * @param size size (optional, default to 25)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call getSpendingControlAllUsingGetAsync(Boolean ascending, String filter, String orderBy, Integer page, Integer size, final ApiCallback<PageSpendingControl> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = getSpendingControlAllUsingGetValidateBeforeCall(ascending, filter, orderBy, page, size, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<PageSpendingControl>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for getSpendingControlUsingGet
     * @param spendingControlId spending_control_id (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call getSpendingControlUsingGetCall(UUID spendingControlId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/nucleus/v1/spending_control/{spending_control_id}"
            .replaceAll("\\{" + "spending_control_id" + "\\}", apiClient.escapeString(spendingControlId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "*/*"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "oauth2" };
        return apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call getSpendingControlUsingGetValidateBeforeCall(UUID spendingControlId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'spendingControlId' is set
        if (spendingControlId == null) {
            throw new ApiException("Missing the required parameter 'spendingControlId' when calling getSpendingControlUsingGet(Async)");
        }
        

        com.squareup.okhttp.Call call = getSpendingControlUsingGetCall(spendingControlId, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Retrieve a Spending Control
     * Retrieve a Spending Control. 
     * @param spendingControlId spending_control_id (required)
     * @return SpendingControl
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public SpendingControl getSpendingControlUsingGet(UUID spendingControlId) throws ApiException {
        ApiResponse<SpendingControl> resp = getSpendingControlUsingGetWithHttpInfo(spendingControlId);
        return resp.getData();
    }

    /**
     * Retrieve a Spending Control
     * Retrieve a Spending Control. 
     * @param spendingControlId spending_control_id (required)
     * @return ApiResponse&lt;SpendingControl&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<SpendingControl> getSpendingControlUsingGetWithHttpInfo(UUID spendingControlId) throws ApiException {
        com.squareup.okhttp.Call call = getSpendingControlUsingGetValidateBeforeCall(spendingControlId, null, null);
        Type localVarReturnType = new TypeToken<SpendingControl>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Retrieve a Spending Control (asynchronously)
     * Retrieve a Spending Control. 
     * @param spendingControlId spending_control_id (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call getSpendingControlUsingGetAsync(UUID spendingControlId, final ApiCallback<SpendingControl> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = getSpendingControlUsingGetValidateBeforeCall(spendingControlId, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<SpendingControl>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for updateSpendingControlUsingPut
     * @param spendingControl spending_control (required)
     * @param spendingControlId UUID spending_control_id (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call updateSpendingControlUsingPutCall(SpendingControl spendingControl, UUID spendingControlId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = spendingControl;

        // create path and map variables
        String localVarPath = "/nucleus/v1/spending_control/{spending_control_id}"
            .replaceAll("\\{" + "spending_control_id" + "\\}", apiClient.escapeString(spendingControlId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "*/*"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "oauth2" };
        return apiClient.buildCall(localVarPath, "PUT", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call updateSpendingControlUsingPutValidateBeforeCall(SpendingControl spendingControl, UUID spendingControlId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'spendingControl' is set
        if (spendingControl == null) {
            throw new ApiException("Missing the required parameter 'spendingControl' when calling updateSpendingControlUsingPut(Async)");
        }
        
        // verify the required parameter 'spendingControlId' is set
        if (spendingControlId == null) {
            throw new ApiException("Missing the required parameter 'spendingControlId' when calling updateSpendingControlUsingPut(Async)");
        }
        

        com.squareup.okhttp.Call call = updateSpendingControlUsingPutCall(spendingControl, spendingControlId, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Update a Spending Control
     * Update a Spending Control. 
     * @param spendingControl spending_control (required)
     * @param spendingControlId UUID spending_control_id (required)
     * @return SpendingControl
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public SpendingControl updateSpendingControlUsingPut(SpendingControl spendingControl, UUID spendingControlId) throws ApiException {
        ApiResponse<SpendingControl> resp = updateSpendingControlUsingPutWithHttpInfo(spendingControl, spendingControlId);
        return resp.getData();
    }

    /**
     * Update a Spending Control
     * Update a Spending Control. 
     * @param spendingControl spending_control (required)
     * @param spendingControlId UUID spending_control_id (required)
     * @return ApiResponse&lt;SpendingControl&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<SpendingControl> updateSpendingControlUsingPutWithHttpInfo(SpendingControl spendingControl, UUID spendingControlId) throws ApiException {
        com.squareup.okhttp.Call call = updateSpendingControlUsingPutValidateBeforeCall(spendingControl, spendingControlId, null, null);
        Type localVarReturnType = new TypeToken<SpendingControl>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Update a Spending Control (asynchronously)
     * Update a Spending Control. 
     * @param spendingControl spending_control (required)
     * @param spendingControlId UUID spending_control_id (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call updateSpendingControlUsingPutAsync(SpendingControl spendingControl, UUID spendingControlId, final ApiCallback<SpendingControl> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = updateSpendingControlUsingPutValidateBeforeCall(spendingControl, spendingControlId, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<SpendingControl>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
}
