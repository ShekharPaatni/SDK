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

from atom_api.models.create_withdrawal_response import CreateWithdrawalResponse  # noqa: F401,E501
from atom_api.models.secondary_id import SecondaryId  # noqa: F401,E501


class SpecificWithdrawalResponse(object):
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
        'id': 'str',
        'create_date': 'str',
        'account_id': 'str',
        'amount': 'float',
        'funding_id': 'str',
        'withdrawal_date': 'str',
        'account_number': 'str',
        'comments': 'str',
        'direction': 'str',
        'fees': 'str',
        'last_request_date': 'str',
        'received_date': 'str',
        'status': 'str',
        'status_time_stamp': 'str',
        'type': 'str',
        'secondary_id': 'SecondaryId',
        'update_date': 'str'
    }

    attribute_map = {
        'id': 'id',
        'create_date': 'create_date',
        'account_id': 'account_id',
        'amount': 'amount',
        'funding_id': 'funding_id',
        'withdrawal_date': 'withdrawal_date',
        'account_number': 'account_number',
        'comments': 'comments',
        'direction': 'direction',
        'fees': 'fees',
        'last_request_date': 'last_request_date',
        'received_date': 'received_date',
        'status': 'status',
        'status_time_stamp': 'status_time_stamp',
        'type': 'type',
        'secondary_id': 'secondary_id',
        'update_date': 'update_date'
    }

    def __init__(self, id=None, create_date=None, account_id=None, amount=None, funding_id=None, withdrawal_date=None, account_number=None, comments=None, direction=None, fees=None, last_request_date=None, received_date=None, status=None, status_time_stamp=None, type=None, secondary_id=None, update_date=None):  # noqa: E501
        """SpecificWithdrawalResponse - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._create_date = None
        self._account_id = None
        self._amount = None
        self._funding_id = None
        self._withdrawal_date = None
        self._account_number = None
        self._comments = None
        self._direction = None
        self._fees = None
        self._last_request_date = None
        self._received_date = None
        self._status = None
        self._status_time_stamp = None
        self._type = None
        self._secondary_id = None
        self._update_date = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if create_date is not None:
            self.create_date = create_date
        self.account_id = account_id
        self.amount = amount
        self.funding_id = funding_id
        self.withdrawal_date = withdrawal_date
        if account_number is not None:
            self.account_number = account_number
        if comments is not None:
            self.comments = comments
        if direction is not None:
            self.direction = direction
        if fees is not None:
            self.fees = fees
        if last_request_date is not None:
            self.last_request_date = last_request_date
        if received_date is not None:
            self.received_date = received_date
        if status is not None:
            self.status = status
        if status_time_stamp is not None:
            self.status_time_stamp = status_time_stamp
        if type is not None:
            self.type = type
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if update_date is not None:
            self.update_date = update_date

    @property
    def id(self):
        """Gets the id of this SpecificWithdrawalResponse.  # noqa: E501

        ID of the withdrawal request  # noqa: E501

        :return: The id of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this SpecificWithdrawalResponse.

        ID of the withdrawal request  # noqa: E501

        :param id: The id of this SpecificWithdrawalResponse.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def create_date(self):
        """Gets the create_date of this SpecificWithdrawalResponse.  # noqa: E501

        Datetime of the withdrawal request  # noqa: E501

        :return: The create_date of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: str
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this SpecificWithdrawalResponse.

        Datetime of the withdrawal request  # noqa: E501

        :param create_date: The create_date of this SpecificWithdrawalResponse.  # noqa: E501
        :type: str
        """

        self._create_date = create_date

    @property
    def account_id(self):
        """Gets the account_id of this SpecificWithdrawalResponse.  # noqa: E501

        The ID for the account that is the destination of the withdrawal  # noqa: E501

        :return: The account_id of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: str
        """
        return self._account_id

    @account_id.setter
    def account_id(self, account_id):
        """Sets the account_id of this SpecificWithdrawalResponse.

        The ID for the account that is the destination of the withdrawal  # noqa: E501

        :param account_id: The account_id of this SpecificWithdrawalResponse.  # noqa: E501
        :type: str
        """
        if account_id is None:
            raise ValueError("Invalid value for `account_id`, must not be `None`")  # noqa: E501

        self._account_id = account_id

    @property
    def amount(self):
        """Gets the amount of this SpecificWithdrawalResponse.  # noqa: E501

        Amount that is being withdrawn from the account  # noqa: E501

        :return: The amount of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: float
        """
        return self._amount

    @amount.setter
    def amount(self, amount):
        """Sets the amount of this SpecificWithdrawalResponse.

        Amount that is being withdrawn from the account  # noqa: E501

        :param amount: The amount of this SpecificWithdrawalResponse.  # noqa: E501
        :type: float
        """
        if amount is None:
            raise ValueError("Invalid value for `amount`, must not be `None`")  # noqa: E501

        self._amount = amount

    @property
    def funding_id(self):
        """Gets the funding_id of this SpecificWithdrawalResponse.  # noqa: E501

        The ID of the funding record that maps to this withdrawal  # noqa: E501

        :return: The funding_id of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: str
        """
        return self._funding_id

    @funding_id.setter
    def funding_id(self, funding_id):
        """Sets the funding_id of this SpecificWithdrawalResponse.

        The ID of the funding record that maps to this withdrawal  # noqa: E501

        :param funding_id: The funding_id of this SpecificWithdrawalResponse.  # noqa: E501
        :type: str
        """
        if funding_id is None:
            raise ValueError("Invalid value for `funding_id`, must not be `None`")  # noqa: E501

        self._funding_id = funding_id

    @property
    def withdrawal_date(self):
        """Gets the withdrawal_date of this SpecificWithdrawalResponse.  # noqa: E501

        Date and time that the withdrawal was made  # noqa: E501

        :return: The withdrawal_date of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: str
        """
        return self._withdrawal_date

    @withdrawal_date.setter
    def withdrawal_date(self, withdrawal_date):
        """Sets the withdrawal_date of this SpecificWithdrawalResponse.

        Date and time that the withdrawal was made  # noqa: E501

        :param withdrawal_date: The withdrawal_date of this SpecificWithdrawalResponse.  # noqa: E501
        :type: str
        """
        if withdrawal_date is None:
            raise ValueError("Invalid value for `withdrawal_date`, must not be `None`")  # noqa: E501

        self._withdrawal_date = withdrawal_date

    @property
    def account_number(self):
        """Gets the account_number of this SpecificWithdrawalResponse.  # noqa: E501

        Bank account number that is the destination of the withdrawal  # noqa: E501

        :return: The account_number of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: str
        """
        return self._account_number

    @account_number.setter
    def account_number(self, account_number):
        """Sets the account_number of this SpecificWithdrawalResponse.

        Bank account number that is the destination of the withdrawal  # noqa: E501

        :param account_number: The account_number of this SpecificWithdrawalResponse.  # noqa: E501
        :type: str
        """

        self._account_number = account_number

    @property
    def comments(self):
        """Gets the comments of this SpecificWithdrawalResponse.  # noqa: E501

        Comment for the withdrawal such as “Funded”  # noqa: E501

        :return: The comments of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: str
        """
        return self._comments

    @comments.setter
    def comments(self, comments):
        """Sets the comments of this SpecificWithdrawalResponse.

        Comment for the withdrawal such as “Funded”  # noqa: E501

        :param comments: The comments of this SpecificWithdrawalResponse.  # noqa: E501
        :type: str
        """

        self._comments = comments

    @property
    def direction(self):
        """Gets the direction of this SpecificWithdrawalResponse.  # noqa: E501

        Label to indicate the direction of the transaction such as “Incoming” or “Outgoing”  # noqa: E501

        :return: The direction of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: str
        """
        return self._direction

    @direction.setter
    def direction(self, direction):
        """Sets the direction of this SpecificWithdrawalResponse.

        Label to indicate the direction of the transaction such as “Incoming” or “Outgoing”  # noqa: E501

        :param direction: The direction of this SpecificWithdrawalResponse.  # noqa: E501
        :type: str
        """

        self._direction = direction

    @property
    def fees(self):
        """Gets the fees of this SpecificWithdrawalResponse.  # noqa: E501

        Any fees associated with the withdrawal, especially for an investment account  # noqa: E501

        :return: The fees of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: str
        """
        return self._fees

    @fees.setter
    def fees(self, fees):
        """Sets the fees of this SpecificWithdrawalResponse.

        Any fees associated with the withdrawal, especially for an investment account  # noqa: E501

        :param fees: The fees of this SpecificWithdrawalResponse.  # noqa: E501
        :type: str
        """

        self._fees = fees

    @property
    def last_request_date(self):
        """Gets the last_request_date of this SpecificWithdrawalResponse.  # noqa: E501

        In the case of recurring withdrawals, the date and time that the withdrawal was last requested  # noqa: E501

        :return: The last_request_date of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: str
        """
        return self._last_request_date

    @last_request_date.setter
    def last_request_date(self, last_request_date):
        """Sets the last_request_date of this SpecificWithdrawalResponse.

        In the case of recurring withdrawals, the date and time that the withdrawal was last requested  # noqa: E501

        :param last_request_date: The last_request_date of this SpecificWithdrawalResponse.  # noqa: E501
        :type: str
        """

        self._last_request_date = last_request_date

    @property
    def received_date(self):
        """Gets the received_date of this SpecificWithdrawalResponse.  # noqa: E501

        Date and time that the withdrawal was received  # noqa: E501

        :return: The received_date of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: str
        """
        return self._received_date

    @received_date.setter
    def received_date(self, received_date):
        """Sets the received_date of this SpecificWithdrawalResponse.

        Date and time that the withdrawal was received  # noqa: E501

        :param received_date: The received_date of this SpecificWithdrawalResponse.  # noqa: E501
        :type: str
        """

        self._received_date = received_date

    @property
    def status(self):
        """Gets the status of this SpecificWithdrawalResponse.  # noqa: E501

        Status of the transaction such as “Processing”  # noqa: E501

        :return: The status of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this SpecificWithdrawalResponse.

        Status of the transaction such as “Processing”  # noqa: E501

        :param status: The status of this SpecificWithdrawalResponse.  # noqa: E501
        :type: str
        """

        self._status = status

    @property
    def status_time_stamp(self):
        """Gets the status_time_stamp of this SpecificWithdrawalResponse.  # noqa: E501

        Date and time that the status of the record was last updated  # noqa: E501

        :return: The status_time_stamp of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: str
        """
        return self._status_time_stamp

    @status_time_stamp.setter
    def status_time_stamp(self, status_time_stamp):
        """Sets the status_time_stamp of this SpecificWithdrawalResponse.

        Date and time that the status of the record was last updated  # noqa: E501

        :param status_time_stamp: The status_time_stamp of this SpecificWithdrawalResponse.  # noqa: E501
        :type: str
        """

        self._status_time_stamp = status_time_stamp

    @property
    def type(self):
        """Gets the type of this SpecificWithdrawalResponse.  # noqa: E501

        Indicates the payment type such as “check, “wire”, etc.  # noqa: E501

        :return: The type of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this SpecificWithdrawalResponse.

        Indicates the payment type such as “check, “wire”, etc.  # noqa: E501

        :param type: The type of this SpecificWithdrawalResponse.  # noqa: E501
        :type: str
        """

        self._type = type

    @property
    def secondary_id(self):
        """Gets the secondary_id of this SpecificWithdrawalResponse.  # noqa: E501


        :return: The secondary_id of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: SecondaryId
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this SpecificWithdrawalResponse.


        :param secondary_id: The secondary_id of this SpecificWithdrawalResponse.  # noqa: E501
        :type: SecondaryId
        """

        self._secondary_id = secondary_id

    @property
    def update_date(self):
        """Gets the update_date of this SpecificWithdrawalResponse.  # noqa: E501

        Datetime the withdrawal request was last updated  # noqa: E501

        :return: The update_date of this SpecificWithdrawalResponse.  # noqa: E501
        :rtype: str
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this SpecificWithdrawalResponse.

        Datetime the withdrawal request was last updated  # noqa: E501

        :param update_date: The update_date of this SpecificWithdrawalResponse.  # noqa: E501
        :type: str
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
        if issubclass(SpecificWithdrawalResponse, dict):
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
        if not isinstance(other, SpecificWithdrawalResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
