=begin
#Hydrogen Integration API

#The Hydrogen Integration API

OpenAPI spec version: 1.3.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.19

=end

require 'uri'

module IntegrationApi
  class SMTPApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Fetch details for corresponding email_id
    # Fetch details for corresponding email_id
    # @param email_id email_id
    # @param [Hash] opts the optional parameters
    # @return [Email]
    def get_smtp_status(email_id, opts = {})
      data, _status_code, _headers = get_smtp_status_with_http_info(email_id, opts)
      data
    end

    # Fetch details for corresponding email_id
    # Fetch details for corresponding email_id
    # @param email_id email_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(Email, Fixnum, Hash)>] Email data, response status code and response headers
    def get_smtp_status_with_http_info(email_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: SMTPApi.get_smtp_status ...'
      end
      # verify the required parameter 'email_id' is set
      if @api_client.config.client_side_validation && email_id.nil?
        fail ArgumentError, "Missing the required parameter 'email_id' when calling SMTPApi.get_smtp_status"
      end
      # resource path
      local_var_path = '/smtp/status/{email_id}'.sub('{' + 'email_id' + '}', email_id.to_s)

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = nil
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:GET, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Email')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: SMTPApi#get_smtp_status\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Send Mail to recipient
    # Send Mail to recipient
    # @param smtp_vo smtpVO
    # @param [Hash] opts the optional parameters
    # @return [SmtpResponseVO]
    def send_mail(smtp_vo, opts = {})
      data, _status_code, _headers = send_mail_with_http_info(smtp_vo, opts)
      data
    end

    # Send Mail to recipient
    # Send Mail to recipient
    # @param smtp_vo smtpVO
    # @param [Hash] opts the optional parameters
    # @return [Array<(SmtpResponseVO, Fixnum, Hash)>] SmtpResponseVO data, response status code and response headers
    def send_mail_with_http_info(smtp_vo, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: SMTPApi.send_mail ...'
      end
      # verify the required parameter 'smtp_vo' is set
      if @api_client.config.client_side_validation && smtp_vo.nil?
        fail ArgumentError, "Missing the required parameter 'smtp_vo' when calling SMTPApi.send_mail"
      end
      # resource path
      local_var_path = '/smtp'

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
      post_body = @api_client.object_to_http_body(smtp_vo)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'SmtpResponseVO')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: SMTPApi#send_mail\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
