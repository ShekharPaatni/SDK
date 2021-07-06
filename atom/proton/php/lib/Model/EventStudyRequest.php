<?php
/**
 * EventStudyRequest
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
 * EventStudyRequest Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen\proton
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class EventStudyRequest implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'eventStudyRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'allocation_id' => 'string',
        'events' => 'string[]',
        'market_data_source' => 'string',
        'model_id' => 'string',
        'account_id' => 'string',
        'use_proxy_data' => 'bool',
        'portfolio_weights' => 'float[]',
        'portfolio_tickers' => 'string[]',
        'create_log' => 'bool',
        'aggregation_account_id' => 'string',
        'portfolio_id' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'allocation_id' => 'uuid',
        'events' => null,
        'market_data_source' => null,
        'model_id' => 'uuid',
        'account_id' => 'uuid',
        'use_proxy_data' => null,
        'portfolio_weights' => 'float',
        'portfolio_tickers' => null,
        'create_log' => null,
        'aggregation_account_id' => 'uuid',
        'portfolio_id' => 'uuid'
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
        'allocation_id' => 'allocation_id',
        'events' => 'events',
        'market_data_source' => 'market_data_source',
        'model_id' => 'model_id',
        'account_id' => 'account_id',
        'use_proxy_data' => 'use_proxy_data',
        'portfolio_weights' => 'portfolio_weights',
        'portfolio_tickers' => 'portfolio_tickers',
        'create_log' => 'create_log',
        'aggregation_account_id' => 'aggregation_account_id',
        'portfolio_id' => 'portfolio_id'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'allocation_id' => 'setAllocationId',
        'events' => 'setEvents',
        'market_data_source' => 'setMarketDataSource',
        'model_id' => 'setModelId',
        'account_id' => 'setAccountId',
        'use_proxy_data' => 'setUseProxyData',
        'portfolio_weights' => 'setPortfolioWeights',
        'portfolio_tickers' => 'setPortfolioTickers',
        'create_log' => 'setCreateLog',
        'aggregation_account_id' => 'setAggregationAccountId',
        'portfolio_id' => 'setPortfolioId'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'allocation_id' => 'getAllocationId',
        'events' => 'getEvents',
        'market_data_source' => 'getMarketDataSource',
        'model_id' => 'getModelId',
        'account_id' => 'getAccountId',
        'use_proxy_data' => 'getUseProxyData',
        'portfolio_weights' => 'getPortfolioWeights',
        'portfolio_tickers' => 'getPortfolioTickers',
        'create_log' => 'getCreateLog',
        'aggregation_account_id' => 'getAggregationAccountId',
        'portfolio_id' => 'getPortfolioId'
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

    const EVENTS_DOT_COM_BUBBLE = 'dot_com_bubble';
    const EVENTS__2008_FINANCIAL_CRISIS = '2008_financial_crisis';
    const EVENTS_BREXIT = 'brexit';
    const EVENTS__2011_BLACK_MONDAY = '2011_black_monday';
    const EVENTS_SEPTEMBER_ELEVENTH = 'september_eleventh';
    const EVENTS__1987_BLACK_MONDAY = '1987_black_monday';
    const EVENTS__1992_BLACK_WEDNESDAY = '1992_black_wednesday';
    const EVENTS__1997_ASIAN_FINANCIAL_CRISIS = '1997_asian_financial_crisis';
    const MARKET_DATA_SOURCE_NUCLEUS = 'nucleus';
    const MARKET_DATA_SOURCE_INTEGRATION = 'integration';
    

    
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getEventsAllowableValues()
    {
        return [
            self::EVENTS_DOT_COM_BUBBLE,
            self::EVENTS__2008_FINANCIAL_CRISIS,
            self::EVENTS_BREXIT,
            self::EVENTS__2011_BLACK_MONDAY,
            self::EVENTS_SEPTEMBER_ELEVENTH,
            self::EVENTS__1987_BLACK_MONDAY,
            self::EVENTS__1992_BLACK_WEDNESDAY,
            self::EVENTS__1997_ASIAN_FINANCIAL_CRISIS,
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
        $this->container['allocation_id'] = isset($data['allocation_id']) ? $data['allocation_id'] : null;
        $this->container['events'] = isset($data['events']) ? $data['events'] : null;
        $this->container['market_data_source'] = isset($data['market_data_source']) ? $data['market_data_source'] : 'nucleus';
        $this->container['model_id'] = isset($data['model_id']) ? $data['model_id'] : null;
        $this->container['account_id'] = isset($data['account_id']) ? $data['account_id'] : null;
        $this->container['use_proxy_data'] = isset($data['use_proxy_data']) ? $data['use_proxy_data'] : false;
        $this->container['portfolio_weights'] = isset($data['portfolio_weights']) ? $data['portfolio_weights'] : null;
        $this->container['portfolio_tickers'] = isset($data['portfolio_tickers']) ? $data['portfolio_tickers'] : null;
        $this->container['create_log'] = isset($data['create_log']) ? $data['create_log'] : false;
        $this->container['aggregation_account_id'] = isset($data['aggregation_account_id']) ? $data['aggregation_account_id'] : null;
        $this->container['portfolio_id'] = isset($data['portfolio_id']) ? $data['portfolio_id'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

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
     * Gets events
     *
     * @return string[]
     */
    public function getEvents()
    {
        return $this->container['events'];
    }

    /**
     * Sets events
     *
     * @param string[] $events events
     *
     * @return $this
     */
    public function setEvents($events)
    {
        $allowedValues = $this->getEventsAllowableValues();
        if (!is_null($events) && array_diff($events, $allowedValues)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'events', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['events'] = $events;

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
     * Gets create_log
     *
     * @return bool
     */
    public function getCreateLog()
    {
        return $this->container['create_log'];
    }

    /**
     * Sets create_log
     *
     * @param bool $create_log create_log
     *
     * @return $this
     */
    public function setCreateLog($create_log)
    {
        $this->container['create_log'] = $create_log;

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

