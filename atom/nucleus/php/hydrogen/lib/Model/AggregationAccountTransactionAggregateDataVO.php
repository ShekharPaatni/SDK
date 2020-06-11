<?php
/**
 * AggregationAccountTransactionAggregateDataVO
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
 * AggregationAccountTransactionAggregateDataVO Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class AggregationAccountTransactionAggregateDataVO implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'AggregationAccountTransactionAggregateDataVO';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'aggregation_account_transaction_id' => 'string',
        'bank_credit' => '\com\hydrogen\Model\BankCredit',
        'create_date' => '\DateTime',
        'currency_code' => 'string',
        'investment' => '\com\hydrogen\Model\Investment',
        'is_excluded_analysis' => 'bool',
        'metadata' => 'map[string,string]',
        'secondary_id' => 'string',
        'status' => 'string',
        'transaction_date' => '\DateTime',
        'update_date' => '\DateTime'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'aggregation_account_transaction_id' => 'uuid',
        'bank_credit' => null,
        'create_date' => 'date-time',
        'currency_code' => null,
        'investment' => null,
        'is_excluded_analysis' => null,
        'metadata' => null,
        'secondary_id' => null,
        'status' => null,
        'transaction_date' => 'date-time',
        'update_date' => 'date-time'
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
        'aggregation_account_transaction_id' => 'aggregation_account_transaction_id',
        'bank_credit' => 'bank_credit',
        'create_date' => 'create_date',
        'currency_code' => 'currency_code',
        'investment' => 'investment',
        'is_excluded_analysis' => 'is_excluded_analysis',
        'metadata' => 'metadata',
        'secondary_id' => 'secondary_id',
        'status' => 'status',
        'transaction_date' => 'transaction_date',
        'update_date' => 'update_date'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'aggregation_account_transaction_id' => 'setAggregationAccountTransactionId',
        'bank_credit' => 'setBankCredit',
        'create_date' => 'setCreateDate',
        'currency_code' => 'setCurrencyCode',
        'investment' => 'setInvestment',
        'is_excluded_analysis' => 'setIsExcludedAnalysis',
        'metadata' => 'setMetadata',
        'secondary_id' => 'setSecondaryId',
        'status' => 'setStatus',
        'transaction_date' => 'setTransactionDate',
        'update_date' => 'setUpdateDate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'aggregation_account_transaction_id' => 'getAggregationAccountTransactionId',
        'bank_credit' => 'getBankCredit',
        'create_date' => 'getCreateDate',
        'currency_code' => 'getCurrencyCode',
        'investment' => 'getInvestment',
        'is_excluded_analysis' => 'getIsExcludedAnalysis',
        'metadata' => 'getMetadata',
        'secondary_id' => 'getSecondaryId',
        'status' => 'getStatus',
        'transaction_date' => 'getTransactionDate',
        'update_date' => 'getUpdateDate'
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
        $this->container['aggregation_account_transaction_id'] = isset($data['aggregation_account_transaction_id']) ? $data['aggregation_account_transaction_id'] : null;
        $this->container['bank_credit'] = isset($data['bank_credit']) ? $data['bank_credit'] : null;
        $this->container['create_date'] = isset($data['create_date']) ? $data['create_date'] : null;
        $this->container['currency_code'] = isset($data['currency_code']) ? $data['currency_code'] : null;
        $this->container['investment'] = isset($data['investment']) ? $data['investment'] : null;
        $this->container['is_excluded_analysis'] = isset($data['is_excluded_analysis']) ? $data['is_excluded_analysis'] : null;
        $this->container['metadata'] = isset($data['metadata']) ? $data['metadata'] : null;
        $this->container['secondary_id'] = isset($data['secondary_id']) ? $data['secondary_id'] : null;
        $this->container['status'] = isset($data['status']) ? $data['status'] : null;
        $this->container['transaction_date'] = isset($data['transaction_date']) ? $data['transaction_date'] : null;
        $this->container['update_date'] = isset($data['update_date']) ? $data['update_date'] : null;
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
     * Gets aggregation_account_transaction_id
     *
     * @return string
     */
    public function getAggregationAccountTransactionId()
    {
        return $this->container['aggregation_account_transaction_id'];
    }

    /**
     * Sets aggregation_account_transaction_id
     *
     * @param string $aggregation_account_transaction_id aggregation_account_transaction_id
     *
     * @return $this
     */
    public function setAggregationAccountTransactionId($aggregation_account_transaction_id)
    {
        $this->container['aggregation_account_transaction_id'] = $aggregation_account_transaction_id;

        return $this;
    }

    /**
     * Gets bank_credit
     *
     * @return \com\hydrogen\Model\BankCredit
     */
    public function getBankCredit()
    {
        return $this->container['bank_credit'];
    }

    /**
     * Sets bank_credit
     *
     * @param \com\hydrogen\Model\BankCredit $bank_credit bank_credit
     *
     * @return $this
     */
    public function setBankCredit($bank_credit)
    {
        $this->container['bank_credit'] = $bank_credit;

        return $this;
    }

    /**
     * Gets create_date
     *
     * @return \DateTime
     */
    public function getCreateDate()
    {
        return $this->container['create_date'];
    }

    /**
     * Sets create_date
     *
     * @param \DateTime $create_date create_date
     *
     * @return $this
     */
    public function setCreateDate($create_date)
    {
        $this->container['create_date'] = $create_date;

        return $this;
    }

    /**
     * Gets currency_code
     *
     * @return string
     */
    public function getCurrencyCode()
    {
        return $this->container['currency_code'];
    }

    /**
     * Sets currency_code
     *
     * @param string $currency_code currency_code
     *
     * @return $this
     */
    public function setCurrencyCode($currency_code)
    {
        $this->container['currency_code'] = $currency_code;

        return $this;
    }

    /**
     * Gets investment
     *
     * @return \com\hydrogen\Model\Investment
     */
    public function getInvestment()
    {
        return $this->container['investment'];
    }

    /**
     * Sets investment
     *
     * @param \com\hydrogen\Model\Investment $investment investment
     *
     * @return $this
     */
    public function setInvestment($investment)
    {
        $this->container['investment'] = $investment;

        return $this;
    }

    /**
     * Gets is_excluded_analysis
     *
     * @return bool
     */
    public function getIsExcludedAnalysis()
    {
        return $this->container['is_excluded_analysis'];
    }

    /**
     * Sets is_excluded_analysis
     *
     * @param bool $is_excluded_analysis is_excluded_analysis
     *
     * @return $this
     */
    public function setIsExcludedAnalysis($is_excluded_analysis)
    {
        $this->container['is_excluded_analysis'] = $is_excluded_analysis;

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
     * Gets secondary_id
     *
     * @return string
     */
    public function getSecondaryId()
    {
        return $this->container['secondary_id'];
    }

    /**
     * Sets secondary_id
     *
     * @param string $secondary_id secondary_id
     *
     * @return $this
     */
    public function setSecondaryId($secondary_id)
    {
        $this->container['secondary_id'] = $secondary_id;

        return $this;
    }

    /**
     * Gets status
     *
     * @return string
     */
    public function getStatus()
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param string $status status
     *
     * @return $this
     */
    public function setStatus($status)
    {
        $this->container['status'] = $status;

        return $this;
    }

    /**
     * Gets transaction_date
     *
     * @return \DateTime
     */
    public function getTransactionDate()
    {
        return $this->container['transaction_date'];
    }

    /**
     * Sets transaction_date
     *
     * @param \DateTime $transaction_date transaction_date
     *
     * @return $this
     */
    public function setTransactionDate($transaction_date)
    {
        $this->container['transaction_date'] = $transaction_date;

        return $this;
    }

    /**
     * Gets update_date
     *
     * @return \DateTime
     */
    public function getUpdateDate()
    {
        return $this->container['update_date'];
    }

    /**
     * Sets update_date
     *
     * @param \DateTime $update_date update_date
     *
     * @return $this
     */
    public function setUpdateDate($update_date)
    {
        $this->container['update_date'] = $update_date;

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


