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


class DailyDeposit(object):
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
        'account_number': 'str',
        'amount': 'float',
        'comments': 'str',
        'create_date': 'datetime',
        'currency_code': 'str',
        'direction': 'str',
        'funding_id': 'str',
        'id': 'str',
        'invested_date': 'datetime',
        'last_request_date': 'datetime',
        'metadata': 'dict(str, str)',
        'notes': 'str',
        'portfolio_id': 'str',
        'received_date': 'datetime',
        'secondary_id': 'str',
        'status': 'str',
        'status_time_stamp': 'datetime',
        'type': 'str',
        'update_date': 'datetime'
    }

    attribute_map = {
        'account_id': 'account_id',
        'account_number': 'account_number',
        'amount': 'amount',
        'comments': 'comments',
        'create_date': 'create_date',
        'currency_code': 'currency_code',
        'direction': 'direction',
        'funding_id': 'funding_id',
        'id': 'id',
        'invested_date': 'invested_date',
        'last_request_date': 'last_request_date',
        'metadata': 'metadata',
        'notes': 'notes',
        'portfolio_id': 'portfolio_id',
        'received_date': 'received_date',
        'secondary_id': 'secondary_id',
        'status': 'status',
        'status_time_stamp': 'status_time_stamp',
        'type': 'type',
        'update_date': 'update_date'
    }

    def __init__(self, account_id=None, account_number=None, amount=None, comments=None, create_date=None, currency_code=None, direction=None, funding_id=None, id=None, invested_date=None, last_request_date=None, metadata=None, notes=None, portfolio_id=None, received_date=None, secondary_id=None, status=None, status_time_stamp=None, type=None, update_date=None):  # noqa: E501
        """DailyDeposit - a model defined in Swagger"""  # noqa: E501

        self._account_id = None
        self._account_number = None
        self._amount = None
        self._comments = None
        self._create_date = None
        self._currency_code = None
        self._direction = None
        self._funding_id = None
        self._id = None
        self._invested_date = None
        self._last_request_date = None
        self._metadata = None
        self._notes = None
        self._portfolio_id = None
        self._received_date = None
        self._secondary_id = None
        self._status = None
        self._status_time_stamp = None
        self._type = None
        self._update_date = None
        self.discriminator = None

        self.account_id = account_id
        if account_number is not None:
            self.account_number = account_number
        self.amount = amount
        if comments is not None:
            self.comments = comments
        if create_date is not None:
            self.create_date = create_date
        if currency_code is not None:
            self.currency_code = currency_code
        if direction is not None:
            self.direction = direction
        self.funding_id = funding_id
        if id is not None:
            self.id = id
        if invested_date is not None:
            self.invested_date = invested_date
        if last_request_date is not None:
            self.last_request_date = last_request_date
        if metadata is not None:
            self.metadata = metadata
        if notes is not None:
            self.notes = notes
        if portfolio_id is not None:
            self.portfolio_id = portfolio_id
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
        """Gets the account_id of this DailyDeposit.  # noqa: E501

        accountId  # noqa: E501

        :return: The account_id of this DailyDeposit.  # noqa: E501
        :rtype: str
        """
        return self._account_id

    @account_id.setter
    def account_id(self, account_id):
        """Sets the account_id of this DailyDeposit.

        accountId  # noqa: E501

        :param account_id: The account_id of this DailyDeposit.  # noqa: E501
        :type: str
        """
        if account_id is None:
            raise ValueError("Invalid value for `account_id`, must not be `None`")  # noqa: E501

        self._account_id = account_id

    @property
    def account_number(self):
        """Gets the account_number of this DailyDeposit.  # noqa: E501

        accountNumber  # noqa: E501

        :return: The account_number of this DailyDeposit.  # noqa: E501
        :rtype: str
        """
        return self._account_number

    @account_number.setter
    def account_number(self, account_number):
        """Sets the account_number of this DailyDeposit.

        accountNumber  # noqa: E501

        :param account_number: The account_number of this DailyDeposit.  # noqa: E501
        :type: str
        """

        self._account_number = account_number

    @property
    def amount(self):
        """Gets the amount of this DailyDeposit.  # noqa: E501

        amount  # noqa: E501

        :return: The amount of this DailyDeposit.  # noqa: E501
        :rtype: float
        """
        return self._amount

    @amount.setter
    def amount(self, amount):
        """Sets the amount of this DailyDeposit.

        amount  # noqa: E501

        :param amount: The amount of this DailyDeposit.  # noqa: E501
        :type: float
        """
        if amount is None:
            raise ValueError("Invalid value for `amount`, must not be `None`")  # noqa: E501

        self._amount = amount

    @property
    def comments(self):
        """Gets the comments of this DailyDeposit.  # noqa: E501

        comments  # noqa: E501

        :return: The comments of this DailyDeposit.  # noqa: E501
        :rtype: str
        """
        return self._comments

    @comments.setter
    def comments(self, comments):
        """Sets the comments of this DailyDeposit.

        comments  # noqa: E501

        :param comments: The comments of this DailyDeposit.  # noqa: E501
        :type: str
        """

        self._comments = comments

    @property
    def create_date(self):
        """Gets the create_date of this DailyDeposit.  # noqa: E501


        :return: The create_date of this DailyDeposit.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this DailyDeposit.


        :param create_date: The create_date of this DailyDeposit.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def currency_code(self):
        """Gets the currency_code of this DailyDeposit.  # noqa: E501

        currencyCode  # noqa: E501

        :return: The currency_code of this DailyDeposit.  # noqa: E501
        :rtype: str
        """
        return self._currency_code

    @currency_code.setter
    def currency_code(self, currency_code):
        """Sets the currency_code of this DailyDeposit.

        currencyCode  # noqa: E501

        :param currency_code: The currency_code of this DailyDeposit.  # noqa: E501
        :type: str
        """

        self._currency_code = currency_code

    @property
    def direction(self):
        """Gets the direction of this DailyDeposit.  # noqa: E501

        direction  # noqa: E501

        :return: The direction of this DailyDeposit.  # noqa: E501
        :rtype: str
        """
        return self._direction

    @direction.setter
    def direction(self, direction):
        """Sets the direction of this DailyDeposit.

        direction  # noqa: E501

        :param direction: The direction of this DailyDeposit.  # noqa: E501
        :type: str
        """

        self._direction = direction

    @property
    def funding_id(self):
        """Gets the funding_id of this DailyDeposit.  # noqa: E501

        fundingId  # noqa: E501

        :return: The funding_id of this DailyDeposit.  # noqa: E501
        :rtype: str
        """
        return self._funding_id

    @funding_id.setter
    def funding_id(self, funding_id):
        """Sets the funding_id of this DailyDeposit.

        fundingId  # noqa: E501

        :param funding_id: The funding_id of this DailyDeposit.  # noqa: E501
        :type: str
        """
        if funding_id is None:
            raise ValueError("Invalid value for `funding_id`, must not be `None`")  # noqa: E501

        self._funding_id = funding_id

    @property
    def id(self):
        """Gets the id of this DailyDeposit.  # noqa: E501


        :return: The id of this DailyDeposit.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this DailyDeposit.


        :param id: The id of this DailyDeposit.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def invested_date(self):
        """Gets the invested_date of this DailyDeposit.  # noqa: E501

        investedDate  # noqa: E501

        :return: The invested_date of this DailyDeposit.  # noqa: E501
        :rtype: datetime
        """
        return self._invested_date

    @invested_date.setter
    def invested_date(self, invested_date):
        """Sets the invested_date of this DailyDeposit.

        investedDate  # noqa: E501

        :param invested_date: The invested_date of this DailyDeposit.  # noqa: E501
        :type: datetime
        """

        self._invested_date = invested_date

    @property
    def last_request_date(self):
        """Gets the last_request_date of this DailyDeposit.  # noqa: E501

        last_request_date  # noqa: E501

        :return: The last_request_date of this DailyDeposit.  # noqa: E501
        :rtype: datetime
        """
        return self._last_request_date

    @last_request_date.setter
    def last_request_date(self, last_request_date):
        """Sets the last_request_date of this DailyDeposit.

        last_request_date  # noqa: E501

        :param last_request_date: The last_request_date of this DailyDeposit.  # noqa: E501
        :type: datetime
        """

        self._last_request_date = last_request_date

    @property
    def metadata(self):
        """Gets the metadata of this DailyDeposit.  # noqa: E501


        :return: The metadata of this DailyDeposit.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this DailyDeposit.


        :param metadata: The metadata of this DailyDeposit.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def notes(self):
        """Gets the notes of this DailyDeposit.  # noqa: E501

        notes  # noqa: E501

        :return: The notes of this DailyDeposit.  # noqa: E501
        :rtype: str
        """
        return self._notes

    @notes.setter
    def notes(self, notes):
        """Sets the notes of this DailyDeposit.

        notes  # noqa: E501

        :param notes: The notes of this DailyDeposit.  # noqa: E501
        :type: str
        """

        self._notes = notes

    @property
    def portfolio_id(self):
        """Gets the portfolio_id of this DailyDeposit.  # noqa: E501

        portfolio_id  # noqa: E501

        :return: The portfolio_id of this DailyDeposit.  # noqa: E501
        :rtype: str
        """
        return self._portfolio_id

    @portfolio_id.setter
    def portfolio_id(self, portfolio_id):
        """Sets the portfolio_id of this DailyDeposit.

        portfolio_id  # noqa: E501

        :param portfolio_id: The portfolio_id of this DailyDeposit.  # noqa: E501
        :type: str
        """

        self._portfolio_id = portfolio_id

    @property
    def received_date(self):
        """Gets the received_date of this DailyDeposit.  # noqa: E501

        receivedDate  # noqa: E501

        :return: The received_date of this DailyDeposit.  # noqa: E501
        :rtype: datetime
        """
        return self._received_date

    @received_date.setter
    def received_date(self, received_date):
        """Sets the received_date of this DailyDeposit.

        receivedDate  # noqa: E501

        :param received_date: The received_date of this DailyDeposit.  # noqa: E501
        :type: datetime
        """

        self._received_date = received_date

    @property
    def secondary_id(self):
        """Gets the secondary_id of this DailyDeposit.  # noqa: E501


        :return: The secondary_id of this DailyDeposit.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this DailyDeposit.


        :param secondary_id: The secondary_id of this DailyDeposit.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def status(self):
        """Gets the status of this DailyDeposit.  # noqa: E501

        status  # noqa: E501

        :return: The status of this DailyDeposit.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this DailyDeposit.

        status  # noqa: E501

        :param status: The status of this DailyDeposit.  # noqa: E501
        :type: str
        """

        self._status = status

    @property
    def status_time_stamp(self):
        """Gets the status_time_stamp of this DailyDeposit.  # noqa: E501

        statusTimeStamp  # noqa: E501

        :return: The status_time_stamp of this DailyDeposit.  # noqa: E501
        :rtype: datetime
        """
        return self._status_time_stamp

    @status_time_stamp.setter
    def status_time_stamp(self, status_time_stamp):
        """Sets the status_time_stamp of this DailyDeposit.

        statusTimeStamp  # noqa: E501

        :param status_time_stamp: The status_time_stamp of this DailyDeposit.  # noqa: E501
        :type: datetime
        """

        self._status_time_stamp = status_time_stamp

    @property
    def type(self):
        """Gets the type of this DailyDeposit.  # noqa: E501

        type  # noqa: E501

        :return: The type of this DailyDeposit.  # noqa: E501
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this DailyDeposit.

        type  # noqa: E501

        :param type: The type of this DailyDeposit.  # noqa: E501
        :type: str
        """

        self._type = type

    @property
    def update_date(self):
        """Gets the update_date of this DailyDeposit.  # noqa: E501


        :return: The update_date of this DailyDeposit.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this DailyDeposit.


        :param update_date: The update_date of this DailyDeposit.  # noqa: E501
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
        if issubclass(DailyDeposit, dict):
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
        if not isinstance(other, DailyDeposit):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
