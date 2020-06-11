<?php
/**
 * PurchaseCalculatorDepositAmountRequest
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
 * PurchaseCalculatorDepositAmountRequest Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class PurchaseCalculatorDepositAmountRequest implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'purchaseCalculatorDepositAmountRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'deposit_schedule' => 'object',
        'portfolio_return' => 'float',
        'inflation_rate' => 'float',
        'investment_tax' => 'float',
        'purchase_horizon' => 'int',
        'purchase_amount' => 'float',
        'aggregation_account_ids' => 'string[]',
        'account_ids' => 'string[]',
        'current_savings' => 'float',
        'horizon_frequency_interval' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'deposit_schedule' => null,
        'portfolio_return' => 'float',
        'inflation_rate' => 'float',
        'investment_tax' => 'float',
        'purchase_horizon' => 'int32',
        'purchase_amount' => 'float',
        'aggregation_account_ids' => 'uuid',
        'account_ids' => 'uuid',
        'current_savings' => 'float',
        'horizon_frequency_interval' => null
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
        'deposit_schedule' => 'deposit_schedule',
        'portfolio_return' => 'portfolio_return',
        'inflation_rate' => 'inflation_rate',
        'investment_tax' => 'investment_tax',
        'purchase_horizon' => 'purchase_horizon',
        'purchase_amount' => 'purchase_amount',
        'aggregation_account_ids' => 'aggregation_account_ids',
        'account_ids' => 'account_ids',
        'current_savings' => 'current_savings',
        'horizon_frequency_interval' => 'horizon_frequency_interval'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'deposit_schedule' => 'setDepositSchedule',
        'portfolio_return' => 'setPortfolioReturn',
        'inflation_rate' => 'setInflationRate',
        'investment_tax' => 'setInvestmentTax',
        'purchase_horizon' => 'setPurchaseHorizon',
        'purchase_amount' => 'setPurchaseAmount',
        'aggregation_account_ids' => 'setAggregationAccountIds',
        'account_ids' => 'setAccountIds',
        'current_savings' => 'setCurrentSavings',
        'horizon_frequency_interval' => 'setHorizonFrequencyInterval'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'deposit_schedule' => 'getDepositSchedule',
        'portfolio_return' => 'getPortfolioReturn',
        'inflation_rate' => 'getInflationRate',
        'investment_tax' => 'getInvestmentTax',
        'purchase_horizon' => 'getPurchaseHorizon',
        'purchase_amount' => 'getPurchaseAmount',
        'aggregation_account_ids' => 'getAggregationAccountIds',
        'account_ids' => 'getAccountIds',
        'current_savings' => 'getCurrentSavings',
        'horizon_frequency_interval' => 'getHorizonFrequencyInterval'
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

    const HORIZON_FREQUENCY_INTERVAL_YEAR = 'year';
    const HORIZON_FREQUENCY_INTERVAL_QUARTER = 'quarter';
    const HORIZON_FREQUENCY_INTERVAL_MONTH = 'month';
    const HORIZON_FREQUENCY_INTERVAL_WEEK = 'week';
    

    
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getHorizonFrequencyIntervalAllowableValues()
    {
        return [
            self::HORIZON_FREQUENCY_INTERVAL_YEAR,
            self::HORIZON_FREQUENCY_INTERVAL_QUARTER,
            self::HORIZON_FREQUENCY_INTERVAL_MONTH,
            self::HORIZON_FREQUENCY_INTERVAL_WEEK,
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
        $this->container['deposit_schedule'] = isset($data['deposit_schedule']) ? $data['deposit_schedule'] : null;
        $this->container['portfolio_return'] = isset($data['portfolio_return']) ? $data['portfolio_return'] : null;
        $this->container['inflation_rate'] = isset($data['inflation_rate']) ? $data['inflation_rate'] : 0.0;
        $this->container['investment_tax'] = isset($data['investment_tax']) ? $data['investment_tax'] : 0.0;
        $this->container['purchase_horizon'] = isset($data['purchase_horizon']) ? $data['purchase_horizon'] : null;
        $this->container['purchase_amount'] = isset($data['purchase_amount']) ? $data['purchase_amount'] : null;
        $this->container['aggregation_account_ids'] = isset($data['aggregation_account_ids']) ? $data['aggregation_account_ids'] : null;
        $this->container['account_ids'] = isset($data['account_ids']) ? $data['account_ids'] : null;
        $this->container['current_savings'] = isset($data['current_savings']) ? $data['current_savings'] : 0.0;
        $this->container['horizon_frequency_interval'] = isset($data['horizon_frequency_interval']) ? $data['horizon_frequency_interval'] : 'year';
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['portfolio_return'] === null) {
            $invalidProperties[] = "'portfolio_return' can't be null";
        }
        if (($this->container['portfolio_return'] < -1)) {
            $invalidProperties[] = "invalid value for 'portfolio_return', must be bigger than or equal to -1.";
        }

        if (!is_null($this->container['inflation_rate']) && ($this->container['inflation_rate'] < -1)) {
            $invalidProperties[] = "invalid value for 'inflation_rate', must be bigger than or equal to -1.";
        }

        if (!is_null($this->container['investment_tax']) && ($this->container['investment_tax'] > 1)) {
            $invalidProperties[] = "invalid value for 'investment_tax', must be smaller than or equal to 1.";
        }

        if (!is_null($this->container['investment_tax']) && ($this->container['investment_tax'] < 0)) {
            $invalidProperties[] = "invalid value for 'investment_tax', must be bigger than or equal to 0.";
        }

        if ($this->container['purchase_horizon'] === null) {
            $invalidProperties[] = "'purchase_horizon' can't be null";
        }
        if (($this->container['purchase_horizon'] < 0)) {
            $invalidProperties[] = "invalid value for 'purchase_horizon', must be bigger than or equal to 0.";
        }

        if ($this->container['purchase_amount'] === null) {
            $invalidProperties[] = "'purchase_amount' can't be null";
        }
        if (($this->container['purchase_amount'] < 0)) {
            $invalidProperties[] = "invalid value for 'purchase_amount', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['current_savings']) && ($this->container['current_savings'] < 0)) {
            $invalidProperties[] = "invalid value for 'current_savings', must be bigger than or equal to 0.";
        }

        $allowedValues = $this->getHorizonFrequencyIntervalAllowableValues();
        if (!is_null($this->container['horizon_frequency_interval']) && !in_array($this->container['horizon_frequency_interval'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value for 'horizon_frequency_interval', must be one of '%s'",
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

        if (($portfolio_return < -1)) {
            throw new \InvalidArgumentException('invalid value for $portfolio_return when calling PurchaseCalculatorDepositAmountRequest., must be bigger than or equal to -1.');
        }

        $this->container['portfolio_return'] = $portfolio_return;

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

        if (!is_null($inflation_rate) && ($inflation_rate < -1)) {
            throw new \InvalidArgumentException('invalid value for $inflation_rate when calling PurchaseCalculatorDepositAmountRequest., must be bigger than or equal to -1.');
        }

        $this->container['inflation_rate'] = $inflation_rate;

        return $this;
    }

    /**
     * Gets investment_tax
     *
     * @return float
     */
    public function getInvestmentTax()
    {
        return $this->container['investment_tax'];
    }

    /**
     * Sets investment_tax
     *
     * @param float $investment_tax investment_tax
     *
     * @return $this
     */
    public function setInvestmentTax($investment_tax)
    {

        if (!is_null($investment_tax) && ($investment_tax > 1)) {
            throw new \InvalidArgumentException('invalid value for $investment_tax when calling PurchaseCalculatorDepositAmountRequest., must be smaller than or equal to 1.');
        }
        if (!is_null($investment_tax) && ($investment_tax < 0)) {
            throw new \InvalidArgumentException('invalid value for $investment_tax when calling PurchaseCalculatorDepositAmountRequest., must be bigger than or equal to 0.');
        }

        $this->container['investment_tax'] = $investment_tax;

        return $this;
    }

    /**
     * Gets purchase_horizon
     *
     * @return int
     */
    public function getPurchaseHorizon()
    {
        return $this->container['purchase_horizon'];
    }

    /**
     * Sets purchase_horizon
     *
     * @param int $purchase_horizon purchase_horizon
     *
     * @return $this
     */
    public function setPurchaseHorizon($purchase_horizon)
    {

        if (($purchase_horizon < 0)) {
            throw new \InvalidArgumentException('invalid value for $purchase_horizon when calling PurchaseCalculatorDepositAmountRequest., must be bigger than or equal to 0.');
        }

        $this->container['purchase_horizon'] = $purchase_horizon;

        return $this;
    }

    /**
     * Gets purchase_amount
     *
     * @return float
     */
    public function getPurchaseAmount()
    {
        return $this->container['purchase_amount'];
    }

    /**
     * Sets purchase_amount
     *
     * @param float $purchase_amount purchase_amount
     *
     * @return $this
     */
    public function setPurchaseAmount($purchase_amount)
    {

        if (($purchase_amount < 0)) {
            throw new \InvalidArgumentException('invalid value for $purchase_amount when calling PurchaseCalculatorDepositAmountRequest., must be bigger than or equal to 0.');
        }

        $this->container['purchase_amount'] = $purchase_amount;

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
     * Gets current_savings
     *
     * @return float
     */
    public function getCurrentSavings()
    {
        return $this->container['current_savings'];
    }

    /**
     * Sets current_savings
     *
     * @param float $current_savings current_savings
     *
     * @return $this
     */
    public function setCurrentSavings($current_savings)
    {

        if (!is_null($current_savings) && ($current_savings < 0)) {
            throw new \InvalidArgumentException('invalid value for $current_savings when calling PurchaseCalculatorDepositAmountRequest., must be bigger than or equal to 0.');
        }

        $this->container['current_savings'] = $current_savings;

        return $this;
    }

    /**
     * Gets horizon_frequency_interval
     *
     * @return string
     */
    public function getHorizonFrequencyInterval()
    {
        return $this->container['horizon_frequency_interval'];
    }

    /**
     * Sets horizon_frequency_interval
     *
     * @param string $horizon_frequency_interval horizon_frequency_interval
     *
     * @return $this
     */
    public function setHorizonFrequencyInterval($horizon_frequency_interval)
    {
        $allowedValues = $this->getHorizonFrequencyIntervalAllowableValues();
        if (!is_null($horizon_frequency_interval) && !in_array($horizon_frequency_interval, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'horizon_frequency_interval', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['horizon_frequency_interval'] = $horizon_frequency_interval;

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


