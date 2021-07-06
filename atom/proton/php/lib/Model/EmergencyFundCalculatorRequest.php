<?php
/**
 * EmergencyFundCalculatorRequest
 *
 * PHP version 5
 *
 * @category Class
 * @package  com\hydrogen\proton
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Hydrogen Proton API
 *
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.9.1
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.19
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace com\hydrogen\proton\Model;

use \ArrayAccess;
use \com\hydrogen\proton\ObjectSerializer;

/**
 * EmergencyFundCalculatorRequest Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen\proton
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class EmergencyFundCalculatorRequest implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'emergencyFundCalculatorRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'client_id' => 'string',
        'savings_horizon' => 'int[]',
        'housing_cost' => 'float',
        'other_expenses' => 'object',
        'account_ids' => 'string[]',
        'utility_payments' => 'float',
        'food_costs' => 'float',
        'debt_payments' => 'float',
        'lookback_periods' => 'int',
        'frequency_unit' => 'string',
        'current_emergency_fund_balance' => 'float',
        'insurance_payments' => 'float',
        'telecom_payments' => 'float',
        'transportation_costs' => 'float',
        'interest_rate' => 'float',
        'emergency_fund_duration' => 'int',
        'aggregation_account_ids' => 'string[]'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'client_id' => 'uuid',
        'savings_horizon' => 'int32',
        'housing_cost' => 'float',
        'other_expenses' => null,
        'account_ids' => 'uuid',
        'utility_payments' => 'float',
        'food_costs' => 'float',
        'debt_payments' => 'float',
        'lookback_periods' => 'int32',
        'frequency_unit' => null,
        'current_emergency_fund_balance' => 'float',
        'insurance_payments' => 'float',
        'telecom_payments' => 'float',
        'transportation_costs' => 'float',
        'interest_rate' => 'float',
        'emergency_fund_duration' => 'int32',
        'aggregation_account_ids' => 'uuid'
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'client_id' => 'client_id',
        'savings_horizon' => 'savings_horizon',
        'housing_cost' => 'housing_cost',
        'other_expenses' => 'other_expenses',
        'account_ids' => 'account_ids',
        'utility_payments' => 'utility_payments',
        'food_costs' => 'food_costs',
        'debt_payments' => 'debt_payments',
        'lookback_periods' => 'lookback_periods',
        'frequency_unit' => 'frequency_unit',
        'current_emergency_fund_balance' => 'current_emergency_fund_balance',
        'insurance_payments' => 'insurance_payments',
        'telecom_payments' => 'telecom_payments',
        'transportation_costs' => 'transportation_costs',
        'interest_rate' => 'interest_rate',
        'emergency_fund_duration' => 'emergency_fund_duration',
        'aggregation_account_ids' => 'aggregation_account_ids'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'client_id' => 'setClientId',
        'savings_horizon' => 'setSavingsHorizon',
        'housing_cost' => 'setHousingCost',
        'other_expenses' => 'setOtherExpenses',
        'account_ids' => 'setAccountIds',
        'utility_payments' => 'setUtilityPayments',
        'food_costs' => 'setFoodCosts',
        'debt_payments' => 'setDebtPayments',
        'lookback_periods' => 'setLookbackPeriods',
        'frequency_unit' => 'setFrequencyUnit',
        'current_emergency_fund_balance' => 'setCurrentEmergencyFundBalance',
        'insurance_payments' => 'setInsurancePayments',
        'telecom_payments' => 'setTelecomPayments',
        'transportation_costs' => 'setTransportationCosts',
        'interest_rate' => 'setInterestRate',
        'emergency_fund_duration' => 'setEmergencyFundDuration',
        'aggregation_account_ids' => 'setAggregationAccountIds'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'client_id' => 'getClientId',
        'savings_horizon' => 'getSavingsHorizon',
        'housing_cost' => 'getHousingCost',
        'other_expenses' => 'getOtherExpenses',
        'account_ids' => 'getAccountIds',
        'utility_payments' => 'getUtilityPayments',
        'food_costs' => 'getFoodCosts',
        'debt_payments' => 'getDebtPayments',
        'lookback_periods' => 'getLookbackPeriods',
        'frequency_unit' => 'getFrequencyUnit',
        'current_emergency_fund_balance' => 'getCurrentEmergencyFundBalance',
        'insurance_payments' => 'getInsurancePayments',
        'telecom_payments' => 'getTelecomPayments',
        'transportation_costs' => 'getTransportationCosts',
        'interest_rate' => 'getInterestRate',
        'emergency_fund_duration' => 'getEmergencyFundDuration',
        'aggregation_account_ids' => 'getAggregationAccountIds'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }

    const FREQUENCY_UNIT_YEAR = 'year';
    const FREQUENCY_UNIT_SIX_MONTHS = 'six_months';
    const FREQUENCY_UNIT_QUARTER = 'quarter';
    const FREQUENCY_UNIT_MONTH = 'month';
    const FREQUENCY_UNIT_TWO_WEEKS = 'two_weeks';
    const FREQUENCY_UNIT_WEEK = 'week';
    

    
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getFrequencyUnitAllowableValues()
    {
        return [
            self::FREQUENCY_UNIT_YEAR,
            self::FREQUENCY_UNIT_SIX_MONTHS,
            self::FREQUENCY_UNIT_QUARTER,
            self::FREQUENCY_UNIT_MONTH,
            self::FREQUENCY_UNIT_TWO_WEEKS,
            self::FREQUENCY_UNIT_WEEK,
        ];
    }
    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['client_id'] = isset($data['client_id']) ? $data['client_id'] : null;
        $this->container['savings_horizon'] = isset($data['savings_horizon']) ? $data['savings_horizon'] : null;
        $this->container['housing_cost'] = isset($data['housing_cost']) ? $data['housing_cost'] : 0.0;
        $this->container['other_expenses'] = isset($data['other_expenses']) ? $data['other_expenses'] : null;
        $this->container['account_ids'] = isset($data['account_ids']) ? $data['account_ids'] : null;
        $this->container['utility_payments'] = isset($data['utility_payments']) ? $data['utility_payments'] : 0.0;
        $this->container['food_costs'] = isset($data['food_costs']) ? $data['food_costs'] : 0.0;
        $this->container['debt_payments'] = isset($data['debt_payments']) ? $data['debt_payments'] : 0.0;
        $this->container['lookback_periods'] = isset($data['lookback_periods']) ? $data['lookback_periods'] : 3;
        $this->container['frequency_unit'] = isset($data['frequency_unit']) ? $data['frequency_unit'] : 'month';
        $this->container['current_emergency_fund_balance'] = isset($data['current_emergency_fund_balance']) ? $data['current_emergency_fund_balance'] : 0.0;
        $this->container['insurance_payments'] = isset($data['insurance_payments']) ? $data['insurance_payments'] : 0.0;
        $this->container['telecom_payments'] = isset($data['telecom_payments']) ? $data['telecom_payments'] : 0.0;
        $this->container['transportation_costs'] = isset($data['transportation_costs']) ? $data['transportation_costs'] : 0.0;
        $this->container['interest_rate'] = isset($data['interest_rate']) ? $data['interest_rate'] : 0.0;
        $this->container['emergency_fund_duration'] = isset($data['emergency_fund_duration']) ? $data['emergency_fund_duration'] : null;
        $this->container['aggregation_account_ids'] = isset($data['aggregation_account_ids']) ? $data['aggregation_account_ids'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if (!is_null($this->container['housing_cost']) && ($this->container['housing_cost'] < 0)) {
            $invalidProperties[] = "invalid value for 'housing_cost', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['utility_payments']) && ($this->container['utility_payments'] < 0)) {
            $invalidProperties[] = "invalid value for 'utility_payments', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['food_costs']) && ($this->container['food_costs'] < 0)) {
            $invalidProperties[] = "invalid value for 'food_costs', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['debt_payments']) && ($this->container['debt_payments'] < 0)) {
            $invalidProperties[] = "invalid value for 'debt_payments', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['lookback_periods']) && ($this->container['lookback_periods'] < 1)) {
            $invalidProperties[] = "invalid value for 'lookback_periods', must be bigger than or equal to 1.";
        }

        $allowedValues = $this->getFrequencyUnitAllowableValues();
        if (!is_null($this->container['frequency_unit']) && !in_array($this->container['frequency_unit'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value for 'frequency_unit', must be one of '%s'",
                implode("', '", $allowedValues)
            );
        }

        if (!is_null($this->container['current_emergency_fund_balance']) && ($this->container['current_emergency_fund_balance'] < 0)) {
            $invalidProperties[] = "invalid value for 'current_emergency_fund_balance', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['insurance_payments']) && ($this->container['insurance_payments'] < 0)) {
            $invalidProperties[] = "invalid value for 'insurance_payments', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['telecom_payments']) && ($this->container['telecom_payments'] < 0)) {
            $invalidProperties[] = "invalid value for 'telecom_payments', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['transportation_costs']) && ($this->container['transportation_costs'] < 0)) {
            $invalidProperties[] = "invalid value for 'transportation_costs', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['interest_rate']) && ($this->container['interest_rate'] < 0)) {
            $invalidProperties[] = "invalid value for 'interest_rate', must be bigger than or equal to 0.";
        }

        if ($this->container['emergency_fund_duration'] === null) {
            $invalidProperties[] = "'emergency_fund_duration' can't be null";
        }
        if (($this->container['emergency_fund_duration'] < 1)) {
            $invalidProperties[] = "invalid value for 'emergency_fund_duration', must be bigger than or equal to 1.";
        }

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets client_id
     *
     * @return string
     */
    public function getClientId()
    {
        return $this->container['client_id'];
    }

    /**
     * Sets client_id
     *
     * @param string $client_id client_id
     *
     * @return $this
     */
    public function setClientId($client_id)
    {
        $this->container['client_id'] = $client_id;

        return $this;
    }

    /**
     * Gets savings_horizon
     *
     * @return int[]
     */
    public function getSavingsHorizon()
    {
        return $this->container['savings_horizon'];
    }

    /**
     * Sets savings_horizon
     *
     * @param int[] $savings_horizon savings_horizon
     *
     * @return $this
     */
    public function setSavingsHorizon($savings_horizon)
    {
        $this->container['savings_horizon'] = $savings_horizon;

        return $this;
    }

    /**
     * Gets housing_cost
     *
     * @return float
     */
    public function getHousingCost()
    {
        return $this->container['housing_cost'];
    }

    /**
     * Sets housing_cost
     *
     * @param float $housing_cost housing_cost
     *
     * @return $this
     */
    public function setHousingCost($housing_cost)
    {

        if (!is_null($housing_cost) && ($housing_cost < 0)) {
            throw new \InvalidArgumentException('invalid value for $housing_cost when calling EmergencyFundCalculatorRequest., must be bigger than or equal to 0.');
        }

        $this->container['housing_cost'] = $housing_cost;

        return $this;
    }

    /**
     * Gets other_expenses
     *
     * @return object
     */
    public function getOtherExpenses()
    {
        return $this->container['other_expenses'];
    }

    /**
     * Sets other_expenses
     *
     * @param object $other_expenses other_expenses
     *
     * @return $this
     */
    public function setOtherExpenses($other_expenses)
    {
        $this->container['other_expenses'] = $other_expenses;

        return $this;
    }

    /**
     * Gets account_ids
     *
     * @return string[]
     */
    public function getAccountIds()
    {
        return $this->container['account_ids'];
    }

    /**
     * Sets account_ids
     *
     * @param string[] $account_ids account_ids
     *
     * @return $this
     */
    public function setAccountIds($account_ids)
    {
        $this->container['account_ids'] = $account_ids;

        return $this;
    }

    /**
     * Gets utility_payments
     *
     * @return float
     */
    public function getUtilityPayments()
    {
        return $this->container['utility_payments'];
    }

    /**
     * Sets utility_payments
     *
     * @param float $utility_payments utility_payments
     *
     * @return $this
     */
    public function setUtilityPayments($utility_payments)
    {

        if (!is_null($utility_payments) && ($utility_payments < 0)) {
            throw new \InvalidArgumentException('invalid value for $utility_payments when calling EmergencyFundCalculatorRequest., must be bigger than or equal to 0.');
        }

        $this->container['utility_payments'] = $utility_payments;

        return $this;
    }

    /**
     * Gets food_costs
     *
     * @return float
     */
    public function getFoodCosts()
    {
        return $this->container['food_costs'];
    }

    /**
     * Sets food_costs
     *
     * @param float $food_costs food_costs
     *
     * @return $this
     */
    public function setFoodCosts($food_costs)
    {

        if (!is_null($food_costs) && ($food_costs < 0)) {
            throw new \InvalidArgumentException('invalid value for $food_costs when calling EmergencyFundCalculatorRequest., must be bigger than or equal to 0.');
        }

        $this->container['food_costs'] = $food_costs;

        return $this;
    }

    /**
     * Gets debt_payments
     *
     * @return float
     */
    public function getDebtPayments()
    {
        return $this->container['debt_payments'];
    }

    /**
     * Sets debt_payments
     *
     * @param float $debt_payments debt_payments
     *
     * @return $this
     */
    public function setDebtPayments($debt_payments)
    {

        if (!is_null($debt_payments) && ($debt_payments < 0)) {
            throw new \InvalidArgumentException('invalid value for $debt_payments when calling EmergencyFundCalculatorRequest., must be bigger than or equal to 0.');
        }

        $this->container['debt_payments'] = $debt_payments;

        return $this;
    }

    /**
     * Gets lookback_periods
     *
     * @return int
     */
    public function getLookbackPeriods()
    {
        return $this->container['lookback_periods'];
    }

    /**
     * Sets lookback_periods
     *
     * @param int $lookback_periods lookback_periods
     *
     * @return $this
     */
    public function setLookbackPeriods($lookback_periods)
    {

        if (!is_null($lookback_periods) && ($lookback_periods < 1)) {
            throw new \InvalidArgumentException('invalid value for $lookback_periods when calling EmergencyFundCalculatorRequest., must be bigger than or equal to 1.');
        }

        $this->container['lookback_periods'] = $lookback_periods;

        return $this;
    }

    /**
     * Gets frequency_unit
     *
     * @return string
     */
    public function getFrequencyUnit()
    {
        return $this->container['frequency_unit'];
    }

    /**
     * Sets frequency_unit
     *
     * @param string $frequency_unit frequency_unit
     *
     * @return $this
     */
    public function setFrequencyUnit($frequency_unit)
    {
        $allowedValues = $this->getFrequencyUnitAllowableValues();
        if (!is_null($frequency_unit) && !in_array($frequency_unit, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'frequency_unit', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['frequency_unit'] = $frequency_unit;

        return $this;
    }

    /**
     * Gets current_emergency_fund_balance
     *
     * @return float
     */
    public function getCurrentEmergencyFundBalance()
    {
        return $this->container['current_emergency_fund_balance'];
    }

    /**
     * Sets current_emergency_fund_balance
     *
     * @param float $current_emergency_fund_balance current_emergency_fund_balance
     *
     * @return $this
     */
    public function setCurrentEmergencyFundBalance($current_emergency_fund_balance)
    {

        if (!is_null($current_emergency_fund_balance) && ($current_emergency_fund_balance < 0)) {
            throw new \InvalidArgumentException('invalid value for $current_emergency_fund_balance when calling EmergencyFundCalculatorRequest., must be bigger than or equal to 0.');
        }

        $this->container['current_emergency_fund_balance'] = $current_emergency_fund_balance;

        return $this;
    }

    /**
     * Gets insurance_payments
     *
     * @return float
     */
    public function getInsurancePayments()
    {
        return $this->container['insurance_payments'];
    }

    /**
     * Sets insurance_payments
     *
     * @param float $insurance_payments insurance_payments
     *
     * @return $this
     */
    public function setInsurancePayments($insurance_payments)
    {

        if (!is_null($insurance_payments) && ($insurance_payments < 0)) {
            throw new \InvalidArgumentException('invalid value for $insurance_payments when calling EmergencyFundCalculatorRequest., must be bigger than or equal to 0.');
        }

        $this->container['insurance_payments'] = $insurance_payments;

        return $this;
    }

    /**
     * Gets telecom_payments
     *
     * @return float
     */
    public function getTelecomPayments()
    {
        return $this->container['telecom_payments'];
    }

    /**
     * Sets telecom_payments
     *
     * @param float $telecom_payments telecom_payments
     *
     * @return $this
     */
    public function setTelecomPayments($telecom_payments)
    {

        if (!is_null($telecom_payments) && ($telecom_payments < 0)) {
            throw new \InvalidArgumentException('invalid value for $telecom_payments when calling EmergencyFundCalculatorRequest., must be bigger than or equal to 0.');
        }

        $this->container['telecom_payments'] = $telecom_payments;

        return $this;
    }

    /**
     * Gets transportation_costs
     *
     * @return float
     */
    public function getTransportationCosts()
    {
        return $this->container['transportation_costs'];
    }

    /**
     * Sets transportation_costs
     *
     * @param float $transportation_costs transportation_costs
     *
     * @return $this
     */
    public function setTransportationCosts($transportation_costs)
    {

        if (!is_null($transportation_costs) && ($transportation_costs < 0)) {
            throw new \InvalidArgumentException('invalid value for $transportation_costs when calling EmergencyFundCalculatorRequest., must be bigger than or equal to 0.');
        }

        $this->container['transportation_costs'] = $transportation_costs;

        return $this;
    }

    /**
     * Gets interest_rate
     *
     * @return float
     */
    public function getInterestRate()
    {
        return $this->container['interest_rate'];
    }

    /**
     * Sets interest_rate
     *
     * @param float $interest_rate interest_rate
     *
     * @return $this
     */
    public function setInterestRate($interest_rate)
    {

        if (!is_null($interest_rate) && ($interest_rate < 0)) {
            throw new \InvalidArgumentException('invalid value for $interest_rate when calling EmergencyFundCalculatorRequest., must be bigger than or equal to 0.');
        }

        $this->container['interest_rate'] = $interest_rate;

        return $this;
    }

    /**
     * Gets emergency_fund_duration
     *
     * @return int
     */
    public function getEmergencyFundDuration()
    {
        return $this->container['emergency_fund_duration'];
    }

    /**
     * Sets emergency_fund_duration
     *
     * @param int $emergency_fund_duration emergency_fund_duration
     *
     * @return $this
     */
    public function setEmergencyFundDuration($emergency_fund_duration)
    {

        if (($emergency_fund_duration < 1)) {
            throw new \InvalidArgumentException('invalid value for $emergency_fund_duration when calling EmergencyFundCalculatorRequest., must be bigger than or equal to 1.');
        }

        $this->container['emergency_fund_duration'] = $emergency_fund_duration;

        return $this;
    }

    /**
     * Gets aggregation_account_ids
     *
     * @return string[]
     */
    public function getAggregationAccountIds()
    {
        return $this->container['aggregation_account_ids'];
    }

    /**
     * Sets aggregation_account_ids
     *
     * @param string[] $aggregation_account_ids aggregation_account_ids
     *
     * @return $this
     */
    public function setAggregationAccountIds($aggregation_account_ids)
    {
        $this->container['aggregation_account_ids'] = $aggregation_account_ids;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(
                ObjectSerializer::sanitizeForSerialization($this),
                JSON_PRETTY_PRINT
            );
        }

        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}

