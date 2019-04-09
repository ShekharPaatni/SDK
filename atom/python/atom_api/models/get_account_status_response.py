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

from atom_api.models.pagination import Pagination  # noqa: F401,E501
from atom_api.models.pagination_sort import PaginationSort  # noqa: F401,E501
from atom_api.models.specific_account_status_response import SpecificAccountStatusResponse  # noqa: F401,E501


class GetAccountStatusResponse(object):
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
        'last': 'bool',
        'total_pages': 'int',
        'total_elements': 'int',
        'sort': 'list[PaginationSort]',
        'first': 'bool',
        'number_of_elements': 'int',
        'size': 'int',
        'number': 'int',
        'content': 'list[SpecificAccountStatusResponse]'
    }

    attribute_map = {
        'last': 'last',
        'total_pages': 'total_pages',
        'total_elements': 'total_elements',
        'sort': 'sort',
        'first': 'first',
        'number_of_elements': 'number_of_elements',
        'size': 'size',
        'number': 'number',
        'content': 'content'
    }

    def __init__(self, last=None, total_pages=None, total_elements=None, sort=None, first=None, number_of_elements=None, size=None, number=None, content=None):  # noqa: E501
        """GetAccountStatusResponse - a model defined in Swagger"""  # noqa: E501

        self._last = None
        self._total_pages = None
        self._total_elements = None
        self._sort = None
        self._first = None
        self._number_of_elements = None
        self._size = None
        self._number = None
        self._content = None
        self.discriminator = None

        if last is not None:
            self.last = last
        if total_pages is not None:
            self.total_pages = total_pages
        if total_elements is not None:
            self.total_elements = total_elements
        if sort is not None:
            self.sort = sort
        if first is not None:
            self.first = first
        if number_of_elements is not None:
            self.number_of_elements = number_of_elements
        if size is not None:
            self.size = size
        if number is not None:
            self.number = number
        if content is not None:
            self.content = content

    @property
    def last(self):
        """Gets the last of this GetAccountStatusResponse.  # noqa: E501

        If true, the last record in the result set is shown  # noqa: E501

        :return: The last of this GetAccountStatusResponse.  # noqa: E501
        :rtype: bool
        """
        return self._last

    @last.setter
    def last(self, last):
        """Sets the last of this GetAccountStatusResponse.

        If true, the last record in the result set is shown  # noqa: E501

        :param last: The last of this GetAccountStatusResponse.  # noqa: E501
        :type: bool
        """

        self._last = last

    @property
    def total_pages(self):
        """Gets the total_pages of this GetAccountStatusResponse.  # noqa: E501

        Total number of pages in the result set  # noqa: E501

        :return: The total_pages of this GetAccountStatusResponse.  # noqa: E501
        :rtype: int
        """
        return self._total_pages

    @total_pages.setter
    def total_pages(self, total_pages):
        """Sets the total_pages of this GetAccountStatusResponse.

        Total number of pages in the result set  # noqa: E501

        :param total_pages: The total_pages of this GetAccountStatusResponse.  # noqa: E501
        :type: int
        """

        self._total_pages = total_pages

    @property
    def total_elements(self):
        """Gets the total_elements of this GetAccountStatusResponse.  # noqa: E501

        Total number of elements in the result set  # noqa: E501

        :return: The total_elements of this GetAccountStatusResponse.  # noqa: E501
        :rtype: int
        """
        return self._total_elements

    @total_elements.setter
    def total_elements(self, total_elements):
        """Sets the total_elements of this GetAccountStatusResponse.

        Total number of elements in the result set  # noqa: E501

        :param total_elements: The total_elements of this GetAccountStatusResponse.  # noqa: E501
        :type: int
        """

        self._total_elements = total_elements

    @property
    def sort(self):
        """Gets the sort of this GetAccountStatusResponse.  # noqa: E501

        Details of the sort  # noqa: E501

        :return: The sort of this GetAccountStatusResponse.  # noqa: E501
        :rtype: list[PaginationSort]
        """
        return self._sort

    @sort.setter
    def sort(self, sort):
        """Sets the sort of this GetAccountStatusResponse.

        Details of the sort  # noqa: E501

        :param sort: The sort of this GetAccountStatusResponse.  # noqa: E501
        :type: list[PaginationSort]
        """

        self._sort = sort

    @property
    def first(self):
        """Gets the first of this GetAccountStatusResponse.  # noqa: E501

        If true, the first record in the result set is shown  # noqa: E501

        :return: The first of this GetAccountStatusResponse.  # noqa: E501
        :rtype: bool
        """
        return self._first

    @first.setter
    def first(self, first):
        """Sets the first of this GetAccountStatusResponse.

        If true, the first record in the result set is shown  # noqa: E501

        :param first: The first of this GetAccountStatusResponse.  # noqa: E501
        :type: bool
        """

        self._first = first

    @property
    def number_of_elements(self):
        """Gets the number_of_elements of this GetAccountStatusResponse.  # noqa: E501

        Number of elements per page  # noqa: E501

        :return: The number_of_elements of this GetAccountStatusResponse.  # noqa: E501
        :rtype: int
        """
        return self._number_of_elements

    @number_of_elements.setter
    def number_of_elements(self, number_of_elements):
        """Sets the number_of_elements of this GetAccountStatusResponse.

        Number of elements per page  # noqa: E501

        :param number_of_elements: The number_of_elements of this GetAccountStatusResponse.  # noqa: E501
        :type: int
        """

        self._number_of_elements = number_of_elements

    @property
    def size(self):
        """Gets the size of this GetAccountStatusResponse.  # noqa: E501

        The number or records to be included per page. The default is 25. There is no max value.  # noqa: E501

        :return: The size of this GetAccountStatusResponse.  # noqa: E501
        :rtype: int
        """
        return self._size

    @size.setter
    def size(self, size):
        """Sets the size of this GetAccountStatusResponse.

        The number or records to be included per page. The default is 25. There is no max value.  # noqa: E501

        :param size: The size of this GetAccountStatusResponse.  # noqa: E501
        :type: int
        """

        self._size = size

    @property
    def number(self):
        """Gets the number of this GetAccountStatusResponse.  # noqa: E501

        Number of the first result shown  # noqa: E501

        :return: The number of this GetAccountStatusResponse.  # noqa: E501
        :rtype: int
        """
        return self._number

    @number.setter
    def number(self, number):
        """Sets the number of this GetAccountStatusResponse.

        Number of the first result shown  # noqa: E501

        :param number: The number of this GetAccountStatusResponse.  # noqa: E501
        :type: int
        """

        self._number = number

    @property
    def content(self):
        """Gets the content of this GetAccountStatusResponse.  # noqa: E501


        :return: The content of this GetAccountStatusResponse.  # noqa: E501
        :rtype: list[SpecificAccountStatusResponse]
        """
        return self._content

    @content.setter
    def content(self, content):
        """Sets the content of this GetAccountStatusResponse.


        :param content: The content of this GetAccountStatusResponse.  # noqa: E501
        :type: list[SpecificAccountStatusResponse]
        """

        self._content = content

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
        if issubclass(GetAccountStatusResponse, dict):
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
        if not isinstance(other, GetAccountStatusResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
