=begin
#Hydrogen Nucleus API

#The Hydrogen Nucleus API

OpenAPI spec version: 1.9.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.19

=end

require 'date'

module NucleusApi
  class AllocationCompositionModelHoldingsVO
    attr_accessor :model_holding_date

    attr_accessor :model_holding_id

    attr_accessor :security_asset_class

    attr_accessor :security_compositions

    attr_accessor :security_countries

    attr_accessor :security_create_date

    attr_accessor :security_exchange

    attr_accessor :security_id

    attr_accessor :security_industry

    attr_accessor :security_name

    attr_accessor :security_secondary_id

    attr_accessor :security_sector

    attr_accessor :security_security_class

    attr_accessor :security_ticker

    attr_accessor :security_update_date

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'model_holding_date' => :'model_holding_date',
        :'model_holding_id' => :'model_holding_id',
        :'security_asset_class' => :'security_asset_class',
        :'security_compositions' => :'security_compositions',
        :'security_countries' => :'security_countries',
        :'security_create_date' => :'security_create_date',
        :'security_exchange' => :'security_exchange',
        :'security_id' => :'security_id',
        :'security_industry' => :'security_industry',
        :'security_name' => :'security_name',
        :'security_secondary_id' => :'security_secondary_id',
        :'security_sector' => :'security_sector',
        :'security_security_class' => :'security_security_class',
        :'security_ticker' => :'security_ticker',
        :'security_update_date' => :'security_update_date'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'model_holding_date' => :'Date',
        :'model_holding_id' => :'String',
        :'security_asset_class' => :'String',
        :'security_compositions' => :'Array<SecurityCompositionVO>',
        :'security_countries' => :'Array<SecurityCountryVO>',
        :'security_create_date' => :'DateTime',
        :'security_exchange' => :'String',
        :'security_id' => :'String',
        :'security_industry' => :'String',
        :'security_name' => :'String',
        :'security_secondary_id' => :'String',
        :'security_sector' => :'String',
        :'security_security_class' => :'String',
        :'security_ticker' => :'String',
        :'security_update_date' => :'DateTime'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'model_holding_date')
        self.model_holding_date = attributes[:'model_holding_date']
      end

      if attributes.has_key?(:'model_holding_id')
        self.model_holding_id = attributes[:'model_holding_id']
      end

      if attributes.has_key?(:'security_asset_class')
        self.security_asset_class = attributes[:'security_asset_class']
      end

      if attributes.has_key?(:'security_compositions')
        if (value = attributes[:'security_compositions']).is_a?(Array)
          self.security_compositions = value
        end
      end

      if attributes.has_key?(:'security_countries')
        if (value = attributes[:'security_countries']).is_a?(Array)
          self.security_countries = value
        end
      end

      if attributes.has_key?(:'security_create_date')
        self.security_create_date = attributes[:'security_create_date']
      end

      if attributes.has_key?(:'security_exchange')
        self.security_exchange = attributes[:'security_exchange']
      end

      if attributes.has_key?(:'security_id')
        self.security_id = attributes[:'security_id']
      end

      if attributes.has_key?(:'security_industry')
        self.security_industry = attributes[:'security_industry']
      end

      if attributes.has_key?(:'security_name')
        self.security_name = attributes[:'security_name']
      end

      if attributes.has_key?(:'security_secondary_id')
        self.security_secondary_id = attributes[:'security_secondary_id']
      end

      if attributes.has_key?(:'security_sector')
        self.security_sector = attributes[:'security_sector']
      end

      if attributes.has_key?(:'security_security_class')
        self.security_security_class = attributes[:'security_security_class']
      end

      if attributes.has_key?(:'security_ticker')
        self.security_ticker = attributes[:'security_ticker']
      end

      if attributes.has_key?(:'security_update_date')
        self.security_update_date = attributes[:'security_update_date']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          model_holding_date == o.model_holding_date &&
          model_holding_id == o.model_holding_id &&
          security_asset_class == o.security_asset_class &&
          security_compositions == o.security_compositions &&
          security_countries == o.security_countries &&
          security_create_date == o.security_create_date &&
          security_exchange == o.security_exchange &&
          security_id == o.security_id &&
          security_industry == o.security_industry &&
          security_name == o.security_name &&
          security_secondary_id == o.security_secondary_id &&
          security_sector == o.security_sector &&
          security_security_class == o.security_security_class &&
          security_ticker == o.security_ticker &&
          security_update_date == o.security_update_date
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [model_holding_date, model_holding_id, security_asset_class, security_compositions, security_countries, security_create_date, security_exchange, security_id, security_industry, security_name, security_secondary_id, security_sector, security_security_class, security_ticker, security_update_date].hash
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
