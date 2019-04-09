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

from atom_api.models.model_comment_payload import ModelCommentPayload  # noqa: F401,E501
from atom_api.models.secondary_id import SecondaryId  # noqa: F401,E501


class CreateModelCommentResponse(object):
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
        'model_id': 'str',
        'comment': 'str',
        '_date': 'date',
        'secondary_id': 'SecondaryId',
        'id': 'str',
        'create_date': 'str'
    }

    attribute_map = {
        'model_id': 'model_id',
        'comment': 'comment',
        '_date': 'date',
        'secondary_id': 'secondary_id',
        'id': 'id',
        'create_date': 'create_date'
    }

    def __init__(self, model_id=None, comment=None, _date=None, secondary_id=None, id=None, create_date=None):  # noqa: E501
        """CreateModelCommentResponse - a model defined in Swagger"""  # noqa: E501

        self._model_id = None
        self._comment = None
        self.__date = None
        self._secondary_id = None
        self._id = None
        self._create_date = None
        self.discriminator = None

        self.model_id = model_id
        self.comment = comment
        self._date = _date
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if id is not None:
            self.id = id
        if create_date is not None:
            self.create_date = create_date

    @property
    def model_id(self):
        """Gets the model_id of this CreateModelCommentResponse.  # noqa: E501

        The ID of the model that the comment falls under  # noqa: E501

        :return: The model_id of this CreateModelCommentResponse.  # noqa: E501
        :rtype: str
        """
        return self._model_id

    @model_id.setter
    def model_id(self, model_id):
        """Sets the model_id of this CreateModelCommentResponse.

        The ID of the model that the comment falls under  # noqa: E501

        :param model_id: The model_id of this CreateModelCommentResponse.  # noqa: E501
        :type: str
        """
        if model_id is None:
            raise ValueError("Invalid value for `model_id`, must not be `None`")  # noqa: E501

        self._model_id = model_id

    @property
    def comment(self):
        """Gets the comment of this CreateModelCommentResponse.  # noqa: E501

        Body of the comment  # noqa: E501

        :return: The comment of this CreateModelCommentResponse.  # noqa: E501
        :rtype: str
        """
        return self._comment

    @comment.setter
    def comment(self, comment):
        """Sets the comment of this CreateModelCommentResponse.

        Body of the comment  # noqa: E501

        :param comment: The comment of this CreateModelCommentResponse.  # noqa: E501
        :type: str
        """
        if comment is None:
            raise ValueError("Invalid value for `comment`, must not be `None`")  # noqa: E501

        self._comment = comment

    @property
    def _date(self):
        """Gets the _date of this CreateModelCommentResponse.  # noqa: E501

        Date for when the comment applies  # noqa: E501

        :return: The _date of this CreateModelCommentResponse.  # noqa: E501
        :rtype: date
        """
        return self.__date

    @_date.setter
    def _date(self, _date):
        """Sets the _date of this CreateModelCommentResponse.

        Date for when the comment applies  # noqa: E501

        :param _date: The _date of this CreateModelCommentResponse.  # noqa: E501
        :type: date
        """
        if _date is None:
            raise ValueError("Invalid value for `_date`, must not be `None`")  # noqa: E501

        self.__date = _date

    @property
    def secondary_id(self):
        """Gets the secondary_id of this CreateModelCommentResponse.  # noqa: E501


        :return: The secondary_id of this CreateModelCommentResponse.  # noqa: E501
        :rtype: SecondaryId
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this CreateModelCommentResponse.


        :param secondary_id: The secondary_id of this CreateModelCommentResponse.  # noqa: E501
        :type: SecondaryId
        """

        self._secondary_id = secondary_id

    @property
    def id(self):
        """Gets the id of this CreateModelCommentResponse.  # noqa: E501

        ID of the model commentary  # noqa: E501

        :return: The id of this CreateModelCommentResponse.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this CreateModelCommentResponse.

        ID of the model commentary  # noqa: E501

        :param id: The id of this CreateModelCommentResponse.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def create_date(self):
        """Gets the create_date of this CreateModelCommentResponse.  # noqa: E501

        Datetime the model commentary was created  # noqa: E501

        :return: The create_date of this CreateModelCommentResponse.  # noqa: E501
        :rtype: str
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this CreateModelCommentResponse.

        Datetime the model commentary was created  # noqa: E501

        :param create_date: The create_date of this CreateModelCommentResponse.  # noqa: E501
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
        if issubclass(CreateModelCommentResponse, dict):
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
        if not isinstance(other, CreateModelCommentResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
