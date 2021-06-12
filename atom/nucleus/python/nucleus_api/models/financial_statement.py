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


class FinancialStatement(object):
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
        'accounting_method': 'str',
        'business_id': 'str',
        'client_id': 'str',
        'create_date': 'datetime',
        'currency_code': 'str',
        'id': 'str',
        'metadata': 'dict(str, str)',
        'period_length': 'str',
        'period_month': 'int',
        'period_quarter': 'int',
        'period_type': 'str',
        'period_year': 'int',
        'secondary_id': 'str',
        'statement_date': 'date',
        'statement_type': 'str',
        'stats': 'list[Stat]',
        'update_date': 'datetime'
    }

    attribute_map = {
        'accounting_method': 'accounting_method',
        'business_id': 'business_id',
        'client_id': 'client_id',
        'create_date': 'create_date',
        'currency_code': 'currency_code',
        'id': 'id',
        'metadata': 'metadata',
        'period_length': 'period_length',
        'period_month': 'period_month',
        'period_quarter': 'period_quarter',
        'period_type': 'period_type',
        'period_year': 'period_year',
        'secondary_id': 'secondary_id',
        'statement_date': 'statement_date',
        'statement_type': 'statement_type',
        'stats': 'stats',
        'update_date': 'update_date'
    }

    def __init__(self, accounting_method=None, business_id=None, client_id=None, create_date=None, currency_code=None, id=None, metadata=None, period_length=None, period_month=None, period_quarter=None, period_type=None, period_year=None, secondary_id=None, statement_date=None, statement_type=None, stats=None, update_date=None, _configuration=None):  # noqa: E501
        """FinancialStatement - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._accounting_method = None
        self._business_id = None
        self._client_id = None
        self._create_date = None
        self._currency_code = None
        self._id = None
        self._metadata = None
        self._period_length = None
        self._period_month = None
        self._period_quarter = None
        self._period_type = None
        self._period_year = None
        self._secondary_id = None
        self._statement_date = None
        self._statement_type = None
        self._stats = None
        self._update_date = None
        self.discriminator = None

        self.accounting_method = accounting_method
        if business_id is not None:
            self.business_id = business_id
        if client_id is not None:
            self.client_id = client_id
        if create_date is not None:
            self.create_date = create_date
        self.currency_code = currency_code
        if id is not None:
            self.id = id
        if metadata is not None:
            self.metadata = metadata
        if period_length is not None:
            self.period_length = period_length
        if period_month is not None:
            self.period_month = period_month
        if period_quarter is not None:
            self.period_quarter = period_quarter
        if period_type is not None:
            self.period_type = period_type
        if period_year is not None:
            self.period_year = period_year
        if secondary_id is not None:
            self.secondary_id = secondary_id
        self.statement_date = statement_date
        self.statement_type = statement_type
        if stats is not None:
            self.stats = stats
        if update_date is not None:
            self.update_date = update_date

    @property
    def accounting_method(self):
        """Gets the accounting_method of this FinancialStatement.  # noqa: E501

        accounting_method  # noqa: E501

        :return: The accounting_method of this FinancialStatement.  # noqa: E501
        :rtype: str
        """
        return self._accounting_method

    @accounting_method.setter
    def accounting_method(self, accounting_method):
        """Sets the accounting_method of this FinancialStatement.

        accounting_method  # noqa: E501

        :param accounting_method: The accounting_method of this FinancialStatement.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and accounting_method is None:
            raise ValueError("Invalid value for `accounting_method`, must not be `None`")  # noqa: E501

        self._accounting_method = accounting_method

    @property
    def business_id(self):
        """Gets the business_id of this FinancialStatement.  # noqa: E501

        businessId  # noqa: E501

        :return: The business_id of this FinancialStatement.  # noqa: E501
        :rtype: str
        """
        return self._business_id

    @business_id.setter
    def business_id(self, business_id):
        """Sets the business_id of this FinancialStatement.

        businessId  # noqa: E501

        :param business_id: The business_id of this FinancialStatement.  # noqa: E501
        :type: str
        """

        self._business_id = business_id

    @property
    def client_id(self):
        """Gets the client_id of this FinancialStatement.  # noqa: E501

        clientId  # noqa: E501

        :return: The client_id of this FinancialStatement.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this FinancialStatement.

        clientId  # noqa: E501

        :param client_id: The client_id of this FinancialStatement.  # noqa: E501
        :type: str
        """

        self._client_id = client_id

    @property
    def create_date(self):
        """Gets the create_date of this FinancialStatement.  # noqa: E501


        :return: The create_date of this FinancialStatement.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this FinancialStatement.


        :param create_date: The create_date of this FinancialStatement.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def currency_code(self):
        """Gets the currency_code of this FinancialStatement.  # noqa: E501

        currencyCode  # noqa: E501

        :return: The currency_code of this FinancialStatement.  # noqa: E501
        :rtype: str
        """
        return self._currency_code

    @currency_code.setter
    def currency_code(self, currency_code):
        """Sets the currency_code of this FinancialStatement.

        currencyCode  # noqa: E501

        :param currency_code: The currency_code of this FinancialStatement.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and currency_code is None:
            raise ValueError("Invalid value for `currency_code`, must not be `None`")  # noqa: E501

        self._currency_code = currency_code

    @property
    def id(self):
        """Gets the id of this FinancialStatement.  # noqa: E501


        :return: The id of this FinancialStatement.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this FinancialStatement.


        :param id: The id of this FinancialStatement.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def metadata(self):
        """Gets the metadata of this FinancialStatement.  # noqa: E501


        :return: The metadata of this FinancialStatement.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this FinancialStatement.


        :param metadata: The metadata of this FinancialStatement.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def period_length(self):
        """Gets the period_length of this FinancialStatement.  # noqa: E501

        periodLength  # noqa: E501

        :return: The period_length of this FinancialStatement.  # noqa: E501
        :rtype: str
        """
        return self._period_length

    @period_length.setter
    def period_length(self, period_length):
        """Sets the period_length of this FinancialStatement.

        periodLength  # noqa: E501

        :param period_length: The period_length of this FinancialStatement.  # noqa: E501
        :type: str
        """

        self._period_length = period_length

    @property
    def period_month(self):
        """Gets the period_month of this FinancialStatement.  # noqa: E501

        periodMonth  # noqa: E501

        :return: The period_month of this FinancialStatement.  # noqa: E501
        :rtype: int
        """
        return self._period_month

    @period_month.setter
    def period_month(self, period_month):
        """Sets the period_month of this FinancialStatement.

        periodMonth  # noqa: E501

        :param period_month: The period_month of this FinancialStatement.  # noqa: E501
        :type: int
        """

        self._period_month = period_month

    @property
    def period_quarter(self):
        """Gets the period_quarter of this FinancialStatement.  # noqa: E501

        periodQuarter  # noqa: E501

        :return: The period_quarter of this FinancialStatement.  # noqa: E501
        :rtype: int
        """
        return self._period_quarter

    @period_quarter.setter
    def period_quarter(self, period_quarter):
        """Sets the period_quarter of this FinancialStatement.

        periodQuarter  # noqa: E501

        :param period_quarter: The period_quarter of this FinancialStatement.  # noqa: E501
        :type: int
        """

        self._period_quarter = period_quarter

    @property
    def period_type(self):
        """Gets the period_type of this FinancialStatement.  # noqa: E501

        periodType  # noqa: E501

        :return: The period_type of this FinancialStatement.  # noqa: E501
        :rtype: str
        """
        return self._period_type

    @period_type.setter
    def period_type(self, period_type):
        """Sets the period_type of this FinancialStatement.

        periodType  # noqa: E501

        :param period_type: The period_type of this FinancialStatement.  # noqa: E501
        :type: str
        """

        self._period_type = period_type

    @property
    def period_year(self):
        """Gets the period_year of this FinancialStatement.  # noqa: E501

        periodYear  # noqa: E501

        :return: The period_year of this FinancialStatement.  # noqa: E501
        :rtype: int
        """
        return self._period_year

    @period_year.setter
    def period_year(self, period_year):
        """Sets the period_year of this FinancialStatement.

        periodYear  # noqa: E501

        :param period_year: The period_year of this FinancialStatement.  # noqa: E501
        :type: int
        """

        self._period_year = period_year

    @property
    def secondary_id(self):
        """Gets the secondary_id of this FinancialStatement.  # noqa: E501


        :return: The secondary_id of this FinancialStatement.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this FinancialStatement.


        :param secondary_id: The secondary_id of this FinancialStatement.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def statement_date(self):
        """Gets the statement_date of this FinancialStatement.  # noqa: E501

        statementDate  # noqa: E501

        :return: The statement_date of this FinancialStatement.  # noqa: E501
        :rtype: date
        """
        return self._statement_date

    @statement_date.setter
    def statement_date(self, statement_date):
        """Sets the statement_date of this FinancialStatement.

        statementDate  # noqa: E501

        :param statement_date: The statement_date of this FinancialStatement.  # noqa: E501
        :type: date
        """
        if self._configuration.client_side_validation and statement_date is None:
            raise ValueError("Invalid value for `statement_date`, must not be `None`")  # noqa: E501

        self._statement_date = statement_date

    @property
    def statement_type(self):
        """Gets the statement_type of this FinancialStatement.  # noqa: E501

        statement_type  # noqa: E501

        :return: The statement_type of this FinancialStatement.  # noqa: E501
        :rtype: str
        """
        return self._statement_type

    @statement_type.setter
    def statement_type(self, statement_type):
        """Sets the statement_type of this FinancialStatement.

        statement_type  # noqa: E501

        :param statement_type: The statement_type of this FinancialStatement.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and statement_type is None:
            raise ValueError("Invalid value for `statement_type`, must not be `None`")  # noqa: E501

        self._statement_type = statement_type

    @property
    def stats(self):
        """Gets the stats of this FinancialStatement.  # noqa: E501

        stats  # noqa: E501

        :return: The stats of this FinancialStatement.  # noqa: E501
        :rtype: list[Stat]
        """
        return self._stats

    @stats.setter
    def stats(self, stats):
        """Sets the stats of this FinancialStatement.

        stats  # noqa: E501

        :param stats: The stats of this FinancialStatement.  # noqa: E501
        :type: list[Stat]
        """

        self._stats = stats

    @property
    def update_date(self):
        """Gets the update_date of this FinancialStatement.  # noqa: E501


        :return: The update_date of this FinancialStatement.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this FinancialStatement.


        :param update_date: The update_date of this FinancialStatement.  # noqa: E501
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
        if issubclass(FinancialStatement, dict):
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
        if not isinstance(other, FinancialStatement):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, FinancialStatement):
            return True

        return self.to_dict() != other.to_dict()
