<?php
/**
 * AllocationVO
 *
 * PHP version 5
 *
 * @category Class
 * @package  com\hydrogen
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Hydrogen Atom API
 *
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
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
 * AllocationVO Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class AllocationVO implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'AllocationVO';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'account_allocation_date' => '\DateTime',
        'account_allocation_id' => 'string',
        'account_allocation_weight' => 'double',
        'allocation_category' => 'string',
        'allocation_description' => 'string',
        'allocation_id' => 'string',
        'allocation_name' => 'string',
        'allocation_secondary_id' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'account_allocation_date' => 'date-time',
        'account_allocation_id' => 'uuid',
        'account_allocation_weight' => 'double',
        'allocation_category' => null,
        'allocation_description' => null,
        'allocation_id' => 'uuid',
        'allocation_name' => null,
        'allocation_secondary_id' => null
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
        'account_allocation_date' => 'account_allocation_date',
        'account_allocation_id' => 'account_allocation_id',
        'account_allocation_weight' => 'account_allocation_weight',
        'allocation_category' => 'allocation_category',
        'allocation_description' => 'allocation_description',
        'allocation_id' => 'allocation_id',
        'allocation_name' => 'allocation_name',
        'allocation_secondary_id' => 'allocation_secondary_id'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'account_allocation_date' => 'setAccountAllocationDate',
        'account_allocation_id' => 'setAccountAllocationId',
        'account_allocation_weight' => 'setAccountAllocationWeight',
        'allocation_category' => 'setAllocationCategory',
        'allocation_description' => 'setAllocationDescription',
        'allocation_id' => 'setAllocationId',
        'allocation_name' => 'setAllocationName',
        'allocation_secondary_id' => 'setAllocationSecondaryId'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'account_allocation_date' => 'getAccountAllocationDate',
        'account_allocation_id' => 'getAccountAllocationId',
        'account_allocation_weight' => 'getAccountAllocationWeight',
        'allocation_category' => 'getAllocationCategory',
        'allocation_description' => 'getAllocationDescription',
        'allocation_id' => 'getAllocationId',
        'allocation_name' => 'getAllocationName',
        'allocation_secondary_id' => 'getAllocationSecondaryId'
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
        $this->container['account_allocation_date'] = isset($data['account_allocation_date']) ? $data['account_allocation_date'] : null;
        $this->container['account_allocation_id'] = isset($data['account_allocation_id']) ? $data['account_allocation_id'] : null;
        $this->container['account_allocation_weight'] = isset($data['account_allocation_weight']) ? $data['account_allocation_weight'] : null;
        $this->container['allocation_category'] = isset($data['allocation_category']) ? $data['allocation_category'] : null;
        $this->container['allocation_description'] = isset($data['allocation_description']) ? $data['allocation_description'] : null;
        $this->container['allocation_id'] = isset($data['allocation_id']) ? $data['allocation_id'] : null;
        $this->container['allocation_name'] = isset($data['allocation_name']) ? $data['allocation_name'] : null;
        $this->container['allocation_secondary_id'] = isset($data['allocation_secondary_id']) ? $data['allocation_secondary_id'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

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
     * Gets account_allocation_date
     *
     * @return \DateTime
     */
    public function getAccountAllocationDate()
    {
        return $this->container['account_allocation_date'];
    }

    /**
     * Sets account_allocation_date
     *
     * @param \DateTime $account_allocation_date account_allocation_date
     *
     * @return $this
     */
    public function setAccountAllocationDate($account_allocation_date)
    {
        $this->container['account_allocation_date'] = $account_allocation_date;

        return $this;
    }

    /**
     * Gets account_allocation_id
     *
     * @return string
     */
    public function getAccountAllocationId()
    {
        return $this->container['account_allocation_id'];
    }

    /**
     * Sets account_allocation_id
     *
     * @param string $account_allocation_id account_allocation_id
     *
     * @return $this
     */
    public function setAccountAllocationId($account_allocation_id)
    {
        $this->container['account_allocation_id'] = $account_allocation_id;

        return $this;
    }

    /**
     * Gets account_allocation_weight
     *
     * @return double
     */
    public function getAccountAllocationWeight()
    {
        return $this->container['account_allocation_weight'];
    }

    /**
     * Sets account_allocation_weight
     *
     * @param double $account_allocation_weight account_allocation_weight
     *
     * @return $this
     */
    public function setAccountAllocationWeight($account_allocation_weight)
    {
        $this->container['account_allocation_weight'] = $account_allocation_weight;

        return $this;
    }

    /**
     * Gets allocation_category
     *
     * @return string
     */
    public function getAllocationCategory()
    {
        return $this->container['allocation_category'];
    }

    /**
     * Sets allocation_category
     *
     * @param string $allocation_category allocation_category
     *
     * @return $this
     */
    public function setAllocationCategory($allocation_category)
    {
        $this->container['allocation_category'] = $allocation_category;

        return $this;
    }

    /**
     * Gets allocation_description
     *
     * @return string
     */
    public function getAllocationDescription()
    {
        return $this->container['allocation_description'];
    }

    /**
     * Sets allocation_description
     *
     * @param string $allocation_description allocation_description
     *
     * @return $this
     */
    public function setAllocationDescription($allocation_description)
    {
        $this->container['allocation_description'] = $allocation_description;

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
     * Gets allocation_name
     *
     * @return string
     */
    public function getAllocationName()
    {
        return $this->container['allocation_name'];
    }

    /**
     * Sets allocation_name
     *
     * @param string $allocation_name allocation_name
     *
     * @return $this
     */
    public function setAllocationName($allocation_name)
    {
        $this->container['allocation_name'] = $allocation_name;

        return $this;
    }

    /**
     * Gets allocation_secondary_id
     *
     * @return string
     */
    public function getAllocationSecondaryId()
    {
        return $this->container['allocation_secondary_id'];
    }

    /**
     * Sets allocation_secondary_id
     *
     * @param string $allocation_secondary_id allocation_secondary_id
     *
     * @return $this
     */
    public function setAllocationSecondaryId($allocation_secondary_id)
    {
        $this->container['allocation_secondary_id'] = $allocation_secondary_id;

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


