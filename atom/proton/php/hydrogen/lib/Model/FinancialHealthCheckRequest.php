<?php
/**
 * FinancialHealthCheckRequest
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
 * FinancialHealthCheckRequest Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class FinancialHealthCheckRequest implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'financialHealthCheckRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'lookback_periods' => 'int',
        'gross_annual_income' => 'float',
        'ratio_targets' => 'object',
        'liquid_assets' => 'float',
        'client_id' => 'string',
        'net_monthly_income' => 'float',
        'total_liabilities' => 'float',
        'non_liquid_assets' => 'float',
        'short_term_liabilities' => 'float',
        'monthly_expenses' => 'float'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'lookback_periods' => 'int32',
        'gross_annual_income' => 'float',
        'ratio_targets' => null,
        'liquid_assets' => 'float',
        'client_id' => 'uuid',
        'net_monthly_income' => 'float',
        'total_liabilities' => 'float',
        'non_liquid_assets' => 'float',
        'short_term_liabilities' => 'float',
        'monthly_expenses' => 'float'
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
        'lookback_periods' => 'lookback_periods',
        'gross_annual_income' => 'gross_annual_income',
        'ratio_targets' => 'ratio_targets',
        'liquid_assets' => 'liquid_assets',
        'client_id' => 'client_id',
        'net_monthly_income' => 'net_monthly_income',
        'total_liabilities' => 'total_liabilities',
        'non_liquid_assets' => 'non_liquid_assets',
        'short_term_liabilities' => 'short_term_liabilities',
        'monthly_expenses' => 'monthly_expenses'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'lookback_periods' => 'setLookbackPeriods',
        'gross_annual_income' => 'setGrossAnnualIncome',
        'ratio_targets' => 'setRatioTargets',
        'liquid_assets' => 'setLiquidAssets',
        'client_id' => 'setClientId',
        'net_monthly_income' => 'setNetMonthlyIncome',
        'total_liabilities' => 'setTotalLiabilities',
        'non_liquid_assets' => 'setNonLiquidAssets',
        'short_term_liabilities' => 'setShortTermLiabilities',
        'monthly_expenses' => 'setMonthlyExpenses'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'lookback_periods' => 'getLookbackPeriods',
        'gross_annual_income' => 'getGrossAnnualIncome',
        'ratio_targets' => 'getRatioTargets',
        'liquid_assets' => 'getLiquidAssets',
        'client_id' => 'getClientId',
        'net_monthly_income' => 'getNetMonthlyIncome',
        'total_liabilities' => 'getTotalLiabilities',
        'non_liquid_assets' => 'getNonLiquidAssets',
        'short_term_liabilities' => 'getShortTermLiabilities',
        'monthly_expenses' => 'getMonthlyExpenses'
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
        $this->container['lookback_periods'] = isset($data['lookback_periods']) ? $data['lookback_periods'] : 3;
        $this->container['gross_annual_income'] = isset($data['gross_annual_income']) ? $data['gross_annual_income'] : null;
        $this->container['ratio_targets'] = isset($data['ratio_targets']) ? $data['ratio_targets'] : null;
        $this->container['liquid_assets'] = isset($data['liquid_assets']) ? $data['liquid_assets'] : null;
        $this->container['client_id'] = isset($data['client_id']) ? $data['client_id'] : null;
        $this->container['net_monthly_income'] = isset($data['net_monthly_income']) ? $data['net_monthly_income'] : null;
        $this->container['total_liabilities'] = isset($data['total_liabilities']) ? $data['total_liabilities'] : null;
        $this->container['non_liquid_assets'] = isset($data['non_liquid_assets']) ? $data['non_liquid_assets'] : null;
        $this->container['short_term_liabilities'] = isset($data['short_term_liabilities']) ? $data['short_term_liabilities'] : null;
        $this->container['monthly_expenses'] = isset($data['monthly_expenses']) ? $data['monthly_expenses'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if (!is_null($this->container['lookback_periods']) && ($this->container['lookback_periods'] < 1)) {
            $invalidProperties[] = "invalid value for 'lookback_periods', must be bigger than or equal to 1.";
        }

        if (!is_null($this->container['gross_annual_income']) && ($this->container['gross_annual_income'] < 0)) {
            $invalidProperties[] = "invalid value for 'gross_annual_income', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['liquid_assets']) && ($this->container['liquid_assets'] < 0)) {
            $invalidProperties[] = "invalid value for 'liquid_assets', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['net_monthly_income']) && ($this->container['net_monthly_income'] < 0)) {
            $invalidProperties[] = "invalid value for 'net_monthly_income', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['total_liabilities']) && ($this->container['total_liabilities'] < 0)) {
            $invalidProperties[] = "invalid value for 'total_liabilities', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['non_liquid_assets']) && ($this->container['non_liquid_assets'] < 0)) {
            $invalidProperties[] = "invalid value for 'non_liquid_assets', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['short_term_liabilities']) && ($this->container['short_term_liabilities'] < 0)) {
            $invalidProperties[] = "invalid value for 'short_term_liabilities', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['monthly_expenses']) && ($this->container['monthly_expenses'] < 0)) {
            $invalidProperties[] = "invalid value for 'monthly_expenses', must be bigger than or equal to 0.";
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
            throw new \InvalidArgumentException('invalid value for $lookback_periods when calling FinancialHealthCheckRequest., must be bigger than or equal to 1.');
        }

        $this->container['lookback_periods'] = $lookback_periods;

        return $this;
    }

    /**
     * Gets gross_annual_income
     *
     * @return float
     */
    public function getGrossAnnualIncome()
    {
        return $this->container['gross_annual_income'];
    }

    /**
     * Sets gross_annual_income
     *
     * @param float $gross_annual_income gross_annual_income
     *
     * @return $this
     */
    public function setGrossAnnualIncome($gross_annual_income)
    {

        if (!is_null($gross_annual_income) && ($gross_annual_income < 0)) {
            throw new \InvalidArgumentException('invalid value for $gross_annual_income when calling FinancialHealthCheckRequest., must be bigger than or equal to 0.');
        }

        $this->container['gross_annual_income'] = $gross_annual_income;

        return $this;
    }

    /**
     * Gets ratio_targets
     *
     * @return object
     */
    public function getRatioTargets()
    {
        return $this->container['ratio_targets'];
    }

    /**
     * Sets ratio_targets
     *
     * @param object $ratio_targets ratio_targets
     *
     * @return $this
     */
    public function setRatioTargets($ratio_targets)
    {
        $this->container['ratio_targets'] = $ratio_targets;

        return $this;
    }

    /**
     * Gets liquid_assets
     *
     * @return float
     */
    public function getLiquidAssets()
    {
        return $this->container['liquid_assets'];
    }

    /**
     * Sets liquid_assets
     *
     * @param float $liquid_assets liquid_assets
     *
     * @return $this
     */
    public function setLiquidAssets($liquid_assets)
    {

        if (!is_null($liquid_assets) && ($liquid_assets < 0)) {
            throw new \InvalidArgumentException('invalid value for $liquid_assets when calling FinancialHealthCheckRequest., must be bigger than or equal to 0.');
        }

        $this->container['liquid_assets'] = $liquid_assets;

        return $this;
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
     * Gets net_monthly_income
     *
     * @return float
     */
    public function getNetMonthlyIncome()
    {
        return $this->container['net_monthly_income'];
    }

    /**
     * Sets net_monthly_income
     *
     * @param float $net_monthly_income net_monthly_income
     *
     * @return $this
     */
    public function setNetMonthlyIncome($net_monthly_income)
    {

        if (!is_null($net_monthly_income) && ($net_monthly_income < 0)) {
            throw new \InvalidArgumentException('invalid value for $net_monthly_income when calling FinancialHealthCheckRequest., must be bigger than or equal to 0.');
        }

        $this->container['net_monthly_income'] = $net_monthly_income;

        return $this;
    }

    /**
     * Gets total_liabilities
     *
     * @return float
     */
    public function getTotalLiabilities()
    {
        return $this->container['total_liabilities'];
    }

    /**
     * Sets total_liabilities
     *
     * @param float $total_liabilities total_liabilities
     *
     * @return $this
     */
    public function setTotalLiabilities($total_liabilities)
    {

        if (!is_null($total_liabilities) && ($total_liabilities < 0)) {
            throw new \InvalidArgumentException('invalid value for $total_liabilities when calling FinancialHealthCheckRequest., must be bigger than or equal to 0.');
        }

        $this->container['total_liabilities'] = $total_liabilities;

        return $this;
    }

    /**
     * Gets non_liquid_assets
     *
     * @return float
     */
    public function getNonLiquidAssets()
    {
        return $this->container['non_liquid_assets'];
    }

    /**
     * Sets non_liquid_assets
     *
     * @param float $non_liquid_assets non_liquid_assets
     *
     * @return $this
     */
    public function setNonLiquidAssets($non_liquid_assets)
    {

        if (!is_null($non_liquid_assets) && ($non_liquid_assets < 0)) {
            throw new \InvalidArgumentException('invalid value for $non_liquid_assets when calling FinancialHealthCheckRequest., must be bigger than or equal to 0.');
        }

        $this->container['non_liquid_assets'] = $non_liquid_assets;

        return $this;
    }

    /**
     * Gets short_term_liabilities
     *
     * @return float
     */
    public function getShortTermLiabilities()
    {
        return $this->container['short_term_liabilities'];
    }

    /**
     * Sets short_term_liabilities
     *
     * @param float $short_term_liabilities short_term_liabilities
     *
     * @return $this
     */
    public function setShortTermLiabilities($short_term_liabilities)
    {

        if (!is_null($short_term_liabilities) && ($short_term_liabilities < 0)) {
            throw new \InvalidArgumentException('invalid value for $short_term_liabilities when calling FinancialHealthCheckRequest., must be bigger than or equal to 0.');
        }

        $this->container['short_term_liabilities'] = $short_term_liabilities;

        return $this;
    }

    /**
     * Gets monthly_expenses
     *
     * @return float
     */
    public function getMonthlyExpenses()
    {
        return $this->container['monthly_expenses'];
    }

    /**
     * Sets monthly_expenses
     *
     * @param float $monthly_expenses monthly_expenses
     *
     * @return $this
     */
    public function setMonthlyExpenses($monthly_expenses)
    {

        if (!is_null($monthly_expenses) && ($monthly_expenses < 0)) {
            throw new \InvalidArgumentException('invalid value for $monthly_expenses when calling FinancialHealthCheckRequest., must be bigger than or equal to 0.');
        }

        $this->container['monthly_expenses'] = $monthly_expenses;

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


