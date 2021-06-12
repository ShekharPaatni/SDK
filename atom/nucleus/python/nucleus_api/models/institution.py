# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.1
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from nucleus_api.configuration import Configuration


class Institution(object):
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
        'code': 'str',
        'create_date': 'datetime',
        'id': 'str',
        'logo_url_medium': 'str',
        'logo_url_small': 'str',
        'name': 'str',
        'update_date': 'datetime',
        'website_url': 'str'
    }

    attribute_map = {
        'code': 'code',
        'create_date': 'create_date',
        'id': 'id',
        'logo_url_medium': 'logo_url_medium',
        'logo_url_small': 'logo_url_small',
        'name': 'name',
        'update_date': 'update_date',
        'website_url': 'website_url'
    }

    def __init__(self, code=None, create_date=None, id=None, logo_url_medium=None, logo_url_small=None, name=None, update_date=None, website_url=None, _configuration=None):  # noqa: E501
        """Institution - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._code = None
        self._create_date = None
        self._id = None
        self._logo_url_medium = None
        self._logo_url_small = None
        self._name = None
        self._update_date = None
        self._website_url = None
        self.discriminator = None

        if code is not None:
            self.code = code
        if create_date is not None:
            self.create_date = create_date
        if id is not None:
            self.id = id
        if logo_url_medium is not None:
            self.logo_url_medium = logo_url_medium
        if logo_url_small is not None:
            self.logo_url_small = logo_url_small
        self.name = name
        if update_date is not None:
            self.update_date = update_date
        if website_url is not None:
            self.website_url = website_url

    @property
    def code(self):
        """Gets the code of this Institution.  # noqa: E501

        code  # noqa: E501

        :return: The code of this Institution.  # noqa: E501
        :rtype: str
        """
        return self._code

    @code.setter
    def code(self, code):
        """Sets the code of this Institution.

        code  # noqa: E501

        :param code: The code of this Institution.  # noqa: E501
        :type: str
        """

        self._code = code

    @property
    def create_date(self):
        """Gets the create_date of this Institution.  # noqa: E501


        :return: The create_date of this Institution.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this Institution.


        :param create_date: The create_date of this Institution.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def id(self):
        """Gets the id of this Institution.  # noqa: E501


        :return: The id of this Institution.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Institution.


        :param id: The id of this Institution.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def logo_url_medium(self):
        """Gets the logo_url_medium of this Institution.  # noqa: E501

        logo_url_medium  # noqa: E501

        :return: The logo_url_medium of this Institution.  # noqa: E501
        :rtype: str
        """
        return self._logo_url_medium

    @logo_url_medium.setter
    def logo_url_medium(self, logo_url_medium):
        """Sets the logo_url_medium of this Institution.

        logo_url_medium  # noqa: E501

        :param logo_url_medium: The logo_url_medium of this Institution.  # noqa: E501
        :type: str
        """

        self._logo_url_medium = logo_url_medium

    @property
    def logo_url_small(self):
        """Gets the logo_url_small of this Institution.  # noqa: E501

        logo_url_small  # noqa: E501

        :return: The logo_url_small of this Institution.  # noqa: E501
        :rtype: str
        """
        return self._logo_url_small

    @logo_url_small.setter
    def logo_url_small(self, logo_url_small):
        """Sets the logo_url_small of this Institution.

        logo_url_small  # noqa: E501

        :param logo_url_small: The logo_url_small of this Institution.  # noqa: E501
        :type: str
        """

        self._logo_url_small = logo_url_small

    @property
    def name(self):
        """Gets the name of this Institution.  # noqa: E501

        name  # noqa: E501

        :return: The name of this Institution.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this Institution.

        name  # noqa: E501

        :param name: The name of this Institution.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and name is None:
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def update_date(self):
        """Gets the update_date of this Institution.  # noqa: E501


        :return: The update_date of this Institution.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this Institution.


        :param update_date: The update_date of this Institution.  # noqa: E501
        :type: datetime
        """

        self._update_date = update_date

    @property
    def website_url(self):
        """Gets the website_url of this Institution.  # noqa: E501

        website_url  # noqa: E501

        :return: The website_url of this Institution.  # noqa: E501
        :rtype: str
        """
        return self._website_url

    @website_url.setter
    def website_url(self, website_url):
        """Sets the website_url of this Institution.

        website_url  # noqa: E501

        :param website_url: The website_url of this Institution.  # noqa: E501
        :type: str
        """

        self._website_url = website_url

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
        if issubclass(Institution, dict):
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
        if not isinstance(other, Institution):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Institution):
            return True

        return self.to_dict() != other.to_dict()
