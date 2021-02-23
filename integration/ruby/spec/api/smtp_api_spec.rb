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

# Unit tests for IntegrationApi::SMTPApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'SMTPApi' do
  before do
    # run before each test
    @instance = IntegrationApi::SMTPApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of SMTPApi' do
    it 'should create an instance of SMTPApi' do
      expect(@instance).to be_instance_of(IntegrationApi::SMTPApi)
    end
  end

  # unit tests for get_smtp_status
  # Fetch details for corresponding email_id
  # Fetch details for corresponding email_id
  # @param email_id email_id
  # @param [Hash] opts the optional parameters
  # @return [Email]
  describe 'get_smtp_status test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for send_mail1
  # Send Mail to recipient
  # Send Mail to recipient
  # @param smtp_vo smtpVO
  # @param [Hash] opts the optional parameters
  # @return [SmtpResponseVO]
  describe 'send_mail1 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
