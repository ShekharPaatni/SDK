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


class AdminClient(object):
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
        'authorities': 'str',
        'create_date': 'datetime',
        'id': 'int',
        'is_2fa': 'bool',
        'is_2fa_verified': 'bool',
        'is_account_non_expired': 'bool',
        'is_account_non_locked': 'bool',
        'is_credentials_non_expired': 'bool',
        'is_enabled': 'bool',
        'password': 'str',
        'tenant': 'str',
        'update_date': 'datetime',
        'username': 'str'
    }

    attribute_map = {
        'authorities': 'authorities',
        'create_date': 'create_date',
        'id': 'id',
        'is_2fa': 'is_2fa',
        'is_2fa_verified': 'is_2fa_verified',
        'is_account_non_expired': 'is_account_non_expired',
        'is_account_non_locked': 'is_account_non_locked',
        'is_credentials_non_expired': 'is_credentials_non_expired',
        'is_enabled': 'is_enabled',
        'password': 'password',
        'tenant': 'tenant',
        'update_date': 'update_date',
        'username': 'username'
    }

    def __init__(self, authorities=None, create_date=None, id=None, is_2fa=None, is_2fa_verified=None, is_account_non_expired=None, is_account_non_locked=None, is_credentials_non_expired=None, is_enabled=None, password=None, tenant=None, update_date=None, username=None, _configuration=None):  # noqa: E501
        """AdminClient - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._authorities = None
        self._create_date = None
        self._id = None
        self._is_2fa = None
        self._is_2fa_verified = None
        self._is_account_non_expired = None
        self._is_account_non_locked = None
        self._is_credentials_non_expired = None
        self._is_enabled = None
        self._password = None
        self._tenant = None
        self._update_date = None
        self._username = None
        self.discriminator = None

        if authorities is not None:
            self.authorities = authorities
        if create_date is not None:
            self.create_date = create_date
        if id is not None:
            self.id = id
        if is_2fa is not None:
            self.is_2fa = is_2fa
        if is_2fa_verified is not None:
            self.is_2fa_verified = is_2fa_verified
        if is_account_non_expired is not None:
            self.is_account_non_expired = is_account_non_expired
        if is_account_non_locked is not None:
            self.is_account_non_locked = is_account_non_locked
        if is_credentials_non_expired is not None:
            self.is_credentials_non_expired = is_credentials_non_expired
        if is_enabled is not None:
            self.is_enabled = is_enabled
        if password is not None:
            self.password = password
        if tenant is not None:
            self.tenant = tenant
        if update_date is not None:
            self.update_date = update_date
        if username is not None:
            self.username = username

    @property
    def authorities(self):
        """Gets the authorities of this AdminClient.  # noqa: E501


        :return: The authorities of this AdminClient.  # noqa: E501
        :rtype: str
        """
        return self._authorities

    @authorities.setter
    def authorities(self, authorities):
        """Sets the authorities of this AdminClient.


        :param authorities: The authorities of this AdminClient.  # noqa: E501
        :type: str
        """

        self._authorities = authorities

    @property
    def create_date(self):
        """Gets the create_date of this AdminClient.  # noqa: E501


        :return: The create_date of this AdminClient.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this AdminClient.


        :param create_date: The create_date of this AdminClient.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def id(self):
        """Gets the id of this AdminClient.  # noqa: E501


        :return: The id of this AdminClient.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this AdminClient.


        :param id: The id of this AdminClient.  # noqa: E501
        :type: int
        """

        self._id = id

    @property
    def is_2fa(self):
        """Gets the is_2fa of this AdminClient.  # noqa: E501


        :return: The is_2fa of this AdminClient.  # noqa: E501
        :rtype: bool
        """
        return self._is_2fa

    @is_2fa.setter
    def is_2fa(self, is_2fa):
        """Sets the is_2fa of this AdminClient.


        :param is_2fa: The is_2fa of this AdminClient.  # noqa: E501
        :type: bool
        """

        self._is_2fa = is_2fa

    @property
    def is_2fa_verified(self):
        """Gets the is_2fa_verified of this AdminClient.  # noqa: E501


        :return: The is_2fa_verified of this AdminClient.  # noqa: E501
        :rtype: bool
        """
        return self._is_2fa_verified

    @is_2fa_verified.setter
    def is_2fa_verified(self, is_2fa_verified):
        """Sets the is_2fa_verified of this AdminClient.


        :param is_2fa_verified: The is_2fa_verified of this AdminClient.  # noqa: E501
        :type: bool
        """

        self._is_2fa_verified = is_2fa_verified

    @property
    def is_account_non_expired(self):
        """Gets the is_account_non_expired of this AdminClient.  # noqa: E501


        :return: The is_account_non_expired of this AdminClient.  # noqa: E501
        :rtype: bool
        """
        return self._is_account_non_expired

    @is_account_non_expired.setter
    def is_account_non_expired(self, is_account_non_expired):
        """Sets the is_account_non_expired of this AdminClient.


        :param is_account_non_expired: The is_account_non_expired of this AdminClient.  # noqa: E501
        :type: bool
        """

        self._is_account_non_expired = is_account_non_expired

    @property
    def is_account_non_locked(self):
        """Gets the is_account_non_locked of this AdminClient.  # noqa: E501


        :return: The is_account_non_locked of this AdminClient.  # noqa: E501
        :rtype: bool
        """
        return self._is_account_non_locked

    @is_account_non_locked.setter
    def is_account_non_locked(self, is_account_non_locked):
        """Sets the is_account_non_locked of this AdminClient.


        :param is_account_non_locked: The is_account_non_locked of this AdminClient.  # noqa: E501
        :type: bool
        """

        self._is_account_non_locked = is_account_non_locked

    @property
    def is_credentials_non_expired(self):
        """Gets the is_credentials_non_expired of this AdminClient.  # noqa: E501


        :return: The is_credentials_non_expired of this AdminClient.  # noqa: E501
        :rtype: bool
        """
        return self._is_credentials_non_expired

    @is_credentials_non_expired.setter
    def is_credentials_non_expired(self, is_credentials_non_expired):
        """Sets the is_credentials_non_expired of this AdminClient.


        :param is_credentials_non_expired: The is_credentials_non_expired of this AdminClient.  # noqa: E501
        :type: bool
        """

        self._is_credentials_non_expired = is_credentials_non_expired

    @property
    def is_enabled(self):
        """Gets the is_enabled of this AdminClient.  # noqa: E501


        :return: The is_enabled of this AdminClient.  # noqa: E501
        :rtype: bool
        """
        return self._is_enabled

    @is_enabled.setter
    def is_enabled(self, is_enabled):
        """Sets the is_enabled of this AdminClient.


        :param is_enabled: The is_enabled of this AdminClient.  # noqa: E501
        :type: bool
        """

        self._is_enabled = is_enabled

    @property
    def password(self):
        """Gets the password of this AdminClient.  # noqa: E501


        :return: The password of this AdminClient.  # noqa: E501
        :rtype: str
        """
        return self._password

    @password.setter
    def password(self, password):
        """Sets the password of this AdminClient.


        :param password: The password of this AdminClient.  # noqa: E501
        :type: str
        """

        self._password = password

    @property
    def tenant(self):
        """Gets the tenant of this AdminClient.  # noqa: E501


        :return: The tenant of this AdminClient.  # noqa: E501
        :rtype: str
        """
        return self._tenant

    @tenant.setter
    def tenant(self, tenant):
        """Sets the tenant of this AdminClient.


        :param tenant: The tenant of this AdminClient.  # noqa: E501
        :type: str
        """

        self._tenant = tenant

    @property
    def update_date(self):
        """Gets the update_date of this AdminClient.  # noqa: E501


        :return: The update_date of this AdminClient.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this AdminClient.


        :param update_date: The update_date of this AdminClient.  # noqa: E501
        :type: datetime
        """

        self._update_date = update_date

    @property
    def username(self):
        """Gets the username of this AdminClient.  # noqa: E501


        :return: The username of this AdminClient.  # noqa: E501
        :rtype: str
        """
        return self._username

    @username.setter
    def username(self, username):
        """Sets the username of this AdminClient.


        :param username: The username of this AdminClient.  # noqa: E501
        :type: str
        """

        self._username = username

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
        if issubclass(AdminClient, dict):
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
        if not isinstance(other, AdminClient):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, AdminClient):
            return True

        return self.to_dict() != other.to_dict()
