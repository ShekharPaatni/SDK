=begin
#Hydrogen Atom API

#The Hydrogen Atom API

OpenAPI spec version: 1.7.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.14

=end

require 'uri'

module AtomApi
  class RoundupApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Create a Roundup Settings
    # Create a Roundup Settings for Roundup amount with your firm.
    # @param roundup_settings roundupSettings
    # @param [Hash] opts the optional parameters
    # @return [RoundupSettings]
    def create_roundup_settings_using_post(roundup_settings, opts = {})
      data, _status_code, _headers = create_roundup_settings_using_post_with_http_info(roundup_settings, opts)
      data
    end

    # Create a Roundup Settings
    # Create a Roundup Settings for Roundup amount with your firm.
    # @param roundup_settings roundupSettings
    # @param [Hash] opts the optional parameters
    # @return [Array<(RoundupSettings, Fixnum, Hash)>] RoundupSettings data, response status code and response headers
    def create_roundup_settings_using_post_with_http_info(roundup_settings, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: RoundupApi.create_roundup_settings_using_post ...'
      end
      # verify the required parameter 'roundup_settings' is set
      if @api_client.config.client_side_validation && roundup_settings.nil?
        fail ArgumentError, "Missing the required parameter 'roundup_settings' when calling RoundupApi.create_roundup_settings_using_post"
      end
      # resource path
      local_var_path = '/roundup_setting'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(roundup_settings)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'RoundupSettings')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: RoundupApi#create_roundup_settings_using_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Create a roundup
    # Create a new roundup with your firm.
    # @param roundup_co roundupCO
    # @param [Hash] opts the optional parameters
    # @return [Roundup]
    def create_roundup_using_post(roundup_co, opts = {})
      data, _status_code, _headers = create_roundup_using_post_with_http_info(roundup_co, opts)
      data
    end

    # Create a roundup
    # Create a new roundup with your firm.
    # @param roundup_co roundupCO
    # @param [Hash] opts the optional parameters
    # @return [Array<(Roundup, Fixnum, Hash)>] Roundup data, response status code and response headers
    def create_roundup_using_post_with_http_info(roundup_co, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: RoundupApi.create_roundup_using_post ...'
      end
      # verify the required parameter 'roundup_co' is set
      if @api_client.config.client_side_validation && roundup_co.nil?
        fail ArgumentError, "Missing the required parameter 'roundup_co' when calling RoundupApi.create_roundup_using_post"
      end
      # resource path
      local_var_path = '/roundup'

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(roundup_co)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Roundup')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: RoundupApi#create_roundup_using_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Delete a roundup settings
    # Permanently delete a  roundup settings registered with your firm.
    # @param roundup_setting_id UUID roundup_setting_id
    # @param [Hash] opts the optional parameters
    # @return [nil]
    def delete_roundup_settings_using_delete(roundup_setting_id, opts = {})
      delete_roundup_settings_using_delete_with_http_info(roundup_setting_id, opts)
      nil
    end

    # Delete a roundup settings
    # Permanently delete a  roundup settings registered with your firm.
    # @param roundup_setting_id UUID roundup_setting_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(nil, Fixnum, Hash)>] nil, response status code and response headers
    def delete_roundup_settings_using_delete_with_http_info(roundup_setting_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: RoundupApi.delete_roundup_settings_using_delete ...'
      end
      # verify the required parameter 'roundup_setting_id' is set
      if @api_client.config.client_side_validation && roundup_setting_id.nil?
        fail ArgumentError, "Missing the required parameter 'roundup_setting_id' when calling RoundupApi.delete_roundup_settings_using_delete"
      end
      # resource path
      local_var_path = '/roundup_setting/{roundup_setting_id}'.sub('{' + 'roundup_setting_id' + '}', roundup_setting_id.to_s)

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
      data, status_code, headers = @api_client.call_api(:DELETE, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: RoundupApi#delete_roundup_settings_using_delete\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # List all roundups
    # Get details for all roundups.
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending (default to false)
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by (default to update_date)
    # @option opts [Integer] :page page (default to 0)
    # @option opts [Integer] :size size (default to 25)
    # @return [PageRoundup]
    def get_roundup_all_using_get(opts = {})
      data, _status_code, _headers = get_roundup_all_using_get_with_http_info(opts)
      data
    end

    # List all roundups
    # Get details for all roundups.
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by
    # @option opts [Integer] :page page
    # @option opts [Integer] :size size
    # @return [Array<(PageRoundup, Fixnum, Hash)>] PageRoundup data, response status code and response headers
    def get_roundup_all_using_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: RoundupApi.get_roundup_all_using_get ...'
      end
      # resource path
      local_var_path = '/roundup'

      # query parameters
      query_params = {}
      query_params[:'ascending'] = opts[:'ascending'] if !opts[:'ascending'].nil?
      query_params[:'filter'] = opts[:'filter'] if !opts[:'filter'].nil?
      query_params[:'order_by'] = opts[:'order_by'] if !opts[:'order_by'].nil?
      query_params[:'page'] = opts[:'page'] if !opts[:'page'].nil?
      query_params[:'size'] = opts[:'size'] if !opts[:'size'].nil?

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
        :return_type => 'PageRoundup')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: RoundupApi#get_roundup_all_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # List all roundup settings
    # Get details for all roundup setting with your firm.
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending (default to false)
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by (default to update_date)
    # @option opts [Integer] :page page (default to 0)
    # @option opts [Integer] :size size (default to 25)
    # @return [PageRoundupSettings]
    def get_roundup_settings_all_using_get(opts = {})
      data, _status_code, _headers = get_roundup_settings_all_using_get_with_http_info(opts)
      data
    end

    # List all roundup settings
    # Get details for all roundup setting with your firm.
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by
    # @option opts [Integer] :page page
    # @option opts [Integer] :size size
    # @return [Array<(PageRoundupSettings, Fixnum, Hash)>] PageRoundupSettings data, response status code and response headers
    def get_roundup_settings_all_using_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: RoundupApi.get_roundup_settings_all_using_get ...'
      end
      # resource path
      local_var_path = '/roundup_setting'

      # query parameters
      query_params = {}
      query_params[:'ascending'] = opts[:'ascending'] if !opts[:'ascending'].nil?
      query_params[:'filter'] = opts[:'filter'] if !opts[:'filter'].nil?
      query_params[:'order_by'] = opts[:'order_by'] if !opts[:'order_by'].nil?
      query_params[:'page'] = opts[:'page'] if !opts[:'page'].nil?
      query_params[:'size'] = opts[:'size'] if !opts[:'size'].nil?

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
        :return_type => 'PageRoundupSettings')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: RoundupApi#get_roundup_settings_all_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Retrieve a Roundup Setting
    # Retrieve the information for a Roundup Settings with your firm.
    # @param roundup_setting_id UUID roundup_setting_id
    # @param [Hash] opts the optional parameters
    # @return [RoundupSettings]
    def get_roundup_settings_using_get(roundup_setting_id, opts = {})
      data, _status_code, _headers = get_roundup_settings_using_get_with_http_info(roundup_setting_id, opts)
      data
    end

    # Retrieve a Roundup Setting
    # Retrieve the information for a Roundup Settings with your firm.
    # @param roundup_setting_id UUID roundup_setting_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(RoundupSettings, Fixnum, Hash)>] RoundupSettings data, response status code and response headers
    def get_roundup_settings_using_get_with_http_info(roundup_setting_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: RoundupApi.get_roundup_settings_using_get ...'
      end
      # verify the required parameter 'roundup_setting_id' is set
      if @api_client.config.client_side_validation && roundup_setting_id.nil?
        fail ArgumentError, "Missing the required parameter 'roundup_setting_id' when calling RoundupApi.get_roundup_settings_using_get"
      end
      # resource path
      local_var_path = '/roundup_setting/{roundup_setting_id}'.sub('{' + 'roundup_setting_id' + '}', roundup_setting_id.to_s)

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
        :return_type => 'RoundupSettings')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: RoundupApi#get_roundup_settings_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Retrieve a Roundup
    # Retrieve the information for a Roundup.
    # @param roundup_id UUID roundup_id
    # @param [Hash] opts the optional parameters
    # @return [Roundup]
    def get_roundup_using_get(roundup_id, opts = {})
      data, _status_code, _headers = get_roundup_using_get_with_http_info(roundup_id, opts)
      data
    end

    # Retrieve a Roundup
    # Retrieve the information for a Roundup.
    # @param roundup_id UUID roundup_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(Roundup, Fixnum, Hash)>] Roundup data, response status code and response headers
    def get_roundup_using_get_with_http_info(roundup_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: RoundupApi.get_roundup_using_get ...'
      end
      # verify the required parameter 'roundup_id' is set
      if @api_client.config.client_side_validation && roundup_id.nil?
        fail ArgumentError, "Missing the required parameter 'roundup_id' when calling RoundupApi.get_roundup_using_get"
      end
      # resource path
      local_var_path = '/roundup/{roundup_id}'.sub('{' + 'roundup_id' + '}', roundup_id.to_s)

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
        :return_type => 'Roundup')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: RoundupApi#get_roundup_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Update a roundup settings
    # Update the information for a roundup setting registered with your firm.
    # @param roundup_setting roundup_setting
    # @param roundup_setting_id UUID roundup_setting_id
    # @param [Hash] opts the optional parameters
    # @return [RoundupSettings]
    def update_roundup_settings_using_put(roundup_setting, roundup_setting_id, opts = {})
      data, _status_code, _headers = update_roundup_settings_using_put_with_http_info(roundup_setting, roundup_setting_id, opts)
      data
    end

    # Update a roundup settings
    # Update the information for a roundup setting registered with your firm.
    # @param roundup_setting roundup_setting
    # @param roundup_setting_id UUID roundup_setting_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(RoundupSettings, Fixnum, Hash)>] RoundupSettings data, response status code and response headers
    def update_roundup_settings_using_put_with_http_info(roundup_setting, roundup_setting_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: RoundupApi.update_roundup_settings_using_put ...'
      end
      # verify the required parameter 'roundup_setting' is set
      if @api_client.config.client_side_validation && roundup_setting.nil?
        fail ArgumentError, "Missing the required parameter 'roundup_setting' when calling RoundupApi.update_roundup_settings_using_put"
      end
      # verify the required parameter 'roundup_setting_id' is set
      if @api_client.config.client_side_validation && roundup_setting_id.nil?
        fail ArgumentError, "Missing the required parameter 'roundup_setting_id' when calling RoundupApi.update_roundup_settings_using_put"
      end
      # resource path
      local_var_path = '/roundup_setting/{roundup_setting_id}'.sub('{' + 'roundup_setting_id' + '}', roundup_setting_id.to_s)

      # query parameters
      query_params = {}

      # header parameters
      header_params = {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['*/*'])
      # HTTP header 'Content-Type'
      header_params['Content-Type'] = @api_client.select_header_content_type(['application/json'])

      # form parameters
      form_params = {}

      # http body (model)
      post_body = @api_client.object_to_http_body(roundup_setting)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:PUT, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'RoundupSettings')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: RoundupApi#update_roundup_settings_using_put\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
