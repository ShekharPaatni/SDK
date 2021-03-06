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
  class InvoiceApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Create a invoicePayment
    # Create a new invoicePayment, for tracking invoice status.
    # @param invoice_payment invoicePayment
    # @param [Hash] opts the optional parameters
    # @return [InvoicePayment]
    def create_invoice_payment_using_post(invoice_payment, opts = {})
      data, _status_code, _headers = create_invoice_payment_using_post_with_http_info(invoice_payment, opts)
      data
    end

    # Create a invoicePayment
    # Create a new invoicePayment, for tracking invoice status.
    # @param invoice_payment invoicePayment
    # @param [Hash] opts the optional parameters
    # @return [Array<(InvoicePayment, Fixnum, Hash)>] InvoicePayment data, response status code and response headers
    def create_invoice_payment_using_post_with_http_info(invoice_payment, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: InvoiceApi.create_invoice_payment_using_post ...'
      end
      # verify the required parameter 'invoice_payment' is set
      if @api_client.config.client_side_validation && invoice_payment.nil?
        fail ArgumentError, "Missing the required parameter 'invoice_payment' when calling InvoiceApi.create_invoice_payment_using_post"
      end
      # resource path
      local_var_path = '/nucleus/v1/invoice_payment'

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
      post_body = @api_client.object_to_http_body(invoice_payment)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'InvoicePayment')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: InvoiceApi#create_invoice_payment_using_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Create a invoice
    # Create a new invoice, with your firm.
    # @param invoice invoice
    # @param [Hash] opts the optional parameters
    # @return [Invoice]
    def create_invoice_using_post(invoice, opts = {})
      data, _status_code, _headers = create_invoice_using_post_with_http_info(invoice, opts)
      data
    end

    # Create a invoice
    # Create a new invoice, with your firm.
    # @param invoice invoice
    # @param [Hash] opts the optional parameters
    # @return [Array<(Invoice, Fixnum, Hash)>] Invoice data, response status code and response headers
    def create_invoice_using_post_with_http_info(invoice, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: InvoiceApi.create_invoice_using_post ...'
      end
      # verify the required parameter 'invoice' is set
      if @api_client.config.client_side_validation && invoice.nil?
        fail ArgumentError, "Missing the required parameter 'invoice' when calling InvoiceApi.create_invoice_using_post"
      end
      # resource path
      local_var_path = '/nucleus/v1/invoice'

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
      post_body = @api_client.object_to_http_body(invoice)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:POST, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Invoice')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: InvoiceApi#create_invoice_using_post\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Delete a invoicePayment
    # Delete a invoicePayment. 
    # @param invoice_payment_id UUID invoice_payment_id
    # @param [Hash] opts the optional parameters
    # @return [nil]
    def delete_invoice_payment_using_delete(invoice_payment_id, opts = {})
      delete_invoice_payment_using_delete_with_http_info(invoice_payment_id, opts)
      nil
    end

    # Delete a invoicePayment
    # Delete a invoicePayment. 
    # @param invoice_payment_id UUID invoice_payment_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(nil, Fixnum, Hash)>] nil, response status code and response headers
    def delete_invoice_payment_using_delete_with_http_info(invoice_payment_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: InvoiceApi.delete_invoice_payment_using_delete ...'
      end
      # verify the required parameter 'invoice_payment_id' is set
      if @api_client.config.client_side_validation && invoice_payment_id.nil?
        fail ArgumentError, "Missing the required parameter 'invoice_payment_id' when calling InvoiceApi.delete_invoice_payment_using_delete"
      end
      # resource path
      local_var_path = '/nucleus/v1/invoice_payment/{invoice_payment_id}'.sub('{' + 'invoice_payment_id' + '}', invoice_payment_id.to_s)

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
        @api_client.config.logger.debug "API called: InvoiceApi#delete_invoice_payment_using_delete\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Delete a invoice
    # Delete a invoice. 
    # @param invoice_id UUID invoice_id
    # @param [Hash] opts the optional parameters
    # @return [nil]
    def delete_invoice_using_delete(invoice_id, opts = {})
      delete_invoice_using_delete_with_http_info(invoice_id, opts)
      nil
    end

    # Delete a invoice
    # Delete a invoice. 
    # @param invoice_id UUID invoice_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(nil, Fixnum, Hash)>] nil, response status code and response headers
    def delete_invoice_using_delete_with_http_info(invoice_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: InvoiceApi.delete_invoice_using_delete ...'
      end
      # verify the required parameter 'invoice_id' is set
      if @api_client.config.client_side_validation && invoice_id.nil?
        fail ArgumentError, "Missing the required parameter 'invoice_id' when calling InvoiceApi.delete_invoice_using_delete"
      end
      # resource path
      local_var_path = '/nucleus/v1/invoice/{invoice_id}'.sub('{' + 'invoice_id' + '}', invoice_id.to_s)

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
        @api_client.config.logger.debug "API called: InvoiceApi#delete_invoice_using_delete\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # List all invoices
    # List all invoice. 
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending (default to false)
    # @option opts [String] :currency_conversion currency_conversion
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by (default to update_date)
    # @option opts [Integer] :page page (default to 0)
    # @option opts [Integer] :size size (default to 25)
    # @return [PageInvoice]
    def get_invoice_all_using_get(opts = {})
      data, _status_code, _headers = get_invoice_all_using_get_with_http_info(opts)
      data
    end

    # List all invoices
    # List all invoice. 
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending
    # @option opts [String] :currency_conversion currency_conversion
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by
    # @option opts [Integer] :page page
    # @option opts [Integer] :size size
    # @return [Array<(PageInvoice, Fixnum, Hash)>] PageInvoice data, response status code and response headers
    def get_invoice_all_using_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: InvoiceApi.get_invoice_all_using_get ...'
      end
      # resource path
      local_var_path = '/nucleus/v1/invoice'

      # query parameters
      query_params = {}
      query_params[:'ascending'] = opts[:'ascending'] if !opts[:'ascending'].nil?
      query_params[:'currency_conversion'] = opts[:'currency_conversion'] if !opts[:'currency_conversion'].nil?
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
        :return_type => 'PageInvoice')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: InvoiceApi#get_invoice_all_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # List all invoice payments
    # List all invoicePayment. 
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending (default to false)
    # @option opts [String] :currency_conversion currency_conversion
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by (default to update_date)
    # @option opts [Integer] :page page (default to 0)
    # @option opts [Integer] :size size (default to 25)
    # @return [PageInvoicePayment]
    def get_invoice_payment_all_using_get(opts = {})
      data, _status_code, _headers = get_invoice_payment_all_using_get_with_http_info(opts)
      data
    end

    # List all invoice payments
    # List all invoicePayment. 
    # @param [Hash] opts the optional parameters
    # @option opts [BOOLEAN] :ascending ascending
    # @option opts [String] :currency_conversion currency_conversion
    # @option opts [String] :filter filter
    # @option opts [String] :order_by order_by
    # @option opts [Integer] :page page
    # @option opts [Integer] :size size
    # @return [Array<(PageInvoicePayment, Fixnum, Hash)>] PageInvoicePayment data, response status code and response headers
    def get_invoice_payment_all_using_get_with_http_info(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: InvoiceApi.get_invoice_payment_all_using_get ...'
      end
      # resource path
      local_var_path = '/nucleus/v1/invoice_payment'

      # query parameters
      query_params = {}
      query_params[:'ascending'] = opts[:'ascending'] if !opts[:'ascending'].nil?
      query_params[:'currency_conversion'] = opts[:'currency_conversion'] if !opts[:'currency_conversion'].nil?
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
        :return_type => 'PageInvoicePayment')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: InvoiceApi#get_invoice_payment_all_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Retrieve a invoicePayment
    # Retrieve a invoicePayment. 
    # @param invoice_payment_id UUID invoice_payment_id
    # @param [Hash] opts the optional parameters
    # @option opts [String] :currency_conversion USD
    # @return [InvoicePayment]
    def get_invoice_payment_using_get(invoice_payment_id, opts = {})
      data, _status_code, _headers = get_invoice_payment_using_get_with_http_info(invoice_payment_id, opts)
      data
    end

    # Retrieve a invoicePayment
    # Retrieve a invoicePayment. 
    # @param invoice_payment_id UUID invoice_payment_id
    # @param [Hash] opts the optional parameters
    # @option opts [String] :currency_conversion USD
    # @return [Array<(InvoicePayment, Fixnum, Hash)>] InvoicePayment data, response status code and response headers
    def get_invoice_payment_using_get_with_http_info(invoice_payment_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: InvoiceApi.get_invoice_payment_using_get ...'
      end
      # verify the required parameter 'invoice_payment_id' is set
      if @api_client.config.client_side_validation && invoice_payment_id.nil?
        fail ArgumentError, "Missing the required parameter 'invoice_payment_id' when calling InvoiceApi.get_invoice_payment_using_get"
      end
      # resource path
      local_var_path = '/nucleus/v1/invoice_payment/{invoice_payment_id}'.sub('{' + 'invoice_payment_id' + '}', invoice_payment_id.to_s)

      # query parameters
      query_params = {}
      query_params[:'currency_conversion'] = opts[:'currency_conversion'] if !opts[:'currency_conversion'].nil?

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
        :return_type => 'InvoicePayment')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: InvoiceApi#get_invoice_payment_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Retrieve a invoice
    # Retrieve a invoice. 
    # @param invoice_id UUID invoice_id
    # @param [Hash] opts the optional parameters
    # @option opts [String] :currency_conversion USD
    # @return [Invoice]
    def get_invoice_using_get(invoice_id, opts = {})
      data, _status_code, _headers = get_invoice_using_get_with_http_info(invoice_id, opts)
      data
    end

    # Retrieve a invoice
    # Retrieve a invoice. 
    # @param invoice_id UUID invoice_id
    # @param [Hash] opts the optional parameters
    # @option opts [String] :currency_conversion USD
    # @return [Array<(Invoice, Fixnum, Hash)>] Invoice data, response status code and response headers
    def get_invoice_using_get_with_http_info(invoice_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: InvoiceApi.get_invoice_using_get ...'
      end
      # verify the required parameter 'invoice_id' is set
      if @api_client.config.client_side_validation && invoice_id.nil?
        fail ArgumentError, "Missing the required parameter 'invoice_id' when calling InvoiceApi.get_invoice_using_get"
      end
      # resource path
      local_var_path = '/nucleus/v1/invoice/{invoice_id}'.sub('{' + 'invoice_id' + '}', invoice_id.to_s)

      # query parameters
      query_params = {}
      query_params[:'currency_conversion'] = opts[:'currency_conversion'] if !opts[:'currency_conversion'].nil?

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
        :return_type => 'Invoice')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: InvoiceApi#get_invoice_using_get\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Update a invoicePayment
    # Update a invoicePayment. 
    # @param invoice_payment invoice_payment
    # @param invoice_payment_id UUID invoice_payment_id
    # @param [Hash] opts the optional parameters
    # @return [InvoicePayment]
    def update_invoice_payment_using_put(invoice_payment, invoice_payment_id, opts = {})
      data, _status_code, _headers = update_invoice_payment_using_put_with_http_info(invoice_payment, invoice_payment_id, opts)
      data
    end

    # Update a invoicePayment
    # Update a invoicePayment. 
    # @param invoice_payment invoice_payment
    # @param invoice_payment_id UUID invoice_payment_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(InvoicePayment, Fixnum, Hash)>] InvoicePayment data, response status code and response headers
    def update_invoice_payment_using_put_with_http_info(invoice_payment, invoice_payment_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: InvoiceApi.update_invoice_payment_using_put ...'
      end
      # verify the required parameter 'invoice_payment' is set
      if @api_client.config.client_side_validation && invoice_payment.nil?
        fail ArgumentError, "Missing the required parameter 'invoice_payment' when calling InvoiceApi.update_invoice_payment_using_put"
      end
      # verify the required parameter 'invoice_payment_id' is set
      if @api_client.config.client_side_validation && invoice_payment_id.nil?
        fail ArgumentError, "Missing the required parameter 'invoice_payment_id' when calling InvoiceApi.update_invoice_payment_using_put"
      end
      # resource path
      local_var_path = '/nucleus/v1/invoice_payment/{invoice_payment_id}'.sub('{' + 'invoice_payment_id' + '}', invoice_payment_id.to_s)

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
      post_body = @api_client.object_to_http_body(invoice_payment)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:PUT, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'InvoicePayment')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: InvoiceApi#update_invoice_payment_using_put\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
    # Update a invoice
    # Update a invoice. 
    # @param invoice invoice
    # @param invoice_id UUID invoice_id
    # @param [Hash] opts the optional parameters
    # @return [Invoice]
    def update_invoice_using_put(invoice, invoice_id, opts = {})
      data, _status_code, _headers = update_invoice_using_put_with_http_info(invoice, invoice_id, opts)
      data
    end

    # Update a invoice
    # Update a invoice. 
    # @param invoice invoice
    # @param invoice_id UUID invoice_id
    # @param [Hash] opts the optional parameters
    # @return [Array<(Invoice, Fixnum, Hash)>] Invoice data, response status code and response headers
    def update_invoice_using_put_with_http_info(invoice, invoice_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: InvoiceApi.update_invoice_using_put ...'
      end
      # verify the required parameter 'invoice' is set
      if @api_client.config.client_side_validation && invoice.nil?
        fail ArgumentError, "Missing the required parameter 'invoice' when calling InvoiceApi.update_invoice_using_put"
      end
      # verify the required parameter 'invoice_id' is set
      if @api_client.config.client_side_validation && invoice_id.nil?
        fail ArgumentError, "Missing the required parameter 'invoice_id' when calling InvoiceApi.update_invoice_using_put"
      end
      # resource path
      local_var_path = '/nucleus/v1/invoice/{invoice_id}'.sub('{' + 'invoice_id' + '}', invoice_id.to_s)

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
      post_body = @api_client.object_to_http_body(invoice)
      auth_names = ['oauth2']
      data, status_code, headers = @api_client.call_api(:PUT, local_var_path,
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => 'Invoice')
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: InvoiceApi#update_invoice_using_put\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
