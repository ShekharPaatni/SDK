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

# Unit tests for NucleusApi::RiskProfileApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'RiskProfileApi' do
  before do
    # run before each test
    @instance = NucleusApi::RiskProfileApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of RiskProfileApi' do
    it 'should create an instance of RiskProfileApi' do
      expect(@instance).to be_instance_of(NucleusApi::RiskProfileApi)
    end
  end

  # unit tests for create_risk_profile_using_post
  # Create a Risk Profile
  # Create a new Risk Profile. 
  # @param risk_profile riskProfile
  # @param [Hash] opts the optional parameters
  # @return [RiskProfile]
  describe 'create_risk_profile_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_risk_profile_using_delete
  # Delete a Risk Profile
  # Permanently Delete a Risk Profile.
  # @param risk_profile_id UUID risk_profile_id
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_risk_profile_using_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_risk_profile_all_using_get
  # Get All Risk Profile
  # Get All Risk Profile. 
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :ascending ascending
  # @option opts [String] :filter filter
  # @option opts [String] :order_by order_by
  # @option opts [Integer] :page page
  # @option opts [Integer] :size size
  # @return [PageRiskProfile]
  describe 'get_risk_profile_all_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_risk_profile_using_get
  # Get a Risk Profile
  # Get a Risk Profile. 
  # @param risk_profile_id UUID risk_profile_id
  # @param [Hash] opts the optional parameters
  # @return [RiskProfile]
  describe 'get_risk_profile_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_risk_profile_using_put
  # Update a Risk Profile
  # Update a Risk Profile. 
  # @param risk_profile risk_profile
  # @param risk_profile_id UUID risk_profile_id
  # @param [Hash] opts the optional parameters
  # @return [RiskProfile]
  describe 'update_risk_profile_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
