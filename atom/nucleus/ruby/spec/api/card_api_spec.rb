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

# Unit tests for NucleusApi::CardApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'CardApi' do
  before do
    # run before each test
    @instance = NucleusApi::CardApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of CardApi' do
    it 'should create an instance of CardApi' do
      expect(@instance).to be_instance_of(NucleusApi::CardApi)
    end
  end

  # unit tests for create_card_program_using_post
  # Create a cardProgram request
  # Create a new cardProgram request.
  # @param card_program_request cardProgramRequest
  # @param [Hash] opts the optional parameters
  # @return [CardProgram]
  describe 'create_card_program_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for create_card_using_post
  # Create a card request
  # Create a new card request.
  # @param card_request cardRequest
  # @param [Hash] opts the optional parameters
  # @option opts [String] :authorization Authorization
  # @return [Card]
  describe 'create_card_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_card_program_using_delete
  # Delete an cardProgram
  # Permanently delete an cardProgram.
  # @param card_program_id UUID card_program_id
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_card_program_using_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_card_using_delete
  # Delete a card request
  # Permanently delete a card request.
  # @param card_id UUID card_id
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_card_using_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_card_all_using_get
  # List all card requests
  # Get the information for all card requests.
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :ascending ascending
  # @option opts [String] :filter filter
  # @option opts [String] :order_by order_by
  # @option opts [Integer] :page page
  # @option opts [Integer] :size size
  # @return [PageCard]
  describe 'get_card_all_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_card_program_all_using_get
  # List all cardProgram
  # Get information for all cardProgram.
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :ascending ascending
  # @option opts [String] :filter filter
  # @option opts [String] :order_by order_by
  # @option opts [Integer] :page page
  # @option opts [Integer] :size size
  # @return [PageCardProgram]
  describe 'get_card_program_all_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_card_program_using_get
  # Retrieve an cardProgram
  # Retrieve the information for a specific cardProgram.
  # @param card_program_id UUID card_program_id
  # @param [Hash] opts the optional parameters
  # @return [CardProgram]
  describe 'get_card_program_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_card_using_get
  # Retrieve a card request
  # Retrieve the information for a card request.
  # @param card_id UUID card_id
  # @param [Hash] opts the optional parameters
  # @return [Card]
  describe 'get_card_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_card_program_using_put
  # Update an cardProgram
  # Update the information for an cardProgram.
  # @param card_program card_program
  # @param card_program_id UUID card_program_id
  # @param [Hash] opts the optional parameters
  # @return [CardProgram]
  describe 'update_card_program_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_card_using_put
  # Update a card request
  # Update the information for a card request.
  # @param card card
  # @param card_id UUID card_id
  # @param [Hash] opts the optional parameters
  # @return [Card]
  describe 'update_card_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end