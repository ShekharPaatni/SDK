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

import com.hydrogen.model.AvailableDateDoubleVO;
import com.hydrogen.model.GoalTrack;
import com.hydrogen.model.PageGoalTrack;
import com.hydrogen.ApiException;
import com.hydrogen.model.Goal;
import org.threeten.bp.OffsetDateTime;
import com.hydrogen.model.PageGoal;
import com.hydrogen.model.PagePortfolioTransaction;
import com.hydrogen.model.PortfolioHoldingAgg;
import java.util.UUID;
import org.junit.Test;
import org.junit.Ignore;

import java.util.List;

/**
 * API tests for GoalApi
 */
@Ignore
public class GoalApiTest {

    private final GoalApi api = new GoalApi();

    
    /**
     * Create a goal track record
     *
     * Create a goal track record for a goal under a client.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createGoalTrackUsingPostTest() throws ApiException {
        GoalTrack goalTrack = null;
        GoalTrack response = api.createGoalTrackUsingPost(goalTrack);

        // TODO: test validations
    }
    
    /**
     * Create a goal
     *
     * Create a new goal for your firm that clients can customize for themselves.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createGoalUsingPostTest() throws ApiException {
        Goal goalRequest = null;
        Goal response = api.createGoalUsingPost(goalRequest);

        // TODO: test validations
    }
    
    /**
     * Delete a goal track record
     *
     * Permanently delete an goal track record for a goal under a client.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteGoalTrackUsingDeleteTest() throws ApiException {
        UUID goalTrackId = null;
        UUID goalTrackId2 = null;
        api.deleteGoalTrackUsingDelete(goalTrackId, goalTrackId2);

        // TODO: test validations
    }
    
    /**
     * Delete a goal
     *
     * Permanently delete a goal for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteGoalUsingDeleteTest() throws ApiException {
        UUID goalId = null;
        api.deleteGoalUsingDelete(goalId);

        // TODO: test validations
    }
    
    /**
     * List all goals
     *
     * Get the details for all goals defined by your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getGoalAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageGoal response = api.getGoalAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * List goal asset sizes
     *
     * Get a list of asset sizes per date for a goal for a specified client.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getGoalAssetSizeAllUsingGetTest() throws ApiException {
        UUID clientId = null;
        UUID goalId = null;
        OffsetDateTime endDate = null;
        Boolean getLatest = null;
        Boolean portfolioGoal = null;
        String sortType = null;
        OffsetDateTime startDate = null;
        List<AvailableDateDoubleVO> response = api.getGoalAssetSizeAllUsingGet(clientId, goalId, endDate, getLatest, portfolioGoal, sortType, startDate);

        // TODO: test validations
    }
    
    /**
     * List goal holdings
     *
     * Get the information for all the securities that are currently being held in portfolios associated with a particular goal.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getGoalHoldingAllUsingGetTest() throws ApiException {
        UUID clientId = null;
        UUID goalId = null;
        OffsetDateTime endDate = null;
        Boolean portfolioGoal = null;
        OffsetDateTime startDate = null;
        List<PortfolioHoldingAgg> response = api.getGoalHoldingAllUsingGet(clientId, goalId, endDate, portfolioGoal, startDate);

        // TODO: test validations
    }
    
    /**
     * List all goal track records
     *
     * Get information for all goal track records stored for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getGoalTrackAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String endDate = null;
        String filter = null;
        Boolean getLatest = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        String startDate = null;
        PageGoalTrack response = api.getGoalTrackAllUsingGet(ascending, endDate, filter, getLatest, orderBy, page, size, startDate);

        // TODO: test validations
    }
    
    /**
     * Retrieve a goal track record
     *
     * Retrieve the information for a specific goal track record for a goal under a client.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getGoalTrackUsingGetTest() throws ApiException {
        UUID goalTrackId = null;
        UUID goalTrackId2 = null;
        GoalTrack response = api.getGoalTrackUsingGet(goalTrackId, goalTrackId2);

        // TODO: test validations
    }
    
    /**
     * List goal transactions
     *
     * Get the information for all transactions under portfolios associated with a particular goal.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getGoalTransactionAllUsingGetTest() throws ApiException {
        UUID clientId = null;
        UUID goalId = null;
        Boolean ascending = null;
        OffsetDateTime endDate = null;
        String orderBy = null;
        Integer page = null;
        Boolean portfolioGoal = null;
        Integer size = null;
        OffsetDateTime startDate = null;
        PagePortfolioTransaction response = api.getGoalTransactionAllUsingGet(clientId, goalId, ascending, endDate, orderBy, page, portfolioGoal, size, startDate);

        // TODO: test validations
    }
    
    /**
     * Retrieve a goal
     *
     * Retrieve the information for a goal defined for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getGoalUsingGetTest() throws ApiException {
        UUID goalId = null;
        Goal response = api.getGoalUsingGet(goalId);

        // TODO: test validations
    }
    
    /**
     * Update a goal track record
     *
     * Update the information for a goal track record.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateGoalTrackUsingPutTest() throws ApiException {
        GoalTrack goalTrack = null;
        UUID goalTrackId = null;
        GoalTrack response = api.updateGoalTrackUsingPut(goalTrack, goalTrackId);

        // TODO: test validations
    }
    
    /**
     * Update a goal
     *
     * Update a goal defined for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateGoalUsingPutTest() throws ApiException {
        Goal goal = null;
        UUID goalId = null;
        Goal response = api.updateGoalUsingPut(goal, goalId);

        // TODO: test validations
    }
    
}
