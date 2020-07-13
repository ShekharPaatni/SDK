# coding: utf-8

"""
    Hydrogen Integration API

    The Hydrogen Integration API  # noqa: E501

    OpenAPI spec version: 1.2.1
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class MdQuoteRequestCO(object):
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
        'nucleus_security_id': 'list[str]',
        'product': 'str',
        'ticker': 'list[str]',
        'type': 'str'
    }

    attribute_map = {
        'nucleus_security_id': 'nucleus_security_id',
        'product': 'product',
        'ticker': 'ticker',
        'type': 'type'
    }

    def __init__(self, nucleus_security_id=None, product=None, ticker=None, type=None):  # noqa: E501
        """MdQuoteRequestCO - a model defined in Swagger"""  # noqa: E501

        self._nucleus_security_id = None
        self._product = None
        self._ticker = None
        self._type = None
        self.discriminator = None

        if nucleus_security_id is not None:
            self.nucleus_security_id = nucleus_security_id
        if product is not None:
            self.product = product
        if ticker is not None:
            self.ticker = ticker
        if type is not None:
            self.type = type

    @property
    def nucleus_security_id(self):
        """Gets the nucleus_security_id of this MdQuoteRequestCO.  # noqa: E501


        :return: The nucleus_security_id of this MdQuoteRequestCO.  # noqa: E501
        :rtype: list[str]
        """
        return self._nucleus_security_id

    @nucleus_security_id.setter
    def nucleus_security_id(self, nucleus_security_id):
        """Sets the nucleus_security_id of this MdQuoteRequestCO.


        :param nucleus_security_id: The nucleus_security_id of this MdQuoteRequestCO.  # noqa: E501
        :type: list[str]
        """

        self._nucleus_security_id = nucleus_security_id

    @property
    def product(self):
        """Gets the product of this MdQuoteRequestCO.  # noqa: E501


        :return: The product of this MdQuoteRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._product

    @product.setter
    def product(self, product):
        """Sets the product of this MdQuoteRequestCO.


        :param product: The product of this MdQuoteRequestCO.  # noqa: E501
        :type: str
        """

        self._product = product

    @property
    def ticker(self):
        """Gets the ticker of this MdQuoteRequestCO.  # noqa: E501


        :return: The ticker of this MdQuoteRequestCO.  # noqa: E501
        :rtype: list[str]
        """
        return self._ticker

    @ticker.setter
    def ticker(self, ticker):
        """Sets the ticker of this MdQuoteRequestCO.


        :param ticker: The ticker of this MdQuoteRequestCO.  # noqa: E501
        :type: list[str]
        """

        self._ticker = ticker

    @property
    def type(self):
        """Gets the type of this MdQuoteRequestCO.  # noqa: E501


        :return: The type of this MdQuoteRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this MdQuoteRequestCO.


        :param type: The type of this MdQuoteRequestCO.  # noqa: E501
        :type: str
        """
        allowed_values = ["delayed", "realtime"]  # noqa: E501
        if type is not None and type.lower() not in allowed_values:
            raise ValueError(
                "Invalid value for `type` ({0}), must be one of {1}"  # noqa: E501
                .format(type, allowed_values)
            )

        self._type = type

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
        if issubclass(MdQuoteRequestCO, dict):
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
        if not isinstance(other, MdQuoteRequestCO):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
