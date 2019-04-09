=begin
#Hydrogen Atom API

#The Hydrogen Atom API

OpenAPI spec version: 1.0.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.2-SNAPSHOT

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for AtomApi::GoalDepositConfig
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'GoalDepositConfig' do
  before do
    # run before each test
    @instance = AtomApi::GoalDepositConfig.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of GoalDepositConfig' do
    it 'should create an instance of GoalDepositConfig' do
      expect(@instance).to be_instance_of(AtomApi::GoalDepositConfig)
    end
  end
  describe 'test attribute "dep_start_reference"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
      # validator = Petstore::EnumTest::EnumAttributeValidator.new('String', ["a_start", "a_end"])
      # validator.allowable_values.each do |value|
      #   expect { @instance.dep_start_reference = value }.not_to raise_error
      # end
    end
  end

  describe 'test attribute "dep_start_period"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "dep_end_reference"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
      # validator = Petstore::EnumTest::EnumAttributeValidator.new('String', ["a_start", "a_end", "d_end"])
      # validator.allowable_values.each do |value|
      #   expect { @instance.dep_end_reference = value }.not_to raise_error
      # end
    end
  end

  describe 'test attribute "dep_end_period"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "dep_amount"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "dep_frequency"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
      # validator = Petstore::EnumTest::EnumAttributeValidator.new('String', ["year", "six_months", "quarter", "month", "two_weeks", "week", "day"])
      # validator.allowable_values.each do |value|
      #   expect { @instance.dep_frequency = value }.not_to raise_error
      # end
    end
  end

  describe 'test attribute "dep_inflation"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
