/*
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.api;

import com.hydrogen.ApiCallback;
import com.hydrogen.ApiClient;
import com.hydrogen.ApiException;
import com.hydrogen.ApiResponse;
import com.hydrogen.Configuration;
import com.hydrogen.Pair;
import com.hydrogen.ProgressRequestBody;
import com.hydrogen.ProgressResponseBody;
import com.hydrogen.model.FinancialOffer;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import com.hydrogen.model.PageFinancialOffer;
import java.util.UUID;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FinancialOfferApi {
    private ApiClient apiClient;

    public FinancialOfferApi() {
        this(Configuration.getDefaultApiClient());
    }

    public FinancialOfferApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for createFinancialOfferUsingPost
     * @param financialOffer financialOffer (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call createFinancialOfferUsingPostCall(FinancialOffer financialOffer, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = financialOffer;

        // create path and map variables
        String localVarPath = "/financial_offer";

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
    private com.squareup.okhttp.Call createFinancialOfferUsingPostValidateBeforeCall(FinancialOffer financialOffer, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'financialOffer' is set
        if (financialOffer == null) {
            throw new ApiException("Missing the required parameter 'financialOffer' when calling createFinancialOfferUsingPost(Async)");
        }
        

        com.squareup.okhttp.Call call = createFinancialOfferUsingPostCall(financialOffer, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Create a comparison request
     * Create a new comparison request.
     * @param financialOffer financialOffer (required)
     * @return FinancialOffer
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public FinancialOffer createFinancialOfferUsingPost(FinancialOffer financialOffer) throws ApiException {
        ApiResponse<FinancialOffer> resp = createFinancialOfferUsingPostWithHttpInfo(financialOffer);
        return resp.getData();
    }

    /**
     * Create a comparison request
     * Create a new comparison request.
     * @param financialOffer financialOffer (required)
     * @return ApiResponse&lt;FinancialOffer&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<FinancialOffer> createFinancialOfferUsingPostWithHttpInfo(FinancialOffer financialOffer) throws ApiException {
        com.squareup.okhttp.Call call = createFinancialOfferUsingPostValidateBeforeCall(financialOffer, null, null);
        Type localVarReturnType = new TypeToken<FinancialOffer>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Create a comparison request (asynchronously)
     * Create a new comparison request.
     * @param financialOffer financialOffer (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call createFinancialOfferUsingPostAsync(FinancialOffer financialOffer, final ApiCallback<FinancialOffer> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = createFinancialOfferUsingPostValidateBeforeCall(financialOffer, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<FinancialOffer>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for deleteFinancialOfferUsingDelete
     * @param financialOffer UUID financial_offer_id (required)
     * @param financialOfferId financial_offer_id (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call deleteFinancialOfferUsingDeleteCall(UUID financialOffer, UUID financialOfferId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/financial_offer/{financial_offer_id}"
            .replaceAll("\\{" + "financial_offer" + "\\}", apiClient.escapeString(financialOffer.toString()))
            .replaceAll("\\{" + "financial_offer_id" + "\\}", apiClient.escapeString(financialOfferId.toString()));

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
    private com.squareup.okhttp.Call deleteFinancialOfferUsingDeleteValidateBeforeCall(UUID financialOffer, UUID financialOfferId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'financialOffer' is set
        if (financialOffer == null) {
            throw new ApiException("Missing the required parameter 'financialOffer' when calling deleteFinancialOfferUsingDelete(Async)");
        }
        
        // verify the required parameter 'financialOfferId' is set
        if (financialOfferId == null) {
            throw new ApiException("Missing the required parameter 'financialOfferId' when calling deleteFinancialOfferUsingDelete(Async)");
        }
        

        com.squareup.okhttp.Call call = deleteFinancialOfferUsingDeleteCall(financialOffer, financialOfferId, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Delete a comparison request
     * Permanently delete a comparison request.
     * @param financialOffer UUID financial_offer_id (required)
     * @param financialOfferId financial_offer_id (required)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public void deleteFinancialOfferUsingDelete(UUID financialOffer, UUID financialOfferId) throws ApiException {
        deleteFinancialOfferUsingDeleteWithHttpInfo(financialOffer, financialOfferId);
    }

    /**
     * Delete a comparison request
     * Permanently delete a comparison request.
     * @param financialOffer UUID financial_offer_id (required)
     * @param financialOfferId financial_offer_id (required)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<Void> deleteFinancialOfferUsingDeleteWithHttpInfo(UUID financialOffer, UUID financialOfferId) throws ApiException {
        com.squareup.okhttp.Call call = deleteFinancialOfferUsingDeleteValidateBeforeCall(financialOffer, financialOfferId, null, null);
        return apiClient.execute(call);
    }

    /**
     * Delete a comparison request (asynchronously)
     * Permanently delete a comparison request.
     * @param financialOffer UUID financial_offer_id (required)
     * @param financialOfferId financial_offer_id (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call deleteFinancialOfferUsingDeleteAsync(UUID financialOffer, UUID financialOfferId, final ApiCallback<Void> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = deleteFinancialOfferUsingDeleteValidateBeforeCall(financialOffer, financialOfferId, progressListener, progressRequestListener);
        apiClient.executeAsync(call, callback);
        return call;
    }
    /**
     * Build call for getFinancialOfferAllUsingGet
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
    public com.squareup.okhttp.Call getFinancialOfferAllUsingGetCall(Boolean ascending, String filter, String orderBy, Integer page, Integer size, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/financial_offer";

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
    private com.squareup.okhttp.Call getFinancialOfferAllUsingGetValidateBeforeCall(Boolean ascending, String filter, String orderBy, Integer page, Integer size, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        

        com.squareup.okhttp.Call call = getFinancialOfferAllUsingGetCall(ascending, filter, orderBy, page, size, progressListener, progressRequestListener);
        return call;

    }

    /**
     * List all comparison requests
     * Get the information for all comparison requests.
     * @param ascending ascending (optional, default to false)
     * @param filter filter (optional)
     * @param orderBy order_by (optional, default to update_date)
     * @param page page (optional, default to 0)
     * @param size size (optional, default to 25)
     * @return PageFinancialOffer
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public PageFinancialOffer getFinancialOfferAllUsingGet(Boolean ascending, String filter, String orderBy, Integer page, Integer size) throws ApiException {
        ApiResponse<PageFinancialOffer> resp = getFinancialOfferAllUsingGetWithHttpInfo(ascending, filter, orderBy, page, size);
        return resp.getData();
    }

    /**
     * List all comparison requests
     * Get the information for all comparison requests.
     * @param ascending ascending (optional, default to false)
     * @param filter filter (optional)
     * @param orderBy order_by (optional, default to update_date)
     * @param page page (optional, default to 0)
     * @param size size (optional, default to 25)
     * @return ApiResponse&lt;PageFinancialOffer&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<PageFinancialOffer> getFinancialOfferAllUsingGetWithHttpInfo(Boolean ascending, String filter, String orderBy, Integer page, Integer size) throws ApiException {
        com.squareup.okhttp.Call call = getFinancialOfferAllUsingGetValidateBeforeCall(ascending, filter, orderBy, page, size, null, null);
        Type localVarReturnType = new TypeToken<PageFinancialOffer>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * List all comparison requests (asynchronously)
     * Get the information for all comparison requests.
     * @param ascending ascending (optional, default to false)
     * @param filter filter (optional)
     * @param orderBy order_by (optional, default to update_date)
     * @param page page (optional, default to 0)
     * @param size size (optional, default to 25)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call getFinancialOfferAllUsingGetAsync(Boolean ascending, String filter, String orderBy, Integer page, Integer size, final ApiCallback<PageFinancialOffer> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = getFinancialOfferAllUsingGetValidateBeforeCall(ascending, filter, orderBy, page, size, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<PageFinancialOffer>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for getFinancialOfferUsingGet
     * @param financialOffer UUID financial_offer_id (required)
     * @param financialOfferId financial_offer_id (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call getFinancialOfferUsingGetCall(UUID financialOffer, UUID financialOfferId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/financial_offer/{financial_offer_id}"
            .replaceAll("\\{" + "financial_offer" + "\\}", apiClient.escapeString(financialOffer.toString()))
            .replaceAll("\\{" + "financial_offer_id" + "\\}", apiClient.escapeString(financialOfferId.toString()));

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
    private com.squareup.okhttp.Call getFinancialOfferUsingGetValidateBeforeCall(UUID financialOffer, UUID financialOfferId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'financialOffer' is set
        if (financialOffer == null) {
            throw new ApiException("Missing the required parameter 'financialOffer' when calling getFinancialOfferUsingGet(Async)");
        }
        
        // verify the required parameter 'financialOfferId' is set
        if (financialOfferId == null) {
            throw new ApiException("Missing the required parameter 'financialOfferId' when calling getFinancialOfferUsingGet(Async)");
        }
        

        com.squareup.okhttp.Call call = getFinancialOfferUsingGetCall(financialOffer, financialOfferId, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Retrieve a comparison request
     * Retrieve the information for a comparison request.
     * @param financialOffer UUID financial_offer_id (required)
     * @param financialOfferId financial_offer_id (required)
     * @return FinancialOffer
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public FinancialOffer getFinancialOfferUsingGet(UUID financialOffer, UUID financialOfferId) throws ApiException {
        ApiResponse<FinancialOffer> resp = getFinancialOfferUsingGetWithHttpInfo(financialOffer, financialOfferId);
        return resp.getData();
    }

    /**
     * Retrieve a comparison request
     * Retrieve the information for a comparison request.
     * @param financialOffer UUID financial_offer_id (required)
     * @param financialOfferId financial_offer_id (required)
     * @return ApiResponse&lt;FinancialOffer&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<FinancialOffer> getFinancialOfferUsingGetWithHttpInfo(UUID financialOffer, UUID financialOfferId) throws ApiException {
        com.squareup.okhttp.Call call = getFinancialOfferUsingGetValidateBeforeCall(financialOffer, financialOfferId, null, null);
        Type localVarReturnType = new TypeToken<FinancialOffer>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Retrieve a comparison request (asynchronously)
     * Retrieve the information for a comparison request.
     * @param financialOffer UUID financial_offer_id (required)
     * @param financialOfferId financial_offer_id (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call getFinancialOfferUsingGetAsync(UUID financialOffer, UUID financialOfferId, final ApiCallback<FinancialOffer> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = getFinancialOfferUsingGetValidateBeforeCall(financialOffer, financialOfferId, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<FinancialOffer>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for updateFinancialOfferUsingPut
     * @param financialOffer financial_offer (required)
     * @param financialOfferId UUID financial_offer_id (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call updateFinancialOfferUsingPutCall(FinancialOffer financialOffer, UUID financialOfferId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = financialOffer;

        // create path and map variables
        String localVarPath = "/financial_offer/{financial_offer_id}"
            .replaceAll("\\{" + "financial_offer_id" + "\\}", apiClient.escapeString(financialOfferId.toString()));

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
    private com.squareup.okhttp.Call updateFinancialOfferUsingPutValidateBeforeCall(FinancialOffer financialOffer, UUID financialOfferId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'financialOffer' is set
        if (financialOffer == null) {
            throw new ApiException("Missing the required parameter 'financialOffer' when calling updateFinancialOfferUsingPut(Async)");
        }
        
        // verify the required parameter 'financialOfferId' is set
        if (financialOfferId == null) {
            throw new ApiException("Missing the required parameter 'financialOfferId' when calling updateFinancialOfferUsingPut(Async)");
        }
        

        com.squareup.okhttp.Call call = updateFinancialOfferUsingPutCall(financialOffer, financialOfferId, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Update a comparison request
     * Update the information for a comparison request.
     * @param financialOffer financial_offer (required)
     * @param financialOfferId UUID financial_offer_id (required)
     * @return FinancialOffer
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public FinancialOffer updateFinancialOfferUsingPut(FinancialOffer financialOffer, UUID financialOfferId) throws ApiException {
        ApiResponse<FinancialOffer> resp = updateFinancialOfferUsingPutWithHttpInfo(financialOffer, financialOfferId);
        return resp.getData();
    }

    /**
     * Update a comparison request
     * Update the information for a comparison request.
     * @param financialOffer financial_offer (required)
     * @param financialOfferId UUID financial_offer_id (required)
     * @return ApiResponse&lt;FinancialOffer&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<FinancialOffer> updateFinancialOfferUsingPutWithHttpInfo(FinancialOffer financialOffer, UUID financialOfferId) throws ApiException {
        com.squareup.okhttp.Call call = updateFinancialOfferUsingPutValidateBeforeCall(financialOffer, financialOfferId, null, null);
        Type localVarReturnType = new TypeToken<FinancialOffer>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Update a comparison request (asynchronously)
     * Update the information for a comparison request.
     * @param financialOffer financial_offer (required)
     * @param financialOfferId UUID financial_offer_id (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call updateFinancialOfferUsingPutAsync(FinancialOffer financialOffer, UUID financialOfferId, final ApiCallback<FinancialOffer> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = updateFinancialOfferUsingPutValidateBeforeCall(financialOffer, financialOfferId, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<FinancialOffer>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
}
