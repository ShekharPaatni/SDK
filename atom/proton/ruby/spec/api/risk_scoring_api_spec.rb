=begin
#Hydrogen Proton API

#Financial engineering module of Hydrogen Atom

OpenAPI spec version: 1.7.18
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.14

=end

require 'spec_helper'
require 'json'

# Unit tests for ProtonApi::RiskScoringApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'RiskScoringApi' do
  before do
    # run before each test
    @instance = ProtonApi::RiskScoringApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of RiskScoringApi' do
    it 'should create an instance of RiskScoringApi' do
      expect(@instance).to be_instance_of(ProtonApi::RiskScoringApi)
    end
  end

  # unit tests for dimensional_risk_score
  # Dimensional Risk Score
  # Calculate a dimensional risk score based on questionnaire responses
  # @param dimensional_risk_score_request Request payload for Dimensional Risk Score
  # @param [Hash] opts the optional parameters
  # @return [Hash<String, Object>]
  describe 'dimensional_risk_score test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for risk_allocation
  # Risk Allocation
  # Allocate based on a risk score
  # @param risk_allocation_request Request payload for Risk Allocation
  # @param [Hash] opts the optional parameters
  # @return [Hash<String, Object>]
  describe 'risk_allocation test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for risk_score
  # Risk Score
  # Calculate a risk score based on questionnaire responses
  # @param risk_score_request Request payload for Risk Score
  # @param [Hash] opts the optional parameters
  # @return [Hash<String, Object>]
  describe 'risk_score test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end