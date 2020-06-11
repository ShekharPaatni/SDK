# coding: utf-8

"""
    Hydrogen Atom API

    The Hydrogen Atom API  # noqa: E501

    OpenAPI spec version: 1.7.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class ClientAnalyticsResponse(object):
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
        'average_nucleus_clients_daily': 'str',
        'average_nucleus_clients_total': 'str',
        'client_id': 'str',
        'history': 'list[ClientAnalyticsHistory]',
        'tenants': 'list[ClientAnalyticsTenants]',
        'total_nucleus_clients': 'int',
        'total_nucleus_clients_active': 'int',
        'total_nucleus_clients_inactive': 'int'
    }

    attribute_map = {
        'average_nucleus_clients_daily': 'average_nucleus_clients_daily',
        'average_nucleus_clients_total': 'average_nucleus_clients_total',
        'client_id': 'client_id',
        'history': 'history',
        'tenants': 'tenants',
        'total_nucleus_clients': 'total_nucleus_clients',
        'total_nucleus_clients_active': 'total_nucleus_clients_active',
        'total_nucleus_clients_inactive': 'total_nucleus_clients_inactive'
    }

    def __init__(self, average_nucleus_clients_daily=None, average_nucleus_clients_total=None, client_id=None, history=None, tenants=None, total_nucleus_clients=None, total_nucleus_clients_active=None, total_nucleus_clients_inactive=None):  # noqa: E501
        """ClientAnalyticsResponse - a model defined in Swagger"""  # noqa: E501

        self._average_nucleus_clients_daily = None
        self._average_nucleus_clients_total = None
        self._client_id = None
        self._history = None
        self._tenants = None
        self._total_nucleus_clients = None
        self._total_nucleus_clients_active = None
        self._total_nucleus_clients_inactive = None
        self.discriminator = None

        if average_nucleus_clients_daily is not None:
            self.average_nucleus_clients_daily = average_nucleus_clients_daily
        if average_nucleus_clients_total is not None:
            self.average_nucleus_clients_total = average_nucleus_clients_total
        if client_id is not None:
            self.client_id = client_id
        if history is not None:
            self.history = history
        if tenants is not None:
            self.tenants = tenants
        if total_nucleus_clients is not None:
            self.total_nucleus_clients = total_nucleus_clients
        if total_nucleus_clients_active is not None:
            self.total_nucleus_clients_active = total_nucleus_clients_active
        if total_nucleus_clients_inactive is not None:
            self.total_nucleus_clients_inactive = total_nucleus_clients_inactive

    @property
    def average_nucleus_clients_daily(self):
        """Gets the average_nucleus_clients_daily of this ClientAnalyticsResponse.  # noqa: E501


        :return: The average_nucleus_clients_daily of this ClientAnalyticsResponse.  # noqa: E501
        :rtype: str
        """
        return self._average_nucleus_clients_daily

    @average_nucleus_clients_daily.setter
    def average_nucleus_clients_daily(self, average_nucleus_clients_daily):
        """Sets the average_nucleus_clients_daily of this ClientAnalyticsResponse.


        :param average_nucleus_clients_daily: The average_nucleus_clients_daily of this ClientAnalyticsResponse.  # noqa: E501
        :type: str
        """

        self._average_nucleus_clients_daily = average_nucleus_clients_daily

    @property
    def average_nucleus_clients_total(self):
        """Gets the average_nucleus_clients_total of this ClientAnalyticsResponse.  # noqa: E501


        :return: The average_nucleus_clients_total of this ClientAnalyticsResponse.  # noqa: E501
        :rtype: str
        """
        return self._average_nucleus_clients_total

    @average_nucleus_clients_total.setter
    def average_nucleus_clients_total(self, average_nucleus_clients_total):
        """Sets the average_nucleus_clients_total of this ClientAnalyticsResponse.


        :param average_nucleus_clients_total: The average_nucleus_clients_total of this ClientAnalyticsResponse.  # noqa: E501
        :type: str
        """

        self._average_nucleus_clients_total = average_nucleus_clients_total

    @property
    def client_id(self):
        """Gets the client_id of this ClientAnalyticsResponse.  # noqa: E501


        :return: The client_id of this ClientAnalyticsResponse.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this ClientAnalyticsResponse.


        :param client_id: The client_id of this ClientAnalyticsResponse.  # noqa: E501
        :type: str
        """

        self._client_id = client_id

    @property
    def history(self):
        """Gets the history of this ClientAnalyticsResponse.  # noqa: E501


        :return: The history of this ClientAnalyticsResponse.  # noqa: E501
        :rtype: list[ClientAnalyticsHistory]
        """
        return self._history

    @history.setter
    def history(self, history):
        """Sets the history of this ClientAnalyticsResponse.


        :param history: The history of this ClientAnalyticsResponse.  # noqa: E501
        :type: list[ClientAnalyticsHistory]
        """

        self._history = history

    @property
    def tenants(self):
        """Gets the tenants of this ClientAnalyticsResponse.  # noqa: E501


        :return: The tenants of this ClientAnalyticsResponse.  # noqa: E501
        :rtype: list[ClientAnalyticsTenants]
        """
        return self._tenants

    @tenants.setter
    def tenants(self, tenants):
        """Sets the tenants of this ClientAnalyticsResponse.


        :param tenants: The tenants of this ClientAnalyticsResponse.  # noqa: E501
        :type: list[ClientAnalyticsTenants]
        """

        self._tenants = tenants

    @property
    def total_nucleus_clients(self):
        """Gets the total_nucleus_clients of this ClientAnalyticsResponse.  # noqa: E501


        :return: The total_nucleus_clients of this ClientAnalyticsResponse.  # noqa: E501
        :rtype: int
        """
        return self._total_nucleus_clients

    @total_nucleus_clients.setter
    def total_nucleus_clients(self, total_nucleus_clients):
        """Sets the total_nucleus_clients of this ClientAnalyticsResponse.


        :param total_nucleus_clients: The total_nucleus_clients of this ClientAnalyticsResponse.  # noqa: E501
        :type: int
        """

        self._total_nucleus_clients = total_nucleus_clients

    @property
    def total_nucleus_clients_active(self):
        """Gets the total_nucleus_clients_active of this ClientAnalyticsResponse.  # noqa: E501


        :return: The total_nucleus_clients_active of this ClientAnalyticsResponse.  # noqa: E501
        :rtype: int
        """
        return self._total_nucleus_clients_active

    @total_nucleus_clients_active.setter
    def total_nucleus_clients_active(self, total_nucleus_clients_active):
        """Sets the total_nucleus_clients_active of this ClientAnalyticsResponse.


        :param total_nucleus_clients_active: The total_nucleus_clients_active of this ClientAnalyticsResponse.  # noqa: E501
        :type: int
        """

        self._total_nucleus_clients_active = total_nucleus_clients_active

    @property
    def total_nucleus_clients_inactive(self):
        """Gets the total_nucleus_clients_inactive of this ClientAnalyticsResponse.  # noqa: E501


        :return: The total_nucleus_clients_inactive of this ClientAnalyticsResponse.  # noqa: E501
        :rtype: int
        """
        return self._total_nucleus_clients_inactive

    @total_nucleus_clients_inactive.setter
    def total_nucleus_clients_inactive(self, total_nucleus_clients_inactive):
        """Sets the total_nucleus_clients_inactive of this ClientAnalyticsResponse.


        :param total_nucleus_clients_inactive: The total_nucleus_clients_inactive of this ClientAnalyticsResponse.  # noqa: E501
        :type: int
        """

        self._total_nucleus_clients_inactive = total_nucleus_clients_inactive

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
        if issubclass(ClientAnalyticsResponse, dict):
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
        if not isinstance(other, ClientAnalyticsResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
