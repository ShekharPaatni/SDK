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
import com.hydrogen.integration.model.ExchangePublicTokenVO;
import com.hydrogen.integration.model.ExchangeTokenCO;
import com.hydrogen.integration.model.Pageobject;
import com.hydrogen.integration.model.UserResponseVO;
import com.hydrogen.integration.model.WidgetUrlVO;
import com.hydrogen.integration.ApiCallback;
import com.hydrogen.integration.Configuration;
import com.hydrogen.integration.ProgressRequestBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import java.math.BigDecimal;
import com.hydrogen.integration.model.CreateUserRequest;
import org.threeten.bp.OffsetDateTime;

import java.util.UUID;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UtilsApi {
    private ApiClient apiClient;

    public UtilsApi() {
        this(Configuration.getDefaultApiClient());
    }

    public UtilsApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for createTokenExchangeUsingPost
     * @param exchangeTokenCO exchangeTokenCO (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call createTokenExchangeUsingPostCall(ExchangeTokenCO exchangeTokenCO, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = exchangeTokenCO;

        // create path and map variables
        String localVarPath = "/token_exchange";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
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
    private com.squareup.okhttp.Call createTokenExchangeUsingPostValidateBeforeCall(ExchangeTokenCO exchangeTokenCO, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'exchangeTokenCO' is set
        if (exchangeTokenCO == null) {
            throw new ApiException("Missing the required parameter 'exchangeTokenCO' when calling createTokenExchangeUsingPost(Async)");
        }
        

        com.squareup.okhttp.Call call = createTokenExchangeUsingPostCall(exchangeTokenCO, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Retrieve token based on certain vendor specific value
     * Retrieve the token.
     * @param exchangeTokenCO exchangeTokenCO (required)
     * @return ExchangePublicTokenVO
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ExchangePublicTokenVO createTokenExchangeUsingPost(ExchangeTokenCO exchangeTokenCO) throws ApiException {
        ApiResponse<ExchangePublicTokenVO> resp = createTokenExchangeUsingPostWithHttpInfo(exchangeTokenCO);
        return resp.getData();
    }

    /**
     * Retrieve token based on certain vendor specific value
     * Retrieve the token.
     * @param exchangeTokenCO exchangeTokenCO (required)
     * @return ApiResponse&lt;ExchangePublicTokenVO&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<ExchangePublicTokenVO> createTokenExchangeUsingPostWithHttpInfo(ExchangeTokenCO exchangeTokenCO) throws ApiException {
        com.squareup.okhttp.Call call = createTokenExchangeUsingPostValidateBeforeCall(exchangeTokenCO, null, null);
        Type localVarReturnType = new TypeToken<ExchangePublicTokenVO>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Retrieve token based on certain vendor specific value (asynchronously)
     * Retrieve the token.
     * @param exchangeTokenCO exchangeTokenCO (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call createTokenExchangeUsingPostAsync(ExchangeTokenCO exchangeTokenCO, final ApiCallback<ExchangePublicTokenVO> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = createTokenExchangeUsingPostValidateBeforeCall(exchangeTokenCO, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<ExchangePublicTokenVO>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for createUserUsingPost
     * @param createUserRequest createUserRequest (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call createUserUsingPostCall(CreateUserRequest createUserRequest, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = createUserRequest;

        // create path and map variables
        String localVarPath = "/user";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
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
    private com.squareup.okhttp.Call createUserUsingPostValidateBeforeCall(CreateUserRequest createUserRequest, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'createUserRequest' is set
        if (createUserRequest == null) {
            throw new ApiException("Missing the required parameter 'createUserRequest' when calling createUserUsingPost(Async)");
        }
        

        com.squareup.okhttp.Call call = createUserUsingPostCall(createUserRequest, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Create user in vendor
     * Create user in vendor.
     * @param createUserRequest createUserRequest (required)
     * @return UserResponseVO
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public UserResponseVO createUserUsingPost(CreateUserRequest createUserRequest) throws ApiException {
        ApiResponse<UserResponseVO> resp = createUserUsingPostWithHttpInfo(createUserRequest);
        return resp.getData();
    }

    /**
     * Create user in vendor
     * Create user in vendor.
     * @param createUserRequest createUserRequest (required)
     * @return ApiResponse&lt;UserResponseVO&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<UserResponseVO> createUserUsingPostWithHttpInfo(CreateUserRequest createUserRequest) throws ApiException {
        com.squareup.okhttp.Call call = createUserUsingPostValidateBeforeCall(createUserRequest, null, null);
        Type localVarReturnType = new TypeToken<UserResponseVO>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Create user in vendor (asynchronously)
     * Create user in vendor.
     * @param createUserRequest createUserRequest (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call createUserUsingPostAsync(CreateUserRequest createUserRequest, final ApiCallback<UserResponseVO> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = createUserUsingPostValidateBeforeCall(createUserRequest, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<UserResponseVO>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for getAuditLogAllUsingGet
     * @param ascending ascending (optional, default to false)
     * @param endDate end_date (optional, default to null)
     * @param event event (optional)
     * @param integrationType integration_type (optional)
     * @param isRequest is_request (optional, default to false)
     * @param nucleusAggregationAccountId nucleus_aggregation_account_id (optional)
     * @param nucleusClientId nucleus_client_id (optional)
     * @param orderBy order_by (optional, default to update_date)
     * @param page page (optional, default to 0)
     * @param requestType request_type (optional)
     * @param size size (optional, default to 25)
     * @param startDate start_date (optional, default to null)
     * @param vendorName vendor_name (optional)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call getAuditLogAllUsingGetCall(Boolean ascending, OffsetDateTime endDate, String event, String integrationType, Boolean isRequest, UUID nucleusAggregationAccountId, UUID nucleusClientId, String orderBy, Integer page, String requestType, Integer size, OffsetDateTime startDate, String vendorName, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/audit_log";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (ascending != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("ascending", ascending));
        if (endDate != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("end_date", endDate));
        if (event != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("event", event));
        if (integrationType != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("integration_type", integrationType));
        if (isRequest != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("is_request", isRequest));
        if (nucleusAggregationAccountId != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("nucleus_aggregation_account_id", nucleusAggregationAccountId));
        if (nucleusClientId != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("nucleus_client_id", nucleusClientId));
        if (orderBy != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("order_by", orderBy));
        if (page != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("page", page));
        if (requestType != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("request_type", requestType));
        if (size != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("size", size));
        if (startDate != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("start_date", startDate));
        if (vendorName != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("vendor_name", vendorName));

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
    private com.squareup.okhttp.Call getAuditLogAllUsingGetValidateBeforeCall(Boolean ascending, OffsetDateTime endDate, String event, String integrationType, Boolean isRequest, UUID nucleusAggregationAccountId, UUID nucleusClientId, String orderBy, Integer page, String requestType, Integer size, OffsetDateTime startDate, String vendorName, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        

        com.squareup.okhttp.Call call = getAuditLogAllUsingGetCall(ascending, endDate, event, integrationType, isRequest, nucleusAggregationAccountId, nucleusClientId, orderBy, page, requestType, size, startDate, vendorName, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Gel all audit log
     * 
     * @param ascending ascending (optional, default to false)
     * @param endDate end_date (optional, default to null)
     * @param event event (optional)
     * @param integrationType integration_type (optional)
     * @param isRequest is_request (optional, default to false)
     * @param nucleusAggregationAccountId nucleus_aggregation_account_id (optional)
     * @param nucleusClientId nucleus_client_id (optional)
     * @param orderBy order_by (optional, default to update_date)
     * @param page page (optional, default to 0)
     * @param requestType request_type (optional)
     * @param size size (optional, default to 25)
     * @param startDate start_date (optional, default to null)
     * @param vendorName vendor_name (optional)
     * @return Pageobject
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public Pageobject getAuditLogAllUsingGet(Boolean ascending, OffsetDateTime endDate, String event, String integrationType, Boolean isRequest, UUID nucleusAggregationAccountId, UUID nucleusClientId, String orderBy, Integer page, String requestType, Integer size, OffsetDateTime startDate, String vendorName) throws ApiException {
        ApiResponse<Pageobject> resp = getAuditLogAllUsingGetWithHttpInfo(ascending, endDate, event, integrationType, isRequest, nucleusAggregationAccountId, nucleusClientId, orderBy, page, requestType, size, startDate, vendorName);
        return resp.getData();
    }

    /**
     * Gel all audit log
     * 
     * @param ascending ascending (optional, default to false)
     * @param endDate end_date (optional, default to null)
     * @param event event (optional)
     * @param integrationType integration_type (optional)
     * @param isRequest is_request (optional, default to false)
     * @param nucleusAggregationAccountId nucleus_aggregation_account_id (optional)
     * @param nucleusClientId nucleus_client_id (optional)
     * @param orderBy order_by (optional, default to update_date)
     * @param page page (optional, default to 0)
     * @param requestType request_type (optional)
     * @param size size (optional, default to 25)
     * @param startDate start_date (optional, default to null)
     * @param vendorName vendor_name (optional)
     * @return ApiResponse&lt;Pageobject&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<Pageobject> getAuditLogAllUsingGetWithHttpInfo(Boolean ascending, OffsetDateTime endDate, String event, String integrationType, Boolean isRequest, UUID nucleusAggregationAccountId, UUID nucleusClientId, String orderBy, Integer page, String requestType, Integer size, OffsetDateTime startDate, String vendorName) throws ApiException {
        com.squareup.okhttp.Call call = getAuditLogAllUsingGetValidateBeforeCall(ascending, endDate, event, integrationType, isRequest, nucleusAggregationAccountId, nucleusClientId, orderBy, page, requestType, size, startDate, vendorName, null, null);
        Type localVarReturnType = new TypeToken<Pageobject>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Gel all audit log (asynchronously)
     * 
     * @param ascending ascending (optional, default to false)
     * @param endDate end_date (optional, default to null)
     * @param event event (optional)
     * @param integrationType integration_type (optional)
     * @param isRequest is_request (optional, default to false)
     * @param nucleusAggregationAccountId nucleus_aggregation_account_id (optional)
     * @param nucleusClientId nucleus_client_id (optional)
     * @param orderBy order_by (optional, default to update_date)
     * @param page page (optional, default to 0)
     * @param requestType request_type (optional)
     * @param size size (optional, default to 25)
     * @param startDate start_date (optional, default to null)
     * @param vendorName vendor_name (optional)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call getAuditLogAllUsingGetAsync(Boolean ascending, OffsetDateTime endDate, String event, String integrationType, Boolean isRequest, UUID nucleusAggregationAccountId, UUID nucleusClientId, String orderBy, Integer page, String requestType, Integer size, OffsetDateTime startDate, String vendorName, final ApiCallback<Pageobject> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = getAuditLogAllUsingGetValidateBeforeCall(ascending, endDate, event, integrationType, isRequest, nucleusAggregationAccountId, nucleusClientId, orderBy, page, requestType, size, startDate, vendorName, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<Pageobject>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
    /**
     * Build call for getWidgetLinkUsingGet
     * @param nucleusId nucleus_id (required)
     * @param isBusiness is_business (optional, default to false)
     * @param isMobileWebview is_mobile_webview (optional, default to false)
     * @param messageVersion message_version (optional)
     * @param mode mode (optional, default to aggregation)
     * @param vendorName vendor_name (optional)
     * @param waitForFullAggregation wait_for_full_aggregation (optional, default to true)
     * @param webviewUrlScheme webview_url_scheme (optional)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call getWidgetLinkUsingGetCall(UUID nucleusId, Boolean isBusiness, Boolean isMobileWebview, BigDecimal messageVersion, String mode, String vendorName, Boolean waitForFullAggregation, String webviewUrlScheme, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/widget_link/{nucleus_id}"
            .replaceAll("\\{" + "nucleus_id" + "\\}", apiClient.escapeString(nucleusId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (isBusiness != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("is_business", isBusiness));
        if (isMobileWebview != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("is_mobile_webview", isMobileWebview));
        if (messageVersion != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("message_version", messageVersion));
        if (mode != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("mode", mode));
        if (vendorName != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("vendor_name", vendorName));
        if (waitForFullAggregation != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("wait_for_full_aggregation", waitForFullAggregation));
        if (webviewUrlScheme != null)
        localVarQueryParams.addAll(apiClient.parameterToPair("webview_url_scheme", webviewUrlScheme));

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
    private com.squareup.okhttp.Call getWidgetLinkUsingGetValidateBeforeCall(UUID nucleusId, Boolean isBusiness, Boolean isMobileWebview, BigDecimal messageVersion, String mode, String vendorName, Boolean waitForFullAggregation, String webviewUrlScheme, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'nucleusId' is set
        if (nucleusId == null) {
            throw new ApiException("Missing the required parameter 'nucleusId' when calling getWidgetLinkUsingGet(Async)");
        }
        

        com.squareup.okhttp.Call call = getWidgetLinkUsingGetCall(nucleusId, isBusiness, isMobileWebview, messageVersion, mode, vendorName, waitForFullAggregation, webviewUrlScheme, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Retrieve widget link
     * Retrieve the widget link.
     * @param nucleusId nucleus_id (required)
     * @param isBusiness is_business (optional, default to false)
     * @param isMobileWebview is_mobile_webview (optional, default to false)
     * @param messageVersion message_version (optional)
     * @param mode mode (optional, default to aggregation)
     * @param vendorName vendor_name (optional)
     * @param waitForFullAggregation wait_for_full_aggregation (optional, default to true)
     * @param webviewUrlScheme webview_url_scheme (optional)
     * @return WidgetUrlVO
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public WidgetUrlVO getWidgetLinkUsingGet(UUID nucleusId, Boolean isBusiness, Boolean isMobileWebview, BigDecimal messageVersion, String mode, String vendorName, Boolean waitForFullAggregation, String webviewUrlScheme) throws ApiException {
        ApiResponse<WidgetUrlVO> resp = getWidgetLinkUsingGetWithHttpInfo(nucleusId, isBusiness, isMobileWebview, messageVersion, mode, vendorName, waitForFullAggregation, webviewUrlScheme);
        return resp.getData();
    }

    /**
     * Retrieve widget link
     * Retrieve the widget link.
     * @param nucleusId nucleus_id (required)
     * @param isBusiness is_business (optional, default to false)
     * @param isMobileWebview is_mobile_webview (optional, default to false)
     * @param messageVersion message_version (optional)
     * @param mode mode (optional, default to aggregation)
     * @param vendorName vendor_name (optional)
     * @param waitForFullAggregation wait_for_full_aggregation (optional, default to true)
     * @param webviewUrlScheme webview_url_scheme (optional)
     * @return ApiResponse&lt;WidgetUrlVO&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<WidgetUrlVO> getWidgetLinkUsingGetWithHttpInfo(UUID nucleusId, Boolean isBusiness, Boolean isMobileWebview, BigDecimal messageVersion, String mode, String vendorName, Boolean waitForFullAggregation, String webviewUrlScheme) throws ApiException {
        com.squareup.okhttp.Call call = getWidgetLinkUsingGetValidateBeforeCall(nucleusId, isBusiness, isMobileWebview, messageVersion, mode, vendorName, waitForFullAggregation, webviewUrlScheme, null, null);
        Type localVarReturnType = new TypeToken<WidgetUrlVO>(){}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * Retrieve widget link (asynchronously)
     * Retrieve the widget link.
     * @param nucleusId nucleus_id (required)
     * @param isBusiness is_business (optional, default to false)
     * @param isMobileWebview is_mobile_webview (optional, default to false)
     * @param messageVersion message_version (optional)
     * @param mode mode (optional, default to aggregation)
     * @param vendorName vendor_name (optional)
     * @param waitForFullAggregation wait_for_full_aggregation (optional, default to true)
     * @param webviewUrlScheme webview_url_scheme (optional)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call getWidgetLinkUsingGetAsync(UUID nucleusId, Boolean isBusiness, Boolean isMobileWebview, BigDecimal messageVersion, String mode, String vendorName, Boolean waitForFullAggregation, String webviewUrlScheme, final ApiCallback<WidgetUrlVO> callback) throws ApiException {

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

        com.squareup.okhttp.Call call = getWidgetLinkUsingGetValidateBeforeCall(nucleusId, isBusiness, isMobileWebview, messageVersion, mode, vendorName, waitForFullAggregation, webviewUrlScheme, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<WidgetUrlVO>(){}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
        return call;
    }
}
