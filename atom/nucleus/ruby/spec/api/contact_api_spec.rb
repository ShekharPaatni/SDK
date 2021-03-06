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

# Unit tests for NucleusApi::ContactApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'ContactApi' do
  before do
    # run before each test
    @instance = NucleusApi::ContactApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of ContactApi' do
    it 'should create an instance of ContactApi' do
      expect(@instance).to be_instance_of(NucleusApi::ContactApi)
    end
  end

  # unit tests for create_contact_using_post
  # Create a contact
  # Create a new contact, with your firm.
  # @param contact contact
  # @param [Hash] opts the optional parameters
  # @return [Contact]
  describe 'create_contact_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_customer_revenue_using_post
  # Create a customer revenue
  # Create a new customer revenue, with your firm.
  # @param customer_revenue customerRevenue
  # @param [Hash] opts the optional parameters
  # @return [CustomerRevenue]
  describe 'create_customer_revenue_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_contact_using_delete
  # Delete a contact
  # Delete a contact. 
  # @param contact_id UUID contact_id
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_contact_using_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_customer_revenue_using_delete
  # Delete a customer revenue
  # Delete a customer revenue. 
  # @param customer_revenue_id UUID customer_revenue_id
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_customer_revenue_using_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_contact_all_using_get
  # List all contact
  # List all contact. 
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :ascending ascending
  # @option opts [String] :filter filter
  # @option opts [String] :order_by order_by
  # @option opts [Integer] :page page
  # @option opts [Integer] :size size
  # @return [PageContact]
  describe 'get_contact_all_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_contact_using_get
  # Retrieve a contact
  # Retrieve a contact. 
  # @param contact_id UUID contact_id
  # @param [Hash] opts the optional parameters
  # @return [Contact]
  describe 'get_contact_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_customer_revenue_all_using_get
  # List all customer revenue
  # List all customer revenue. 
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :ascending ascending
  # @option opts [String] :currency_conversion currency_conversion
  # @option opts [String] :filter filter
  # @option opts [String] :order_by order_by
  # @option opts [Integer] :page page
  # @option opts [Integer] :size size
  # @return [PageCustomerRevenue]
  describe 'get_customer_revenue_all_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_customer_revenue_using_get
  # Retrieve a customer revenue
  # Retrieve a customer revenue. 
  # @param customer_revenue_id UUID customer_revenue_id
  # @param [Hash] opts the optional parameters
  # @option opts [String] :currency_conversion USD
  # @return [CustomerRevenue]
  describe 'get_customer_revenue_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_contact_using_put
  # Update a contact
  # Update a contact. 
  # @param contact contact
  # @param contact_id UUID contact_id
  # @param [Hash] opts the optional parameters
  # @return [Contact]
  describe 'update_contact_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_customer_revenue_using_put
  # Update a customer revenue
  # Update a customer revenue. 
  # @param customer_revenue customer_revenue
  # @param customer_revenue_id UUID customer_revenue_id
  # @param [Hash] opts the optional parameters
  # @return [CustomerRevenue]
  describe 'update_customer_revenue_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
