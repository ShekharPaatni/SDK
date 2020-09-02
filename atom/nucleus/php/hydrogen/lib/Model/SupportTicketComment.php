<?php
/**
 * SupportTicketComment
 *
 * PHP version 5
 *
 * @category Class
 * @package  com\hydrogen\nucleus
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

namespace com\hydrogen\nucleus\Model;

use \ArrayAccess;
use \com\hydrogen\nucleus\ObjectSerializer;

/**
 * SupportTicketComment Class Doc Comment
 *
 * @category Class
 * @description Support Ticket Comment
 * @package  com\hydrogen\nucleus
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class SupportTicketComment implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'SupportTicketComment';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'create_date' => '\DateTime',
        'description' => 'string',
        'has_attachment' => 'bool',
        'id' => 'string',
        'is_admin' => 'bool',
        'is_read' => 'bool',
        'metadata' => 'map[string,string]',
        'secondary_id' => 'string',
        'support_ticket_documents' => '\com\hydrogen\nucleus\Model\SupportTicketDocument[]',
        'support_ticket_id' => 'string',
        'update_date' => '\DateTime'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'create_date' => 'date-time',
        'description' => null,
        'has_attachment' => null,
        'id' => 'uuid',
        'is_admin' => null,
        'is_read' => null,
        'metadata' => null,
        'secondary_id' => null,
        'support_ticket_documents' => null,
        'support_ticket_id' => 'uuid',
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
        'create_date' => 'create_date',
        'description' => 'description',
        'has_attachment' => 'has_attachment',
        'id' => 'id',
        'is_admin' => 'is_admin',
        'is_read' => 'is_read',
        'metadata' => 'metadata',
        'secondary_id' => 'secondary_id',
        'support_ticket_documents' => 'support_ticket_documents',
        'support_ticket_id' => 'support_ticket_id',
        'update_date' => 'update_date'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'create_date' => 'setCreateDate',
        'description' => 'setDescription',
        'has_attachment' => 'setHasAttachment',
        'id' => 'setId',
        'is_admin' => 'setIsAdmin',
        'is_read' => 'setIsRead',
        'metadata' => 'setMetadata',
        'secondary_id' => 'setSecondaryId',
        'support_ticket_documents' => 'setSupportTicketDocuments',
        'support_ticket_id' => 'setSupportTicketId',
        'update_date' => 'setUpdateDate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'create_date' => 'getCreateDate',
        'description' => 'getDescription',
        'has_attachment' => 'getHasAttachment',
        'id' => 'getId',
        'is_admin' => 'getIsAdmin',
        'is_read' => 'getIsRead',
        'metadata' => 'getMetadata',
        'secondary_id' => 'getSecondaryId',
        'support_ticket_documents' => 'getSupportTicketDocuments',
        'support_ticket_id' => 'getSupportTicketId',
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
        $this->container['create_date'] = isset($data['create_date']) ? $data['create_date'] : null;
        $this->container['description'] = isset($data['description']) ? $data['description'] : null;
        $this->container['has_attachment'] = isset($data['has_attachment']) ? $data['has_attachment'] : null;
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['is_admin'] = isset($data['is_admin']) ? $data['is_admin'] : null;
        $this->container['is_read'] = isset($data['is_read']) ? $data['is_read'] : null;
        $this->container['metadata'] = isset($data['metadata']) ? $data['metadata'] : null;
        $this->container['secondary_id'] = isset($data['secondary_id']) ? $data['secondary_id'] : null;
        $this->container['support_ticket_documents'] = isset($data['support_ticket_documents']) ? $data['support_ticket_documents'] : null;
        $this->container['support_ticket_id'] = isset($data['support_ticket_id']) ? $data['support_ticket_id'] : null;
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

        if ($this->container['support_ticket_id'] === null) {
            $invalidProperties[] = "'support_ticket_id' can't be null";
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
     * @param string $description SupportTicket Comment Description
     *
     * @return $this
     */
    public function setDescription($description)
    {
        $this->container['description'] = $description;

        return $this;
    }

    /**
     * Gets has_attachment
     *
     * @return bool
     */
    public function getHasAttachment()
    {
        return $this->container['has_attachment'];
    }

    /**
     * Sets has_attachment
     *
     * @param bool $has_attachment Does the SupportTicket Comment contain an attachment
     *
     * @return $this
     */
    public function setHasAttachment($has_attachment)
    {
        $this->container['has_attachment'] = $has_attachment;

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
     * Gets is_admin
     *
     * @return bool
     */
    public function getIsAdmin()
    {
        return $this->container['is_admin'];
    }

    /**
     * Sets is_admin
     *
     * @param bool $is_admin Is the SupportTicket Comment an admin
     *
     * @return $this
     */
    public function setIsAdmin($is_admin)
    {
        $this->container['is_admin'] = $is_admin;

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
     * @param bool $is_read Is the SupportTicket Comment read
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
     * Gets support_ticket_documents
     *
     * @return \com\hydrogen\nucleus\Model\SupportTicketDocument[]
     */
    public function getSupportTicketDocuments()
    {
        return $this->container['support_ticket_documents'];
    }

    /**
     * Sets support_ticket_documents
     *
     * @param \com\hydrogen\nucleus\Model\SupportTicketDocument[] $support_ticket_documents support_ticket_documents
     *
     * @return $this
     */
    public function setSupportTicketDocuments($support_ticket_documents)
    {
        $this->container['support_ticket_documents'] = $support_ticket_documents;

        return $this;
    }

    /**
     * Gets support_ticket_id
     *
     * @return string
     */
    public function getSupportTicketId()
    {
        return $this->container['support_ticket_id'];
    }

    /**
     * Sets support_ticket_id
     *
     * @param string $support_ticket_id SupportTicket Id
     *
     * @return $this
     */
    public function setSupportTicketId($support_ticket_id)
    {
        $this->container['support_ticket_id'] = $support_ticket_id;

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

