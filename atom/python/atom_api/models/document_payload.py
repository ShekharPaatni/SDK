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


class DocumentPayload(object):
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
        'doc_size': 'int',
        'doc_name': 'str',
        'doc_type': 'str',
        'doc_file': 'str',
        'url_path': 'str',
        'client_id': 'str',
        'account_id': 'str',
        'metadata': 'object',
        'secondary_id': 'SecondaryId'
    }

    attribute_map = {
        'doc_size': 'doc_size',
        'doc_name': 'doc_name',
        'doc_type': 'doc_type',
        'doc_file': 'doc_file',
        'url_path': 'url_path',
        'client_id': 'client_id',
        'account_id': 'account_id',
        'metadata': 'metadata',
        'secondary_id': 'secondary_id'
    }

    def __init__(self, doc_size=None, doc_name=None, doc_type=None, doc_file=None, url_path=None, client_id=None, account_id=None, metadata=None, secondary_id=None):  # noqa: E501
        """DocumentPayload - a model defined in Swagger"""  # noqa: E501

        self._doc_size = None
        self._doc_name = None
        self._doc_type = None
        self._doc_file = None
        self._url_path = None
        self._client_id = None
        self._account_id = None
        self._metadata = None
        self._secondary_id = None
        self.discriminator = None

        self.doc_size = doc_size
        if doc_name is not None:
            self.doc_name = doc_name
        if doc_type is not None:
            self.doc_type = doc_type
        if doc_file is not None:
            self.doc_file = doc_file
        if url_path is not None:
            self.url_path = url_path
        if client_id is not None:
            self.client_id = client_id
        if account_id is not None:
            self.account_id = account_id
        if metadata is not None:
            self.metadata = metadata
        if secondary_id is not None:
            self.secondary_id = secondary_id

    @property
    def doc_size(self):
        """Gets the doc_size of this DocumentPayload.  # noqa: E501

        Size of the document. Must be a whole number  # noqa: E501

        :return: The doc_size of this DocumentPayload.  # noqa: E501
        :rtype: int
        """
        return self._doc_size

    @doc_size.setter
    def doc_size(self, doc_size):
        """Sets the doc_size of this DocumentPayload.

        Size of the document. Must be a whole number  # noqa: E501

        :param doc_size: The doc_size of this DocumentPayload.  # noqa: E501
        :type: int
        """
        if doc_size is None:
            raise ValueError("Invalid value for `doc_size`, must not be `None`")  # noqa: E501

        self._doc_size = doc_size

    @property
    def doc_name(self):
        """Gets the doc_name of this DocumentPayload.  # noqa: E501

        Name or title of the document  # noqa: E501

        :return: The doc_name of this DocumentPayload.  # noqa: E501
        :rtype: str
        """
        return self._doc_name

    @doc_name.setter
    def doc_name(self, doc_name):
        """Sets the doc_name of this DocumentPayload.

        Name or title of the document  # noqa: E501

        :param doc_name: The doc_name of this DocumentPayload.  # noqa: E501
        :type: str
        """

        self._doc_name = doc_name

    @property
    def doc_type(self):
        """Gets the doc_type of this DocumentPayload.  # noqa: E501

        Type of document such as “Compliance” or “Registration”  # noqa: E501

        :return: The doc_type of this DocumentPayload.  # noqa: E501
        :rtype: str
        """
        return self._doc_type

    @doc_type.setter
    def doc_type(self, doc_type):
        """Sets the doc_type of this DocumentPayload.

        Type of document such as “Compliance” or “Registration”  # noqa: E501

        :param doc_type: The doc_type of this DocumentPayload.  # noqa: E501
        :type: str
        """

        self._doc_type = doc_type

    @property
    def doc_file(self):
        """Gets the doc_file of this DocumentPayload.  # noqa: E501

        File path or content for the document  # noqa: E501

        :return: The doc_file of this DocumentPayload.  # noqa: E501
        :rtype: str
        """
        return self._doc_file

    @doc_file.setter
    def doc_file(self, doc_file):
        """Sets the doc_file of this DocumentPayload.

        File path or content for the document  # noqa: E501

        :param doc_file: The doc_file of this DocumentPayload.  # noqa: E501
        :type: str
        """

        self._doc_file = doc_file

    @property
    def url_path(self):
        """Gets the url_path of this DocumentPayload.  # noqa: E501

        URL path for the document such as http://domain.com/sample.pdf  # noqa: E501

        :return: The url_path of this DocumentPayload.  # noqa: E501
        :rtype: str
        """
        return self._url_path

    @url_path.setter
    def url_path(self, url_path):
        """Sets the url_path of this DocumentPayload.

        URL path for the document such as http://domain.com/sample.pdf  # noqa: E501

        :param url_path: The url_path of this DocumentPayload.  # noqa: E501
        :type: str
        """

        self._url_path = url_path

    @property
    def client_id(self):
        """Gets the client_id of this DocumentPayload.  # noqa: E501

        In the case that the document relates to a specific Client, the ID of the client  # noqa: E501

        :return: The client_id of this DocumentPayload.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this DocumentPayload.

        In the case that the document relates to a specific Client, the ID of the client  # noqa: E501

        :param client_id: The client_id of this DocumentPayload.  # noqa: E501
        :type: str
        """

        self._client_id = client_id

    @property
    def account_id(self):
        """Gets the account_id of this DocumentPayload.  # noqa: E501

        In the case that the document relates to a specific Account, the ID of the account  # noqa: E501

        :return: The account_id of this DocumentPayload.  # noqa: E501
        :rtype: str
        """
        return self._account_id

    @account_id.setter
    def account_id(self, account_id):
        """Sets the account_id of this DocumentPayload.

        In the case that the document relates to a specific Account, the ID of the account  # noqa: E501

        :param account_id: The account_id of this DocumentPayload.  # noqa: E501
        :type: str
        """

        self._account_id = account_id

    @property
    def metadata(self):
        """Gets the metadata of this DocumentPayload.  # noqa: E501

        Custom information associated with the document in the format key:value  # noqa: E501

        :return: The metadata of this DocumentPayload.  # noqa: E501
        :rtype: object
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this DocumentPayload.

        Custom information associated with the document in the format key:value  # noqa: E501

        :param metadata: The metadata of this DocumentPayload.  # noqa: E501
        :type: object
        """

        self._metadata = metadata

    @property
    def secondary_id(self):
        """Gets the secondary_id of this DocumentPayload.  # noqa: E501


        :return: The secondary_id of this DocumentPayload.  # noqa: E501
        :rtype: SecondaryId
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this DocumentPayload.


        :param secondary_id: The secondary_id of this DocumentPayload.  # noqa: E501
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
        if issubclass(DocumentPayload, dict):
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
        if not isinstance(other, DocumentPayload):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
