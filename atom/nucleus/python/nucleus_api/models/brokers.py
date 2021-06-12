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


class Brokers(object):
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
        'broker_name': 'str',
        'status': 'str'
    }

    attribute_map = {
        'broker_name': 'broker_name',
        'status': 'status'
    }

    def __init__(self, broker_name=None, status=None, _configuration=None):  # noqa: E501
        """Brokers - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._broker_name = None
        self._status = None
        self.discriminator = None

        self.broker_name = broker_name
        self.status = status

    @property
    def broker_name(self):
        """Gets the broker_name of this Brokers.  # noqa: E501

        broker_name  # noqa: E501

        :return: The broker_name of this Brokers.  # noqa: E501
        :rtype: str
        """
        return self._broker_name

    @broker_name.setter
    def broker_name(self, broker_name):
        """Sets the broker_name of this Brokers.

        broker_name  # noqa: E501

        :param broker_name: The broker_name of this Brokers.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and broker_name is None:
            raise ValueError("Invalid value for `broker_name`, must not be `None`")  # noqa: E501

        self._broker_name = broker_name

    @property
    def status(self):
        """Gets the status of this Brokers.  # noqa: E501

        status  # noqa: E501

        :return: The status of this Brokers.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this Brokers.

        status  # noqa: E501

        :param status: The status of this Brokers.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and status is None:
            raise ValueError("Invalid value for `status`, must not be `None`")  # noqa: E501

        self._status = status

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
        if issubclass(Brokers, dict):
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
        if not isinstance(other, Brokers):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Brokers):
            return True

        return self.to_dict() != other.to_dict()
