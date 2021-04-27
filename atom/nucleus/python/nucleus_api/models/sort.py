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


class Sort(object):
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
        'ascending': 'bool',
        'descending': 'bool',
        'direction': 'str',
        'ignore_case': 'bool',
        'null_handling': 'str',
        '_property': 'str'
    }

    attribute_map = {
        'ascending': 'ascending',
        'descending': 'descending',
        'direction': 'direction',
        'ignore_case': 'ignore_case',
        'null_handling': 'null_handling',
        '_property': 'property'
    }

    def __init__(self, ascending=None, descending=None, direction=None, ignore_case=None, null_handling=None, _property=None, _configuration=None):  # noqa: E501
        """Sort - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._ascending = None
        self._descending = None
        self._direction = None
        self._ignore_case = None
        self._null_handling = None
        self.__property = None
        self.discriminator = None

        if ascending is not None:
            self.ascending = ascending
        if descending is not None:
            self.descending = descending
        if direction is not None:
            self.direction = direction
        if ignore_case is not None:
            self.ignore_case = ignore_case
        if null_handling is not None:
            self.null_handling = null_handling
        if _property is not None:
            self._property = _property

    @property
    def ascending(self):
        """Gets the ascending of this Sort.  # noqa: E501

        ascending  # noqa: E501

        :return: The ascending of this Sort.  # noqa: E501
        :rtype: bool
        """
        return self._ascending

    @ascending.setter
    def ascending(self, ascending):
        """Sets the ascending of this Sort.

        ascending  # noqa: E501

        :param ascending: The ascending of this Sort.  # noqa: E501
        :type: bool
        """

        self._ascending = ascending

    @property
    def descending(self):
        """Gets the descending of this Sort.  # noqa: E501

        descending  # noqa: E501

        :return: The descending of this Sort.  # noqa: E501
        :rtype: bool
        """
        return self._descending

    @descending.setter
    def descending(self, descending):
        """Sets the descending of this Sort.

        descending  # noqa: E501

        :param descending: The descending of this Sort.  # noqa: E501
        :type: bool
        """

        self._descending = descending

    @property
    def direction(self):
        """Gets the direction of this Sort.  # noqa: E501

        direction  # noqa: E501

        :return: The direction of this Sort.  # noqa: E501
        :rtype: str
        """
        return self._direction

    @direction.setter
    def direction(self, direction):
        """Sets the direction of this Sort.

        direction  # noqa: E501

        :param direction: The direction of this Sort.  # noqa: E501
        :type: str
        """

        self._direction = direction

    @property
    def ignore_case(self):
        """Gets the ignore_case of this Sort.  # noqa: E501

        ignoreCase  # noqa: E501

        :return: The ignore_case of this Sort.  # noqa: E501
        :rtype: bool
        """
        return self._ignore_case

    @ignore_case.setter
    def ignore_case(self, ignore_case):
        """Sets the ignore_case of this Sort.

        ignoreCase  # noqa: E501

        :param ignore_case: The ignore_case of this Sort.  # noqa: E501
        :type: bool
        """

        self._ignore_case = ignore_case

    @property
    def null_handling(self):
        """Gets the null_handling of this Sort.  # noqa: E501

        nullHandling  # noqa: E501

        :return: The null_handling of this Sort.  # noqa: E501
        :rtype: str
        """
        return self._null_handling

    @null_handling.setter
    def null_handling(self, null_handling):
        """Sets the null_handling of this Sort.

        nullHandling  # noqa: E501

        :param null_handling: The null_handling of this Sort.  # noqa: E501
        :type: str
        """

        self._null_handling = null_handling

    @property
    def _property(self):
        """Gets the _property of this Sort.  # noqa: E501

        property  # noqa: E501

        :return: The _property of this Sort.  # noqa: E501
        :rtype: str
        """
        return self.__property

    @_property.setter
    def _property(self, _property):
        """Sets the _property of this Sort.

        property  # noqa: E501

        :param _property: The _property of this Sort.  # noqa: E501
        :type: str
        """

        self.__property = _property

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
        if issubclass(Sort, dict):
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
        if not isinstance(other, Sort):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Sort):
            return True

        return self.to_dict() != other.to_dict()
