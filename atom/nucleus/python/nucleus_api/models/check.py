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


class Check(object):
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
        'check_amount': 'float',
        'check_images': 'list[CheckImages]',
        'check_number': 'str'
    }

    attribute_map = {
        'check_amount': 'check_amount',
        'check_images': 'check_images',
        'check_number': 'check_number'
    }

    def __init__(self, check_amount=None, check_images=None, check_number=None, _configuration=None):  # noqa: E501
        """Check - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._check_amount = None
        self._check_images = None
        self._check_number = None
        self.discriminator = None

        if check_amount is not None:
            self.check_amount = check_amount
        if check_images is not None:
            self.check_images = check_images
        self.check_number = check_number

    @property
    def check_amount(self):
        """Gets the check_amount of this Check.  # noqa: E501

        checkAmount  # noqa: E501

        :return: The check_amount of this Check.  # noqa: E501
        :rtype: float
        """
        return self._check_amount

    @check_amount.setter
    def check_amount(self, check_amount):
        """Sets the check_amount of this Check.

        checkAmount  # noqa: E501

        :param check_amount: The check_amount of this Check.  # noqa: E501
        :type: float
        """

        self._check_amount = check_amount

    @property
    def check_images(self):
        """Gets the check_images of this Check.  # noqa: E501

        checkImages  # noqa: E501

        :return: The check_images of this Check.  # noqa: E501
        :rtype: list[CheckImages]
        """
        return self._check_images

    @check_images.setter
    def check_images(self, check_images):
        """Sets the check_images of this Check.

        checkImages  # noqa: E501

        :param check_images: The check_images of this Check.  # noqa: E501
        :type: list[CheckImages]
        """

        self._check_images = check_images

    @property
    def check_number(self):
        """Gets the check_number of this Check.  # noqa: E501

        checkNumber  # noqa: E501

        :return: The check_number of this Check.  # noqa: E501
        :rtype: str
        """
        return self._check_number

    @check_number.setter
    def check_number(self, check_number):
        """Sets the check_number of this Check.

        checkNumber  # noqa: E501

        :param check_number: The check_number of this Check.  # noqa: E501
        :type: str
        """
        self._check_number = check_number

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
        if issubclass(Check, dict):
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
        if not isinstance(other, Check):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Check):
            return True

        return self.to_dict() != other.to_dict()
