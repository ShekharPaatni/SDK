# coding: utf-8

"""
    Hydrogen Atom API

    The Hydrogen Atom API  # noqa: E501

    OpenAPI spec version: 1.0.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from atom_api.models.mortgage_schedule_period import MortgageSchedulePeriod  # noqa: F401,E501


class MortgageCalculatorHomepriceResponse(object):
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
        'home_price': 'float',
        'schedule': 'dict(str, MortgageSchedulePeriod)'
    }

    attribute_map = {
        'home_price': 'home_price',
        'schedule': 'schedule'
    }

    def __init__(self, home_price=None, schedule=None):  # noqa: E501
        """MortgageCalculatorHomepriceResponse - a model defined in Swagger"""  # noqa: E501

        self._home_price = None
        self._schedule = None
        self.discriminator = None

        self.home_price = home_price
        self.schedule = schedule

    @property
    def home_price(self):
        """Gets the home_price of this MortgageCalculatorHomepriceResponse.  # noqa: E501

        The total cost of the home that can be afforded, given the other inputs provided by the user.  # noqa: E501

        :return: The home_price of this MortgageCalculatorHomepriceResponse.  # noqa: E501
        :rtype: float
        """
        return self._home_price

    @home_price.setter
    def home_price(self, home_price):
        """Sets the home_price of this MortgageCalculatorHomepriceResponse.

        The total cost of the home that can be afforded, given the other inputs provided by the user.  # noqa: E501

        :param home_price: The home_price of this MortgageCalculatorHomepriceResponse.  # noqa: E501
        :type: float
        """
        if home_price is None:
            raise ValueError("Invalid value for `home_price`, must not be `None`")  # noqa: E501
        if home_price is not None and home_price < 0:  # noqa: E501
            raise ValueError("Invalid value for `home_price`, must be a value greater than or equal to `0`")  # noqa: E501

        self._home_price = home_price

    @property
    def schedule(self):
        """Gets the schedule of this MortgageCalculatorHomepriceResponse.  # noqa: E501


        :return: The schedule of this MortgageCalculatorHomepriceResponse.  # noqa: E501
        :rtype: dict(str, MortgageSchedulePeriod)
        """
        return self._schedule

    @schedule.setter
    def schedule(self, schedule):
        """Sets the schedule of this MortgageCalculatorHomepriceResponse.


        :param schedule: The schedule of this MortgageCalculatorHomepriceResponse.  # noqa: E501
        :type: dict(str, MortgageSchedulePeriod)
        """
        if schedule is None:
            raise ValueError("Invalid value for `schedule`, must not be `None`")  # noqa: E501

        self._schedule = schedule

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
        if issubclass(MortgageCalculatorHomepriceResponse, dict):
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
        if not isinstance(other, MortgageCalculatorHomepriceResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
