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

import com.hydrogen.nucleus.model.PagePortfolio;
import com.hydrogen.nucleus.model.PagePortfolioAssetSizeLog;
import com.hydrogen.nucleus.model.PagePortfolioComment;
import com.hydrogen.nucleus.model.PagePortfolioGoal;
import com.hydrogen.nucleus.model.PagePortfolioHoldingLog;
import com.hydrogen.nucleus.model.PagePortfolioTransaction;
import com.hydrogen.nucleus.model.Portfolio;
import com.hydrogen.nucleus.model.PortfolioAssetSizeLog;
import com.hydrogen.nucleus.model.PortfolioComment;
import com.hydrogen.nucleus.model.PortfolioGoal;
import com.hydrogen.nucleus.model.PortfolioHoldingLog;
import com.hydrogen.nucleus.model.PortfolioTransaction;
import com.hydrogen.nucleus.ApiException;

import java.util.UUID;
import org.junit.Test;
import org.junit.Ignore;

/**
 * API tests for PortfolioApi
 */
@Ignore
public class PortfolioApiTest {

    private final PortfolioApi api = new PortfolioApi();

    
    /**
     * Create a portfolio asset size
     *
     * Create a new asset size record for a portfolio.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createPortfolioAssetSizeUsingPostTest() throws ApiException {
        PortfolioAssetSizeLog portfolioAssetSizeLogRequest = null;
        PortfolioAssetSizeLog response = api.createPortfolioAssetSizeUsingPost(portfolioAssetSizeLogRequest);

        // TODO: test validations
    }
    
    /**
     * Create a portfolio commentary
     *
     * Create a new comment for a portfolio defined for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createPortfolioCommentUsingPostTest() throws ApiException {
        PortfolioComment portfolioComment = null;
        PortfolioComment response = api.createPortfolioCommentUsingPost(portfolioComment);

        // TODO: test validations
    }
    
    /**
     * Create an portfolio goal
     *
     * Create an portfolio goal.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createPortfolioGoalUsingPostTest() throws ApiException {
        PortfolioGoal portfolioGoal = null;
        PortfolioGoal response = api.createPortfolioGoalUsingPost(portfolioGoal);

        // TODO: test validations
    }
    
    /**
     * Create a portfolio holding
     *
     * Create a new holding record for a portfolio.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createPortfolioHoldingUsingPostTest() throws ApiException {
        PortfolioHoldingLog portfolioHoldinLogRequest = null;
        PortfolioHoldingLog response = api.createPortfolioHoldingUsingPost(portfolioHoldinLogRequest);

        // TODO: test validations
    }
    
    /**
     * Create a portfolio transaction
     *
     * Create a new transaction record for a portfolio.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createPortfolioTransactionUsingPostTest() throws ApiException {
        PortfolioTransaction portfolioTransactionRequest = null;
        PortfolioTransaction response = api.createPortfolioTransactionUsingPost(portfolioTransactionRequest);

        // TODO: test validations
    }
    
    /**
     * Create a portfolio
     *
     * Create a new portfolio for an account.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createPortfolioUsingPostTest() throws ApiException {
        Portfolio portfolioRequest = null;
        Portfolio response = api.createPortfolioUsingPost(portfolioRequest);

        // TODO: test validations
    }
    
    /**
     * Delete a portfolio asset size
     *
     * Permanently delete a portfolio asset size record for a portfolio.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deletePortfolioAssetSizeUsingDeleteTest() throws ApiException {
        UUID portfolioAssetSizeId = null;
        api.deletePortfolioAssetSizeUsingDelete(portfolioAssetSizeId);

        // TODO: test validations
    }
    
    /**
     * Delete a portfolio commentary
     *
     * Permanently delete a portfolio comment for a portfolio.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deletePortfolioCommentUsingDeleteTest() throws ApiException {
        UUID portfolioCommentId = null;
        api.deletePortfolioCommentUsingDelete(portfolioCommentId);

        // TODO: test validations
    }
    
    /**
     * Delete an portfolio goal
     *
     * Permanently delete an portfolio-goal mapping.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deletePortfolioGoalUsingDeleteTest() throws ApiException {
        UUID portfolioGoalId = null;
        api.deletePortfolioGoalUsingDelete(portfolioGoalId);

        // TODO: test validations
    }
    
    /**
     * Delete a portfolio holding
     *
     * Permanently delete a portfolio holding record for a portfolio.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deletePortfolioHoldingUsingDeleteTest() throws ApiException {
        UUID portfolioHoldingId = null;
        api.deletePortfolioHoldingUsingDelete(portfolioHoldingId);

        // TODO: test validations
    }
    
    /**
     * Delete a portfolio transaction
     *
     * Permanently delete a portfolio transaction record for a portfolio.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deletePortfolioTransactionUsingDeleteTest() throws ApiException {
        UUID portfolioTransactionId = null;
        api.deletePortfolioTransactionUsingDelete(portfolioTransactionId);

        // TODO: test validations
    }
    
    /**
     * Delete a portfolio
     *
     * Permanently delete a portfolio for an account.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deletePortfolioUsingDeleteTest() throws ApiException {
        UUID portfolioId = null;
        api.deletePortfolioUsingDelete(portfolioId);

        // TODO: test validations
    }
    
    /**
     * Retrieve an portfolio aggregate data
     *
     * Retrieve the information for a securities associated with a portfolio.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getPortfolioAggregatedDataUsingGetTest() throws ApiException {
        UUID portfolioId = null;
        Boolean showAssetClass = null;
        Boolean showCategory = null;
        Boolean showIndustry = null;
        Boolean showSector = null;
        Boolean showSecurityClass = null;
        Object response = api.getPortfolioAggregatedDataUsingGet(portfolioId, showAssetClass, showCategory, showIndustry, showSector, showSecurityClass);

        // TODO: test validations
    }
    
    /**
     * List all portfolios
     *
     * Get the information for all portfolios assigned to all of your firm’s accounts. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getPortfolioAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PagePortfolio response = api.getPortfolioAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve a portfolio asset size
     *
     * Retrieve the information for a portfolio asset size record for a portfolio. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getPortfolioAssetSizeAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String currencyConversion = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PagePortfolioAssetSizeLog response = api.getPortfolioAssetSizeAllUsingGet(ascending, currencyConversion, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve a portfolio asset size
     *
     * Retrieve the information for a portfolio asset size record for a portfolio.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getPortfolioAssetSizeUsingGetTest() throws ApiException {
        UUID portfolioAssetSizeId = null;
        String currencyConversion = null;
        PortfolioAssetSizeLog response = api.getPortfolioAssetSizeUsingGet(portfolioAssetSizeId, currencyConversion);

        // TODO: test validations
    }
    
    /**
     * List all portfolio commentary
     *
     * List all comments for all portfolios defined for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getPortfolioCommentAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PagePortfolioComment response = api.getPortfolioCommentAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve a portfolio commentary
     *
     * Retrieve the information for a portfolio comment for a portfolio.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getPortfolioCommentUsingGetTest() throws ApiException {
        UUID portfolioCommentId = null;
        PortfolioComment response = api.getPortfolioCommentUsingGet(portfolioCommentId);

        // TODO: test validations
    }
    
    /**
     * List all portfolio goals
     *
     * Get information for all portfolio-goal mappings defined for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getPortfolioGoalAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PagePortfolioGoal response = api.getPortfolioGoalAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve an portfolio goal
     *
     * Retrieve the information for a specific portfolio-goal mapping.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getPortfolioGoalUsingGetTest() throws ApiException {
        UUID portfolioGoalId = null;
        PortfolioGoal response = api.getPortfolioGoalUsingGet(portfolioGoalId);

        // TODO: test validations
    }
    
    /**
     * List all portfolio holdings
     *
     * Get the information for all holding records for all portfolios defined for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getPortfolioHoldingAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String currencyConversion = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PagePortfolioHoldingLog response = api.getPortfolioHoldingAllUsingGet(ascending, currencyConversion, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve a portfolio holding
     *
     * Retrieve the information for a portfolio holding record for a portfolio.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getPortfolioHoldingUsingGetTest() throws ApiException {
        UUID portfolioHoldingId = null;
        String currencyConversion = null;
        PortfolioHoldingLog response = api.getPortfolioHoldingUsingGet(portfolioHoldingId, currencyConversion);

        // TODO: test validations
    }
    
    /**
     * List all portfolio transactions
     *
     * Get the information for all transaction records for all portfolios defined for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getPortfolioTransactionAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String currencyConversion = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PagePortfolioTransaction response = api.getPortfolioTransactionAllUsingGet(ascending, currencyConversion, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve a portfolio transaction
     *
     * Retrieve the information for a portfolio transaction record for a portfolio. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getPortfolioTransactionUsingGetTest() throws ApiException {
        UUID portfolioTransactionId = null;
        String currencyConversion = null;
        PortfolioTransaction response = api.getPortfolioTransactionUsingGet(portfolioTransactionId, currencyConversion);

        // TODO: test validations
    }
    
    /**
     * Retrieve a portfolio
     *
     * Retrieve a portfolio for an account.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getPortfolioUsingGetTest() throws ApiException {
        UUID portfolioId = null;
        Portfolio response = api.getPortfolioUsingGet(portfolioId);

        // TODO: test validations
    }
    
    /**
     * Update a portfolio asset size
     *
     * Update the information for a portfolio asset size record for a portfolio.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updatePortfolioAssetSizeUsingPutTest() throws ApiException {
        PortfolioAssetSizeLog portfolioAssetSize = null;
        UUID portfolioAssetSizeId = null;
        PortfolioAssetSizeLog response = api.updatePortfolioAssetSizeUsingPut(portfolioAssetSize, portfolioAssetSizeId);

        // TODO: test validations
    }
    
    /**
     * Update a portfolio comment
     *
     * Update the information for a portfolio comment for a portfolio.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updatePortfolioCommentUsingPutTest() throws ApiException {
        PortfolioComment portfolioComment = null;
        UUID portfolioCommentId = null;
        PortfolioComment response = api.updatePortfolioCommentUsingPut(portfolioComment, portfolioCommentId);

        // TODO: test validations
    }
    
    /**
     * Update an portfolio goal
     *
     * Update the information for an portfolio-goal mapping.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updatePortfolioGoalUsingPutTest() throws ApiException {
        PortfolioGoal portfolioGoal = null;
        UUID portfolioGoalId = null;
        PortfolioGoal response = api.updatePortfolioGoalUsingPut(portfolioGoal, portfolioGoalId);

        // TODO: test validations
    }
    
    /**
     * Update a portfolio holding
     *
     * Update the information for a portfolio holding record for a portfolio.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updatePortfolioHoldingUsingPutTest() throws ApiException {
        PortfolioHoldingLog portfolioHolding = null;
        UUID portfolioHoldingId = null;
        PortfolioHoldingLog response = api.updatePortfolioHoldingUsingPut(portfolioHolding, portfolioHoldingId);

        // TODO: test validations
    }
    
    /**
     * Update a portfolio transaction
     *
     * Update the information for a portfolio transaction record for a portfolio.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updatePortfolioTransactionUsingPutTest() throws ApiException {
        PortfolioTransaction portfolioTransaction = null;
        UUID portfolioTransactionId = null;
        PortfolioTransaction response = api.updatePortfolioTransactionUsingPut(portfolioTransaction, portfolioTransactionId);

        // TODO: test validations
    }
    
    /**
     * Update a portfolio
     *
     * Update a portfolio for an account.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updatePortfolioUsingPutTest() throws ApiException {
        Portfolio portfolio = null;
        UUID portfolioId = null;
        Portfolio response = api.updatePortfolioUsingPut(portfolio, portfolioId);

        // TODO: test validations
    }
    
}
