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


class ClientCredentials(object):
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
        'current_password': 'str',
        'new_password': 'str',
        'username': 'str'
    }

    attribute_map = {
        'current_password': 'current_password',
        'new_password': 'new_password',
        'username': 'username'
    }

    def __init__(self, current_password=None, new_password=None, username=None, _configuration=None):  # noqa: E501
        """ClientCredentials - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._current_password = None
        self._new_password = None
        self._username = None
        self.discriminator = None

        if current_password is not None:
            self.current_password = current_password
        if new_password is not None:
            self.new_password = new_password
        if username is not None:
            self.username = username

    @property
    def current_password(self):
        """Gets the current_password of this ClientCredentials.  # noqa: E501


        :return: The current_password of this ClientCredentials.  # noqa: E501
        :rtype: str
        """
        return self._current_password

    @current_password.setter
    def current_password(self, current_password):
        """Sets the current_password of this ClientCredentials.


        :param current_password: The current_password of this ClientCredentials.  # noqa: E501
        :type: str
        """

        self._current_password = current_password

    @property
    def new_password(self):
        """Gets the new_password of this ClientCredentials.  # noqa: E501


        :return: The new_password of this ClientCredentials.  # noqa: E501
        :rtype: str
        """
        return self._new_password

    @new_password.setter
    def new_password(self, new_password):
        """Sets the new_password of this ClientCredentials.


        :param new_password: The new_password of this ClientCredentials.  # noqa: E501
        :type: str
        """

        self._new_password = new_password

    @property
    def username(self):
        """Gets the username of this ClientCredentials.  # noqa: E501


        :return: The username of this ClientCredentials.  # noqa: E501
        :rtype: str
        """
        return self._username

    @username.setter
    def username(self, username):
        """Sets the username of this ClientCredentials.


        :param username: The username of this ClientCredentials.  # noqa: E501
        :type: str
        """

        self._username = username

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
        if issubclass(ClientCredentials, dict):
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
        if not isinstance(other, ClientCredentials):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, ClientCredentials):
            return True

        return self.to_dict() != other.to_dict()
