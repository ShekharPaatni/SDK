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


class Roundup(object):
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
        'roundup_setting_id': 'str',
        'total_roundup_amount': 'float',
        'update_date': 'datetime'
    }

    attribute_map = {
        'account_id': 'account_id',
        'client_id': 'client_id',
        'create_date': 'create_date',
        'funding_requests': 'funding_requests',
        'id': 'id',
        'roundup_setting_id': 'roundup_setting_id',
        'total_roundup_amount': 'total_roundup_amount',
        'update_date': 'update_date'
    }

    def __init__(self, account_id=None, client_id=None, create_date=None, funding_requests=None, id=None, roundup_setting_id=None, total_roundup_amount=None, update_date=None, _configuration=None):  # noqa: E501
        """Roundup - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._account_id = None
        self._client_id = None
        self._create_date = None
        self._funding_requests = None
        self._id = None
        self._roundup_setting_id = None
        self._total_roundup_amount = None
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
        self.roundup_setting_id = roundup_setting_id
        if total_roundup_amount is not None:
            self.total_roundup_amount = total_roundup_amount
        if update_date is not None:
            self.update_date = update_date

    @property
    def account_id(self):
        """Gets the account_id of this Roundup.  # noqa: E501

        account_id  # noqa: E501

        :return: The account_id of this Roundup.  # noqa: E501
        :rtype: str
        """
        return self._account_id

    @account_id.setter
    def account_id(self, account_id):
        """Sets the account_id of this Roundup.

        account_id  # noqa: E501

        :param account_id: The account_id of this Roundup.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and account_id is None:
            raise ValueError("Invalid value for `account_id`, must not be `None`")  # noqa: E501

        self._account_id = account_id

    @property
    def client_id(self):
        """Gets the client_id of this Roundup.  # noqa: E501

        client_id  # noqa: E501

        :return: The client_id of this Roundup.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this Roundup.

        client_id  # noqa: E501

        :param client_id: The client_id of this Roundup.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and client_id is None:
            raise ValueError("Invalid value for `client_id`, must not be `None`")  # noqa: E501

        self._client_id = client_id

    @property
    def create_date(self):
        """Gets the create_date of this Roundup.  # noqa: E501


        :return: The create_date of this Roundup.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this Roundup.


        :param create_date: The create_date of this Roundup.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def funding_requests(self):
        """Gets the funding_requests of this Roundup.  # noqa: E501


        :return: The funding_requests of this Roundup.  # noqa: E501
        :rtype: list[FundingRequestMap]
        """
        return self._funding_requests

    @funding_requests.setter
    def funding_requests(self, funding_requests):
        """Sets the funding_requests of this Roundup.


        :param funding_requests: The funding_requests of this Roundup.  # noqa: E501
        :type: list[FundingRequestMap]
        """

        self._funding_requests = funding_requests

    @property
    def id(self):
        """Gets the id of this Roundup.  # noqa: E501


        :return: The id of this Roundup.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Roundup.


        :param id: The id of this Roundup.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def roundup_setting_id(self):
        """Gets the roundup_setting_id of this Roundup.  # noqa: E501

        roundup_setting_id  # noqa: E501

        :return: The roundup_setting_id of this Roundup.  # noqa: E501
        :rtype: str
        """
        return self._roundup_setting_id

    @roundup_setting_id.setter
    def roundup_setting_id(self, roundup_setting_id):
        """Sets the roundup_setting_id of this Roundup.

        roundup_setting_id  # noqa: E501

        :param roundup_setting_id: The roundup_setting_id of this Roundup.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and roundup_setting_id is None:
            raise ValueError("Invalid value for `roundup_setting_id`, must not be `None`")  # noqa: E501

        self._roundup_setting_id = roundup_setting_id

    @property
    def total_roundup_amount(self):
        """Gets the total_roundup_amount of this Roundup.  # noqa: E501

        totalRoundupAmount  # noqa: E501

        :return: The total_roundup_amount of this Roundup.  # noqa: E501
        :rtype: float
        """
        return self._total_roundup_amount

    @total_roundup_amount.setter
    def total_roundup_amount(self, total_roundup_amount):
        """Sets the total_roundup_amount of this Roundup.

        totalRoundupAmount  # noqa: E501

        :param total_roundup_amount: The total_roundup_amount of this Roundup.  # noqa: E501
        :type: float
        """

        self._total_roundup_amount = total_roundup_amount

    @property
    def update_date(self):
        """Gets the update_date of this Roundup.  # noqa: E501


        :return: The update_date of this Roundup.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this Roundup.


        :param update_date: The update_date of this Roundup.  # noqa: E501
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
        if issubclass(Roundup, dict):
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
        if not isinstance(other, Roundup):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Roundup):
            return True

        return self.to_dict() != other.to_dict()
