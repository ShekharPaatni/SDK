=begin
#Hydrogen Integration API

#The Hydrogen Integration API

OpenAPI spec version: 1.3.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.19

=end

require 'date'

module IntegrationApi
  class ClientVendorRequestDataVO
    attr_accessor :addresses

    attr_accessor :business_name

    attr_accessor :country_of_citizenship

    attr_accessor :date_of_birth

    attr_accessor :email

    attr_accessor :first_name

    attr_accessor :gender

    attr_accessor :identification_number

    attr_accessor :identification_number_type

    attr_accessor :identifications

    attr_accessor :last_name

    attr_accessor :metadata

    attr_accessor :middle_name

    attr_accessor :phone_number

    attr_accessor :politically_exposed_person

    attr_accessor :prefix

    attr_accessor :suffix

    attr_accessor :title

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'addresses' => :'addresses',
        :'business_name' => :'business_name',
        :'country_of_citizenship' => :'country_of_citizenship',
        :'date_of_birth' => :'date_of_birth',
        :'email' => :'email',
        :'first_name' => :'first_name',
        :'gender' => :'gender',
        :'identification_number' => :'identification_number',
        :'identification_number_type' => :'identification_number_type',
        :'identifications' => :'identifications',
        :'last_name' => :'last_name',
        :'metadata' => :'metadata',
        :'middle_name' => :'middle_name',
        :'phone_number' => :'phone_number',
        :'politically_exposed_person' => :'politically_exposed_person',
        :'prefix' => :'prefix',
        :'suffix' => :'suffix',
        :'title' => :'title'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'addresses' => :'Array<Address>',
        :'business_name' => :'String',
        :'country_of_citizenship' => :'String',
        :'date_of_birth' => :'Date',
        :'email' => :'String',
        :'first_name' => :'String',
        :'gender' => :'String',
        :'identification_number' => :'String',
        :'identification_number_type' => :'String',
        :'identifications' => :'Array<Identification>',
        :'last_name' => :'String',
        :'metadata' => :'Hash<String, String>',
        :'middle_name' => :'String',
        :'phone_number' => :'String',
        :'politically_exposed_person' => :'PoliticallyExposedPersonDTO',
        :'prefix' => :'String',
        :'suffix' => :'String',
        :'title' => :'String'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'addresses')
        if (value = attributes[:'addresses']).is_a?(Array)
          self.addresses = value
        end
      end

      if attributes.has_key?(:'business_name')
        self.business_name = attributes[:'business_name']
      end

      if attributes.has_key?(:'country_of_citizenship')
        self.country_of_citizenship = attributes[:'country_of_citizenship']
      end

      if attributes.has_key?(:'date_of_birth')
        self.date_of_birth = attributes[:'date_of_birth']
      end

      if attributes.has_key?(:'email')
        self.email = attributes[:'email']
      end

      if attributes.has_key?(:'first_name')
        self.first_name = attributes[:'first_name']
      end

      if attributes.has_key?(:'gender')
        self.gender = attributes[:'gender']
      end

      if attributes.has_key?(:'identification_number')
        self.identification_number = attributes[:'identification_number']
      end

      if attributes.has_key?(:'identification_number_type')
        self.identification_number_type = attributes[:'identification_number_type']
      end

      if attributes.has_key?(:'identifications')
        if (value = attributes[:'identifications']).is_a?(Array)
          self.identifications = value
        end
      end

      if attributes.has_key?(:'last_name')
        self.last_name = attributes[:'last_name']
      end

      if attributes.has_key?(:'metadata')
        if (value = attributes[:'metadata']).is_a?(Hash)
          self.metadata = value
        end
      end

      if attributes.has_key?(:'middle_name')
        self.middle_name = attributes[:'middle_name']
      end

      if attributes.has_key?(:'phone_number')
        self.phone_number = attributes[:'phone_number']
      end

      if attributes.has_key?(:'politically_exposed_person')
        self.politically_exposed_person = attributes[:'politically_exposed_person']
      end

      if attributes.has_key?(:'prefix')
        self.prefix = attributes[:'prefix']
      end

      if attributes.has_key?(:'suffix')
        self.suffix = attributes[:'suffix']
      end

      if attributes.has_key?(:'title')
        self.title = attributes[:'title']
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
          addresses == o.addresses &&
          business_name == o.business_name &&
          country_of_citizenship == o.country_of_citizenship &&
          date_of_birth == o.date_of_birth &&
          email == o.email &&
          first_name == o.first_name &&
          gender == o.gender &&
          identification_number == o.identification_number &&
          identification_number_type == o.identification_number_type &&
          identifications == o.identifications &&
          last_name == o.last_name &&
          metadata == o.metadata &&
          middle_name == o.middle_name &&
          phone_number == o.phone_number &&
          politically_exposed_person == o.politically_exposed_person &&
          prefix == o.prefix &&
          suffix == o.suffix &&
          title == o.title
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [addresses, business_name, country_of_citizenship, date_of_birth, email, first_name, gender, identification_number, identification_number_type, identifications, last_name, metadata, middle_name, phone_number, politically_exposed_person, prefix, suffix, title].hash
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
        temp_model = IntegrationApi.const_get(type).new
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
