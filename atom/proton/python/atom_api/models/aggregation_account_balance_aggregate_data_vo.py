# coding: utf-8

"""
    Hydrogen Atom API

    The Hydrogen Atom API  # noqa: E501

    OpenAPI spec version: 1.7.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class AggregationAccountBalanceAggregateDataVO(object):
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
        'aggregation_account_balance_id': 'str',
        'available_balance': 'float',
        'available_credit': 'float',
        'balance': 'float',
        'balance_time_stamp': 'datetime',
        'create_date': 'datetime',
        'currency_code': 'str',
        'secondary_id': 'str',
        'update_date': 'datetime'
    }

    attribute_map = {
        'aggregation_account_balance_id': 'aggregation_account_balance_id',
        'available_balance': 'available_balance',
        'available_credit': 'available_credit',
        'balance': 'balance',
        'balance_time_stamp': 'balance_time_stamp',
        'create_date': 'create_date',
        'currency_code': 'currency_code',
        'secondary_id': 'secondary_id',
        'update_date': 'update_date'
    }

    def __init__(self, aggregation_account_balance_id=None, available_balance=None, available_credit=None, balance=None, balance_time_stamp=None, create_date=None, currency_code=None, secondary_id=None, update_date=None):  # noqa: E501
        """AggregationAccountBalanceAggregateDataVO - a model defined in Swagger"""  # noqa: E501

        self._aggregation_account_balance_id = None
        self._available_balance = None
        self._available_credit = None
        self._balance = None
        self._balance_time_stamp = None
        self._create_date = None
        self._currency_code = None
        self._secondary_id = None
        self._update_date = None
        self.discriminator = None

        if aggregation_account_balance_id is not None:
            self.aggregation_account_balance_id = aggregation_account_balance_id
        if available_balance is not None:
            self.available_balance = available_balance
        if available_credit is not None:
            self.available_credit = available_credit
        if balance is not None:
            self.balance = balance
        if balance_time_stamp is not None:
            self.balance_time_stamp = balance_time_stamp
        if create_date is not None:
            self.create_date = create_date
        if currency_code is not None:
            self.currency_code = currency_code
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if update_date is not None:
            self.update_date = update_date

    @property
    def aggregation_account_balance_id(self):
        """Gets the aggregation_account_balance_id of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501


        :return: The aggregation_account_balance_id of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :rtype: str
        """
        return self._aggregation_account_balance_id

    @aggregation_account_balance_id.setter
    def aggregation_account_balance_id(self, aggregation_account_balance_id):
        """Sets the aggregation_account_balance_id of this AggregationAccountBalanceAggregateDataVO.


        :param aggregation_account_balance_id: The aggregation_account_balance_id of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :type: str
        """

        self._aggregation_account_balance_id = aggregation_account_balance_id

    @property
    def available_balance(self):
        """Gets the available_balance of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501


        :return: The available_balance of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :rtype: float
        """
        return self._available_balance

    @available_balance.setter
    def available_balance(self, available_balance):
        """Sets the available_balance of this AggregationAccountBalanceAggregateDataVO.


        :param available_balance: The available_balance of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :type: float
        """

        self._available_balance = available_balance

    @property
    def available_credit(self):
        """Gets the available_credit of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501


        :return: The available_credit of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :rtype: float
        """
        return self._available_credit

    @available_credit.setter
    def available_credit(self, available_credit):
        """Sets the available_credit of this AggregationAccountBalanceAggregateDataVO.


        :param available_credit: The available_credit of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :type: float
        """

        self._available_credit = available_credit

    @property
    def balance(self):
        """Gets the balance of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501


        :return: The balance of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :rtype: float
        """
        return self._balance

    @balance.setter
    def balance(self, balance):
        """Sets the balance of this AggregationAccountBalanceAggregateDataVO.


        :param balance: The balance of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :type: float
        """

        self._balance = balance

    @property
    def balance_time_stamp(self):
        """Gets the balance_time_stamp of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501


        :return: The balance_time_stamp of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :rtype: datetime
        """
        return self._balance_time_stamp

    @balance_time_stamp.setter
    def balance_time_stamp(self, balance_time_stamp):
        """Sets the balance_time_stamp of this AggregationAccountBalanceAggregateDataVO.


        :param balance_time_stamp: The balance_time_stamp of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :type: datetime
        """

        self._balance_time_stamp = balance_time_stamp

    @property
    def create_date(self):
        """Gets the create_date of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501


        :return: The create_date of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this AggregationAccountBalanceAggregateDataVO.


        :param create_date: The create_date of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def currency_code(self):
        """Gets the currency_code of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501


        :return: The currency_code of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :rtype: str
        """
        return self._currency_code

    @currency_code.setter
    def currency_code(self, currency_code):
        """Sets the currency_code of this AggregationAccountBalanceAggregateDataVO.


        :param currency_code: The currency_code of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :type: str
        """

        self._currency_code = currency_code

    @property
    def secondary_id(self):
        """Gets the secondary_id of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501


        :return: The secondary_id of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this AggregationAccountBalanceAggregateDataVO.


        :param secondary_id: The secondary_id of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def update_date(self):
        """Gets the update_date of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501


        :return: The update_date of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this AggregationAccountBalanceAggregateDataVO.


        :param update_date: The update_date of this AggregationAccountBalanceAggregateDataVO.  # noqa: E501
        :type: datetime
        """

        self._update_date = update_date

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
        if issubclass(AggregationAccountBalanceAggregateDataVO, dict):
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
        if not isinstance(other, AggregationAccountBalanceAggregateDataVO):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
