<?php
/**
 * WConfig1
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
 * WConfig1 Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen\proton
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class WConfig1 implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'WConfig1';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'w_min_minor' => 'float',
        'w_min_major' => 'float',
        'cash_amount' => 'float',
        'w_max_major' => 'float',
        'w_max_minor' => 'float'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'w_min_minor' => 'float',
        'w_min_major' => 'float',
        'cash_amount' => 'float',
        'w_max_major' => 'float',
        'w_max_minor' => 'float'
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
        'w_min_minor' => 'w_min_minor',
        'w_min_major' => 'w_min_major',
        'cash_amount' => 'cash_amount',
        'w_max_major' => 'w_max_major',
        'w_max_minor' => 'w_max_minor'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'w_min_minor' => 'setWMinMinor',
        'w_min_major' => 'setWMinMajor',
        'cash_amount' => 'setCashAmount',
        'w_max_major' => 'setWMaxMajor',
        'w_max_minor' => 'setWMaxMinor'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'w_min_minor' => 'getWMinMinor',
        'w_min_major' => 'getWMinMajor',
        'cash_amount' => 'getCashAmount',
        'w_max_major' => 'getWMaxMajor',
        'w_max_minor' => 'getWMaxMinor'
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
        $this->container['w_min_minor'] = isset($data['w_min_minor']) ? $data['w_min_minor'] : 0.05;
        $this->container['w_min_major'] = isset($data['w_min_major']) ? $data['w_min_major'] : 0.05;
        $this->container['cash_amount'] = isset($data['cash_amount']) ? $data['cash_amount'] : 0.0;
        $this->container['w_max_major'] = isset($data['w_max_major']) ? $data['w_max_major'] : 1.0;
        $this->container['w_max_minor'] = isset($data['w_max_minor']) ? $data['w_max_minor'] : 1.0;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if (!is_null($this->container['w_min_minor']) && ($this->container['w_min_minor'] > 1)) {
            $invalidProperties[] = "invalid value for 'w_min_minor', must be smaller than or equal to 1.";
        }

        if (!is_null($this->container['w_min_minor']) && ($this->container['w_min_minor'] < 0)) {
            $invalidProperties[] = "invalid value for 'w_min_minor', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['w_min_major']) && ($this->container['w_min_major'] > 1)) {
            $invalidProperties[] = "invalid value for 'w_min_major', must be smaller than or equal to 1.";
        }

        if (!is_null($this->container['w_min_major']) && ($this->container['w_min_major'] < 0)) {
            $invalidProperties[] = "invalid value for 'w_min_major', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['cash_amount']) && ($this->container['cash_amount'] > 1)) {
            $invalidProperties[] = "invalid value for 'cash_amount', must be smaller than or equal to 1.";
        }

        if (!is_null($this->container['cash_amount']) && ($this->container['cash_amount'] < 0)) {
            $invalidProperties[] = "invalid value for 'cash_amount', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['w_max_major']) && ($this->container['w_max_major'] > 1)) {
            $invalidProperties[] = "invalid value for 'w_max_major', must be smaller than or equal to 1.";
        }

        if (!is_null($this->container['w_max_major']) && ($this->container['w_max_major'] < 0)) {
            $invalidProperties[] = "invalid value for 'w_max_major', must be bigger than or equal to 0.";
        }

        if (!is_null($this->container['w_max_minor']) && ($this->container['w_max_minor'] > 1)) {
            $invalidProperties[] = "invalid value for 'w_max_minor', must be smaller than or equal to 1.";
        }

        if (!is_null($this->container['w_max_minor']) && ($this->container['w_max_minor'] < 0)) {
            $invalidProperties[] = "invalid value for 'w_max_minor', must be bigger than or equal to 0.";
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
     * Gets w_min_minor
     *
     * @return float
     */
    public function getWMinMinor()
    {
        return $this->container['w_min_minor'];
    }

    /**
     * Sets w_min_minor
     *
     * @param float $w_min_minor w_min_minor
     *
     * @return $this
     */
    public function setWMinMinor($w_min_minor)
    {

        if (!is_null($w_min_minor) && ($w_min_minor > 1)) {
            throw new \InvalidArgumentException('invalid value for $w_min_minor when calling WConfig1., must be smaller than or equal to 1.');
        }
        if (!is_null($w_min_minor) && ($w_min_minor < 0)) {
            throw new \InvalidArgumentException('invalid value for $w_min_minor when calling WConfig1., must be bigger than or equal to 0.');
        }

        $this->container['w_min_minor'] = $w_min_minor;

        return $this;
    }

    /**
     * Gets w_min_major
     *
     * @return float
     */
    public function getWMinMajor()
    {
        return $this->container['w_min_major'];
    }

    /**
     * Sets w_min_major
     *
     * @param float $w_min_major w_min_major
     *
     * @return $this
     */
    public function setWMinMajor($w_min_major)
    {

        if (!is_null($w_min_major) && ($w_min_major > 1)) {
            throw new \InvalidArgumentException('invalid value for $w_min_major when calling WConfig1., must be smaller than or equal to 1.');
        }
        if (!is_null($w_min_major) && ($w_min_major < 0)) {
            throw new \InvalidArgumentException('invalid value for $w_min_major when calling WConfig1., must be bigger than or equal to 0.');
        }

        $this->container['w_min_major'] = $w_min_major;

        return $this;
    }

    /**
     * Gets cash_amount
     *
     * @return float
     */
    public function getCashAmount()
    {
        return $this->container['cash_amount'];
    }

    /**
     * Sets cash_amount
     *
     * @param float $cash_amount cash_amount
     *
     * @return $this
     */
    public function setCashAmount($cash_amount)
    {

        if (!is_null($cash_amount) && ($cash_amount > 1)) {
            throw new \InvalidArgumentException('invalid value for $cash_amount when calling WConfig1., must be smaller than or equal to 1.');
        }
        if (!is_null($cash_amount) && ($cash_amount < 0)) {
            throw new \InvalidArgumentException('invalid value for $cash_amount when calling WConfig1., must be bigger than or equal to 0.');
        }

        $this->container['cash_amount'] = $cash_amount;

        return $this;
    }

    /**
     * Gets w_max_major
     *
     * @return float
     */
    public function getWMaxMajor()
    {
        return $this->container['w_max_major'];
    }

    /**
     * Sets w_max_major
     *
     * @param float $w_max_major w_max_major
     *
     * @return $this
     */
    public function setWMaxMajor($w_max_major)
    {

        if (!is_null($w_max_major) && ($w_max_major > 1)) {
            throw new \InvalidArgumentException('invalid value for $w_max_major when calling WConfig1., must be smaller than or equal to 1.');
        }
        if (!is_null($w_max_major) && ($w_max_major < 0)) {
            throw new \InvalidArgumentException('invalid value for $w_max_major when calling WConfig1., must be bigger than or equal to 0.');
        }

        $this->container['w_max_major'] = $w_max_major;

        return $this;
    }

    /**
     * Gets w_max_minor
     *
     * @return float
     */
    public function getWMaxMinor()
    {
        return $this->container['w_max_minor'];
    }

    /**
     * Sets w_max_minor
     *
     * @param float $w_max_minor w_max_minor
     *
     * @return $this
     */
    public function setWMaxMinor($w_max_minor)
    {

        if (!is_null($w_max_minor) && ($w_max_minor > 1)) {
            throw new \InvalidArgumentException('invalid value for $w_max_minor when calling WConfig1., must be smaller than or equal to 1.');
        }
        if (!is_null($w_max_minor) && ($w_max_minor < 0)) {
            throw new \InvalidArgumentException('invalid value for $w_max_minor when calling WConfig1., must be bigger than or equal to 0.');
        }

        $this->container['w_max_minor'] = $w_max_minor;

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


