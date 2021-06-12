/*
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.nucleus.api;

import com.hydrogen.nucleus.ApiException;
import com.hydrogen.nucleus.model.BulkTransaction;
import com.hydrogen.nucleus.model.BulkTransactionVO;
import com.hydrogen.nucleus.model.JsonNode;
import java.util.UUID;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for BulkApi
 */
@Ignore
public class BulkApiTest {

    private final BulkApi api = new BulkApi();

    
    /**
     * Create a bulk data
     *
     * Create a new bulk data for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createBulkUsingPostTest() throws ApiException {
        JsonNode data = null;
        String entityUri = null;
        BulkTransaction response = api.createBulkUsingPost(data, entityUri);

        // TODO: test validations
    }
    
    /**
     * Delete a bulk data
     *
     * Delete a bulk data for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteBulkUsingDeleteTest() throws ApiException {
        JsonNode data = null;
        String entityUri = null;
        BulkTransaction response = api.deleteBulkUsingDelete(data, entityUri);

        // TODO: test validations
    }
    
    /**
     * Status of bulk transaction
     *
     * Get the status of bulk transaction.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getBulkStatusUsingGetTest() throws ApiException {
        UUID id = null;
        BulkTransactionVO response = api.getBulkStatusUsingGet(id);

        // TODO: test validations
    }
    
    /**
     * Update a bulk data
     *
     * Update a bulk data for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateBulkUsingPutTest() throws ApiException {
        Object data = null;
        String entityUri = null;
        BulkTransaction response = api.updateBulkUsingPut(data, entityUri);

        // TODO: test validations
    }
    
}
