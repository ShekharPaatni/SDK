=begin
#Hydrogen Atom API

#The Hydrogen Atom API

OpenAPI spec version: 1.7.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.14

=end

require 'spec_helper'
require 'json'

# Unit tests for AtomApi::AggregationAccountApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'AggregationAccountApi' do
  before do
    # run before each test
    @instance = AtomApi::AggregationAccountApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of AggregationAccountApi' do
    it 'should create an instance of AggregationAccountApi' do
      expect(@instance).to be_instance_of(AtomApi::AggregationAccountApi)
    end
  end

  # unit tests for create_aggregation_account_balance_bulk_using_post
  # Create a bulk aggregation account balance
  # Create a balance records under an aggregation accounts.
  # @param aggregation_account_balance aggregationAccountBalance
  # @param [Hash] opts the optional parameters
  # @return [Array<AggregationAccountBalance>]
  describe 'create_aggregation_account_balance_bulk_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_aggregation_account_balance_using_post
  # Create an aggregation account balance
  # Create a balance record under an aggregation account.
  # @param aggregation_account_balance aggregationAccountBalance
  # @param [Hash] opts the optional parameters
  # @return [AggregationAccountBalance]
  describe 'create_aggregation_account_balance_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_aggregation_account_bulk_using_post
  # Create a bulk aggregation account
  # Create a bulk aggregation account under a client.
  # @param aggregation_account_list aggregationAccountList
  # @param [Hash] opts the optional parameters
  # @return [Array<AggregationAccount>]
  describe 'create_aggregation_account_bulk_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_aggregation_account_holding_bulk_using_post
  # Create a bulk aggregation account holding
  # Create a bulk aggregation account holding.
  # @param aggregation_transaction aggregationTransaction
  # @param [Hash] opts the optional parameters
  # @return [Array<AggregationAccountHolding>]
  describe 'create_aggregation_account_holding_bulk_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_aggregation_account_holding_using_post
  # Create an aggregation account holding
  # Create a holding record under an aggregation account.
  # @param aggregation_account_holding aggregationAccountHolding
  # @param [Hash] opts the optional parameters
  # @return [AggregationAccountHolding]
  describe 'create_aggregation_account_holding_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_aggregation_account_transaction_bulk_using_post
  # Create a bulk aggregation account transaction
  # Create a bulk transaction record under an aggregation account.
  # @param aggregation_account_transactions aggregationAccountTransactions
  # @param [Hash] opts the optional parameters
  # @return [Array<AggregationAccountTransaction>]
  describe 'create_aggregation_account_transaction_bulk_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_aggregation_account_transaction_using_post
  # Create an aggregation account transaction
  # Create a transaction record under an aggregation account.
  # @param aggregation_account_transaction aggregationAccountTransaction
  # @param [Hash] opts the optional parameters
  # @return [AggregationAccountTransaction]
  describe 'create_aggregation_account_transaction_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_aggregation_account_using_post
  # Create an aggregation account
  # Create an aggregation account under a client.
  # @param aggregation_account aggregationAccount
  # @param [Hash] opts the optional parameters
  # @return [AggregationAccount]
  describe 'create_aggregation_account_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_aggregation_account_balance_using_delete
  # Delete an aggregation account balance
  # Permanently delete a balance record for an aggregation account.
  # @param aggregation_account_balance_id UUID aggregation_account_balance_id
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_aggregation_account_balance_using_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_aggregation_account_holding_using_delete
  # Delete an aggregation account holding
  # Permanently delete a holding record for an aggregation account.
  # @param aggregation_account_holding_id UUID aggregation_account_holding_id
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_aggregation_account_holding_using_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_aggregation_account_transaction_using_delete
  # Delete an aggregation account transaction
  # Permanently delete a transaction record for an aggregation account.
  # @param aggregation_account_transaction_id UUID aggregation_account_transaction_id
  # @param [Hash] opts the optional parameters
  # @return [AggregationAccountTransaction]
  describe 'delete_aggregation_account_transaction_using_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_aggregation_account_using_delete
  # Delete an aggregation account
  # Permanently delete an aggregation account under a client.
  # @param aggregation_account_id UUID aggregation_account_id
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_aggregation_account_using_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_aggregation_account_aggregate_data_using_get
  # Retrieve an aggregation account aggregate data
  # Retrieve the information for a specific aggregation account associated with a client.
  # @param aggregation_account_id UUID aggregation_account_id
  # @param [Hash] opts the optional parameters
  # @return [AggregationAccountAggregateDataVO]
  describe 'get_aggregation_account_aggregate_data_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_aggregation_account_all_using_get
  # List all aggregation accounts
  # Get information for all aggregation accounts for all clients defined for your firm.
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :ascending ascending
  # @option opts [String] :filter filter
  # @option opts [String] :order_by order_by
  # @option opts [Integer] :page page
  # @option opts [Integer] :size size
  # @return [PageAggregationAccount]
  describe 'get_aggregation_account_all_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_aggregation_account_balance_all_using_get
  # List all aggregation account balances
  # Get all of the balance records for all aggregation accounts defined for your firm.
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :ascending ascending
  # @option opts [String] :filter filter
  # @option opts [String] :order_by order_by
  # @option opts [Integer] :page page
  # @option opts [Integer] :size size
  # @return [PageAggregationAccountBalance]
  describe 'get_aggregation_account_balance_all_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_aggregation_account_balance_using_get
  # Retrieve an aggregation account balance
  # Retrieve the information for a specific balance record for an aggregation account.
  # @param aggregation_account_balance_id UUID aggregation_account_balance_id
  # @param [Hash] opts the optional parameters
  # @return [AggregationAccountBalance]
  describe 'get_aggregation_account_balance_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_aggregation_account_holding_all_using_get
  # List all aggregation account holdings
  # Get all of the holding records for all aggregation accounts defined for your firm.
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :ascending ascending
  # @option opts [String] :filter filter
  # @option opts [String] :order_by order_by
  # @option opts [Integer] :page page
  # @option opts [Integer] :size size
  # @return [PageAggregationAccountHolding]
  describe 'get_aggregation_account_holding_all_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_aggregation_account_holding_using_get
  # Retrieve an aggregation account holding
  # Retrieve the information for a specific holding record for an aggregation account.
  # @param aggregation_account_holding_id UUID aggregation_account_holding_id
  # @param [Hash] opts the optional parameters
  # @return [AggregationAccountHolding]
  describe 'get_aggregation_account_holding_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_aggregation_account_overview_using_get
  # Retrieve an aggregation account aggregate data
  # Retrieve the information for a specific aggregation account with aggregate data for a client.
  # @param client_id UUID client_id
  # @param [Hash] opts the optional parameters
  # @return [AggregationDataForClientParentResponseVO]
  describe 'get_aggregation_account_overview_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_aggregation_account_transaction_all_using_get
  # List all aggregation account transactions
  # Get all of the transaction records for all aggregation accounts defined for your firm.
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :ascending ascending
  # @option opts [String] :filter filter
  # @option opts [String] :order_by order_by
  # @option opts [Integer] :page page
  # @option opts [Integer] :size size
  # @return [PageAggregationAccountTransaction]
  describe 'get_aggregation_account_transaction_all_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_aggregation_account_transaction_using_get
  # Retrieve an aggregation account transaction
  # Retrieve the information for a specific transaction record for an aggregation account.
  # @param aggregation_account_transaction_id UUID aggregation_account_transaction_id
  # @param [Hash] opts the optional parameters
  # @return [AggregationAccountTransaction]
  describe 'get_aggregation_account_transaction_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_aggregation_account_using_get
  # Retrieve an aggregation account
  # Retrieve the information for a specific aggregation account associated with a client.
  # @param aggregation_account_id UUID aggregation_account_id
  # @param [Hash] opts the optional parameters
  # @return [AggregationAccount]
  describe 'get_aggregation_account_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_aggregation_account_balance_using_put
  # Update an aggregation account balance
  # Update a balance record for an aggregation account.
  # @param aggregation_account_balance aggregation_account_balance
  # @param aggregation_account_balance_id UUID aggregation_account_balance_id
  # @param [Hash] opts the optional parameters
  # @return [AggregationAccountBalance]
  describe 'update_aggregation_account_balance_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_aggregation_account_bulk_using_put
  # Update a bulk aggregation account
  # Update a bulk aggregation account under a client.
  # @param aggregation_account_list aggregationAccountList
  # @param [Hash] opts the optional parameters
  # @return [AggregationAccount]
  describe 'update_aggregation_account_bulk_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_aggregation_account_holding_bulk_using_put
  # Update an bulk aggregation account holding
  # Update a bulk holding record for an aggregation account.
  # @param aggregation_account_holding aggregationAccountHolding
  # @param [Hash] opts the optional parameters
  # @return [Array<AggregationAccountHolding>]
  describe 'update_aggregation_account_holding_bulk_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_aggregation_account_holding_using_put
  # Update an aggregation account holding
  # Update a holding record for an aggregation account.
  # @param aggregation_account_holding aggregation_account_holding
  # @param aggregation_account_holding_id UUID aggregation_account_holding_id
  # @param [Hash] opts the optional parameters
  # @return [AggregationAccountHolding]
  describe 'update_aggregation_account_holding_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_aggregation_account_transaction_using_put
  # Update an aggregation account transaction
  # Update a transaction record for an aggregation account.
  # @param aggregation_account_transaction aggregation_account_transaction
  # @param aggregation_account_transaction_id UUID aggregation_account_transaction_id
  # @param [Hash] opts the optional parameters
  # @return [AggregationAccountTransaction]
  describe 'update_aggregation_account_transaction_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_aggregation_account_using_put
  # Update an aggregation account
  # Update the information for an aggregation account.
  # @param aggregation_account aggregation_account
  # @param aggregation_account_id UUID aggregation_account_id
  # @param [Hash] opts the optional parameters
  # @return [AggregationAccount]
  describe 'update_aggregation_account_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
