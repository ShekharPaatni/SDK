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
  class SpecificClientHydroResponse
    # ID of the client-hydro relationship
    attr_accessor :id

    # Datetime when the client-hydro relationship was created
    attr_accessor :create_date

    # The ID of the client to whom the Hydro ID belongs
    attr_accessor :client_id

    # The hydro ID for the client. Also found under the client object
    attr_accessor :hydro_id

    # Indicator if the client has verified ownership of the Hydro ID provided. Defaults to false which means ownership has not been verified
    attr_accessor :is_hydro_id_verified

    # Indicator for whether or not the client has successfully linked their Hydro ID to your Client-side Raindrop application. Defaults to false which indicates it has not been linked
    attr_accessor :is_client_raindrop_linked

    # Indicator for whether or not the client has chosen to enable the Hydro Client-side Raindrop service on your application. Defaults to false which indicates the service is not enabled
    attr_accessor :is_client_raindrop_enabled

    # Custom information associated with the client-hydro relationship in the format key:value
    attr_accessor :metadata

    attr_accessor :secondary_id

    # Latest datetime the client-hydro relationship was updated
    attr_accessor :update_date

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'id' => :'id',
        :'create_date' => :'create_date',
        :'client_id' => :'client_id',
        :'hydro_id' => :'hydro_id',
        :'is_hydro_id_verified' => :'is_hydro_id_verified',
        :'is_client_raindrop_linked' => :'is_client_raindrop_linked',
        :'is_client_raindrop_enabled' => :'is_client_raindrop_enabled',
        :'metadata' => :'metadata',
        :'secondary_id' => :'secondary_id',
        :'update_date' => :'update_date'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'id' => :'String',
        :'create_date' => :'String',
        :'client_id' => :'String',
        :'hydro_id' => :'String',
        :'is_hydro_id_verified' => :'BOOLEAN',
        :'is_client_raindrop_linked' => :'BOOLEAN',
        :'is_client_raindrop_enabled' => :'BOOLEAN',
        :'metadata' => :'Object',
        :'secondary_id' => :'SecondaryId',
        :'update_date' => :'String'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.has_key?(:'create_date')
        self.create_date = attributes[:'create_date']
      end

      if attributes.has_key?(:'client_id')
        self.client_id = attributes[:'client_id']
      end

      if attributes.has_key?(:'hydro_id')
        self.hydro_id = attributes[:'hydro_id']
      end

      if attributes.has_key?(:'is_hydro_id_verified')
        self.is_hydro_id_verified = attributes[:'is_hydro_id_verified']
      else
        self.is_hydro_id_verified = false
      end

      if attributes.has_key?(:'is_client_raindrop_linked')
        self.is_client_raindrop_linked = attributes[:'is_client_raindrop_linked']
      else
        self.is_client_raindrop_linked = false
      end

      if attributes.has_key?(:'is_client_raindrop_enabled')
        self.is_client_raindrop_enabled = attributes[:'is_client_raindrop_enabled']
      else
        self.is_client_raindrop_enabled = false
      end

      if attributes.has_key?(:'metadata')
        self.metadata = attributes[:'metadata']
      end

      if attributes.has_key?(:'secondary_id')
        self.secondary_id = attributes[:'secondary_id']
      end

      if attributes.has_key?(:'update_date')
        self.update_date = attributes[:'update_date']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @client_id.nil?
        invalid_properties.push('invalid value for "client_id", client_id cannot be nil.')
      end

      if @hydro_id.nil?
        invalid_properties.push('invalid value for "hydro_id", hydro_id cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @client_id.nil?
      return false if @hydro_id.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          id == o.id &&
          create_date == o.create_date &&
          client_id == o.client_id &&
          hydro_id == o.hydro_id &&
          is_hydro_id_verified == o.is_hydro_id_verified &&
          is_client_raindrop_linked == o.is_client_raindrop_linked &&
          is_client_raindrop_enabled == o.is_client_raindrop_enabled &&
          metadata == o.metadata &&
          secondary_id == o.secondary_id &&
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
      [id, create_date, client_id, hydro_id, is_hydro_id_verified, is_client_raindrop_linked, is_client_raindrop_enabled, metadata, secondary_id, update_date].hash
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
