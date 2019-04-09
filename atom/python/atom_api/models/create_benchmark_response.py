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

from atom_api.models.benchmark_payload import BenchmarkPayload  # noqa: F401,E501
from atom_api.models.benchmark_payload_composition import BenchmarkPayloadComposition  # noqa: F401,E501
from atom_api.models.secondary_id import SecondaryId  # noqa: F401,E501


class CreateBenchmarkResponse(object):
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
        'name': 'str',
        'composition': 'list[BenchmarkPayloadComposition]',
        'description': 'str',
        'client_id': 'str',
        'is_active': 'bool',
        'secondary_id': 'SecondaryId',
        'id': 'str',
        'create_date': 'str'
    }

    attribute_map = {
        'name': 'name',
        'composition': 'composition',
        'description': 'description',
        'client_id': 'client_id',
        'is_active': 'is_active',
        'secondary_id': 'secondary_id',
        'id': 'id',
        'create_date': 'create_date'
    }

    def __init__(self, name=None, composition=None, description=None, client_id=None, is_active=True, secondary_id=None, id=None, create_date=None):  # noqa: E501
        """CreateBenchmarkResponse - a model defined in Swagger"""  # noqa: E501

        self._name = None
        self._composition = None
        self._description = None
        self._client_id = None
        self._is_active = None
        self._secondary_id = None
        self._id = None
        self._create_date = None
        self.discriminator = None

        self.name = name
        if composition is not None:
            self.composition = composition
        if description is not None:
            self.description = description
        if client_id is not None:
            self.client_id = client_id
        if is_active is not None:
            self.is_active = is_active
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if id is not None:
            self.id = id
        if create_date is not None:
            self.create_date = create_date

    @property
    def name(self):
        """Gets the name of this CreateBenchmarkResponse.  # noqa: E501

        Name of the benchmark  # noqa: E501

        :return: The name of this CreateBenchmarkResponse.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this CreateBenchmarkResponse.

        Name of the benchmark  # noqa: E501

        :param name: The name of this CreateBenchmarkResponse.  # noqa: E501
        :type: str
        """
        if name is None:
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def composition(self):
        """Gets the composition of this CreateBenchmarkResponse.  # noqa: E501


        :return: The composition of this CreateBenchmarkResponse.  # noqa: E501
        :rtype: list[BenchmarkPayloadComposition]
        """
        return self._composition

    @composition.setter
    def composition(self, composition):
        """Sets the composition of this CreateBenchmarkResponse.


        :param composition: The composition of this CreateBenchmarkResponse.  # noqa: E501
        :type: list[BenchmarkPayloadComposition]
        """

        self._composition = composition

    @property
    def description(self):
        """Gets the description of this CreateBenchmarkResponse.  # noqa: E501

        Description of the benchmark such as the market segment that it represents  # noqa: E501

        :return: The description of this CreateBenchmarkResponse.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this CreateBenchmarkResponse.

        Description of the benchmark such as the market segment that it represents  # noqa: E501

        :param description: The description of this CreateBenchmarkResponse.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def client_id(self):
        """Gets the client_id of this CreateBenchmarkResponse.  # noqa: E501

        The ID of the client to which the benchmark belongs, if any  # noqa: E501

        :return: The client_id of this CreateBenchmarkResponse.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this CreateBenchmarkResponse.

        The ID of the client to which the benchmark belongs, if any  # noqa: E501

        :param client_id: The client_id of this CreateBenchmarkResponse.  # noqa: E501
        :type: str
        """

        self._client_id = client_id

    @property
    def is_active(self):
        """Gets the is_active of this CreateBenchmarkResponse.  # noqa: E501

        Indicates if the benchmark is active. Defaults to true which means it is active  # noqa: E501

        :return: The is_active of this CreateBenchmarkResponse.  # noqa: E501
        :rtype: bool
        """
        return self._is_active

    @is_active.setter
    def is_active(self, is_active):
        """Sets the is_active of this CreateBenchmarkResponse.

        Indicates if the benchmark is active. Defaults to true which means it is active  # noqa: E501

        :param is_active: The is_active of this CreateBenchmarkResponse.  # noqa: E501
        :type: bool
        """

        self._is_active = is_active

    @property
    def secondary_id(self):
        """Gets the secondary_id of this CreateBenchmarkResponse.  # noqa: E501


        :return: The secondary_id of this CreateBenchmarkResponse.  # noqa: E501
        :rtype: SecondaryId
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this CreateBenchmarkResponse.


        :param secondary_id: The secondary_id of this CreateBenchmarkResponse.  # noqa: E501
        :type: SecondaryId
        """

        self._secondary_id = secondary_id

    @property
    def id(self):
        """Gets the id of this CreateBenchmarkResponse.  # noqa: E501

        ID of the benchmark record  # noqa: E501

        :return: The id of this CreateBenchmarkResponse.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this CreateBenchmarkResponse.

        ID of the benchmark record  # noqa: E501

        :param id: The id of this CreateBenchmarkResponse.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def create_date(self):
        """Gets the create_date of this CreateBenchmarkResponse.  # noqa: E501

        Datetime the benchmark was created  # noqa: E501

        :return: The create_date of this CreateBenchmarkResponse.  # noqa: E501
        :rtype: str
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this CreateBenchmarkResponse.

        Datetime the benchmark was created  # noqa: E501

        :param create_date: The create_date of this CreateBenchmarkResponse.  # noqa: E501
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
        if issubclass(CreateBenchmarkResponse, dict):
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
        if not isinstance(other, CreateBenchmarkResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
