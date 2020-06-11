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
require 'date'

# Unit tests for ProtonApi::MortgageCalculatorHomePriceRequest
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'MortgageCalculatorHomePriceRequest' do
  before do
    # run before each test
    @instance = ProtonApi::MortgageCalculatorHomePriceRequest.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of MortgageCalculatorHomePriceRequest' do
    it 'should create an instance of MortgageCalculatorHomePriceRequest' do
      expect(@instance).to be_instance_of(ProtonApi::MortgageCalculatorHomePriceRequest)
    end
  end
  describe 'test attribute "down_payment"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "mortgage_term"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "periodic_payment"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "interest_rate"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
