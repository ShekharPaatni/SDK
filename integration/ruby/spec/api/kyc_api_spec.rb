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

# Unit tests for IntegrationApi::KYCApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'KYCApi' do
  before do
    # run before each test
    @instance = IntegrationApi::KYCApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of KYCApi' do
    it 'should create an instance of KYCApi' do
      expect(@instance).to be_instance_of(IntegrationApi::KYCApi)
    end
  end

  # unit tests for create_kyc_using_post
  # Do kyc for the client.
  # Do kyc for the client.
  # @param kyc_request_co kycRequestCO
  # @param [Hash] opts the optional parameters
  # @return [KycResponseVo]
  describe 'create_kyc_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_kyc_status_using_get
  # Fetch kyc_status for the given nucleus_client_id
  # Fetch kyc_status for the given nucleus_client_id
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :get_latest get_latest
  # @option opts [String] :kyc_type kyc_type
  # @option opts [String] :nucleus_business_id nucleus_business_id
  # @option opts [String] :nucleus_client_id nucleus_client_id
  # @option opts [String] :product product
  # @return [Array<KycResponseVo>]
  describe 'get_kyc_status_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
