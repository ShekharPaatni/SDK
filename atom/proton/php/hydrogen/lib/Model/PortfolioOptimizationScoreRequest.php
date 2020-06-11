<?php
/**
 * PortfolioOptimizationScoreRequest
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
 * PortfolioOptimizationScoreRequest Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class PortfolioOptimizationScoreRequest implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'portfolioOptimizationScoreRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'use_proxy_data' => 'bool',
        'start_date' => '\DateTime',
        'portfolio_tickers' => 'string[]',
        'end_date' => '\DateTime',
        'model_id' => 'string',
        'allocation_id' => 'string',
        'account_id' => 'string',
        'portfolio_id' => 'string',
        'portfolio_weights' => 'float[]',
        'tgt_type' => 'string',
        'aggregation_account_id' => 'string',
        'opt_config' => 'object',
        'market_data_source' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'use_proxy_data' => null,
        'start_date' => 'date',
        'portfolio_tickers' => null,
        'end_date' => 'date',
        'model_id' => 'uuid',
        'allocation_id' => 'uuid',
        'account_id' => 'uuid',
        'portfolio_id' => 'uuid',
        'portfolio_weights' => 'float',
        'tgt_type' => null,
        'aggregation_account_id' => 'uuid',
        'opt_config' => null,
        'market_data_source' => null
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
        'use_proxy_data' => 'use_proxy_data',
        'start_date' => 'start_date',
        'portfolio_tickers' => 'portfolio_tickers',
        'end_date' => 'end_date',
        'model_id' => 'model_id',
        'allocation_id' => 'allocation_id',
        'account_id' => 'account_id',
        'portfolio_id' => 'portfolio_id',
        'portfolio_weights' => 'portfolio_weights',
        'tgt_type' => 'tgt_type',
        'aggregation_account_id' => 'aggregation_account_id',
        'opt_config' => 'opt_config',
        'market_data_source' => 'market_data_source'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'use_proxy_data' => 'setUseProxyData',
        'start_date' => 'setStartDate',
        'portfolio_tickers' => 'setPortfolioTickers',
        'end_date' => 'setEndDate',
        'model_id' => 'setModelId',
        'allocation_id' => 'setAllocationId',
        'account_id' => 'setAccountId',
        'portfolio_id' => 'setPortfolioId',
        'portfolio_weights' => 'setPortfolioWeights',
        'tgt_type' => 'setTgtType',
        'aggregation_account_id' => 'setAggregationAccountId',
        'opt_config' => 'setOptConfig',
        'market_data_source' => 'setMarketDataSource'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'use_proxy_data' => 'getUseProxyData',
        'start_date' => 'getStartDate',
        'portfolio_tickers' => 'getPortfolioTickers',
        'end_date' => 'getEndDate',
        'model_id' => 'getModelId',
        'allocation_id' => 'getAllocationId',
        'account_id' => 'getAccountId',
        'portfolio_id' => 'getPortfolioId',
        'portfolio_weights' => 'getPortfolioWeights',
        'tgt_type' => 'getTgtType',
        'aggregation_account_id' => 'getAggregationAccountId',
        'opt_config' => 'getOptConfig',
        'market_data_source' => 'getMarketDataSource'
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

    const TGT_TYPE_RISK = 'risk';
    const TGT_TYPE__RETURN = 'return';
    const MARKET_DATA_SOURCE_NUCLEUS = 'nucleus';
    const MARKET_DATA_SOURCE_INTEGRATION = 'integration';
    

    
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getTgtTypeAllowableValues()
    {
        return [
            self::TGT_TYPE_RISK,
            self::TGT_TYPE__RETURN,
        ];
    }
    
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getMarketDataSourceAllowableValues()
    {
        return [
            self::MARKET_DATA_SOURCE_NUCLEUS,
            self::MARKET_DATA_SOURCE_INTEGRATION,
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
        $this->container['use_proxy_data'] = isset($data['use_proxy_data']) ? $data['use_proxy_data'] : false;
        $this->container['start_date'] = isset($data['start_date']) ? $data['start_date'] : null;
        $this->container['portfolio_tickers'] = isset($data['portfolio_tickers']) ? $data['portfolio_tickers'] : null;
        $this->container['end_date'] = isset($data['end_date']) ? $data['end_date'] : null;
        $this->container['model_id'] = isset($data['model_id']) ? $data['model_id'] : null;
        $this->container['allocation_id'] = isset($data['allocation_id']) ? $data['allocation_id'] : null;
        $this->container['account_id'] = isset($data['account_id']) ? $data['account_id'] : null;
        $this->container['portfolio_id'] = isset($data['portfolio_id']) ? $data['portfolio_id'] : null;
        $this->container['portfolio_weights'] = isset($data['portfolio_weights']) ? $data['portfolio_weights'] : null;
        $this->container['tgt_type'] = isset($data['tgt_type']) ? $data['tgt_type'] : 'return';
        $this->container['aggregation_account_id'] = isset($data['aggregation_account_id']) ? $data['aggregation_account_id'] : null;
        $this->container['opt_config'] = isset($data['opt_config']) ? $data['opt_config'] : null;
        $this->container['market_data_source'] = isset($data['market_data_source']) ? $data['market_data_source'] : 'nucleus';
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        $allowedValues = $this->getTgtTypeAllowableValues();
        if (!is_null($this->container['tgt_type']) && !in_array($this->container['tgt_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value for 'tgt_type', must be one of '%s'",
                implode("', '", $allowedValues)
            );
        }

        $allowedValues = $this->getMarketDataSourceAllowableValues();
        if (!is_null($this->container['market_data_source']) && !in_array($this->container['market_data_source'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value for 'market_data_source', must be one of '%s'",
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
     * Gets use_proxy_data
     *
     * @return bool
     */
    public function getUseProxyData()
    {
        return $this->container['use_proxy_data'];
    }

    /**
     * Sets use_proxy_data
     *
     * @param bool $use_proxy_data use_proxy_data
     *
     * @return $this
     */
    public function setUseProxyData($use_proxy_data)
    {
        $this->container['use_proxy_data'] = $use_proxy_data;

        return $this;
    }

    /**
     * Gets start_date
     *
     * @return \DateTime
     */
    public function getStartDate()
    {
        return $this->container['start_date'];
    }

    /**
     * Sets start_date
     *
     * @param \DateTime $start_date start_date
     *
     * @return $this
     */
    public function setStartDate($start_date)
    {
        $this->container['start_date'] = $start_date;

        return $this;
    }

    /**
     * Gets portfolio_tickers
     *
     * @return string[]
     */
    public function getPortfolioTickers()
    {
        return $this->container['portfolio_tickers'];
    }

    /**
     * Sets portfolio_tickers
     *
     * @param string[] $portfolio_tickers portfolio_tickers
     *
     * @return $this
     */
    public function setPortfolioTickers($portfolio_tickers)
    {
        $this->container['portfolio_tickers'] = $portfolio_tickers;

        return $this;
    }

    /**
     * Gets end_date
     *
     * @return \DateTime
     */
    public function getEndDate()
    {
        return $this->container['end_date'];
    }

    /**
     * Sets end_date
     *
     * @param \DateTime $end_date end_date
     *
     * @return $this
     */
    public function setEndDate($end_date)
    {
        $this->container['end_date'] = $end_date;

        return $this;
    }

    /**
     * Gets model_id
     *
     * @return string
     */
    public function getModelId()
    {
        return $this->container['model_id'];
    }

    /**
     * Sets model_id
     *
     * @param string $model_id model_id
     *
     * @return $this
     */
    public function setModelId($model_id)
    {
        $this->container['model_id'] = $model_id;

        return $this;
    }

    /**
     * Gets allocation_id
     *
     * @return string
     */
    public function getAllocationId()
    {
        return $this->container['allocation_id'];
    }

    /**
     * Sets allocation_id
     *
     * @param string $allocation_id allocation_id
     *
     * @return $this
     */
    public function setAllocationId($allocation_id)
    {
        $this->container['allocation_id'] = $allocation_id;

        return $this;
    }

    /**
     * Gets account_id
     *
     * @return string
     */
    public function getAccountId()
    {
        return $this->container['account_id'];
    }

    /**
     * Sets account_id
     *
     * @param string $account_id account_id
     *
     * @return $this
     */
    public function setAccountId($account_id)
    {
        $this->container['account_id'] = $account_id;

        return $this;
    }

    /**
     * Gets portfolio_id
     *
     * @return string
     */
    public function getPortfolioId()
    {
        return $this->container['portfolio_id'];
    }

    /**
     * Sets portfolio_id
     *
     * @param string $portfolio_id portfolio_id
     *
     * @return $this
     */
    public function setPortfolioId($portfolio_id)
    {
        $this->container['portfolio_id'] = $portfolio_id;

        return $this;
    }

    /**
     * Gets portfolio_weights
     *
     * @return float[]
     */
    public function getPortfolioWeights()
    {
        return $this->container['portfolio_weights'];
    }

    /**
     * Sets portfolio_weights
     *
     * @param float[] $portfolio_weights portfolio_weights
     *
     * @return $this
     */
    public function setPortfolioWeights($portfolio_weights)
    {
        $this->container['portfolio_weights'] = $portfolio_weights;

        return $this;
    }

    /**
     * Gets tgt_type
     *
     * @return string
     */
    public function getTgtType()
    {
        return $this->container['tgt_type'];
    }

    /**
     * Sets tgt_type
     *
     * @param string $tgt_type tgt_type
     *
     * @return $this
     */
    public function setTgtType($tgt_type)
    {
        $allowedValues = $this->getTgtTypeAllowableValues();
        if (!is_null($tgt_type) && !in_array($tgt_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'tgt_type', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['tgt_type'] = $tgt_type;

        return $this;
    }

    /**
     * Gets aggregation_account_id
     *
     * @return string
     */
    public function getAggregationAccountId()
    {
        return $this->container['aggregation_account_id'];
    }

    /**
     * Sets aggregation_account_id
     *
     * @param string $aggregation_account_id aggregation_account_id
     *
     * @return $this
     */
    public function setAggregationAccountId($aggregation_account_id)
    {
        $this->container['aggregation_account_id'] = $aggregation_account_id;

        return $this;
    }

    /**
     * Gets opt_config
     *
     * @return object
     */
    public function getOptConfig()
    {
        return $this->container['opt_config'];
    }

    /**
     * Sets opt_config
     *
     * @param object $opt_config opt_config
     *
     * @return $this
     */
    public function setOptConfig($opt_config)
    {
        $this->container['opt_config'] = $opt_config;

        return $this;
    }

    /**
     * Gets market_data_source
     *
     * @return string
     */
    public function getMarketDataSource()
    {
        return $this->container['market_data_source'];
    }

    /**
     * Sets market_data_source
     *
     * @param string $market_data_source market_data_source
     *
     * @return $this
     */
    public function setMarketDataSource($market_data_source)
    {
        $allowedValues = $this->getMarketDataSourceAllowableValues();
        if (!is_null($market_data_source) && !in_array($market_data_source, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'market_data_source', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['market_data_source'] = $market_data_source;

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


