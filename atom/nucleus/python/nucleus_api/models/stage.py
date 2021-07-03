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


class Stage(object):
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
        'application_id': 'str',
        'category': 'str',
        'create_date': 'datetime',
        'description': 'str',
        'id': 'str',
        'is_account': 'bool',
        'is_active': 'bool',
        'is_business': 'bool',
        'is_client': 'bool',
        'is_closed': 'bool',
        'is_converted': 'bool',
        'is_verified': 'bool',
        'metadata': 'dict(str, str)',
        'name': 'str',
        'order_index': 'int',
        'secondary_id': 'str',
        'update_date': 'datetime'
    }

    attribute_map = {
        'application_id': 'application_id',
        'category': 'category',
        'create_date': 'create_date',
        'description': 'description',
        'id': 'id',
        'is_account': 'is_account',
        'is_active': 'is_active',
        'is_business': 'is_business',
        'is_client': 'is_client',
        'is_closed': 'is_closed',
        'is_converted': 'is_converted',
        'is_verified': 'is_verified',
        'metadata': 'metadata',
        'name': 'name',
        'order_index': 'order_index',
        'secondary_id': 'secondary_id',
        'update_date': 'update_date'
    }

    def __init__(self, application_id=None, category=None, create_date=None, description=None, id=None, is_account=None, is_active=None, is_business=None, is_client=None, is_closed=None, is_converted=None, is_verified=None, metadata=None, name=None, order_index=None, secondary_id=None, update_date=None, _configuration=None):  # noqa: E501
        """Stage - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._application_id = None
        self._category = None
        self._create_date = None
        self._description = None
        self._id = None
        self._is_account = None
        self._is_active = None
        self._is_business = None
        self._is_client = None
        self._is_closed = None
        self._is_converted = None
        self._is_verified = None
        self._metadata = None
        self._name = None
        self._order_index = None
        self._secondary_id = None
        self._update_date = None
        self.discriminator = None

        if application_id is not None:
            self.application_id = application_id
        if category is not None:
            self.category = category
        if create_date is not None:
            self.create_date = create_date
        if description is not None:
            self.description = description
        if id is not None:
            self.id = id
        if is_account is not None:
            self.is_account = is_account
        if is_active is not None:
            self.is_active = is_active
        if is_business is not None:
            self.is_business = is_business
        if is_client is not None:
            self.is_client = is_client
        if is_closed is not None:
            self.is_closed = is_closed
        if is_converted is not None:
            self.is_converted = is_converted
        if is_verified is not None:
            self.is_verified = is_verified
        if metadata is not None:
            self.metadata = metadata
        self.name = name
        if order_index is not None:
            self.order_index = order_index
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if update_date is not None:
            self.update_date = update_date

    @property
    def application_id(self):
        """Gets the application_id of this Stage.  # noqa: E501

        application_id  # noqa: E501

        :return: The application_id of this Stage.  # noqa: E501
        :rtype: str
        """
        return self._application_id

    @application_id.setter
    def application_id(self, application_id):
        """Sets the application_id of this Stage.

        application_id  # noqa: E501

        :param application_id: The application_id of this Stage.  # noqa: E501
        :type: str
        """

        self._application_id = application_id

    @property
    def category(self):
        """Gets the category of this Stage.  # noqa: E501

        category  # noqa: E501

        :return: The category of this Stage.  # noqa: E501
        :rtype: str
        """
        return self._category

    @category.setter
    def category(self, category):
        """Sets the category of this Stage.

        category  # noqa: E501

        :param category: The category of this Stage.  # noqa: E501
        :type: str
        """

        self._category = category

    @property
    def create_date(self):
        """Gets the create_date of this Stage.  # noqa: E501


        :return: The create_date of this Stage.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this Stage.


        :param create_date: The create_date of this Stage.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def description(self):
        """Gets the description of this Stage.  # noqa: E501

        description  # noqa: E501

        :return: The description of this Stage.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this Stage.

        description  # noqa: E501

        :param description: The description of this Stage.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def id(self):
        """Gets the id of this Stage.  # noqa: E501


        :return: The id of this Stage.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Stage.


        :param id: The id of this Stage.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def is_account(self):
        """Gets the is_account of this Stage.  # noqa: E501

        is_account  # noqa: E501

        :return: The is_account of this Stage.  # noqa: E501
        :rtype: bool
        """
        return self._is_account

    @is_account.setter
    def is_account(self, is_account):
        """Sets the is_account of this Stage.

        is_account  # noqa: E501

        :param is_account: The is_account of this Stage.  # noqa: E501
        :type: bool
        """

        self._is_account = is_account

    @property
    def is_active(self):
        """Gets the is_active of this Stage.  # noqa: E501

        is_active  # noqa: E501

        :return: The is_active of this Stage.  # noqa: E501
        :rtype: bool
        """
        return self._is_active

    @is_active.setter
    def is_active(self, is_active):
        """Sets the is_active of this Stage.

        is_active  # noqa: E501

        :param is_active: The is_active of this Stage.  # noqa: E501
        :type: bool
        """

        self._is_active = is_active

    @property
    def is_business(self):
        """Gets the is_business of this Stage.  # noqa: E501

        is_business  # noqa: E501

        :return: The is_business of this Stage.  # noqa: E501
        :rtype: bool
        """
        return self._is_business

    @is_business.setter
    def is_business(self, is_business):
        """Sets the is_business of this Stage.

        is_business  # noqa: E501

        :param is_business: The is_business of this Stage.  # noqa: E501
        :type: bool
        """

        self._is_business = is_business

    @property
    def is_client(self):
        """Gets the is_client of this Stage.  # noqa: E501

        is_client  # noqa: E501

        :return: The is_client of this Stage.  # noqa: E501
        :rtype: bool
        """
        return self._is_client

    @is_client.setter
    def is_client(self, is_client):
        """Sets the is_client of this Stage.

        is_client  # noqa: E501

        :param is_client: The is_client of this Stage.  # noqa: E501
        :type: bool
        """

        self._is_client = is_client

    @property
    def is_closed(self):
        """Gets the is_closed of this Stage.  # noqa: E501

        is_closed  # noqa: E501

        :return: The is_closed of this Stage.  # noqa: E501
        :rtype: bool
        """
        return self._is_closed

    @is_closed.setter
    def is_closed(self, is_closed):
        """Sets the is_closed of this Stage.

        is_closed  # noqa: E501

        :param is_closed: The is_closed of this Stage.  # noqa: E501
        :type: bool
        """

        self._is_closed = is_closed

    @property
    def is_converted(self):
        """Gets the is_converted of this Stage.  # noqa: E501

        is_converted  # noqa: E501

        :return: The is_converted of this Stage.  # noqa: E501
        :rtype: bool
        """
        return self._is_converted

    @is_converted.setter
    def is_converted(self, is_converted):
        """Sets the is_converted of this Stage.

        is_converted  # noqa: E501

        :param is_converted: The is_converted of this Stage.  # noqa: E501
        :type: bool
        """

        self._is_converted = is_converted

    @property
    def is_verified(self):
        """Gets the is_verified of this Stage.  # noqa: E501

        is_verified  # noqa: E501

        :return: The is_verified of this Stage.  # noqa: E501
        :rtype: bool
        """
        return self._is_verified

    @is_verified.setter
    def is_verified(self, is_verified):
        """Sets the is_verified of this Stage.

        is_verified  # noqa: E501

        :param is_verified: The is_verified of this Stage.  # noqa: E501
        :type: bool
        """

        self._is_verified = is_verified

    @property
    def metadata(self):
        """Gets the metadata of this Stage.  # noqa: E501


        :return: The metadata of this Stage.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this Stage.


        :param metadata: The metadata of this Stage.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def name(self):
        """Gets the name of this Stage.  # noqa: E501

        name  # noqa: E501

        :return: The name of this Stage.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this Stage.

        name  # noqa: E501

        :param name: The name of this Stage.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and name is None:
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def order_index(self):
        """Gets the order_index of this Stage.  # noqa: E501

        orderIndex  # noqa: E501

        :return: The order_index of this Stage.  # noqa: E501
        :rtype: int
        """
        return self._order_index

    @order_index.setter
    def order_index(self, order_index):
        """Sets the order_index of this Stage.

        orderIndex  # noqa: E501

        :param order_index: The order_index of this Stage.  # noqa: E501
        :type: int
        """

        self._order_index = order_index

    @property
    def secondary_id(self):
        """Gets the secondary_id of this Stage.  # noqa: E501


        :return: The secondary_id of this Stage.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this Stage.


        :param secondary_id: The secondary_id of this Stage.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def update_date(self):
        """Gets the update_date of this Stage.  # noqa: E501


        :return: The update_date of this Stage.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this Stage.


        :param update_date: The update_date of this Stage.  # noqa: E501
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
        if issubclass(Stage, dict):
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
        if not isinstance(other, Stage):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Stage):
            return True

        return self.to_dict() != other.to_dict()
