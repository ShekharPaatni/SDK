# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.1
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from nucleus_api.configuration import Configuration


class Member(object):
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
        'client_id': 'str',
        'client_relationships': 'list[ClientRelationship]',
        'household': 'Household',
        'is_primary': 'bool'
    }

    attribute_map = {
        'client_id': 'client_id',
        'client_relationships': 'client_relationships',
        'household': 'household',
        'is_primary': 'is_primary'
    }

    def __init__(self, client_id=None, client_relationships=None, household=None, is_primary=None, _configuration=None):  # noqa: E501
        """Member - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._client_id = None
        self._client_relationships = None
        self._household = None
        self._is_primary = None
        self.discriminator = None

        self.client_id = client_id
        if client_relationships is not None:
            self.client_relationships = client_relationships
        if household is not None:
            self.household = household
        if is_primary is not None:
            self.is_primary = is_primary

    @property
    def client_id(self):
        """Gets the client_id of this Member.  # noqa: E501

        clientId  # noqa: E501

        :return: The client_id of this Member.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this Member.

        clientId  # noqa: E501

        :param client_id: The client_id of this Member.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and client_id is None:
            raise ValueError("Invalid value for `client_id`, must not be `None`")  # noqa: E501

        self._client_id = client_id

    @property
    def client_relationships(self):
        """Gets the client_relationships of this Member.  # noqa: E501


        :return: The client_relationships of this Member.  # noqa: E501
        :rtype: list[ClientRelationship]
        """
        return self._client_relationships

    @client_relationships.setter
    def client_relationships(self, client_relationships):
        """Sets the client_relationships of this Member.


        :param client_relationships: The client_relationships of this Member.  # noqa: E501
        :type: list[ClientRelationship]
        """

        self._client_relationships = client_relationships

    @property
    def household(self):
        """Gets the household of this Member.  # noqa: E501


        :return: The household of this Member.  # noqa: E501
        :rtype: Household
        """
        return self._household

    @household.setter
    def household(self, household):
        """Sets the household of this Member.


        :param household: The household of this Member.  # noqa: E501
        :type: Household
        """

        self._household = household

    @property
    def is_primary(self):
        """Gets the is_primary of this Member.  # noqa: E501

        isPrimary  # noqa: E501

        :return: The is_primary of this Member.  # noqa: E501
        :rtype: bool
        """
        return self._is_primary

    @is_primary.setter
    def is_primary(self, is_primary):
        """Sets the is_primary of this Member.

        isPrimary  # noqa: E501

        :param is_primary: The is_primary of this Member.  # noqa: E501
        :type: bool
        """

        self._is_primary = is_primary

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
        if issubclass(Member, dict):
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
        if not isinstance(other, Member):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Member):
            return True

        return self.to_dict() != other.to_dict()
