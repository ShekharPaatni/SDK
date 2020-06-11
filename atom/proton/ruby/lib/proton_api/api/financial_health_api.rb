=begin
#Hydrogen Proton API

#Financial engineering module of Hydrogen Atom

OpenAPI spec version: 1.7.18
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.14

=end

require 'uri'

module ProtonApi
  class FinancialHealthApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Diversification Score
    # Assess how well a group of investments is diversified
    # @param diversification_score_request Request payload for Diversification Score
    # @param [Hash] opts the optional parameters
    # @return [Hash<String, Object>]
    def diversification_score(diversification_score_request, opts = {})
      data, _status_code, _headers = diversification_score_with_http_info(diversification_score_request, opts)
      data
    end

    # Diversification Score
    # Assess how well a group of investments is diversified
    # @param diversification_score_request Request payload for Diversification Score
    # @param [Hash] opts the optional parameters
    # @return [Array<(Hash<String, Object>, Fixnum, Hash)>] Hash<String, Object> data, response status code and response headers
    def diversification_score_with_http_info(diversification_score_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: FinancialHealthApi.diversification_score ...'
      end
      # verify the required parameter 'diversification_score_request' is set
      if @api_client.config.client_side_validation && diversification_score_request.nil?
        fail ArgumentError, "Missing the required parameter 'diversification_score_request' when calling FinancialHealthApi.diversification_score"
      end
      # resource path
      local_var_path = '/diversification_score'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(diversification_score_request)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Hash<String, Object>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: FinancialHealthApi#diversification_score\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Emergency Fund Calculator
    # Calculate a target emergency fund amount and savings plan
    # @param emergency_fund_calculator_request Request payload for Emergency Fund Calculator
    # @param [Hash] opts the optional parameters
    # @return [Hash<String, Object>]
    def emergency_fund_calculator(emergency_fund_calculator_request, opts = {})
      data, _status_code, _headers = emergency_fund_calculator_with_http_info(emergency_fund_calculator_request, opts)
      data
    end

    # Emergency Fund Calculator
    # Calculate a target emergency fund amount and savings plan
    # @param emergency_fund_calculator_request Request payload for Emergency Fund Calculator
    # @param [Hash] opts the optional parameters
    # @return [Array<(Hash<String, Object>, Fixnum, Hash)>] Hash<String, Object> data, response status code and response headers
    def emergency_fund_calculator_with_http_info(emergency_fund_calculator_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: FinancialHealthApi.emergency_fund_calculator ...'
      end
      # verify the required parameter 'emergency_fund_calculator_request' is set
      if @api_client.config.client_side_validation && emergency_fund_calculator_request.nil?
        fail ArgumentError, "Missing the required parameter 'emergency_fund_calculator_request' when calling FinancialHealthApi.emergency_fund_calculator"
      end
      # resource path
      local_var_path = '/emergency_fund_calculator'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(emergency_fund_calculator_request)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Hash<String, Object>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: FinancialHealthApi#emergency_fund_calculator\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Financial Health Check
    # Calculate a series of financial ratios to assess financial health
    # @param financial_health_check_request Request payload for Financial Health Check
    # @param [Hash] opts the optional parameters
    # @return [Hash<String, Object>]
    def financial_health_check(financial_health_check_request, opts = {})
      data, _status_code, _headers = financial_health_check_with_http_info(financial_health_check_request, opts)
      data
    end

    # Financial Health Check
    # Calculate a series of financial ratios to assess financial health
    # @param financial_health_check_request Request payload for Financial Health Check
    # @param [Hash] opts the optional parameters
    # @return [Array<(Hash<String, Object>, Fixnum, Hash)>] Hash<String, Object> data, response status code and response headers
    def financial_health_check_with_http_info(financial_health_check_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: FinancialHealthApi.financial_health_check ...'
      end
      # verify the required parameter 'financial_health_check_request' is set
      if @api_client.config.client_side_validation && financial_health_check_request.nil?
        fail ArgumentError, "Missing the required parameter 'financial_health_check_request' when calling FinancialHealthApi.financial_health_check"
      end
      # resource path
      local_var_path = '/financial_health_check'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(financial_health_check_request)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Hash<String, Object>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: FinancialHealthApi#financial_health_check\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Portfolio Optimization Score
    # Analyze a group of investments against the optimized result
    # @param portfolio_optimization_score_request Request payload for Portfolio Optimization Score
    # @param [Hash] opts the optional parameters
    # @return [Hash<String, Object>]
    def portfolio_optimization_score(portfolio_optimization_score_request, opts = {})
      data, _status_code, _headers = portfolio_optimization_score_with_http_info(portfolio_optimization_score_request, opts)
      data
    end

    # Portfolio Optimization Score
    # Analyze a group of investments against the optimized result
    # @param portfolio_optimization_score_request Request payload for Portfolio Optimization Score
    # @param [Hash] opts the optional parameters
    # @return [Array<(Hash<String, Object>, Fixnum, Hash)>] Hash<String, Object> data, response status code and response headers
    def portfolio_optimization_score_with_http_info(portfolio_optimization_score_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: FinancialHealthApi.portfolio_optimization_score ...'
      end
      # verify the required parameter 'portfolio_optimization_score_request' is set
      if @api_client.config.client_side_validation && portfolio_optimization_score_request.nil?
        fail ArgumentError, "Missing the required parameter 'portfolio_optimization_score_request' when calling FinancialHealthApi.portfolio_optimization_score"
      end
      # resource path
      local_var_path = '/portfolio_optimization_score'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(portfolio_optimization_score_request)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Hash<String, Object>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: FinancialHealthApi#portfolio_optimization_score\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
