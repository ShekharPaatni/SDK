<?php
/**
 * OptConfig1
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
 * OptConfig1 Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen\proton
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class OptConfig1 implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'OptConfig1';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'tickers' => 'string[]',
        'w_config' => '\com\hydrogen\proton\Model\WConfig1',
        'min_assets' => 'int',
        'w_asset_config' => 'object',
        'sec_types' => 'string[]'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'tickers' => null,
        'w_config' => null,
        'min_assets' => 'int32',
        'w_asset_config' => null,
        'sec_types' => null
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
        'tickers' => 'tickers',
        'w_config' => 'w_config',
        'min_assets' => 'min_assets',
        'w_asset_config' => 'w_asset_config',
        'sec_types' => 'sec_types'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'tickers' => 'setTickers',
        'w_config' => 'setWConfig',
        'min_assets' => 'setMinAssets',
        'w_asset_config' => 'setWAssetConfig',
        'sec_types' => 'setSecTypes'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'tickers' => 'getTickers',
        'w_config' => 'getWConfig',
        'min_assets' => 'getMinAssets',
        'w_asset_config' => 'getWAssetConfig',
        'sec_types' => 'getSecTypes'
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

    const SEC_TYPES_MAJOR = 'major';
    const SEC_TYPES_MINOR = 'minor';
    const SEC_TYPES_CASH = 'cash';
    

    
    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getSecTypesAllowableValues()
    {
        return [
            self::SEC_TYPES_MAJOR,
            self::SEC_TYPES_MINOR,
            self::SEC_TYPES_CASH,
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
        $this->container['tickers'] = isset($data['tickers']) ? $data['tickers'] : null;
        $this->container['w_config'] = isset($data['w_config']) ? $data['w_config'] : null;
        $this->container['min_assets'] = isset($data['min_assets']) ? $data['min_assets'] : 1;
        $this->container['w_asset_config'] = isset($data['w_asset_config']) ? $data['w_asset_config'] : null;
        $this->container['sec_types'] = isset($data['sec_types']) ? $data['sec_types'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if (!is_null($this->container['min_assets']) && ($this->container['min_assets'] < 1)) {
            $invalidProperties[] = "invalid value for 'min_assets', must be bigger than or equal to 1.";
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
     * Gets tickers
     *
     * @return string[]
     */
    public function getTickers()
    {
        return $this->container['tickers'];
    }

    /**
     * Sets tickers
     *
     * @param string[] $tickers tickers
     *
     * @return $this
     */
    public function setTickers($tickers)
    {
        $this->container['tickers'] = $tickers;

        return $this;
    }

    /**
     * Gets w_config
     *
     * @return \com\hydrogen\proton\Model\WConfig1
     */
    public function getWConfig()
    {
        return $this->container['w_config'];
    }

    /**
     * Sets w_config
     *
     * @param \com\hydrogen\proton\Model\WConfig1 $w_config w_config
     *
     * @return $this
     */
    public function setWConfig($w_config)
    {
        $this->container['w_config'] = $w_config;

        return $this;
    }

    /**
     * Gets min_assets
     *
     * @return int
     */
    public function getMinAssets()
    {
        return $this->container['min_assets'];
    }

    /**
     * Sets min_assets
     *
     * @param int $min_assets min_assets
     *
     * @return $this
     */
    public function setMinAssets($min_assets)
    {

        if (!is_null($min_assets) && ($min_assets < 1)) {
            throw new \InvalidArgumentException('invalid value for $min_assets when calling OptConfig1., must be bigger than or equal to 1.');
        }

        $this->container['min_assets'] = $min_assets;

        return $this;
    }

    /**
     * Gets w_asset_config
     *
     * @return object
     */
    public function getWAssetConfig()
    {
        return $this->container['w_asset_config'];
    }

    /**
     * Sets w_asset_config
     *
     * @param object $w_asset_config w_asset_config
     *
     * @return $this
     */
    public function setWAssetConfig($w_asset_config)
    {
        $this->container['w_asset_config'] = $w_asset_config;

        return $this;
    }

    /**
     * Gets sec_types
     *
     * @return string[]
     */
    public function getSecTypes()
    {
        return $this->container['sec_types'];
    }

    /**
     * Sets sec_types
     *
     * @param string[] $sec_types sec_types
     *
     * @return $this
     */
    public function setSecTypes($sec_types)
    {
        $allowedValues = $this->getSecTypesAllowableValues();
        if (!is_null($sec_types) && array_diff($sec_types, $allowedValues)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'sec_types', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['sec_types'] = $sec_types;

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


