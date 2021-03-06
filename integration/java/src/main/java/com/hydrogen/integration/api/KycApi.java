/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.integration.api;

import com.hydrogen.integration.ApiClient;
import com.hydrogen.integration.ApiException;
import com.hydrogen.integration.ApiResponse;
import com.hydrogen.integration.Pair;
import com.hydrogen.integration.ProgressResponseBody;
import com.hydrogen.integration.ApiCallback;
import com.hydrogen.integration.Configuration;
import com.hydrogen.integration.ProgressRequestBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import com.hydrogen.integration.model.KycRequestCO;
import com.hydrogen.integration.model.KycResponseVo;
import java.util.UUID;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class KycApi {
    private ApiClient apiClient;

    public KycApi() {
        this(Configuration.getDefaultApiClient());
    }

    public KycApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for createKYCUsingPost
     * @param kycRequestCO kycRequestCO (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call createKYCUsingPostCall(KycRequestCO kycRequestCO, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = kycRequestCO;

        // create path and map variables
        String localVarPath = "/kyc";

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
    private com.squareup.okhttp.Call createKYCUsingPostValidateBeforeCall(KycRequestCO kycRequestCO, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'kycRequestCO' is set
        if (kycRequestCO == null) {
            throw new ApiException("Missing the required parameter 'kycRequestCO' when calling createKYCUsingPost(Async)");
        }
        

        com.squareup.okhttp.Call call = createKYCUsingPostCall(kycRequestCO, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Do kyc for the client.
     * Do kyc for the client.
     * @param kycRequestCO kycRequestCO (required)
     * @return KycResponseVo
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public KycResponseVo createKYCUsingPost(KycRequestCO kycRequestCO) throws ApiException {
        ApiResponse<KycResponseVo> resp = createKYCUsingPostWithHttpInfo(kycRequestCO);
        return resp.getData();
    }

    /**
     * Do kyc for the client.
     * Do kyc for the client.
     * @param kycRequestCO kycRequestCO (required)
     * @return ApiResponse&lt;KycResponseVo&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<KycResponseVo> createKYCUsingPostWithHttpInfo(KycRequestCO kycRequestCO) throws ApiException {
        com.squareup.okhttp.Call call = createKYCUsingPostValidateBeforeCall(kycRequestCO, null, null);
        Type localVarReturnType = new TypeToken<KycResponseVo>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Do kyc for the client. (asynchronously)
     * Do kyc for the client.
     * @param kycRequestCO kycRequestCO (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call createKYCUsingPostAsync(KycRequestCO kycRequestCO, final ApiCallback<KycResponseVo> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = createKYCUsingPostValidateBeforeCall(kycRequestCO, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<KycResponseVo>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for getKYCStatusUsingGet
     * @param getLatest get_latest (optional, default to false)
     * @param kycType kyc_type (optional, default to all)
     * @param nucleusBusinessId nucleus_business_id (optional)
     * @param nucleusClientId nucleus_client_id (optional)
     * @param product product (optional, default to atom)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call getKYCStatusUsingGetCall(Boolean getLatest, String kycType, UUID nucleusBusinessId, UUID nucleusClientId, String product, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/kyc_status";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (getLatest != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("get_latest", getLatest));
        if (kycType != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("kyc_type", kycType));
        if (nucleusBusinessId != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("nucleus_business_id", nucleusBusinessId));
        if (nucleusClientId != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("nucleus_client_id", nucleusClientId));
        if (product != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("product", product));

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
    private com.squareup.okhttp.Call getKYCStatusUsingGetValidateBeforeCall(Boolean getLatest, String kycType, UUID nucleusBusinessId, UUID nucleusClientId, String product, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        

        com.squareup.okhttp.Call call = getKYCStatusUsingGetCall(getLatest, kycType, nucleusBusinessId, nucleusClientId, product, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Fetch kyc_status for the given nucleus_client_id
     * Fetch kyc_status for the given nucleus_client_id
     * @param getLatest get_latest (optional, default to false)
     * @param kycType kyc_type (optional, default to all)
     * @param nucleusBusinessId nucleus_business_id (optional)
     * @param nucleusClientId nucleus_client_id (optional)
     * @param product product (optional, default to atom)
     * @return List&lt;KycResponseVo&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public List<KycResponseVo> getKYCStatusUsingGet(Boolean getLatest, String kycType, UUID nucleusBusinessId, UUID nucleusClientId, String product) throws ApiException {
        ApiResponse<List<KycResponseVo>> resp = getKYCStatusUsingGetWithHttpInfo(getLatest, kycType, nucleusBusinessId, nucleusClientId, product);
        return resp.getData();
    }

    /**
     * Fetch kyc_status for the given nucleus_client_id
     * Fetch kyc_status for the given nucleus_client_id
     * @param getLatest get_latest (optional, default to false)
     * @param kycType kyc_type (optional, default to all)
     * @param nucleusBusinessId nucleus_business_id (optional)
     * @param nucleusClientId nucleus_client_id (optional)
     * @param product product (optional, default to atom)
     * @return ApiResponse&lt;List&lt;KycResponseVo&gt;&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<List<KycResponseVo>> getKYCStatusUsingGetWithHttpInfo(Boolean getLatest, String kycType, UUID nucleusBusinessId, UUID nucleusClientId, String product) throws ApiException {
        com.squareup.okhttp.Call call = getKYCStatusUsingGetValidateBeforeCall(getLatest, kycType, nucleusBusinessId, nucleusClientId, product, null, null);
        Type localVarReturnType = new TypeToken<List<KycResponseVo>>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Fetch kyc_status for the given nucleus_client_id (asynchronously)
     * Fetch kyc_status for the given nucleus_client_id
     * @param getLatest get_latest (optional, default to false)
     * @param kycType kyc_type (optional, default to all)
     * @param nucleusBusinessId nucleus_business_id (optional)
     * @param nucleusClientId nucleus_client_id (optional)
     * @param product product (optional, default to atom)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call getKYCStatusUsingGetAsync(Boolean getLatest, String kycType, UUID nucleusBusinessId, UUID nucleusClientId, String product, final ApiCallback<List<KycResponseVo>> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = getKYCStatusUsingGetValidateBeforeCall(getLatest, kycType, nucleusBusinessId, nucleusClientId, product, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<List<KycResponseVo>>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
}
