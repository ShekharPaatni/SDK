=begin
#Hydrogen Nucleus API

#The Hydrogen Nucleus API

OpenAPI spec version: 1.9.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.20

=end

require 'date'

module SwaggerClient
  # Account Object
  class Account
    # accountNumber
    attr_accessor :account_number

    # accountTypeId
    attr_accessor :account_type_id

    attr_accessor :clients

    attr_accessor :create_date

    # currencyCode
    attr_accessor :currency_code

    # discretionary
    attr_accessor :discretionary

    attr_accessor :goals

    attr_accessor :id

    # isActive
    attr_accessor :is_active

    # managed
    attr_accessor :managed

    attr_accessor :metadata

    # name
    attr_accessor :name

    attr_accessor :secondary_id

    # status
    attr_accessor :status

    attr_accessor :update_date

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'account_number' => :'account_number',
        :'account_type_id' => :'account_type_id',
        :'clients' => :'clients',
        :'create_date' => :'create_date',
        :'currency_code' => :'currency_code',
        :'discretionary' => :'discretionary',
        :'goals' => :'goals',
        :'id' => :'id',
        :'is_active' => :'is_active',
        :'managed' => :'managed',
        :'metadata' => :'metadata',
        :'name' => :'name',
        :'secondary_id' => :'secondary_id',
        :'status' => :'status',
        :'update_date' => :'update_date'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'account_number' => :'String',
        :'account_type_id' => :'String',
        :'clients' => :'Array<ClientAccountMapping>',
        :'create_date' => :'DateTime',
        :'currency_code' => :'String',
        :'discretionary' => :'BOOLEAN',
        :'goals' => :'Array<GoalAccountMapping>',
        :'id' => :'String',
        :'is_active' => :'BOOLEAN',
        :'managed' => :'BOOLEAN',
        :'metadata' => :'Hash<String, String>',
        :'name' => :'String',
        :'secondary_id' => :'String',
        :'status' => :'String',
        :'update_date' => :'DateTime'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'account_number')
        self.account_number = attributes[:'account_number']
      end

      if attributes.has_key?(:'account_type_id')
        self.account_type_id = attributes[:'account_type_id']
      end

      if attributes.has_key?(:'clients')
        if (value = attributes[:'clients']).is_a?(Array)
          self.clients = value
        end
      end

      if attributes.has_key?(:'create_date')
        self.create_date = attributes[:'create_date']
      end

      if attributes.has_key?(:'currency_code')
        self.currency_code = attributes[:'currency_code']
      end

      if attributes.has_key?(:'discretionary')
        self.discretionary = attributes[:'discretionary']
      end

      if attributes.has_key?(:'goals')
        if (value = attributes[:'goals']).is_a?(Array)
          self.goals = value
        end
      end

      if attributes.has_key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.has_key?(:'is_active')
        self.is_active = attributes[:'is_active']
      end

      if attributes.has_key?(:'managed')
        self.managed = attributes[:'managed']
      end

      if attributes.has_key?(:'metadata')
        if (value = attributes[:'metadata']).is_a?(Hash)
          self.metadata = value
        end
      end

      if attributes.has_key?(:'name')
        self.name = attributes[:'name']
      end

      if attributes.has_key?(:'secondary_id')
        self.secondary_id = attributes[:'secondary_id']
      end

      if attributes.has_key?(:'status')
        self.status = attributes[:'status']
      end

      if attributes.has_key?(:'update_date')
        self.update_date = attributes[:'update_date']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @account_type_id.nil?
        invalid_properties.push('invalid value for "account_type_id", account_type_id cannot be nil.')
      end

      if @name.nil?
        invalid_properties.push('invalid value for "name", name cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @account_type_id.nil?
      return false if @name.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          account_number == o.account_number &&
          account_type_id == o.account_type_id &&
          clients == o.clients &&
          create_date == o.create_date &&
          currency_code == o.currency_code &&
          discretionary == o.discretionary &&
          goals == o.goals &&
          id == o.id &&
          is_active == o.is_active &&
          managed == o.managed &&
          metadata == o.metadata &&
          name == o.name &&
          secondary_id == o.secondary_id &&
          status == o.status &&
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
      [account_number, account_type_id, clients, create_date, currency_code, discretionary, goals, id, is_active, managed, metadata, name, secondary_id, status, update_date].hash
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
        temp_model = SwaggerClient.const_get(type).new
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
