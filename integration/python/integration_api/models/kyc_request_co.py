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


class KycRequestCO(object):
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
        'doc_type': 'str',
        'kyc_type': 'str',
        'metadata': 'list[Mapstringobject]',
        'nucleus_business_id': 'str',
        'nucleus_client_id': 'str',
        'nucleus_document_id': 'str',
        'product': 'str',
        'vendor_request': 'object'
    }

    attribute_map = {
        'auth_token': 'auth_token',
        'doc_type': 'doc_type',
        'kyc_type': 'kyc_type',
        'metadata': 'metadata',
        'nucleus_business_id': 'nucleus_business_id',
        'nucleus_client_id': 'nucleus_client_id',
        'nucleus_document_id': 'nucleus_document_id',
        'product': 'product',
        'vendor_request': 'vendor_request'
    }

    def __init__(self, auth_token=None, doc_type=None, kyc_type=None, metadata=None, nucleus_business_id=None, nucleus_client_id=None, nucleus_document_id=None, product=None, vendor_request=None, _configuration=None):  # noqa: E501
        """KycRequestCO - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._auth_token = None
        self._doc_type = None
        self._kyc_type = None
        self._metadata = None
        self._nucleus_business_id = None
        self._nucleus_client_id = None
        self._nucleus_document_id = None
        self._product = None
        self._vendor_request = None
        self.discriminator = None

        if auth_token is not None:
            self.auth_token = auth_token
        if doc_type is not None:
            self.doc_type = doc_type
        if kyc_type is not None:
            self.kyc_type = kyc_type
        if metadata is not None:
            self.metadata = metadata
        if nucleus_business_id is not None:
            self.nucleus_business_id = nucleus_business_id
        if nucleus_client_id is not None:
            self.nucleus_client_id = nucleus_client_id
        if nucleus_document_id is not None:
            self.nucleus_document_id = nucleus_document_id
        if product is not None:
            self.product = product
        if vendor_request is not None:
            self.vendor_request = vendor_request

    @property
    def auth_token(self):
        """Gets the auth_token of this KycRequestCO.  # noqa: E501


        :return: The auth_token of this KycRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._auth_token

    @auth_token.setter
    def auth_token(self, auth_token):
        """Sets the auth_token of this KycRequestCO.


        :param auth_token: The auth_token of this KycRequestCO.  # noqa: E501
        :type: str
        """

        self._auth_token = auth_token

    @property
    def doc_type(self):
        """Gets the doc_type of this KycRequestCO.  # noqa: E501


        :return: The doc_type of this KycRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._doc_type

    @doc_type.setter
    def doc_type(self, doc_type):
        """Sets the doc_type of this KycRequestCO.


        :param doc_type: The doc_type of this KycRequestCO.  # noqa: E501
        :type: str
        """

        self._doc_type = doc_type

    @property
    def kyc_type(self):
        """Gets the kyc_type of this KycRequestCO.  # noqa: E501


        :return: The kyc_type of this KycRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._kyc_type

    @kyc_type.setter
    def kyc_type(self, kyc_type):
        """Sets the kyc_type of this KycRequestCO.


        :param kyc_type: The kyc_type of this KycRequestCO.  # noqa: E501
        :type: str
        """

        self._kyc_type = kyc_type

    @property
    def metadata(self):
        """Gets the metadata of this KycRequestCO.  # noqa: E501


        :return: The metadata of this KycRequestCO.  # noqa: E501
        :rtype: list[Mapstringobject]
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this KycRequestCO.


        :param metadata: The metadata of this KycRequestCO.  # noqa: E501
        :type: list[Mapstringobject]
        """

        self._metadata = metadata

    @property
    def nucleus_business_id(self):
        """Gets the nucleus_business_id of this KycRequestCO.  # noqa: E501


        :return: The nucleus_business_id of this KycRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_business_id

    @nucleus_business_id.setter
    def nucleus_business_id(self, nucleus_business_id):
        """Sets the nucleus_business_id of this KycRequestCO.


        :param nucleus_business_id: The nucleus_business_id of this KycRequestCO.  # noqa: E501
        :type: str
        """

        self._nucleus_business_id = nucleus_business_id

    @property
    def nucleus_client_id(self):
        """Gets the nucleus_client_id of this KycRequestCO.  # noqa: E501


        :return: The nucleus_client_id of this KycRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_client_id

    @nucleus_client_id.setter
    def nucleus_client_id(self, nucleus_client_id):
        """Sets the nucleus_client_id of this KycRequestCO.


        :param nucleus_client_id: The nucleus_client_id of this KycRequestCO.  # noqa: E501
        :type: str
        """

        self._nucleus_client_id = nucleus_client_id

    @property
    def nucleus_document_id(self):
        """Gets the nucleus_document_id of this KycRequestCO.  # noqa: E501


        :return: The nucleus_document_id of this KycRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_document_id

    @nucleus_document_id.setter
    def nucleus_document_id(self, nucleus_document_id):
        """Sets the nucleus_document_id of this KycRequestCO.


        :param nucleus_document_id: The nucleus_document_id of this KycRequestCO.  # noqa: E501
        :type: str
        """

        self._nucleus_document_id = nucleus_document_id

    @property
    def product(self):
        """Gets the product of this KycRequestCO.  # noqa: E501


        :return: The product of this KycRequestCO.  # noqa: E501
        :rtype: str
        """
        return self._product

    @product.setter
    def product(self, product):
        """Sets the product of this KycRequestCO.


        :param product: The product of this KycRequestCO.  # noqa: E501
        :type: str
        """

        self._product = product

    @property
    def vendor_request(self):
        """Gets the vendor_request of this KycRequestCO.  # noqa: E501


        :return: The vendor_request of this KycRequestCO.  # noqa: E501
        :rtype: object
        """
        return self._vendor_request

    @vendor_request.setter
    def vendor_request(self, vendor_request):
        """Sets the vendor_request of this KycRequestCO.


        :param vendor_request: The vendor_request of this KycRequestCO.  # noqa: E501
        :type: object
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
        if issubclass(KycRequestCO, dict):
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
        if not isinstance(other, KycRequestCO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, KycRequestCO):
            return True

        return self.to_dict() != other.to_dict()
