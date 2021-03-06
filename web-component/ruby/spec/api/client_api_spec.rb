=begin
#Hydrogen Admin API

#The Hydrogen Admin API

OpenAPI spec version: 1.3.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.15

=end

require 'spec_helper'
require 'json'

# Unit tests for AdminApi::ClientApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'ClientApi' do
  before do
    # run before each test
    @instance = AdminApi::ClientApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of ClientApi' do
    it 'should create an instance of ClientApi' do
      expect(@instance).to be_instance_of(AdminApi::ClientApi)
    end
  end

  # unit tests for create_using_post
  # create
  # @param client client
  # @param [Hash] opts the optional parameters
  # @return [Client]
  describe 'create_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_using_delete
  # delete
  # @param client_id client_id
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_using_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_all_client_using_get
  # getAllClient
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :ascending ascending
  # @option opts [String] :filter filter
  # @option opts [String] :order_by order_by
  # @option opts [Integer] :page page
  # @option opts [Integer] :size size
  # @return [PageClient]
  describe 'get_all_client_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_using_get
  # get
  # @param client_id client_id
  # @param [Hash] opts the optional parameters
  # @return [Client]
  describe 'get_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_using_put
  # update
  # @param client client
  # @param client_id client_id
  # @param [Hash] opts the optional parameters
  # @return [Client]
  describe 'update_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
