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


class Stat(object):
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
        'stat_name': 'str',
        'stat_value': 'float'
    }

    attribute_map = {
        'stat_name': 'stat_name',
        'stat_value': 'stat_value'
    }

    def __init__(self, stat_name=None, stat_value=None, _configuration=None):  # noqa: E501
        """Stat - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._stat_name = None
        self._stat_value = None
        self.discriminator = None

        self.stat_name = stat_name
        self.stat_value = stat_value

    @property
    def stat_name(self):
        """Gets the stat_name of this Stat.  # noqa: E501

        statName  # noqa: E501

        :return: The stat_name of this Stat.  # noqa: E501
        :rtype: str
        """
        return self._stat_name

    @stat_name.setter
    def stat_name(self, stat_name):
        """Sets the stat_name of this Stat.

        statName  # noqa: E501

        :param stat_name: The stat_name of this Stat.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and stat_name is None:
            raise ValueError("Invalid value for `stat_name`, must not be `None`")  # noqa: E501

        self._stat_name = stat_name

    @property
    def stat_value(self):
        """Gets the stat_value of this Stat.  # noqa: E501

        statValue  # noqa: E501

        :return: The stat_value of this Stat.  # noqa: E501
        :rtype: float
        """
        return self._stat_value

    @stat_value.setter
    def stat_value(self, stat_value):
        """Sets the stat_value of this Stat.

        statValue  # noqa: E501

        :param stat_value: The stat_value of this Stat.  # noqa: E501
        :type: float
        """
        if self._configuration.client_side_validation and stat_value is None:
            raise ValueError("Invalid value for `stat_value`, must not be `None`")  # noqa: E501

        self._stat_value = stat_value

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
        if issubclass(Stat, dict):
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
        if not isinstance(other, Stat):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Stat):
            return True

        return self.to_dict() != other.to_dict()
