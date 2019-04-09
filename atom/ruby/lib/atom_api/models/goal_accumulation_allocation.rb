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
  class GoalAccumulationAllocation
    # The allocation universe source, either create or select
    attr_accessor :allocation_method

    # Priority when allocating, either risk or goal
    attr_accessor :allocation_priority

    attr_accessor :opt_config

    attr_accessor :allocations

    # The current amount invested
    attr_accessor :curr_inv

    # The accumulation goal horizon
    attr_accessor :horizon

    # Frequency in relation to the horizon
    attr_accessor :horizon_frequency

    attr_accessor :goal_config

    # The deposit attributes
    attr_accessor :deposit_config

    attr_accessor :recommendation_config

    # The type of recommended action
    attr_accessor :recommend_type

    # The confidence target
    attr_accessor :conf_tgt

    # The number of Monte Carlo simulations to run
    attr_accessor :n

    # If TRUE, remove outlying results
    attr_accessor :remove_outliers

    # The goal deviation threshold type
    attr_accessor :thresh_type

    # The goal deviation threshold value
    attr_accessor :thresh

    # The tax rate for withdrawals
    attr_accessor :withdrawal_tax

    # Days per year a portfolio trades
    attr_accessor :trading_days_per_year

    # The investor's risk score
    attr_accessor :risk_score

    # If true, adjust periodic deposit amounts for compounding based on compounding_rate. This applies when a deposit’s dep_frequency is shorter than horizon_frequency. Defaults to false.
    attr_accessor :adjust_for_compounding

    # The annualized rate to use when approximating a compounding effect on deposits. This value must be defined and adjust_for_compounding must be true in order to activate compounding adjustment. Defaults to 0.
    attr_accessor :compounding_rate

    class EnumAttributeValidator
      attr_reader :datatype
      attr_reader :allowable_values

      def initialize(datatype, allowable_values)
        @allowable_values = allowable_values.map do |value|
          case datatype.to_s
          when /Integer/i
            value.to_i
          when /Float/i
            value.to_f
          else
            value
          end
        end
      end

      def valid?(value)
        !value || allowable_values.include?(value)
      end
    end

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'allocation_method' => :'allocation_method',
        :'allocation_priority' => :'allocation_priority',
        :'opt_config' => :'opt_config',
        :'allocations' => :'allocations',
        :'curr_inv' => :'curr_inv',
        :'horizon' => :'horizon',
        :'horizon_frequency' => :'horizon_frequency',
        :'goal_config' => :'goal_config',
        :'deposit_config' => :'deposit_config',
        :'recommendation_config' => :'recommendation_config',
        :'recommend_type' => :'recommend_type',
        :'conf_tgt' => :'conf_tgt',
        :'n' => :'n',
        :'remove_outliers' => :'remove_outliers',
        :'thresh_type' => :'thresh_type',
        :'thresh' => :'thresh',
        :'withdrawal_tax' => :'withdrawal_tax',
        :'trading_days_per_year' => :'trading_days_per_year',
        :'risk_score' => :'risk_score',
        :'adjust_for_compounding' => :'adjust_for_compounding',
        :'compounding_rate' => :'compounding_rate'
      }
    end

    # Attribute type mapping.
    def self.swagger_types
      {
        :'allocation_method' => :'String',
        :'allocation_priority' => :'String',
        :'opt_config' => :'Object',
        :'allocations' => :'Array<String>',
        :'curr_inv' => :'Float',
        :'horizon' => :'Integer',
        :'horizon_frequency' => :'String',
        :'goal_config' => :'Object',
        :'deposit_config' => :'Array<GoalDepositConfig>',
        :'recommendation_config' => :'Object',
        :'recommend_type' => :'String',
        :'conf_tgt' => :'Float',
        :'n' => :'Integer',
        :'remove_outliers' => :'BOOLEAN',
        :'thresh_type' => :'String',
        :'thresh' => :'Float',
        :'withdrawal_tax' => :'Float',
        :'trading_days_per_year' => :'Integer',
        :'risk_score' => :'Integer',
        :'adjust_for_compounding' => :'BOOLEAN',
        :'compounding_rate' => :'Float'
      }
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      return unless attributes.is_a?(Hash)

      # convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h| h[k.to_sym] = v }

      if attributes.has_key?(:'allocation_method')
        self.allocation_method = attributes[:'allocation_method']
      end

      if attributes.has_key?(:'allocation_priority')
        self.allocation_priority = attributes[:'allocation_priority']
      end

      if attributes.has_key?(:'opt_config')
        self.opt_config = attributes[:'opt_config']
      end

      if attributes.has_key?(:'allocations')
        if (value = attributes[:'allocations']).is_a?(Array)
          self.allocations = value
        end
      end

      if attributes.has_key?(:'curr_inv')
        self.curr_inv = attributes[:'curr_inv']
      end

      if attributes.has_key?(:'horizon')
        self.horizon = attributes[:'horizon']
      end

      if attributes.has_key?(:'horizon_frequency')
        self.horizon_frequency = attributes[:'horizon_frequency']
      end

      if attributes.has_key?(:'goal_config')
        self.goal_config = attributes[:'goal_config']
      end

      if attributes.has_key?(:'deposit_config')
        if (value = attributes[:'deposit_config']).is_a?(Array)
          self.deposit_config = value
        end
      end

      if attributes.has_key?(:'recommendation_config')
        self.recommendation_config = attributes[:'recommendation_config']
      end

      if attributes.has_key?(:'recommend_type')
        self.recommend_type = attributes[:'recommend_type']
      else
        self.recommend_type = 'horizon'
      end

      if attributes.has_key?(:'conf_tgt')
        self.conf_tgt = attributes[:'conf_tgt']
      end

      if attributes.has_key?(:'n')
        self.n = attributes[:'n']
      end

      if attributes.has_key?(:'remove_outliers')
        self.remove_outliers = attributes[:'remove_outliers']
      else
        self.remove_outliers = true
      end

      if attributes.has_key?(:'thresh_type')
        self.thresh_type = attributes[:'thresh_type']
      else
        self.thresh_type = 'perc'
      end

      if attributes.has_key?(:'thresh')
        self.thresh = attributes[:'thresh']
      end

      if attributes.has_key?(:'withdrawal_tax')
        self.withdrawal_tax = attributes[:'withdrawal_tax']
      end

      if attributes.has_key?(:'trading_days_per_year')
        self.trading_days_per_year = attributes[:'trading_days_per_year']
      end

      if attributes.has_key?(:'risk_score')
        self.risk_score = attributes[:'risk_score']
      end

      if attributes.has_key?(:'adjust_for_compounding')
        self.adjust_for_compounding = attributes[:'adjust_for_compounding']
      else
        self.adjust_for_compounding = false
      end

      if attributes.has_key?(:'compounding_rate')
        self.compounding_rate = attributes[:'compounding_rate']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if @allocation_method.nil?
        invalid_properties.push('invalid value for "allocation_method", allocation_method cannot be nil.')
      end

      if @allocation_priority.nil?
        invalid_properties.push('invalid value for "allocation_priority", allocation_priority cannot be nil.')
      end

      if @curr_inv.nil?
        invalid_properties.push('invalid value for "curr_inv", curr_inv cannot be nil.')
      end

      if @curr_inv < 0
        invalid_properties.push('invalid value for "curr_inv", must be greater than or equal to 0.')
      end

      if @horizon.nil?
        invalid_properties.push('invalid value for "horizon", horizon cannot be nil.')
      end

      if @horizon >= 350
        invalid_properties.push('invalid value for "horizon", must be smaller than 350.')
      end

      if @horizon <= 0
        invalid_properties.push('invalid value for "horizon", must be greater than 0.')
      end

      if @horizon_frequency.nil?
        invalid_properties.push('invalid value for "horizon_frequency", horizon_frequency cannot be nil.')
      end

      if @goal_config.nil?
        invalid_properties.push('invalid value for "goal_config", goal_config cannot be nil.')
      end

      if !@conf_tgt.nil? && @conf_tgt > 1
        invalid_properties.push('invalid value for "conf_tgt", must be smaller than or equal to 1.')
      end

      if !@conf_tgt.nil? && @conf_tgt <= 0
        invalid_properties.push('invalid value for "conf_tgt", must be greater than 0.')
      end

      if !@n.nil? && @n > 10000
        invalid_properties.push('invalid value for "n", must be smaller than or equal to 10000.')
      end

      if !@n.nil? && @n <= 0
        invalid_properties.push('invalid value for "n", must be greater than 0.')
      end

      if !@thresh.nil? && @thresh < 0
        invalid_properties.push('invalid value for "thresh", must be greater than or equal to 0.')
      end

      if !@withdrawal_tax.nil? && @withdrawal_tax >= 1
        invalid_properties.push('invalid value for "withdrawal_tax", must be smaller than 1.')
      end

      if !@withdrawal_tax.nil? && @withdrawal_tax < 0
        invalid_properties.push('invalid value for "withdrawal_tax", must be greater than or equal to 0.')
      end

      if !@trading_days_per_year.nil? && @trading_days_per_year > 365
        invalid_properties.push('invalid value for "trading_days_per_year", must be smaller than or equal to 365.')
      end

      if !@trading_days_per_year.nil? && @trading_days_per_year <= 0
        invalid_properties.push('invalid value for "trading_days_per_year", must be greater than 0.')
      end

      if !@risk_score.nil? && @risk_score > 100
        invalid_properties.push('invalid value for "risk_score", must be smaller than or equal to 100.')
      end

      if !@risk_score.nil? && @risk_score < 0
        invalid_properties.push('invalid value for "risk_score", must be greater than or equal to 0.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if @allocation_method.nil?
      allocation_method_validator = EnumAttributeValidator.new('String', ['select', 'create'])
      return false unless allocation_method_validator.valid?(@allocation_method)
      return false if @allocation_priority.nil?
      allocation_priority_validator = EnumAttributeValidator.new('String', ['goal', 'risk'])
      return false unless allocation_priority_validator.valid?(@allocation_priority)
      return false if @curr_inv.nil?
      return false if @curr_inv < 0
      return false if @horizon.nil?
      return false if @horizon >= 350
      return false if @horizon <= 0
      return false if @horizon_frequency.nil?
      horizon_frequency_validator = EnumAttributeValidator.new('String', ['year', 'six_months', 'quarter', 'month', 'two_weeks', 'week', 'day'])
      return false unless horizon_frequency_validator.valid?(@horizon_frequency)
      return false if @goal_config.nil?
      recommend_type_validator = EnumAttributeValidator.new('String', ['recurring', 'one-time', 'combo', 'horizon'])
      return false unless recommend_type_validator.valid?(@recommend_type)
      return false if !@conf_tgt.nil? && @conf_tgt > 1
      return false if !@conf_tgt.nil? && @conf_tgt <= 0
      return false if !@n.nil? && @n > 10000
      return false if !@n.nil? && @n <= 0
      thresh_type_validator = EnumAttributeValidator.new('String', ['amnt', 'perc'])
      return false unless thresh_type_validator.valid?(@thresh_type)
      return false if !@thresh.nil? && @thresh < 0
      return false if !@withdrawal_tax.nil? && @withdrawal_tax >= 1
      return false if !@withdrawal_tax.nil? && @withdrawal_tax < 0
      return false if !@trading_days_per_year.nil? && @trading_days_per_year > 365
      return false if !@trading_days_per_year.nil? && @trading_days_per_year <= 0
      return false if !@risk_score.nil? && @risk_score > 100
      return false if !@risk_score.nil? && @risk_score < 0
      true
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] allocation_method Object to be assigned
    def allocation_method=(allocation_method)
      validator = EnumAttributeValidator.new('String', ['select', 'create'])
      unless validator.valid?(allocation_method)
        fail ArgumentError, 'invalid value for "allocation_method", must be one of #{validator.allowable_values}.'
      end
      @allocation_method = allocation_method
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] allocation_priority Object to be assigned
    def allocation_priority=(allocation_priority)
      validator = EnumAttributeValidator.new('String', ['goal', 'risk'])
      unless validator.valid?(allocation_priority)
        fail ArgumentError, 'invalid value for "allocation_priority", must be one of #{validator.allowable_values}.'
      end
      @allocation_priority = allocation_priority
    end

    # Custom attribute writer method with validation
    # @param [Object] curr_inv Value to be assigned
    def curr_inv=(curr_inv)
      if curr_inv.nil?
        fail ArgumentError, 'curr_inv cannot be nil'
      end

      if curr_inv < 0
        fail ArgumentError, 'invalid value for "curr_inv", must be greater than or equal to 0.'
      end

      @curr_inv = curr_inv
    end

    # Custom attribute writer method with validation
    # @param [Object] horizon Value to be assigned
    def horizon=(horizon)
      if horizon.nil?
        fail ArgumentError, 'horizon cannot be nil'
      end

      if horizon >= 350
        fail ArgumentError, 'invalid value for "horizon", must be smaller than 350.'
      end

      if horizon <= 0
        fail ArgumentError, 'invalid value for "horizon", must be greater than 0.'
      end

      @horizon = horizon
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] horizon_frequency Object to be assigned
    def horizon_frequency=(horizon_frequency)
      validator = EnumAttributeValidator.new('String', ['year', 'six_months', 'quarter', 'month', 'two_weeks', 'week', 'day'])
      unless validator.valid?(horizon_frequency)
        fail ArgumentError, 'invalid value for "horizon_frequency", must be one of #{validator.allowable_values}.'
      end
      @horizon_frequency = horizon_frequency
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] recommend_type Object to be assigned
    def recommend_type=(recommend_type)
      validator = EnumAttributeValidator.new('String', ['recurring', 'one-time', 'combo', 'horizon'])
      unless validator.valid?(recommend_type)
        fail ArgumentError, 'invalid value for "recommend_type", must be one of #{validator.allowable_values}.'
      end
      @recommend_type = recommend_type
    end

    # Custom attribute writer method with validation
    # @param [Object] conf_tgt Value to be assigned
    def conf_tgt=(conf_tgt)
      if !conf_tgt.nil? && conf_tgt > 1
        fail ArgumentError, 'invalid value for "conf_tgt", must be smaller than or equal to 1.'
      end

      if !conf_tgt.nil? && conf_tgt <= 0
        fail ArgumentError, 'invalid value for "conf_tgt", must be greater than 0.'
      end

      @conf_tgt = conf_tgt
    end

    # Custom attribute writer method with validation
    # @param [Object] n Value to be assigned
    def n=(n)
      if !n.nil? && n > 10000
        fail ArgumentError, 'invalid value for "n", must be smaller than or equal to 10000.'
      end

      if !n.nil? && n <= 0
        fail ArgumentError, 'invalid value for "n", must be greater than 0.'
      end

      @n = n
    end

    # Custom attribute writer method checking allowed values (enum).
    # @param [Object] thresh_type Object to be assigned
    def thresh_type=(thresh_type)
      validator = EnumAttributeValidator.new('String', ['amnt', 'perc'])
      unless validator.valid?(thresh_type)
        fail ArgumentError, 'invalid value for "thresh_type", must be one of #{validator.allowable_values}.'
      end
      @thresh_type = thresh_type
    end

    # Custom attribute writer method with validation
    # @param [Object] thresh Value to be assigned
    def thresh=(thresh)
      if !thresh.nil? && thresh < 0
        fail ArgumentError, 'invalid value for "thresh", must be greater than or equal to 0.'
      end

      @thresh = thresh
    end

    # Custom attribute writer method with validation
    # @param [Object] withdrawal_tax Value to be assigned
    def withdrawal_tax=(withdrawal_tax)
      if !withdrawal_tax.nil? && withdrawal_tax >= 1
        fail ArgumentError, 'invalid value for "withdrawal_tax", must be smaller than 1.'
      end

      if !withdrawal_tax.nil? && withdrawal_tax < 0
        fail ArgumentError, 'invalid value for "withdrawal_tax", must be greater than or equal to 0.'
      end

      @withdrawal_tax = withdrawal_tax
    end

    # Custom attribute writer method with validation
    # @param [Object] trading_days_per_year Value to be assigned
    def trading_days_per_year=(trading_days_per_year)
      if !trading_days_per_year.nil? && trading_days_per_year > 365
        fail ArgumentError, 'invalid value for "trading_days_per_year", must be smaller than or equal to 365.'
      end

      if !trading_days_per_year.nil? && trading_days_per_year <= 0
        fail ArgumentError, 'invalid value for "trading_days_per_year", must be greater than 0.'
      end

      @trading_days_per_year = trading_days_per_year
    end

    # Custom attribute writer method with validation
    # @param [Object] risk_score Value to be assigned
    def risk_score=(risk_score)
      if !risk_score.nil? && risk_score > 100
        fail ArgumentError, 'invalid value for "risk_score", must be smaller than or equal to 100.'
      end

      if !risk_score.nil? && risk_score < 0
        fail ArgumentError, 'invalid value for "risk_score", must be greater than or equal to 0.'
      end

      @risk_score = risk_score
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          allocation_method == o.allocation_method &&
          allocation_priority == o.allocation_priority &&
          opt_config == o.opt_config &&
          allocations == o.allocations &&
          curr_inv == o.curr_inv &&
          horizon == o.horizon &&
          horizon_frequency == o.horizon_frequency &&
          goal_config == o.goal_config &&
          deposit_config == o.deposit_config &&
          recommendation_config == o.recommendation_config &&
          recommend_type == o.recommend_type &&
          conf_tgt == o.conf_tgt &&
          n == o.n &&
          remove_outliers == o.remove_outliers &&
          thresh_type == o.thresh_type &&
          thresh == o.thresh &&
          withdrawal_tax == o.withdrawal_tax &&
          trading_days_per_year == o.trading_days_per_year &&
          risk_score == o.risk_score &&
          adjust_for_compounding == o.adjust_for_compounding &&
          compounding_rate == o.compounding_rate
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Fixnum] Hash code
    def hash
      [allocation_method, allocation_priority, opt_config, allocations, curr_inv, horizon, horizon_frequency, goal_config, deposit_config, recommendation_config, recommend_type, conf_tgt, n, remove_outliers, thresh_type, thresh, withdrawal_tax, trading_days_per_year, risk_score, adjust_for_compounding, compounding_rate].hash
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
