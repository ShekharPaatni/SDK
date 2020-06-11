=begin
#Hydrogen Atom API

#The Hydrogen Atom API

OpenAPI spec version: 1.7.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.14

=end

require 'date'

module AtomApi
  # DailyDeposit Object
  class DailyDeposit
    # accountId
    attr_accessor :account_id

    # accountNumber
    attr_accessor :account_number

    # amount
    attr_accessor :amount

    # comments
    attr_accessor :comments

    attr_accessor :create_date

    # currencyCode
    attr_accessor :currency_code

    # direction
    attr_accessor :direction

    # fundingId
    attr_accessor :funding_id

    attr_accessor :id

    # investedDate
    attr_accessor :invested_date

    # last_request_date
    attr_accessor :last_request_date

    attr_accessor :metadata

    # notes
    attr_accessor :notes

    # portfolio_id
    attr_accessor :portfolio_id

    # receivedDate
    attr_accessor :received_date

    attr_accessor :secondary_id

    # status
    attr_accessor :status

    # statusTimeStamp
    attr_accessor :status_time_stamp

    # type
    attr_accessor :type

    attr_accessor :update_date

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'account_id' => :'account_id',
        :'account_number' => :'account_number',
        :'amount' => :'amount',
        :'comments' => :'comments',
        :'create_date' => :'create_date',
        :'currency_code' => :'currency_code',
        :'direction' => :'direction',
        :'funding_id' => :'funding_id',
        :'id' => :'id',
        :'invested_date' => :'invested_date',
        :'last_request_date' => :'last_request_date',
        :'metadata' => :'metadata',
        :'notes' => :'notes',
        :'portfolio_id' => :'portfolio_id',
        :'received_date' => :'received_date',
        :'secondary_id' => :'secondary_id',
        :'status' => :'status',
        :'status_time_stamp' => :'status_time_stamp',
        :'type' => :'type',
        :'update_date' => :'update_date'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'account_id' => :'String',
        :'account_number' => :'String',
        :'amount' => :'Float',
        :'comments' => :'String',
        :'create_date' => :'DateTime',
        :'currency_code' => :'String',
        :'direction' => :'String',
        :'funding_id' => :'String',
        :'id' => :'String',
        :'invested_date' => :'DateTime',
        :'last_request_date' => :'DateTime',
        :'metadata' => :'Hash<String, String>',
        :'notes' => :'String',
        :'portfolio_id' => :'String',
        :'received_date' => :'DateTime',
        :'secondary_id' => :'String',
        :'status' => :'String',
        :'status_time_stamp' => :'DateTime',
        :'type' => :'String',
        :'update_date' => :'DateTime'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'account_id')
        self.account_id = attributes[:'account_id']
      end

      if attributes.has_key?(:'account_number')
        self.account_number = attributes[:'account_number']
      end

      if attributes.has_key?(:'amount')
        self.amount = attributes[:'amount']
      end

      if attributes.has_key?(:'comments')
        self.comments = attributes[:'comments']
      end

      if attributes.has_key?(:'create_date')
        self.create_date = attributes[:'create_date']
      end

      if attributes.has_key?(:'currency_code')
        self.currency_code = attributes[:'currency_code']
      end

      if attributes.has_key?(:'direction')
        self.direction = attributes[:'direction']
      end

      if attributes.has_key?(:'funding_id')
        self.funding_id = attributes[:'funding_id']
      end

      if attributes.has_key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.has_key?(:'invested_date')
        self.invested_date = attributes[:'invested_date']
      end

      if attributes.has_key?(:'last_request_date')
        self.last_request_date = attributes[:'last_request_date']
      end

      if attributes.has_key?(:'metadata')
        if (value = attributes[:'metadata']).is_a?(Hash)
          self.metadata = value
        end
      end

      if attributes.has_key?(:'notes')
        self.notes = attributes[:'notes']
      end

      if attributes.has_key?(:'portfolio_id')
        self.portfolio_id = attributes[:'portfolio_id']
      end

      if attributes.has_key?(:'received_date')
        self.received_date = attributes[:'received_date']
      end

      if attributes.has_key?(:'secondary_id')
        self.secondary_id = attributes[:'secondary_id']
      end

      if attributes.has_key?(:'status')
        self.status = attributes[:'status']
      end

      if attributes.has_key?(:'status_time_stamp')
        self.status_time_stamp = attributes[:'status_time_stamp']
      end

      if attributes.has_key?(:'type')
        self.type = attributes[:'type']
      end

      if attributes.has_key?(:'update_date')
        self.update_date = attributes[:'update_date']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @account_id.nil?
        invalid_properties.push('invalid value for "account_id", account_id cannot be nil.')
      end

      if @amount.nil?
        invalid_properties.push('invalid value for "amount", amount cannot be nil.')
      end

      if @funding_id.nil?
        invalid_properties.push('invalid value for "funding_id", funding_id cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @account_id.nil?
      return false if @amount.nil?
      return false if @funding_id.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          account_id == o.account_id &&
          account_number == o.account_number &&
          amount == o.amount &&
          comments == o.comments &&
          create_date == o.create_date &&
          currency_code == o.currency_code &&
          direction == o.direction &&
          funding_id == o.funding_id &&
          id == o.id &&
          invested_date == o.invested_date &&
          last_request_date == o.last_request_date &&
          metadata == o.metadata &&
          notes == o.notes &&
          portfolio_id == o.portfolio_id &&
          received_date == o.received_date &&
          secondary_id == o.secondary_id &&
          status == o.status &&
          status_time_stamp == o.status_time_stamp &&
          type == o.type &&
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
      [account_id, account_number, amount, comments, create_date, currency_code, direction, funding_id, id, invested_date, last_request_date, metadata, notes, portfolio_id, received_date, secondary_id, status, status_time_stamp, type, update_date].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
        def build_from_hash(attributes)
      self.class.swagger_types.each_pair do |key, type|
        if type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        elsif attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", attributes[self.class.attribute_map[key]])
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
    temp_model = AtomApi.const_get(type).new
    temp_model.build_from_hash(value)
  end
end# Returns the string representation of the object
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
