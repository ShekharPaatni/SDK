=begin
#Hydrogen Atom API

#The Hydrogen Atom API

OpenAPI spec version: 1.0.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.2-SNAPSHOT

=end

require 'date'

module AtomApi
  class AnnuityAmountResponse
    # The periodic annuity amount.
    attr_accessor :annuity_amount

    # The frequency at which annuity_amount is drawn from the portfolio.
    attr_accessor :annuity_frequency_interval

    # The total amount received from the annuity over the course of the plan.
    attr_accessor :cumulative_annuity_amount

    attr_accessor :return_details

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'annuity_amount' => :'annuity_amount',
        :'annuity_frequency_interval' => :'annuity_frequency_interval',
        :'cumulative_annuity_amount' => :'cumulative_annuity_amount',
        :'return_details' => :'return_details'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'annuity_amount' => :'Float',
        :'annuity_frequency_interval' => :'String',
        :'cumulative_annuity_amount' => :'Float',
        :'return_details' => :'Hash<String, AnnuityReturnDetail>'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'annuity_amount')
        self.annuity_amount = attributes[:'annuity_amount']
      end

      if attributes.has_key?(:'annuity_frequency_interval')
        self.annuity_frequency_interval = attributes[:'annuity_frequency_interval']
      end

      if attributes.has_key?(:'cumulative_annuity_amount')
        self.cumulative_annuity_amount = attributes[:'cumulative_annuity_amount']
      end

      if attributes.has_key?(:'return_details')
        if (value = attributes[:'return_details']).is_a?(Hash)
          self.return_details = value
        end
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @annuity_amount.nil?
        invalid_properties.push('invalid value for "annuity_amount", annuity_amount cannot be nil.')
      end

      if @annuity_amount < 0
        invalid_properties.push('invalid value for "annuity_amount", must be greater than or equal to 0.')
      end

      if @annuity_frequency_interval.nil?
        invalid_properties.push('invalid value for "annuity_frequency_interval", annuity_frequency_interval cannot be nil.')
      end

      if @cumulative_annuity_amount.nil?
        invalid_properties.push('invalid value for "cumulative_annuity_amount", cumulative_annuity_amount cannot be nil.')
      end

      if @cumulative_annuity_amount < 0
        invalid_properties.push('invalid value for "cumulative_annuity_amount", must be greater than or equal to 0.')
      end

      if @return_details.nil?
        invalid_properties.push('invalid value for "return_details", return_details cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @annuity_amount.nil?
      return false if @annuity_amount < 0
      return false if @annuity_frequency_interval.nil?
      return false if @cumulative_annuity_amount.nil?
      return false if @cumulative_annuity_amount < 0
      return false if @return_details.nil?
      true
    end

    # Custom attribute writer method with validation
    # @param [Object] annuity_amount Value to be assigned
    def annuity_amount=(annuity_amount)
      if annuity_amount.nil?
        fail ArgumentError, 'annuity_amount cannot be nil'
      end

      if annuity_amount < 0
        fail ArgumentError, 'invalid value for "annuity_amount", must be greater than or equal to 0.'
      end

      @annuity_amount = annuity_amount
    end

    # Custom attribute writer method with validation
    # @param [Object] cumulative_annuity_amount Value to be assigned
    def cumulative_annuity_amount=(cumulative_annuity_amount)
      if cumulative_annuity_amount.nil?
        fail ArgumentError, 'cumulative_annuity_amount cannot be nil'
      end

      if cumulative_annuity_amount < 0
        fail ArgumentError, 'invalid value for "cumulative_annuity_amount", must be greater than or equal to 0.'
      end

      @cumulative_annuity_amount = cumulative_annuity_amount
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          annuity_amount == o.annuity_amount &&
          annuity_frequency_interval == o.annuity_frequency_interval &&
          cumulative_annuity_amount == o.cumulative_annuity_amount &&
          return_details == o.return_details
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [annuity_amount, annuity_frequency_interval, cumulative_annuity_amount, return_details].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
      self.class.swagger_types.each_pair do |key, type|
        if type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the the attribute
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
        DateTime.parse(value)
      when :Date
        Date.parse(value)
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
        temp_model = AtomApi.const_get(type).new
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
        next if value.nil?
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
