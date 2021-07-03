=begin
#Hydrogen Nucleus API

#The Hydrogen Nucleus API

OpenAPI spec version: 1.9.2
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.19

=end

require 'spec_helper'
require 'json'

# Unit tests for NucleusApi::FinancialStatementApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'FinancialStatementApi' do
  before do
    # run before each test
    @instance = NucleusApi::FinancialStatementApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of FinancialStatementApi' do
    it 'should create an instance of FinancialStatementApi' do
      expect(@instance).to be_instance_of(NucleusApi::FinancialStatementApi)
    end
  end

  # unit tests for create_financial_statement_using_post
  # Create an financialStatement
  # Store stats pulled from financialStatement vendors.
  # @param financial_statement financialStatement
  # @param [Hash] opts the optional parameters
  # @return [FinancialStatement]
  describe 'create_financial_statement_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_financial_statement_using_delete
  # Delete an financialStatement
  # Permanently delete an financialStatement.
  # @param financial_statement_id UUID financialStatement_id
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_financial_statement_using_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_financial_statement_all_using_get
  # List all financialStatement
  # Get information for all financialStatement for all clients defined for your firm.
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :ascending ascending
  # @option opts [String] :currency_conversion currency_conversion
  # @option opts [String] :filter filter
  # @option opts [String] :order_by order_by
  # @option opts [Integer] :page page
  # @option opts [Integer] :size size
  # @return [PageFinancialStatement]
  describe 'get_financial_statement_all_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_financial_statement_using_get
  # Retrieve an financialStatement
  # Retrieve the information for a specific financialStatement associated with a client.
  # @param financial_statement_id UUID financial_statement_id
  # @param [Hash] opts the optional parameters
  # @option opts [String] :currency_conversion USD
  # @return [FinancialStatement]
  describe 'get_financial_statement_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_financial_statement_using_put
  # Update an financialStatement
  # Update the information for an financialStatement.
  # @param financial_statement financialStatement
  # @param financial_statement_id UUID financialStatement_id
  # @param [Hash] opts the optional parameters
  # @return [FinancialStatement]
  describe 'update_financial_statement_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
