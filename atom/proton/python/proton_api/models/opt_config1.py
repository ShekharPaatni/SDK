# coding: utf-8

"""
    Hydrogen Proton API

    Financial engineering module of Hydrogen Atom  # noqa: E501

    OpenAPI spec version: 1.9.1
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from proton_api.configuration import Configuration


class OptConfig1(object):
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
        'tickers': 'list[str]',
        'w_config': 'WConfig1',
        'min_assets': 'int',
        'w_asset_config': 'object',
        'sec_types': 'list[str]'
    }

    attribute_map = {
        'tickers': 'tickers',
        'w_config': 'w_config',
        'min_assets': 'min_assets',
        'w_asset_config': 'w_asset_config',
        'sec_types': 'sec_types'
    }

    def __init__(self, tickers=None, w_config=None, min_assets=1, w_asset_config=None, sec_types=None, _configuration=None):  # noqa: E501
        """OptConfig1 - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._tickers = None
        self._w_config = None
        self._min_assets = None
        self._w_asset_config = None
        self._sec_types = None
        self.discriminator = None

        if tickers is not None:
            self.tickers = tickers
        if w_config is not None:
            self.w_config = w_config
        if min_assets is not None:
            self.min_assets = min_assets
        if w_asset_config is not None:
            self.w_asset_config = w_asset_config
        if sec_types is not None:
            self.sec_types = sec_types

    @property
    def tickers(self):
        """Gets the tickers of this OptConfig1.  # noqa: E501


        :return: The tickers of this OptConfig1.  # noqa: E501
        :rtype: list[str]
        """
        return self._tickers

    @tickers.setter
    def tickers(self, tickers):
        """Sets the tickers of this OptConfig1.


        :param tickers: The tickers of this OptConfig1.  # noqa: E501
        :type: list[str]
        """

        self._tickers = tickers

    @property
    def w_config(self):
        """Gets the w_config of this OptConfig1.  # noqa: E501


        :return: The w_config of this OptConfig1.  # noqa: E501
        :rtype: WConfig1
        """
        return self._w_config

    @w_config.setter
    def w_config(self, w_config):
        """Sets the w_config of this OptConfig1.


        :param w_config: The w_config of this OptConfig1.  # noqa: E501
        :type: WConfig1
        """

        self._w_config = w_config

    @property
    def min_assets(self):
        """Gets the min_assets of this OptConfig1.  # noqa: E501


        :return: The min_assets of this OptConfig1.  # noqa: E501
        :rtype: int
        """
        return self._min_assets

    @min_assets.setter
    def min_assets(self, min_assets):
        """Sets the min_assets of this OptConfig1.


        :param min_assets: The min_assets of this OptConfig1.  # noqa: E501
        :type: int
        """
        if (self._configuration.client_side_validation and
                min_assets is not None and min_assets < 1):  # noqa: E501
            raise ValueError("Invalid value for `min_assets`, must be a value greater than or equal to `1`")  # noqa: E501

        self._min_assets = min_assets

    @property
    def w_asset_config(self):
        """Gets the w_asset_config of this OptConfig1.  # noqa: E501


        :return: The w_asset_config of this OptConfig1.  # noqa: E501
        :rtype: object
        """
        return self._w_asset_config

    @w_asset_config.setter
    def w_asset_config(self, w_asset_config):
        """Sets the w_asset_config of this OptConfig1.


        :param w_asset_config: The w_asset_config of this OptConfig1.  # noqa: E501
        :type: object
        """

        self._w_asset_config = w_asset_config

    @property
    def sec_types(self):
        """Gets the sec_types of this OptConfig1.  # noqa: E501


        :return: The sec_types of this OptConfig1.  # noqa: E501
        :rtype: list[str]
        """
        return self._sec_types

    @sec_types.setter
    def sec_types(self, sec_types):
        """Sets the sec_types of this OptConfig1.


        :param sec_types: The sec_types of this OptConfig1.  # noqa: E501
        :type: list[str]
        """
        allowed_values = ["major", "minor", "cash"]  # noqa: E501
        if (self._configuration.client_side_validation and
                not set(sec_types).issubset(set(allowed_values))):  # noqa: E501
            raise ValueError(
                "Invalid values for `sec_types` [{0}], must be a subset of [{1}]"  # noqa: E501
                .format(", ".join(map(str, set(sec_types) - set(allowed_values))),  # noqa: E501
                        ", ".join(map(str, allowed_values)))
            )

        self._sec_types = sec_types

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
        if issubclass(OptConfig1, dict):
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
        if not isinstance(other, OptConfig1):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, OptConfig1):
            return True

        return self.to_dict() != other.to_dict()
