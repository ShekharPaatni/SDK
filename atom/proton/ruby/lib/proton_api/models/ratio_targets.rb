=begin
#Hydrogen Proton API

#Financial engineering module of Hydrogen Atom

OpenAPI spec version: 1.9.1
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.19

=end

require 'date'

module ProtonApi
  class RatioTargets
    attr_accessor :liquidity_ratio_liabilities

    attr_accessor :current_ratio

    attr_accessor :asset_allocation_ratio

    attr_accessor :savings_ratio_net

    attr_accessor :savings_ratio_gross

    attr_accessor :liquidity_ratio_expenses

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'liquidity_ratio_liabilities' => :'liquidity_ratio_liabilities',
        :'current_ratio' => :'current_ratio',
        :'asset_allocation_ratio' => :'asset_allocation_ratio',
        :'savings_ratio_net' => :'savings_ratio_net',
        :'savings_ratio_gross' => :'savings_ratio_gross',
        :'liquidity_ratio_expenses' => :'liquidity_ratio_expenses'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'liquidity_ratio_liabilities' => :'Float',
        :'current_ratio' => :'Float',
        :'asset_allocation_ratio' => :'Float',
        :'savings_ratio_net' => :'Float',
        :'savings_ratio_gross' => :'Float',
        :'liquidity_ratio_expenses' => :'Float'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'liquidity_ratio_liabilities')
        self.liquidity_ratio_liabilities = attributes[:'liquidity_ratio_liabilities']
      else
        self.liquidity_ratio_liabilities = 0.1
      end

      if attributes.has_key?(:'current_ratio')
        self.current_ratio = attributes[:'current_ratio']
      else
        self.current_ratio = 0.5
      end

      if attributes.has_key?(:'asset_allocation_ratio')
        self.asset_allocation_ratio = attributes[:'asset_allocation_ratio']
      else
        self.asset_allocation_ratio = 1.5
      end

      if attributes.has_key?(:'savings_ratio_net')
        self.savings_ratio_net = attributes[:'savings_ratio_net']
      else
        self.savings_ratio_net = 0.1
      end

      if attributes.has_key?(:'savings_ratio_gross')
        self.savings_ratio_gross = attributes[:'savings_ratio_gross']
      else
        self.savings_ratio_gross = 0.1
      end

      if attributes.has_key?(:'liquidity_ratio_expenses')
        self.liquidity_ratio_expenses = attributes[:'liquidity_ratio_expenses']
      else
        self.liquidity_ratio_expenses = 2.5
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if !@liquidity_ratio_liabilities.nil? && @liquidity_ratio_liabilities < 0
        invalid_properties.push('invalid value for "liquidity_ratio_liabilities", must be greater than or equal to 0.')
      end

      if !@current_ratio.nil? && @current_ratio < 0
        invalid_properties.push('invalid value for "current_ratio", must be greater than or equal to 0.')
      end

      if !@asset_allocation_ratio.nil? && @asset_allocation_ratio < 0
        invalid_properties.push('invalid value for "asset_allocation_ratio", must be greater than or equal to 0.')
      end

      if !@savings_ratio_net.nil? && @savings_ratio_net < 0
        invalid_properties.push('invalid value for "savings_ratio_net", must be greater than or equal to 0.')
      end

      if !@savings_ratio_gross.nil? && @savings_ratio_gross < 0
        invalid_properties.push('invalid value for "savings_ratio_gross", must be greater than or equal to 0.')
      end

      if !@liquidity_ratio_expenses.nil? && @liquidity_ratio_expenses < 0
        invalid_properties.push('invalid value for "liquidity_ratio_expenses", must be greater than or equal to 0.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if !@liquidity_ratio_liabilities.nil? && @liquidity_ratio_liabilities < 0
      return false if !@current_ratio.nil? && @current_ratio < 0
      return false if !@asset_allocation_ratio.nil? && @asset_allocation_ratio < 0
      return false if !@savings_ratio_net.nil? && @savings_ratio_net < 0
      return false if !@savings_ratio_gross.nil? && @savings_ratio_gross < 0
      return false if !@liquidity_ratio_expenses.nil? && @liquidity_ratio_expenses < 0
      true
    end

    # Custom attribute writer method with validation
    # @param [Object] liquidity_ratio_liabilities Value to be assigned
    def liquidity_ratio_liabilities=(liquidity_ratio_liabilities)
      if !liquidity_ratio_liabilities.nil? && liquidity_ratio_liabilities < 0
        fail ArgumentError, 'invalid value for "liquidity_ratio_liabilities", must be greater than or equal to 0.'
      end

      @liquidity_ratio_liabilities = liquidity_ratio_liabilities
    end

    # Custom attribute writer method with validation
    # @param [Object] current_ratio Value to be assigned
    def current_ratio=(current_ratio)
      if !current_ratio.nil? && current_ratio < 0
        fail ArgumentError, 'invalid value for "current_ratio", must be greater than or equal to 0.'
      end

      @current_ratio = current_ratio
    end

    # Custom attribute writer method with validation
    # @param [Object] asset_allocation_ratio Value to be assigned
    def asset_allocation_ratio=(asset_allocation_ratio)
      if !asset_allocation_ratio.nil? && asset_allocation_ratio < 0
        fail ArgumentError, 'invalid value for "asset_allocation_ratio", must be greater than or equal to 0.'
      end

      @asset_allocation_ratio = asset_allocation_ratio
    end

    # Custom attribute writer method with validation
    # @param [Object] savings_ratio_net Value to be assigned
    def savings_ratio_net=(savings_ratio_net)
      if !savings_ratio_net.nil? && savings_ratio_net < 0
        fail ArgumentError, 'invalid value for "savings_ratio_net", must be greater than or equal to 0.'
      end

      @savings_ratio_net = savings_ratio_net
    end

    # Custom attribute writer method with validation
    # @param [Object] savings_ratio_gross Value to be assigned
    def savings_ratio_gross=(savings_ratio_gross)
      if !savings_ratio_gross.nil? && savings_ratio_gross < 0
        fail ArgumentError, 'invalid value for "savings_ratio_gross", must be greater than or equal to 0.'
      end

      @savings_ratio_gross = savings_ratio_gross
    end

    # Custom attribute writer method with validation
    # @param [Object] liquidity_ratio_expenses Value to be assigned
    def liquidity_ratio_expenses=(liquidity_ratio_expenses)
      if !liquidity_ratio_expenses.nil? && liquidity_ratio_expenses < 0
        fail ArgumentError, 'invalid value for "liquidity_ratio_expenses", must be greater than or equal to 0.'
      end

      @liquidity_ratio_expenses = liquidity_ratio_expenses
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          liquidity_ratio_liabilities == o.liquidity_ratio_liabilities &&
          current_ratio == o.current_ratio &&
          asset_allocation_ratio == o.asset_allocation_ratio &&
          savings_ratio_net == o.savings_ratio_net &&
          savings_ratio_gross == o.savings_ratio_gross &&
          liquidity_ratio_expenses == o.liquidity_ratio_expenses
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [liquidity_ratio_liabilities, current_ratio, asset_allocation_ratio, savings_ratio_net, savings_ratio_gross, liquidity_ratio_expenses].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
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
        value
      when :Date
        value
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
        temp_model = ProtonApi.const_get(type).new
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
