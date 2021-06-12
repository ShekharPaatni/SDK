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


class OverflowVO(object):
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
        'funding_start_date': 'date',
        'overflow_setting_id': 'str',
        'update_balances': 'bool'
    }

    attribute_map = {
        'funding_start_date': 'funding_start_date',
        'overflow_setting_id': 'overflow_setting_id',
        'update_balances': 'update_balances'
    }

    def __init__(self, funding_start_date=None, overflow_setting_id=None, update_balances=None, _configuration=None):  # noqa: E501
        """OverflowVO - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._funding_start_date = None
        self._overflow_setting_id = None
        self._update_balances = None
        self.discriminator = None

        if funding_start_date is not None:
            self.funding_start_date = funding_start_date
        if overflow_setting_id is not None:
            self.overflow_setting_id = overflow_setting_id
        if update_balances is not None:
            self.update_balances = update_balances

    @property
    def funding_start_date(self):
        """Gets the funding_start_date of this OverflowVO.  # noqa: E501

        fundingStartDate  # noqa: E501

        :return: The funding_start_date of this OverflowVO.  # noqa: E501
        :rtype: date
        """
        return self._funding_start_date

    @funding_start_date.setter
    def funding_start_date(self, funding_start_date):
        """Sets the funding_start_date of this OverflowVO.

        fundingStartDate  # noqa: E501

        :param funding_start_date: The funding_start_date of this OverflowVO.  # noqa: E501
        :type: date
        """

        self._funding_start_date = funding_start_date

    @property
    def overflow_setting_id(self):
        """Gets the overflow_setting_id of this OverflowVO.  # noqa: E501

        overflowSettingId  # noqa: E501

        :return: The overflow_setting_id of this OverflowVO.  # noqa: E501
        :rtype: str
        """
        return self._overflow_setting_id

    @overflow_setting_id.setter
    def overflow_setting_id(self, overflow_setting_id):
        """Sets the overflow_setting_id of this OverflowVO.

        overflowSettingId  # noqa: E501

        :param overflow_setting_id: The overflow_setting_id of this OverflowVO.  # noqa: E501
        :type: str
        """

        self._overflow_setting_id = overflow_setting_id

    @property
    def update_balances(self):
        """Gets the update_balances of this OverflowVO.  # noqa: E501

        updateBalances  # noqa: E501

        :return: The update_balances of this OverflowVO.  # noqa: E501
        :rtype: bool
        """
        return self._update_balances

    @update_balances.setter
    def update_balances(self, update_balances):
        """Sets the update_balances of this OverflowVO.

        updateBalances  # noqa: E501

        :param update_balances: The update_balances of this OverflowVO.  # noqa: E501
        :type: bool
        """

        self._update_balances = update_balances

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
        if issubclass(OverflowVO, dict):
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
        if not isinstance(other, OverflowVO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, OverflowVO):
            return True

        return self.to_dict() != other.to_dict()
