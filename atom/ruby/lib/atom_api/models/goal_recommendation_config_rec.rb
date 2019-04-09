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
  class GoalRecommendationConfigRec
    # The minimum initial investment amount
    attr_accessor :inv_min

    # The maximum initial investment amount
    attr_accessor :inv_max

    # The minimum recurring deposit amount
    attr_accessor :dep_min

    # The maximum recurring deposit amount
    attr_accessor :dep_max

    # The minimum number of periods that decumulation could be delayed
    attr_accessor :horizon_min

    # The maximum number of periods that decumulation could be delayed
    attr_accessor :horizon_max

    # The annualized inflation rate for the recommendation
    attr_accessor :recommended_inflation

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'inv_min' => :'inv_min',
        :'inv_max' => :'inv_max',
        :'dep_min' => :'dep_min',
        :'dep_max' => :'dep_max',
        :'horizon_min' => :'horizon_min',
        :'horizon_max' => :'horizon_max',
        :'recommended_inflation' => :'recommended_inflation'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'inv_min' => :'Float',
        :'inv_max' => :'Float',
        :'dep_min' => :'Float',
        :'dep_max' => :'Float',
        :'horizon_min' => :'Integer',
        :'horizon_max' => :'Integer',
        :'recommended_inflation' => :'Float'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'inv_min')
        self.inv_min = attributes[:'inv_min']
      end

      if attributes.has_key?(:'inv_max')
        self.inv_max = attributes[:'inv_max']
      end

      if attributes.has_key?(:'dep_min')
        self.dep_min = attributes[:'dep_min']
      end

      if attributes.has_key?(:'dep_max')
        self.dep_max = attributes[:'dep_max']
      end

      if attributes.has_key?(:'horizon_min')
        self.horizon_min = attributes[:'horizon_min']
      end

      if attributes.has_key?(:'horizon_max')
        self.horizon_max = attributes[:'horizon_max']
      end

      if attributes.has_key?(:'recommended_inflation')
        self.recommended_inflation = attributes[:'recommended_inflation']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if !@inv_min.nil? && @inv_min < 0
        invalid_properties.push('invalid value for "inv_min", must be greater than or equal to 0.')
      end

      if !@dep_min.nil? && @dep_min < 0
        invalid_properties.push('invalid value for "dep_min", must be greater than or equal to 0.')
      end

      if !@dep_max.nil? && @dep_max < 0
        invalid_properties.push('invalid value for "dep_max", must be greater than or equal to 0.')
      end

      if !@horizon_min.nil? && @horizon_min < 0
        invalid_properties.push('invalid value for "horizon_min", must be greater than or equal to 0.')
      end

      if !@recommended_inflation.nil? && @recommended_inflation >= 20
        invalid_properties.push('invalid value for "recommended_inflation", must be smaller than 20.')
      end

      if !@recommended_inflation.nil? && @recommended_inflation <= -1
        invalid_properties.push('invalid value for "recommended_inflation", must be greater than -1.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if !@inv_min.nil? && @inv_min < 0
      return false if !@dep_min.nil? && @dep_min < 0
      return false if !@dep_max.nil? && @dep_max < 0
      return false if !@horizon_min.nil? && @horizon_min < 0
      return false if !@recommended_inflation.nil? && @recommended_inflation >= 20
      return false if !@recommended_inflation.nil? && @recommended_inflation <= -1
      true
    end

    # Custom attribute writer method with validation
    # @param [Object] inv_min Value to be assigned
    def inv_min=(inv_min)
      if !inv_min.nil? && inv_min < 0
        fail ArgumentError, 'invalid value for "inv_min", must be greater than or equal to 0.'
      end

      @inv_min = inv_min
    end

    # Custom attribute writer method with validation
    # @param [Object] dep_min Value to be assigned
    def dep_min=(dep_min)
      if !dep_min.nil? && dep_min < 0
        fail ArgumentError, 'invalid value for "dep_min", must be greater than or equal to 0.'
      end

      @dep_min = dep_min
    end

    # Custom attribute writer method with validation
    # @param [Object] dep_max Value to be assigned
    def dep_max=(dep_max)
      if !dep_max.nil? && dep_max < 0
        fail ArgumentError, 'invalid value for "dep_max", must be greater than or equal to 0.'
      end

      @dep_max = dep_max
    end

    # Custom attribute writer method with validation
    # @param [Object] horizon_min Value to be assigned
    def horizon_min=(horizon_min)
      if !horizon_min.nil? && horizon_min < 0
        fail ArgumentError, 'invalid value for "horizon_min", must be greater than or equal to 0.'
      end

      @horizon_min = horizon_min
    end

    # Custom attribute writer method with validation
    # @param [Object] recommended_inflation Value to be assigned
    def recommended_inflation=(recommended_inflation)
      if !recommended_inflation.nil? && recommended_inflation >= 20
        fail ArgumentError, 'invalid value for "recommended_inflation", must be smaller than 20.'
      end

      if !recommended_inflation.nil? && recommended_inflation <= -1
        fail ArgumentError, 'invalid value for "recommended_inflation", must be greater than -1.'
      end

      @recommended_inflation = recommended_inflation
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          inv_min == o.inv_min &&
          inv_max == o.inv_max &&
          dep_min == o.dep_min &&
          dep_max == o.dep_max &&
          horizon_min == o.horizon_min &&
          horizon_max == o.horizon_max &&
          recommended_inflation == o.recommended_inflation
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [inv_min, inv_max, dep_min, dep_max, horizon_min, horizon_max, recommended_inflation].hash
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
