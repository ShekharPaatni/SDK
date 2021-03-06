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

import com.hydrogen.integration.model.AccountingFinalResponseVO;
import com.hydrogen.integration.model.VendorAccessConfigVO;
import com.hydrogen.integration.ApiException;
import org.threeten.bp.OffsetDateTime;
import java.util.UUID;

import org.junit.Test;
import org.junit.Ignore;

/**
 * API tests for AccountingApi
 */
@Ignore
public class AccountingApiTest {

    private final AccountingApi api = new AccountingApi();

    
    /**
     * Create/Update bill payment in Nucleus for a given nucleus_invoice_id
     *
     * Create/Update bill payment in Nucleus for a given nucleus_invoice_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createOrUpdateBillPaymentTest() throws ApiException {
        UUID nucleusInvoiceId = null;
        AccountingFinalResponseVO response = api.createOrUpdateBillPayment(nucleusInvoiceId);

        // TODO: test validations
    }
    
    /**
     * Update/Create all bills in Nucleus for a given nucleus_client_id
     *
     * Update/Create all bills in Nucleus for a given nucleus_client_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createOrUpdateBillsTest() throws ApiException {
        UUID nucleusContactId = null;
        OffsetDateTime startDate = null;
        OffsetDateTime endDate = null;
        AccountingFinalResponseVO response = api.createOrUpdateBills(nucleusContactId, startDate, endDate);

        // TODO: test validations
    }
    
    /**
     * Update/Create all customers in Nucleus for a given nucleus_client_id
     *
     * Update/Create all customers in Nucleus for a given nucleus_client_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createOrUpdateCustomerTest() throws ApiException {
        UUID nucleusBusinessId = null;
        UUID nucleusClientId = null;
        AccountingFinalResponseVO response = api.createOrUpdateCustomer(nucleusBusinessId, nucleusClientId);

        // TODO: test validations
    }
    
    /**
     * Update/Create all customers revenue in Nucleus for a given nucleus_contact_id
     *
     * Update/Create all customers revenue in Nucleus for a given nucleus_contact_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createOrUpdateCustomerRevenueTest() throws ApiException {
        UUID nucleusContactId = null;
        OffsetDateTime startDate = null;
        String accountingMethod = null;
        OffsetDateTime endDate = null;
        AccountingFinalResponseVO response = api.createOrUpdateCustomerRevenue(nucleusContactId, startDate, accountingMethod, endDate);

        // TODO: test validations
    }
    
    /**
     * Create/Update invoice payment in Nucleus for a given nucleus_invoice_id
     *
     * Create/Update invoice payment in Nucleus for a given nucleus_invoice_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createOrUpdateInvoicePaymentTest() throws ApiException {
        UUID nucleusInvoiceId = null;
        AccountingFinalResponseVO response = api.createOrUpdateInvoicePayment(nucleusInvoiceId);

        // TODO: test validations
    }
    
    /**
     * Update/Create all invoices in Nucleus for a given nucleus_client_id
     *
     * Update/Create all invoices in Nucleus for a given nucleus_client_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createOrUpdateInvoicesTest() throws ApiException {
        UUID nucleusContactId = null;
        OffsetDateTime startDate = null;
        OffsetDateTime endDate = null;
        AccountingFinalResponseVO response = api.createOrUpdateInvoices(nucleusContactId, startDate, endDate);

        // TODO: test validations
    }
    
    /**
     * Update/Create all suppliers in Nucleus for a given nucleus_client_id
     *
     * Update/Create all suppliers in Nucleus for a given nucleus_client_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createOrUpdateSupplierTest() throws ApiException {
        UUID nucleusBusinessId = null;
        UUID nucleusClientId = null;
        AccountingFinalResponseVO response = api.createOrUpdateSupplier(nucleusBusinessId, nucleusClientId);

        // TODO: test validations
    }
    
    /**
     * Permanently delete relation with particular accounting vendor.
     *
     * Permanently delete relation with particular accounting vendor.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteAccountingVendorAccessConfigIsActiveByIdTest() throws ApiException {
        UUID id = null;
        api.deleteAccountingVendorAccessConfigIsActiveById(id);

        // TODO: test validations
    }
    
    /**
     * Get accounting stats from financial statements at the vendor for the business provided
     *
     * Get accounting stats from financial statements at the vendor for the business provided
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getAccountingStatsTest() throws ApiException {
        String accountingMethod = null;
        UUID nucleusBusinessId = null;
        UUID nucleusClientId = null;
        String periodLength = null;
        Integer periodMonth = null;
        Integer periodQuarter = null;
        String periodType = null;
        Integer periodYear = null;
        String report = null;
        OffsetDateTime statementDate = null;
        AccountingFinalResponseVO response = api.getAccountingStats(accountingMethod, nucleusBusinessId, nucleusClientId, periodLength, periodMonth, periodQuarter, periodType, periodYear, report, statementDate);

        // TODO: test validations
    }
    
    /**
     * Get Accounting Vendor Config
     *
     * Get Accounting vendor config information with its status.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getAccountingVendorInfoUsingClientIdTest() throws ApiException {
        UUID id = null;
        VendorAccessConfigVO response = api.getAccountingVendorInfoUsingClientId(id);

        // TODO: test validations
    }
    
    /**
     * Enable/Disable relation with particular accounting vendor.
     *
     * Enable/Disable link with particular accounting vendor.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateAccountingVendorAccessConfigIsActiveByIdTest() throws ApiException {
        UUID id = null;
        Boolean isActive = null;
        VendorAccessConfigVO response = api.updateAccountingVendorAccessConfigIsActiveById(id, isActive);

        // TODO: test validations
    }
    
    /**
     * Update bill in Nucleus for a given nucleus_invoice_id
     *
     * Update bill in Nucleus for a given nucleus_invoice_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateBillTest() throws ApiException {
        UUID nucleusInvoiceId = null;
        AccountingFinalResponseVO response = api.updateBill(nucleusInvoiceId);

        // TODO: test validations
    }
    
    /**
     * Update customer in Nucleus for a given nucleus_contact_id
     *
     * Update customer in Nucleus for a given nucleus_contact_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateCustomerTest() throws ApiException {
        UUID nucleusContactId = null;
        AccountingFinalResponseVO response = api.updateCustomer(nucleusContactId);

        // TODO: test validations
    }
    
    /**
     * Update invoice in Nucleus for a given nucleus_invoice_id
     *
     * Update invoice in Nucleus for a given nucleus_invoice_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateInvoiceTest() throws ApiException {
        UUID nucleusInvoiceId = null;
        AccountingFinalResponseVO response = api.updateInvoice(nucleusInvoiceId);

        // TODO: test validations
    }
    
    /**
     * Update supplier in Nucleus for a given nucleus_contact_id
     *
     * Update supplier in Nucleus for a given nucleus_contact_id
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateSupplierTest() throws ApiException {
        UUID nucleusContactId = null;
        AccountingFinalResponseVO response = api.updateSupplier(nucleusContactId);

        // TODO: test validations
    }
    
}
