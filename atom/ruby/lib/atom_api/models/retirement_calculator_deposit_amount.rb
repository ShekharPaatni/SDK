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
  class RetirementCalculatorDepositAmount
    # Current age of the user
    attr_accessor :current_age

    # Expected death age
    attr_accessor :death_age

    # Annual retirement expenses
    attr_accessor :retirement_expenses

    # The annualized portfolio return
    attr_accessor :portfolio_return

    # The age of retirement
    attr_accessor :retirement_age

    # Percentage of current expenses needed during retirement
    attr_accessor :percent_of_expenses_covered

    # Current amount of retirement savings
    attr_accessor :retirement_savings

    # Expected retirement income
    attr_accessor :retirement_income

    attr_accessor :deposit_schedule

    # The annualized inflation rate
    attr_accessor :inflation_rate

    # The expected tax rate in retirement
    attr_accessor :retirement_tax

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'current_age' => :'current_age',
        :'death_age' => :'death_age',
        :'retirement_expenses' => :'retirement_expenses',
        :'portfolio_return' => :'portfolio_return',
        :'retirement_age' => :'retirement_age',
        :'percent_of_expenses_covered' => :'percent_of_expenses_covered',
        :'retirement_savings' => :'retirement_savings',
        :'retirement_income' => :'retirement_income',
        :'deposit_schedule' => :'deposit_schedule',
        :'inflation_rate' => :'inflation_rate',
        :'retirement_tax' => :'retirement_tax'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'current_age' => :'Integer',
        :'death_age' => :'Integer',
        :'retirement_expenses' => :'Float',
        :'portfolio_return' => :'Float',
        :'retirement_age' => :'Integer',
        :'percent_of_expenses_covered' => :'Float',
        :'retirement_savings' => :'Float',
        :'retirement_income' => :'Float',
        :'deposit_schedule' => :'Object',
        :'inflation_rate' => :'Float',
        :'retirement_tax' => :'Float'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'current_age')
        self.current_age = attributes[:'current_age']
      end

      if attributes.has_key?(:'death_age')
        self.death_age = attributes[:'death_age']
      end

      if attributes.has_key?(:'retirement_expenses')
        self.retirement_expenses = attributes[:'retirement_expenses']
      end

      if attributes.has_key?(:'portfolio_return')
        self.portfolio_return = attributes[:'portfolio_return']
      end

      if attributes.has_key?(:'retirement_age')
        self.retirement_age = attributes[:'retirement_age']
      end

      if attributes.has_key?(:'percent_of_expenses_covered')
        self.percent_of_expenses_covered = attributes[:'percent_of_expenses_covered']
      end

      if attributes.has_key?(:'retirement_savings')
        self.retirement_savings = attributes[:'retirement_savings']
      end

      if attributes.has_key?(:'retirement_income')
        self.retirement_income = attributes[:'retirement_income']
      end

      if attributes.has_key?(:'deposit_schedule')
        self.deposit_schedule = attributes[:'deposit_schedule']
      end

      if attributes.has_key?(:'inflation_rate')
        self.inflation_rate = attributes[:'inflation_rate']
      end

      if attributes.has_key?(:'retirement_tax')
        self.retirement_tax = attributes[:'retirement_tax']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @current_age.nil?
        invalid_properties.push('invalid value for "current_age", current_age cannot be nil.')
      end

      if @current_age < 0
        invalid_properties.push('invalid value for "current_age", must be greater than or equal to 0.')
      end

      if @death_age.nil?
        invalid_properties.push('invalid value for "death_age", death_age cannot be nil.')
      end

      if @death_age < 0
        invalid_properties.push('invalid value for "death_age", must be greater than or equal to 0.')
      end

      if @retirement_expenses.nil?
        invalid_properties.push('invalid value for "retirement_expenses", retirement_expenses cannot be nil.')
      end

      if @retirement_expenses < 0
        invalid_properties.push('invalid value for "retirement_expenses", must be greater than or equal to 0.')
      end

      if @portfolio_return.nil?
        invalid_properties.push('invalid value for "portfolio_return", portfolio_return cannot be nil.')
      end

      if @portfolio_return < -1
        invalid_properties.push('invalid value for "portfolio_return", must be greater than or equal to -1.')
      end

      if !@retirement_age.nil? && @retirement_age < 0
        invalid_properties.push('invalid value for "retirement_age", must be greater than or equal to 0.')
      end

      if !@percent_of_expenses_covered.nil? && @percent_of_expenses_covered > 1
        invalid_properties.push('invalid value for "percent_of_expenses_covered", must be smaller than or equal to 1.')
      end

      if !@percent_of_expenses_covered.nil? && @percent_of_expenses_covered <= 0
        invalid_properties.push('invalid value for "percent_of_expenses_covered", must be greater than 0.')
      end

      if !@retirement_savings.nil? && @retirement_savings < 0
        invalid_properties.push('invalid value for "retirement_savings", must be greater than or equal to 0.')
      end

      if !@retirement_income.nil? && @retirement_income < 0
        invalid_properties.push('invalid value for "retirement_income", must be greater than or equal to 0.')
      end

      if !@inflation_rate.nil? && @inflation_rate < -1
        invalid_properties.push('invalid value for "inflation_rate", must be greater than or equal to -1.')
      end

      if !@retirement_tax.nil? && @retirement_tax > 1
        invalid_properties.push('invalid value for "retirement_tax", must be smaller than or equal to 1.')
      end

      if !@retirement_tax.nil? && @retirement_tax < 0
        invalid_properties.push('invalid value for "retirement_tax", must be greater than or equal to 0.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @current_age.nil?
      return false if @current_age < 0
      return false if @death_age.nil?
      return false if @death_age < 0
      return false if @retirement_expenses.nil?
      return false if @retirement_expenses < 0
      return false if @portfolio_return.nil?
      return false if @portfolio_return < -1
      return false if !@retirement_age.nil? && @retirement_age < 0
      return false if !@percent_of_expenses_covered.nil? && @percent_of_expenses_covered > 1
      return false if !@percent_of_expenses_covered.nil? && @percent_of_expenses_covered <= 0
      return false if !@retirement_savings.nil? && @retirement_savings < 0
      return false if !@retirement_income.nil? && @retirement_income < 0
      return false if !@inflation_rate.nil? && @inflation_rate < -1
      return false if !@retirement_tax.nil? && @retirement_tax > 1
      return false if !@retirement_tax.nil? && @retirement_tax < 0
      true
    end

    # Custom attribute writer method with validation
    # @param [Object] current_age Value to be assigned
    def current_age=(current_age)
      if current_age.nil?
        fail ArgumentError, 'current_age cannot be nil'
      end

      if current_age < 0
        fail ArgumentError, 'invalid value for "current_age", must be greater than or equal to 0.'
      end

      @current_age = current_age
    end

    # Custom attribute writer method with validation
    # @param [Object] death_age Value to be assigned
    def death_age=(death_age)
      if death_age.nil?
        fail ArgumentError, 'death_age cannot be nil'
      end

      if death_age < 0
        fail ArgumentError, 'invalid value for "death_age", must be greater than or equal to 0.'
      end

      @death_age = death_age
    end

    # Custom attribute writer method with validation
    # @param [Object] retirement_expenses Value to be assigned
    def retirement_expenses=(retirement_expenses)
      if retirement_expenses.nil?
        fail ArgumentError, 'retirement_expenses cannot be nil'
      end

      if retirement_expenses < 0
        fail ArgumentError, 'invalid value for "retirement_expenses", must be greater than or equal to 0.'
      end

      @retirement_expenses = retirement_expenses
    end

    # Custom attribute writer method with validation
    # @param [Object] portfolio_return Value to be assigned
    def portfolio_return=(portfolio_return)
      if portfolio_return.nil?
        fail ArgumentError, 'portfolio_return cannot be nil'
      end

      if portfolio_return < -1
        fail ArgumentError, 'invalid value for "portfolio_return", must be greater than or equal to -1.'
      end

      @portfolio_return = portfolio_return
    end

    # Custom attribute writer method with validation
    # @param [Object] retirement_age Value to be assigned
    def retirement_age=(retirement_age)
      if !retirement_age.nil? && retirement_age < 0
        fail ArgumentError, 'invalid value for "retirement_age", must be greater than or equal to 0.'
      end

      @retirement_age = retirement_age
    end

    # Custom attribute writer method with validation
    # @param [Object] percent_of_expenses_covered Value to be assigned
    def percent_of_expenses_covered=(percent_of_expenses_covered)
      if !percent_of_expenses_covered.nil? && percent_of_expenses_covered > 1
        fail ArgumentError, 'invalid value for "percent_of_expenses_covered", must be smaller than or equal to 1.'
      end

      if !percent_of_expenses_covered.nil? && percent_of_expenses_covered <= 0
        fail ArgumentError, 'invalid value for "percent_of_expenses_covered", must be greater than 0.'
      end

      @percent_of_expenses_covered = percent_of_expenses_covered
    end

    # Custom attribute writer method with validation
    # @param [Object] retirement_savings Value to be assigned
    def retirement_savings=(retirement_savings)
      if !retirement_savings.nil? && retirement_savings < 0
        fail ArgumentError, 'invalid value for "retirement_savings", must be greater than or equal to 0.'
      end

      @retirement_savings = retirement_savings
    end

    # Custom attribute writer method with validation
    # @param [Object] retirement_income Value to be assigned
    def retirement_income=(retirement_income)
      if !retirement_income.nil? && retirement_income < 0
        fail ArgumentError, 'invalid value for "retirement_income", must be greater than or equal to 0.'
      end

      @retirement_income = retirement_income
    end

    # Custom attribute writer method with validation
    # @param [Object] inflation_rate Value to be assigned
    def inflation_rate=(inflation_rate)
      if !inflation_rate.nil? && inflation_rate < -1
        fail ArgumentError, 'invalid value for "inflation_rate", must be greater than or equal to -1.'
      end

      @inflation_rate = inflation_rate
    end

    # Custom attribute writer method with validation
    # @param [Object] retirement_tax Value to be assigned
    def retirement_tax=(retirement_tax)
      if !retirement_tax.nil? && retirement_tax > 1
        fail ArgumentError, 'invalid value for "retirement_tax", must be smaller than or equal to 1.'
      end

      if !retirement_tax.nil? && retirement_tax < 0
        fail ArgumentError, 'invalid value for "retirement_tax", must be greater than or equal to 0.'
      end

      @retirement_tax = retirement_tax
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          current_age == o.current_age &&
          death_age == o.death_age &&
          retirement_expenses == o.retirement_expenses &&
          portfolio_return == o.portfolio_return &&
          retirement_age == o.retirement_age &&
          percent_of_expenses_covered == o.percent_of_expenses_covered &&
          retirement_savings == o.retirement_savings &&
          retirement_income == o.retirement_income &&
          deposit_schedule == o.deposit_schedule &&
          inflation_rate == o.inflation_rate &&
          retirement_tax == o.retirement_tax
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [current_age, death_age, retirement_expenses, portfolio_return, retirement_age, percent_of_expenses_covered, retirement_savings, retirement_income, deposit_schedule, inflation_rate, retirement_tax].hash
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
