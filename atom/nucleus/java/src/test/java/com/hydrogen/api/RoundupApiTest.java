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

import com.hydrogen.ApiException;
import com.hydrogen.model.PageRoundup;
import com.hydrogen.model.PageRoundupSettings;
import com.hydrogen.model.Roundup;
import com.hydrogen.model.RoundupCO;
import com.hydrogen.model.RoundupSettings;
import java.util.UUID;
import org.junit.Test;
import org.junit.Ignore;

/**
 * API tests for RoundupApi
 */
@Ignore
public class RoundupApiTest {

    private final RoundupApi api = new RoundupApi();

    
    /**
     * Create a Roundup Settings
     *
     * Create a Roundup Settings for Roundup amount with your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createRoundupSettingsUsingPostTest() throws ApiException {
        RoundupSettings roundupSettings = null;
        RoundupSettings response = api.createRoundupSettingsUsingPost(roundupSettings);

        // TODO: test validations
    }
    
    /**
     * Create a roundup
     *
     * Create a new roundup with your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createRoundupUsingPostTest() throws ApiException {
        RoundupCO roundupCO = null;
        Roundup response = api.createRoundupUsingPost(roundupCO);

        // TODO: test validations
    }
    
    /**
     * Delete a roundup settings
     *
     * Permanently delete a  roundup settings registered with your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteRoundupSettingsUsingDeleteTest() throws ApiException {
        UUID roundupSettingId = null;
        api.deleteRoundupSettingsUsingDelete(roundupSettingId);

        // TODO: test validations
    }
    
    /**
     * List all roundups
     *
     * Get details for all roundups.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRoundupAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageRoundup response = api.getRoundupAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * List all roundup settings
     *
     * Get details for all roundup setting with your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRoundupSettingsAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageRoundupSettings response = api.getRoundupSettingsAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve a Roundup Setting
     *
     * Retrieve the information for a Roundup Settings with your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRoundupSettingsUsingGetTest() throws ApiException {
        UUID roundupSettingId = null;
        RoundupSettings response = api.getRoundupSettingsUsingGet(roundupSettingId);

        // TODO: test validations
    }
    
    /**
     * Retrieve a Roundup
     *
     * Retrieve the information for a Roundup.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRoundupUsingGetTest() throws ApiException {
        UUID roundupId = null;
        Roundup response = api.getRoundupUsingGet(roundupId);

        // TODO: test validations
    }
    
    /**
     * Update a roundup settings
     *
     * Update the information for a roundup setting registered with your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateRoundupSettingsUsingPutTest() throws ApiException {
        RoundupSettings roundupSetting = null;
        UUID roundupSettingId = null;
        RoundupSettings response = api.updateRoundupSettingsUsingPut(roundupSetting, roundupSettingId);

        // TODO: test validations
    }
    
}
