# coding: utf-8

"""
    Hydrogen Integration API

    The Hydrogen Integration API  # noqa: E501

    OpenAPI spec version: 1.3.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from integration_api.configuration import Configuration


class IavRequestCO(object):
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
        'auth_token': 'str',
        'is_cash': 'bool',
        'nucleus_account_id': 'str',
        'nucleus_business_id': 'str',
        'nucleus_client_id': 'str',
        'nucleus_transfer_fields': 'NucleusTransferFieldsCO',
        'product': 'str',
        'vendor_request': 'IavVendorRequestCO'
    }

    attribute_map = {
        'auth_token': 'auth_token',
        'is_cash': 'is_cash',
        'nucleus_account_id': 'nucleus_account_id',
        'nucleus_business_id': 'nucleus_business_id',
        'nucleus_client_id': 'nucleus_client_id',
        'nucleus_transfer_fields': 'nucleus_transfer_fields',
        'product': 'product',
        'vendor_request': 'vendor_request'
    }

    def __init__(self, auth_token=None, is_cash=None, nucleus_account_id=None, nucleus_business_id=None, nucleus_client_id=None, nucleus_transfer_fields=None, product=None, vendor_request=None, _configuration=None):  # noqa: E501
        """IavRequestCO - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._auth_token = None
        self._is_cash = None
        self._nucleus_account_id = None
        self._nucleus_business_id = None
        self._nucleus_client_id = None
        self._nucleus_transfer_fields = None
        self._product = None
        self._vendor_request = None
        self.discriminator = None

        if auth_token is not None:
            self.auth_token = auth_token
        if is_cash is not None:
            self.is_cash = is_cash
        if nucleus_account_id is not None:
            self.nucleus_account_id = nucleus_account_id
        if nucleus_business_id is not None:
            self.nucleus_business_id = nucleus_business_id
        if nucleus_client_id is not None:
            self.nucleus_client_id = nucleus_client_id
        if nucleus_transfer_fields is not None:
            self.nucleus_transfer_fields = nucleus_transfer_fields
        if product is not None:
            self.product = product
        if vendor_request is not None:
            self.vendor_request = vendor_request

    @property
    def auth_token(self):
        """Gets the auth_token of this IavRequestCO.  # noqa: E501


        :return: The auth_token of this IavRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._auth_token

    @auth_token.setter
    def auth_token(self, auth_token):
        """Sets the auth_token of this IavRequestCO.


        :param auth_token: The auth_token of this IavRequestCO.  # noqa: E501
        :type: str
        """

        self._auth_token = auth_token

    @property
    def is_cash(self):
        """Gets the is_cash of this IavRequestCO.  # noqa: E501


        :return: The is_cash of this IavRequestCO.  # noqa: E501
        :rtype: bool
        """
        return self._is_cash

    @is_cash.setter
    def is_cash(self, is_cash):
        """Sets the is_cash of this IavRequestCO.


        :param is_cash: The is_cash of this IavRequestCO.  # noqa: E501
        :type: bool
        """

        self._is_cash = is_cash

    @property
    def nucleus_account_id(self):
        """Gets the nucleus_account_id of this IavRequestCO.  # noqa: E501


        :return: The nucleus_account_id of this IavRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_account_id

    @nucleus_account_id.setter
    def nucleus_account_id(self, nucleus_account_id):
        """Sets the nucleus_account_id of this IavRequestCO.


        :param nucleus_account_id: The nucleus_account_id of this IavRequestCO.  # noqa: E501
        :type: str
        """

        self._nucleus_account_id = nucleus_account_id

    @property
    def nucleus_business_id(self):
        """Gets the nucleus_business_id of this IavRequestCO.  # noqa: E501


        :return: The nucleus_business_id of this IavRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_business_id

    @nucleus_business_id.setter
    def nucleus_business_id(self, nucleus_business_id):
        """Sets the nucleus_business_id of this IavRequestCO.


        :param nucleus_business_id: The nucleus_business_id of this IavRequestCO.  # noqa: E501
        :type: str
        """

        self._nucleus_business_id = nucleus_business_id

    @property
    def nucleus_client_id(self):
        """Gets the nucleus_client_id of this IavRequestCO.  # noqa: E501


        :return: The nucleus_client_id of this IavRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_client_id

    @nucleus_client_id.setter
    def nucleus_client_id(self, nucleus_client_id):
        """Sets the nucleus_client_id of this IavRequestCO.


        :param nucleus_client_id: The nucleus_client_id of this IavRequestCO.  # noqa: E501
        :type: str
        """

        self._nucleus_client_id = nucleus_client_id

    @property
    def nucleus_transfer_fields(self):
        """Gets the nucleus_transfer_fields of this IavRequestCO.  # noqa: E501


        :return: The nucleus_transfer_fields of this IavRequestCO.  # noqa: E501
        :rtype: NucleusTransferFieldsCO
        """
        return self._nucleus_transfer_fields

    @nucleus_transfer_fields.setter
    def nucleus_transfer_fields(self, nucleus_transfer_fields):
        """Sets the nucleus_transfer_fields of this IavRequestCO.


        :param nucleus_transfer_fields: The nucleus_transfer_fields of this IavRequestCO.  # noqa: E501
        :type: NucleusTransferFieldsCO
        """

        self._nucleus_transfer_fields = nucleus_transfer_fields

    @property
    def product(self):
        """Gets the product of this IavRequestCO.  # noqa: E501


        :return: The product of this IavRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._product

    @product.setter
    def product(self, product):
        """Sets the product of this IavRequestCO.


        :param product: The product of this IavRequestCO.  # noqa: E501
        :type: str
        """

        self._product = product

    @property
    def vendor_request(self):
        """Gets the vendor_request of this IavRequestCO.  # noqa: E501


        :return: The vendor_request of this IavRequestCO.  # noqa: E501
        :rtype: IavVendorRequestCO
        """
        return self._vendor_request

    @vendor_request.setter
    def vendor_request(self, vendor_request):
        """Sets the vendor_request of this IavRequestCO.


        :param vendor_request: The vendor_request of this IavRequestCO.  # noqa: E501
        :type: IavVendorRequestCO
        """

        self._vendor_request = vendor_request

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
        if issubclass(IavRequestCO, dict):
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
        if not isinstance(other, IavRequestCO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, IavRequestCO):
            return True

        return self.to_dict() != other.to_dict()
