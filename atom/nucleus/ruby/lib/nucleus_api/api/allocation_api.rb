=begin
#Hydrogen Nucleus API

#The Hydrogen Nucleus API

OpenAPI spec version: 1.9.2
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.19

=end

require 'uri'

module NucleusApi
  class AllocationApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Create an allocation composition
    # Create a new allocation composition record for an allocation.
    # @param alloc_request allocRequest
    # @param [Hash] opts the optional parameters
    # @return [AllocationComposition]
    def create_allocation_composition_using_post(alloc_request, opts = {})
      data, _status_code, _headers = create_allocation_composition_using_post_with_http_info(alloc_request, opts)
      data
    end

    # Create an allocation composition
    # Create a new allocation composition record for an allocation.
    # @param alloc_request allocRequest
    # @param [Hash] opts the optional parameters
    # @return [Array<(AllocationComposition, Fixnum, Hash)>] AllocationComposition data, response status code and response headers
    def create_allocation_composition_using_post_with_http_info(alloc_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AllocationApi.create_allocation_composition_using_post ...'
      end
      # verify the required parameter 'alloc_request' is set
      if @api_client.config.client_side_validation && alloc_request.nil?
        fail ArgumentError, "Missing the required parameter 'alloc_request' when calling AllocationApi.create_allocation_composition_using_post"
      end
      # resource path
      local_var_path = '/nucleus/v1/allocation_composition'

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
      post_body = @api_client.object_to_http_body(alloc_request)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'AllocationComposition')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AllocationApi#create_allocation_composition_using_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Create an allocation
    # Create a new allocation for your firm.
    # @param allocation_request allocationRequest
    # @param [Hash] opts the optional parameters
    # @return [Allocation]
    def create_allocation_using_post(allocation_request, opts = {})
      data, _status_code, _headers = create_allocation_using_post_with_http_info(allocation_request, opts)
      data
    end

    # Create an allocation
    # Create a new allocation for your firm.
    # @param allocation_request allocationRequest
    # @param [Hash] opts the optional parameters
    # @return [Array<(Allocation, Fixnum, Hash)>] Allocation data, response status code and response headers
    def create_allocation_using_post_with_http_info(allocation_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AllocationApi.create_allocation_using_post ...'
      end
      # verify the required parameter 'allocation_request' is set
      if @api_client.config.client_side_validation && allocation_request.nil?
        fail ArgumentError, "Missing the required parameter 'allocation_request' when calling AllocationApi.create_allocation_using_post"
      end
      # resource path
      local_var_path = '/nucleus/v1/allocation'

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
      post_body = @api_client.object_to_http_body(allocation_request)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Allocation')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AllocationApi#create_allocation_using_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Delete an allocation composition
    # Permanently delete an allocation composition record for an allocation.
    # @param allocation_composition_id UUID allocation_composition_id
    # @param [Hash] opts the optional parameters
    # @return [nil]
    def delete_allocation_composition_using_delete(allocation_composition_id, opts = {})
      delete_allocation_composition_using_delete_with_http_info(allocation_composition_id, opts)
      nil
    end

    # Delete an allocation composition
    # Permanently delete an allocation composition record for an allocation.
    # @param allocation_composition_id UUID allocation_composition_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(nil, Fixnum, Hash)>] nil, response status code and response headers
    def delete_allocation_composition_using_delete_with_http_info(allocation_composition_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AllocationApi.delete_allocation_composition_using_delete ...'
      end
      # verify the required parameter 'allocation_composition_id' is set
      if @api_client.config.client_side_validation && allocation_composition_id.nil?
        fail ArgumentError, "Missing the required parameter 'allocation_composition_id' when calling AllocationApi.delete_allocation_composition_using_delete"
      end
      # resource path
      local_var_path = '/nucleus/v1/allocation_composition/{allocation_composition_id}'.sub('{' + 'allocation_composition_id' + '}', allocation_composition_id.to_s)

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
        @api_client.config.logger.debug "API called: AllocationApi#delete_allocation_composition_using_delete\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Delete an allocation
    # Permanently delete an allocation defined by your firm.
    # @param allocation_id UUID allocation_id
    # @param [Hash] opts the optional parameters
    # @return [nil]
    def delete_allocation_using_delete(allocation_id, opts = {})
      delete_allocation_using_delete_with_http_info(allocation_id, opts)
      nil
    end

    # Delete an allocation
    # Permanently delete an allocation defined by your firm.
    # @param allocation_id UUID allocation_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(nil, Fixnum, Hash)>] nil, response status code and response headers
    def delete_allocation_using_delete_with_http_info(allocation_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AllocationApi.delete_allocation_using_delete ...'
      end
      # verify the required parameter 'allocation_id' is set
      if @api_client.config.client_side_validation && allocation_id.nil?
        fail ArgumentError, "Missing the required parameter 'allocation_id' when calling AllocationApi.delete_allocation_using_delete"
      end
      # resource path
      local_var_path = '/nucleus/v1/allocation/{allocation_id}'.sub('{' + 'allocation_id' + '}', allocation_id.to_s)

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
        @api_client.config.logger.debug "API called: AllocationApi#delete_allocation_using_delete\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # List all Allocation aggregated data overview
    # @param allocation_id Allocation Id
    # @param [Hash] opts the optional parameters
    # @return [AllocationAggregatedVO]
    def get_allocation_all_aggregate_data_using_get(allocation_id, opts = {})
      data, _status_code, _headers = get_allocation_all_aggregate_data_using_get_with_http_info(allocation_id, opts)
      data
    end

    # List all Allocation aggregated data overview
    # @param allocation_id Allocation Id
    # @param [Hash] opts the optional parameters
    # @return [Array<(AllocationAggregatedVO, Fixnum, Hash)>] AllocationAggregatedVO data, response status code and response headers
    def get_allocation_all_aggregate_data_using_get_with_http_info(allocation_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AllocationApi.get_allocation_all_aggregate_data_using_get ...'
      end
      # verify the required parameter 'allocation_id' is set
      if @api_client.config.client_side_validation && allocation_id.nil?
        fail ArgumentError, "Missing the required parameter 'allocation_id' when calling AllocationApi.get_allocation_all_aggregate_data_using_get"
      end
      # resource path
      local_var_path = '/nucleus/v1/allocation/{allocation_id}/aggregate_data'.sub('{' + 'allocation_id' + '}', allocation_id.to_s)

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
        :return_type => 'AllocationAggregatedVO')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AllocationApi#get_allocation_all_aggregate_data_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # List all allocation asset sizes
    # Get a list of asset sizes by date for a specific allocation.
    # @param allocation_id UUID allocation_id
    # @param [Hash] opts the optional parameters
    # @option opts [Date] :end_date end date
    # @option opts [BOOLEAN] :get_latest get_latest
    # @option opts [BOOLEAN] :is_current_weight is_current_weight (default to true)
    # @option opts [String] :sort_type D (Daily), Q (quarterly), M (Monthly), Y (Annually) 
    # @option opts [Date] :start_date start date
    # @return [Array<DateDoubleVO>]
    def get_allocation_all_asset_size_all_using_get(allocation_id, opts = {})
      data, _status_code, _headers = get_allocation_all_asset_size_all_using_get_with_http_info(allocation_id, opts)
      data
    end

    # List all allocation asset sizes
    # Get a list of asset sizes by date for a specific allocation.
    # @param allocation_id UUID allocation_id
    # @param [Hash] opts the optional parameters
    # @option opts [Date] :end_date end date
    # @option opts [BOOLEAN] :get_latest get_latest
    # @option opts [BOOLEAN] :is_current_weight is_current_weight
    # @option opts [String] :sort_type D (Daily), Q (quarterly), M (Monthly), Y (Annually) 
    # @option opts [Date] :start_date start date
    # @return [Array<(Array<DateDoubleVO>, Fixnum, Hash)>] Array<DateDoubleVO> data, response status code and response headers
    def get_allocation_all_asset_size_all_using_get_with_http_info(allocation_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AllocationApi.get_allocation_all_asset_size_all_using_get ...'
      end
      # verify the required parameter 'allocation_id' is set
      if @api_client.config.client_side_validation && allocation_id.nil?
        fail ArgumentError, "Missing the required parameter 'allocation_id' when calling AllocationApi.get_allocation_all_asset_size_all_using_get"
      end
      # resource path
      local_var_path = '/nucleus/v1/allocation/{allocation_id}/asset_size'.sub('{' + 'allocation_id' + '}', allocation_id.to_s)

      # query parameters
      query_params = {}
      query_params[:'end_date'] = opts[:'end_date'] if !opts[:'end_date'].nil?
      query_params[:'get_latest'] = opts[:'get_latest'] if !opts[:'get_latest'].nil?
      query_params[:'is_current_weight'] = opts[:'is_current_weight'] if !opts[:'is_current_weight'].nil?
      query_params[:'sort_type'] = opts[:'sort_type'] if !opts[:'sort_type'].nil?
      query_params[:'start_date'] = opts[:'start_date'] if !opts[:'start_date'].nil?

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
        :return_type => 'Array<DateDoubleVO>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AllocationApi#get_allocation_all_asset_size_all_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # List all allocation holdings
    # Get the information for all securities assigned to a specific allocation. 
    # @param allocation_id UUID allocation_id
    # @param [Hash] opts the optional parameters
    # @option opts [Date] :end_date end date
    # @option opts [Date] :start_date start date
    # @return [Array<ModelHoldingVO>]
    def get_allocation_all_holding_all_using_get(allocation_id, opts = {})
      data, _status_code, _headers = get_allocation_all_holding_all_using_get_with_http_info(allocation_id, opts)
      data
    end

    # List all allocation holdings
    # Get the information for all securities assigned to a specific allocation. 
    # @param allocation_id UUID allocation_id
    # @param [Hash] opts the optional parameters
    # @option opts [Date] :end_date end date
    # @option opts [Date] :start_date start date
    # @return [Array<(Array<ModelHoldingVO>, Fixnum, Hash)>] Array<ModelHoldingVO> data, response status code and response headers
    def get_allocation_all_holding_all_using_get_with_http_info(allocation_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AllocationApi.get_allocation_all_holding_all_using_get ...'
      end
      # verify the required parameter 'allocation_id' is set
      if @api_client.config.client_side_validation && allocation_id.nil?
        fail ArgumentError, "Missing the required parameter 'allocation_id' when calling AllocationApi.get_allocation_all_holding_all_using_get"
      end
      # resource path
      local_var_path = '/nucleus/v1/allocation/{allocation_id}/holding'.sub('{' + 'allocation_id' + '}', allocation_id.to_s)

      # query parameters
      query_params = {}
      query_params[:'end_date'] = opts[:'end_date'] if !opts[:'end_date'].nil?
      query_params[:'start_date'] = opts[:'start_date'] if !opts[:'start_date'].nil?

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
        :return_type => 'Array<ModelHoldingVO>')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AllocationApi#get_allocation_all_holding_all_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # List all allocation transactions
    # Get the information for all transactions made under an allocation to achieve the composition of the allocation.
    # @param allocation_id UUID allocation_id
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending (default to false)
    # @option opts [Date] :end_date end date
    # @option opts [String] :order_by order_by (default to update_date)
    # @option opts [Integer] :page page (default to 0)
    # @option opts [Integer] :size size (default to 25)
    # @option opts [Date] :start_date start date
    # @return [PageModelTransaction]
    def get_allocation_all_transaction_all_using_get(allocation_id, opts = {})
      data, _status_code, _headers = get_allocation_all_transaction_all_using_get_with_http_info(allocation_id, opts)
      data
    end

    # List all allocation transactions
    # Get the information for all transactions made under an allocation to achieve the composition of the allocation.
    # @param allocation_id UUID allocation_id
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending
    # @option opts [Date] :end_date end date
    # @option opts [String] :order_by order_by
    # @option opts [Integer] :page page
    # @option opts [Integer] :size size
    # @option opts [Date] :start_date start date
    # @return [Array<(PageModelTransaction, Fixnum, Hash)>] PageModelTransaction data, response status code and response headers
    def get_allocation_all_transaction_all_using_get_with_http_info(allocation_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AllocationApi.get_allocation_all_transaction_all_using_get ...'
      end
      # verify the required parameter 'allocation_id' is set
      if @api_client.config.client_side_validation && allocation_id.nil?
        fail ArgumentError, "Missing the required parameter 'allocation_id' when calling AllocationApi.get_allocation_all_transaction_all_using_get"
      end
      # resource path
      local_var_path = '/nucleus/v1/allocation/{allocation_id}/transaction'.sub('{' + 'allocation_id' + '}', allocation_id.to_s)

      # query parameters
      query_params = {}
      query_params[:'ascending'] = opts[:'ascending'] if !opts[:'ascending'].nil?
      query_params[:'end_date'] = opts[:'end_date'] if !opts[:'end_date'].nil?
      query_params[:'order_by'] = opts[:'order_by'] if !opts[:'order_by'].nil?
      query_params[:'page'] = opts[:'page'] if !opts[:'page'].nil?
      query_params[:'size'] = opts[:'size'] if !opts[:'size'].nil?
      query_params[:'start_date'] = opts[:'start_date'] if !opts[:'start_date'].nil?

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
        :return_type => 'PageModelTransaction')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AllocationApi#get_allocation_all_transaction_all_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # List all allocations
    # Get details for all allocations defined for your firm.
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending (default to false)
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by (default to update_date)
    # @option opts [Integer] :page page (default to 0)
    # @option opts [Integer] :size size (default to 25)
    # @return [PageAllocation]
    def get_allocation_all_using_get(opts = {})
      data, _status_code, _headers = get_allocation_all_using_get_with_http_info(opts)
      data
    end

    # List all allocations
    # Get details for all allocations defined for your firm.
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by
    # @option opts [Integer] :page page
    # @option opts [Integer] :size size
    # @return [Array<(PageAllocation, Fixnum, Hash)>] PageAllocation data, response status code and response headers
    def get_allocation_all_using_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AllocationApi.get_allocation_all_using_get ...'
      end
      # resource path
      local_var_path = '/nucleus/v1/allocation'

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
        :return_type => 'PageAllocation')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AllocationApi#get_allocation_all_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # List all allocations compositions
    # Get the allocation composition for all allocations.
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending (default to false)
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by (default to update_date)
    # @option opts [Integer] :page page (default to 0)
    # @option opts [Integer] :size size (default to 25)
    # @return [PageAllocationComposition]
    def get_allocation_composition_all_using_get(opts = {})
      data, _status_code, _headers = get_allocation_composition_all_using_get_with_http_info(opts)
      data
    end

    # List all allocations compositions
    # Get the allocation composition for all allocations.
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by
    # @option opts [Integer] :page page
    # @option opts [Integer] :size size
    # @return [Array<(PageAllocationComposition, Fixnum, Hash)>] PageAllocationComposition data, response status code and response headers
    def get_allocation_composition_all_using_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AllocationApi.get_allocation_composition_all_using_get ...'
      end
      # resource path
      local_var_path = '/nucleus/v1/allocation_composition'

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
        :return_type => 'PageAllocationComposition')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AllocationApi#get_allocation_composition_all_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Retrieve an allocation composition
    # Retrieve the information of an allocation composition record for an allocation.
    # @param allocation_composition_id UUID allocation_composition_id
    # @param [Hash] opts the optional parameters
    # @return [AllocationComposition]
    def get_allocation_composition_using_get(allocation_composition_id, opts = {})
      data, _status_code, _headers = get_allocation_composition_using_get_with_http_info(allocation_composition_id, opts)
      data
    end

    # Retrieve an allocation composition
    # Retrieve the information of an allocation composition record for an allocation.
    # @param allocation_composition_id UUID allocation_composition_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(AllocationComposition, Fixnum, Hash)>] AllocationComposition data, response status code and response headers
    def get_allocation_composition_using_get_with_http_info(allocation_composition_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AllocationApi.get_allocation_composition_using_get ...'
      end
      # verify the required parameter 'allocation_composition_id' is set
      if @api_client.config.client_side_validation && allocation_composition_id.nil?
        fail ArgumentError, "Missing the required parameter 'allocation_composition_id' when calling AllocationApi.get_allocation_composition_using_get"
      end
      # resource path
      local_var_path = '/nucleus/v1/allocation_composition/{allocation_composition_id}'.sub('{' + 'allocation_composition_id' + '}', allocation_composition_id.to_s)

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
        :return_type => 'AllocationComposition')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AllocationApi#get_allocation_composition_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Retrieve an allocation
    # Retrieve the information for an allocation defined by your firm.
    # @param allocation_id UUID allocation_id
    # @param [Hash] opts the optional parameters
    # @return [Allocation]
    def get_allocation_using_get(allocation_id, opts = {})
      data, _status_code, _headers = get_allocation_using_get_with_http_info(allocation_id, opts)
      data
    end

    # Retrieve an allocation
    # Retrieve the information for an allocation defined by your firm.
    # @param allocation_id UUID allocation_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(Allocation, Fixnum, Hash)>] Allocation data, response status code and response headers
    def get_allocation_using_get_with_http_info(allocation_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AllocationApi.get_allocation_using_get ...'
      end
      # verify the required parameter 'allocation_id' is set
      if @api_client.config.client_side_validation && allocation_id.nil?
        fail ArgumentError, "Missing the required parameter 'allocation_id' when calling AllocationApi.get_allocation_using_get"
      end
      # resource path
      local_var_path = '/nucleus/v1/allocation/{allocation_id}'.sub('{' + 'allocation_id' + '}', allocation_id.to_s)

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
        :return_type => 'Allocation')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AllocationApi#get_allocation_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Update an allocation composition
    # Update the information of an allocation composition record for an allocation.
    # @param allocation_composition allocation_composition
    # @param allocation_composition_id UUID allocation_composition_id
    # @param [Hash] opts the optional parameters
    # @return [AllocationComposition]
    def update_allocation_composition_using_put(allocation_composition, allocation_composition_id, opts = {})
      data, _status_code, _headers = update_allocation_composition_using_put_with_http_info(allocation_composition, allocation_composition_id, opts)
      data
    end

    # Update an allocation composition
    # Update the information of an allocation composition record for an allocation.
    # @param allocation_composition allocation_composition
    # @param allocation_composition_id UUID allocation_composition_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(AllocationComposition, Fixnum, Hash)>] AllocationComposition data, response status code and response headers
    def update_allocation_composition_using_put_with_http_info(allocation_composition, allocation_composition_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AllocationApi.update_allocation_composition_using_put ...'
      end
      # verify the required parameter 'allocation_composition' is set
      if @api_client.config.client_side_validation && allocation_composition.nil?
        fail ArgumentError, "Missing the required parameter 'allocation_composition' when calling AllocationApi.update_allocation_composition_using_put"
      end
      # verify the required parameter 'allocation_composition_id' is set
      if @api_client.config.client_side_validation && allocation_composition_id.nil?
        fail ArgumentError, "Missing the required parameter 'allocation_composition_id' when calling AllocationApi.update_allocation_composition_using_put"
      end
      # resource path
      local_var_path = '/nucleus/v1/allocation_composition/{allocation_composition_id}'.sub('{' + 'allocation_composition_id' + '}', allocation_composition_id.to_s)

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
      post_body = @api_client.object_to_http_body(allocation_composition)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:PUT, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'AllocationComposition')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AllocationApi#update_allocation_composition_using_put\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Update an allocation
    # Update an allocation defined by your firm.
    # @param allocation allocation
    # @param allocation_id UUID allocation_id
    # @param [Hash] opts the optional parameters
    # @return [Allocation]
    def update_allocation_using_put(allocation, allocation_id, opts = {})
      data, _status_code, _headers = update_allocation_using_put_with_http_info(allocation, allocation_id, opts)
      data
    end

    # Update an allocation
    # Update an allocation defined by your firm.
    # @param allocation allocation
    # @param allocation_id UUID allocation_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(Allocation, Fixnum, Hash)>] Allocation data, response status code and response headers
    def update_allocation_using_put_with_http_info(allocation, allocation_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AllocationApi.update_allocation_using_put ...'
      end
      # verify the required parameter 'allocation' is set
      if @api_client.config.client_side_validation && allocation.nil?
        fail ArgumentError, "Missing the required parameter 'allocation' when calling AllocationApi.update_allocation_using_put"
      end
      # verify the required parameter 'allocation_id' is set
      if @api_client.config.client_side_validation && allocation_id.nil?
        fail ArgumentError, "Missing the required parameter 'allocation_id' when calling AllocationApi.update_allocation_using_put"
      end
      # resource path
      local_var_path = '/nucleus/v1/allocation/{allocation_id}'.sub('{' + 'allocation_id' + '}', allocation_id.to_s)

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
      post_body = @api_client.object_to_http_body(allocation)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:PUT, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Allocation')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AllocationApi#update_allocation_using_put\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
