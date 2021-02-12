=begin
#Hydrogen Integration API

#The Hydrogen Integration API

OpenAPI spec version: 1.2.1
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.18

=end

require 'spec_helper'
require 'json'

# Unit tests for IntegrationApi::SMSApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'SMSApi' do
  before do
    # run before each test
    @instance = IntegrationApi::SMSApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of SMSApi' do
    it 'should create an instance of SMSApi' do
      expect(@instance).to be_instance_of(IntegrationApi::SMSApi)
    end
  end

  # unit tests for get_vendor_call_limit
  # Fetch details for corresponding sms_id
  # Fetch details for corresponding sms_id
  # @param sms_id sms_id
  # @param [Hash] opts the optional parameters
  # @return [SMS]
  describe 'get_vendor_call_limit test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for send_mail
  # Send SMS to recipient
  # Send SMS to recipient
  # @param sms_vo smsVO
  # @param [Hash] opts the optional parameters
  # @return [SMSResponseVO]
  describe 'send_mail test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end