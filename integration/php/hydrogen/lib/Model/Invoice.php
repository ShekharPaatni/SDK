<?php
/**
 * Invoice
 *
 * PHP version 5
 *
 * @category Class
 * @package  com\hydrogen\integration
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Hydrogen Integration API
 *
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.2.1
 * Contact: info@hydrogenplatform.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.18
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace com\hydrogen\integration\Model;

use \ArrayAccess;
use \com\hydrogen\integration\ObjectSerializer;

/**
 * Invoice Class Doc Comment
 *
 * @category Class
 * @description Invoice Object
 * @package  com\hydrogen\integration
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class Invoice implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'Invoice';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'client_id' => 'string',
        'create_date' => '\DateTime',
        'currency_code' => 'string',
        'customer_id' => 'string',
        'department' => 'string',
        'description' => 'string',
        'document_id' => 'string',
        'due_date' => '\DateTime',
        'id' => 'string',
        'invoice_date' => '\DateTime',
        'invoice_name' => 'string',
        'invoice_number' => 'string',
        'is_active' => 'bool',
        'line_items' => '\com\hydrogen\integration\Model\LineItems[]',
        'metadata' => 'map[string,string]',
        'payment_instructions' => 'string',
        'payment_terms' => 'string',
        'secondary_id' => 'string',
        'status' => 'string',
        'total_amount' => 'double',
        'total_discount' => 'double',
        'total_due' => 'double',
        'total_subtotal' => 'double',
        'total_tax' => 'double',
        'update_date' => '\DateTime'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'client_id' => 'uuid',
        'create_date' => 'date-time',
        'currency_code' => null,
        'customer_id' => 'uuid',
        'department' => null,
        'description' => null,
        'document_id' => 'uuid',
        'due_date' => 'date-time',
        'id' => 'uuid',
        'invoice_date' => 'date-time',
        'invoice_name' => null,
        'invoice_number' => null,
        'is_active' => null,
        'line_items' => null,
        'metadata' => null,
        'payment_instructions' => null,
        'payment_terms' => null,
        'secondary_id' => null,
        'status' => null,
        'total_amount' => 'double',
        'total_discount' => 'double',
        'total_due' => 'double',
        'total_subtotal' => 'double',
        'total_tax' => 'double',
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
        'client_id' => 'client_id',
        'create_date' => 'create_date',
        'currency_code' => 'currency_code',
        'customer_id' => 'customer_id',
        'department' => 'department',
        'description' => 'description',
        'document_id' => 'document_id',
        'due_date' => 'due_date',
        'id' => 'id',
        'invoice_date' => 'invoice_date',
        'invoice_name' => 'invoice_name',
        'invoice_number' => 'invoice_number',
        'is_active' => 'is_active',
        'line_items' => 'line_items',
        'metadata' => 'metadata',
        'payment_instructions' => 'payment_instructions',
        'payment_terms' => 'payment_terms',
        'secondary_id' => 'secondary_id',
        'status' => 'status',
        'total_amount' => 'total_amount',
        'total_discount' => 'total_discount',
        'total_due' => 'total_due',
        'total_subtotal' => 'total_subtotal',
        'total_tax' => 'total_tax',
        'update_date' => 'update_date'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'client_id' => 'setClientId',
        'create_date' => 'setCreateDate',
        'currency_code' => 'setCurrencyCode',
        'customer_id' => 'setCustomerId',
        'department' => 'setDepartment',
        'description' => 'setDescription',
        'document_id' => 'setDocumentId',
        'due_date' => 'setDueDate',
        'id' => 'setId',
        'invoice_date' => 'setInvoiceDate',
        'invoice_name' => 'setInvoiceName',
        'invoice_number' => 'setInvoiceNumber',
        'is_active' => 'setIsActive',
        'line_items' => 'setLineItems',
        'metadata' => 'setMetadata',
        'payment_instructions' => 'setPaymentInstructions',
        'payment_terms' => 'setPaymentTerms',
        'secondary_id' => 'setSecondaryId',
        'status' => 'setStatus',
        'total_amount' => 'setTotalAmount',
        'total_discount' => 'setTotalDiscount',
        'total_due' => 'setTotalDue',
        'total_subtotal' => 'setTotalSubtotal',
        'total_tax' => 'setTotalTax',
        'update_date' => 'setUpdateDate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'client_id' => 'getClientId',
        'create_date' => 'getCreateDate',
        'currency_code' => 'getCurrencyCode',
        'customer_id' => 'getCustomerId',
        'department' => 'getDepartment',
        'description' => 'getDescription',
        'document_id' => 'getDocumentId',
        'due_date' => 'getDueDate',
        'id' => 'getId',
        'invoice_date' => 'getInvoiceDate',
        'invoice_name' => 'getInvoiceName',
        'invoice_number' => 'getInvoiceNumber',
        'is_active' => 'getIsActive',
        'line_items' => 'getLineItems',
        'metadata' => 'getMetadata',
        'payment_instructions' => 'getPaymentInstructions',
        'payment_terms' => 'getPaymentTerms',
        'secondary_id' => 'getSecondaryId',
        'status' => 'getStatus',
        'total_amount' => 'getTotalAmount',
        'total_discount' => 'getTotalDiscount',
        'total_due' => 'getTotalDue',
        'total_subtotal' => 'getTotalSubtotal',
        'total_tax' => 'getTotalTax',
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
        $this->container['client_id'] = isset($data['client_id']) ? $data['client_id'] : null;
        $this->container['create_date'] = isset($data['create_date']) ? $data['create_date'] : null;
        $this->container['currency_code'] = isset($data['currency_code']) ? $data['currency_code'] : null;
        $this->container['customer_id'] = isset($data['customer_id']) ? $data['customer_id'] : null;
        $this->container['department'] = isset($data['department']) ? $data['department'] : null;
        $this->container['description'] = isset($data['description']) ? $data['description'] : null;
        $this->container['document_id'] = isset($data['document_id']) ? $data['document_id'] : null;
        $this->container['due_date'] = isset($data['due_date']) ? $data['due_date'] : null;
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['invoice_date'] = isset($data['invoice_date']) ? $data['invoice_date'] : null;
        $this->container['invoice_name'] = isset($data['invoice_name']) ? $data['invoice_name'] : null;
        $this->container['invoice_number'] = isset($data['invoice_number']) ? $data['invoice_number'] : null;
        $this->container['is_active'] = isset($data['is_active']) ? $data['is_active'] : null;
        $this->container['line_items'] = isset($data['line_items']) ? $data['line_items'] : null;
        $this->container['metadata'] = isset($data['metadata']) ? $data['metadata'] : null;
        $this->container['payment_instructions'] = isset($data['payment_instructions']) ? $data['payment_instructions'] : null;
        $this->container['payment_terms'] = isset($data['payment_terms']) ? $data['payment_terms'] : null;
        $this->container['secondary_id'] = isset($data['secondary_id']) ? $data['secondary_id'] : null;
        $this->container['status'] = isset($data['status']) ? $data['status'] : null;
        $this->container['total_amount'] = isset($data['total_amount']) ? $data['total_amount'] : null;
        $this->container['total_discount'] = isset($data['total_discount']) ? $data['total_discount'] : null;
        $this->container['total_due'] = isset($data['total_due']) ? $data['total_due'] : null;
        $this->container['total_subtotal'] = isset($data['total_subtotal']) ? $data['total_subtotal'] : null;
        $this->container['total_tax'] = isset($data['total_tax']) ? $data['total_tax'] : null;
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

        if ($this->container['currency_code'] === null) {
            $invalidProperties[] = "'currency_code' can't be null";
        }
        if ($this->container['customer_id'] === null) {
            $invalidProperties[] = "'customer_id' can't be null";
        }
        if ($this->container['due_date'] === null) {
            $invalidProperties[] = "'due_date' can't be null";
        }
        if ($this->container['invoice_date'] === null) {
            $invalidProperties[] = "'invoice_date' can't be null";
        }
        if ($this->container['invoice_number'] === null) {
            $invalidProperties[] = "'invoice_number' can't be null";
        }
        if ($this->container['total_amount'] === null) {
            $invalidProperties[] = "'total_amount' can't be null";
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
     * Gets client_id
     *
     * @return string
     */
    public function getClientId()
    {
        return $this->container['client_id'];
    }

    /**
     * Sets client_id
     *
     * @param string $client_id client_id
     *
     * @return $this
     */
    public function setClientId($client_id)
    {
        $this->container['client_id'] = $client_id;

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
     * Gets customer_id
     *
     * @return string
     */
    public function getCustomerId()
    {
        return $this->container['customer_id'];
    }

    /**
     * Sets customer_id
     *
     * @param string $customer_id customer_id
     *
     * @return $this
     */
    public function setCustomerId($customer_id)
    {
        $this->container['customer_id'] = $customer_id;

        return $this;
    }

    /**
     * Gets department
     *
     * @return string
     */
    public function getDepartment()
    {
        return $this->container['department'];
    }

    /**
     * Sets department
     *
     * @param string $department department
     *
     * @return $this
     */
    public function setDepartment($department)
    {
        $this->container['department'] = $department;

        return $this;
    }

    /**
     * Gets description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->container['description'];
    }

    /**
     * Sets description
     *
     * @param string $description description
     *
     * @return $this
     */
    public function setDescription($description)
    {
        $this->container['description'] = $description;

        return $this;
    }

    /**
     * Gets document_id
     *
     * @return string
     */
    public function getDocumentId()
    {
        return $this->container['document_id'];
    }

    /**
     * Sets document_id
     *
     * @param string $document_id document_id
     *
     * @return $this
     */
    public function setDocumentId($document_id)
    {
        $this->container['document_id'] = $document_id;

        return $this;
    }

    /**
     * Gets due_date
     *
     * @return \DateTime
     */
    public function getDueDate()
    {
        return $this->container['due_date'];
    }

    /**
     * Sets due_date
     *
     * @param \DateTime $due_date due_date
     *
     * @return $this
     */
    public function setDueDate($due_date)
    {
        $this->container['due_date'] = $due_date;

        return $this;
    }

    /**
     * Gets id
     *
     * @return string
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param string $id id
     *
     * @return $this
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets invoice_date
     *
     * @return \DateTime
     */
    public function getInvoiceDate()
    {
        return $this->container['invoice_date'];
    }

    /**
     * Sets invoice_date
     *
     * @param \DateTime $invoice_date invoice_date
     *
     * @return $this
     */
    public function setInvoiceDate($invoice_date)
    {
        $this->container['invoice_date'] = $invoice_date;

        return $this;
    }

    /**
     * Gets invoice_name
     *
     * @return string
     */
    public function getInvoiceName()
    {
        return $this->container['invoice_name'];
    }

    /**
     * Sets invoice_name
     *
     * @param string $invoice_name invoice_name
     *
     * @return $this
     */
    public function setInvoiceName($invoice_name)
    {
        $this->container['invoice_name'] = $invoice_name;

        return $this;
    }

    /**
     * Gets invoice_number
     *
     * @return string
     */
    public function getInvoiceNumber()
    {
        return $this->container['invoice_number'];
    }

    /**
     * Sets invoice_number
     *
     * @param string $invoice_number invoice_number
     *
     * @return $this
     */
    public function setInvoiceNumber($invoice_number)
    {
        $this->container['invoice_number'] = $invoice_number;

        return $this;
    }

    /**
     * Gets is_active
     *
     * @return bool
     */
    public function getIsActive()
    {
        return $this->container['is_active'];
    }

    /**
     * Sets is_active
     *
     * @param bool $is_active is_active
     *
     * @return $this
     */
    public function setIsActive($is_active)
    {
        $this->container['is_active'] = $is_active;

        return $this;
    }

    /**
     * Gets line_items
     *
     * @return \com\hydrogen\integration\Model\LineItems[]
     */
    public function getLineItems()
    {
        return $this->container['line_items'];
    }

    /**
     * Sets line_items
     *
     * @param \com\hydrogen\integration\Model\LineItems[] $line_items lineItems
     *
     * @return $this
     */
    public function setLineItems($line_items)
    {
        $this->container['line_items'] = $line_items;

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
     * Gets payment_instructions
     *
     * @return string
     */
    public function getPaymentInstructions()
    {
        return $this->container['payment_instructions'];
    }

    /**
     * Sets payment_instructions
     *
     * @param string $payment_instructions paymentInstructions
     *
     * @return $this
     */
    public function setPaymentInstructions($payment_instructions)
    {
        $this->container['payment_instructions'] = $payment_instructions;

        return $this;
    }

    /**
     * Gets payment_terms
     *
     * @return string
     */
    public function getPaymentTerms()
    {
        return $this->container['payment_terms'];
    }

    /**
     * Sets payment_terms
     *
     * @param string $payment_terms paymentTerms
     *
     * @return $this
     */
    public function setPaymentTerms($payment_terms)
    {
        $this->container['payment_terms'] = $payment_terms;

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
     * Gets total_amount
     *
     * @return double
     */
    public function getTotalAmount()
    {
        return $this->container['total_amount'];
    }

    /**
     * Sets total_amount
     *
     * @param double $total_amount totalAmount
     *
     * @return $this
     */
    public function setTotalAmount($total_amount)
    {
        $this->container['total_amount'] = $total_amount;

        return $this;
    }

    /**
     * Gets total_discount
     *
     * @return double
     */
    public function getTotalDiscount()
    {
        return $this->container['total_discount'];
    }

    /**
     * Sets total_discount
     *
     * @param double $total_discount totalDiscount
     *
     * @return $this
     */
    public function setTotalDiscount($total_discount)
    {
        $this->container['total_discount'] = $total_discount;

        return $this;
    }

    /**
     * Gets total_due
     *
     * @return double
     */
    public function getTotalDue()
    {
        return $this->container['total_due'];
    }

    /**
     * Sets total_due
     *
     * @param double $total_due totalDue
     *
     * @return $this
     */
    public function setTotalDue($total_due)
    {
        $this->container['total_due'] = $total_due;

        return $this;
    }

    /**
     * Gets total_subtotal
     *
     * @return double
     */
    public function getTotalSubtotal()
    {
        return $this->container['total_subtotal'];
    }

    /**
     * Sets total_subtotal
     *
     * @param double $total_subtotal totalSubtotal
     *
     * @return $this
     */
    public function setTotalSubtotal($total_subtotal)
    {
        $this->container['total_subtotal'] = $total_subtotal;

        return $this;
    }

    /**
     * Gets total_tax
     *
     * @return double
     */
    public function getTotalTax()
    {
        return $this->container['total_tax'];
    }

    /**
     * Sets total_tax
     *
     * @param double $total_tax totalTax
     *
     * @return $this
     */
    public function setTotalTax($total_tax)
    {
        $this->container['total_tax'] = $total_tax;

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

