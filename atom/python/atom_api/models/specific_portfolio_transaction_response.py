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

from atom_api.models.create_portfolio_transaction_response import CreatePortfolioTransactionResponse  # noqa: F401,E501
from atom_api.models.secondary_id import SecondaryId  # noqa: F401,E501


class SpecificPortfolioTransactionResponse(object):
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
        'portfolio_id': 'str',
        'security_id': 'str',
        'transaction_code_id': 'str',
        '_date': 'date',
        'is_read': 'bool',
        'price': 'float',
        'quantity': 'float',
        'secondary_id': 'SecondaryId',
        'update_date': 'str'
    }

    attribute_map = {
        'id': 'id',
        'create_date': 'create_date',
        'portfolio_id': 'portfolio_id',
        'security_id': 'security_id',
        'transaction_code_id': 'transaction_code_id',
        '_date': 'date',
        'is_read': 'is_read',
        'price': 'price',
        'quantity': 'quantity',
        'secondary_id': 'secondary_id',
        'update_date': 'update_date'
    }

    def __init__(self, id=None, create_date=None, portfolio_id=None, security_id=None, transaction_code_id=None, _date=None, is_read=False, price=None, quantity=None, secondary_id=None, update_date=None):  # noqa: E501
        """SpecificPortfolioTransactionResponse - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._create_date = None
        self._portfolio_id = None
        self._security_id = None
        self._transaction_code_id = None
        self.__date = None
        self._is_read = None
        self._price = None
        self._quantity = None
        self._secondary_id = None
        self._update_date = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if create_date is not None:
            self.create_date = create_date
        self.portfolio_id = portfolio_id
        self.security_id = security_id
        self.transaction_code_id = transaction_code_id
        self._date = _date
        if is_read is not None:
            self.is_read = is_read
        if price is not None:
            self.price = price
        if quantity is not None:
            self.quantity = quantity
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if update_date is not None:
            self.update_date = update_date

    @property
    def id(self):
        """Gets the id of this SpecificPortfolioTransactionResponse.  # noqa: E501

        ID of the portfolio transaction record  # noqa: E501

        :return: The id of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this SpecificPortfolioTransactionResponse.

        ID of the portfolio transaction record  # noqa: E501

        :param id: The id of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def create_date(self):
        """Gets the create_date of this SpecificPortfolioTransactionResponse.  # noqa: E501

        Datetime the portfolio transaction record was created  # noqa: E501

        :return: The create_date of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :rtype: str
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this SpecificPortfolioTransactionResponse.

        Datetime the portfolio transaction record was created  # noqa: E501

        :param create_date: The create_date of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :type: str
        """

        self._create_date = create_date

    @property
    def portfolio_id(self):
        """Gets the portfolio_id of this SpecificPortfolioTransactionResponse.  # noqa: E501

        The ID of the portfolio that the transaction record falls under  # noqa: E501

        :return: The portfolio_id of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :rtype: str
        """
        return self._portfolio_id

    @portfolio_id.setter
    def portfolio_id(self, portfolio_id):
        """Sets the portfolio_id of this SpecificPortfolioTransactionResponse.

        The ID of the portfolio that the transaction record falls under  # noqa: E501

        :param portfolio_id: The portfolio_id of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :type: str
        """
        if portfolio_id is None:
            raise ValueError("Invalid value for `portfolio_id`, must not be `None`")  # noqa: E501

        self._portfolio_id = portfolio_id

    @property
    def security_id(self):
        """Gets the security_id of this SpecificPortfolioTransactionResponse.  # noqa: E501

        The ID of the security that was bought or sold in the transaction  # noqa: E501

        :return: The security_id of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :rtype: str
        """
        return self._security_id

    @security_id.setter
    def security_id(self, security_id):
        """Sets the security_id of this SpecificPortfolioTransactionResponse.

        The ID of the security that was bought or sold in the transaction  # noqa: E501

        :param security_id: The security_id of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :type: str
        """
        if security_id is None:
            raise ValueError("Invalid value for `security_id`, must not be `None`")  # noqa: E501

        self._security_id = security_id

    @property
    def transaction_code_id(self):
        """Gets the transaction_code_id of this SpecificPortfolioTransactionResponse.  # noqa: E501

        The ID of the transaction code for the type of transaction  # noqa: E501

        :return: The transaction_code_id of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :rtype: str
        """
        return self._transaction_code_id

    @transaction_code_id.setter
    def transaction_code_id(self, transaction_code_id):
        """Sets the transaction_code_id of this SpecificPortfolioTransactionResponse.

        The ID of the transaction code for the type of transaction  # noqa: E501

        :param transaction_code_id: The transaction_code_id of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :type: str
        """
        if transaction_code_id is None:
            raise ValueError("Invalid value for `transaction_code_id`, must not be `None`")  # noqa: E501

        self._transaction_code_id = transaction_code_id

    @property
    def _date(self):
        """Gets the _date of this SpecificPortfolioTransactionResponse.  # noqa: E501

        Date for this transaction record  # noqa: E501

        :return: The _date of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :rtype: date
        """
        return self.__date

    @_date.setter
    def _date(self, _date):
        """Sets the _date of this SpecificPortfolioTransactionResponse.

        Date for this transaction record  # noqa: E501

        :param _date: The _date of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :type: date
        """
        if _date is None:
            raise ValueError("Invalid value for `_date`, must not be `None`")  # noqa: E501

        self.__date = _date

    @property
    def is_read(self):
        """Gets the is_read of this SpecificPortfolioTransactionResponse.  # noqa: E501

        Indicates if the transaction has been read. Defaults to false which indicates that it has not been read  # noqa: E501

        :return: The is_read of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :rtype: bool
        """
        return self._is_read

    @is_read.setter
    def is_read(self, is_read):
        """Sets the is_read of this SpecificPortfolioTransactionResponse.

        Indicates if the transaction has been read. Defaults to false which indicates that it has not been read  # noqa: E501

        :param is_read: The is_read of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :type: bool
        """

        self._is_read = is_read

    @property
    def price(self):
        """Gets the price of this SpecificPortfolioTransactionResponse.  # noqa: E501

        Price at which the security was bought or sold  # noqa: E501

        :return: The price of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :rtype: float
        """
        return self._price

    @price.setter
    def price(self, price):
        """Sets the price of this SpecificPortfolioTransactionResponse.

        Price at which the security was bought or sold  # noqa: E501

        :param price: The price of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :type: float
        """

        self._price = price

    @property
    def quantity(self):
        """Gets the quantity of this SpecificPortfolioTransactionResponse.  # noqa: E501

        Quantity of units of a security that were bought or sold  # noqa: E501

        :return: The quantity of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :rtype: float
        """
        return self._quantity

    @quantity.setter
    def quantity(self, quantity):
        """Sets the quantity of this SpecificPortfolioTransactionResponse.

        Quantity of units of a security that were bought or sold  # noqa: E501

        :param quantity: The quantity of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :type: float
        """

        self._quantity = quantity

    @property
    def secondary_id(self):
        """Gets the secondary_id of this SpecificPortfolioTransactionResponse.  # noqa: E501


        :return: The secondary_id of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :rtype: SecondaryId
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this SpecificPortfolioTransactionResponse.


        :param secondary_id: The secondary_id of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :type: SecondaryId
        """

        self._secondary_id = secondary_id

    @property
    def update_date(self):
        """Gets the update_date of this SpecificPortfolioTransactionResponse.  # noqa: E501

        Datetime the portfolio transaction record was last updated  # noqa: E501

        :return: The update_date of this SpecificPortfolioTransactionResponse.  # noqa: E501
        :rtype: str
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this SpecificPortfolioTransactionResponse.

        Datetime the portfolio transaction record was last updated  # noqa: E501

        :param update_date: The update_date of this SpecificPortfolioTransactionResponse.  # noqa: E501
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
        if issubclass(SpecificPortfolioTransactionResponse, dict):
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
        if not isinstance(other, SpecificPortfolioTransactionResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
