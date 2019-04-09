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

from atom_api.models.secondary_id import SecondaryId  # noqa: F401,E501


class ModelTransactionPayload(object):
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
        'shares': 'float',
        'price': 'float',
        '_date': 'date',
        'model_id': 'str',
        'security_id': 'str',
        'transaction_code_id': 'int',
        'secondary_id': 'SecondaryId'
    }

    attribute_map = {
        'shares': 'shares',
        'price': 'price',
        '_date': 'date',
        'model_id': 'model_id',
        'security_id': 'security_id',
        'transaction_code_id': 'transaction_code_id',
        'secondary_id': 'secondary_id'
    }

    def __init__(self, shares=None, price=None, _date=None, model_id=None, security_id=None, transaction_code_id=None, secondary_id=None):  # noqa: E501
        """ModelTransactionPayload - a model defined in Swagger"""  # noqa: E501

        self._shares = None
        self._price = None
        self.__date = None
        self._model_id = None
        self._security_id = None
        self._transaction_code_id = None
        self._secondary_id = None
        self.discriminator = None

        self.shares = shares
        self.price = price
        self._date = _date
        self.model_id = model_id
        self.security_id = security_id
        self.transaction_code_id = transaction_code_id
        if secondary_id is not None:
            self.secondary_id = secondary_id

    @property
    def shares(self):
        """Gets the shares of this ModelTransactionPayload.  # noqa: E501

        Number of shares of the security purchased as part of the transaction  # noqa: E501

        :return: The shares of this ModelTransactionPayload.  # noqa: E501
        :rtype: float
        """
        return self._shares

    @shares.setter
    def shares(self, shares):
        """Sets the shares of this ModelTransactionPayload.

        Number of shares of the security purchased as part of the transaction  # noqa: E501

        :param shares: The shares of this ModelTransactionPayload.  # noqa: E501
        :type: float
        """
        if shares is None:
            raise ValueError("Invalid value for `shares`, must not be `None`")  # noqa: E501

        self._shares = shares

    @property
    def price(self):
        """Gets the price of this ModelTransactionPayload.  # noqa: E501

        Security price at which the shares were purchased as part of the transaction  # noqa: E501

        :return: The price of this ModelTransactionPayload.  # noqa: E501
        :rtype: float
        """
        return self._price

    @price.setter
    def price(self, price):
        """Sets the price of this ModelTransactionPayload.

        Security price at which the shares were purchased as part of the transaction  # noqa: E501

        :param price: The price of this ModelTransactionPayload.  # noqa: E501
        :type: float
        """
        if price is None:
            raise ValueError("Invalid value for `price`, must not be `None`")  # noqa: E501

        self._price = price

    @property
    def _date(self):
        """Gets the _date of this ModelTransactionPayload.  # noqa: E501

        Date of the transaction  # noqa: E501

        :return: The _date of this ModelTransactionPayload.  # noqa: E501
        :rtype: date
        """
        return self.__date

    @_date.setter
    def _date(self, _date):
        """Sets the _date of this ModelTransactionPayload.

        Date of the transaction  # noqa: E501

        :param _date: The _date of this ModelTransactionPayload.  # noqa: E501
        :type: date
        """
        if _date is None:
            raise ValueError("Invalid value for `_date`, must not be `None`")  # noqa: E501

        self.__date = _date

    @property
    def model_id(self):
        """Gets the model_id of this ModelTransactionPayload.  # noqa: E501

        The ID of the model that the transaction record falls under  # noqa: E501

        :return: The model_id of this ModelTransactionPayload.  # noqa: E501
        :rtype: str
        """
        return self._model_id

    @model_id.setter
    def model_id(self, model_id):
        """Sets the model_id of this ModelTransactionPayload.

        The ID of the model that the transaction record falls under  # noqa: E501

        :param model_id: The model_id of this ModelTransactionPayload.  # noqa: E501
        :type: str
        """
        if model_id is None:
            raise ValueError("Invalid value for `model_id`, must not be `None`")  # noqa: E501

        self._model_id = model_id

    @property
    def security_id(self):
        """Gets the security_id of this ModelTransactionPayload.  # noqa: E501

        The ID of the security included in the transaction  # noqa: E501

        :return: The security_id of this ModelTransactionPayload.  # noqa: E501
        :rtype: str
        """
        return self._security_id

    @security_id.setter
    def security_id(self, security_id):
        """Sets the security_id of this ModelTransactionPayload.

        The ID of the security included in the transaction  # noqa: E501

        :param security_id: The security_id of this ModelTransactionPayload.  # noqa: E501
        :type: str
        """
        if security_id is None:
            raise ValueError("Invalid value for `security_id`, must not be `None`")  # noqa: E501

        self._security_id = security_id

    @property
    def transaction_code_id(self):
        """Gets the transaction_code_id of this ModelTransactionPayload.  # noqa: E501

        The ID referring to the transaction codes defined by your firm  # noqa: E501

        :return: The transaction_code_id of this ModelTransactionPayload.  # noqa: E501
        :rtype: int
        """
        return self._transaction_code_id

    @transaction_code_id.setter
    def transaction_code_id(self, transaction_code_id):
        """Sets the transaction_code_id of this ModelTransactionPayload.

        The ID referring to the transaction codes defined by your firm  # noqa: E501

        :param transaction_code_id: The transaction_code_id of this ModelTransactionPayload.  # noqa: E501
        :type: int
        """
        if transaction_code_id is None:
            raise ValueError("Invalid value for `transaction_code_id`, must not be `None`")  # noqa: E501

        self._transaction_code_id = transaction_code_id

    @property
    def secondary_id(self):
        """Gets the secondary_id of this ModelTransactionPayload.  # noqa: E501


        :return: The secondary_id of this ModelTransactionPayload.  # noqa: E501
        :rtype: SecondaryId
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this ModelTransactionPayload.


        :param secondary_id: The secondary_id of this ModelTransactionPayload.  # noqa: E501
        :type: SecondaryId
        """

        self._secondary_id = secondary_id

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
        if issubclass(ModelTransactionPayload, dict):
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
        if not isinstance(other, ModelTransactionPayload):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
