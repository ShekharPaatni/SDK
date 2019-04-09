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

from atom_api.models.goal_deposit_config import GoalDepositConfig  # noqa: F401,E501
from atom_api.models.goal_withdrawal_config import GoalWithdrawalConfig  # noqa: F401,E501


class GoalDecumulationRecommendation(object):
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
        'p_ret': 'list[float]',
        'p_risk': 'list[float]',
        'curr_inv': 'float',
        'a_horizon': 'int',
        'd_horizon': 'int',
        'horizon_frequency': 'str',
        'withdrawal_config': 'list[GoalWithdrawalConfig]',
        'deposit_config': 'list[GoalDepositConfig]',
        'recommendation_config': 'object',
        'recommend_type': 'str',
        'conf_tgt': 'float',
        'n': 'int',
        'remove_outliers': 'bool',
        'thresh_type': 'str',
        'thresh': 'float',
        'withdrawal_tax': 'float',
        'trading_days_per_year': 'int',
        'adjust_for_compounding': 'bool',
        'compounding_rate': 'float'
    }

    attribute_map = {
        'p_ret': 'p_ret',
        'p_risk': 'p_risk',
        'curr_inv': 'curr_inv',
        'a_horizon': 'a_horizon',
        'd_horizon': 'd_horizon',
        'horizon_frequency': 'horizon_frequency',
        'withdrawal_config': 'withdrawal_config',
        'deposit_config': 'deposit_config',
        'recommendation_config': 'recommendation_config',
        'recommend_type': 'recommend_type',
        'conf_tgt': 'conf_tgt',
        'n': 'n',
        'remove_outliers': 'remove_outliers',
        'thresh_type': 'thresh_type',
        'thresh': 'thresh',
        'withdrawal_tax': 'withdrawal_tax',
        'trading_days_per_year': 'trading_days_per_year',
        'adjust_for_compounding': 'adjust_for_compounding',
        'compounding_rate': 'compounding_rate'
    }

    def __init__(self, p_ret=None, p_risk=None, curr_inv=None, a_horizon=None, d_horizon=None, horizon_frequency=None, withdrawal_config=None, deposit_config=None, recommendation_config=None, recommend_type='horizon', conf_tgt=None, n=None, remove_outliers=True, thresh_type='perc', thresh=None, withdrawal_tax=None, trading_days_per_year=None, adjust_for_compounding=False, compounding_rate=None):  # noqa: E501
        """GoalDecumulationRecommendation - a model defined in Swagger"""  # noqa: E501

        self._p_ret = None
        self._p_risk = None
        self._curr_inv = None
        self._a_horizon = None
        self._d_horizon = None
        self._horizon_frequency = None
        self._withdrawal_config = None
        self._deposit_config = None
        self._recommendation_config = None
        self._recommend_type = None
        self._conf_tgt = None
        self._n = None
        self._remove_outliers = None
        self._thresh_type = None
        self._thresh = None
        self._withdrawal_tax = None
        self._trading_days_per_year = None
        self._adjust_for_compounding = None
        self._compounding_rate = None
        self.discriminator = None

        self.p_ret = p_ret
        self.p_risk = p_risk
        self.curr_inv = curr_inv
        self.a_horizon = a_horizon
        self.d_horizon = d_horizon
        self.horizon_frequency = horizon_frequency
        self.withdrawal_config = withdrawal_config
        if deposit_config is not None:
            self.deposit_config = deposit_config
        if recommendation_config is not None:
            self.recommendation_config = recommendation_config
        if recommend_type is not None:
            self.recommend_type = recommend_type
        if conf_tgt is not None:
            self.conf_tgt = conf_tgt
        if n is not None:
            self.n = n
        if remove_outliers is not None:
            self.remove_outliers = remove_outliers
        if thresh_type is not None:
            self.thresh_type = thresh_type
        if thresh is not None:
            self.thresh = thresh
        if withdrawal_tax is not None:
            self.withdrawal_tax = withdrawal_tax
        if trading_days_per_year is not None:
            self.trading_days_per_year = trading_days_per_year
        if adjust_for_compounding is not None:
            self.adjust_for_compounding = adjust_for_compounding
        if compounding_rate is not None:
            self.compounding_rate = compounding_rate

    @property
    def p_ret(self):
        """Gets the p_ret of this GoalDecumulationRecommendation.  # noqa: E501

        The annualized portfolio return  # noqa: E501

        :return: The p_ret of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: list[float]
        """
        return self._p_ret

    @p_ret.setter
    def p_ret(self, p_ret):
        """Sets the p_ret of this GoalDecumulationRecommendation.

        The annualized portfolio return  # noqa: E501

        :param p_ret: The p_ret of this GoalDecumulationRecommendation.  # noqa: E501
        :type: list[float]
        """
        if p_ret is None:
            raise ValueError("Invalid value for `p_ret`, must not be `None`")  # noqa: E501

        self._p_ret = p_ret

    @property
    def p_risk(self):
        """Gets the p_risk of this GoalDecumulationRecommendation.  # noqa: E501

        The annualized portfolio standard deviation  # noqa: E501

        :return: The p_risk of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: list[float]
        """
        return self._p_risk

    @p_risk.setter
    def p_risk(self, p_risk):
        """Sets the p_risk of this GoalDecumulationRecommendation.

        The annualized portfolio standard deviation  # noqa: E501

        :param p_risk: The p_risk of this GoalDecumulationRecommendation.  # noqa: E501
        :type: list[float]
        """
        if p_risk is None:
            raise ValueError("Invalid value for `p_risk`, must not be `None`")  # noqa: E501

        self._p_risk = p_risk

    @property
    def curr_inv(self):
        """Gets the curr_inv of this GoalDecumulationRecommendation.  # noqa: E501

        The current amount invested  # noqa: E501

        :return: The curr_inv of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: float
        """
        return self._curr_inv

    @curr_inv.setter
    def curr_inv(self, curr_inv):
        """Sets the curr_inv of this GoalDecumulationRecommendation.

        The current amount invested  # noqa: E501

        :param curr_inv: The curr_inv of this GoalDecumulationRecommendation.  # noqa: E501
        :type: float
        """
        if curr_inv is None:
            raise ValueError("Invalid value for `curr_inv`, must not be `None`")  # noqa: E501
        if curr_inv is not None and curr_inv < 0:  # noqa: E501
            raise ValueError("Invalid value for `curr_inv`, must be a value greater than or equal to `0`")  # noqa: E501

        self._curr_inv = curr_inv

    @property
    def a_horizon(self):
        """Gets the a_horizon of this GoalDecumulationRecommendation.  # noqa: E501

        The accumulation goal horizon  # noqa: E501

        :return: The a_horizon of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: int
        """
        return self._a_horizon

    @a_horizon.setter
    def a_horizon(self, a_horizon):
        """Sets the a_horizon of this GoalDecumulationRecommendation.

        The accumulation goal horizon  # noqa: E501

        :param a_horizon: The a_horizon of this GoalDecumulationRecommendation.  # noqa: E501
        :type: int
        """
        if a_horizon is None:
            raise ValueError("Invalid value for `a_horizon`, must not be `None`")  # noqa: E501
        if a_horizon is not None and a_horizon >= 350:  # noqa: E501
            raise ValueError("Invalid value for `a_horizon`, must be a value less than `350`")  # noqa: E501
        if a_horizon is not None and a_horizon < 0:  # noqa: E501
            raise ValueError("Invalid value for `a_horizon`, must be a value greater than or equal to `0`")  # noqa: E501

        self._a_horizon = a_horizon

    @property
    def d_horizon(self):
        """Gets the d_horizon of this GoalDecumulationRecommendation.  # noqa: E501

        The decumulation goal horizon  # noqa: E501

        :return: The d_horizon of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: int
        """
        return self._d_horizon

    @d_horizon.setter
    def d_horizon(self, d_horizon):
        """Sets the d_horizon of this GoalDecumulationRecommendation.

        The decumulation goal horizon  # noqa: E501

        :param d_horizon: The d_horizon of this GoalDecumulationRecommendation.  # noqa: E501
        :type: int
        """
        if d_horizon is None:
            raise ValueError("Invalid value for `d_horizon`, must not be `None`")  # noqa: E501
        if d_horizon is not None and d_horizon >= 350:  # noqa: E501
            raise ValueError("Invalid value for `d_horizon`, must be a value less than `350`")  # noqa: E501
        if d_horizon is not None and d_horizon < 0:  # noqa: E501
            raise ValueError("Invalid value for `d_horizon`, must be a value greater than or equal to `0`")  # noqa: E501

        self._d_horizon = d_horizon

    @property
    def horizon_frequency(self):
        """Gets the horizon_frequency of this GoalDecumulationRecommendation.  # noqa: E501

        Frequency in relation to the horizon  # noqa: E501

        :return: The horizon_frequency of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: str
        """
        return self._horizon_frequency

    @horizon_frequency.setter
    def horizon_frequency(self, horizon_frequency):
        """Sets the horizon_frequency of this GoalDecumulationRecommendation.

        Frequency in relation to the horizon  # noqa: E501

        :param horizon_frequency: The horizon_frequency of this GoalDecumulationRecommendation.  # noqa: E501
        :type: str
        """
        if horizon_frequency is None:
            raise ValueError("Invalid value for `horizon_frequency`, must not be `None`")  # noqa: E501
        allowed_values = ["year", "six_months", "quarter", "month", "two_weeks", "week", "day"]  # noqa: E501
        if horizon_frequency not in allowed_values:
            raise ValueError(
                "Invalid value for `horizon_frequency` ({0}), must be one of {1}"  # noqa: E501
                .format(horizon_frequency, allowed_values)
            )

        self._horizon_frequency = horizon_frequency

    @property
    def withdrawal_config(self):
        """Gets the withdrawal_config of this GoalDecumulationRecommendation.  # noqa: E501

        The withdrawal attributes  # noqa: E501

        :return: The withdrawal_config of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: list[GoalWithdrawalConfig]
        """
        return self._withdrawal_config

    @withdrawal_config.setter
    def withdrawal_config(self, withdrawal_config):
        """Sets the withdrawal_config of this GoalDecumulationRecommendation.

        The withdrawal attributes  # noqa: E501

        :param withdrawal_config: The withdrawal_config of this GoalDecumulationRecommendation.  # noqa: E501
        :type: list[GoalWithdrawalConfig]
        """
        if withdrawal_config is None:
            raise ValueError("Invalid value for `withdrawal_config`, must not be `None`")  # noqa: E501

        self._withdrawal_config = withdrawal_config

    @property
    def deposit_config(self):
        """Gets the deposit_config of this GoalDecumulationRecommendation.  # noqa: E501

        The deposit attributes  # noqa: E501

        :return: The deposit_config of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: list[GoalDepositConfig]
        """
        return self._deposit_config

    @deposit_config.setter
    def deposit_config(self, deposit_config):
        """Sets the deposit_config of this GoalDecumulationRecommendation.

        The deposit attributes  # noqa: E501

        :param deposit_config: The deposit_config of this GoalDecumulationRecommendation.  # noqa: E501
        :type: list[GoalDepositConfig]
        """

        self._deposit_config = deposit_config

    @property
    def recommendation_config(self):
        """Gets the recommendation_config of this GoalDecumulationRecommendation.  # noqa: E501


        :return: The recommendation_config of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: object
        """
        return self._recommendation_config

    @recommendation_config.setter
    def recommendation_config(self, recommendation_config):
        """Sets the recommendation_config of this GoalDecumulationRecommendation.


        :param recommendation_config: The recommendation_config of this GoalDecumulationRecommendation.  # noqa: E501
        :type: object
        """

        self._recommendation_config = recommendation_config

    @property
    def recommend_type(self):
        """Gets the recommend_type of this GoalDecumulationRecommendation.  # noqa: E501

        The type of recommended action  # noqa: E501

        :return: The recommend_type of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: str
        """
        return self._recommend_type

    @recommend_type.setter
    def recommend_type(self, recommend_type):
        """Sets the recommend_type of this GoalDecumulationRecommendation.

        The type of recommended action  # noqa: E501

        :param recommend_type: The recommend_type of this GoalDecumulationRecommendation.  # noqa: E501
        :type: str
        """
        allowed_values = ["recurring", "one-time", "combo", "horizon"]  # noqa: E501
        if recommend_type not in allowed_values:
            raise ValueError(
                "Invalid value for `recommend_type` ({0}), must be one of {1}"  # noqa: E501
                .format(recommend_type, allowed_values)
            )

        self._recommend_type = recommend_type

    @property
    def conf_tgt(self):
        """Gets the conf_tgt of this GoalDecumulationRecommendation.  # noqa: E501

        The confidence target  # noqa: E501

        :return: The conf_tgt of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: float
        """
        return self._conf_tgt

    @conf_tgt.setter
    def conf_tgt(self, conf_tgt):
        """Sets the conf_tgt of this GoalDecumulationRecommendation.

        The confidence target  # noqa: E501

        :param conf_tgt: The conf_tgt of this GoalDecumulationRecommendation.  # noqa: E501
        :type: float
        """
        if conf_tgt is not None and conf_tgt > 1:  # noqa: E501
            raise ValueError("Invalid value for `conf_tgt`, must be a value less than or equal to `1`")  # noqa: E501
        if conf_tgt is not None and conf_tgt <= 0:  # noqa: E501
            raise ValueError("Invalid value for `conf_tgt`, must be a value greater than `0`")  # noqa: E501

        self._conf_tgt = conf_tgt

    @property
    def n(self):
        """Gets the n of this GoalDecumulationRecommendation.  # noqa: E501

        The number of Monte Carlo simulations to run  # noqa: E501

        :return: The n of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: int
        """
        return self._n

    @n.setter
    def n(self, n):
        """Sets the n of this GoalDecumulationRecommendation.

        The number of Monte Carlo simulations to run  # noqa: E501

        :param n: The n of this GoalDecumulationRecommendation.  # noqa: E501
        :type: int
        """
        if n is not None and n > 10000:  # noqa: E501
            raise ValueError("Invalid value for `n`, must be a value less than or equal to `10000`")  # noqa: E501
        if n is not None and n <= 0:  # noqa: E501
            raise ValueError("Invalid value for `n`, must be a value greater than `0`")  # noqa: E501

        self._n = n

    @property
    def remove_outliers(self):
        """Gets the remove_outliers of this GoalDecumulationRecommendation.  # noqa: E501

        If TRUE, remove outlying results  # noqa: E501

        :return: The remove_outliers of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: bool
        """
        return self._remove_outliers

    @remove_outliers.setter
    def remove_outliers(self, remove_outliers):
        """Sets the remove_outliers of this GoalDecumulationRecommendation.

        If TRUE, remove outlying results  # noqa: E501

        :param remove_outliers: The remove_outliers of this GoalDecumulationRecommendation.  # noqa: E501
        :type: bool
        """

        self._remove_outliers = remove_outliers

    @property
    def thresh_type(self):
        """Gets the thresh_type of this GoalDecumulationRecommendation.  # noqa: E501

        The goal deviation threshold type  # noqa: E501

        :return: The thresh_type of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: str
        """
        return self._thresh_type

    @thresh_type.setter
    def thresh_type(self, thresh_type):
        """Sets the thresh_type of this GoalDecumulationRecommendation.

        The goal deviation threshold type  # noqa: E501

        :param thresh_type: The thresh_type of this GoalDecumulationRecommendation.  # noqa: E501
        :type: str
        """
        allowed_values = ["amnt", "perc"]  # noqa: E501
        if thresh_type not in allowed_values:
            raise ValueError(
                "Invalid value for `thresh_type` ({0}), must be one of {1}"  # noqa: E501
                .format(thresh_type, allowed_values)
            )

        self._thresh_type = thresh_type

    @property
    def thresh(self):
        """Gets the thresh of this GoalDecumulationRecommendation.  # noqa: E501

        The goal deviation threshold value  # noqa: E501

        :return: The thresh of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: float
        """
        return self._thresh

    @thresh.setter
    def thresh(self, thresh):
        """Sets the thresh of this GoalDecumulationRecommendation.

        The goal deviation threshold value  # noqa: E501

        :param thresh: The thresh of this GoalDecumulationRecommendation.  # noqa: E501
        :type: float
        """
        if thresh is not None and thresh < 0:  # noqa: E501
            raise ValueError("Invalid value for `thresh`, must be a value greater than or equal to `0`")  # noqa: E501

        self._thresh = thresh

    @property
    def withdrawal_tax(self):
        """Gets the withdrawal_tax of this GoalDecumulationRecommendation.  # noqa: E501

        The tax rate for withdrawals  # noqa: E501

        :return: The withdrawal_tax of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: float
        """
        return self._withdrawal_tax

    @withdrawal_tax.setter
    def withdrawal_tax(self, withdrawal_tax):
        """Sets the withdrawal_tax of this GoalDecumulationRecommendation.

        The tax rate for withdrawals  # noqa: E501

        :param withdrawal_tax: The withdrawal_tax of this GoalDecumulationRecommendation.  # noqa: E501
        :type: float
        """
        if withdrawal_tax is not None and withdrawal_tax >= 1:  # noqa: E501
            raise ValueError("Invalid value for `withdrawal_tax`, must be a value less than `1`")  # noqa: E501
        if withdrawal_tax is not None and withdrawal_tax < 0:  # noqa: E501
            raise ValueError("Invalid value for `withdrawal_tax`, must be a value greater than or equal to `0`")  # noqa: E501

        self._withdrawal_tax = withdrawal_tax

    @property
    def trading_days_per_year(self):
        """Gets the trading_days_per_year of this GoalDecumulationRecommendation.  # noqa: E501

        Days per year a portfolio trades  # noqa: E501

        :return: The trading_days_per_year of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: int
        """
        return self._trading_days_per_year

    @trading_days_per_year.setter
    def trading_days_per_year(self, trading_days_per_year):
        """Sets the trading_days_per_year of this GoalDecumulationRecommendation.

        Days per year a portfolio trades  # noqa: E501

        :param trading_days_per_year: The trading_days_per_year of this GoalDecumulationRecommendation.  # noqa: E501
        :type: int
        """
        if trading_days_per_year is not None and trading_days_per_year > 365:  # noqa: E501
            raise ValueError("Invalid value for `trading_days_per_year`, must be a value less than or equal to `365`")  # noqa: E501
        if trading_days_per_year is not None and trading_days_per_year <= 0:  # noqa: E501
            raise ValueError("Invalid value for `trading_days_per_year`, must be a value greater than `0`")  # noqa: E501

        self._trading_days_per_year = trading_days_per_year

    @property
    def adjust_for_compounding(self):
        """Gets the adjust_for_compounding of this GoalDecumulationRecommendation.  # noqa: E501

        If true, adjust periodic deposit amounts for compounding based on compounding_rate. This applies when a deposit’s dep_frequency is shorter than horizon_frequency. Defaults to false.  # noqa: E501

        :return: The adjust_for_compounding of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: bool
        """
        return self._adjust_for_compounding

    @adjust_for_compounding.setter
    def adjust_for_compounding(self, adjust_for_compounding):
        """Sets the adjust_for_compounding of this GoalDecumulationRecommendation.

        If true, adjust periodic deposit amounts for compounding based on compounding_rate. This applies when a deposit’s dep_frequency is shorter than horizon_frequency. Defaults to false.  # noqa: E501

        :param adjust_for_compounding: The adjust_for_compounding of this GoalDecumulationRecommendation.  # noqa: E501
        :type: bool
        """

        self._adjust_for_compounding = adjust_for_compounding

    @property
    def compounding_rate(self):
        """Gets the compounding_rate of this GoalDecumulationRecommendation.  # noqa: E501

        The annualized rate to use when approximating a compounding effect on deposits. This value must be defined and adjust_for_compounding must be true in order to activate compounding adjustment. Defaults to 0.  # noqa: E501

        :return: The compounding_rate of this GoalDecumulationRecommendation.  # noqa: E501
        :rtype: float
        """
        return self._compounding_rate

    @compounding_rate.setter
    def compounding_rate(self, compounding_rate):
        """Sets the compounding_rate of this GoalDecumulationRecommendation.

        The annualized rate to use when approximating a compounding effect on deposits. This value must be defined and adjust_for_compounding must be true in order to activate compounding adjustment. Defaults to 0.  # noqa: E501

        :param compounding_rate: The compounding_rate of this GoalDecumulationRecommendation.  # noqa: E501
        :type: float
        """

        self._compounding_rate = compounding_rate

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
        if issubclass(GoalDecumulationRecommendation, dict):
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
        if not isinstance(other, GoalDecumulationRecommendation):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
