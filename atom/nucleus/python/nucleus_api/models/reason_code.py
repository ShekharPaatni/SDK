# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from nucleus_api.configuration import Configuration


class ReasonCode(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'category': 'str',
        'create_date': 'datetime',
        'id': 'str',
        'metadata': 'dict(str, str)',
        'reason_code': 'str',
        'reason_code_description': 'str',
        'reason_type': 'str',
        'secondary_id': 'str',
        'subcategory': 'str',
        'update_date': 'datetime'
    }

    attribute_map = {
        'category': 'category',
        'create_date': 'create_date',
        'id': 'id',
        'metadata': 'metadata',
        'reason_code': 'reason_code',
        'reason_code_description': 'reason_code_description',
        'reason_type': 'reason_type',
        'secondary_id': 'secondary_id',
        'subcategory': 'subcategory',
        'update_date': 'update_date'
    }

    def __init__(self, category=None, create_date=None, id=None, metadata=None, reason_code=None, reason_code_description=None, reason_type=None, secondary_id=None, subcategory=None, update_date=None, _configuration=None):  # noqa: E501
        """ReasonCode - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._category = None
        self._create_date = None
        self._id = None
        self._metadata = None
        self._reason_code = None
        self._reason_code_description = None
        self._reason_type = None
        self._secondary_id = None
        self._subcategory = None
        self._update_date = None
        self.discriminator = None

        if category is not None:
            self.category = category
        if create_date is not None:
            self.create_date = create_date
        if id is not None:
            self.id = id
        if metadata is not None:
            self.metadata = metadata
        self.reason_code = reason_code
        if reason_code_description is not None:
            self.reason_code_description = reason_code_description
        if reason_type is not None:
            self.reason_type = reason_type
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if subcategory is not None:
            self.subcategory = subcategory
        if update_date is not None:
            self.update_date = update_date

    @property
    def category(self):
        """Gets the category of this ReasonCode.  # noqa: E501

        category  # noqa: E501

        :return: The category of this ReasonCode.  # noqa: E501
        :rtype: str
        """
        return self._category

    @category.setter
    def category(self, category):
        """Sets the category of this ReasonCode.

        category  # noqa: E501

        :param category: The category of this ReasonCode.  # noqa: E501
        :type: str
        """

        self._category = category

    @property
    def create_date(self):
        """Gets the create_date of this ReasonCode.  # noqa: E501


        :return: The create_date of this ReasonCode.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this ReasonCode.


        :param create_date: The create_date of this ReasonCode.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def id(self):
        """Gets the id of this ReasonCode.  # noqa: E501


        :return: The id of this ReasonCode.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this ReasonCode.


        :param id: The id of this ReasonCode.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def metadata(self):
        """Gets the metadata of this ReasonCode.  # noqa: E501


        :return: The metadata of this ReasonCode.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this ReasonCode.


        :param metadata: The metadata of this ReasonCode.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def reason_code(self):
        """Gets the reason_code of this ReasonCode.  # noqa: E501

        reasonCode  # noqa: E501

        :return: The reason_code of this ReasonCode.  # noqa: E501
        :rtype: str
        """
        return self._reason_code

    @reason_code.setter
    def reason_code(self, reason_code):
        """Sets the reason_code of this ReasonCode.

        reasonCode  # noqa: E501

        :param reason_code: The reason_code of this ReasonCode.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and reason_code is None:
            raise ValueError("Invalid value for `reason_code`, must not be `None`")  # noqa: E501

        self._reason_code = reason_code

    @property
    def reason_code_description(self):
        """Gets the reason_code_description of this ReasonCode.  # noqa: E501

        reasonCodeDescription  # noqa: E501

        :return: The reason_code_description of this ReasonCode.  # noqa: E501
        :rtype: str
        """
        return self._reason_code_description

    @reason_code_description.setter
    def reason_code_description(self, reason_code_description):
        """Sets the reason_code_description of this ReasonCode.

        reasonCodeDescription  # noqa: E501

        :param reason_code_description: The reason_code_description of this ReasonCode.  # noqa: E501
        :type: str
        """

        self._reason_code_description = reason_code_description

    @property
    def reason_type(self):
        """Gets the reason_type of this ReasonCode.  # noqa: E501

        reasonType  # noqa: E501

        :return: The reason_type of this ReasonCode.  # noqa: E501
        :rtype: str
        """
        return self._reason_type

    @reason_type.setter
    def reason_type(self, reason_type):
        """Sets the reason_type of this ReasonCode.

        reasonType  # noqa: E501

        :param reason_type: The reason_type of this ReasonCode.  # noqa: E501
        :type: str
        """

        self._reason_type = reason_type

    @property
    def secondary_id(self):
        """Gets the secondary_id of this ReasonCode.  # noqa: E501


        :return: The secondary_id of this ReasonCode.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this ReasonCode.


        :param secondary_id: The secondary_id of this ReasonCode.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def subcategory(self):
        """Gets the subcategory of this ReasonCode.  # noqa: E501

        subcategory  # noqa: E501

        :return: The subcategory of this ReasonCode.  # noqa: E501
        :rtype: str
        """
        return self._subcategory

    @subcategory.setter
    def subcategory(self, subcategory):
        """Sets the subcategory of this ReasonCode.

        subcategory  # noqa: E501

        :param subcategory: The subcategory of this ReasonCode.  # noqa: E501
        :type: str
        """

        self._subcategory = subcategory

    @property
    def update_date(self):
        """Gets the update_date of this ReasonCode.  # noqa: E501


        :return: The update_date of this ReasonCode.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this ReasonCode.


        :param update_date: The update_date of this ReasonCode.  # noqa: E501
        :type: datetime
        """

        self._update_date = update_date

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(ReasonCode, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, ReasonCode):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ReasonCode):
            return True

        return self.to_dict() != other.to_dict()
