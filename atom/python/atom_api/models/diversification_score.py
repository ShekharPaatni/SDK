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


class DiversificationScore(object):
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
        'portfolio_tickers': 'list[str]',
        'portfolio_weights': 'list[float]',
        'start_date': 'datetime',
        'end_date': 'datetime'
    }

    attribute_map = {
        'portfolio_tickers': 'portfolio_tickers',
        'portfolio_weights': 'portfolio_weights',
        'start_date': 'start_date',
        'end_date': 'end_date'
    }

    def __init__(self, portfolio_tickers=None, portfolio_weights=None, start_date=None, end_date=None):  # noqa: E501
        """DiversificationScore - a model defined in Swagger"""  # noqa: E501

        self._portfolio_tickers = None
        self._portfolio_weights = None
        self._start_date = None
        self._end_date = None
        self.discriminator = None

        self.portfolio_tickers = portfolio_tickers
        self.portfolio_weights = portfolio_weights
        if start_date is not None:
            self.start_date = start_date
        if end_date is not None:
            self.end_date = end_date

    @property
    def portfolio_tickers(self):
        """Gets the portfolio_tickers of this DiversificationScore.  # noqa: E501

        List of portfolio tickers  # noqa: E501

        :return: The portfolio_tickers of this DiversificationScore.  # noqa: E501
        :rtype: list[str]
        """
        return self._portfolio_tickers

    @portfolio_tickers.setter
    def portfolio_tickers(self, portfolio_tickers):
        """Sets the portfolio_tickers of this DiversificationScore.

        List of portfolio tickers  # noqa: E501

        :param portfolio_tickers: The portfolio_tickers of this DiversificationScore.  # noqa: E501
        :type: list[str]
        """
        if portfolio_tickers is None:
            raise ValueError("Invalid value for `portfolio_tickers`, must not be `None`")  # noqa: E501

        self._portfolio_tickers = portfolio_tickers

    @property
    def portfolio_weights(self):
        """Gets the portfolio_weights of this DiversificationScore.  # noqa: E501

        List of portfolio weights  # noqa: E501

        :return: The portfolio_weights of this DiversificationScore.  # noqa: E501
        :rtype: list[float]
        """
        return self._portfolio_weights

    @portfolio_weights.setter
    def portfolio_weights(self, portfolio_weights):
        """Sets the portfolio_weights of this DiversificationScore.

        List of portfolio weights  # noqa: E501

        :param portfolio_weights: The portfolio_weights of this DiversificationScore.  # noqa: E501
        :type: list[float]
        """
        if portfolio_weights is None:
            raise ValueError("Invalid value for `portfolio_weights`, must not be `None`")  # noqa: E501

        self._portfolio_weights = portfolio_weights

    @property
    def start_date(self):
        """Gets the start_date of this DiversificationScore.  # noqa: E501


        :return: The start_date of this DiversificationScore.  # noqa: E501
        :rtype: datetime
        """
        return self._start_date

    @start_date.setter
    def start_date(self, start_date):
        """Sets the start_date of this DiversificationScore.


        :param start_date: The start_date of this DiversificationScore.  # noqa: E501
        :type: datetime
        """

        self._start_date = start_date

    @property
    def end_date(self):
        """Gets the end_date of this DiversificationScore.  # noqa: E501


        :return: The end_date of this DiversificationScore.  # noqa: E501
        :rtype: datetime
        """
        return self._end_date

    @end_date.setter
    def end_date(self, end_date):
        """Sets the end_date of this DiversificationScore.


        :param end_date: The end_date of this DiversificationScore.  # noqa: E501
        :type: datetime
        """

        self._end_date = end_date

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
        if issubclass(DiversificationScore, dict):
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
        if not isinstance(other, DiversificationScore):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
