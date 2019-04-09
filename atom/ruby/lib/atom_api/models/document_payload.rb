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
  class DocumentPayload
    # Size of the document. Must be a whole number
    attr_accessor :doc_size

    # Name or title of the document
    attr_accessor :doc_name

    # Type of document such as “Compliance” or “Registration”
    attr_accessor :doc_type

    # File path or content for the document
    attr_accessor :doc_file

    # URL path for the document such as http://domain.com/sample.pdf
    attr_accessor :url_path

    # In the case that the document relates to a specific Client, the ID of the client
    attr_accessor :client_id

    # In the case that the document relates to a specific Account, the ID of the account
    attr_accessor :account_id

    # Custom information associated with the document in the format key:value
    attr_accessor :metadata

    attr_accessor :secondary_id

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'doc_size' => :'doc_size',
        :'doc_name' => :'doc_name',
        :'doc_type' => :'doc_type',
        :'doc_file' => :'doc_file',
        :'url_path' => :'url_path',
        :'client_id' => :'client_id',
        :'account_id' => :'account_id',
        :'metadata' => :'metadata',
        :'secondary_id' => :'secondary_id'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'doc_size' => :'Integer',
        :'doc_name' => :'String',
        :'doc_type' => :'String',
        :'doc_file' => :'String',
        :'url_path' => :'String',
        :'client_id' => :'String',
        :'account_id' => :'String',
        :'metadata' => :'Object',
        :'secondary_id' => :'SecondaryId'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'doc_size')
        self.doc_size = attributes[:'doc_size']
      end

      if attributes.has_key?(:'doc_name')
        self.doc_name = attributes[:'doc_name']
      end

      if attributes.has_key?(:'doc_type')
        self.doc_type = attributes[:'doc_type']
      end

      if attributes.has_key?(:'doc_file')
        self.doc_file = attributes[:'doc_file']
      end

      if attributes.has_key?(:'url_path')
        self.url_path = attributes[:'url_path']
      end

      if attributes.has_key?(:'client_id')
        self.client_id = attributes[:'client_id']
      end

      if attributes.has_key?(:'account_id')
        self.account_id = attributes[:'account_id']
      end

      if attributes.has_key?(:'metadata')
        self.metadata = attributes[:'metadata']
      end

      if attributes.has_key?(:'secondary_id')
        self.secondary_id = attributes[:'secondary_id']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @doc_size.nil?
        invalid_properties.push('invalid value for "doc_size", doc_size cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @doc_size.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          doc_size == o.doc_size &&
          doc_name == o.doc_name &&
          doc_type == o.doc_type &&
          doc_file == o.doc_file &&
          url_path == o.url_path &&
          client_id == o.client_id &&
          account_id == o.account_id &&
          metadata == o.metadata &&
          secondary_id == o.secondary_id
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [doc_size, doc_name, doc_type, doc_file, url_path, client_id, account_id, metadata, secondary_id].hash
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
