=begin
#Hydrogen Atom API

#The Hydrogen Atom API

OpenAPI spec version: 1.7.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.14

=end

require 'spec_helper'
require 'json'

# Unit tests for AtomApi::ScoreApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'ScoreApi' do
  before do
    # run before each test
    @instance = AtomApi::ScoreApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of ScoreApi' do
    it 'should create an instance of ScoreApi' do
      expect(@instance).to be_instance_of(AtomApi::ScoreApi)
    end
  end

  # unit tests for create_score_using_post
  # Create a score
  # Create a score for a client, account, goal, portfolio, allocation, model, benchmark or security.
  # @param score score
  # @param [Hash] opts the optional parameters
  # @return [Score]
  describe 'create_score_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_score_using_post1
  # Retrieve a score
  # Retrieve the information for a specific score associated with a client, account, goal, portfolio, allocation, model, benchmark or security.
  # @param score_id UUID score_id
  # @param [Hash] opts the optional parameters
  # @return [Score]
  describe 'create_score_using_post1 test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_score_using_delete
  # Delete a score
  # Permanently delete a score
  # @param score_id UUID score_id
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_score_using_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_score_all_using_get
  # List all scores
  # Get information for all scores stored for your firm.
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :ascending ascending
  # @option opts [String] :filter filter
  # @option opts [String] :order_by order_by
  # @option opts [Integer] :page page
  # @option opts [Integer] :size size
  # @return [PageScore]
  describe 'get_score_all_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_score_using_put
  # Update a score
  # Update the information for a score.
  # @param score score
  # @param score_id UUID score_id
  # @param [Hash] opts the optional parameters
  # @return [Score]
  describe 'update_score_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
