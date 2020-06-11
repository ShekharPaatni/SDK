<?php
/**
 * AggregationAccountDetailsAggregateDataVO
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
 * AggregationAccountDetailsAggregateDataVO Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class AggregationAccountDetailsAggregateDataVO implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'AggregationAccountDetailsAggregateDataVO';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'account_holder' => 'string',
        'account_name' => 'string',
        'account_number' => 'string',
        'asset' => 'bool',
        'category' => 'string',
        'create_date' => '\DateTime',
        'currency_code' => 'string',
        'financial_offer_id' => 'string',
        'institution_name' => 'string',
        'mask' => 'string',
        'metadata' => 'map[string,string]',
        'secondary_id' => 'string',
        'subcategory' => 'string',
        'update_date' => '\DateTime'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'account_holder' => null,
        'account_name' => null,
        'account_number' => null,
        'asset' => null,
        'category' => null,
        'create_date' => 'date-time',
        'currency_code' => null,
        'financial_offer_id' => 'uuid',
        'institution_name' => null,
        'mask' => null,
        'metadata' => null,
        'secondary_id' => null,
        'subcategory' => null,
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
        'account_holder' => 'account_holder',
        'account_name' => 'account_name',
        'account_number' => 'account_number',
        'asset' => 'asset',
        'category' => 'category',
        'create_date' => 'create_date',
        'currency_code' => 'currency_code',
        'financial_offer_id' => 'financial_offer_id',
        'institution_name' => 'institution_name',
        'mask' => 'mask',
        'metadata' => 'metadata',
        'secondary_id' => 'secondary_id',
        'subcategory' => 'subcategory',
        'update_date' => 'update_date'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'account_holder' => 'setAccountHolder',
        'account_name' => 'setAccountName',
        'account_number' => 'setAccountNumber',
        'asset' => 'setAsset',
        'category' => 'setCategory',
        'create_date' => 'setCreateDate',
        'currency_code' => 'setCurrencyCode',
        'financial_offer_id' => 'setFinancialOfferId',
        'institution_name' => 'setInstitutionName',
        'mask' => 'setMask',
        'metadata' => 'setMetadata',
        'secondary_id' => 'setSecondaryId',
        'subcategory' => 'setSubcategory',
        'update_date' => 'setUpdateDate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'account_holder' => 'getAccountHolder',
        'account_name' => 'getAccountName',
        'account_number' => 'getAccountNumber',
        'asset' => 'getAsset',
        'category' => 'getCategory',
        'create_date' => 'getCreateDate',
        'currency_code' => 'getCurrencyCode',
        'financial_offer_id' => 'getFinancialOfferId',
        'institution_name' => 'getInstitutionName',
        'mask' => 'getMask',
        'metadata' => 'getMetadata',
        'secondary_id' => 'getSecondaryId',
        'subcategory' => 'getSubcategory',
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
        $this->container['account_holder'] = isset($data['account_holder']) ? $data['account_holder'] : null;
        $this->container['account_name'] = isset($data['account_name']) ? $data['account_name'] : null;
        $this->container['account_number'] = isset($data['account_number']) ? $data['account_number'] : null;
        $this->container['asset'] = isset($data['asset']) ? $data['asset'] : null;
        $this->container['category'] = isset($data['category']) ? $data['category'] : null;
        $this->container['create_date'] = isset($data['create_date']) ? $data['create_date'] : null;
        $this->container['currency_code'] = isset($data['currency_code']) ? $data['currency_code'] : null;
        $this->container['financial_offer_id'] = isset($data['financial_offer_id']) ? $data['financial_offer_id'] : null;
        $this->container['institution_name'] = isset($data['institution_name']) ? $data['institution_name'] : null;
        $this->container['mask'] = isset($data['mask']) ? $data['mask'] : null;
        $this->container['metadata'] = isset($data['metadata']) ? $data['metadata'] : null;
        $this->container['secondary_id'] = isset($data['secondary_id']) ? $data['secondary_id'] : null;
        $this->container['subcategory'] = isset($data['subcategory']) ? $data['subcategory'] : null;
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
     * Gets account_holder
     *
     * @return string
     */
    public function getAccountHolder()
    {
        return $this->container['account_holder'];
    }

    /**
     * Sets account_holder
     *
     * @param string $account_holder account_holder
     *
     * @return $this
     */
    public function setAccountHolder($account_holder)
    {
        $this->container['account_holder'] = $account_holder;

        return $this;
    }

    /**
     * Gets account_name
     *
     * @return string
     */
    public function getAccountName()
    {
        return $this->container['account_name'];
    }

    /**
     * Sets account_name
     *
     * @param string $account_name account_name
     *
     * @return $this
     */
    public function setAccountName($account_name)
    {
        $this->container['account_name'] = $account_name;

        return $this;
    }

    /**
     * Gets account_number
     *
     * @return string
     */
    public function getAccountNumber()
    {
        return $this->container['account_number'];
    }

    /**
     * Sets account_number
     *
     * @param string $account_number account_number
     *
     * @return $this
     */
    public function setAccountNumber($account_number)
    {
        $this->container['account_number'] = $account_number;

        return $this;
    }

    /**
     * Gets asset
     *
     * @return bool
     */
    public function getAsset()
    {
        return $this->container['asset'];
    }

    /**
     * Sets asset
     *
     * @param bool $asset asset
     *
     * @return $this
     */
    public function setAsset($asset)
    {
        $this->container['asset'] = $asset;

        return $this;
    }

    /**
     * Gets category
     *
     * @return string
     */
    public function getCategory()
    {
        return $this->container['category'];
    }

    /**
     * Sets category
     *
     * @param string $category category
     *
     * @return $this
     */
    public function setCategory($category)
    {
        $this->container['category'] = $category;

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
     * Gets financial_offer_id
     *
     * @return string
     */
    public function getFinancialOfferId()
    {
        return $this->container['financial_offer_id'];
    }

    /**
     * Sets financial_offer_id
     *
     * @param string $financial_offer_id financial_offer_id
     *
     * @return $this
     */
    public function setFinancialOfferId($financial_offer_id)
    {
        $this->container['financial_offer_id'] = $financial_offer_id;

        return $this;
    }

    /**
     * Gets institution_name
     *
     * @return string
     */
    public function getInstitutionName()
    {
        return $this->container['institution_name'];
    }

    /**
     * Sets institution_name
     *
     * @param string $institution_name institution_name
     *
     * @return $this
     */
    public function setInstitutionName($institution_name)
    {
        $this->container['institution_name'] = $institution_name;

        return $this;
    }

    /**
     * Gets mask
     *
     * @return string
     */
    public function getMask()
    {
        return $this->container['mask'];
    }

    /**
     * Sets mask
     *
     * @param string $mask mask
     *
     * @return $this
     */
    public function setMask($mask)
    {
        $this->container['mask'] = $mask;

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
     * Gets subcategory
     *
     * @return string
     */
    public function getSubcategory()
    {
        return $this->container['subcategory'];
    }

    /**
     * Sets subcategory
     *
     * @param string $subcategory subcategory
     *
     * @return $this
     */
    public function setSubcategory($subcategory)
    {
        $this->container['subcategory'] = $subcategory;

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


