<?php
/**
 * PortfolioAggregatedVO
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
 * PortfolioAggregatedVO Class Doc Comment
 *
 * @category Class
 * @package  com\hydrogen\nucleus
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class PortfolioAggregatedVO implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'PortfolioAggregatedVO';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'asset_classes' => '\com\hydrogen\nucleus\Model\SecurityDetailVO[]',
        'categories' => '\com\hydrogen\nucleus\Model\SecurityDetailVO[]',
        'create_date' => '\DateTime',
        'description' => 'string',
        'industries' => '\com\hydrogen\nucleus\Model\SecurityDetailVO[]',
        'name' => 'string',
        'portfolio_id' => 'string',
        'sectors' => '\com\hydrogen\nucleus\Model\SecurityDetailVO[]',
        'security_classes' => '\com\hydrogen\nucleus\Model\SecurityDetailVO[]',
        'update_date' => '\DateTime',
        'weight' => 'double'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'asset_classes' => null,
        'categories' => null,
        'create_date' => 'date-time',
        'description' => null,
        'industries' => null,
        'name' => null,
        'portfolio_id' => 'uuid',
        'sectors' => null,
        'security_classes' => null,
        'update_date' => 'date-time',
        'weight' => 'double'
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
        'asset_classes' => 'asset_classes',
        'categories' => 'categories',
        'create_date' => 'create_date',
        'description' => 'description',
        'industries' => 'industries',
        'name' => 'name',
        'portfolio_id' => 'portfolio_id',
        'sectors' => 'sectors',
        'security_classes' => 'security_classes',
        'update_date' => 'update_date',
        'weight' => 'weight'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'asset_classes' => 'setAssetClasses',
        'categories' => 'setCategories',
        'create_date' => 'setCreateDate',
        'description' => 'setDescription',
        'industries' => 'setIndustries',
        'name' => 'setName',
        'portfolio_id' => 'setPortfolioId',
        'sectors' => 'setSectors',
        'security_classes' => 'setSecurityClasses',
        'update_date' => 'setUpdateDate',
        'weight' => 'setWeight'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'asset_classes' => 'getAssetClasses',
        'categories' => 'getCategories',
        'create_date' => 'getCreateDate',
        'description' => 'getDescription',
        'industries' => 'getIndustries',
        'name' => 'getName',
        'portfolio_id' => 'getPortfolioId',
        'sectors' => 'getSectors',
        'security_classes' => 'getSecurityClasses',
        'update_date' => 'getUpdateDate',
        'weight' => 'getWeight'
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
        $this->container['asset_classes'] = isset($data['asset_classes']) ? $data['asset_classes'] : null;
        $this->container['categories'] = isset($data['categories']) ? $data['categories'] : null;
        $this->container['create_date'] = isset($data['create_date']) ? $data['create_date'] : null;
        $this->container['description'] = isset($data['description']) ? $data['description'] : null;
        $this->container['industries'] = isset($data['industries']) ? $data['industries'] : null;
        $this->container['name'] = isset($data['name']) ? $data['name'] : null;
        $this->container['portfolio_id'] = isset($data['portfolio_id']) ? $data['portfolio_id'] : null;
        $this->container['sectors'] = isset($data['sectors']) ? $data['sectors'] : null;
        $this->container['security_classes'] = isset($data['security_classes']) ? $data['security_classes'] : null;
        $this->container['update_date'] = isset($data['update_date']) ? $data['update_date'] : null;
        $this->container['weight'] = isset($data['weight']) ? $data['weight'] : null;
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
     * Gets asset_classes
     *
     * @return \com\hydrogen\nucleus\Model\SecurityDetailVO[]
     */
    public function getAssetClasses()
    {
        return $this->container['asset_classes'];
    }

    /**
     * Sets asset_classes
     *
     * @param \com\hydrogen\nucleus\Model\SecurityDetailVO[] $asset_classes asset_classes
     *
     * @return $this
     */
    public function setAssetClasses($asset_classes)
    {
        $this->container['asset_classes'] = $asset_classes;

        return $this;
    }

    /**
     * Gets categories
     *
     * @return \com\hydrogen\nucleus\Model\SecurityDetailVO[]
     */
    public function getCategories()
    {
        return $this->container['categories'];
    }

    /**
     * Sets categories
     *
     * @param \com\hydrogen\nucleus\Model\SecurityDetailVO[] $categories categories
     *
     * @return $this
     */
    public function setCategories($categories)
    {
        $this->container['categories'] = $categories;

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
     * Gets industries
     *
     * @return \com\hydrogen\nucleus\Model\SecurityDetailVO[]
     */
    public function getIndustries()
    {
        return $this->container['industries'];
    }

    /**
     * Sets industries
     *
     * @param \com\hydrogen\nucleus\Model\SecurityDetailVO[] $industries industries
     *
     * @return $this
     */
    public function setIndustries($industries)
    {
        $this->container['industries'] = $industries;

        return $this;
    }

    /**
     * Gets name
     *
     * @return string
     */
    public function getName()
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     *
     * @param string $name name
     *
     * @return $this
     */
    public function setName($name)
    {
        $this->container['name'] = $name;

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
     * @param string $portfolio_id portfolio_id
     *
     * @return $this
     */
    public function setPortfolioId($portfolio_id)
    {
        $this->container['portfolio_id'] = $portfolio_id;

        return $this;
    }

    /**
     * Gets sectors
     *
     * @return \com\hydrogen\nucleus\Model\SecurityDetailVO[]
     */
    public function getSectors()
    {
        return $this->container['sectors'];
    }

    /**
     * Sets sectors
     *
     * @param \com\hydrogen\nucleus\Model\SecurityDetailVO[] $sectors sectors
     *
     * @return $this
     */
    public function setSectors($sectors)
    {
        $this->container['sectors'] = $sectors;

        return $this;
    }

    /**
     * Gets security_classes
     *
     * @return \com\hydrogen\nucleus\Model\SecurityDetailVO[]
     */
    public function getSecurityClasses()
    {
        return $this->container['security_classes'];
    }

    /**
     * Sets security_classes
     *
     * @param \com\hydrogen\nucleus\Model\SecurityDetailVO[] $security_classes security_classes
     *
     * @return $this
     */
    public function setSecurityClasses($security_classes)
    {
        $this->container['security_classes'] = $security_classes;

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
     * Gets weight
     *
     * @return double
     */
    public function getWeight()
    {
        return $this->container['weight'];
    }

    /**
     * Sets weight
     *
     * @param double $weight weight
     *
     * @return $this
     */
    public function setWeight($weight)
    {
        $this->container['weight'] = $weight;

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

