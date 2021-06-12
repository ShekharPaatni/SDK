<?php
/**
 * OrderVoClone
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

namespace com\hydrogen\nucleus\Model;

use \ArrayAccess;
use \com\hydrogen\nucleus\ObjectSerializer;

/**
 * OrderVoClone Class Doc Comment
 *
 * @category Class
 * @description OrderVoClone Object
 * @package  com\hydrogen\nucleus
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class OrderVoClone implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'OrderVoClone';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'account_id' => 'string',
        'date' => '\DateTime',
        'is_read' => 'bool',
        'metadata' => 'map[string,string]',
        'model_id' => 'string',
        'order_bulk_id' => 'string',
        'order_ticket_id' => 'string',
        'order_type' => 'string',
        'portfolio_id' => 'string',
        'price' => 'double',
        'quantity' => 'double',
        'security_id' => 'string',
        'transaction_code_id' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'account_id' => 'uuid',
        'date' => 'date-time',
        'is_read' => null,
        'metadata' => null,
        'model_id' => 'uuid',
        'order_bulk_id' => 'uuid',
        'order_ticket_id' => 'uuid',
        'order_type' => null,
        'portfolio_id' => 'uuid',
        'price' => 'double',
        'quantity' => 'double',
        'security_id' => 'uuid',
        'transaction_code_id' => 'uuid'
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
        'account_id' => 'account_id',
        'date' => 'date',
        'is_read' => 'is_read',
        'metadata' => 'metadata',
        'model_id' => 'model_id',
        'order_bulk_id' => 'order_bulk_id',
        'order_ticket_id' => 'order_ticket_id',
        'order_type' => 'order_type',
        'portfolio_id' => 'portfolio_id',
        'price' => 'price',
        'quantity' => 'quantity',
        'security_id' => 'security_id',
        'transaction_code_id' => 'transaction_code_id'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'account_id' => 'setAccountId',
        'date' => 'setDate',
        'is_read' => 'setIsRead',
        'metadata' => 'setMetadata',
        'model_id' => 'setModelId',
        'order_bulk_id' => 'setOrderBulkId',
        'order_ticket_id' => 'setOrderTicketId',
        'order_type' => 'setOrderType',
        'portfolio_id' => 'setPortfolioId',
        'price' => 'setPrice',
        'quantity' => 'setQuantity',
        'security_id' => 'setSecurityId',
        'transaction_code_id' => 'setTransactionCodeId'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'account_id' => 'getAccountId',
        'date' => 'getDate',
        'is_read' => 'getIsRead',
        'metadata' => 'getMetadata',
        'model_id' => 'getModelId',
        'order_bulk_id' => 'getOrderBulkId',
        'order_ticket_id' => 'getOrderTicketId',
        'order_type' => 'getOrderType',
        'portfolio_id' => 'getPortfolioId',
        'price' => 'getPrice',
        'quantity' => 'getQuantity',
        'security_id' => 'getSecurityId',
        'transaction_code_id' => 'getTransactionCodeId'
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
        $this->container['account_id'] = isset($data['account_id']) ? $data['account_id'] : null;
        $this->container['date'] = isset($data['date']) ? $data['date'] : null;
        $this->container['is_read'] = isset($data['is_read']) ? $data['is_read'] : null;
        $this->container['metadata'] = isset($data['metadata']) ? $data['metadata'] : null;
        $this->container['model_id'] = isset($data['model_id']) ? $data['model_id'] : null;
        $this->container['order_bulk_id'] = isset($data['order_bulk_id']) ? $data['order_bulk_id'] : null;
        $this->container['order_ticket_id'] = isset($data['order_ticket_id']) ? $data['order_ticket_id'] : null;
        $this->container['order_type'] = isset($data['order_type']) ? $data['order_type'] : null;
        $this->container['portfolio_id'] = isset($data['portfolio_id']) ? $data['portfolio_id'] : null;
        $this->container['price'] = isset($data['price']) ? $data['price'] : null;
        $this->container['quantity'] = isset($data['quantity']) ? $data['quantity'] : null;
        $this->container['security_id'] = isset($data['security_id']) ? $data['security_id'] : null;
        $this->container['transaction_code_id'] = isset($data['transaction_code_id']) ? $data['transaction_code_id'] : null;
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
     * @param string $account_id accountId
     *
     * @return $this
     */
    public function setAccountId($account_id)
    {
        $this->container['account_id'] = $account_id;

        return $this;
    }

    /**
     * Gets date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->container['date'];
    }

    /**
     * Sets date
     *
     * @param \DateTime $date date
     *
     * @return $this
     */
    public function setDate($date)
    {
        $this->container['date'] = $date;

        return $this;
    }

    /**
     * Gets is_read
     *
     * @return bool
     */
    public function getIsRead()
    {
        return $this->container['is_read'];
    }

    /**
     * Sets is_read
     *
     * @param bool $is_read isRead
     *
     * @return $this
     */
    public function setIsRead($is_read)
    {
        $this->container['is_read'] = $is_read;

        return $this;
    }

    /**
     * Gets metadata
     *
     * @return map[string,string]
     */
    public function getMetadata()
    {
        return $this->container['metadata'];
    }

    /**
     * Sets metadata
     *
     * @param map[string,string] $metadata metadata
     *
     * @return $this
     */
    public function setMetadata($metadata)
    {
        $this->container['metadata'] = $metadata;

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
     * @param string $model_id modelId
     *
     * @return $this
     */
    public function setModelId($model_id)
    {
        $this->container['model_id'] = $model_id;

        return $this;
    }

    /**
     * Gets order_bulk_id
     *
     * @return string
     */
    public function getOrderBulkId()
    {
        return $this->container['order_bulk_id'];
    }

    /**
     * Sets order_bulk_id
     *
     * @param string $order_bulk_id orderBulkId
     *
     * @return $this
     */
    public function setOrderBulkId($order_bulk_id)
    {
        $this->container['order_bulk_id'] = $order_bulk_id;

        return $this;
    }

    /**
     * Gets order_ticket_id
     *
     * @return string
     */
    public function getOrderTicketId()
    {
        return $this->container['order_ticket_id'];
    }

    /**
     * Sets order_ticket_id
     *
     * @param string $order_ticket_id orderTicketId
     *
     * @return $this
     */
    public function setOrderTicketId($order_ticket_id)
    {
        $this->container['order_ticket_id'] = $order_ticket_id;

        return $this;
    }

    /**
     * Gets order_type
     *
     * @return string
     */
    public function getOrderType()
    {
        return $this->container['order_type'];
    }

    /**
     * Sets order_type
     *
     * @param string $order_type orderType
     *
     * @return $this
     */
    public function setOrderType($order_type)
    {
        $this->container['order_type'] = $order_type;

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
     * @param string $portfolio_id portfolioId
     *
     * @return $this
     */
    public function setPortfolioId($portfolio_id)
    {
        $this->container['portfolio_id'] = $portfolio_id;

        return $this;
    }

    /**
     * Gets price
     *
     * @return double
     */
    public function getPrice()
    {
        return $this->container['price'];
    }

    /**
     * Sets price
     *
     * @param double $price price
     *
     * @return $this
     */
    public function setPrice($price)
    {
        $this->container['price'] = $price;

        return $this;
    }

    /**
     * Gets quantity
     *
     * @return double
     */
    public function getQuantity()
    {
        return $this->container['quantity'];
    }

    /**
     * Sets quantity
     *
     * @param double $quantity quantity
     *
     * @return $this
     */
    public function setQuantity($quantity)
    {
        $this->container['quantity'] = $quantity;

        return $this;
    }

    /**
     * Gets security_id
     *
     * @return string
     */
    public function getSecurityId()
    {
        return $this->container['security_id'];
    }

    /**
     * Sets security_id
     *
     * @param string $security_id securityId
     *
     * @return $this
     */
    public function setSecurityId($security_id)
    {
        $this->container['security_id'] = $security_id;

        return $this;
    }

    /**
     * Gets transaction_code_id
     *
     * @return string
     */
    public function getTransactionCodeId()
    {
        return $this->container['transaction_code_id'];
    }

    /**
     * Sets transaction_code_id
     *
     * @param string $transaction_code_id transactionCodeId
     *
     * @return $this
     */
    public function setTransactionCodeId($transaction_code_id)
    {
        $this->container['transaction_code_id'] = $transaction_code_id;

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


