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

# Unit tests for ProtonApi::Settings
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'Settings' do
  before do
    # run before each test
    @instance = ProtonApi::Settings.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of Settings' do
    it 'should create an instance of Settings' do
      expect(@instance).to be_instance_of(ProtonApi::Settings)
    end
  end
  describe 'test attribute "default_drift_factor"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "downside"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "period_rebal"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "rebalance_period"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
      # validator = Petstore::EnumTest::EnumAttributeValidator.new('Integer', ["0", "1", "2", "3", "4"])
      # validator.allowable_values.each do |value|
      #   expect { @instance.rebalance_period = value }.not_to raise_error
      # end
    end
  end

  describe 'test attribute "tax_efficiency_id"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
      # validator = Petstore::EnumTest::EnumAttributeValidator.new('Integer', ["0", "1", "2", "3", "4"])
      # validator.allowable_values.each do |value|
      #   expect { @instance.tax_efficiency_id = value }.not_to raise_error
      # end
    end
  end

  describe 'test attribute "drift_rebal"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
