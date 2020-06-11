# coding: utf-8

"""
    Hydrogen Atom API

    The Hydrogen Atom API  # noqa: E501

    OpenAPI spec version: 1.7.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class OrderStatus(object):
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
        'create_date': 'datetime',
        'description': 'str',
        'id': 'str',
        'metadata': 'dict(str, str)',
        'secondary_id': 'str',
        'status': 'str',
        'update_date': 'datetime'
    }

    attribute_map = {
        'create_date': 'create_date',
        'description': 'description',
        'id': 'id',
        'metadata': 'metadata',
        'secondary_id': 'secondary_id',
        'status': 'status',
        'update_date': 'update_date'
    }

    def __init__(self, create_date=None, description=None, id=None, metadata=None, secondary_id=None, status=None, update_date=None):  # noqa: E501
        """OrderStatus - a model defined in Swagger"""  # noqa: E501

        self._create_date = None
        self._description = None
        self._id = None
        self._metadata = None
        self._secondary_id = None
        self._status = None
        self._update_date = None
        self.discriminator = None

        if create_date is not None:
            self.create_date = create_date
        self.description = description
        if id is not None:
            self.id = id
        if metadata is not None:
            self.metadata = metadata
        if secondary_id is not None:
            self.secondary_id = secondary_id
        self.status = status
        if update_date is not None:
            self.update_date = update_date

    @property
    def create_date(self):
        """Gets the create_date of this OrderStatus.  # noqa: E501


        :return: The create_date of this OrderStatus.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this OrderStatus.


        :param create_date: The create_date of this OrderStatus.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def description(self):
        """Gets the description of this OrderStatus.  # noqa: E501

        description  # noqa: E501

        :return: The description of this OrderStatus.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this OrderStatus.

        description  # noqa: E501

        :param description: The description of this OrderStatus.  # noqa: E501
        :type: str
        """
        if description is None:
            raise ValueError("Invalid value for `description`, must not be `None`")  # noqa: E501

        self._description = description

    @property
    def id(self):
        """Gets the id of this OrderStatus.  # noqa: E501


        :return: The id of this OrderStatus.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this OrderStatus.


        :param id: The id of this OrderStatus.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def metadata(self):
        """Gets the metadata of this OrderStatus.  # noqa: E501


        :return: The metadata of this OrderStatus.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this OrderStatus.


        :param metadata: The metadata of this OrderStatus.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def secondary_id(self):
        """Gets the secondary_id of this OrderStatus.  # noqa: E501


        :return: The secondary_id of this OrderStatus.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this OrderStatus.


        :param secondary_id: The secondary_id of this OrderStatus.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def status(self):
        """Gets the status of this OrderStatus.  # noqa: E501

        status  # noqa: E501

        :return: The status of this OrderStatus.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this OrderStatus.

        status  # noqa: E501

        :param status: The status of this OrderStatus.  # noqa: E501
        :type: str
        """
        if status is None:
            raise ValueError("Invalid value for `status`, must not be `None`")  # noqa: E501

        self._status = status

    @property
    def update_date(self):
        """Gets the update_date of this OrderStatus.  # noqa: E501


        :return: The update_date of this OrderStatus.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this OrderStatus.


        :param update_date: The update_date of this OrderStatus.  # noqa: E501
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
        if issubclass(OrderStatus, dict):
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
        if not isinstance(other, OrderStatus):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
