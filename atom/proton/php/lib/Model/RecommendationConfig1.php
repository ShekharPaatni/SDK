<?php
/**
 * RecommendationConfig1
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
 * RecommendationConfig1 Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen\proton
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class RecommendationConfig1 implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'RecommendationConfig1';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'horizon_max' => 'int',
        'dep_min' => 'float',
        'inv_max' => 'float',
        'inv_min' => 'float',
        'recommended_inflation' => 'float',
        'horizon_min' => 'int',
        'dep_max' => 'float'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'horizon_max' => 'int32',
        'dep_min' => null,
        'inv_max' => null,
        'inv_min' => null,
        'recommended_inflation' => 'float',
        'horizon_min' => 'int32',
        'dep_max' => null
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
        'horizon_max' => 'horizon_max',
        'dep_min' => 'dep_min',
        'inv_max' => 'inv_max',
        'inv_min' => 'inv_min',
        'recommended_inflation' => 'recommended_inflation',
        'horizon_min' => 'horizon_min',
        'dep_max' => 'dep_max'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'horizon_max' => 'setHorizonMax',
        'dep_min' => 'setDepMin',
        'inv_max' => 'setInvMax',
        'inv_min' => 'setInvMin',
        'recommended_inflation' => 'setRecommendedInflation',
        'horizon_min' => 'setHorizonMin',
        'dep_max' => 'setDepMax'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'horizon_max' => 'getHorizonMax',
        'dep_min' => 'getDepMin',
        'inv_max' => 'getInvMax',
        'inv_min' => 'getInvMin',
        'recommended_inflation' => 'getRecommendedInflation',
        'horizon_min' => 'getHorizonMin',
        'dep_max' => 'getDepMax'
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
        $this->container['horizon_max'] = isset($data['horizon_max']) ? $data['horizon_max'] : 64;
        $this->container['dep_min'] = isset($data['dep_min']) ? $data['dep_min'] : null;
        $this->container['inv_max'] = isset($data['inv_max']) ? $data['inv_max'] : null;
        $this->container['inv_min'] = isset($data['inv_min']) ? $data['inv_min'] : null;
        $this->container['recommended_inflation'] = isset($data['recommended_inflation']) ? $data['recommended_inflation'] : 0.0;
        $this->container['horizon_min'] = isset($data['horizon_min']) ? $data['horizon_min'] : 1;
        $this->container['dep_max'] = isset($data['dep_max']) ? $data['dep_max'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if (!is_null($this->container['horizon_max']) && ($this->container['horizon_max'] < 0)) {
            $invalidProperties[] = "invalid value for 'horizon_max', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['dep_min']) && ($this->container['dep_min'] < 0)) {
            $invalidProperties[] = "invalid value for 'dep_min', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['inv_max']) && ($this->container['inv_max'] < 0)) {
            $invalidProperties[] = "invalid value for 'inv_max', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['inv_min']) && ($this->container['inv_min'] < 0)) {
            $invalidProperties[] = "invalid value for 'inv_min', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['recommended_inflation']) && ($this->container['recommended_inflation'] < -1)) {
            $invalidProperties[] = "invalid value for 'recommended_inflation', must be bigger than or equal to -1.";
        }

        if (!is_null($this->container['horizon_min']) && ($this->container['horizon_min'] < 0)) {
            $invalidProperties[] = "invalid value for 'horizon_min', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['dep_max']) && ($this->container['dep_max'] < 0)) {
            $invalidProperties[] = "invalid value for 'dep_max', must be bigger than or equal to 0.";
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
     * Gets horizon_max
     *
     * @return int
     */
    public function getHorizonMax()
    {
        return $this->container['horizon_max'];
    }

    /**
     * Sets horizon_max
     *
     * @param int $horizon_max horizon_max
     *
     * @return $this
     */
    public function setHorizonMax($horizon_max)
    {

        if (!is_null($horizon_max) && ($horizon_max < 0)) {
            throw new \InvalidArgumentException('invalid value for $horizon_max when calling RecommendationConfig1., must be bigger than or equal to 0.');
        }

        $this->container['horizon_max'] = $horizon_max;

        return $this;
    }

    /**
     * Gets dep_min
     *
     * @return float
     */
    public function getDepMin()
    {
        return $this->container['dep_min'];
    }

    /**
     * Sets dep_min
     *
     * @param float $dep_min dep_min
     *
     * @return $this
     */
    public function setDepMin($dep_min)
    {

        if (!is_null($dep_min) && ($dep_min < 0)) {
            throw new \InvalidArgumentException('invalid value for $dep_min when calling RecommendationConfig1., must be bigger than or equal to 0.');
        }

        $this->container['dep_min'] = $dep_min;

        return $this;
    }

    /**
     * Gets inv_max
     *
     * @return float
     */
    public function getInvMax()
    {
        return $this->container['inv_max'];
    }

    /**
     * Sets inv_max
     *
     * @param float $inv_max inv_max
     *
     * @return $this
     */
    public function setInvMax($inv_max)
    {

        if (!is_null($inv_max) && ($inv_max < 0)) {
            throw new \InvalidArgumentException('invalid value for $inv_max when calling RecommendationConfig1., must be bigger than or equal to 0.');
        }

        $this->container['inv_max'] = $inv_max;

        return $this;
    }

    /**
     * Gets inv_min
     *
     * @return float
     */
    public function getInvMin()
    {
        return $this->container['inv_min'];
    }

    /**
     * Sets inv_min
     *
     * @param float $inv_min inv_min
     *
     * @return $this
     */
    public function setInvMin($inv_min)
    {

        if (!is_null($inv_min) && ($inv_min < 0)) {
            throw new \InvalidArgumentException('invalid value for $inv_min when calling RecommendationConfig1., must be bigger than or equal to 0.');
        }

        $this->container['inv_min'] = $inv_min;

        return $this;
    }

    /**
     * Gets recommended_inflation
     *
     * @return float
     */
    public function getRecommendedInflation()
    {
        return $this->container['recommended_inflation'];
    }

    /**
     * Sets recommended_inflation
     *
     * @param float $recommended_inflation recommended_inflation
     *
     * @return $this
     */
    public function setRecommendedInflation($recommended_inflation)
    {

        if (!is_null($recommended_inflation) && ($recommended_inflation < -1)) {
            throw new \InvalidArgumentException('invalid value for $recommended_inflation when calling RecommendationConfig1., must be bigger than or equal to -1.');
        }

        $this->container['recommended_inflation'] = $recommended_inflation;

        return $this;
    }

    /**
     * Gets horizon_min
     *
     * @return int
     */
    public function getHorizonMin()
    {
        return $this->container['horizon_min'];
    }

    /**
     * Sets horizon_min
     *
     * @param int $horizon_min horizon_min
     *
     * @return $this
     */
    public function setHorizonMin($horizon_min)
    {

        if (!is_null($horizon_min) && ($horizon_min < 0)) {
            throw new \InvalidArgumentException('invalid value for $horizon_min when calling RecommendationConfig1., must be bigger than or equal to 0.');
        }

        $this->container['horizon_min'] = $horizon_min;

        return $this;
    }

    /**
     * Gets dep_max
     *
     * @return float
     */
    public function getDepMax()
    {
        return $this->container['dep_max'];
    }

    /**
     * Sets dep_max
     *
     * @param float $dep_max dep_max
     *
     * @return $this
     */
    public function setDepMax($dep_max)
    {

        if (!is_null($dep_max) && ($dep_max < 0)) {
            throw new \InvalidArgumentException('invalid value for $dep_max when calling RecommendationConfig1., must be bigger than or equal to 0.');
        }

        $this->container['dep_max'] = $dep_max;

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


