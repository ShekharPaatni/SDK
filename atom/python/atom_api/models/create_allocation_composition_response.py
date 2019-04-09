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

from atom_api.models.allocation_composition_payload import AllocationCompositionPayload  # noqa: F401,E501


class CreateAllocationCompositionResponse(object):
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
        'model_id': 'str',
        'current_weight': 'float',
        'strategic_weight': 'float',
        '_date': 'date',
        'core': 'bool',
        'id': 'str',
        'create_date': 'str'
    }

    attribute_map = {
        'allocation_id': 'allocation_id',
        'model_id': 'model_id',
        'current_weight': 'current_weight',
        'strategic_weight': 'strategic_weight',
        '_date': 'date',
        'core': 'core',
        'id': 'id',
        'create_date': 'create_date'
    }

    def __init__(self, allocation_id=None, model_id=None, current_weight=None, strategic_weight=None, _date=None, core=False, id=None, create_date=None):  # noqa: E501
        """CreateAllocationCompositionResponse - a model defined in Swagger"""  # noqa: E501

        self._allocation_id = None
        self._model_id = None
        self._current_weight = None
        self._strategic_weight = None
        self.__date = None
        self._core = None
        self._id = None
        self._create_date = None
        self.discriminator = None

        self.allocation_id = allocation_id
        self.model_id = model_id
        self.current_weight = current_weight
        self.strategic_weight = strategic_weight
        self._date = _date
        if core is not None:
            self.core = core
        if id is not None:
            self.id = id
        if create_date is not None:
            self.create_date = create_date

    @property
    def allocation_id(self):
        """Gets the allocation_id of this CreateAllocationCompositionResponse.  # noqa: E501

        The ID of the allocation for which you are adding a composition record  # noqa: E501

        :return: The allocation_id of this CreateAllocationCompositionResponse.  # noqa: E501
        :rtype: str
        """
        return self._allocation_id

    @allocation_id.setter
    def allocation_id(self, allocation_id):
        """Sets the allocation_id of this CreateAllocationCompositionResponse.

        The ID of the allocation for which you are adding a composition record  # noqa: E501

        :param allocation_id: The allocation_id of this CreateAllocationCompositionResponse.  # noqa: E501
        :type: str
        """
        if allocation_id is None:
            raise ValueError("Invalid value for `allocation_id`, must not be `None`")  # noqa: E501

        self._allocation_id = allocation_id

    @property
    def model_id(self):
        """Gets the model_id of this CreateAllocationCompositionResponse.  # noqa: E501

        The ID of the model that is assigned to the allocation  # noqa: E501

        :return: The model_id of this CreateAllocationCompositionResponse.  # noqa: E501
        :rtype: str
        """
        return self._model_id

    @model_id.setter
    def model_id(self, model_id):
        """Sets the model_id of this CreateAllocationCompositionResponse.

        The ID of the model that is assigned to the allocation  # noqa: E501

        :param model_id: The model_id of this CreateAllocationCompositionResponse.  # noqa: E501
        :type: str
        """
        if model_id is None:
            raise ValueError("Invalid value for `model_id`, must not be `None`")  # noqa: E501

        self._model_id = model_id

    @property
    def current_weight(self):
        """Gets the current_weight of this CreateAllocationCompositionResponse.  # noqa: E501

        The current weight of the model as a percentage of the allocation’s total value; ex. 20 representing 20%. The current weights of all the models must add up to 100. If the model is the only one, enter 100  # noqa: E501

        :return: The current_weight of this CreateAllocationCompositionResponse.  # noqa: E501
        :rtype: float
        """
        return self._current_weight

    @current_weight.setter
    def current_weight(self, current_weight):
        """Sets the current_weight of this CreateAllocationCompositionResponse.

        The current weight of the model as a percentage of the allocation’s total value; ex. 20 representing 20%. The current weights of all the models must add up to 100. If the model is the only one, enter 100  # noqa: E501

        :param current_weight: The current_weight of this CreateAllocationCompositionResponse.  # noqa: E501
        :type: float
        """
        if current_weight is None:
            raise ValueError("Invalid value for `current_weight`, must not be `None`")  # noqa: E501

        self._current_weight = current_weight

    @property
    def strategic_weight(self):
        """Gets the strategic_weight of this CreateAllocationCompositionResponse.  # noqa: E501

        The strategic weight of the model as a percentage of the allocation’s total value; ex. 20 representing 20%. The strategic weights of all the models must add up to 100. If the model is the only one, enter 100  # noqa: E501

        :return: The strategic_weight of this CreateAllocationCompositionResponse.  # noqa: E501
        :rtype: float
        """
        return self._strategic_weight

    @strategic_weight.setter
    def strategic_weight(self, strategic_weight):
        """Sets the strategic_weight of this CreateAllocationCompositionResponse.

        The strategic weight of the model as a percentage of the allocation’s total value; ex. 20 representing 20%. The strategic weights of all the models must add up to 100. If the model is the only one, enter 100  # noqa: E501

        :param strategic_weight: The strategic_weight of this CreateAllocationCompositionResponse.  # noqa: E501
        :type: float
        """
        if strategic_weight is None:
            raise ValueError("Invalid value for `strategic_weight`, must not be `None`")  # noqa: E501

        self._strategic_weight = strategic_weight

    @property
    def _date(self):
        """Gets the _date of this CreateAllocationCompositionResponse.  # noqa: E501

        The date for this allocation composition record  # noqa: E501

        :return: The _date of this CreateAllocationCompositionResponse.  # noqa: E501
        :rtype: date
        """
        return self.__date

    @_date.setter
    def _date(self, _date):
        """Sets the _date of this CreateAllocationCompositionResponse.

        The date for this allocation composition record  # noqa: E501

        :param _date: The _date of this CreateAllocationCompositionResponse.  # noqa: E501
        :type: date
        """
        if _date is None:
            raise ValueError("Invalid value for `_date`, must not be `None`")  # noqa: E501

        self.__date = _date

    @property
    def core(self):
        """Gets the core of this CreateAllocationCompositionResponse.  # noqa: E501

        Indicator if the model_id is a core model for core-satellite investing. Defaults to false which means it is not a core model  # noqa: E501

        :return: The core of this CreateAllocationCompositionResponse.  # noqa: E501
        :rtype: bool
        """
        return self._core

    @core.setter
    def core(self, core):
        """Sets the core of this CreateAllocationCompositionResponse.

        Indicator if the model_id is a core model for core-satellite investing. Defaults to false which means it is not a core model  # noqa: E501

        :param core: The core of this CreateAllocationCompositionResponse.  # noqa: E501
        :type: bool
        """

        self._core = core

    @property
    def id(self):
        """Gets the id of this CreateAllocationCompositionResponse.  # noqa: E501

        ID of the allocation composition  # noqa: E501

        :return: The id of this CreateAllocationCompositionResponse.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this CreateAllocationCompositionResponse.

        ID of the allocation composition  # noqa: E501

        :param id: The id of this CreateAllocationCompositionResponse.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def create_date(self):
        """Gets the create_date of this CreateAllocationCompositionResponse.  # noqa: E501

        Datetime the allocation composition was created  # noqa: E501

        :return: The create_date of this CreateAllocationCompositionResponse.  # noqa: E501
        :rtype: str
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this CreateAllocationCompositionResponse.

        Datetime the allocation composition was created  # noqa: E501

        :param create_date: The create_date of this CreateAllocationCompositionResponse.  # noqa: E501
        :type: str
        """

        self._create_date = create_date

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
        if issubclass(CreateAllocationCompositionResponse, dict):
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
        if not isinstance(other, CreateAllocationCompositionResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
