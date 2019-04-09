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


class AnnuityReturnDetail(object):
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
        'period_contribution': 'float',
        'cumulative_contributions': 'float',
        'period_withdrawal': 'float',
        'cumulative_withdrawals': 'float',
        'period_tax': 'float',
        'cumulative_tax': 'float',
        'period_earnings': 'float',
        'cumulative_earnings': 'float',
        'ending_balance': 'float'
    }

    attribute_map = {
        'period_contribution': 'period_contribution',
        'cumulative_contributions': 'cumulative_contributions',
        'period_withdrawal': 'period_withdrawal',
        'cumulative_withdrawals': 'cumulative_withdrawals',
        'period_tax': 'period_tax',
        'cumulative_tax': 'cumulative_tax',
        'period_earnings': 'period_earnings',
        'cumulative_earnings': 'cumulative_earnings',
        'ending_balance': 'ending_balance'
    }

    def __init__(self, period_contribution=None, cumulative_contributions=None, period_withdrawal=None, cumulative_withdrawals=None, period_tax=None, cumulative_tax=None, period_earnings=None, cumulative_earnings=None, ending_balance=None):  # noqa: E501
        """AnnuityReturnDetail - a model defined in Swagger"""  # noqa: E501

        self._period_contribution = None
        self._cumulative_contributions = None
        self._period_withdrawal = None
        self._cumulative_withdrawals = None
        self._period_tax = None
        self._cumulative_tax = None
        self._period_earnings = None
        self._cumulative_earnings = None
        self._ending_balance = None
        self.discriminator = None

        self.period_contribution = period_contribution
        self.cumulative_contributions = cumulative_contributions
        self.period_withdrawal = period_withdrawal
        self.cumulative_withdrawals = cumulative_withdrawals
        self.period_tax = period_tax
        self.cumulative_tax = cumulative_tax
        self.period_earnings = period_earnings
        self.cumulative_earnings = cumulative_earnings
        self.ending_balance = ending_balance

    @property
    def period_contribution(self):
        """Gets the period_contribution of this AnnuityReturnDetail.  # noqa: E501

        The deposit made for this period.  # noqa: E501

        :return: The period_contribution of this AnnuityReturnDetail.  # noqa: E501
        :rtype: float
        """
        return self._period_contribution

    @period_contribution.setter
    def period_contribution(self, period_contribution):
        """Sets the period_contribution of this AnnuityReturnDetail.

        The deposit made for this period.  # noqa: E501

        :param period_contribution: The period_contribution of this AnnuityReturnDetail.  # noqa: E501
        :type: float
        """
        if period_contribution is None:
            raise ValueError("Invalid value for `period_contribution`, must not be `None`")  # noqa: E501
        if period_contribution is not None and period_contribution < 0:  # noqa: E501
            raise ValueError("Invalid value for `period_contribution`, must be a value greater than or equal to `0`")  # noqa: E501

        self._period_contribution = period_contribution

    @property
    def cumulative_contributions(self):
        """Gets the cumulative_contributions of this AnnuityReturnDetail.  # noqa: E501

        The cumulative deposits made up to and including this period.  # noqa: E501

        :return: The cumulative_contributions of this AnnuityReturnDetail.  # noqa: E501
        :rtype: float
        """
        return self._cumulative_contributions

    @cumulative_contributions.setter
    def cumulative_contributions(self, cumulative_contributions):
        """Sets the cumulative_contributions of this AnnuityReturnDetail.

        The cumulative deposits made up to and including this period.  # noqa: E501

        :param cumulative_contributions: The cumulative_contributions of this AnnuityReturnDetail.  # noqa: E501
        :type: float
        """
        if cumulative_contributions is None:
            raise ValueError("Invalid value for `cumulative_contributions`, must not be `None`")  # noqa: E501
        if cumulative_contributions is not None and cumulative_contributions < 0:  # noqa: E501
            raise ValueError("Invalid value for `cumulative_contributions`, must be a value greater than or equal to `0`")  # noqa: E501

        self._cumulative_contributions = cumulative_contributions

    @property
    def period_withdrawal(self):
        """Gets the period_withdrawal of this AnnuityReturnDetail.  # noqa: E501

        The withdrawal made for this period.  # noqa: E501

        :return: The period_withdrawal of this AnnuityReturnDetail.  # noqa: E501
        :rtype: float
        """
        return self._period_withdrawal

    @period_withdrawal.setter
    def period_withdrawal(self, period_withdrawal):
        """Sets the period_withdrawal of this AnnuityReturnDetail.

        The withdrawal made for this period.  # noqa: E501

        :param period_withdrawal: The period_withdrawal of this AnnuityReturnDetail.  # noqa: E501
        :type: float
        """
        if period_withdrawal is None:
            raise ValueError("Invalid value for `period_withdrawal`, must not be `None`")  # noqa: E501
        if period_withdrawal is not None and period_withdrawal < 0:  # noqa: E501
            raise ValueError("Invalid value for `period_withdrawal`, must be a value greater than or equal to `0`")  # noqa: E501

        self._period_withdrawal = period_withdrawal

    @property
    def cumulative_withdrawals(self):
        """Gets the cumulative_withdrawals of this AnnuityReturnDetail.  # noqa: E501

        The cumulative withdrawals made up to and including this period.  # noqa: E501

        :return: The cumulative_withdrawals of this AnnuityReturnDetail.  # noqa: E501
        :rtype: float
        """
        return self._cumulative_withdrawals

    @cumulative_withdrawals.setter
    def cumulative_withdrawals(self, cumulative_withdrawals):
        """Sets the cumulative_withdrawals of this AnnuityReturnDetail.

        The cumulative withdrawals made up to and including this period.  # noqa: E501

        :param cumulative_withdrawals: The cumulative_withdrawals of this AnnuityReturnDetail.  # noqa: E501
        :type: float
        """
        if cumulative_withdrawals is None:
            raise ValueError("Invalid value for `cumulative_withdrawals`, must not be `None`")  # noqa: E501
        if cumulative_withdrawals is not None and cumulative_withdrawals < 0:  # noqa: E501
            raise ValueError("Invalid value for `cumulative_withdrawals`, must be a value greater than or equal to `0`")  # noqa: E501

        self._cumulative_withdrawals = cumulative_withdrawals

    @property
    def period_tax(self):
        """Gets the period_tax of this AnnuityReturnDetail.  # noqa: E501

        The tax amount for this period.  # noqa: E501

        :return: The period_tax of this AnnuityReturnDetail.  # noqa: E501
        :rtype: float
        """
        return self._period_tax

    @period_tax.setter
    def period_tax(self, period_tax):
        """Sets the period_tax of this AnnuityReturnDetail.

        The tax amount for this period.  # noqa: E501

        :param period_tax: The period_tax of this AnnuityReturnDetail.  # noqa: E501
        :type: float
        """
        if period_tax is None:
            raise ValueError("Invalid value for `period_tax`, must not be `None`")  # noqa: E501
        if period_tax is not None and period_tax < 0:  # noqa: E501
            raise ValueError("Invalid value for `period_tax`, must be a value greater than or equal to `0`")  # noqa: E501

        self._period_tax = period_tax

    @property
    def cumulative_tax(self):
        """Gets the cumulative_tax of this AnnuityReturnDetail.  # noqa: E501

        The cumulative taxes up to and including this period.  # noqa: E501

        :return: The cumulative_tax of this AnnuityReturnDetail.  # noqa: E501
        :rtype: float
        """
        return self._cumulative_tax

    @cumulative_tax.setter
    def cumulative_tax(self, cumulative_tax):
        """Sets the cumulative_tax of this AnnuityReturnDetail.

        The cumulative taxes up to and including this period.  # noqa: E501

        :param cumulative_tax: The cumulative_tax of this AnnuityReturnDetail.  # noqa: E501
        :type: float
        """
        if cumulative_tax is None:
            raise ValueError("Invalid value for `cumulative_tax`, must not be `None`")  # noqa: E501
        if cumulative_tax is not None and cumulative_tax < 0:  # noqa: E501
            raise ValueError("Invalid value for `cumulative_tax`, must be a value greater than or equal to `0`")  # noqa: E501

        self._cumulative_tax = cumulative_tax

    @property
    def period_earnings(self):
        """Gets the period_earnings of this AnnuityReturnDetail.  # noqa: E501

        The investment earnings for this period. Earnings are calculated at the beginning of each period, before contributions are made.  # noqa: E501

        :return: The period_earnings of this AnnuityReturnDetail.  # noqa: E501
        :rtype: float
        """
        return self._period_earnings

    @period_earnings.setter
    def period_earnings(self, period_earnings):
        """Sets the period_earnings of this AnnuityReturnDetail.

        The investment earnings for this period. Earnings are calculated at the beginning of each period, before contributions are made.  # noqa: E501

        :param period_earnings: The period_earnings of this AnnuityReturnDetail.  # noqa: E501
        :type: float
        """
        if period_earnings is None:
            raise ValueError("Invalid value for `period_earnings`, must not be `None`")  # noqa: E501
        if period_earnings is not None and period_earnings < 0:  # noqa: E501
            raise ValueError("Invalid value for `period_earnings`, must be a value greater than or equal to `0`")  # noqa: E501

        self._period_earnings = period_earnings

    @property
    def cumulative_earnings(self):
        """Gets the cumulative_earnings of this AnnuityReturnDetail.  # noqa: E501

        The cumulative investment earnings made up to and including this period.  # noqa: E501

        :return: The cumulative_earnings of this AnnuityReturnDetail.  # noqa: E501
        :rtype: float
        """
        return self._cumulative_earnings

    @cumulative_earnings.setter
    def cumulative_earnings(self, cumulative_earnings):
        """Sets the cumulative_earnings of this AnnuityReturnDetail.

        The cumulative investment earnings made up to and including this period.  # noqa: E501

        :param cumulative_earnings: The cumulative_earnings of this AnnuityReturnDetail.  # noqa: E501
        :type: float
        """
        if cumulative_earnings is None:
            raise ValueError("Invalid value for `cumulative_earnings`, must not be `None`")  # noqa: E501
        if cumulative_earnings is not None and cumulative_earnings < 0:  # noqa: E501
            raise ValueError("Invalid value for `cumulative_earnings`, must be a value greater than or equal to `0`")  # noqa: E501

        self._cumulative_earnings = cumulative_earnings

    @property
    def ending_balance(self):
        """Gets the ending_balance of this AnnuityReturnDetail.  # noqa: E501

        The ending balance, inclusive of earnings and contributions for the current period.  # noqa: E501

        :return: The ending_balance of this AnnuityReturnDetail.  # noqa: E501
        :rtype: float
        """
        return self._ending_balance

    @ending_balance.setter
    def ending_balance(self, ending_balance):
        """Sets the ending_balance of this AnnuityReturnDetail.

        The ending balance, inclusive of earnings and contributions for the current period.  # noqa: E501

        :param ending_balance: The ending_balance of this AnnuityReturnDetail.  # noqa: E501
        :type: float
        """
        if ending_balance is None:
            raise ValueError("Invalid value for `ending_balance`, must not be `None`")  # noqa: E501
        if ending_balance is not None and ending_balance < 0:  # noqa: E501
            raise ValueError("Invalid value for `ending_balance`, must be a value greater than or equal to `0`")  # noqa: E501

        self._ending_balance = ending_balance

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
        if issubclass(AnnuityReturnDetail, dict):
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
        if not isinstance(other, AnnuityReturnDetail):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
