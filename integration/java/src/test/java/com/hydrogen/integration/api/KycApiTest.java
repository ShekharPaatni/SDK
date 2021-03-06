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

import com.hydrogen.integration.ApiException;
import com.hydrogen.integration.model.KycRequestCO;
import com.hydrogen.integration.model.KycResponseVo;
import java.util.UUID;
import org.junit.Test;
import org.junit.Ignore;

import java.util.List;

/**
 * API tests for KycApi
 */
@Ignore
public class KycApiTest {

    private final KycApi api = new KycApi();

    
    /**
     * Do kyc for the client.
     *
     * Do kyc for the client.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createKYCUsingPostTest() throws ApiException {
        KycRequestCO kycRequestCO = null;
        KycResponseVo response = api.createKYCUsingPost(kycRequestCO);

        // TODO: test validations
    }
    
    /**
     * Fetch kyc_status for the given nucleus_client_id
     *
     * Fetch kyc_status for the given nucleus_client_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getKYCStatusUsingGetTest() throws ApiException {
        Boolean getLatest = null;
        String kycType = null;
        UUID nucleusBusinessId = null;
        UUID nucleusClientId = null;
        String product = null;
        List<KycResponseVo> response = api.getKYCStatusUsingGet(getLatest, kycType, nucleusBusinessId, nucleusClientId, product);

        // TODO: test validations
    }
    
}
