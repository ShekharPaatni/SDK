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

from atom_api.models.holdings_detail import HoldingsDetail  # noqa: F401,E501
from atom_api.models.rebalance_signal import RebalanceSignal  # noqa: F401,E501
from atom_api.models.stats_detail import StatsDetail  # noqa: F401,E501


class BacktestResponse(object):
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
        'asset_sizes': 'dict(str, float)',
        'trades': 'list[RebalanceSignal]',
        'holdings': 'list[HoldingsDetail]',
        'stats': 'StatsDetail'
    }

    attribute_map = {
        'asset_sizes': 'asset_sizes',
        'trades': 'trades',
        'holdings': 'holdings',
        'stats': 'stats'
    }

    def __init__(self, asset_sizes=None, trades=None, holdings=None, stats=None):  # noqa: E501
        """BacktestResponse - a model defined in Swagger"""  # noqa: E501

        self._asset_sizes = None
        self._trades = None
        self._holdings = None
        self._stats = None
        self.discriminator = None

        self.asset_sizes = asset_sizes
        self.trades = trades
        self.holdings = holdings
        self.stats = stats

    @property
    def asset_sizes(self):
        """Gets the asset_sizes of this BacktestResponse.  # noqa: E501


        :return: The asset_sizes of this BacktestResponse.  # noqa: E501
        :rtype: dict(str, float)
        """
        return self._asset_sizes

    @asset_sizes.setter
    def asset_sizes(self, asset_sizes):
        """Sets the asset_sizes of this BacktestResponse.


        :param asset_sizes: The asset_sizes of this BacktestResponse.  # noqa: E501
        :type: dict(str, float)
        """
        if asset_sizes is None:
            raise ValueError("Invalid value for `asset_sizes`, must not be `None`")  # noqa: E501

        self._asset_sizes = asset_sizes

    @property
    def trades(self):
        """Gets the trades of this BacktestResponse.  # noqa: E501


        :return: The trades of this BacktestResponse.  # noqa: E501
        :rtype: list[RebalanceSignal]
        """
        return self._trades

    @trades.setter
    def trades(self, trades):
        """Sets the trades of this BacktestResponse.


        :param trades: The trades of this BacktestResponse.  # noqa: E501
        :type: list[RebalanceSignal]
        """
        if trades is None:
            raise ValueError("Invalid value for `trades`, must not be `None`")  # noqa: E501

        self._trades = trades

    @property
    def holdings(self):
        """Gets the holdings of this BacktestResponse.  # noqa: E501


        :return: The holdings of this BacktestResponse.  # noqa: E501
        :rtype: list[HoldingsDetail]
        """
        return self._holdings

    @holdings.setter
    def holdings(self, holdings):
        """Sets the holdings of this BacktestResponse.


        :param holdings: The holdings of this BacktestResponse.  # noqa: E501
        :type: list[HoldingsDetail]
        """
        if holdings is None:
            raise ValueError("Invalid value for `holdings`, must not be `None`")  # noqa: E501

        self._holdings = holdings

    @property
    def stats(self):
        """Gets the stats of this BacktestResponse.  # noqa: E501


        :return: The stats of this BacktestResponse.  # noqa: E501
        :rtype: StatsDetail
        """
        return self._stats

    @stats.setter
    def stats(self, stats):
        """Sets the stats of this BacktestResponse.


        :param stats: The stats of this BacktestResponse.  # noqa: E501
        :type: StatsDetail
        """
        if stats is None:
            raise ValueError("Invalid value for `stats`, must not be `None`")  # noqa: E501

        self._stats = stats

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
        if issubclass(BacktestResponse, dict):
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
        if not isinstance(other, BacktestResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
