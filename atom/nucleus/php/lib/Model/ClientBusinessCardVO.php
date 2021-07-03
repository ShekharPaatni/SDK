<?php
/**
 * ClientBusinessCardVO
 *
 * PHP version 5
 *
 * @category Class
 * @package  com\hydrogen\nucleus
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Hydrogen Nucleus API
 *
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.2
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.19
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace com\hydrogen\nucleus\Model;

use \ArrayAccess;
use \com\hydrogen\nucleus\ObjectSerializer;

/**
 * ClientBusinessCardVO Class Doc Comment
 *
 * @category Class
 * @description Client/Business Card Mapping Object
 * @package  com\hydrogen\nucleus
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class ClientBusinessCardVO implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'ClientBusinessCardVO';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'business_details' => '\com\hydrogen\nucleus\Model\BusinessDetailsVO',
        'card_details' => '\com\hydrogen\nucleus\Model\CardDetailsVO[]',
        'client_details' => '\com\hydrogen\nucleus\Model\ClientCardVO',
        'total_balance' => '\com\hydrogen\nucleus\Model\ClientBusinessTotalCardBalanceVO[]'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'business_details' => null,
        'card_details' => null,
        'client_details' => null,
        'total_balance' => null
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
        'business_details' => 'business_details',
        'card_details' => 'card_details',
        'client_details' => 'client_details',
        'total_balance' => 'total_balance'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'business_details' => 'setBusinessDetails',
        'card_details' => 'setCardDetails',
        'client_details' => 'setClientDetails',
        'total_balance' => 'setTotalBalance'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'business_details' => 'getBusinessDetails',
        'card_details' => 'getCardDetails',
        'client_details' => 'getClientDetails',
        'total_balance' => 'getTotalBalance'
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
        $this->container['business_details'] = isset($data['business_details']) ? $data['business_details'] : null;
        $this->container['card_details'] = isset($data['card_details']) ? $data['card_details'] : null;
        $this->container['client_details'] = isset($data['client_details']) ? $data['client_details'] : null;
        $this->container['total_balance'] = isset($data['total_balance']) ? $data['total_balance'] : null;
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
     * Gets business_details
     *
     * @return \com\hydrogen\nucleus\Model\BusinessDetailsVO
     */
    public function getBusinessDetails()
    {
        return $this->container['business_details'];
    }

    /**
     * Sets business_details
     *
     * @param \com\hydrogen\nucleus\Model\BusinessDetailsVO $business_details businessDetails
     *
     * @return $this
     */
    public function setBusinessDetails($business_details)
    {
        $this->container['business_details'] = $business_details;

        return $this;
    }

    /**
     * Gets card_details
     *
     * @return \com\hydrogen\nucleus\Model\CardDetailsVO[]
     */
    public function getCardDetails()
    {
        return $this->container['card_details'];
    }

    /**
     * Sets card_details
     *
     * @param \com\hydrogen\nucleus\Model\CardDetailsVO[] $card_details cardDetails
     *
     * @return $this
     */
    public function setCardDetails($card_details)
    {
        $this->container['card_details'] = $card_details;

        return $this;
    }

    /**
     * Gets client_details
     *
     * @return \com\hydrogen\nucleus\Model\ClientCardVO
     */
    public function getClientDetails()
    {
        return $this->container['client_details'];
    }

    /**
     * Sets client_details
     *
     * @param \com\hydrogen\nucleus\Model\ClientCardVO $client_details clientDetails
     *
     * @return $this
     */
    public function setClientDetails($client_details)
    {
        $this->container['client_details'] = $client_details;

        return $this;
    }

    /**
     * Gets total_balance
     *
     * @return \com\hydrogen\nucleus\Model\ClientBusinessTotalCardBalanceVO[]
     */
    public function getTotalBalance()
    {
        return $this->container['total_balance'];
    }

    /**
     * Sets total_balance
     *
     * @param \com\hydrogen\nucleus\Model\ClientBusinessTotalCardBalanceVO[] $total_balance totalBalance
     *
     * @return $this
     */
    public function setTotalBalance($total_balance)
    {
        $this->container['total_balance'] = $total_balance;

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


