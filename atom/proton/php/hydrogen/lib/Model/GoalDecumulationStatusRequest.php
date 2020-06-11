<?php
/**
 * GoalDecumulationStatusRequest
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
 * GoalDecumulationStatusRequest Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class GoalDecumulationStatusRequest implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'goalDecumulationStatusRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'client_id' => 'string',
        'adjust_for_compounding' => 'bool',
        'compounding_rate' => 'float',
        'horizon_frequency' => 'string',
        'conf_tgt' => 'float',
        'd_horizon' => 'int',
        'trading_days_per_year' => 'int',
        'withdrawal_tax' => 'float',
        'thresh_type' => 'string',
        'recommend_type' => 'string',
        'goal_id' => 'string',
        'deposit_config' => 'object[]',
        'n' => 'int',
        'recommendation_config' => 'object',
        'thresh' => 'float',
        'a_horizon' => 'int',
        'withdrawal_config' => '\com\hydrogen\Model\GoalWithdrawalConfig[]',
        'curr_inv' => 'float',
        'p_ret' => 'float[]',
        'p_risk' => 'float[]',
        'remove_outliers' => 'bool'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'client_id' => 'uuid',
        'adjust_for_compounding' => null,
        'compounding_rate' => 'float',
        'horizon_frequency' => null,
        'conf_tgt' => 'float',
        'd_horizon' => 'int32',
        'trading_days_per_year' => 'int32',
        'withdrawal_tax' => 'float',
        'thresh_type' => null,
        'recommend_type' => null,
        'goal_id' => 'uuid',
        'deposit_config' => null,
        'n' => 'int32',
        'recommendation_config' => null,
        'thresh' => null,
        'a_horizon' => 'int32',
        'withdrawal_config' => null,
        'curr_inv' => null,
        'p_ret' => 'float',
        'p_risk' => 'float',
        'remove_outliers' => null
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
        'adjust_for_compounding' => 'adjust_for_compounding',
        'compounding_rate' => 'compounding_rate',
        'horizon_frequency' => 'horizon_frequency',
        'conf_tgt' => 'conf_tgt',
        'd_horizon' => 'd_horizon',
        'trading_days_per_year' => 'trading_days_per_year',
        'withdrawal_tax' => 'withdrawal_tax',
        'thresh_type' => 'thresh_type',
        'recommend_type' => 'recommend_type',
        'goal_id' => 'goal_id',
        'deposit_config' => 'deposit_config',
        'n' => 'n',
        'recommendation_config' => 'recommendation_config',
        'thresh' => 'thresh',
        'a_horizon' => 'a_horizon',
        'withdrawal_config' => 'withdrawal_config',
        'curr_inv' => 'curr_inv',
        'p_ret' => 'p_ret',
        'p_risk' => 'p_risk',
        'remove_outliers' => 'remove_outliers'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'client_id' => 'setClientId',
        'adjust_for_compounding' => 'setAdjustForCompounding',
        'compounding_rate' => 'setCompoundingRate',
        'horizon_frequency' => 'setHorizonFrequency',
        'conf_tgt' => 'setConfTgt',
        'd_horizon' => 'setDHorizon',
        'trading_days_per_year' => 'setTradingDaysPerYear',
        'withdrawal_tax' => 'setWithdrawalTax',
        'thresh_type' => 'setThreshType',
        'recommend_type' => 'setRecommendType',
        'goal_id' => 'setGoalId',
        'deposit_config' => 'setDepositConfig',
        'n' => 'setN',
        'recommendation_config' => 'setRecommendationConfig',
        'thresh' => 'setThresh',
        'a_horizon' => 'setAHorizon',
        'withdrawal_config' => 'setWithdrawalConfig',
        'curr_inv' => 'setCurrInv',
        'p_ret' => 'setPRet',
        'p_risk' => 'setPRisk',
        'remove_outliers' => 'setRemoveOutliers'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'client_id' => 'getClientId',
        'adjust_for_compounding' => 'getAdjustForCompounding',
        'compounding_rate' => 'getCompoundingRate',
        'horizon_frequency' => 'getHorizonFrequency',
        'conf_tgt' => 'getConfTgt',
        'd_horizon' => 'getDHorizon',
        'trading_days_per_year' => 'getTradingDaysPerYear',
        'withdrawal_tax' => 'getWithdrawalTax',
        'thresh_type' => 'getThreshType',
        'recommend_type' => 'getRecommendType',
        'goal_id' => 'getGoalId',
        'deposit_config' => 'getDepositConfig',
        'n' => 'getN',
        'recommendation_config' => 'getRecommendationConfig',
        'thresh' => 'getThresh',
        'a_horizon' => 'getAHorizon',
        'withdrawal_config' => 'getWithdrawalConfig',
        'curr_inv' => 'getCurrInv',
        'p_ret' => 'getPRet',
        'p_risk' => 'getPRisk',
        'remove_outliers' => 'getRemoveOutliers'
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

    const HORIZON_FREQUENCY_YEAR = 'year';
    const HORIZON_FREQUENCY_SIX_MONTHS = 'six_months';
    const HORIZON_FREQUENCY_QUARTER = 'quarter';
    const HORIZON_FREQUENCY_MONTH = 'month';
    const HORIZON_FREQUENCY_TWO_WEEKS = 'two_weeks';
    const HORIZON_FREQUENCY_WEEK = 'week';
    const HORIZON_FREQUENCY_DAY = 'day';
    const THRESH_TYPE_AMNT = 'amnt';
    const THRESH_TYPE_PERC = 'perc';
    const RECOMMEND_TYPE_RECURRING = 'recurring';
    const RECOMMEND_TYPE_ONE_TIME = 'one-time';
    const RECOMMEND_TYPE_COMBO = 'combo';
    const RECOMMEND_TYPE_HORIZON = 'horizon';
    

    
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getHorizonFrequencyAllowableValues()
    {
        return [
            self::HORIZON_FREQUENCY_YEAR,
            self::HORIZON_FREQUENCY_SIX_MONTHS,
            self::HORIZON_FREQUENCY_QUARTER,
            self::HORIZON_FREQUENCY_MONTH,
            self::HORIZON_FREQUENCY_TWO_WEEKS,
            self::HORIZON_FREQUENCY_WEEK,
            self::HORIZON_FREQUENCY_DAY,
        ];
    }
    
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getThreshTypeAllowableValues()
    {
        return [
            self::THRESH_TYPE_AMNT,
            self::THRESH_TYPE_PERC,
        ];
    }
    
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getRecommendTypeAllowableValues()
    {
        return [
            self::RECOMMEND_TYPE_RECURRING,
            self::RECOMMEND_TYPE_ONE_TIME,
            self::RECOMMEND_TYPE_COMBO,
            self::RECOMMEND_TYPE_HORIZON,
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
        $this->container['adjust_for_compounding'] = isset($data['adjust_for_compounding']) ? $data['adjust_for_compounding'] : false;
        $this->container['compounding_rate'] = isset($data['compounding_rate']) ? $data['compounding_rate'] : 0.0;
        $this->container['horizon_frequency'] = isset($data['horizon_frequency']) ? $data['horizon_frequency'] : 'year';
        $this->container['conf_tgt'] = isset($data['conf_tgt']) ? $data['conf_tgt'] : 0.9;
        $this->container['d_horizon'] = isset($data['d_horizon']) ? $data['d_horizon'] : null;
        $this->container['trading_days_per_year'] = isset($data['trading_days_per_year']) ? $data['trading_days_per_year'] : 252;
        $this->container['withdrawal_tax'] = isset($data['withdrawal_tax']) ? $data['withdrawal_tax'] : 0.0;
        $this->container['thresh_type'] = isset($data['thresh_type']) ? $data['thresh_type'] : 'perc';
        $this->container['recommend_type'] = isset($data['recommend_type']) ? $data['recommend_type'] : 'horizon';
        $this->container['goal_id'] = isset($data['goal_id']) ? $data['goal_id'] : null;
        $this->container['deposit_config'] = isset($data['deposit_config']) ? $data['deposit_config'] : null;
        $this->container['n'] = isset($data['n']) ? $data['n'] : 1000;
        $this->container['recommendation_config'] = isset($data['recommendation_config']) ? $data['recommendation_config'] : null;
        $this->container['thresh'] = isset($data['thresh']) ? $data['thresh'] : null;
        $this->container['a_horizon'] = isset($data['a_horizon']) ? $data['a_horizon'] : null;
        $this->container['withdrawal_config'] = isset($data['withdrawal_config']) ? $data['withdrawal_config'] : null;
        $this->container['curr_inv'] = isset($data['curr_inv']) ? $data['curr_inv'] : null;
        $this->container['p_ret'] = isset($data['p_ret']) ? $data['p_ret'] : null;
        $this->container['p_risk'] = isset($data['p_risk']) ? $data['p_risk'] : null;
        $this->container['remove_outliers'] = isset($data['remove_outliers']) ? $data['remove_outliers'] : true;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if (!is_null($this->container['compounding_rate']) && ($this->container['compounding_rate'] < -1)) {
            $invalidProperties[] = "invalid value for 'compounding_rate', must be bigger than or equal to -1.";
        }

        $allowedValues = $this->getHorizonFrequencyAllowableValues();
        if (!is_null($this->container['horizon_frequency']) && !in_array($this->container['horizon_frequency'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value for 'horizon_frequency', must be one of '%s'",
                implode("', '", $allowedValues)
            );
        }

        if (!is_null($this->container['conf_tgt']) && ($this->container['conf_tgt'] > 1)) {
            $invalidProperties[] = "invalid value for 'conf_tgt', must be smaller than or equal to 1.";
        }

        if (!is_null($this->container['conf_tgt']) && ($this->container['conf_tgt'] < 0)) {
            $invalidProperties[] = "invalid value for 'conf_tgt', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['d_horizon']) && ($this->container['d_horizon'] > 350)) {
            $invalidProperties[] = "invalid value for 'd_horizon', must be smaller than or equal to 350.";
        }

        if (!is_null($this->container['d_horizon']) && ($this->container['d_horizon'] < 0)) {
            $invalidProperties[] = "invalid value for 'd_horizon', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['trading_days_per_year']) && ($this->container['trading_days_per_year'] > 365)) {
            $invalidProperties[] = "invalid value for 'trading_days_per_year', must be smaller than or equal to 365.";
        }

        if (!is_null($this->container['trading_days_per_year']) && ($this->container['trading_days_per_year'] < 1)) {
            $invalidProperties[] = "invalid value for 'trading_days_per_year', must be bigger than or equal to 1.";
        }

        if (!is_null($this->container['withdrawal_tax']) && ($this->container['withdrawal_tax'] > 1)) {
            $invalidProperties[] = "invalid value for 'withdrawal_tax', must be smaller than or equal to 1.";
        }

        if (!is_null($this->container['withdrawal_tax']) && ($this->container['withdrawal_tax'] < 0)) {
            $invalidProperties[] = "invalid value for 'withdrawal_tax', must be bigger than or equal to 0.";
        }

        $allowedValues = $this->getThreshTypeAllowableValues();
        if (!is_null($this->container['thresh_type']) && !in_array($this->container['thresh_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value for 'thresh_type', must be one of '%s'",
                implode("', '", $allowedValues)
            );
        }

        $allowedValues = $this->getRecommendTypeAllowableValues();
        if (!is_null($this->container['recommend_type']) && !in_array($this->container['recommend_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value for 'recommend_type', must be one of '%s'",
                implode("', '", $allowedValues)
            );
        }

        if (!is_null($this->container['n']) && ($this->container['n'] > 10000)) {
            $invalidProperties[] = "invalid value for 'n', must be smaller than or equal to 10000.";
        }

        if (!is_null($this->container['n']) && ($this->container['n'] < 1)) {
            $invalidProperties[] = "invalid value for 'n', must be bigger than or equal to 1.";
        }

        if (!is_null($this->container['thresh']) && ($this->container['thresh'] < 0)) {
            $invalidProperties[] = "invalid value for 'thresh', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['a_horizon']) && ($this->container['a_horizon'] > 350)) {
            $invalidProperties[] = "invalid value for 'a_horizon', must be smaller than or equal to 350.";
        }

        if (!is_null($this->container['a_horizon']) && ($this->container['a_horizon'] < 0)) {
            $invalidProperties[] = "invalid value for 'a_horizon', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['curr_inv']) && ($this->container['curr_inv'] < 0)) {
            $invalidProperties[] = "invalid value for 'curr_inv', must be bigger than or equal to 0.";
        }

        if ($this->container['p_ret'] === null) {
            $invalidProperties[] = "'p_ret' can't be null";
        }
        if ($this->container['p_risk'] === null) {
            $invalidProperties[] = "'p_risk' can't be null";
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
     * Gets adjust_for_compounding
     *
     * @return bool
     */
    public function getAdjustForCompounding()
    {
        return $this->container['adjust_for_compounding'];
    }

    /**
     * Sets adjust_for_compounding
     *
     * @param bool $adjust_for_compounding adjust_for_compounding
     *
     * @return $this
     */
    public function setAdjustForCompounding($adjust_for_compounding)
    {
        $this->container['adjust_for_compounding'] = $adjust_for_compounding;

        return $this;
    }

    /**
     * Gets compounding_rate
     *
     * @return float
     */
    public function getCompoundingRate()
    {
        return $this->container['compounding_rate'];
    }

    /**
     * Sets compounding_rate
     *
     * @param float $compounding_rate compounding_rate
     *
     * @return $this
     */
    public function setCompoundingRate($compounding_rate)
    {

        if (!is_null($compounding_rate) && ($compounding_rate < -1)) {
            throw new \InvalidArgumentException('invalid value for $compounding_rate when calling GoalDecumulationStatusRequest., must be bigger than or equal to -1.');
        }

        $this->container['compounding_rate'] = $compounding_rate;

        return $this;
    }

    /**
     * Gets horizon_frequency
     *
     * @return string
     */
    public function getHorizonFrequency()
    {
        return $this->container['horizon_frequency'];
    }

    /**
     * Sets horizon_frequency
     *
     * @param string $horizon_frequency horizon_frequency
     *
     * @return $this
     */
    public function setHorizonFrequency($horizon_frequency)
    {
        $allowedValues = $this->getHorizonFrequencyAllowableValues();
        if (!is_null($horizon_frequency) && !in_array($horizon_frequency, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'horizon_frequency', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['horizon_frequency'] = $horizon_frequency;

        return $this;
    }

    /**
     * Gets conf_tgt
     *
     * @return float
     */
    public function getConfTgt()
    {
        return $this->container['conf_tgt'];
    }

    /**
     * Sets conf_tgt
     *
     * @param float $conf_tgt conf_tgt
     *
     * @return $this
     */
    public function setConfTgt($conf_tgt)
    {

        if (!is_null($conf_tgt) && ($conf_tgt > 1)) {
            throw new \InvalidArgumentException('invalid value for $conf_tgt when calling GoalDecumulationStatusRequest., must be smaller than or equal to 1.');
        }
        if (!is_null($conf_tgt) && ($conf_tgt < 0)) {
            throw new \InvalidArgumentException('invalid value for $conf_tgt when calling GoalDecumulationStatusRequest., must be bigger than or equal to 0.');
        }

        $this->container['conf_tgt'] = $conf_tgt;

        return $this;
    }

    /**
     * Gets d_horizon
     *
     * @return int
     */
    public function getDHorizon()
    {
        return $this->container['d_horizon'];
    }

    /**
     * Sets d_horizon
     *
     * @param int $d_horizon d_horizon
     *
     * @return $this
     */
    public function setDHorizon($d_horizon)
    {

        if (!is_null($d_horizon) && ($d_horizon > 350)) {
            throw new \InvalidArgumentException('invalid value for $d_horizon when calling GoalDecumulationStatusRequest., must be smaller than or equal to 350.');
        }
        if (!is_null($d_horizon) && ($d_horizon < 0)) {
            throw new \InvalidArgumentException('invalid value for $d_horizon when calling GoalDecumulationStatusRequest., must be bigger than or equal to 0.');
        }

        $this->container['d_horizon'] = $d_horizon;

        return $this;
    }

    /**
     * Gets trading_days_per_year
     *
     * @return int
     */
    public function getTradingDaysPerYear()
    {
        return $this->container['trading_days_per_year'];
    }

    /**
     * Sets trading_days_per_year
     *
     * @param int $trading_days_per_year trading_days_per_year
     *
     * @return $this
     */
    public function setTradingDaysPerYear($trading_days_per_year)
    {

        if (!is_null($trading_days_per_year) && ($trading_days_per_year > 365)) {
            throw new \InvalidArgumentException('invalid value for $trading_days_per_year when calling GoalDecumulationStatusRequest., must be smaller than or equal to 365.');
        }
        if (!is_null($trading_days_per_year) && ($trading_days_per_year < 1)) {
            throw new \InvalidArgumentException('invalid value for $trading_days_per_year when calling GoalDecumulationStatusRequest., must be bigger than or equal to 1.');
        }

        $this->container['trading_days_per_year'] = $trading_days_per_year;

        return $this;
    }

    /**
     * Gets withdrawal_tax
     *
     * @return float
     */
    public function getWithdrawalTax()
    {
        return $this->container['withdrawal_tax'];
    }

    /**
     * Sets withdrawal_tax
     *
     * @param float $withdrawal_tax withdrawal_tax
     *
     * @return $this
     */
    public function setWithdrawalTax($withdrawal_tax)
    {

        if (!is_null($withdrawal_tax) && ($withdrawal_tax > 1)) {
            throw new \InvalidArgumentException('invalid value for $withdrawal_tax when calling GoalDecumulationStatusRequest., must be smaller than or equal to 1.');
        }
        if (!is_null($withdrawal_tax) && ($withdrawal_tax < 0)) {
            throw new \InvalidArgumentException('invalid value for $withdrawal_tax when calling GoalDecumulationStatusRequest., must be bigger than or equal to 0.');
        }

        $this->container['withdrawal_tax'] = $withdrawal_tax;

        return $this;
    }

    /**
     * Gets thresh_type
     *
     * @return string
     */
    public function getThreshType()
    {
        return $this->container['thresh_type'];
    }

    /**
     * Sets thresh_type
     *
     * @param string $thresh_type thresh_type
     *
     * @return $this
     */
    public function setThreshType($thresh_type)
    {
        $allowedValues = $this->getThreshTypeAllowableValues();
        if (!is_null($thresh_type) && !in_array($thresh_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'thresh_type', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['thresh_type'] = $thresh_type;

        return $this;
    }

    /**
     * Gets recommend_type
     *
     * @return string
     */
    public function getRecommendType()
    {
        return $this->container['recommend_type'];
    }

    /**
     * Sets recommend_type
     *
     * @param string $recommend_type recommend_type
     *
     * @return $this
     */
    public function setRecommendType($recommend_type)
    {
        $allowedValues = $this->getRecommendTypeAllowableValues();
        if (!is_null($recommend_type) && !in_array($recommend_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'recommend_type', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['recommend_type'] = $recommend_type;

        return $this;
    }

    /**
     * Gets goal_id
     *
     * @return string
     */
    public function getGoalId()
    {
        return $this->container['goal_id'];
    }

    /**
     * Sets goal_id
     *
     * @param string $goal_id goal_id
     *
     * @return $this
     */
    public function setGoalId($goal_id)
    {
        $this->container['goal_id'] = $goal_id;

        return $this;
    }

    /**
     * Gets deposit_config
     *
     * @return object[]
     */
    public function getDepositConfig()
    {
        return $this->container['deposit_config'];
    }

    /**
     * Sets deposit_config
     *
     * @param object[] $deposit_config deposit_config
     *
     * @return $this
     */
    public function setDepositConfig($deposit_config)
    {
        $this->container['deposit_config'] = $deposit_config;

        return $this;
    }

    /**
     * Gets n
     *
     * @return int
     */
    public function getN()
    {
        return $this->container['n'];
    }

    /**
     * Sets n
     *
     * @param int $n n
     *
     * @return $this
     */
    public function setN($n)
    {

        if (!is_null($n) && ($n > 10000)) {
            throw new \InvalidArgumentException('invalid value for $n when calling GoalDecumulationStatusRequest., must be smaller than or equal to 10000.');
        }
        if (!is_null($n) && ($n < 1)) {
            throw new \InvalidArgumentException('invalid value for $n when calling GoalDecumulationStatusRequest., must be bigger than or equal to 1.');
        }

        $this->container['n'] = $n;

        return $this;
    }

    /**
     * Gets recommendation_config
     *
     * @return object
     */
    public function getRecommendationConfig()
    {
        return $this->container['recommendation_config'];
    }

    /**
     * Sets recommendation_config
     *
     * @param object $recommendation_config recommendation_config
     *
     * @return $this
     */
    public function setRecommendationConfig($recommendation_config)
    {
        $this->container['recommendation_config'] = $recommendation_config;

        return $this;
    }

    /**
     * Gets thresh
     *
     * @return float
     */
    public function getThresh()
    {
        return $this->container['thresh'];
    }

    /**
     * Sets thresh
     *
     * @param float $thresh thresh
     *
     * @return $this
     */
    public function setThresh($thresh)
    {

        if (!is_null($thresh) && ($thresh < 0)) {
            throw new \InvalidArgumentException('invalid value for $thresh when calling GoalDecumulationStatusRequest., must be bigger than or equal to 0.');
        }

        $this->container['thresh'] = $thresh;

        return $this;
    }

    /**
     * Gets a_horizon
     *
     * @return int
     */
    public function getAHorizon()
    {
        return $this->container['a_horizon'];
    }

    /**
     * Sets a_horizon
     *
     * @param int $a_horizon a_horizon
     *
     * @return $this
     */
    public function setAHorizon($a_horizon)
    {

        if (!is_null($a_horizon) && ($a_horizon > 350)) {
            throw new \InvalidArgumentException('invalid value for $a_horizon when calling GoalDecumulationStatusRequest., must be smaller than or equal to 350.');
        }
        if (!is_null($a_horizon) && ($a_horizon < 0)) {
            throw new \InvalidArgumentException('invalid value for $a_horizon when calling GoalDecumulationStatusRequest., must be bigger than or equal to 0.');
        }

        $this->container['a_horizon'] = $a_horizon;

        return $this;
    }

    /**
     * Gets withdrawal_config
     *
     * @return \com\hydrogen\Model\GoalWithdrawalConfig[]
     */
    public function getWithdrawalConfig()
    {
        return $this->container['withdrawal_config'];
    }

    /**
     * Sets withdrawal_config
     *
     * @param \com\hydrogen\Model\GoalWithdrawalConfig[] $withdrawal_config withdrawal_config
     *
     * @return $this
     */
    public function setWithdrawalConfig($withdrawal_config)
    {
        $this->container['withdrawal_config'] = $withdrawal_config;

        return $this;
    }

    /**
     * Gets curr_inv
     *
     * @return float
     */
    public function getCurrInv()
    {
        return $this->container['curr_inv'];
    }

    /**
     * Sets curr_inv
     *
     * @param float $curr_inv curr_inv
     *
     * @return $this
     */
    public function setCurrInv($curr_inv)
    {

        if (!is_null($curr_inv) && ($curr_inv < 0)) {
            throw new \InvalidArgumentException('invalid value for $curr_inv when calling GoalDecumulationStatusRequest., must be bigger than or equal to 0.');
        }

        $this->container['curr_inv'] = $curr_inv;

        return $this;
    }

    /**
     * Gets p_ret
     *
     * @return float[]
     */
    public function getPRet()
    {
        return $this->container['p_ret'];
    }

    /**
     * Sets p_ret
     *
     * @param float[] $p_ret p_ret
     *
     * @return $this
     */
    public function setPRet($p_ret)
    {
        $this->container['p_ret'] = $p_ret;

        return $this;
    }

    /**
     * Gets p_risk
     *
     * @return float[]
     */
    public function getPRisk()
    {
        return $this->container['p_risk'];
    }

    /**
     * Sets p_risk
     *
     * @param float[] $p_risk p_risk
     *
     * @return $this
     */
    public function setPRisk($p_risk)
    {
        $this->container['p_risk'] = $p_risk;

        return $this;
    }

    /**
     * Gets remove_outliers
     *
     * @return bool
     */
    public function getRemoveOutliers()
    {
        return $this->container['remove_outliers'];
    }

    /**
     * Sets remove_outliers
     *
     * @param bool $remove_outliers remove_outliers
     *
     * @return $this
     */
    public function setRemoveOutliers($remove_outliers)
    {
        $this->container['remove_outliers'] = $remove_outliers;

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


