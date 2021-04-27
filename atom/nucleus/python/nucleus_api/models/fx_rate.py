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


class FxRate(object):
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
        'currency_code_from': 'str',
        'currency_code_to': 'str',
        '_date': 'datetime',
        'exchange_rate': 'float'
    }

    attribute_map = {
        'currency_code_from': 'currency_code_from',
        'currency_code_to': 'currency_code_to',
        '_date': 'date',
        'exchange_rate': 'exchange_rate'
    }

    def __init__(self, currency_code_from=None, currency_code_to=None, _date=None, exchange_rate=None, _configuration=None):  # noqa: E501
        """FxRate - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._currency_code_from = None
        self._currency_code_to = None
        self.__date = None
        self._exchange_rate = None
        self.discriminator = None

        self.currency_code_from = currency_code_from
        self.currency_code_to = currency_code_to
        self._date = _date
        self.exchange_rate = exchange_rate

    @property
    def currency_code_from(self):
        """Gets the currency_code_from of this FxRate.  # noqa: E501

        currency_code_from  # noqa: E501

        :return: The currency_code_from of this FxRate.  # noqa: E501
        :rtype: str
        """
        return self._currency_code_from

    @currency_code_from.setter
    def currency_code_from(self, currency_code_from):
        """Sets the currency_code_from of this FxRate.

        currency_code_from  # noqa: E501

        :param currency_code_from: The currency_code_from of this FxRate.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and currency_code_from is None:
            raise ValueError("Invalid value for `currency_code_from`, must not be `None`")  # noqa: E501

        self._currency_code_from = currency_code_from

    @property
    def currency_code_to(self):
        """Gets the currency_code_to of this FxRate.  # noqa: E501

        currency_code_to  # noqa: E501

        :return: The currency_code_to of this FxRate.  # noqa: E501
        :rtype: str
        """
        return self._currency_code_to

    @currency_code_to.setter
    def currency_code_to(self, currency_code_to):
        """Sets the currency_code_to of this FxRate.

        currency_code_to  # noqa: E501

        :param currency_code_to: The currency_code_to of this FxRate.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and currency_code_to is None:
            raise ValueError("Invalid value for `currency_code_to`, must not be `None`")  # noqa: E501

        self._currency_code_to = currency_code_to

    @property
    def _date(self):
        """Gets the _date of this FxRate.  # noqa: E501

        date  # noqa: E501

        :return: The _date of this FxRate.  # noqa: E501
        :rtype: datetime
        """
        return self.__date

    @_date.setter
    def _date(self, _date):
        """Sets the _date of this FxRate.

        date  # noqa: E501

        :param _date: The _date of this FxRate.  # noqa: E501
        :type: datetime
        """
        if self._configuration.client_side_validation and _date is None:
            raise ValueError("Invalid value for `_date`, must not be `None`")  # noqa: E501

        self.__date = _date

    @property
    def exchange_rate(self):
        """Gets the exchange_rate of this FxRate.  # noqa: E501

        exchangeRate  # noqa: E501

        :return: The exchange_rate of this FxRate.  # noqa: E501
        :rtype: float
        """
        return self._exchange_rate

    @exchange_rate.setter
    def exchange_rate(self, exchange_rate):
        """Sets the exchange_rate of this FxRate.

        exchangeRate  # noqa: E501

        :param exchange_rate: The exchange_rate of this FxRate.  # noqa: E501
        :type: float
        """
        if self._configuration.client_side_validation and exchange_rate is None:
            raise ValueError("Invalid value for `exchange_rate`, must not be `None`")  # noqa: E501

        self._exchange_rate = exchange_rate

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
        if issubclass(FxRate, dict):
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
        if not isinstance(other, FxRate):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, FxRate):
            return True

        return self.to_dict() != other.to_dict()
