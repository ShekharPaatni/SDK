# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from nucleus_api.configuration import Configuration


class Account(object):
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
        'account_number': 'str',
        'account_type_id': 'str',
        'clients': 'list[ClientAccountMapping]',
        'create_date': 'datetime',
        'currency_code': 'str',
        'discretionary': 'bool',
        'goals': 'list[GoalAccountMapping]',
        'id': 'str',
        'is_active': 'bool',
        'managed': 'bool',
        'metadata': 'dict(str, str)',
        'name': 'str',
        'secondary_id': 'str',
        'status': 'str',
        'update_date': 'datetime'
    }

    attribute_map = {
        'account_number': 'account_number',
        'account_type_id': 'account_type_id',
        'clients': 'clients',
        'create_date': 'create_date',
        'currency_code': 'currency_code',
        'discretionary': 'discretionary',
        'goals': 'goals',
        'id': 'id',
        'is_active': 'is_active',
        'managed': 'managed',
        'metadata': 'metadata',
        'name': 'name',
        'secondary_id': 'secondary_id',
        'status': 'status',
        'update_date': 'update_date'
    }

    def __init__(self, account_number=None, account_type_id=None, clients=None, create_date=None, currency_code=None, discretionary=None, goals=None, id=None, is_active=None, managed=None, metadata=None, name=None, secondary_id=None, status=None, update_date=None, _configuration=None):  # noqa: E501
        """Account - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._account_number = None
        self._account_type_id = None
        self._clients = None
        self._create_date = None
        self._currency_code = None
        self._discretionary = None
        self._goals = None
        self._id = None
        self._is_active = None
        self._managed = None
        self._metadata = None
        self._name = None
        self._secondary_id = None
        self._status = None
        self._update_date = None
        self.discriminator = None

        if account_number is not None:
            self.account_number = account_number
        self.account_type_id = account_type_id
        if clients is not None:
            self.clients = clients
        if create_date is not None:
            self.create_date = create_date
        if currency_code is not None:
            self.currency_code = currency_code
        if discretionary is not None:
            self.discretionary = discretionary
        if goals is not None:
            self.goals = goals
        if id is not None:
            self.id = id
        if is_active is not None:
            self.is_active = is_active
        if managed is not None:
            self.managed = managed
        if metadata is not None:
            self.metadata = metadata
        self.name = name
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if status is not None:
            self.status = status
        if update_date is not None:
            self.update_date = update_date

    @property
    def account_number(self):
        """Gets the account_number of this Account.  # noqa: E501

        accountNumber  # noqa: E501

        :return: The account_number of this Account.  # noqa: E501
        :rtype: str
        """
        return self._account_number

    @account_number.setter
    def account_number(self, account_number):
        """Sets the account_number of this Account.

        accountNumber  # noqa: E501

        :param account_number: The account_number of this Account.  # noqa: E501
        :type: str
        """

        self._account_number = account_number

    @property
    def account_type_id(self):
        """Gets the account_type_id of this Account.  # noqa: E501

        accountTypeId  # noqa: E501

        :return: The account_type_id of this Account.  # noqa: E501
        :rtype: str
        """
        return self._account_type_id

    @account_type_id.setter
    def account_type_id(self, account_type_id):
        """Sets the account_type_id of this Account.

        accountTypeId  # noqa: E501

        :param account_type_id: The account_type_id of this Account.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and account_type_id is None:
            raise ValueError("Invalid value for `account_type_id`, must not be `None`")  # noqa: E501

        self._account_type_id = account_type_id

    @property
    def clients(self):
        """Gets the clients of this Account.  # noqa: E501


        :return: The clients of this Account.  # noqa: E501
        :rtype: list[ClientAccountMapping]
        """
        return self._clients

    @clients.setter
    def clients(self, clients):
        """Sets the clients of this Account.


        :param clients: The clients of this Account.  # noqa: E501
        :type: list[ClientAccountMapping]
        """

        self._clients = clients

    @property
    def create_date(self):
        """Gets the create_date of this Account.  # noqa: E501


        :return: The create_date of this Account.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this Account.


        :param create_date: The create_date of this Account.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def currency_code(self):
        """Gets the currency_code of this Account.  # noqa: E501

        currencyCode  # noqa: E501

        :return: The currency_code of this Account.  # noqa: E501
        :rtype: str
        """
        return self._currency_code

    @currency_code.setter
    def currency_code(self, currency_code):
        """Sets the currency_code of this Account.

        currencyCode  # noqa: E501

        :param currency_code: The currency_code of this Account.  # noqa: E501
        :type: str
        """

        self._currency_code = currency_code

    @property
    def discretionary(self):
        """Gets the discretionary of this Account.  # noqa: E501

        discretionary  # noqa: E501

        :return: The discretionary of this Account.  # noqa: E501
        :rtype: bool
        """
        return self._discretionary

    @discretionary.setter
    def discretionary(self, discretionary):
        """Sets the discretionary of this Account.

        discretionary  # noqa: E501

        :param discretionary: The discretionary of this Account.  # noqa: E501
        :type: bool
        """

        self._discretionary = discretionary

    @property
    def goals(self):
        """Gets the goals of this Account.  # noqa: E501


        :return: The goals of this Account.  # noqa: E501
        :rtype: list[GoalAccountMapping]
        """
        return self._goals

    @goals.setter
    def goals(self, goals):
        """Sets the goals of this Account.


        :param goals: The goals of this Account.  # noqa: E501
        :type: list[GoalAccountMapping]
        """

        self._goals = goals

    @property
    def id(self):
        """Gets the id of this Account.  # noqa: E501


        :return: The id of this Account.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Account.


        :param id: The id of this Account.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def is_active(self):
        """Gets the is_active of this Account.  # noqa: E501

        isActive  # noqa: E501

        :return: The is_active of this Account.  # noqa: E501
        :rtype: bool
        """
        return self._is_active

    @is_active.setter
    def is_active(self, is_active):
        """Sets the is_active of this Account.

        isActive  # noqa: E501

        :param is_active: The is_active of this Account.  # noqa: E501
        :type: bool
        """

        self._is_active = is_active

    @property
    def managed(self):
        """Gets the managed of this Account.  # noqa: E501

        managed  # noqa: E501

        :return: The managed of this Account.  # noqa: E501
        :rtype: bool
        """
        return self._managed

    @managed.setter
    def managed(self, managed):
        """Sets the managed of this Account.

        managed  # noqa: E501

        :param managed: The managed of this Account.  # noqa: E501
        :type: bool
        """

        self._managed = managed

    @property
    def metadata(self):
        """Gets the metadata of this Account.  # noqa: E501


        :return: The metadata of this Account.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this Account.


        :param metadata: The metadata of this Account.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def name(self):
        """Gets the name of this Account.  # noqa: E501

        name  # noqa: E501

        :return: The name of this Account.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this Account.

        name  # noqa: E501

        :param name: The name of this Account.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and name is None:
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def secondary_id(self):
        """Gets the secondary_id of this Account.  # noqa: E501


        :return: The secondary_id of this Account.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this Account.


        :param secondary_id: The secondary_id of this Account.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def status(self):
        """Gets the status of this Account.  # noqa: E501

        status  # noqa: E501

        :return: The status of this Account.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this Account.

        status  # noqa: E501

        :param status: The status of this Account.  # noqa: E501
        :type: str
        """

        self._status = status

    @property
    def update_date(self):
        """Gets the update_date of this Account.  # noqa: E501


        :return: The update_date of this Account.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this Account.


        :param update_date: The update_date of this Account.  # noqa: E501
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
        if issubclass(Account, dict):
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
        if not isinstance(other, Account):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Account):
            return True

        return self.to_dict() != other.to_dict()
