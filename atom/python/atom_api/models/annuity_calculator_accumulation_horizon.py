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


class AnnuityCalculatorAccumulationHorizon(object):
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
        'portfolio_return': 'float',
        'initial_balance': 'float',
        'decumulation_horizon': 'int',
        'annuity_amount': 'float',
        'annuity_frequency_interval': 'str',
        'inflation_rate': 'float',
        'tax_rate': 'float',
        'deposit_schedule': 'object'
    }

    attribute_map = {
        'portfolio_return': 'portfolio_return',
        'initial_balance': 'initial_balance',
        'decumulation_horizon': 'decumulation_horizon',
        'annuity_amount': 'annuity_amount',
        'annuity_frequency_interval': 'annuity_frequency_interval',
        'inflation_rate': 'inflation_rate',
        'tax_rate': 'tax_rate',
        'deposit_schedule': 'deposit_schedule'
    }

    def __init__(self, portfolio_return=None, initial_balance=None, decumulation_horizon=None, annuity_amount=None, annuity_frequency_interval='year', inflation_rate=None, tax_rate=None, deposit_schedule=None):  # noqa: E501
        """AnnuityCalculatorAccumulationHorizon - a model defined in Swagger"""  # noqa: E501

        self._portfolio_return = None
        self._initial_balance = None
        self._decumulation_horizon = None
        self._annuity_amount = None
        self._annuity_frequency_interval = None
        self._inflation_rate = None
        self._tax_rate = None
        self._deposit_schedule = None
        self.discriminator = None

        self.portfolio_return = portfolio_return
        self.initial_balance = initial_balance
        self.decumulation_horizon = decumulation_horizon
        self.annuity_amount = annuity_amount
        if annuity_frequency_interval is not None:
            self.annuity_frequency_interval = annuity_frequency_interval
        if inflation_rate is not None:
            self.inflation_rate = inflation_rate
        if tax_rate is not None:
            self.tax_rate = tax_rate
        if deposit_schedule is not None:
            self.deposit_schedule = deposit_schedule

    @property
    def portfolio_return(self):
        """Gets the portfolio_return of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501

        The annualized portfolio return  # noqa: E501

        :return: The portfolio_return of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501
        :rtype: float
        """
        return self._portfolio_return

    @portfolio_return.setter
    def portfolio_return(self, portfolio_return):
        """Sets the portfolio_return of this AnnuityCalculatorAccumulationHorizon.

        The annualized portfolio return  # noqa: E501

        :param portfolio_return: The portfolio_return of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501
        :type: float
        """
        if portfolio_return is None:
            raise ValueError("Invalid value for `portfolio_return`, must not be `None`")  # noqa: E501
        if portfolio_return is not None and portfolio_return < -1:  # noqa: E501
            raise ValueError("Invalid value for `portfolio_return`, must be a value greater than or equal to `-1`")  # noqa: E501

        self._portfolio_return = portfolio_return

    @property
    def initial_balance(self):
        """Gets the initial_balance of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501

        The initial balance of the account  # noqa: E501

        :return: The initial_balance of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501
        :rtype: float
        """
        return self._initial_balance

    @initial_balance.setter
    def initial_balance(self, initial_balance):
        """Sets the initial_balance of this AnnuityCalculatorAccumulationHorizon.

        The initial balance of the account  # noqa: E501

        :param initial_balance: The initial_balance of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501
        :type: float
        """
        if initial_balance is None:
            raise ValueError("Invalid value for `initial_balance`, must not be `None`")  # noqa: E501
        if initial_balance is not None and initial_balance < 0:  # noqa: E501
            raise ValueError("Invalid value for `initial_balance`, must be a value greater than or equal to `0`")  # noqa: E501

        self._initial_balance = initial_balance

    @property
    def decumulation_horizon(self):
        """Gets the decumulation_horizon of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501

        The number of years in the accumulation period  # noqa: E501

        :return: The decumulation_horizon of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501
        :rtype: int
        """
        return self._decumulation_horizon

    @decumulation_horizon.setter
    def decumulation_horizon(self, decumulation_horizon):
        """Sets the decumulation_horizon of this AnnuityCalculatorAccumulationHorizon.

        The number of years in the accumulation period  # noqa: E501

        :param decumulation_horizon: The decumulation_horizon of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501
        :type: int
        """
        if decumulation_horizon is None:
            raise ValueError("Invalid value for `decumulation_horizon`, must not be `None`")  # noqa: E501
        if decumulation_horizon is not None and decumulation_horizon < 0:  # noqa: E501
            raise ValueError("Invalid value for `decumulation_horizon`, must be a value greater than or equal to `0`")  # noqa: E501

        self._decumulation_horizon = decumulation_horizon

    @property
    def annuity_amount(self):
        """Gets the annuity_amount of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501

        The amount of the annuity payments  # noqa: E501

        :return: The annuity_amount of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501
        :rtype: float
        """
        return self._annuity_amount

    @annuity_amount.setter
    def annuity_amount(self, annuity_amount):
        """Sets the annuity_amount of this AnnuityCalculatorAccumulationHorizon.

        The amount of the annuity payments  # noqa: E501

        :param annuity_amount: The annuity_amount of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501
        :type: float
        """
        if annuity_amount is None:
            raise ValueError("Invalid value for `annuity_amount`, must not be `None`")  # noqa: E501
        if annuity_amount is not None and annuity_amount <= 0:  # noqa: E501
            raise ValueError("Invalid value for `annuity_amount`, must be a value greater than `0`")  # noqa: E501

        self._annuity_amount = annuity_amount

    @property
    def annuity_frequency_interval(self):
        """Gets the annuity_frequency_interval of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501

        The frequency interval of the annuity  # noqa: E501

        :return: The annuity_frequency_interval of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501
        :rtype: str
        """
        return self._annuity_frequency_interval

    @annuity_frequency_interval.setter
    def annuity_frequency_interval(self, annuity_frequency_interval):
        """Sets the annuity_frequency_interval of this AnnuityCalculatorAccumulationHorizon.

        The frequency interval of the annuity  # noqa: E501

        :param annuity_frequency_interval: The annuity_frequency_interval of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501
        :type: str
        """
        allowed_values = ["year", "quarter", "month", "week"]  # noqa: E501
        if annuity_frequency_interval not in allowed_values:
            raise ValueError(
                "Invalid value for `annuity_frequency_interval` ({0}), must be one of {1}"  # noqa: E501
                .format(annuity_frequency_interval, allowed_values)
            )

        self._annuity_frequency_interval = annuity_frequency_interval

    @property
    def inflation_rate(self):
        """Gets the inflation_rate of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501

        The annualized inflation rate  # noqa: E501

        :return: The inflation_rate of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501
        :rtype: float
        """
        return self._inflation_rate

    @inflation_rate.setter
    def inflation_rate(self, inflation_rate):
        """Sets the inflation_rate of this AnnuityCalculatorAccumulationHorizon.

        The annualized inflation rate  # noqa: E501

        :param inflation_rate: The inflation_rate of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501
        :type: float
        """
        if inflation_rate is not None and inflation_rate >= 20:  # noqa: E501
            raise ValueError("Invalid value for `inflation_rate`, must be a value less than `20`")  # noqa: E501
        if inflation_rate is not None and inflation_rate <= -1:  # noqa: E501
            raise ValueError("Invalid value for `inflation_rate`, must be a value greater than `-1`")  # noqa: E501

        self._inflation_rate = inflation_rate

    @property
    def tax_rate(self):
        """Gets the tax_rate of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501

        The tax rate on withdrawals  # noqa: E501

        :return: The tax_rate of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501
        :rtype: float
        """
        return self._tax_rate

    @tax_rate.setter
    def tax_rate(self, tax_rate):
        """Sets the tax_rate of this AnnuityCalculatorAccumulationHorizon.

        The tax rate on withdrawals  # noqa: E501

        :param tax_rate: The tax_rate of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501
        :type: float
        """
        if tax_rate is not None and tax_rate >= 1:  # noqa: E501
            raise ValueError("Invalid value for `tax_rate`, must be a value less than `1`")  # noqa: E501
        if tax_rate is not None and tax_rate < 0:  # noqa: E501
            raise ValueError("Invalid value for `tax_rate`, must be a value greater than or equal to `0`")  # noqa: E501

        self._tax_rate = tax_rate

    @property
    def deposit_schedule(self):
        """Gets the deposit_schedule of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501


        :return: The deposit_schedule of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501
        :rtype: object
        """
        return self._deposit_schedule

    @deposit_schedule.setter
    def deposit_schedule(self, deposit_schedule):
        """Sets the deposit_schedule of this AnnuityCalculatorAccumulationHorizon.


        :param deposit_schedule: The deposit_schedule of this AnnuityCalculatorAccumulationHorizon.  # noqa: E501
        :type: object
        """

        self._deposit_schedule = deposit_schedule

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
        if issubclass(AnnuityCalculatorAccumulationHorizon, dict):
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
        if not isinstance(other, AnnuityCalculatorAccumulationHorizon):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
