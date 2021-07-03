=begin
#Hydrogen Nucleus API

#The Hydrogen Nucleus API

OpenAPI spec version: 1.9.2
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.19

=end

require 'date'

module NucleusApi
  # AuditLog Object
  class AuditLog
    # accountIds
    attr_accessor :account_ids

    # aggregationAccountIds
    attr_accessor :aggregation_account_ids

    # allocationIds
    attr_accessor :allocation_ids

    # clientIds
    attr_accessor :client_ids

    attr_accessor :create_date

    # goalIds
    attr_accessor :goal_ids

    # id
    attr_accessor :id

    # metadata
    attr_accessor :metadata

    # modelIds
    attr_accessor :model_ids

    # portfolioIds
    attr_accessor :portfolio_ids

    attr_accessor :request

    # requestUrl
    attr_accessor :request_url

    # response
    attr_accessor :response

    attr_accessor :secondary_id

    # securityIds
    attr_accessor :security_ids

    attr_accessor :update_date

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'account_ids' => :'account_ids',
        :'aggregation_account_ids' => :'aggregation_account_ids',
        :'allocation_ids' => :'allocation_ids',
        :'client_ids' => :'client_ids',
        :'create_date' => :'create_date',
        :'goal_ids' => :'goal_ids',
        :'id' => :'id',
        :'metadata' => :'metadata',
        :'model_ids' => :'model_ids',
        :'portfolio_ids' => :'portfolio_ids',
        :'request' => :'request',
        :'request_url' => :'request_url',
        :'response' => :'response',
        :'secondary_id' => :'secondary_id',
        :'security_ids' => :'security_ids',
        :'update_date' => :'update_date'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'account_ids' => :'Array<String>',
        :'aggregation_account_ids' => :'Array<String>',
        :'allocation_ids' => :'Array<String>',
        :'client_ids' => :'Array<String>',
        :'create_date' => :'DateTime',
        :'goal_ids' => :'Array<String>',
        :'id' => :'String',
        :'metadata' => :'Hash<String, String>',
        :'model_ids' => :'Array<String>',
        :'portfolio_ids' => :'Array<String>',
        :'request' => :'String',
        :'request_url' => :'String',
        :'response' => :'String',
        :'secondary_id' => :'String',
        :'security_ids' => :'Array<String>',
        :'update_date' => :'DateTime'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'account_ids')
        if (value = attributes[:'account_ids']).is_a?(Array)
          self.account_ids = value
        end
      end

      if attributes.has_key?(:'aggregation_account_ids')
        if (value = attributes[:'aggregation_account_ids']).is_a?(Array)
          self.aggregation_account_ids = value
        end
      end

      if attributes.has_key?(:'allocation_ids')
        if (value = attributes[:'allocation_ids']).is_a?(Array)
          self.allocation_ids = value
        end
      end

      if attributes.has_key?(:'client_ids')
        if (value = attributes[:'client_ids']).is_a?(Array)
          self.client_ids = value
        end
      end

      if attributes.has_key?(:'create_date')
        self.create_date = attributes[:'create_date']
      end

      if attributes.has_key?(:'goal_ids')
        if (value = attributes[:'goal_ids']).is_a?(Array)
          self.goal_ids = value
        end
      end

      if attributes.has_key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.has_key?(:'metadata')
        if (value = attributes[:'metadata']).is_a?(Hash)
          self.metadata = value
        end
      end

      if attributes.has_key?(:'model_ids')
        if (value = attributes[:'model_ids']).is_a?(Array)
          self.model_ids = value
        end
      end

      if attributes.has_key?(:'portfolio_ids')
        if (value = attributes[:'portfolio_ids']).is_a?(Array)
          self.portfolio_ids = value
        end
      end

      if attributes.has_key?(:'request')
        self.request = attributes[:'request']
      end

      if attributes.has_key?(:'request_url')
        self.request_url = attributes[:'request_url']
      end

      if attributes.has_key?(:'response')
        self.response = attributes[:'response']
      end

      if attributes.has_key?(:'secondary_id')
        self.secondary_id = attributes[:'secondary_id']
      end

      if attributes.has_key?(:'security_ids')
        if (value = attributes[:'security_ids']).is_a?(Array)
          self.security_ids = value
        end
      end

      if attributes.has_key?(:'update_date')
        self.update_date = attributes[:'update_date']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @request_url.nil?
        invalid_properties.push('invalid value for "request_url", request_url cannot be nil.')
      end

      if @response.nil?
        invalid_properties.push('invalid value for "response", response cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @request_url.nil?
      return false if @response.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          account_ids == o.account_ids &&
          aggregation_account_ids == o.aggregation_account_ids &&
          allocation_ids == o.allocation_ids &&
          client_ids == o.client_ids &&
          create_date == o.create_date &&
          goal_ids == o.goal_ids &&
          id == o.id &&
          metadata == o.metadata &&
          model_ids == o.model_ids &&
          portfolio_ids == o.portfolio_ids &&
          request == o.request &&
          request_url == o.request_url &&
          response == o.response &&
          secondary_id == o.secondary_id &&
          security_ids == o.security_ids &&
          update_date == o.update_date
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [account_ids, aggregation_account_ids, allocation_ids, client_ids, create_date, goal_ids, id, metadata, model_ids, portfolio_ids, request, request_url, response, secondary_id, security_ids, update_date].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      self.class.swagger_types.each_pair do |key, type|
        if type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        end # or else data not found in attributes(hash), not an issue as the data can be optional
      end

      self
    end
# Deserializes the data based on type
    # @param string type Data type
    # @param string value Value to be deserialized
    # @return [Object] Deserialized data
    def _deserialize(type, value)
      case type.to_sym
      when :DateTime
        (value)
      when :Date
        (value)
      when :String
        value.to_s
      when :Integer
        value.to_i
      when :Float
        value.to_f
      when :BOOLEAN
        if value.to_s =~ /\A(true|t|yes|y|1)\z/i
          true
        else
          false
        end
      when :Object
        # generic object (usually a Hash), return directly
        value
      when /\AArray<(?<inner_type>.+)>\z/
        inner_type = Regexp.last_match[:inner_type]
        value.map { |v| _deserialize(inner_type, v) }
      when /\AHash<(?<k_type>.+?), (?<v_type>.+)>\z/
        k_type = Regexp.last_match[:k_type]
        v_type = Regexp.last_match[:v_type]
        {}.tap do |hash|
          value.each do |k, v|
            hash[_deserialize(k_type, k)] = _deserialize(v_type, v)
          end
        end
      else # model
        temp_model = NucleusApi.const_get(type).new
        temp_model.build_from_hash(value)
      end
    end


    # Returns the string representation of the object
    # @return [String] String presentation of the object
    def to_s
      to_hash.to_s
    end

    # to_body is an alias to to_hash (backward compatibility)
    # @return [Hash] Returns the object in the form of hash
    def to_body
      to_hash
    end

    # Returns the object in the form of hash
    # @return [Hash] Returns the object in the form of hash
    def to_hash
      hash = {}
      self.class.attribute_map.each_pair do |attr, param|
        value = self.send(attr)
        hash[param] = _to_hash(value)
      end
      hash
    end

    # Outputs non-array value in the form of hash
    # For object, use to_hash. Otherwise, just return the value
    # @param [Object] value Any valid value
    # @return [Hash] Returns the value in the form of hash
    def _to_hash(value)
      if value.is_a?(Array)
        value.compact.map { |v| _to_hash(v) }
      elsif value.is_a?(Hash)
        {}.tap do |hash|
          value.each { |k, v| hash[k] = _to_hash(v) }
        end
      elsif value.respond_to? :to_hash
        value.to_hash
      else
        value
      end
    end

  end
end
