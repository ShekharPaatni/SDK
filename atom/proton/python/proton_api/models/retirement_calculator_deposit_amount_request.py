# coding: utf-8

"""
    Hydrogen Proton API

    Financial engineering module of Hydrogen Atom  # noqa: E501

    OpenAPI spec version: 1.7.18
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class RetirementCalculatorDepositAmountRequest(object):
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
        'retirement_income': 'float',
        'percent_of_expenses_covered': 'float',
        'deposit_schedule': 'object',
        'retirement_age': 'int',
        'portfolio_return': 'float',
        'retirement_expenses': 'float',
        'inflation_rate': 'float',
        'aggregation_account_ids': 'list[str]',
        'current_age': 'int',
        'account_ids': 'list[str]',
        'retirement_savings': 'float',
        'retirement_tax': 'float',
        'death_age': 'int'
    }

    attribute_map = {
        'retirement_income': 'retirement_income',
        'percent_of_expenses_covered': 'percent_of_expenses_covered',
        'deposit_schedule': 'deposit_schedule',
        'retirement_age': 'retirement_age',
        'portfolio_return': 'portfolio_return',
        'retirement_expenses': 'retirement_expenses',
        'inflation_rate': 'inflation_rate',
        'aggregation_account_ids': 'aggregation_account_ids',
        'current_age': 'current_age',
        'account_ids': 'account_ids',
        'retirement_savings': 'retirement_savings',
        'retirement_tax': 'retirement_tax',
        'death_age': 'death_age'
    }

    def __init__(self, retirement_income=0.0, percent_of_expenses_covered=1.0, deposit_schedule=None, retirement_age=65, portfolio_return=None, retirement_expenses=None, inflation_rate=0.0, aggregation_account_ids=None, current_age=None, account_ids=None, retirement_savings=0.0, retirement_tax=0.0, death_age=None):  # noqa: E501
        """RetirementCalculatorDepositAmountRequest - a model defined in Swagger"""  # noqa: E501

        self._retirement_income = None
        self._percent_of_expenses_covered = None
        self._deposit_schedule = None
        self._retirement_age = None
        self._portfolio_return = None
        self._retirement_expenses = None
        self._inflation_rate = None
        self._aggregation_account_ids = None
        self._current_age = None
        self._account_ids = None
        self._retirement_savings = None
        self._retirement_tax = None
        self._death_age = None
        self.discriminator = None

        if retirement_income is not None:
            self.retirement_income = retirement_income
        if percent_of_expenses_covered is not None:
            self.percent_of_expenses_covered = percent_of_expenses_covered
        if deposit_schedule is not None:
            self.deposit_schedule = deposit_schedule
        if retirement_age is not None:
            self.retirement_age = retirement_age
        self.portfolio_return = portfolio_return
        self.retirement_expenses = retirement_expenses
        if inflation_rate is not None:
            self.inflation_rate = inflation_rate
        if aggregation_account_ids is not None:
            self.aggregation_account_ids = aggregation_account_ids
        self.current_age = current_age
        if account_ids is not None:
            self.account_ids = account_ids
        if retirement_savings is not None:
            self.retirement_savings = retirement_savings
        if retirement_tax is not None:
            self.retirement_tax = retirement_tax
        self.death_age = death_age

    @property
    def retirement_income(self):
        """Gets the retirement_income of this RetirementCalculatorDepositAmountRequest.  # noqa: E501


        :return: The retirement_income of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :rtype: float
        """
        return self._retirement_income

    @retirement_income.setter
    def retirement_income(self, retirement_income):
        """Sets the retirement_income of this RetirementCalculatorDepositAmountRequest.


        :param retirement_income: The retirement_income of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :type: float
        """
        if retirement_income is not None and retirement_income < 0:  # noqa: E501
            raise ValueError("Invalid value for `retirement_income`, must be a value greater than or equal to `0`")  # noqa: E501

        self._retirement_income = retirement_income

    @property
    def percent_of_expenses_covered(self):
        """Gets the percent_of_expenses_covered of this RetirementCalculatorDepositAmountRequest.  # noqa: E501


        :return: The percent_of_expenses_covered of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :rtype: float
        """
        return self._percent_of_expenses_covered

    @percent_of_expenses_covered.setter
    def percent_of_expenses_covered(self, percent_of_expenses_covered):
        """Sets the percent_of_expenses_covered of this RetirementCalculatorDepositAmountRequest.


        :param percent_of_expenses_covered: The percent_of_expenses_covered of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :type: float
        """
        if percent_of_expenses_covered is not None and percent_of_expenses_covered > 1:  # noqa: E501
            raise ValueError("Invalid value for `percent_of_expenses_covered`, must be a value less than or equal to `1`")  # noqa: E501
        if percent_of_expenses_covered is not None and percent_of_expenses_covered < 0:  # noqa: E501
            raise ValueError("Invalid value for `percent_of_expenses_covered`, must be a value greater than or equal to `0`")  # noqa: E501

        self._percent_of_expenses_covered = percent_of_expenses_covered

    @property
    def deposit_schedule(self):
        """Gets the deposit_schedule of this RetirementCalculatorDepositAmountRequest.  # noqa: E501


        :return: The deposit_schedule of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :rtype: object
        """
        return self._deposit_schedule

    @deposit_schedule.setter
    def deposit_schedule(self, deposit_schedule):
        """Sets the deposit_schedule of this RetirementCalculatorDepositAmountRequest.


        :param deposit_schedule: The deposit_schedule of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :type: object
        """

        self._deposit_schedule = deposit_schedule

    @property
    def retirement_age(self):
        """Gets the retirement_age of this RetirementCalculatorDepositAmountRequest.  # noqa: E501


        :return: The retirement_age of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :rtype: int
        """
        return self._retirement_age

    @retirement_age.setter
    def retirement_age(self, retirement_age):
        """Sets the retirement_age of this RetirementCalculatorDepositAmountRequest.


        :param retirement_age: The retirement_age of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :type: int
        """
        if retirement_age is not None and retirement_age < 0:  # noqa: E501
            raise ValueError("Invalid value for `retirement_age`, must be a value greater than or equal to `0`")  # noqa: E501

        self._retirement_age = retirement_age

    @property
    def portfolio_return(self):
        """Gets the portfolio_return of this RetirementCalculatorDepositAmountRequest.  # noqa: E501


        :return: The portfolio_return of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :rtype: float
        """
        return self._portfolio_return

    @portfolio_return.setter
    def portfolio_return(self, portfolio_return):
        """Sets the portfolio_return of this RetirementCalculatorDepositAmountRequest.


        :param portfolio_return: The portfolio_return of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :type: float
        """
        if portfolio_return is None:
            raise ValueError("Invalid value for `portfolio_return`, must not be `None`")  # noqa: E501
        if portfolio_return is not None and portfolio_return < -1:  # noqa: E501
            raise ValueError("Invalid value for `portfolio_return`, must be a value greater than or equal to `-1`")  # noqa: E501

        self._portfolio_return = portfolio_return

    @property
    def retirement_expenses(self):
        """Gets the retirement_expenses of this RetirementCalculatorDepositAmountRequest.  # noqa: E501


        :return: The retirement_expenses of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :rtype: float
        """
        return self._retirement_expenses

    @retirement_expenses.setter
    def retirement_expenses(self, retirement_expenses):
        """Sets the retirement_expenses of this RetirementCalculatorDepositAmountRequest.


        :param retirement_expenses: The retirement_expenses of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :type: float
        """
        if retirement_expenses is None:
            raise ValueError("Invalid value for `retirement_expenses`, must not be `None`")  # noqa: E501
        if retirement_expenses is not None and retirement_expenses < 0:  # noqa: E501
            raise ValueError("Invalid value for `retirement_expenses`, must be a value greater than or equal to `0`")  # noqa: E501

        self._retirement_expenses = retirement_expenses

    @property
    def inflation_rate(self):
        """Gets the inflation_rate of this RetirementCalculatorDepositAmountRequest.  # noqa: E501


        :return: The inflation_rate of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :rtype: float
        """
        return self._inflation_rate

    @inflation_rate.setter
    def inflation_rate(self, inflation_rate):
        """Sets the inflation_rate of this RetirementCalculatorDepositAmountRequest.


        :param inflation_rate: The inflation_rate of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :type: float
        """
        if inflation_rate is not None and inflation_rate < -1:  # noqa: E501
            raise ValueError("Invalid value for `inflation_rate`, must be a value greater than or equal to `-1`")  # noqa: E501

        self._inflation_rate = inflation_rate

    @property
    def aggregation_account_ids(self):
        """Gets the aggregation_account_ids of this RetirementCalculatorDepositAmountRequest.  # noqa: E501


        :return: The aggregation_account_ids of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :rtype: list[str]
        """
        return self._aggregation_account_ids

    @aggregation_account_ids.setter
    def aggregation_account_ids(self, aggregation_account_ids):
        """Sets the aggregation_account_ids of this RetirementCalculatorDepositAmountRequest.


        :param aggregation_account_ids: The aggregation_account_ids of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :type: list[str]
        """

        self._aggregation_account_ids = aggregation_account_ids

    @property
    def current_age(self):
        """Gets the current_age of this RetirementCalculatorDepositAmountRequest.  # noqa: E501


        :return: The current_age of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :rtype: int
        """
        return self._current_age

    @current_age.setter
    def current_age(self, current_age):
        """Sets the current_age of this RetirementCalculatorDepositAmountRequest.


        :param current_age: The current_age of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :type: int
        """
        if current_age is None:
            raise ValueError("Invalid value for `current_age`, must not be `None`")  # noqa: E501
        if current_age is not None and current_age < 0:  # noqa: E501
            raise ValueError("Invalid value for `current_age`, must be a value greater than or equal to `0`")  # noqa: E501

        self._current_age = current_age

    @property
    def account_ids(self):
        """Gets the account_ids of this RetirementCalculatorDepositAmountRequest.  # noqa: E501


        :return: The account_ids of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :rtype: list[str]
        """
        return self._account_ids

    @account_ids.setter
    def account_ids(self, account_ids):
        """Sets the account_ids of this RetirementCalculatorDepositAmountRequest.


        :param account_ids: The account_ids of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :type: list[str]
        """

        self._account_ids = account_ids

    @property
    def retirement_savings(self):
        """Gets the retirement_savings of this RetirementCalculatorDepositAmountRequest.  # noqa: E501


        :return: The retirement_savings of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :rtype: float
        """
        return self._retirement_savings

    @retirement_savings.setter
    def retirement_savings(self, retirement_savings):
        """Sets the retirement_savings of this RetirementCalculatorDepositAmountRequest.


        :param retirement_savings: The retirement_savings of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :type: float
        """
        if retirement_savings is not None and retirement_savings < 0:  # noqa: E501
            raise ValueError("Invalid value for `retirement_savings`, must be a value greater than or equal to `0`")  # noqa: E501

        self._retirement_savings = retirement_savings

    @property
    def retirement_tax(self):
        """Gets the retirement_tax of this RetirementCalculatorDepositAmountRequest.  # noqa: E501


        :return: The retirement_tax of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :rtype: float
        """
        return self._retirement_tax

    @retirement_tax.setter
    def retirement_tax(self, retirement_tax):
        """Sets the retirement_tax of this RetirementCalculatorDepositAmountRequest.


        :param retirement_tax: The retirement_tax of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :type: float
        """
        if retirement_tax is not None and retirement_tax > 1:  # noqa: E501
            raise ValueError("Invalid value for `retirement_tax`, must be a value less than or equal to `1`")  # noqa: E501
        if retirement_tax is not None and retirement_tax < 0:  # noqa: E501
            raise ValueError("Invalid value for `retirement_tax`, must be a value greater than or equal to `0`")  # noqa: E501

        self._retirement_tax = retirement_tax

    @property
    def death_age(self):
        """Gets the death_age of this RetirementCalculatorDepositAmountRequest.  # noqa: E501


        :return: The death_age of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :rtype: int
        """
        return self._death_age

    @death_age.setter
    def death_age(self, death_age):
        """Sets the death_age of this RetirementCalculatorDepositAmountRequest.


        :param death_age: The death_age of this RetirementCalculatorDepositAmountRequest.  # noqa: E501
        :type: int
        """
        if death_age is None:
            raise ValueError("Invalid value for `death_age`, must not be `None`")  # noqa: E501
        if death_age is not None and death_age < 0:  # noqa: E501
            raise ValueError("Invalid value for `death_age`, must be a value greater than or equal to `0`")  # noqa: E501

        self._death_age = death_age

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
        if issubclass(RetirementCalculatorDepositAmountRequest, dict):
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
        if not isinstance(other, RetirementCalculatorDepositAmountRequest):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other