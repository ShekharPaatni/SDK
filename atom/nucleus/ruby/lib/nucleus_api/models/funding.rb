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
  # Funding Object
  class Funding
    # accountId
    attr_accessor :account_id

    # amount
    attr_accessor :amount

    # bankLinkId
    attr_accessor :bank_link_id

    # cardId
    attr_accessor :card_id

    attr_accessor :create_date

    # currencyCode
    attr_accessor :currency_code

    # description
    attr_accessor :description

    # endDate
    attr_accessor :end_date

    # frequency
    attr_accessor :frequency

    # frequencyUnit
    attr_accessor :frequency_unit

    # fundingStatus
    attr_accessor :funding_status

    # fundingType
    attr_accessor :funding_type

    attr_accessor :id

    # isActive
    attr_accessor :is_active

    # isDeposit
    attr_accessor :is_deposit

    # lastRequestDate
    attr_accessor :last_request_date

    # metadata
    attr_accessor :metadata

    # nextRequestDate
    attr_accessor :next_request_date

    # portfolioId
    attr_accessor :portfolio_id

    # receivingAccountId
    attr_accessor :receiving_account_id

    # receivingBankLinkId
    attr_accessor :receiving_bank_link_id

    # receivingPortfolioId
    attr_accessor :receiving_portfolio_id

    attr_accessor :secondary_id

    # startDate
    attr_accessor :start_date

    # supportTicketId
    attr_accessor :support_ticket_id

    # thresholdAmount
    attr_accessor :threshold_amount

    # transferId
    attr_accessor :transfer_id

    # transferSpeed
    attr_accessor :transfer_speed

    # transferType
    attr_accessor :transfer_type

    attr_accessor :update_date

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'account_id' => :'account_id',
        :'amount' => :'amount',
        :'bank_link_id' => :'bank_link_id',
        :'card_id' => :'card_id',
        :'create_date' => :'create_date',
        :'currency_code' => :'currency_code',
        :'description' => :'description',
        :'end_date' => :'end_date',
        :'frequency' => :'frequency',
        :'frequency_unit' => :'frequency_unit',
        :'funding_status' => :'funding_status',
        :'funding_type' => :'funding_type',
        :'id' => :'id',
        :'is_active' => :'is_active',
        :'is_deposit' => :'is_deposit',
        :'last_request_date' => :'last_request_date',
        :'metadata' => :'metadata',
        :'next_request_date' => :'next_request_date',
        :'portfolio_id' => :'portfolio_id',
        :'receiving_account_id' => :'receiving_account_id',
        :'receiving_bank_link_id' => :'receiving_bank_link_id',
        :'receiving_portfolio_id' => :'receiving_portfolio_id',
        :'secondary_id' => :'secondary_id',
        :'start_date' => :'start_date',
        :'support_ticket_id' => :'support_ticket_id',
        :'threshold_amount' => :'threshold_amount',
        :'transfer_id' => :'transfer_id',
        :'transfer_speed' => :'transfer_speed',
        :'transfer_type' => :'transfer_type',
        :'update_date' => :'update_date'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'account_id' => :'String',
        :'amount' => :'Float',
        :'bank_link_id' => :'String',
        :'card_id' => :'String',
        :'create_date' => :'DateTime',
        :'currency_code' => :'String',
        :'description' => :'String',
        :'end_date' => :'Date',
        :'frequency' => :'Integer',
        :'frequency_unit' => :'String',
        :'funding_status' => :'String',
        :'funding_type' => :'String',
        :'id' => :'String',
        :'is_active' => :'BOOLEAN',
        :'is_deposit' => :'BOOLEAN',
        :'last_request_date' => :'Date',
        :'metadata' => :'Hash<String, String>',
        :'next_request_date' => :'Date',
        :'portfolio_id' => :'String',
        :'receiving_account_id' => :'String',
        :'receiving_bank_link_id' => :'String',
        :'receiving_portfolio_id' => :'String',
        :'secondary_id' => :'String',
        :'start_date' => :'Date',
        :'support_ticket_id' => :'String',
        :'threshold_amount' => :'Float',
        :'transfer_id' => :'String',
        :'transfer_speed' => :'String',
        :'transfer_type' => :'String',
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

      if attributes.has_key?(:'amount')
        self.amount = attributes[:'amount']
      end

      if attributes.has_key?(:'bank_link_id')
        self.bank_link_id = attributes[:'bank_link_id']
      end

      if attributes.has_key?(:'card_id')
        self.card_id = attributes[:'card_id']
      end

      if attributes.has_key?(:'create_date')
        self.create_date = attributes[:'create_date']
      end

      if attributes.has_key?(:'currency_code')
        self.currency_code = attributes[:'currency_code']
      end

      if attributes.has_key?(:'description')
        self.description = attributes[:'description']
      end

      if attributes.has_key?(:'end_date')
        self.end_date = attributes[:'end_date']
      end

      if attributes.has_key?(:'frequency')
        self.frequency = attributes[:'frequency']
      end

      if attributes.has_key?(:'frequency_unit')
        self.frequency_unit = attributes[:'frequency_unit']
      end

      if attributes.has_key?(:'funding_status')
        self.funding_status = attributes[:'funding_status']
      end

      if attributes.has_key?(:'funding_type')
        self.funding_type = attributes[:'funding_type']
      end

      if attributes.has_key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.has_key?(:'is_active')
        self.is_active = attributes[:'is_active']
      end

      if attributes.has_key?(:'is_deposit')
        self.is_deposit = attributes[:'is_deposit']
      end

      if attributes.has_key?(:'last_request_date')
        self.last_request_date = attributes[:'last_request_date']
      end

      if attributes.has_key?(:'metadata')
        if (value = attributes[:'metadata']).is_a?(Hash)
          self.metadata = value
        end
      end

      if attributes.has_key?(:'next_request_date')
        self.next_request_date = attributes[:'next_request_date']
      end

      if attributes.has_key?(:'portfolio_id')
        self.portfolio_id = attributes[:'portfolio_id']
      end

      if attributes.has_key?(:'receiving_account_id')
        self.receiving_account_id = attributes[:'receiving_account_id']
      end

      if attributes.has_key?(:'receiving_bank_link_id')
        self.receiving_bank_link_id = attributes[:'receiving_bank_link_id']
      end

      if attributes.has_key?(:'receiving_portfolio_id')
        self.receiving_portfolio_id = attributes[:'receiving_portfolio_id']
      end

      if attributes.has_key?(:'secondary_id')
        self.secondary_id = attributes[:'secondary_id']
      end

      if attributes.has_key?(:'start_date')
        self.start_date = attributes[:'start_date']
      end

      if attributes.has_key?(:'support_ticket_id')
        self.support_ticket_id = attributes[:'support_ticket_id']
      end

      if attributes.has_key?(:'threshold_amount')
        self.threshold_amount = attributes[:'threshold_amount']
      end

      if attributes.has_key?(:'transfer_id')
        self.transfer_id = attributes[:'transfer_id']
      end

      if attributes.has_key?(:'transfer_speed')
        self.transfer_speed = attributes[:'transfer_speed']
      end

      if attributes.has_key?(:'transfer_type')
        self.transfer_type = attributes[:'transfer_type']
      end

      if attributes.has_key?(:'update_date')
        self.update_date = attributes[:'update_date']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @frequency_unit.nil?
        invalid_properties.push('invalid value for "frequency_unit", frequency_unit cannot be nil.')
      end

      if @funding_status.nil?
        invalid_properties.push('invalid value for "funding_status", funding_status cannot be nil.')
      end

      if @funding_type.nil?
        invalid_properties.push('invalid value for "funding_type", funding_type cannot be nil.')
      end

      if @is_deposit.nil?
        invalid_properties.push('invalid value for "is_deposit", is_deposit cannot be nil.')
      end

      if @start_date.nil?
        invalid_properties.push('invalid value for "start_date", start_date cannot be nil.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @frequency_unit.nil?
      return false if @funding_status.nil?
      return false if @funding_type.nil?
      return false if @is_deposit.nil?
      return false if @start_date.nil?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          account_id == o.account_id &&
          amount == o.amount &&
          bank_link_id == o.bank_link_id &&
          card_id == o.card_id &&
          create_date == o.create_date &&
          currency_code == o.currency_code &&
          description == o.description &&
          end_date == o.end_date &&
          frequency == o.frequency &&
          frequency_unit == o.frequency_unit &&
          funding_status == o.funding_status &&
          funding_type == o.funding_type &&
          id == o.id &&
          is_active == o.is_active &&
          is_deposit == o.is_deposit &&
          last_request_date == o.last_request_date &&
          metadata == o.metadata &&
          next_request_date == o.next_request_date &&
          portfolio_id == o.portfolio_id &&
          receiving_account_id == o.receiving_account_id &&
          receiving_bank_link_id == o.receiving_bank_link_id &&
          receiving_portfolio_id == o.receiving_portfolio_id &&
          secondary_id == o.secondary_id &&
          start_date == o.start_date &&
          support_ticket_id == o.support_ticket_id &&
          threshold_amount == o.threshold_amount &&
          transfer_id == o.transfer_id &&
          transfer_speed == o.transfer_speed &&
          transfer_type == o.transfer_type &&
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
      [account_id, amount, bank_link_id, card_id, create_date, currency_code, description, end_date, frequency, frequency_unit, funding_status, funding_type, id, is_active, is_deposit, last_request_date, metadata, next_request_date, portfolio_id, receiving_account_id, receiving_bank_link_id, receiving_portfolio_id, secondary_id, start_date, support_ticket_id, threshold_amount, transfer_id, transfer_speed, transfer_type, update_date].hash
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
