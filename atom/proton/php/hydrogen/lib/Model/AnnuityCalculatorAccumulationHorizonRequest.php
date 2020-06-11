<?php
/**
 * AnnuityCalculatorAccumulationHorizonRequest
 *
 * PHP version 5
 *
 * @category Class
 * @package  com\hydrogen
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Hydrogen Proton API
 *
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.7.18
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.14
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace com\hydrogen\Model;

use \ArrayAccess;
use \com\hydrogen\ObjectSerializer;

/**
 * AnnuityCalculatorAccumulationHorizonRequest Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class AnnuityCalculatorAccumulationHorizonRequest implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'annuityCalculatorAccumulationHorizonRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'decumulation_horizon' => 'int',
        'annuity_amount' => 'float',
        'deposit_schedule' => 'object',
        'initial_balance' => 'float',
        'portfolio_return' => 'float',
        'tax_rate' => 'float',
        'inflation_rate' => 'float',
        'aggregation_account_ids' => 'string[]',
        'account_ids' => 'string[]',
        'accumulation_horizon' => 'int',
        'annuity_frequency_interval' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'decumulation_horizon' => 'int32',
        'annuity_amount' => 'float',
        'deposit_schedule' => null,
        'initial_balance' => 'float',
        'portfolio_return' => 'float',
        'tax_rate' => 'float',
        'inflation_rate' => 'float',
        'aggregation_account_ids' => 'uuid',
        'account_ids' => 'uuid',
        'accumulation_horizon' => 'int32',
        'annuity_frequency_interval' => null
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
        'decumulation_horizon' => 'decumulation_horizon',
        'annuity_amount' => 'annuity_amount',
        'deposit_schedule' => 'deposit_schedule',
        'initial_balance' => 'initial_balance',
        'portfolio_return' => 'portfolio_return',
        'tax_rate' => 'tax_rate',
        'inflation_rate' => 'inflation_rate',
        'aggregation_account_ids' => 'aggregation_account_ids',
        'account_ids' => 'account_ids',
        'accumulation_horizon' => 'accumulation_horizon',
        'annuity_frequency_interval' => 'annuity_frequency_interval'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'decumulation_horizon' => 'setDecumulationHorizon',
        'annuity_amount' => 'setAnnuityAmount',
        'deposit_schedule' => 'setDepositSchedule',
        'initial_balance' => 'setInitialBalance',
        'portfolio_return' => 'setPortfolioReturn',
        'tax_rate' => 'setTaxRate',
        'inflation_rate' => 'setInflationRate',
        'aggregation_account_ids' => 'setAggregationAccountIds',
        'account_ids' => 'setAccountIds',
        'accumulation_horizon' => 'setAccumulationHorizon',
        'annuity_frequency_interval' => 'setAnnuityFrequencyInterval'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'decumulation_horizon' => 'getDecumulationHorizon',
        'annuity_amount' => 'getAnnuityAmount',
        'deposit_schedule' => 'getDepositSchedule',
        'initial_balance' => 'getInitialBalance',
        'portfolio_return' => 'getPortfolioReturn',
        'tax_rate' => 'getTaxRate',
        'inflation_rate' => 'getInflationRate',
        'aggregation_account_ids' => 'getAggregationAccountIds',
        'account_ids' => 'getAccountIds',
        'accumulation_horizon' => 'getAccumulationHorizon',
        'annuity_frequency_interval' => 'getAnnuityFrequencyInterval'
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

    const ANNUITY_FREQUENCY_INTERVAL_YEAR = 'year';
    const ANNUITY_FREQUENCY_INTERVAL_QUARTER = 'quarter';
    const ANNUITY_FREQUENCY_INTERVAL_MONTH = 'month';
    const ANNUITY_FREQUENCY_INTERVAL_WEEK = 'week';
    const ANNUITY_FREQUENCY_INTERVAL_DAY = 'day';
    

    
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getAnnuityFrequencyIntervalAllowableValues()
    {
        return [
            self::ANNUITY_FREQUENCY_INTERVAL_YEAR,
            self::ANNUITY_FREQUENCY_INTERVAL_QUARTER,
            self::ANNUITY_FREQUENCY_INTERVAL_MONTH,
            self::ANNUITY_FREQUENCY_INTERVAL_WEEK,
            self::ANNUITY_FREQUENCY_INTERVAL_DAY,
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
        $this->container['decumulation_horizon'] = isset($data['decumulation_horizon']) ? $data['decumulation_horizon'] : null;
        $this->container['annuity_amount'] = isset($data['annuity_amount']) ? $data['annuity_amount'] : null;
        $this->container['deposit_schedule'] = isset($data['deposit_schedule']) ? $data['deposit_schedule'] : null;
        $this->container['initial_balance'] = isset($data['initial_balance']) ? $data['initial_balance'] : 0.0;
        $this->container['portfolio_return'] = isset($data['portfolio_return']) ? $data['portfolio_return'] : null;
        $this->container['tax_rate'] = isset($data['tax_rate']) ? $data['tax_rate'] : 0.0;
        $this->container['inflation_rate'] = isset($data['inflation_rate']) ? $data['inflation_rate'] : 0.0;
        $this->container['aggregation_account_ids'] = isset($data['aggregation_account_ids']) ? $data['aggregation_account_ids'] : null;
        $this->container['account_ids'] = isset($data['account_ids']) ? $data['account_ids'] : null;
        $this->container['accumulation_horizon'] = isset($data['accumulation_horizon']) ? $data['accumulation_horizon'] : null;
        $this->container['annuity_frequency_interval'] = isset($data['annuity_frequency_interval']) ? $data['annuity_frequency_interval'] : 'year';
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['decumulation_horizon'] === null) {
            $invalidProperties[] = "'decumulation_horizon' can't be null";
        }
        if (($this->container['decumulation_horizon'] < 1)) {
            $invalidProperties[] = "invalid value for 'decumulation_horizon', must be bigger than or equal to 1.";
        }

        if ($this->container['annuity_amount'] === null) {
            $invalidProperties[] = "'annuity_amount' can't be null";
        }
        if (($this->container['annuity_amount'] < 0)) {
            $invalidProperties[] = "invalid value for 'annuity_amount', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['initial_balance']) && ($this->container['initial_balance'] < 0)) {
            $invalidProperties[] = "invalid value for 'initial_balance', must be bigger than or equal to 0.";
        }

        if ($this->container['portfolio_return'] === null) {
            $invalidProperties[] = "'portfolio_return' can't be null";
        }
        if (!is_null($this->container['tax_rate']) && ($this->container['tax_rate'] > 1)) {
            $invalidProperties[] = "invalid value for 'tax_rate', must be smaller than or equal to 1.";
        }

        if (!is_null($this->container['tax_rate']) && ($this->container['tax_rate'] < 0)) {
            $invalidProperties[] = "invalid value for 'tax_rate', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['inflation_rate']) && ($this->container['inflation_rate'] > 20)) {
            $invalidProperties[] = "invalid value for 'inflation_rate', must be smaller than or equal to 20.";
        }

        if (!is_null($this->container['inflation_rate']) && ($this->container['inflation_rate'] < -1)) {
            $invalidProperties[] = "invalid value for 'inflation_rate', must be bigger than or equal to -1.";
        }

        if (!is_null($this->container['accumulation_horizon']) && ($this->container['accumulation_horizon'] < 0)) {
            $invalidProperties[] = "invalid value for 'accumulation_horizon', must be bigger than or equal to 0.";
        }

        $allowedValues = $this->getAnnuityFrequencyIntervalAllowableValues();
        if (!is_null($this->container['annuity_frequency_interval']) && !in_array($this->container['annuity_frequency_interval'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value for 'annuity_frequency_interval', must be one of '%s'",
                implode("', '", $allowedValues)
            );
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
     * Gets decumulation_horizon
     *
     * @return int
     */
    public function getDecumulationHorizon()
    {
        return $this->container['decumulation_horizon'];
    }

    /**
     * Sets decumulation_horizon
     *
     * @param int $decumulation_horizon decumulation_horizon
     *
     * @return $this
     */
    public function setDecumulationHorizon($decumulation_horizon)
    {

        if (($decumulation_horizon < 1)) {
            throw new \InvalidArgumentException('invalid value for $decumulation_horizon when calling AnnuityCalculatorAccumulationHorizonRequest., must be bigger than or equal to 1.');
        }

        $this->container['decumulation_horizon'] = $decumulation_horizon;

        return $this;
    }

    /**
     * Gets annuity_amount
     *
     * @return float
     */
    public function getAnnuityAmount()
    {
        return $this->container['annuity_amount'];
    }

    /**
     * Sets annuity_amount
     *
     * @param float $annuity_amount annuity_amount
     *
     * @return $this
     */
    public function setAnnuityAmount($annuity_amount)
    {

        if (($annuity_amount < 0)) {
            throw new \InvalidArgumentException('invalid value for $annuity_amount when calling AnnuityCalculatorAccumulationHorizonRequest., must be bigger than or equal to 0.');
        }

        $this->container['annuity_amount'] = $annuity_amount;

        return $this;
    }

    /**
     * Gets deposit_schedule
     *
     * @return object
     */
    public function getDepositSchedule()
    {
        return $this->container['deposit_schedule'];
    }

    /**
     * Sets deposit_schedule
     *
     * @param object $deposit_schedule deposit_schedule
     *
     * @return $this
     */
    public function setDepositSchedule($deposit_schedule)
    {
        $this->container['deposit_schedule'] = $deposit_schedule;

        return $this;
    }

    /**
     * Gets initial_balance
     *
     * @return float
     */
    public function getInitialBalance()
    {
        return $this->container['initial_balance'];
    }

    /**
     * Sets initial_balance
     *
     * @param float $initial_balance initial_balance
     *
     * @return $this
     */
    public function setInitialBalance($initial_balance)
    {

        if (!is_null($initial_balance) && ($initial_balance < 0)) {
            throw new \InvalidArgumentException('invalid value for $initial_balance when calling AnnuityCalculatorAccumulationHorizonRequest., must be bigger than or equal to 0.');
        }

        $this->container['initial_balance'] = $initial_balance;

        return $this;
    }

    /**
     * Gets portfolio_return
     *
     * @return float
     */
    public function getPortfolioReturn()
    {
        return $this->container['portfolio_return'];
    }

    /**
     * Sets portfolio_return
     *
     * @param float $portfolio_return portfolio_return
     *
     * @return $this
     */
    public function setPortfolioReturn($portfolio_return)
    {
        $this->container['portfolio_return'] = $portfolio_return;

        return $this;
    }

    /**
     * Gets tax_rate
     *
     * @return float
     */
    public function getTaxRate()
    {
        return $this->container['tax_rate'];
    }

    /**
     * Sets tax_rate
     *
     * @param float $tax_rate tax_rate
     *
     * @return $this
     */
    public function setTaxRate($tax_rate)
    {

        if (!is_null($tax_rate) && ($tax_rate > 1)) {
            throw new \InvalidArgumentException('invalid value for $tax_rate when calling AnnuityCalculatorAccumulationHorizonRequest., must be smaller than or equal to 1.');
        }
        if (!is_null($tax_rate) && ($tax_rate < 0)) {
            throw new \InvalidArgumentException('invalid value for $tax_rate when calling AnnuityCalculatorAccumulationHorizonRequest., must be bigger than or equal to 0.');
        }

        $this->container['tax_rate'] = $tax_rate;

        return $this;
    }

    /**
     * Gets inflation_rate
     *
     * @return float
     */
    public function getInflationRate()
    {
        return $this->container['inflation_rate'];
    }

    /**
     * Sets inflation_rate
     *
     * @param float $inflation_rate inflation_rate
     *
     * @return $this
     */
    public function setInflationRate($inflation_rate)
    {

        if (!is_null($inflation_rate) && ($inflation_rate > 20)) {
            throw new \InvalidArgumentException('invalid value for $inflation_rate when calling AnnuityCalculatorAccumulationHorizonRequest., must be smaller than or equal to 20.');
        }
        if (!is_null($inflation_rate) && ($inflation_rate < -1)) {
            throw new \InvalidArgumentException('invalid value for $inflation_rate when calling AnnuityCalculatorAccumulationHorizonRequest., must be bigger than or equal to -1.');
        }

        $this->container['inflation_rate'] = $inflation_rate;

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
     * Gets accumulation_horizon
     *
     * @return int
     */
    public function getAccumulationHorizon()
    {
        return $this->container['accumulation_horizon'];
    }

    /**
     * Sets accumulation_horizon
     *
     * @param int $accumulation_horizon accumulation_horizon
     *
     * @return $this
     */
    public function setAccumulationHorizon($accumulation_horizon)
    {

        if (!is_null($accumulation_horizon) && ($accumulation_horizon < 0)) {
            throw new \InvalidArgumentException('invalid value for $accumulation_horizon when calling AnnuityCalculatorAccumulationHorizonRequest., must be bigger than or equal to 0.');
        }

        $this->container['accumulation_horizon'] = $accumulation_horizon;

        return $this;
    }

    /**
     * Gets annuity_frequency_interval
     *
     * @return string
     */
    public function getAnnuityFrequencyInterval()
    {
        return $this->container['annuity_frequency_interval'];
    }

    /**
     * Sets annuity_frequency_interval
     *
     * @param string $annuity_frequency_interval annuity_frequency_interval
     *
     * @return $this
     */
    public function setAnnuityFrequencyInterval($annuity_frequency_interval)
    {
        $allowedValues = $this->getAnnuityFrequencyIntervalAllowableValues();
        if (!is_null($annuity_frequency_interval) && !in_array($annuity_frequency_interval, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'annuity_frequency_interval', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['annuity_frequency_interval'] = $annuity_frequency_interval;

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


