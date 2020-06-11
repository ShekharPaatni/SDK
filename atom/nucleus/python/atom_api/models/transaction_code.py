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


class TransactionCode(object):
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
        'category': 'str',
        'create_date': 'datetime',
        'id': 'str',
        'is_buy': 'bool',
        'metadata': 'dict(str, str)',
        'secondary_id': 'str',
        'subcategory': 'str',
        'transaction_code': 'str',
        'transaction_code_description': 'str',
        'transaction_type': 'str',
        'update_date': 'datetime'
    }

    attribute_map = {
        'category': 'category',
        'create_date': 'create_date',
        'id': 'id',
        'is_buy': 'is_buy',
        'metadata': 'metadata',
        'secondary_id': 'secondary_id',
        'subcategory': 'subcategory',
        'transaction_code': 'transaction_code',
        'transaction_code_description': 'transaction_code_description',
        'transaction_type': 'transaction_type',
        'update_date': 'update_date'
    }

    def __init__(self, category=None, create_date=None, id=None, is_buy=None, metadata=None, secondary_id=None, subcategory=None, transaction_code=None, transaction_code_description=None, transaction_type=None, update_date=None):  # noqa: E501
        """TransactionCode - a model defined in Swagger"""  # noqa: E501

        self._category = None
        self._create_date = None
        self._id = None
        self._is_buy = None
        self._metadata = None
        self._secondary_id = None
        self._subcategory = None
        self._transaction_code = None
        self._transaction_code_description = None
        self._transaction_type = None
        self._update_date = None
        self.discriminator = None

        if category is not None:
            self.category = category
        if create_date is not None:
            self.create_date = create_date
        if id is not None:
            self.id = id
        if is_buy is not None:
            self.is_buy = is_buy
        if metadata is not None:
            self.metadata = metadata
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if subcategory is not None:
            self.subcategory = subcategory
        self.transaction_code = transaction_code
        if transaction_code_description is not None:
            self.transaction_code_description = transaction_code_description
        if transaction_type is not None:
            self.transaction_type = transaction_type
        if update_date is not None:
            self.update_date = update_date

    @property
    def category(self):
        """Gets the category of this TransactionCode.  # noqa: E501

        category  # noqa: E501

        :return: The category of this TransactionCode.  # noqa: E501
        :rtype: str
        """
        return self._category

    @category.setter
    def category(self, category):
        """Sets the category of this TransactionCode.

        category  # noqa: E501

        :param category: The category of this TransactionCode.  # noqa: E501
        :type: str
        """

        self._category = category

    @property
    def create_date(self):
        """Gets the create_date of this TransactionCode.  # noqa: E501


        :return: The create_date of this TransactionCode.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this TransactionCode.


        :param create_date: The create_date of this TransactionCode.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def id(self):
        """Gets the id of this TransactionCode.  # noqa: E501


        :return: The id of this TransactionCode.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this TransactionCode.


        :param id: The id of this TransactionCode.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def is_buy(self):
        """Gets the is_buy of this TransactionCode.  # noqa: E501

        isBuy  # noqa: E501

        :return: The is_buy of this TransactionCode.  # noqa: E501
        :rtype: bool
        """
        return self._is_buy

    @is_buy.setter
    def is_buy(self, is_buy):
        """Sets the is_buy of this TransactionCode.

        isBuy  # noqa: E501

        :param is_buy: The is_buy of this TransactionCode.  # noqa: E501
        :type: bool
        """

        self._is_buy = is_buy

    @property
    def metadata(self):
        """Gets the metadata of this TransactionCode.  # noqa: E501


        :return: The metadata of this TransactionCode.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this TransactionCode.


        :param metadata: The metadata of this TransactionCode.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def secondary_id(self):
        """Gets the secondary_id of this TransactionCode.  # noqa: E501


        :return: The secondary_id of this TransactionCode.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this TransactionCode.


        :param secondary_id: The secondary_id of this TransactionCode.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def subcategory(self):
        """Gets the subcategory of this TransactionCode.  # noqa: E501

        subcategory  # noqa: E501

        :return: The subcategory of this TransactionCode.  # noqa: E501
        :rtype: str
        """
        return self._subcategory

    @subcategory.setter
    def subcategory(self, subcategory):
        """Sets the subcategory of this TransactionCode.

        subcategory  # noqa: E501

        :param subcategory: The subcategory of this TransactionCode.  # noqa: E501
        :type: str
        """

        self._subcategory = subcategory

    @property
    def transaction_code(self):
        """Gets the transaction_code of this TransactionCode.  # noqa: E501

        transactionCode  # noqa: E501

        :return: The transaction_code of this TransactionCode.  # noqa: E501
        :rtype: str
        """
        return self._transaction_code

    @transaction_code.setter
    def transaction_code(self, transaction_code):
        """Sets the transaction_code of this TransactionCode.

        transactionCode  # noqa: E501

        :param transaction_code: The transaction_code of this TransactionCode.  # noqa: E501
        :type: str
        """
        if transaction_code is None:
            raise ValueError("Invalid value for `transaction_code`, must not be `None`")  # noqa: E501

        self._transaction_code = transaction_code

    @property
    def transaction_code_description(self):
        """Gets the transaction_code_description of this TransactionCode.  # noqa: E501

        transactionCodeDescription  # noqa: E501

        :return: The transaction_code_description of this TransactionCode.  # noqa: E501
        :rtype: str
        """
        return self._transaction_code_description

    @transaction_code_description.setter
    def transaction_code_description(self, transaction_code_description):
        """Sets the transaction_code_description of this TransactionCode.

        transactionCodeDescription  # noqa: E501

        :param transaction_code_description: The transaction_code_description of this TransactionCode.  # noqa: E501
        :type: str
        """

        self._transaction_code_description = transaction_code_description

    @property
    def transaction_type(self):
        """Gets the transaction_type of this TransactionCode.  # noqa: E501

        transactionType  # noqa: E501

        :return: The transaction_type of this TransactionCode.  # noqa: E501
        :rtype: str
        """
        return self._transaction_type

    @transaction_type.setter
    def transaction_type(self, transaction_type):
        """Sets the transaction_type of this TransactionCode.

        transactionType  # noqa: E501

        :param transaction_type: The transaction_type of this TransactionCode.  # noqa: E501
        :type: str
        """

        self._transaction_type = transaction_type

    @property
    def update_date(self):
        """Gets the update_date of this TransactionCode.  # noqa: E501


        :return: The update_date of this TransactionCode.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this TransactionCode.


        :param update_date: The update_date of this TransactionCode.  # noqa: E501
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
        if issubclass(TransactionCode, dict):
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
        if not isinstance(other, TransactionCode):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
