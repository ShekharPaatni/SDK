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
  # Card Details Object
  class CardDetailsVO
    # balance
    attr_accessor :balance

    # cardHolderName
    attr_accessor :card_holder_name

    # cardId
    attr_accessor :card_id

    # cardName
    attr_accessor :card_name

    # cardNetwork
    attr_accessor :card_network

    # cardType
    attr_accessor :card_type

    # expiryDate
    attr_accessor :expiry_date

    # mask
    attr_accessor :mask

    # prepaidAmount
    attr_accessor :prepaid_amount

    # status
    attr_accessor :status

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'balance' => :'balance',
        :'card_holder_name' => :'card_holder_name',
        :'card_id' => :'card_id',
        :'card_name' => :'card_name',
        :'card_network' => :'card_network',
        :'card_type' => :'card_type',
        :'expiry_date' => :'expiry_date',
        :'mask' => :'mask',
        :'prepaid_amount' => :'prepaid_amount',
        :'status' => :'status'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'balance' => :'CardBalanceVO',
        :'card_holder_name' => :'String',
        :'card_id' => :'String',
        :'card_name' => :'String',
        :'card_network' => :'String',
        :'card_type' => :'String',
        :'expiry_date' => :'Date',
        :'mask' => :'String',
        :'prepaid_amount' => :'Float',
        :'status' => :'String'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'balance')
        self.balance = attributes[:'balance']
      end

      if attributes.has_key?(:'card_holder_name')
        self.card_holder_name = attributes[:'card_holder_name']
      end

      if attributes.has_key?(:'card_id')
        self.card_id = attributes[:'card_id']
      end

      if attributes.has_key?(:'card_name')
        self.card_name = attributes[:'card_name']
      end

      if attributes.has_key?(:'card_network')
        self.card_network = attributes[:'card_network']
      end

      if attributes.has_key?(:'card_type')
        self.card_type = attributes[:'card_type']
      end

      if attributes.has_key?(:'expiry_date')
        self.expiry_date = attributes[:'expiry_date']
      end

      if attributes.has_key?(:'mask')
        self.mask = attributes[:'mask']
      end

      if attributes.has_key?(:'prepaid_amount')
        self.prepaid_amount = attributes[:'prepaid_amount']
      end

      if attributes.has_key?(:'status')
        self.status = attributes[:'status']
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
          balance == o.balance &&
          card_holder_name == o.card_holder_name &&
          card_id == o.card_id &&
          card_name == o.card_name &&
          card_network == o.card_network &&
          card_type == o.card_type &&
          expiry_date == o.expiry_date &&
          mask == o.mask &&
          prepaid_amount == o.prepaid_amount &&
          status == o.status
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [balance, card_holder_name, card_id, card_name, card_network, card_type, expiry_date, mask, prepaid_amount, status].hash
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
