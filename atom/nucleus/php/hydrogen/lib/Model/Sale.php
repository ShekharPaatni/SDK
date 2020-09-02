<?php
/**
 * Sale
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
 * Sale Class Doc Comment
 *
 * @category Class
 * @description Sale Object
 * @package  com\hydrogen\nucleus
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class Sale implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'Sale';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'assigned' => 'string',
        'close_time' => '\DateTime',
        'closed_by' => 'string',
        'comments' => 'string',
        'contacted' => 'bool',
        'create_date' => '\DateTime',
        'email' => 'string',
        'firm_name' => 'string',
        'first_name' => 'string',
        'id' => 'string',
        'ip' => 'string',
        'last_name' => 'string',
        'metadata' => 'map[string,string]',
        'method' => 'string',
        'notification' => 'bool',
        'open_time' => '\DateTime',
        'phone' => 'string',
        'questions' => 'string',
        'referral_source' => 'string',
        'secondary_id' => 'string',
        'solution' => 'string',
        'subject' => 'string',
        'title' => 'string',
        'update_date' => '\DateTime'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'assigned' => 'uuid',
        'close_time' => 'date-time',
        'closed_by' => 'uuid',
        'comments' => null,
        'contacted' => null,
        'create_date' => 'date-time',
        'email' => null,
        'firm_name' => null,
        'first_name' => null,
        'id' => 'uuid',
        'ip' => null,
        'last_name' => null,
        'metadata' => null,
        'method' => null,
        'notification' => null,
        'open_time' => 'date-time',
        'phone' => null,
        'questions' => null,
        'referral_source' => null,
        'secondary_id' => null,
        'solution' => null,
        'subject' => null,
        'title' => null,
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
        'assigned' => 'assigned',
        'close_time' => 'close_time',
        'closed_by' => 'closed_by',
        'comments' => 'comments',
        'contacted' => 'contacted',
        'create_date' => 'create_date',
        'email' => 'email',
        'firm_name' => 'firm_name',
        'first_name' => 'first_name',
        'id' => 'id',
        'ip' => 'ip',
        'last_name' => 'last_name',
        'metadata' => 'metadata',
        'method' => 'method',
        'notification' => 'notification',
        'open_time' => 'open_time',
        'phone' => 'phone',
        'questions' => 'questions',
        'referral_source' => 'referral_source',
        'secondary_id' => 'secondary_id',
        'solution' => 'solution',
        'subject' => 'subject',
        'title' => 'title',
        'update_date' => 'update_date'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'assigned' => 'setAssigned',
        'close_time' => 'setCloseTime',
        'closed_by' => 'setClosedBy',
        'comments' => 'setComments',
        'contacted' => 'setContacted',
        'create_date' => 'setCreateDate',
        'email' => 'setEmail',
        'firm_name' => 'setFirmName',
        'first_name' => 'setFirstName',
        'id' => 'setId',
        'ip' => 'setIp',
        'last_name' => 'setLastName',
        'metadata' => 'setMetadata',
        'method' => 'setMethod',
        'notification' => 'setNotification',
        'open_time' => 'setOpenTime',
        'phone' => 'setPhone',
        'questions' => 'setQuestions',
        'referral_source' => 'setReferralSource',
        'secondary_id' => 'setSecondaryId',
        'solution' => 'setSolution',
        'subject' => 'setSubject',
        'title' => 'setTitle',
        'update_date' => 'setUpdateDate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'assigned' => 'getAssigned',
        'close_time' => 'getCloseTime',
        'closed_by' => 'getClosedBy',
        'comments' => 'getComments',
        'contacted' => 'getContacted',
        'create_date' => 'getCreateDate',
        'email' => 'getEmail',
        'firm_name' => 'getFirmName',
        'first_name' => 'getFirstName',
        'id' => 'getId',
        'ip' => 'getIp',
        'last_name' => 'getLastName',
        'metadata' => 'getMetadata',
        'method' => 'getMethod',
        'notification' => 'getNotification',
        'open_time' => 'getOpenTime',
        'phone' => 'getPhone',
        'questions' => 'getQuestions',
        'referral_source' => 'getReferralSource',
        'secondary_id' => 'getSecondaryId',
        'solution' => 'getSolution',
        'subject' => 'getSubject',
        'title' => 'getTitle',
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
        $this->container['assigned'] = isset($data['assigned']) ? $data['assigned'] : null;
        $this->container['close_time'] = isset($data['close_time']) ? $data['close_time'] : null;
        $this->container['closed_by'] = isset($data['closed_by']) ? $data['closed_by'] : null;
        $this->container['comments'] = isset($data['comments']) ? $data['comments'] : null;
        $this->container['contacted'] = isset($data['contacted']) ? $data['contacted'] : null;
        $this->container['create_date'] = isset($data['create_date']) ? $data['create_date'] : null;
        $this->container['email'] = isset($data['email']) ? $data['email'] : null;
        $this->container['firm_name'] = isset($data['firm_name']) ? $data['firm_name'] : null;
        $this->container['first_name'] = isset($data['first_name']) ? $data['first_name'] : null;
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['ip'] = isset($data['ip']) ? $data['ip'] : null;
        $this->container['last_name'] = isset($data['last_name']) ? $data['last_name'] : null;
        $this->container['metadata'] = isset($data['metadata']) ? $data['metadata'] : null;
        $this->container['method'] = isset($data['method']) ? $data['method'] : null;
        $this->container['notification'] = isset($data['notification']) ? $data['notification'] : null;
        $this->container['open_time'] = isset($data['open_time']) ? $data['open_time'] : null;
        $this->container['phone'] = isset($data['phone']) ? $data['phone'] : null;
        $this->container['questions'] = isset($data['questions']) ? $data['questions'] : null;
        $this->container['referral_source'] = isset($data['referral_source']) ? $data['referral_source'] : null;
        $this->container['secondary_id'] = isset($data['secondary_id']) ? $data['secondary_id'] : null;
        $this->container['solution'] = isset($data['solution']) ? $data['solution'] : null;
        $this->container['subject'] = isset($data['subject']) ? $data['subject'] : null;
        $this->container['title'] = isset($data['title']) ? $data['title'] : null;
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

        if ($this->container['questions'] === null) {
            $invalidProperties[] = "'questions' can't be null";
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
     * Gets assigned
     *
     * @return string
     */
    public function getAssigned()
    {
        return $this->container['assigned'];
    }

    /**
     * Sets assigned
     *
     * @param string $assigned assigned
     *
     * @return $this
     */
    public function setAssigned($assigned)
    {
        $this->container['assigned'] = $assigned;

        return $this;
    }

    /**
     * Gets close_time
     *
     * @return \DateTime
     */
    public function getCloseTime()
    {
        return $this->container['close_time'];
    }

    /**
     * Sets close_time
     *
     * @param \DateTime $close_time closeTime
     *
     * @return $this
     */
    public function setCloseTime($close_time)
    {
        $this->container['close_time'] = $close_time;

        return $this;
    }

    /**
     * Gets closed_by
     *
     * @return string
     */
    public function getClosedBy()
    {
        return $this->container['closed_by'];
    }

    /**
     * Sets closed_by
     *
     * @param string $closed_by closedBy
     *
     * @return $this
     */
    public function setClosedBy($closed_by)
    {
        $this->container['closed_by'] = $closed_by;

        return $this;
    }

    /**
     * Gets comments
     *
     * @return string
     */
    public function getComments()
    {
        return $this->container['comments'];
    }

    /**
     * Sets comments
     *
     * @param string $comments comments
     *
     * @return $this
     */
    public function setComments($comments)
    {
        $this->container['comments'] = $comments;

        return $this;
    }

    /**
     * Gets contacted
     *
     * @return bool
     */
    public function getContacted()
    {
        return $this->container['contacted'];
    }

    /**
     * Sets contacted
     *
     * @param bool $contacted contacted
     *
     * @return $this
     */
    public function setContacted($contacted)
    {
        $this->container['contacted'] = $contacted;

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
     * Gets email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->container['email'];
    }

    /**
     * Sets email
     *
     * @param string $email email
     *
     * @return $this
     */
    public function setEmail($email)
    {
        $this->container['email'] = $email;

        return $this;
    }

    /**
     * Gets firm_name
     *
     * @return string
     */
    public function getFirmName()
    {
        return $this->container['firm_name'];
    }

    /**
     * Sets firm_name
     *
     * @param string $firm_name firmName
     *
     * @return $this
     */
    public function setFirmName($firm_name)
    {
        $this->container['firm_name'] = $firm_name;

        return $this;
    }

    /**
     * Gets first_name
     *
     * @return string
     */
    public function getFirstName()
    {
        return $this->container['first_name'];
    }

    /**
     * Sets first_name
     *
     * @param string $first_name firstName
     *
     * @return $this
     */
    public function setFirstName($first_name)
    {
        $this->container['first_name'] = $first_name;

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
     * Gets ip
     *
     * @return string
     */
    public function getIp()
    {
        return $this->container['ip'];
    }

    /**
     * Sets ip
     *
     * @param string $ip ip
     *
     * @return $this
     */
    public function setIp($ip)
    {
        $this->container['ip'] = $ip;

        return $this;
    }

    /**
     * Gets last_name
     *
     * @return string
     */
    public function getLastName()
    {
        return $this->container['last_name'];
    }

    /**
     * Sets last_name
     *
     * @param string $last_name lastName
     *
     * @return $this
     */
    public function setLastName($last_name)
    {
        $this->container['last_name'] = $last_name;

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
     * Gets method
     *
     * @return string
     */
    public function getMethod()
    {
        return $this->container['method'];
    }

    /**
     * Sets method
     *
     * @param string $method method
     *
     * @return $this
     */
    public function setMethod($method)
    {
        $this->container['method'] = $method;

        return $this;
    }

    /**
     * Gets notification
     *
     * @return bool
     */
    public function getNotification()
    {
        return $this->container['notification'];
    }

    /**
     * Sets notification
     *
     * @param bool $notification notification
     *
     * @return $this
     */
    public function setNotification($notification)
    {
        $this->container['notification'] = $notification;

        return $this;
    }

    /**
     * Gets open_time
     *
     * @return \DateTime
     */
    public function getOpenTime()
    {
        return $this->container['open_time'];
    }

    /**
     * Sets open_time
     *
     * @param \DateTime $open_time openTime
     *
     * @return $this
     */
    public function setOpenTime($open_time)
    {
        $this->container['open_time'] = $open_time;

        return $this;
    }

    /**
     * Gets phone
     *
     * @return string
     */
    public function getPhone()
    {
        return $this->container['phone'];
    }

    /**
     * Sets phone
     *
     * @param string $phone phone
     *
     * @return $this
     */
    public function setPhone($phone)
    {
        $this->container['phone'] = $phone;

        return $this;
    }

    /**
     * Gets questions
     *
     * @return string
     */
    public function getQuestions()
    {
        return $this->container['questions'];
    }

    /**
     * Sets questions
     *
     * @param string $questions questions
     *
     * @return $this
     */
    public function setQuestions($questions)
    {
        $this->container['questions'] = $questions;

        return $this;
    }

    /**
     * Gets referral_source
     *
     * @return string
     */
    public function getReferralSource()
    {
        return $this->container['referral_source'];
    }

    /**
     * Sets referral_source
     *
     * @param string $referral_source referralSource
     *
     * @return $this
     */
    public function setReferralSource($referral_source)
    {
        $this->container['referral_source'] = $referral_source;

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
     * Gets solution
     *
     * @return string
     */
    public function getSolution()
    {
        return $this->container['solution'];
    }

    /**
     * Sets solution
     *
     * @param string $solution solution
     *
     * @return $this
     */
    public function setSolution($solution)
    {
        $this->container['solution'] = $solution;

        return $this;
    }

    /**
     * Gets subject
     *
     * @return string
     */
    public function getSubject()
    {
        return $this->container['subject'];
    }

    /**
     * Sets subject
     *
     * @param string $subject subject
     *
     * @return $this
     */
    public function setSubject($subject)
    {
        $this->container['subject'] = $subject;

        return $this;
    }

    /**
     * Gets title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->container['title'];
    }

    /**
     * Sets title
     *
     * @param string $title title
     *
     * @return $this
     */
    public function setTitle($title)
    {
        $this->container['title'] = $title;

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

