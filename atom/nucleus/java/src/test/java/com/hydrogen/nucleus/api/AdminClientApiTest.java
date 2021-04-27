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

import com.hydrogen.nucleus.model.AdminClient;
import com.hydrogen.nucleus.model.ClientCredentials;
import com.hydrogen.nucleus.model.PageAdminClient;
import com.hydrogen.nucleus.ApiException;
import org.junit.Test;
import org.junit.Ignore;

/**
 * API tests for AdminClientApi
 */
@Ignore
public class AdminClientApiTest {

    private final AdminClientApi api = new AdminClientApi();

    
    /**
     * create
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createAdminClientUsingPOSTTest() throws ApiException {
        AdminClient client = null;
        AdminClient response = api.createAdminClientUsingPOST(client);

        // TODO: test validations
    }
    
    /**
     * delete
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteAdminClientUsingDELETETest() throws ApiException {
        Long clientId = null;
        api.deleteAdminClientUsingDELETE(clientId);

        // TODO: test validations
    }
    
    /**
     * get
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getAdminClientUsingGETTest() throws ApiException {
        Long clientId = null;
        AdminClient response = api.getAdminClientUsingGET(clientId);

        // TODO: test validations
    }
    
    /**
     * getAllAdminClient
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getAllAdminClientUsingGETTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageAdminClient response = api.getAllAdminClientUsingGET(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * update
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateAdminClientUsingPUTTest() throws ApiException {
        AdminClient client = null;
        Long clientId = null;
        AdminClient response = api.updateAdminClientUsingPUT(client, clientId);

        // TODO: test validations
    }
    
    /**
     * updateClientCredentials
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateClientCredentialsUsingPOSTTest() throws ApiException {
        ClientCredentials clientCredentials = null;
        String tenantName = null;
        AdminClient response = api.updateClientCredentialsUsingPOST(clientCredentials, tenantName);

        // TODO: test validations
    }
    
}
