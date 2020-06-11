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


class ModelComment(object):
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
        'comment': 'str',
        'create_date': 'datetime',
        '_date': 'datetime',
        'id': 'str',
        'metadata': 'dict(str, str)',
        'model_id': 'str',
        'secondary_id': 'str',
        'update_date': 'datetime'
    }

    attribute_map = {
        'comment': 'comment',
        'create_date': 'create_date',
        '_date': 'date',
        'id': 'id',
        'metadata': 'metadata',
        'model_id': 'model_id',
        'secondary_id': 'secondary_id',
        'update_date': 'update_date'
    }

    def __init__(self, comment=None, create_date=None, _date=None, id=None, metadata=None, model_id=None, secondary_id=None, update_date=None):  # noqa: E501
        """ModelComment - a model defined in Swagger"""  # noqa: E501

        self._comment = None
        self._create_date = None
        self.__date = None
        self._id = None
        self._metadata = None
        self._model_id = None
        self._secondary_id = None
        self._update_date = None
        self.discriminator = None

        self.comment = comment
        if create_date is not None:
            self.create_date = create_date
        self._date = _date
        if id is not None:
            self.id = id
        if metadata is not None:
            self.metadata = metadata
        self.model_id = model_id
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if update_date is not None:
            self.update_date = update_date

    @property
    def comment(self):
        """Gets the comment of this ModelComment.  # noqa: E501

        Model Comment comment  # noqa: E501

        :return: The comment of this ModelComment.  # noqa: E501
        :rtype: str
        """
        return self._comment

    @comment.setter
    def comment(self, comment):
        """Sets the comment of this ModelComment.

        Model Comment comment  # noqa: E501

        :param comment: The comment of this ModelComment.  # noqa: E501
        :type: str
        """
        if comment is None:
            raise ValueError("Invalid value for `comment`, must not be `None`")  # noqa: E501

        self._comment = comment

    @property
    def create_date(self):
        """Gets the create_date of this ModelComment.  # noqa: E501


        :return: The create_date of this ModelComment.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this ModelComment.


        :param create_date: The create_date of this ModelComment.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def _date(self):
        """Gets the _date of this ModelComment.  # noqa: E501

        Model Comment date  # noqa: E501

        :return: The _date of this ModelComment.  # noqa: E501
        :rtype: datetime
        """
        return self.__date

    @_date.setter
    def _date(self, _date):
        """Sets the _date of this ModelComment.

        Model Comment date  # noqa: E501

        :param _date: The _date of this ModelComment.  # noqa: E501
        :type: datetime
        """
        if _date is None:
            raise ValueError("Invalid value for `_date`, must not be `None`")  # noqa: E501

        self.__date = _date

    @property
    def id(self):
        """Gets the id of this ModelComment.  # noqa: E501


        :return: The id of this ModelComment.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this ModelComment.


        :param id: The id of this ModelComment.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def metadata(self):
        """Gets the metadata of this ModelComment.  # noqa: E501


        :return: The metadata of this ModelComment.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this ModelComment.


        :param metadata: The metadata of this ModelComment.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def model_id(self):
        """Gets the model_id of this ModelComment.  # noqa: E501

        Model Comment Model Id  # noqa: E501

        :return: The model_id of this ModelComment.  # noqa: E501
        :rtype: str
        """
        return self._model_id

    @model_id.setter
    def model_id(self, model_id):
        """Sets the model_id of this ModelComment.

        Model Comment Model Id  # noqa: E501

        :param model_id: The model_id of this ModelComment.  # noqa: E501
        :type: str
        """
        if model_id is None:
            raise ValueError("Invalid value for `model_id`, must not be `None`")  # noqa: E501

        self._model_id = model_id

    @property
    def secondary_id(self):
        """Gets the secondary_id of this ModelComment.  # noqa: E501


        :return: The secondary_id of this ModelComment.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this ModelComment.


        :param secondary_id: The secondary_id of this ModelComment.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def update_date(self):
        """Gets the update_date of this ModelComment.  # noqa: E501


        :return: The update_date of this ModelComment.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this ModelComment.


        :param update_date: The update_date of this ModelComment.  # noqa: E501
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
        if issubclass(ModelComment, dict):
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
        if not isinstance(other, ModelComment):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
