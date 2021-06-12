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
import com.hydrogen.nucleus.model.PageSpendingControl;
import com.hydrogen.nucleus.model.SpendingControl;
import java.util.UUID;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for SpendingControlApi
 */
@Ignore
public class SpendingControlApiTest {

    private final SpendingControlApi api = new SpendingControlApi();

    
    /**
     * Create a Spending Control
     *
     * Create a new Spending Control.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createSpendingControlUsingPostTest() throws ApiException {
        SpendingControl spendingControl = null;
        SpendingControl response = api.createSpendingControlUsingPost(spendingControl);

        // TODO: test validations
    }
    
    /**
     * Delete a Spending Control
     *
     * Permanently Delete Spending Control.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteSpendingControlUsingDeleteTest() throws ApiException {
        UUID spendingControlId = null;
        api.deleteSpendingControlUsingDelete(spendingControlId);

        // TODO: test validations
    }
    
    /**
     * List all Spending Control
     *
     * List all Spending Control.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getSpendingControlAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageSpendingControl response = api.getSpendingControlAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve a Spending Control
     *
     * Retrieve a Spending Control. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getSpendingControlUsingGetTest() throws ApiException {
        UUID spendingControlId = null;
        SpendingControl response = api.getSpendingControlUsingGet(spendingControlId);

        // TODO: test validations
    }
    
    /**
     * Update a Spending Control
     *
     * Update a Spending Control. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateSpendingControlUsingPutTest() throws ApiException {
        Object spendingControl = null;
        UUID spendingControlId = null;
        SpendingControl response = api.updateSpendingControlUsingPut(spendingControl, spendingControlId);

        // TODO: test validations
    }
    
}
