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


class AuditLog(object):
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
        'account_ids': 'list[str]',
        'aggregation_account_ids': 'list[str]',
        'allocation_ids': 'list[str]',
        'client_ids': 'list[str]',
        'create_date': 'datetime',
        'goal_ids': 'list[str]',
        'id': 'str',
        'metadata': 'dict(str, str)',
        'model_ids': 'list[str]',
        'portfolio_ids': 'list[str]',
        'request': 'str',
        'request_url': 'str',
        'response': 'str',
        'secondary_id': 'str',
        'security_ids': 'list[str]',
        'update_date': 'datetime'
    }

    attribute_map = {
        'account_ids': 'account_ids',
        'aggregation_account_ids': 'aggregation_account_ids',
        'allocation_ids': 'allocation_ids',
        'client_ids': 'client_ids',
        'create_date': 'create_date',
        'goal_ids': 'goal_ids',
        'id': 'id',
        'metadata': 'metadata',
        'model_ids': 'model_ids',
        'portfolio_ids': 'portfolio_ids',
        'request': 'request',
        'request_url': 'request_url',
        'response': 'response',
        'secondary_id': 'secondary_id',
        'security_ids': 'security_ids',
        'update_date': 'update_date'
    }

    def __init__(self, account_ids=None, aggregation_account_ids=None, allocation_ids=None, client_ids=None, create_date=None, goal_ids=None, id=None, metadata=None, model_ids=None, portfolio_ids=None, request=None, request_url=None, response=None, secondary_id=None, security_ids=None, update_date=None, _configuration=None):  # noqa: E501
        """AuditLog - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._account_ids = None
        self._aggregation_account_ids = None
        self._allocation_ids = None
        self._client_ids = None
        self._create_date = None
        self._goal_ids = None
        self._id = None
        self._metadata = None
        self._model_ids = None
        self._portfolio_ids = None
        self._request = None
        self._request_url = None
        self._response = None
        self._secondary_id = None
        self._security_ids = None
        self._update_date = None
        self.discriminator = None

        if account_ids is not None:
            self.account_ids = account_ids
        if aggregation_account_ids is not None:
            self.aggregation_account_ids = aggregation_account_ids
        if allocation_ids is not None:
            self.allocation_ids = allocation_ids
        if client_ids is not None:
            self.client_ids = client_ids
        if create_date is not None:
            self.create_date = create_date
        if goal_ids is not None:
            self.goal_ids = goal_ids
        if id is not None:
            self.id = id
        if metadata is not None:
            self.metadata = metadata
        if model_ids is not None:
            self.model_ids = model_ids
        if portfolio_ids is not None:
            self.portfolio_ids = portfolio_ids
        if request is not None:
            self.request = request
        self.request_url = request_url
        self.response = response
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if security_ids is not None:
            self.security_ids = security_ids
        if update_date is not None:
            self.update_date = update_date

    @property
    def account_ids(self):
        """Gets the account_ids of this AuditLog.  # noqa: E501

        accountIds  # noqa: E501

        :return: The account_ids of this AuditLog.  # noqa: E501
        :rtype: list[str]
        """
        return self._account_ids

    @account_ids.setter
    def account_ids(self, account_ids):
        """Sets the account_ids of this AuditLog.

        accountIds  # noqa: E501

        :param account_ids: The account_ids of this AuditLog.  # noqa: E501
        :type: list[str]
        """

        self._account_ids = account_ids

    @property
    def aggregation_account_ids(self):
        """Gets the aggregation_account_ids of this AuditLog.  # noqa: E501

        aggregationAccountIds  # noqa: E501

        :return: The aggregation_account_ids of this AuditLog.  # noqa: E501
        :rtype: list[str]
        """
        return self._aggregation_account_ids

    @aggregation_account_ids.setter
    def aggregation_account_ids(self, aggregation_account_ids):
        """Sets the aggregation_account_ids of this AuditLog.

        aggregationAccountIds  # noqa: E501

        :param aggregation_account_ids: The aggregation_account_ids of this AuditLog.  # noqa: E501
        :type: list[str]
        """

        self._aggregation_account_ids = aggregation_account_ids

    @property
    def allocation_ids(self):
        """Gets the allocation_ids of this AuditLog.  # noqa: E501

        allocationIds  # noqa: E501

        :return: The allocation_ids of this AuditLog.  # noqa: E501
        :rtype: list[str]
        """
        return self._allocation_ids

    @allocation_ids.setter
    def allocation_ids(self, allocation_ids):
        """Sets the allocation_ids of this AuditLog.

        allocationIds  # noqa: E501

        :param allocation_ids: The allocation_ids of this AuditLog.  # noqa: E501
        :type: list[str]
        """

        self._allocation_ids = allocation_ids

    @property
    def client_ids(self):
        """Gets the client_ids of this AuditLog.  # noqa: E501

        clientIds  # noqa: E501

        :return: The client_ids of this AuditLog.  # noqa: E501
        :rtype: list[str]
        """
        return self._client_ids

    @client_ids.setter
    def client_ids(self, client_ids):
        """Sets the client_ids of this AuditLog.

        clientIds  # noqa: E501

        :param client_ids: The client_ids of this AuditLog.  # noqa: E501
        :type: list[str]
        """

        self._client_ids = client_ids

    @property
    def create_date(self):
        """Gets the create_date of this AuditLog.  # noqa: E501


        :return: The create_date of this AuditLog.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this AuditLog.


        :param create_date: The create_date of this AuditLog.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def goal_ids(self):
        """Gets the goal_ids of this AuditLog.  # noqa: E501

        goalIds  # noqa: E501

        :return: The goal_ids of this AuditLog.  # noqa: E501
        :rtype: list[str]
        """
        return self._goal_ids

    @goal_ids.setter
    def goal_ids(self, goal_ids):
        """Sets the goal_ids of this AuditLog.

        goalIds  # noqa: E501

        :param goal_ids: The goal_ids of this AuditLog.  # noqa: E501
        :type: list[str]
        """

        self._goal_ids = goal_ids

    @property
    def id(self):
        """Gets the id of this AuditLog.  # noqa: E501

        id  # noqa: E501

        :return: The id of this AuditLog.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this AuditLog.

        id  # noqa: E501

        :param id: The id of this AuditLog.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def metadata(self):
        """Gets the metadata of this AuditLog.  # noqa: E501

        metadata  # noqa: E501

        :return: The metadata of this AuditLog.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this AuditLog.

        metadata  # noqa: E501

        :param metadata: The metadata of this AuditLog.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def model_ids(self):
        """Gets the model_ids of this AuditLog.  # noqa: E501

        modelIds  # noqa: E501

        :return: The model_ids of this AuditLog.  # noqa: E501
        :rtype: list[str]
        """
        return self._model_ids

    @model_ids.setter
    def model_ids(self, model_ids):
        """Sets the model_ids of this AuditLog.

        modelIds  # noqa: E501

        :param model_ids: The model_ids of this AuditLog.  # noqa: E501
        :type: list[str]
        """

        self._model_ids = model_ids

    @property
    def portfolio_ids(self):
        """Gets the portfolio_ids of this AuditLog.  # noqa: E501

        portfolioIds  # noqa: E501

        :return: The portfolio_ids of this AuditLog.  # noqa: E501
        :rtype: list[str]
        """
        return self._portfolio_ids

    @portfolio_ids.setter
    def portfolio_ids(self, portfolio_ids):
        """Sets the portfolio_ids of this AuditLog.

        portfolioIds  # noqa: E501

        :param portfolio_ids: The portfolio_ids of this AuditLog.  # noqa: E501
        :type: list[str]
        """

        self._portfolio_ids = portfolio_ids

    @property
    def request(self):
        """Gets the request of this AuditLog.  # noqa: E501


        :return: The request of this AuditLog.  # noqa: E501
        :rtype: str
        """
        return self._request

    @request.setter
    def request(self, request):
        """Sets the request of this AuditLog.


        :param request: The request of this AuditLog.  # noqa: E501
        :type: str
        """

        self._request = request

    @property
    def request_url(self):
        """Gets the request_url of this AuditLog.  # noqa: E501

        requestUrl  # noqa: E501

        :return: The request_url of this AuditLog.  # noqa: E501
        :rtype: str
        """
        return self._request_url

    @request_url.setter
    def request_url(self, request_url):
        """Sets the request_url of this AuditLog.

        requestUrl  # noqa: E501

        :param request_url: The request_url of this AuditLog.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and request_url is None:
            raise ValueError("Invalid value for `request_url`, must not be `None`")  # noqa: E501

        self._request_url = request_url

    @property
    def response(self):
        """Gets the response of this AuditLog.  # noqa: E501

        response  # noqa: E501

        :return: The response of this AuditLog.  # noqa: E501
        :rtype: str
        """
        return self._response

    @response.setter
    def response(self, response):
        """Sets the response of this AuditLog.

        response  # noqa: E501

        :param response: The response of this AuditLog.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and response is None:
            raise ValueError("Invalid value for `response`, must not be `None`")  # noqa: E501

        self._response = response

    @property
    def secondary_id(self):
        """Gets the secondary_id of this AuditLog.  # noqa: E501


        :return: The secondary_id of this AuditLog.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this AuditLog.


        :param secondary_id: The secondary_id of this AuditLog.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def security_ids(self):
        """Gets the security_ids of this AuditLog.  # noqa: E501

        securityIds  # noqa: E501

        :return: The security_ids of this AuditLog.  # noqa: E501
        :rtype: list[str]
        """
        return self._security_ids

    @security_ids.setter
    def security_ids(self, security_ids):
        """Sets the security_ids of this AuditLog.

        securityIds  # noqa: E501

        :param security_ids: The security_ids of this AuditLog.  # noqa: E501
        :type: list[str]
        """

        self._security_ids = security_ids

    @property
    def update_date(self):
        """Gets the update_date of this AuditLog.  # noqa: E501


        :return: The update_date of this AuditLog.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this AuditLog.


        :param update_date: The update_date of this AuditLog.  # noqa: E501
        :type: datetime
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
        if issubclass(AuditLog, dict):
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
        if not isinstance(other, AuditLog):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, AuditLog):
            return True

        return self.to_dict() != other.to_dict()
