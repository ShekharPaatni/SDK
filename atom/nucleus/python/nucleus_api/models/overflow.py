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


class Overflow(object):
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
        'client_id': 'str',
        'create_date': 'datetime',
        'funding_requests': 'list[FundingRequestMap]',
        'id': 'str',
        'overflow_setting_id': 'str',
        'total_overflow_amount': 'float',
        'update_balances': 'bool',
        'update_date': 'datetime'
    }

    attribute_map = {
        'account_id': 'account_id',
        'client_id': 'client_id',
        'create_date': 'create_date',
        'funding_requests': 'funding_requests',
        'id': 'id',
        'overflow_setting_id': 'overflow_setting_id',
        'total_overflow_amount': 'total_overflow_amount',
        'update_balances': 'update_balances',
        'update_date': 'update_date'
    }

    def __init__(self, account_id=None, client_id=None, create_date=None, funding_requests=None, id=None, overflow_setting_id=None, total_overflow_amount=None, update_balances=None, update_date=None, _configuration=None):  # noqa: E501
        """Overflow - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._account_id = None
        self._client_id = None
        self._create_date = None
        self._funding_requests = None
        self._id = None
        self._overflow_setting_id = None
        self._total_overflow_amount = None
        self._update_balances = None
        self._update_date = None
        self.discriminator = None

        self.account_id = account_id
        self.client_id = client_id
        if create_date is not None:
            self.create_date = create_date
        if funding_requests is not None:
            self.funding_requests = funding_requests
        if id is not None:
            self.id = id
        self.overflow_setting_id = overflow_setting_id
        self.total_overflow_amount = total_overflow_amount
        if update_balances is not None:
            self.update_balances = update_balances
        if update_date is not None:
            self.update_date = update_date

    @property
    def account_id(self):
        """Gets the account_id of this Overflow.  # noqa: E501

        accountId  # noqa: E501

        :return: The account_id of this Overflow.  # noqa: E501
        :rtype: str
        """
        return self._account_id

    @account_id.setter
    def account_id(self, account_id):
        """Sets the account_id of this Overflow.

        accountId  # noqa: E501

        :param account_id: The account_id of this Overflow.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and account_id is None:
            raise ValueError("Invalid value for `account_id`, must not be `None`")  # noqa: E501

        self._account_id = account_id

    @property
    def client_id(self):
        """Gets the client_id of this Overflow.  # noqa: E501

        clientId  # noqa: E501

        :return: The client_id of this Overflow.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this Overflow.

        clientId  # noqa: E501

        :param client_id: The client_id of this Overflow.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and client_id is None:
            raise ValueError("Invalid value for `client_id`, must not be `None`")  # noqa: E501

        self._client_id = client_id

    @property
    def create_date(self):
        """Gets the create_date of this Overflow.  # noqa: E501


        :return: The create_date of this Overflow.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this Overflow.


        :param create_date: The create_date of this Overflow.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def funding_requests(self):
        """Gets the funding_requests of this Overflow.  # noqa: E501


        :return: The funding_requests of this Overflow.  # noqa: E501
        :rtype: list[FundingRequestMap]
        """
        return self._funding_requests

    @funding_requests.setter
    def funding_requests(self, funding_requests):
        """Sets the funding_requests of this Overflow.


        :param funding_requests: The funding_requests of this Overflow.  # noqa: E501
        :type: list[FundingRequestMap]
        """

        self._funding_requests = funding_requests

    @property
    def id(self):
        """Gets the id of this Overflow.  # noqa: E501


        :return: The id of this Overflow.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Overflow.


        :param id: The id of this Overflow.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def overflow_setting_id(self):
        """Gets the overflow_setting_id of this Overflow.  # noqa: E501

        overflowSettingId  # noqa: E501

        :return: The overflow_setting_id of this Overflow.  # noqa: E501
        :rtype: str
        """
        return self._overflow_setting_id

    @overflow_setting_id.setter
    def overflow_setting_id(self, overflow_setting_id):
        """Sets the overflow_setting_id of this Overflow.

        overflowSettingId  # noqa: E501

        :param overflow_setting_id: The overflow_setting_id of this Overflow.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and overflow_setting_id is None:
            raise ValueError("Invalid value for `overflow_setting_id`, must not be `None`")  # noqa: E501

        self._overflow_setting_id = overflow_setting_id

    @property
    def total_overflow_amount(self):
        """Gets the total_overflow_amount of this Overflow.  # noqa: E501

        totalOverflowAmount  # noqa: E501

        :return: The total_overflow_amount of this Overflow.  # noqa: E501
        :rtype: float
        """
        return self._total_overflow_amount

    @total_overflow_amount.setter
    def total_overflow_amount(self, total_overflow_amount):
        """Sets the total_overflow_amount of this Overflow.

        totalOverflowAmount  # noqa: E501

        :param total_overflow_amount: The total_overflow_amount of this Overflow.  # noqa: E501
        :type: float
        """
        if self._configuration.client_side_validation and total_overflow_amount is None:
            raise ValueError("Invalid value for `total_overflow_amount`, must not be `None`")  # noqa: E501

        self._total_overflow_amount = total_overflow_amount

    @property
    def update_balances(self):
        """Gets the update_balances of this Overflow.  # noqa: E501

        updateBalances  # noqa: E501

        :return: The update_balances of this Overflow.  # noqa: E501
        :rtype: bool
        """
        return self._update_balances

    @update_balances.setter
    def update_balances(self, update_balances):
        """Sets the update_balances of this Overflow.

        updateBalances  # noqa: E501

        :param update_balances: The update_balances of this Overflow.  # noqa: E501
        :type: bool
        """

        self._update_balances = update_balances

    @property
    def update_date(self):
        """Gets the update_date of this Overflow.  # noqa: E501


        :return: The update_date of this Overflow.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this Overflow.


        :param update_date: The update_date of this Overflow.  # noqa: E501
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
        if issubclass(Overflow, dict):
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
        if not isinstance(other, Overflow):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Overflow):
            return True

        return self.to_dict() != other.to_dict()
