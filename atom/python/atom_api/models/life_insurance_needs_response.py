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

from atom_api.models.life_insurance_needs_breakdown import LifeInsuranceNeedsBreakdown  # noqa: F401,E501
from atom_api.models.life_insurance_return_detail import LifeInsuranceReturnDetail  # noqa: F401,E501


class LifeInsuranceNeedsResponse(object):
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
        'life_insurance_needed': 'float',
        'total_life_insurance_needed': 'float',
        'life_insurance_needs_breakdown': 'LifeInsuranceNeedsBreakdown',
        'return_details': 'dict(str, LifeInsuranceReturnDetail)'
    }

    attribute_map = {
        'life_insurance_needed': 'life_insurance_needed',
        'total_life_insurance_needed': 'total_life_insurance_needed',
        'life_insurance_needs_breakdown': 'life_insurance_needs_breakdown',
        'return_details': 'return_details'
    }

    def __init__(self, life_insurance_needed=None, total_life_insurance_needed=None, life_insurance_needs_breakdown=None, return_details=None):  # noqa: E501
        """LifeInsuranceNeedsResponse - a model defined in Swagger"""  # noqa: E501

        self._life_insurance_needed = None
        self._total_life_insurance_needed = None
        self._life_insurance_needs_breakdown = None
        self._return_details = None
        self.discriminator = None

        self.life_insurance_needed = life_insurance_needed
        self.total_life_insurance_needed = total_life_insurance_needed
        self.life_insurance_needs_breakdown = life_insurance_needs_breakdown
        self.return_details = return_details

    @property
    def life_insurance_needed(self):
        """Gets the life_insurance_needed of this LifeInsuranceNeedsResponse.  # noqa: E501

        The supplemental life insurance needed by the user.  # noqa: E501

        :return: The life_insurance_needed of this LifeInsuranceNeedsResponse.  # noqa: E501
        :rtype: float
        """
        return self._life_insurance_needed

    @life_insurance_needed.setter
    def life_insurance_needed(self, life_insurance_needed):
        """Sets the life_insurance_needed of this LifeInsuranceNeedsResponse.

        The supplemental life insurance needed by the user.  # noqa: E501

        :param life_insurance_needed: The life_insurance_needed of this LifeInsuranceNeedsResponse.  # noqa: E501
        :type: float
        """
        if life_insurance_needed is None:
            raise ValueError("Invalid value for `life_insurance_needed`, must not be `None`")  # noqa: E501
        if life_insurance_needed is not None and life_insurance_needed < 0:  # noqa: E501
            raise ValueError("Invalid value for `life_insurance_needed`, must be a value greater than or equal to `0`")  # noqa: E501

        self._life_insurance_needed = life_insurance_needed

    @property
    def total_life_insurance_needed(self):
        """Gets the total_life_insurance_needed of this LifeInsuranceNeedsResponse.  # noqa: E501

        The total life insurance needed by the user, including the current life insurance.  # noqa: E501

        :return: The total_life_insurance_needed of this LifeInsuranceNeedsResponse.  # noqa: E501
        :rtype: float
        """
        return self._total_life_insurance_needed

    @total_life_insurance_needed.setter
    def total_life_insurance_needed(self, total_life_insurance_needed):
        """Sets the total_life_insurance_needed of this LifeInsuranceNeedsResponse.

        The total life insurance needed by the user, including the current life insurance.  # noqa: E501

        :param total_life_insurance_needed: The total_life_insurance_needed of this LifeInsuranceNeedsResponse.  # noqa: E501
        :type: float
        """
        if total_life_insurance_needed is None:
            raise ValueError("Invalid value for `total_life_insurance_needed`, must not be `None`")  # noqa: E501
        if total_life_insurance_needed is not None and total_life_insurance_needed < 0:  # noqa: E501
            raise ValueError("Invalid value for `total_life_insurance_needed`, must be a value greater than or equal to `0`")  # noqa: E501

        self._total_life_insurance_needed = total_life_insurance_needed

    @property
    def life_insurance_needs_breakdown(self):
        """Gets the life_insurance_needs_breakdown of this LifeInsuranceNeedsResponse.  # noqa: E501


        :return: The life_insurance_needs_breakdown of this LifeInsuranceNeedsResponse.  # noqa: E501
        :rtype: LifeInsuranceNeedsBreakdown
        """
        return self._life_insurance_needs_breakdown

    @life_insurance_needs_breakdown.setter
    def life_insurance_needs_breakdown(self, life_insurance_needs_breakdown):
        """Sets the life_insurance_needs_breakdown of this LifeInsuranceNeedsResponse.


        :param life_insurance_needs_breakdown: The life_insurance_needs_breakdown of this LifeInsuranceNeedsResponse.  # noqa: E501
        :type: LifeInsuranceNeedsBreakdown
        """
        if life_insurance_needs_breakdown is None:
            raise ValueError("Invalid value for `life_insurance_needs_breakdown`, must not be `None`")  # noqa: E501

        self._life_insurance_needs_breakdown = life_insurance_needs_breakdown

    @property
    def return_details(self):
        """Gets the return_details of this LifeInsuranceNeedsResponse.  # noqa: E501


        :return: The return_details of this LifeInsuranceNeedsResponse.  # noqa: E501
        :rtype: dict(str, LifeInsuranceReturnDetail)
        """
        return self._return_details

    @return_details.setter
    def return_details(self, return_details):
        """Sets the return_details of this LifeInsuranceNeedsResponse.


        :param return_details: The return_details of this LifeInsuranceNeedsResponse.  # noqa: E501
        :type: dict(str, LifeInsuranceReturnDetail)
        """
        if return_details is None:
            raise ValueError("Invalid value for `return_details`, must not be `None`")  # noqa: E501

        self._return_details = return_details

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
        if issubclass(LifeInsuranceNeedsResponse, dict):
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
        if not isinstance(other, LifeInsuranceNeedsResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
