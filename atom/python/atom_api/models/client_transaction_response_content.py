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


class ClientTransactionResponseContent(object):
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
        '_date': 'date',
        'is_read': 'bool',
        'portfolio_id': 'str',
        'model_id': 'str',
        'price': 'int',
        'quantity': 'int',
        'security_id': 'str',
        'transaction_code_id': 'str',
        'secondary_id': 'str',
        'create_date': 'str',
        'update_date': 'str'
    }

    attribute_map = {
        'id': 'id',
        '_date': 'date',
        'is_read': 'is_read',
        'portfolio_id': 'portfolio_id',
        'model_id': 'model_id',
        'price': 'price',
        'quantity': 'quantity',
        'security_id': 'security_id',
        'transaction_code_id': 'transaction_code_id',
        'secondary_id': 'secondary_id',
        'create_date': 'create_date',
        'update_date': 'update_date'
    }

    def __init__(self, id=None, _date=None, is_read=None, portfolio_id=None, model_id=None, price=None, quantity=None, security_id=None, transaction_code_id=None, secondary_id=None, create_date=None, update_date=None):  # noqa: E501
        """ClientTransactionResponseContent - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self.__date = None
        self._is_read = None
        self._portfolio_id = None
        self._model_id = None
        self._price = None
        self._quantity = None
        self._security_id = None
        self._transaction_code_id = None
        self._secondary_id = None
        self._create_date = None
        self._update_date = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if _date is not None:
            self._date = _date
        if is_read is not None:
            self.is_read = is_read
        if portfolio_id is not None:
            self.portfolio_id = portfolio_id
        if model_id is not None:
            self.model_id = model_id
        if price is not None:
            self.price = price
        if quantity is not None:
            self.quantity = quantity
        if security_id is not None:
            self.security_id = security_id
        if transaction_code_id is not None:
            self.transaction_code_id = transaction_code_id
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if create_date is not None:
            self.create_date = create_date
        if update_date is not None:
            self.update_date = update_date

    @property
    def id(self):
        """Gets the id of this ClientTransactionResponseContent.  # noqa: E501

        The ID for the transaction record  # noqa: E501

        :return: The id of this ClientTransactionResponseContent.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this ClientTransactionResponseContent.

        The ID for the transaction record  # noqa: E501

        :param id: The id of this ClientTransactionResponseContent.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def _date(self):
        """Gets the _date of this ClientTransactionResponseContent.  # noqa: E501

        Date of the transaction record  # noqa: E501

        :return: The _date of this ClientTransactionResponseContent.  # noqa: E501
        :rtype: date
        """
        return self.__date

    @_date.setter
    def _date(self, _date):
        """Sets the _date of this ClientTransactionResponseContent.

        Date of the transaction record  # noqa: E501

        :param _date: The _date of this ClientTransactionResponseContent.  # noqa: E501
        :type: date
        """

        self.__date = _date

    @property
    def is_read(self):
        """Gets the is_read of this ClientTransactionResponseContent.  # noqa: E501

        Indicates if the transaction has been read. Defaults to false which indicates it has not been read  # noqa: E501

        :return: The is_read of this ClientTransactionResponseContent.  # noqa: E501
        :rtype: bool
        """
        return self._is_read

    @is_read.setter
    def is_read(self, is_read):
        """Sets the is_read of this ClientTransactionResponseContent.

        Indicates if the transaction has been read. Defaults to false which indicates it has not been read  # noqa: E501

        :param is_read: The is_read of this ClientTransactionResponseContent.  # noqa: E501
        :type: bool
        """

        self._is_read = is_read

    @property
    def portfolio_id(self):
        """Gets the portfolio_id of this ClientTransactionResponseContent.  # noqa: E501

        The ID of the portfolio that the transaction falls under  # noqa: E501

        :return: The portfolio_id of this ClientTransactionResponseContent.  # noqa: E501
        :rtype: str
        """
        return self._portfolio_id

    @portfolio_id.setter
    def portfolio_id(self, portfolio_id):
        """Sets the portfolio_id of this ClientTransactionResponseContent.

        The ID of the portfolio that the transaction falls under  # noqa: E501

        :param portfolio_id: The portfolio_id of this ClientTransactionResponseContent.  # noqa: E501
        :type: str
        """

        self._portfolio_id = portfolio_id

    @property
    def model_id(self):
        """Gets the model_id of this ClientTransactionResponseContent.  # noqa: E501

        Model to which the portfolio that the transaction falls under subscribes  # noqa: E501

        :return: The model_id of this ClientTransactionResponseContent.  # noqa: E501
        :rtype: str
        """
        return self._model_id

    @model_id.setter
    def model_id(self, model_id):
        """Sets the model_id of this ClientTransactionResponseContent.

        Model to which the portfolio that the transaction falls under subscribes  # noqa: E501

        :param model_id: The model_id of this ClientTransactionResponseContent.  # noqa: E501
        :type: str
        """

        self._model_id = model_id

    @property
    def price(self):
        """Gets the price of this ClientTransactionResponseContent.  # noqa: E501

        Price for the security included in the transaction at which it was sold or purchased  # noqa: E501

        :return: The price of this ClientTransactionResponseContent.  # noqa: E501
        :rtype: int
        """
        return self._price

    @price.setter
    def price(self, price):
        """Sets the price of this ClientTransactionResponseContent.

        Price for the security included in the transaction at which it was sold or purchased  # noqa: E501

        :param price: The price of this ClientTransactionResponseContent.  # noqa: E501
        :type: int
        """

        self._price = price

    @property
    def quantity(self):
        """Gets the quantity of this ClientTransactionResponseContent.  # noqa: E501

        Quantity of shares of the security purchased  # noqa: E501

        :return: The quantity of this ClientTransactionResponseContent.  # noqa: E501
        :rtype: int
        """
        return self._quantity

    @quantity.setter
    def quantity(self, quantity):
        """Sets the quantity of this ClientTransactionResponseContent.

        Quantity of shares of the security purchased  # noqa: E501

        :param quantity: The quantity of this ClientTransactionResponseContent.  # noqa: E501
        :type: int
        """

        self._quantity = quantity

    @property
    def security_id(self):
        """Gets the security_id of this ClientTransactionResponseContent.  # noqa: E501

        The ID of the security included in the transaction  # noqa: E501

        :return: The security_id of this ClientTransactionResponseContent.  # noqa: E501
        :rtype: str
        """
        return self._security_id

    @security_id.setter
    def security_id(self, security_id):
        """Sets the security_id of this ClientTransactionResponseContent.

        The ID of the security included in the transaction  # noqa: E501

        :param security_id: The security_id of this ClientTransactionResponseContent.  # noqa: E501
        :type: str
        """

        self._security_id = security_id

    @property
    def transaction_code_id(self):
        """Gets the transaction_code_id of this ClientTransactionResponseContent.  # noqa: E501

        The ID referring to the transaction codes defined by your firm  # noqa: E501

        :return: The transaction_code_id of this ClientTransactionResponseContent.  # noqa: E501
        :rtype: str
        """
        return self._transaction_code_id

    @transaction_code_id.setter
    def transaction_code_id(self, transaction_code_id):
        """Sets the transaction_code_id of this ClientTransactionResponseContent.

        The ID referring to the transaction codes defined by your firm  # noqa: E501

        :param transaction_code_id: The transaction_code_id of this ClientTransactionResponseContent.  # noqa: E501
        :type: str
        """

        self._transaction_code_id = transaction_code_id

    @property
    def secondary_id(self):
        """Gets the secondary_id of this ClientTransactionResponseContent.  # noqa: E501

        Alternate ID that can be used to identify the object such as an internal id  # noqa: E501

        :return: The secondary_id of this ClientTransactionResponseContent.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this ClientTransactionResponseContent.

        Alternate ID that can be used to identify the object such as an internal id  # noqa: E501

        :param secondary_id: The secondary_id of this ClientTransactionResponseContent.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def create_date(self):
        """Gets the create_date of this ClientTransactionResponseContent.  # noqa: E501

        Timestamp for the date and time that the record was created  # noqa: E501

        :return: The create_date of this ClientTransactionResponseContent.  # noqa: E501
        :rtype: str
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this ClientTransactionResponseContent.

        Timestamp for the date and time that the record was created  # noqa: E501

        :param create_date: The create_date of this ClientTransactionResponseContent.  # noqa: E501
        :type: str
        """

        self._create_date = create_date

    @property
    def update_date(self):
        """Gets the update_date of this ClientTransactionResponseContent.  # noqa: E501

        Timestamp for the date and time that the record was last updated  # noqa: E501

        :return: The update_date of this ClientTransactionResponseContent.  # noqa: E501
        :rtype: str
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this ClientTransactionResponseContent.

        Timestamp for the date and time that the record was last updated  # noqa: E501

        :param update_date: The update_date of this ClientTransactionResponseContent.  # noqa: E501
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
        if issubclass(ClientTransactionResponseContent, dict):
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
        if not isinstance(other, ClientTransactionResponseContent):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
