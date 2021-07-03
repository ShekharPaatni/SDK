# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.2
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from nucleus_api.configuration import Configuration


class FundingTransaction(object):
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
        'account_id': 'str',
        'amount': 'float',
        'comments': 'str',
        'create_date': 'datetime',
        'currency_code': 'str',
        'fees': 'float',
        'funding_id': 'str',
        'id': 'str',
        'invested_date': 'datetime',
        'is_deposit': 'bool',
        'last_request_date': 'datetime',
        'metadata': 'dict(str, str)',
        'portfolio_id': 'str',
        'portfolio_transaction_id': 'str',
        'received_date': 'datetime',
        'secondary_id': 'str',
        'status': 'str',
        'status_time_stamp': 'datetime',
        'type': 'str',
        'update_date': 'datetime'
    }

    attribute_map = {
        'account_id': 'account_id',
        'amount': 'amount',
        'comments': 'comments',
        'create_date': 'create_date',
        'currency_code': 'currency_code',
        'fees': 'fees',
        'funding_id': 'funding_id',
        'id': 'id',
        'invested_date': 'invested_date',
        'is_deposit': 'is_deposit',
        'last_request_date': 'last_request_date',
        'metadata': 'metadata',
        'portfolio_id': 'portfolio_id',
        'portfolio_transaction_id': 'portfolio_transaction_id',
        'received_date': 'received_date',
        'secondary_id': 'secondary_id',
        'status': 'status',
        'status_time_stamp': 'status_time_stamp',
        'type': 'type',
        'update_date': 'update_date'
    }

    def __init__(self, account_id=None, amount=None, comments=None, create_date=None, currency_code=None, fees=None, funding_id=None, id=None, invested_date=None, is_deposit=None, last_request_date=None, metadata=None, portfolio_id=None, portfolio_transaction_id=None, received_date=None, secondary_id=None, status=None, status_time_stamp=None, type=None, update_date=None, _configuration=None):  # noqa: E501
        """FundingTransaction - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._account_id = None
        self._amount = None
        self._comments = None
        self._create_date = None
        self._currency_code = None
        self._fees = None
        self._funding_id = None
        self._id = None
        self._invested_date = None
        self._is_deposit = None
        self._last_request_date = None
        self._metadata = None
        self._portfolio_id = None
        self._portfolio_transaction_id = None
        self._received_date = None
        self._secondary_id = None
        self._status = None
        self._status_time_stamp = None
        self._type = None
        self._update_date = None
        self.discriminator = None

        if account_id is not None:
            self.account_id = account_id
        self.amount = amount
        if comments is not None:
            self.comments = comments
        if create_date is not None:
            self.create_date = create_date
        self.currency_code = currency_code
        if fees is not None:
            self.fees = fees
        self.funding_id = funding_id
        if id is not None:
            self.id = id
        if invested_date is not None:
            self.invested_date = invested_date
        self.is_deposit = is_deposit
        if last_request_date is not None:
            self.last_request_date = last_request_date
        if metadata is not None:
            self.metadata = metadata
        if portfolio_id is not None:
            self.portfolio_id = portfolio_id
        if portfolio_transaction_id is not None:
            self.portfolio_transaction_id = portfolio_transaction_id
        if received_date is not None:
            self.received_date = received_date
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if status is not None:
            self.status = status
        if status_time_stamp is not None:
            self.status_time_stamp = status_time_stamp
        if type is not None:
            self.type = type
        if update_date is not None:
            self.update_date = update_date

    @property
    def account_id(self):
        """Gets the account_id of this FundingTransaction.  # noqa: E501

        accountId  # noqa: E501

        :return: The account_id of this FundingTransaction.  # noqa: E501
        :rtype: str
        """
        return self._account_id

    @account_id.setter
    def account_id(self, account_id):
        """Sets the account_id of this FundingTransaction.

        accountId  # noqa: E501

        :param account_id: The account_id of this FundingTransaction.  # noqa: E501
        :type: str
        """

        self._account_id = account_id

    @property
    def amount(self):
        """Gets the amount of this FundingTransaction.  # noqa: E501

        amount  # noqa: E501

        :return: The amount of this FundingTransaction.  # noqa: E501
        :rtype: float
        """
        return self._amount

    @amount.setter
    def amount(self, amount):
        """Sets the amount of this FundingTransaction.

        amount  # noqa: E501

        :param amount: The amount of this FundingTransaction.  # noqa: E501
        :type: float
        """
        if self._configuration.client_side_validation and amount is None:
            raise ValueError("Invalid value for `amount`, must not be `None`")  # noqa: E501

        self._amount = amount

    @property
    def comments(self):
        """Gets the comments of this FundingTransaction.  # noqa: E501

        comments  # noqa: E501

        :return: The comments of this FundingTransaction.  # noqa: E501
        :rtype: str
        """
        return self._comments

    @comments.setter
    def comments(self, comments):
        """Sets the comments of this FundingTransaction.

        comments  # noqa: E501

        :param comments: The comments of this FundingTransaction.  # noqa: E501
        :type: str
        """

        self._comments = comments

    @property
    def create_date(self):
        """Gets the create_date of this FundingTransaction.  # noqa: E501


        :return: The create_date of this FundingTransaction.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this FundingTransaction.


        :param create_date: The create_date of this FundingTransaction.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def currency_code(self):
        """Gets the currency_code of this FundingTransaction.  # noqa: E501

        currency_code  # noqa: E501

        :return: The currency_code of this FundingTransaction.  # noqa: E501
        :rtype: str
        """
        return self._currency_code

    @currency_code.setter
    def currency_code(self, currency_code):
        """Sets the currency_code of this FundingTransaction.

        currency_code  # noqa: E501

        :param currency_code: The currency_code of this FundingTransaction.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and currency_code is None:
            raise ValueError("Invalid value for `currency_code`, must not be `None`")  # noqa: E501

        self._currency_code = currency_code

    @property
    def fees(self):
        """Gets the fees of this FundingTransaction.  # noqa: E501

        fees  # noqa: E501

        :return: The fees of this FundingTransaction.  # noqa: E501
        :rtype: float
        """
        return self._fees

    @fees.setter
    def fees(self, fees):
        """Sets the fees of this FundingTransaction.

        fees  # noqa: E501

        :param fees: The fees of this FundingTransaction.  # noqa: E501
        :type: float
        """

        self._fees = fees

    @property
    def funding_id(self):
        """Gets the funding_id of this FundingTransaction.  # noqa: E501

        fundingId  # noqa: E501

        :return: The funding_id of this FundingTransaction.  # noqa: E501
        :rtype: str
        """
        return self._funding_id

    @funding_id.setter
    def funding_id(self, funding_id):
        """Sets the funding_id of this FundingTransaction.

        fundingId  # noqa: E501

        :param funding_id: The funding_id of this FundingTransaction.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and funding_id is None:
            raise ValueError("Invalid value for `funding_id`, must not be `None`")  # noqa: E501

        self._funding_id = funding_id

    @property
    def id(self):
        """Gets the id of this FundingTransaction.  # noqa: E501


        :return: The id of this FundingTransaction.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this FundingTransaction.


        :param id: The id of this FundingTransaction.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def invested_date(self):
        """Gets the invested_date of this FundingTransaction.  # noqa: E501

        investedDate  # noqa: E501

        :return: The invested_date of this FundingTransaction.  # noqa: E501
        :rtype: datetime
        """
        return self._invested_date

    @invested_date.setter
    def invested_date(self, invested_date):
        """Sets the invested_date of this FundingTransaction.

        investedDate  # noqa: E501

        :param invested_date: The invested_date of this FundingTransaction.  # noqa: E501
        :type: datetime
        """

        self._invested_date = invested_date

    @property
    def is_deposit(self):
        """Gets the is_deposit of this FundingTransaction.  # noqa: E501

        is deposit  # noqa: E501

        :return: The is_deposit of this FundingTransaction.  # noqa: E501
        :rtype: bool
        """
        return self._is_deposit

    @is_deposit.setter
    def is_deposit(self, is_deposit):
        """Sets the is_deposit of this FundingTransaction.

        is deposit  # noqa: E501

        :param is_deposit: The is_deposit of this FundingTransaction.  # noqa: E501
        :type: bool
        """
        if self._configuration.client_side_validation and is_deposit is None:
            raise ValueError("Invalid value for `is_deposit`, must not be `None`")  # noqa: E501

        self._is_deposit = is_deposit

    @property
    def last_request_date(self):
        """Gets the last_request_date of this FundingTransaction.  # noqa: E501

        lastRequestDate  # noqa: E501

        :return: The last_request_date of this FundingTransaction.  # noqa: E501
        :rtype: datetime
        """
        return self._last_request_date

    @last_request_date.setter
    def last_request_date(self, last_request_date):
        """Sets the last_request_date of this FundingTransaction.

        lastRequestDate  # noqa: E501

        :param last_request_date: The last_request_date of this FundingTransaction.  # noqa: E501
        :type: datetime
        """

        self._last_request_date = last_request_date

    @property
    def metadata(self):
        """Gets the metadata of this FundingTransaction.  # noqa: E501


        :return: The metadata of this FundingTransaction.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this FundingTransaction.


        :param metadata: The metadata of this FundingTransaction.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def portfolio_id(self):
        """Gets the portfolio_id of this FundingTransaction.  # noqa: E501

        portfolio_id  # noqa: E501

        :return: The portfolio_id of this FundingTransaction.  # noqa: E501
        :rtype: str
        """
        return self._portfolio_id

    @portfolio_id.setter
    def portfolio_id(self, portfolio_id):
        """Sets the portfolio_id of this FundingTransaction.

        portfolio_id  # noqa: E501

        :param portfolio_id: The portfolio_id of this FundingTransaction.  # noqa: E501
        :type: str
        """

        self._portfolio_id = portfolio_id

    @property
    def portfolio_transaction_id(self):
        """Gets the portfolio_transaction_id of this FundingTransaction.  # noqa: E501

        portfolioTransactionId  # noqa: E501

        :return: The portfolio_transaction_id of this FundingTransaction.  # noqa: E501
        :rtype: str
        """
        return self._portfolio_transaction_id

    @portfolio_transaction_id.setter
    def portfolio_transaction_id(self, portfolio_transaction_id):
        """Sets the portfolio_transaction_id of this FundingTransaction.

        portfolioTransactionId  # noqa: E501

        :param portfolio_transaction_id: The portfolio_transaction_id of this FundingTransaction.  # noqa: E501
        :type: str
        """

        self._portfolio_transaction_id = portfolio_transaction_id

    @property
    def received_date(self):
        """Gets the received_date of this FundingTransaction.  # noqa: E501

        receivedDate  # noqa: E501

        :return: The received_date of this FundingTransaction.  # noqa: E501
        :rtype: datetime
        """
        return self._received_date

    @received_date.setter
    def received_date(self, received_date):
        """Sets the received_date of this FundingTransaction.

        receivedDate  # noqa: E501

        :param received_date: The received_date of this FundingTransaction.  # noqa: E501
        :type: datetime
        """

        self._received_date = received_date

    @property
    def secondary_id(self):
        """Gets the secondary_id of this FundingTransaction.  # noqa: E501


        :return: The secondary_id of this FundingTransaction.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this FundingTransaction.


        :param secondary_id: The secondary_id of this FundingTransaction.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def status(self):
        """Gets the status of this FundingTransaction.  # noqa: E501

        status  # noqa: E501

        :return: The status of this FundingTransaction.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this FundingTransaction.

        status  # noqa: E501

        :param status: The status of this FundingTransaction.  # noqa: E501
        :type: str
        """

        self._status = status

    @property
    def status_time_stamp(self):
        """Gets the status_time_stamp of this FundingTransaction.  # noqa: E501

        statusTimeStamp  # noqa: E501

        :return: The status_time_stamp of this FundingTransaction.  # noqa: E501
        :rtype: datetime
        """
        return self._status_time_stamp

    @status_time_stamp.setter
    def status_time_stamp(self, status_time_stamp):
        """Sets the status_time_stamp of this FundingTransaction.

        statusTimeStamp  # noqa: E501

        :param status_time_stamp: The status_time_stamp of this FundingTransaction.  # noqa: E501
        :type: datetime
        """

        self._status_time_stamp = status_time_stamp

    @property
    def type(self):
        """Gets the type of this FundingTransaction.  # noqa: E501

        type  # noqa: E501

        :return: The type of this FundingTransaction.  # noqa: E501
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this FundingTransaction.

        type  # noqa: E501

        :param type: The type of this FundingTransaction.  # noqa: E501
        :type: str
        """

        self._type = type

    @property
    def update_date(self):
        """Gets the update_date of this FundingTransaction.  # noqa: E501


        :return: The update_date of this FundingTransaction.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this FundingTransaction.


        :param update_date: The update_date of this FundingTransaction.  # noqa: E501
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
        if issubclass(FundingTransaction, dict):
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
        if not isinstance(other, FundingTransaction):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, FundingTransaction):
            return True

        return self.to_dict() != other.to_dict()
