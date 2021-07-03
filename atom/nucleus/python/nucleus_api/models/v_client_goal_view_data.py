# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.2
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from nucleus_api.configuration import Configuration


class VClientGoalViewData(object):
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
        'client_asset_size': 'float',
        'client_asset_size_date': 'date',
        'client_first_name': 'str',
        'client_id': 'str',
        'client_last_name': 'str',
        'client_view_goal_data': 'list[ClientViewGoalData]'
    }

    attribute_map = {
        'client_asset_size': 'client_asset_size',
        'client_asset_size_date': 'client_asset_size_date',
        'client_first_name': 'client_first_name',
        'client_id': 'client_id',
        'client_last_name': 'client_last_name',
        'client_view_goal_data': 'client_view_goal_data'
    }

    def __init__(self, client_asset_size=None, client_asset_size_date=None, client_first_name=None, client_id=None, client_last_name=None, client_view_goal_data=None, _configuration=None):  # noqa: E501
        """VClientGoalViewData - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._client_asset_size = None
        self._client_asset_size_date = None
        self._client_first_name = None
        self._client_id = None
        self._client_last_name = None
        self._client_view_goal_data = None
        self.discriminator = None

        if client_asset_size is not None:
            self.client_asset_size = client_asset_size
        if client_asset_size_date is not None:
            self.client_asset_size_date = client_asset_size_date
        if client_first_name is not None:
            self.client_first_name = client_first_name
        if client_id is not None:
            self.client_id = client_id
        if client_last_name is not None:
            self.client_last_name = client_last_name
        if client_view_goal_data is not None:
            self.client_view_goal_data = client_view_goal_data

    @property
    def client_asset_size(self):
        """Gets the client_asset_size of this VClientGoalViewData.  # noqa: E501


        :return: The client_asset_size of this VClientGoalViewData.  # noqa: E501
        :rtype: float
        """
        return self._client_asset_size

    @client_asset_size.setter
    def client_asset_size(self, client_asset_size):
        """Sets the client_asset_size of this VClientGoalViewData.


        :param client_asset_size: The client_asset_size of this VClientGoalViewData.  # noqa: E501
        :type: float
        """

        self._client_asset_size = client_asset_size

    @property
    def client_asset_size_date(self):
        """Gets the client_asset_size_date of this VClientGoalViewData.  # noqa: E501


        :return: The client_asset_size_date of this VClientGoalViewData.  # noqa: E501
        :rtype: date
        """
        return self._client_asset_size_date

    @client_asset_size_date.setter
    def client_asset_size_date(self, client_asset_size_date):
        """Sets the client_asset_size_date of this VClientGoalViewData.


        :param client_asset_size_date: The client_asset_size_date of this VClientGoalViewData.  # noqa: E501
        :type: date
        """

        self._client_asset_size_date = client_asset_size_date

    @property
    def client_first_name(self):
        """Gets the client_first_name of this VClientGoalViewData.  # noqa: E501


        :return: The client_first_name of this VClientGoalViewData.  # noqa: E501
        :rtype: str
        """
        return self._client_first_name

    @client_first_name.setter
    def client_first_name(self, client_first_name):
        """Sets the client_first_name of this VClientGoalViewData.


        :param client_first_name: The client_first_name of this VClientGoalViewData.  # noqa: E501
        :type: str
        """

        self._client_first_name = client_first_name

    @property
    def client_id(self):
        """Gets the client_id of this VClientGoalViewData.  # noqa: E501


        :return: The client_id of this VClientGoalViewData.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this VClientGoalViewData.


        :param client_id: The client_id of this VClientGoalViewData.  # noqa: E501
        :type: str
        """

        self._client_id = client_id

    @property
    def client_last_name(self):
        """Gets the client_last_name of this VClientGoalViewData.  # noqa: E501


        :return: The client_last_name of this VClientGoalViewData.  # noqa: E501
        :rtype: str
        """
        return self._client_last_name

    @client_last_name.setter
    def client_last_name(self, client_last_name):
        """Sets the client_last_name of this VClientGoalViewData.


        :param client_last_name: The client_last_name of this VClientGoalViewData.  # noqa: E501
        :type: str
        """

        self._client_last_name = client_last_name

    @property
    def client_view_goal_data(self):
        """Gets the client_view_goal_data of this VClientGoalViewData.  # noqa: E501


        :return: The client_view_goal_data of this VClientGoalViewData.  # noqa: E501
        :rtype: list[ClientViewGoalData]
        """
        return self._client_view_goal_data

    @client_view_goal_data.setter
    def client_view_goal_data(self, client_view_goal_data):
        """Sets the client_view_goal_data of this VClientGoalViewData.


        :param client_view_goal_data: The client_view_goal_data of this VClientGoalViewData.  # noqa: E501
        :type: list[ClientViewGoalData]
        """

        self._client_view_goal_data = client_view_goal_data

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
        if issubclass(VClientGoalViewData, dict):
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
        if not isinstance(other, VClientGoalViewData):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, VClientGoalViewData):
            return True

        return self.to_dict() != other.to_dict()
