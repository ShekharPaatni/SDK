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
  # Page Object
  class PageRoundupSettings
    attr_accessor :content

    attr_accessor :first

    attr_accessor :last

    attr_accessor :number

    attr_accessor :number_of_elements

    attr_accessor :size

    attr_accessor :sort

    attr_accessor :total_elements

    attr_accessor :total_pages

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'content' => :'content',
        :'first' => :'first',
        :'last' => :'last',
        :'number' => :'number',
        :'number_of_elements' => :'number_of_elements',
        :'size' => :'size',
        :'sort' => :'sort',
        :'total_elements' => :'total_elements',
        :'total_pages' => :'total_pages'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'content' => :'Array<RoundupSettings>',
        :'first' => :'BOOLEAN',
        :'last' => :'BOOLEAN',
        :'number' => :'Integer',
        :'number_of_elements' => :'Integer',
        :'size' => :'Integer',
        :'sort' => :'Array<Sort>',
        :'total_elements' => :'Integer',
        :'total_pages' => :'Integer'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'content')
        if (value = attributes[:'content']).is_a?(Array)
          self.content = value
        end
      end

      if attributes.has_key?(:'first')
        self.first = attributes[:'first']
      end

      if attributes.has_key?(:'last')
        self.last = attributes[:'last']
      end

      if attributes.has_key?(:'number')
        self.number = attributes[:'number']
      end

      if attributes.has_key?(:'number_of_elements')
        self.number_of_elements = attributes[:'number_of_elements']
      end

      if attributes.has_key?(:'size')
        self.size = attributes[:'size']
      end

      if attributes.has_key?(:'sort')
        if (value = attributes[:'sort']).is_a?(Array)
          self.sort = value
        end
      end

      if attributes.has_key?(:'total_elements')
        self.total_elements = attributes[:'total_elements']
      end

      if attributes.has_key?(:'total_pages')
        self.total_pages = attributes[:'total_pages']
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
          content == o.content &&
          first == o.first &&
          last == o.last &&
          number == o.number &&
          number_of_elements == o.number_of_elements &&
          size == o.size &&
          sort == o.sort &&
          total_elements == o.total_elements &&
          total_pages == o.total_pages
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [content, first, last, number, number_of_elements, size, sort, total_elements, total_pages].hash
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
