# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from nucleus_api.configuration import Configuration


class PageBankLink(object):
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
        'content': 'list[BankLink]',
        'first': 'bool',
        'last': 'bool',
        'number': 'int',
        'number_of_elements': 'int',
        'size': 'int',
        'sort': 'list[Sort]',
        'total_elements': 'int',
        'total_pages': 'int'
    }

    attribute_map = {
        'content': 'content',
        'first': 'first',
        'last': 'last',
        'number': 'number',
        'number_of_elements': 'number_of_elements',
        'size': 'size',
        'sort': 'sort',
        'total_elements': 'total_elements',
        'total_pages': 'total_pages'
    }

    def __init__(self, content=None, first=None, last=None, number=None, number_of_elements=None, size=None, sort=None, total_elements=None, total_pages=None, _configuration=None):  # noqa: E501
        """PageBankLink - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._content = None
        self._first = None
        self._last = None
        self._number = None
        self._number_of_elements = None
        self._size = None
        self._sort = None
        self._total_elements = None
        self._total_pages = None
        self.discriminator = None

        if content is not None:
            self.content = content
        if first is not None:
            self.first = first
        if last is not None:
            self.last = last
        if number is not None:
            self.number = number
        if number_of_elements is not None:
            self.number_of_elements = number_of_elements
        if size is not None:
            self.size = size
        if sort is not None:
            self.sort = sort
        if total_elements is not None:
            self.total_elements = total_elements
        if total_pages is not None:
            self.total_pages = total_pages

    @property
    def content(self):
        """Gets the content of this PageBankLink.  # noqa: E501


        :return: The content of this PageBankLink.  # noqa: E501
        :rtype: list[BankLink]
        """
        return self._content

    @content.setter
    def content(self, content):
        """Sets the content of this PageBankLink.


        :param content: The content of this PageBankLink.  # noqa: E501
        :type: list[BankLink]
        """

        self._content = content

    @property
    def first(self):
        """Gets the first of this PageBankLink.  # noqa: E501


        :return: The first of this PageBankLink.  # noqa: E501
        :rtype: bool
        """
        return self._first

    @first.setter
    def first(self, first):
        """Sets the first of this PageBankLink.


        :param first: The first of this PageBankLink.  # noqa: E501
        :type: bool
        """

        self._first = first

    @property
    def last(self):
        """Gets the last of this PageBankLink.  # noqa: E501


        :return: The last of this PageBankLink.  # noqa: E501
        :rtype: bool
        """
        return self._last

    @last.setter
    def last(self, last):
        """Sets the last of this PageBankLink.


        :param last: The last of this PageBankLink.  # noqa: E501
        :type: bool
        """

        self._last = last

    @property
    def number(self):
        """Gets the number of this PageBankLink.  # noqa: E501


        :return: The number of this PageBankLink.  # noqa: E501
        :rtype: int
        """
        return self._number

    @number.setter
    def number(self, number):
        """Sets the number of this PageBankLink.


        :param number: The number of this PageBankLink.  # noqa: E501
        :type: int
        """

        self._number = number

    @property
    def number_of_elements(self):
        """Gets the number_of_elements of this PageBankLink.  # noqa: E501


        :return: The number_of_elements of this PageBankLink.  # noqa: E501
        :rtype: int
        """
        return self._number_of_elements

    @number_of_elements.setter
    def number_of_elements(self, number_of_elements):
        """Sets the number_of_elements of this PageBankLink.


        :param number_of_elements: The number_of_elements of this PageBankLink.  # noqa: E501
        :type: int
        """

        self._number_of_elements = number_of_elements

    @property
    def size(self):
        """Gets the size of this PageBankLink.  # noqa: E501


        :return: The size of this PageBankLink.  # noqa: E501
        :rtype: int
        """
        return self._size

    @size.setter
    def size(self, size):
        """Sets the size of this PageBankLink.


        :param size: The size of this PageBankLink.  # noqa: E501
        :type: int
        """

        self._size = size

    @property
    def sort(self):
        """Gets the sort of this PageBankLink.  # noqa: E501


        :return: The sort of this PageBankLink.  # noqa: E501
        :rtype: list[Sort]
        """
        return self._sort

    @sort.setter
    def sort(self, sort):
        """Sets the sort of this PageBankLink.


        :param sort: The sort of this PageBankLink.  # noqa: E501
        :type: list[Sort]
        """

        self._sort = sort

    @property
    def total_elements(self):
        """Gets the total_elements of this PageBankLink.  # noqa: E501


        :return: The total_elements of this PageBankLink.  # noqa: E501
        :rtype: int
        """
        return self._total_elements

    @total_elements.setter
    def total_elements(self, total_elements):
        """Sets the total_elements of this PageBankLink.


        :param total_elements: The total_elements of this PageBankLink.  # noqa: E501
        :type: int
        """

        self._total_elements = total_elements

    @property
    def total_pages(self):
        """Gets the total_pages of this PageBankLink.  # noqa: E501


        :return: The total_pages of this PageBankLink.  # noqa: E501
        :rtype: int
        """
        return self._total_pages

    @total_pages.setter
    def total_pages(self, total_pages):
        """Sets the total_pages of this PageBankLink.


        :param total_pages: The total_pages of this PageBankLink.  # noqa: E501
        :type: int
        """

        self._total_pages = total_pages

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
        if issubclass(PageBankLink, dict):
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
        if not isinstance(other, PageBankLink):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, PageBankLink):
            return True

        return self.to_dict() != other.to_dict()
