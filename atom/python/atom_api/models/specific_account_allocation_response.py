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

from atom_api.models.account_allocation_payload import AccountAllocationPayload  # noqa: F401,E501


class SpecificAccountAllocationResponse(object):
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
        'allocation_id': 'str',
        'current_weight': 'float',
        'strategic_weight': 'float',
        'account_id': 'str',
        '_date': 'date',
        'goal_id': 'str',
        'id': 'str'
    }

    attribute_map = {
        'allocation_id': 'allocation_id',
        'current_weight': 'current_weight',
        'strategic_weight': 'strategic_weight',
        'account_id': 'account_id',
        '_date': 'date',
        'goal_id': 'goal_id',
        'id': 'id'
    }

    def __init__(self, allocation_id=None, current_weight=None, strategic_weight=None, account_id=None, _date=None, goal_id=None, id=None):  # noqa: E501
        """SpecificAccountAllocationResponse - a model defined in Swagger"""  # noqa: E501

        self._allocation_id = None
        self._current_weight = None
        self._strategic_weight = None
        self._account_id = None
        self.__date = None
        self._goal_id = None
        self._id = None
        self.discriminator = None

        self.allocation_id = allocation_id
        self.current_weight = current_weight
        self.strategic_weight = strategic_weight
        self.account_id = account_id
        self._date = _date
        if goal_id is not None:
            self.goal_id = goal_id
        if id is not None:
            self.id = id

    @property
    def allocation_id(self):
        """Gets the allocation_id of this SpecificAccountAllocationResponse.  # noqa: E501

        The ID of the allocation that is part of the account-allocation mapping  # noqa: E501

        :return: The allocation_id of this SpecificAccountAllocationResponse.  # noqa: E501
        :rtype: str
        """
        return self._allocation_id

    @allocation_id.setter
    def allocation_id(self, allocation_id):
        """Sets the allocation_id of this SpecificAccountAllocationResponse.

        The ID of the allocation that is part of the account-allocation mapping  # noqa: E501

        :param allocation_id: The allocation_id of this SpecificAccountAllocationResponse.  # noqa: E501
        :type: str
        """
        if allocation_id is None:
            raise ValueError("Invalid value for `allocation_id`, must not be `None`")  # noqa: E501

        self._allocation_id = allocation_id

    @property
    def current_weight(self):
        """Gets the current_weight of this SpecificAccountAllocationResponse.  # noqa: E501

        Current percentage of the account’s total value that should be directed towards the allocation; ex. 20 representing 20%. The current weights for all allocations below an account must add up to 100. If the allocation is the only one, enter 100  # noqa: E501

        :return: The current_weight of this SpecificAccountAllocationResponse.  # noqa: E501
        :rtype: float
        """
        return self._current_weight

    @current_weight.setter
    def current_weight(self, current_weight):
        """Sets the current_weight of this SpecificAccountAllocationResponse.

        Current percentage of the account’s total value that should be directed towards the allocation; ex. 20 representing 20%. The current weights for all allocations below an account must add up to 100. If the allocation is the only one, enter 100  # noqa: E501

        :param current_weight: The current_weight of this SpecificAccountAllocationResponse.  # noqa: E501
        :type: float
        """
        if current_weight is None:
            raise ValueError("Invalid value for `current_weight`, must not be `None`")  # noqa: E501

        self._current_weight = current_weight

    @property
    def strategic_weight(self):
        """Gets the strategic_weight of this SpecificAccountAllocationResponse.  # noqa: E501

        Strategic percentage of the account’s total value that should be directed towards the allocation; ex. 20 representing 20%. The strategic weights for all allocations below an account must add up to 100. If the allocation is the only one, enter 100  # noqa: E501

        :return: The strategic_weight of this SpecificAccountAllocationResponse.  # noqa: E501
        :rtype: float
        """
        return self._strategic_weight

    @strategic_weight.setter
    def strategic_weight(self, strategic_weight):
        """Sets the strategic_weight of this SpecificAccountAllocationResponse.

        Strategic percentage of the account’s total value that should be directed towards the allocation; ex. 20 representing 20%. The strategic weights for all allocations below an account must add up to 100. If the allocation is the only one, enter 100  # noqa: E501

        :param strategic_weight: The strategic_weight of this SpecificAccountAllocationResponse.  # noqa: E501
        :type: float
        """
        if strategic_weight is None:
            raise ValueError("Invalid value for `strategic_weight`, must not be `None`")  # noqa: E501

        self._strategic_weight = strategic_weight

    @property
    def account_id(self):
        """Gets the account_id of this SpecificAccountAllocationResponse.  # noqa: E501

        The ID of the account that is part of the account-allocation mapping  # noqa: E501

        :return: The account_id of this SpecificAccountAllocationResponse.  # noqa: E501
        :rtype: str
        """
        return self._account_id

    @account_id.setter
    def account_id(self, account_id):
        """Sets the account_id of this SpecificAccountAllocationResponse.

        The ID of the account that is part of the account-allocation mapping  # noqa: E501

        :param account_id: The account_id of this SpecificAccountAllocationResponse.  # noqa: E501
        :type: str
        """
        if account_id is None:
            raise ValueError("Invalid value for `account_id`, must not be `None`")  # noqa: E501

        self._account_id = account_id

    @property
    def _date(self):
        """Gets the _date of this SpecificAccountAllocationResponse.  # noqa: E501

        Date of the account-allocation mapping used for historical tracking  # noqa: E501

        :return: The _date of this SpecificAccountAllocationResponse.  # noqa: E501
        :rtype: date
        """
        return self.__date

    @_date.setter
    def _date(self, _date):
        """Sets the _date of this SpecificAccountAllocationResponse.

        Date of the account-allocation mapping used for historical tracking  # noqa: E501

        :param _date: The _date of this SpecificAccountAllocationResponse.  # noqa: E501
        :type: date
        """
        if _date is None:
            raise ValueError("Invalid value for `_date`, must not be `None`")  # noqa: E501

        self.__date = _date

    @property
    def goal_id(self):
        """Gets the goal_id of this SpecificAccountAllocationResponse.  # noqa: E501

        The ID of the goal that is associated with this account-allocation mapping  # noqa: E501

        :return: The goal_id of this SpecificAccountAllocationResponse.  # noqa: E501
        :rtype: str
        """
        return self._goal_id

    @goal_id.setter
    def goal_id(self, goal_id):
        """Sets the goal_id of this SpecificAccountAllocationResponse.

        The ID of the goal that is associated with this account-allocation mapping  # noqa: E501

        :param goal_id: The goal_id of this SpecificAccountAllocationResponse.  # noqa: E501
        :type: str
        """

        self._goal_id = goal_id

    @property
    def id(self):
        """Gets the id of this SpecificAccountAllocationResponse.  # noqa: E501

        Account allocation ID  # noqa: E501

        :return: The id of this SpecificAccountAllocationResponse.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this SpecificAccountAllocationResponse.

        Account allocation ID  # noqa: E501

        :param id: The id of this SpecificAccountAllocationResponse.  # noqa: E501
        :type: str
        """

        self._id = id

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
        if issubclass(SpecificAccountAllocationResponse, dict):
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
        if not isinstance(other, SpecificAccountAllocationResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
