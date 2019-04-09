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
  class CreateOrderResponse
    # The ID referring to the transaction codes defined by your firm
    attr_accessor :transaction_code_id

    # The number of shares of security being bought or sold
    attr_accessor :quantity

    # The ID of the security being bought or sold
    attr_accessor :security_id

    # Date for when the order was generated
    attr_accessor :date

    # Price of the security at the time the order is created. Should be provided to use the rebalancing functionality
    attr_accessor :price

    # In the case that the order is part of a bulk order, the ID of the bulk order
    attr_accessor :order_bulk_id

    # Indicator for whether or not the order record has been read. Defaults to false which indicates that it has not been read
    attr_accessor :is_read

    # Type of the order transaction
    attr_accessor :order_type

    # The ID that reflects all orders generated during a rebalance
    attr_accessor :order_ticket_id

    # The ID of the portfolio that the order falls under. Used when aggregating order records into Bulk Order
    attr_accessor :portfolio_id

    # The ID of the account that the order falls under. Used when aggregating order records into Bulk Order
    attr_accessor :account_id

    # The ID of the model with which the order is associated. Used when aggregating order records into Bulk Order
    attr_accessor :model_id

    # Custom information associated with the order record in the format key:value
    attr_accessor :metadata

    # ID of the order record
    attr_accessor :id

    # Datetime the order record was created
    attr_accessor :create_date

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'transaction_code_id' => :'transaction_code_id',
        :'quantity' => :'quantity',
        :'security_id' => :'security_id',
        :'date' => :'date',
        :'price' => :'price',
        :'order_bulk_id' => :'order_bulk_id',
        :'is_read' => :'is_read',
        :'order_type' => :'order_type',
        :'order_ticket_id' => :'order_ticket_id',
        :'portfolio_id' => :'portfolio_id',
        :'account_id' => :'account_id',
        :'model_id' => :'model_id',
        :'metadata' => :'metadata',
        :'id' => :'id',
        :'create_date' => :'create_date'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'transaction_code_id' => :'String',
        :'quantity' => :'Float',
        :'security_id' => :'String',
        :'date' => :'Date',
        :'price' => :'Float',
        :'order_bulk_id' => :'String',
        :'is_read' => :'BOOLEAN',
        :'order_type' => :'String',
        :'order_ticket_id' => :'String',
        :'portfolio_id' => :'String',
        :'account_id' => :'String',
        :'model_id' => :'String',
        :'metadata' => :'Object',
        :'id' => :'String',
        :'create_date' => :'String'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'transaction_code_id')
        self.transaction_code_id = attributes[:'transaction_code_id']
      end

      if attributes.has_key?(:'quantity')
        self.quantity = attributes[:'quantity']
      end

      if attributes.has_key?(:'security_id')
        self.security_id = attributes[:'security_id']
      end

      if attributes.has_key?(:'date')
        self.date = attributes[:'date']
      end

      if attributes.has_key?(:'price')
        self.price = attributes[:'price']
      end

      if attributes.has_key?(:'order_bulk_id')
        self.order_bulk_id = attributes[:'order_bulk_id']
      end

      if attributes.has_key?(:'is_read')
        self.is_read = attributes[:'is_read']
      else
        self.is_read = false
      end

      if attributes.has_key?(:'order_type')
        self.order_type = attributes[:'order_type']
      end

      if attributes.has_key?(:'order_ticket_id')
        self.order_ticket_id = attributes[:'order_ticket_id']
      end

      if attributes.has_key?(:'portfolio_id')
        self.portfolio_id = attributes[:'portfolio_id']
      end

      if attributes.has_key?(:'account_id')
        self.account_id = attributes[:'account_id']
      end

      if attributes.has_key?(:'model_id')
        self.model_id = attributes[:'model_id']
      end

      if attributes.has_key?(:'metadata')
        self.metadata = attributes[:'metadata']
      end

      if attributes.has_key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.has_key?(:'create_date')
        self.create_date = attributes[:'create_date']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @transaction_code_id.nil?
        invalid_properties.push('invalid value for "transaction_code_id", transaction_code_id cannot be nil.')
      end

      if @quantity.nil?
        invalid_properties.push('invalid value for "quantity", quantity cannot be nil.')
      end

      if @security_id.nil?
        invalid_properties.push('invalid value for "security_id", security_id cannot be nil.')
      end

      if @date.nil?
        invalid_properties.push('invalid value for "date", date cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @transaction_code_id.nil?
      return false if @quantity.nil?
      return false if @security_id.nil?
      return false if @date.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          transaction_code_id == o.transaction_code_id &&
          quantity == o.quantity &&
          security_id == o.security_id &&
          date == o.date &&
          price == o.price &&
          order_bulk_id == o.order_bulk_id &&
          is_read == o.is_read &&
          order_type == o.order_type &&
          order_ticket_id == o.order_ticket_id &&
          portfolio_id == o.portfolio_id &&
          account_id == o.account_id &&
          model_id == o.model_id &&
          metadata == o.metadata &&
          id == o.id &&
          create_date == o.create_date
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [transaction_code_id, quantity, security_id, date, price, order_bulk_id, is_read, order_type, order_ticket_id, portfolio_id, account_id, model_id, metadata, id, create_date].hash
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
