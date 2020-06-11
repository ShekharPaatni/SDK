<?php
/**
 * RetirementCalculatorPercentCoveredRequest
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
 * RetirementCalculatorPercentCoveredRequest Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class RetirementCalculatorPercentCoveredRequest implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'retirementCalculatorPercentCoveredRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'retirement_income' => 'float',
        'deposit_schedule' => 'object',
        'retirement_age' => 'int',
        'portfolio_return' => 'float',
        'retirement_expenses' => 'float',
        'inflation_rate' => 'float',
        'aggregation_account_ids' => 'string[]',
        'current_age' => 'int',
        'account_ids' => 'string[]',
        'retirement_savings' => 'float',
        'retirement_tax' => 'float',
        'death_age' => 'int'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'retirement_income' => 'float',
        'deposit_schedule' => null,
        'retirement_age' => 'int32',
        'portfolio_return' => 'float',
        'retirement_expenses' => 'float',
        'inflation_rate' => 'float',
        'aggregation_account_ids' => 'uuid',
        'current_age' => 'int32',
        'account_ids' => 'uuid',
        'retirement_savings' => 'float',
        'retirement_tax' => 'float',
        'death_age' => 'int32'
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
        'retirement_income' => 'retirement_income',
        'deposit_schedule' => 'deposit_schedule',
        'retirement_age' => 'retirement_age',
        'portfolio_return' => 'portfolio_return',
        'retirement_expenses' => 'retirement_expenses',
        'inflation_rate' => 'inflation_rate',
        'aggregation_account_ids' => 'aggregation_account_ids',
        'current_age' => 'current_age',
        'account_ids' => 'account_ids',
        'retirement_savings' => 'retirement_savings',
        'retirement_tax' => 'retirement_tax',
        'death_age' => 'death_age'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'retirement_income' => 'setRetirementIncome',
        'deposit_schedule' => 'setDepositSchedule',
        'retirement_age' => 'setRetirementAge',
        'portfolio_return' => 'setPortfolioReturn',
        'retirement_expenses' => 'setRetirementExpenses',
        'inflation_rate' => 'setInflationRate',
        'aggregation_account_ids' => 'setAggregationAccountIds',
        'current_age' => 'setCurrentAge',
        'account_ids' => 'setAccountIds',
        'retirement_savings' => 'setRetirementSavings',
        'retirement_tax' => 'setRetirementTax',
        'death_age' => 'setDeathAge'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'retirement_income' => 'getRetirementIncome',
        'deposit_schedule' => 'getDepositSchedule',
        'retirement_age' => 'getRetirementAge',
        'portfolio_return' => 'getPortfolioReturn',
        'retirement_expenses' => 'getRetirementExpenses',
        'inflation_rate' => 'getInflationRate',
        'aggregation_account_ids' => 'getAggregationAccountIds',
        'current_age' => 'getCurrentAge',
        'account_ids' => 'getAccountIds',
        'retirement_savings' => 'getRetirementSavings',
        'retirement_tax' => 'getRetirementTax',
        'death_age' => 'getDeathAge'
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
        $this->container['retirement_income'] = isset($data['retirement_income']) ? $data['retirement_income'] : 0.0;
        $this->container['deposit_schedule'] = isset($data['deposit_schedule']) ? $data['deposit_schedule'] : null;
        $this->container['retirement_age'] = isset($data['retirement_age']) ? $data['retirement_age'] : 65;
        $this->container['portfolio_return'] = isset($data['portfolio_return']) ? $data['portfolio_return'] : null;
        $this->container['retirement_expenses'] = isset($data['retirement_expenses']) ? $data['retirement_expenses'] : null;
        $this->container['inflation_rate'] = isset($data['inflation_rate']) ? $data['inflation_rate'] : 0.0;
        $this->container['aggregation_account_ids'] = isset($data['aggregation_account_ids']) ? $data['aggregation_account_ids'] : null;
        $this->container['current_age'] = isset($data['current_age']) ? $data['current_age'] : null;
        $this->container['account_ids'] = isset($data['account_ids']) ? $data['account_ids'] : null;
        $this->container['retirement_savings'] = isset($data['retirement_savings']) ? $data['retirement_savings'] : 0.0;
        $this->container['retirement_tax'] = isset($data['retirement_tax']) ? $data['retirement_tax'] : 0.0;
        $this->container['death_age'] = isset($data['death_age']) ? $data['death_age'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if (!is_null($this->container['retirement_income']) && ($this->container['retirement_income'] < 0)) {
            $invalidProperties[] = "invalid value for 'retirement_income', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['retirement_age']) && ($this->container['retirement_age'] < 0)) {
            $invalidProperties[] = "invalid value for 'retirement_age', must be bigger than or equal to 0.";
        }

        if ($this->container['portfolio_return'] === null) {
            $invalidProperties[] = "'portfolio_return' can't be null";
        }
        if (($this->container['portfolio_return'] < -1)) {
            $invalidProperties[] = "invalid value for 'portfolio_return', must be bigger than or equal to -1.";
        }

        if ($this->container['retirement_expenses'] === null) {
            $invalidProperties[] = "'retirement_expenses' can't be null";
        }
        if (($this->container['retirement_expenses'] < 0)) {
            $invalidProperties[] = "invalid value for 'retirement_expenses', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['inflation_rate']) && ($this->container['inflation_rate'] < -1)) {
            $invalidProperties[] = "invalid value for 'inflation_rate', must be bigger than or equal to -1.";
        }

        if ($this->container['current_age'] === null) {
            $invalidProperties[] = "'current_age' can't be null";
        }
        if (($this->container['current_age'] < 0)) {
            $invalidProperties[] = "invalid value for 'current_age', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['retirement_savings']) && ($this->container['retirement_savings'] < 0)) {
            $invalidProperties[] = "invalid value for 'retirement_savings', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['retirement_tax']) && ($this->container['retirement_tax'] > 1)) {
            $invalidProperties[] = "invalid value for 'retirement_tax', must be smaller than or equal to 1.";
        }

        if (!is_null($this->container['retirement_tax']) && ($this->container['retirement_tax'] < 0)) {
            $invalidProperties[] = "invalid value for 'retirement_tax', must be bigger than or equal to 0.";
        }

        if ($this->container['death_age'] === null) {
            $invalidProperties[] = "'death_age' can't be null";
        }
        if (($this->container['death_age'] < 0)) {
            $invalidProperties[] = "invalid value for 'death_age', must be bigger than or equal to 0.";
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
     * Gets retirement_income
     *
     * @return float
     */
    public function getRetirementIncome()
    {
        return $this->container['retirement_income'];
    }

    /**
     * Sets retirement_income
     *
     * @param float $retirement_income retirement_income
     *
     * @return $this
     */
    public function setRetirementIncome($retirement_income)
    {

        if (!is_null($retirement_income) && ($retirement_income < 0)) {
            throw new \InvalidArgumentException('invalid value for $retirement_income when calling RetirementCalculatorPercentCoveredRequest., must be bigger than or equal to 0.');
        }

        $this->container['retirement_income'] = $retirement_income;

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
     * Gets retirement_age
     *
     * @return int
     */
    public function getRetirementAge()
    {
        return $this->container['retirement_age'];
    }

    /**
     * Sets retirement_age
     *
     * @param int $retirement_age retirement_age
     *
     * @return $this
     */
    public function setRetirementAge($retirement_age)
    {

        if (!is_null($retirement_age) && ($retirement_age < 0)) {
            throw new \InvalidArgumentException('invalid value for $retirement_age when calling RetirementCalculatorPercentCoveredRequest., must be bigger than or equal to 0.');
        }

        $this->container['retirement_age'] = $retirement_age;

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
            throw new \InvalidArgumentException('invalid value for $portfolio_return when calling RetirementCalculatorPercentCoveredRequest., must be bigger than or equal to -1.');
        }

        $this->container['portfolio_return'] = $portfolio_return;

        return $this;
    }

    /**
     * Gets retirement_expenses
     *
     * @return float
     */
    public function getRetirementExpenses()
    {
        return $this->container['retirement_expenses'];
    }

    /**
     * Sets retirement_expenses
     *
     * @param float $retirement_expenses retirement_expenses
     *
     * @return $this
     */
    public function setRetirementExpenses($retirement_expenses)
    {

        if (($retirement_expenses < 0)) {
            throw new \InvalidArgumentException('invalid value for $retirement_expenses when calling RetirementCalculatorPercentCoveredRequest., must be bigger than or equal to 0.');
        }

        $this->container['retirement_expenses'] = $retirement_expenses;

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
            throw new \InvalidArgumentException('invalid value for $inflation_rate when calling RetirementCalculatorPercentCoveredRequest., must be bigger than or equal to -1.');
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
     * Gets current_age
     *
     * @return int
     */
    public function getCurrentAge()
    {
        return $this->container['current_age'];
    }

    /**
     * Sets current_age
     *
     * @param int $current_age current_age
     *
     * @return $this
     */
    public function setCurrentAge($current_age)
    {

        if (($current_age < 0)) {
            throw new \InvalidArgumentException('invalid value for $current_age when calling RetirementCalculatorPercentCoveredRequest., must be bigger than or equal to 0.');
        }

        $this->container['current_age'] = $current_age;

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
     * Gets retirement_savings
     *
     * @return float
     */
    public function getRetirementSavings()
    {
        return $this->container['retirement_savings'];
    }

    /**
     * Sets retirement_savings
     *
     * @param float $retirement_savings retirement_savings
     *
     * @return $this
     */
    public function setRetirementSavings($retirement_savings)
    {

        if (!is_null($retirement_savings) && ($retirement_savings < 0)) {
            throw new \InvalidArgumentException('invalid value for $retirement_savings when calling RetirementCalculatorPercentCoveredRequest., must be bigger than or equal to 0.');
        }

        $this->container['retirement_savings'] = $retirement_savings;

        return $this;
    }

    /**
     * Gets retirement_tax
     *
     * @return float
     */
    public function getRetirementTax()
    {
        return $this->container['retirement_tax'];
    }

    /**
     * Sets retirement_tax
     *
     * @param float $retirement_tax retirement_tax
     *
     * @return $this
     */
    public function setRetirementTax($retirement_tax)
    {

        if (!is_null($retirement_tax) && ($retirement_tax > 1)) {
            throw new \InvalidArgumentException('invalid value for $retirement_tax when calling RetirementCalculatorPercentCoveredRequest., must be smaller than or equal to 1.');
        }
        if (!is_null($retirement_tax) && ($retirement_tax < 0)) {
            throw new \InvalidArgumentException('invalid value for $retirement_tax when calling RetirementCalculatorPercentCoveredRequest., must be bigger than or equal to 0.');
        }

        $this->container['retirement_tax'] = $retirement_tax;

        return $this;
    }

    /**
     * Gets death_age
     *
     * @return int
     */
    public function getDeathAge()
    {
        return $this->container['death_age'];
    }

    /**
     * Sets death_age
     *
     * @param int $death_age death_age
     *
     * @return $this
     */
    public function setDeathAge($death_age)
    {

        if (($death_age < 0)) {
            throw new \InvalidArgumentException('invalid value for $death_age when calling RetirementCalculatorPercentCoveredRequest., must be bigger than or equal to 0.');
        }

        $this->container['death_age'] = $death_age;

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


