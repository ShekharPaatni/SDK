=begin
#Hydrogen Integration API

#The Hydrogen Integration API

OpenAPI spec version: 1.3.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.19

=end

require 'spec_helper'
require 'json'

# Unit tests for IntegrationApi::BrokerageApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'BrokerageApi' do
  before do
    # run before each test
    @instance = IntegrationApi::BrokerageApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of BrokerageApi' do
    it 'should create an instance of BrokerageApi' do
      expect(@instance).to be_instance_of(IntegrationApi::BrokerageApi)
    end
  end

  # unit tests for cancel_order_using_put
  # Cancel an Order
  # @param nucleus_order_id nucleus_order_id
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'cancel_order_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_bank_link_using_post1
  # create a Bank Link
  # @param brokerage_bank_link_co brokerageBankLinkCO
  # @param [Hash] opts the optional parameters
  # @return [BrokerageBankLinkVO]
  describe 'create_bank_link_using_post1 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_brokerage_account_using_post
  # create a Brokerage account
  # @param brokerage_account_co brokerageAccountCO
  # @param [Hash] opts the optional parameters
  # @return [BrokerageAccountVO]
  describe 'create_brokerage_account_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_brokerage_client_using_post
  # Create a Brokerage Client
  # @param client_co clientCO
  # @param [Hash] opts the optional parameters
  # @return [BrokerageCreateClientVO]
  describe 'create_brokerage_client_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_deposit_using_post
  # Create a deposit
  # @param brokerage_deposit_co brokerageDepositCO
  # @param [Hash] opts the optional parameters
  # @return [BrokerageDepositVO]
  describe 'create_deposit_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_document_using_post
  # Create a Brokerage document
  # @param document_co documentCO
  # @param [Hash] opts the optional parameters
  # @return [BrokerageDocumentVO]
  describe 'create_document_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_order_using_post
  # Create an Order
  # @param brokerage_order_co brokerageOrderCO
  # @param [Hash] opts the optional parameters
  # @return [BrokerageOrderVO]
  describe 'create_order_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_withdrawal_using_post
  # Create a withdrawal
  # @param brokerage_withdrawal_co brokerageWithdrawalCO
  # @param [Hash] opts the optional parameters
  # @return [BrokerageWithdrawalVO]
  describe 'create_withdrawal_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_bank_link_using_delete1
  # Delete a Bank Link
  # @param nucleus_bank_link_id nucleus_bank_link_id
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_bank_link_using_delete1 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_balance_using_get1
  # Get account balance
  # @param nucleus_portfolio_id nucleus_portfolio_id
  # @param [Hash] opts the optional parameters
  # @return [BrokerageBalanceVO]
  describe 'get_balance_using_get1 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_bank_link_using_get1
  # Get a Bank Link
  # @param nucleus_bank_link_id nucleus_bank_link_id
  # @param [Hash] opts the optional parameters
  # @return [BrokerageBankLinkVO]
  describe 'get_bank_link_using_get1 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_brokerage_account_statement_using_get
  # Get a Brokerage account statement
  # @param end_date end_date
  # @param nucleus_account_id nucleus_account_id
  # @param start_date start_date
  # @param statement_type statement_type
  # @param [Hash] opts the optional parameters
  # @return [BrokerageStatementVO]
  describe 'get_brokerage_account_statement_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_document_using_get
  # Get a Brokerage document
  # @param nucleus_document_id nucleus_document_id
  # @param [Hash] opts the optional parameters
  # @return [BrokerageDocumentVO]
  describe 'get_document_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_holding_performance_using_get
  # Get portfolio holding performance
  # @param nucleus_portfolio_id nucleus_portfolio_id
  # @param [Hash] opts the optional parameters
  # @return [BrokeragePerformanceVO]
  describe 'get_holding_performance_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_holding_using_get
  # Get portfolio holdings
  # @param nucleus_portfolio_id nucleus_portfolio_id
  # @param [Hash] opts the optional parameters
  # @return [BrokerageHoldingVO]
  describe 'get_holding_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_order_using_get
  # Get an Order
  # @param nucleus_order_id nucleus_order_id
  # @param [Hash] opts the optional parameters
  # @return [BrokerageOrderVO]
  describe 'get_order_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_securities_using_get
  # Get securities information
  # @param vendor_name vendor_name
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :get_fundamentals get_fundamentals
  # @option opts [String] :nucleus_security_id nucleus_security_id
  # @return [BrokerageSecuritiesVO]
  describe 'get_securities_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_transactions_using_get
  # Get account transactions
  # @param drivewealth_response drivewealthResponse
  # @param end_date end_date
  # @param nucleus_portfolio_id nucleus_portfolio_id
  # @param start_date start_date
  # @param [Hash] opts the optional parameters
  # @return [BrokerageTransactionVO]
  describe 'get_transactions_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_bank_link_using_put1
  # Update a Bank Link
  # @param nucleus_bank_link_id nucleus_bank_link_id
  # @param [Hash] opts the optional parameters
  # @return [BrokerageBankLinkVO]
  describe 'update_bank_link_using_put1 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_brokerage_client_using_put
  # Update a Brokerage client
  # @param nucleus_client_id nucleus_client_id
  # @param [Hash] opts the optional parameters
  # @option opts [BrokerageUpdateClientCO] :client_co clientCO
  # @return [BrokerageUpdateClientVO]
  describe 'update_brokerage_client_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
